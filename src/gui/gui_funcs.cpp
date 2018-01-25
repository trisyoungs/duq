/*
	*** dUQ Main Window - Functions
	*** src/gui/gui_funcs.cpp
	Copyright T. Youngs 2012-2018

	This file is part of dUQ.

	dUQ is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	dUQ is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with dUQ.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "main/duq.h"
#include "gui/gui.h"
#include "gui/browser.h"
#include "gui/configurationtab.h"
#include "gui/mastertermswidget.h"
#include "gui/modulecontrolwidget.h"
#include "gui/pairpotentialwidget.h"
#include "gui/processingtab.h"
#include "gui/setuptab.h"
#include "gui/subwidget.h"
#include "gui/thread.hui"
#include "gui/workspacetab.h"
#include "base/lineparser.h"
#include <QCloseEvent>
#include <QMdiSubWindow>

// Constructor
DUQWindow::DUQWindow(DUQ& duq) : QMainWindow(NULL), duq_(duq), threadController_(this, duq)
{
	// Initialise resources
	Q_INIT_RESOURCE(icons);
	Q_INIT_RESOURCE(uchroma);

	// Set up user interface
	ui.setupUi(this);

	// Connect signals to thread controller
	connect(this, SIGNAL(iterate(int)), &threadController_, SLOT(iterate(int)));
	connect(this, SIGNAL(stopIterating()), &threadController_, SLOT(stopIterating()));

	duqState_ = StoppedState;

	refreshing_ = false;
}

// Destructor
DUQWindow::~DUQWindow()
{
}

// Return reference to dUQ
DUQ& DUQWindow::duq()
{
	return duq_;
}

// Catch window close event
void DUQWindow::closeEvent(QCloseEvent* event)
{
	// Save the state before we go...
	saveWindowLayout();

	event->accept();
}

void DUQWindow::resizeEvent(QResizeEvent* event)
{
}

/*
 * File
 */

bool DUQWindow::openFile(const char* inputFile, bool ignoreRestartFile, bool ignoreLayoutFile)
{
	// Clear any existing tabs etc.
	clearAllTabs();

	// Clear duq itself
	duq_.clear();

	// Load the input file
	Messenger::banner("Parse Input File");
	if (!duq_.loadInput(inputFile))
	{
		Messenger::error("Input file contained errors.\n");
		duq_.clear();
		return false;
	}

	// Load restart file if it exists
	Messenger::banner("Parse Restart File");
	if (!ignoreRestartFile)
	{
		CharString restartFile("%s.restart", inputFile);
		if (DUQSys::fileExists(restartFile))
		{
			Messenger::print("\nRestart file '%s' exists and will be loaded.\n", restartFile.get());
			if (!duq_.loadRestart(restartFile.get()))
			{
				Messenger::error("Restart file contained errors.\n");
				ProcessPool::finalise();
				return 1;
			}
		}
		else Messenger::print("\nRestart file '%s' does not exist.\n", restartFile.get());
	}
	else Messenger::print("\nRestart file (if it exists) will be ignored.\n");

	// Initialise random seed
	if (duq_.seed() == -1) srand( (unsigned)time( NULL ) );
	else srand(duq_.seed());

	// Perform simulation set up (all processes)
	Messenger::banner("Setting Up Simulation");
	if (!duq_.setUpSimulation())
	{
		Messenger::print("Failed to set up simulation.\n");
		ProcessPool::finalise();
		return 1;
	}

	// Set up parallel comms / limits etc.
	Messenger::banner("Setting Up Parallelism");
	if (!duq_.setUpMPIPools())
	{
		Messenger::print("Failed to set up parallel communications.\n");
		ProcessPool::finalise();
		Messenger::ceaseRedirect();
		return 1;
	}

	refreshing_ = true;

	// Add on necessary tabs
	addSetupTab();
	ListIterator<Configuration> configIterator(duq_.configurations());
	while (Configuration* cfg = configIterator.iterate()) addConfigurationTab(cfg);
	addProcessingTab();

	refreshing_ = false;

	// Does a window state exist for this input file?
	windowLayoutFilename_.sprintf("%s.state", duq_.filename());

	// Try to load in the window state file
	if (DUQSys::fileExists(windowLayoutFilename_) && (!ignoreLayoutFile)) loadWindowLayout();

	return true;
}

/*
 * Update Functions
 */

// Refresh all displayed widgets
void DUQWindow::updateControls()
{
	// Iteration Panel
	ui.IterationNumberLabel->setText(DUQSys::itoa(duq_.iteration()));
	ui.IterationLimitLabel->setText(duq_.maxIterations() == -1 ?  QString(QChar(0x221E)) : QString::number(duq_.maxIterations()));

	// Loop over tabs
	for (MainTab* tab = tabs_.first(); tab != NULL; tab = tab->next) tab->updateControls();
}

// Link output handler in to the Messenger
void DUQWindow::addOutputHandler()
{
	Messenger::setOutputHandler(&outputHandler_);
	connect(&outputHandler_, SIGNAL(printText(const QString&)), ui.MessagesBrowser, SLOT(append(const QString&)));
}

/*
 * Main Menu
 */

void DUQWindow::menuItemTriggered(bool checked)
{
	// Get the sender QAction
	QAction* action = (QAction*) sender();
	if (!action) return;

	printf("Action = %p\n");
}

// Update menu items (after change in Modules etc.)
void DUQWindow::updateMenuItems()
{
	// Update the WorkSpaceAddWidget submenu
	QAction* subMenuAction = ui.WorkspaceAddWidgetAction->menuAction();
	if (subMenuAction) ui.WorkspaceAddWidgetAction->removeAction(subMenuAction);

	QFont italicFont = ui.WorkspaceAddWidgetAction->font();
	italicFont.setItalic(true);

	// General widgets, not associated to a module
	QMenu* subMenu = new QMenu;
	QAction* menuItem = subMenu->addAction("General");
	menuItem->setFont(italicFont);
	menuItem->setEnabled(false);
	menuItem = subMenu->addAction("PairPotential");
	connect(menuItem, SIGNAL(triggered(bool)), this, SLOT(menuItemTriggered(bool)));
	
}

/*
 * Run Control
 */

// Return current state of dUQ
DUQWindow::DUQState DUQWindow::duqState() const
{
	return duqState_;
}


void DUQWindow::on_ControlRunButton_clicked(bool checked)
{
	// Prepare the GUI
	setWidgetsForRun();

	duqState_ = DUQWindow::RunningState;

	emit iterate(-1);
}

void DUQWindow::on_ControlStepButton_clicked(bool checked)
{
	// Prepare the GUI
	setWidgetsForRun();

	duqState_ = DUQWindow::RunningState;

	emit iterate(1);
}

void DUQWindow::on_ControlStepFiveButton_clicked(bool checked)
{
	// Prepare the GUI
	setWidgetsForRun();

	duqState_ = DUQWindow::RunningState;

	emit iterate(5);
}

void DUQWindow::on_ControlPauseButton_clicked(bool checked)
{
	duqState_ = DUQWindow::StoppedState;

	emit stopIterating();
}

void DUQWindow::on_ControlReloadButton_clicked(bool checked)
{
}

// Set widgets ready for the main code to be run
void DUQWindow::setWidgetsForRun()
{
	// Disable run and step buttons, and enable pause button
	ui.ControlRunButton->setEnabled(false);
	ui.ControlStepButton->setEnabled(false);
	ui.ControlStepFiveButton->setEnabled(false);
	ui.ControlPauseButton->setEnabled(true);

	// Disable sensitive controls in tabs
	for (MainTab* tab = tabs_.first(); tab != NULL; tab = tab->next) tab->disableSensitiveControls();
}

// Set widgets after the main code has been run
void DUQWindow::setWidgetsAfterRun()
{
	// Enable run and step buttons, and disable pause button
	ui.ControlRunButton->setEnabled(true);
	ui.ControlStepButton->setEnabled(true);
	ui.ControlStepFiveButton->setEnabled(true);
	ui.ControlPauseButton->setEnabled(false);

	// Enable necessary controls in tabs
	for (MainTab* tab = tabs_.first(); tab != NULL; tab = tab->next) tab->enableSensitiveControls();
}

// All iterations requested are complete
void DUQWindow::iterationsComplete()
{
	setWidgetsAfterRun();
}

/*
 * Tab Management
 */

void DUQWindow::on_MainTabs_currentChanged(int index)
{
	if (refreshing_) return;

	// Current tab index changed
	if (index >= tabs_.nItems())
	{
		Messenger::error("Something has gone wrong - tab index changed to %i, but there are only %i in the list.\n", index, tabs_.nItems());
		return;
	}

	MainTab* currentTab = tabs_[index];

	// Set controls in Workspace menu
	// -- Workspace name
	ui.WorkspaceCurrentAction->setText(index == -1 ? "<No Current Workspace>" : tabs_[index]->title());
	// -- Disable controls if the current tab has no valid SubWindow (MDI) area
	ui.WorkspaceAddWidgetAction->setEnabled(currentTab->hasSubWindowArea());
}

// Clear all tabs, except the "Setup" tab
void DUQWindow::clearAllTabs()
{
	// Delete all our referenced tabs - removal of the tab and widget will be handled by the destructor
	tabs_.clear();
}

// Add setup tab
void DUQWindow::addSetupTab()
{
	MainTab* tab = new SetupTab(this, duq_, ui.MainTabs, "Setup");
	tabs_.own(tab);
}

// Add tab for specified Configuration target
void DUQWindow::addConfigurationTab(Configuration* cfg)
{
	MainTab* tab = new ConfigurationTab(this, duq_, ui.MainTabs, cfg->name(), cfg);
	tabs_.own(tab);
}

// Add processing workspace
void DUQWindow::addProcessingTab()
{
	MainTab* tab = new ProcessingTab(this, duq_, ui.MainTabs, "Processing");
	tabs_.own(tab);
}

// Add on an empty workspace tab
MainTab* DUQWindow::addWorkspaceTab(const char* title)
{
	// Check that a tab with this title doesn't already exist
	MainTab* tab = findTab(title);
	if (!tab)
	{
		tab = new WorkspaceTab(this, duq_, ui.MainTabs, title);
		tabs_.own(tab);
	}
	else Messenger::printVerbose("Tab '%s' already exists, so returning that instead...\n", title);

	return tab;
}

// Find tab with title specified
MainTab* DUQWindow::findTab(const char* title)
{
	for (MainTab* tab = tabs_.first() ; tab != NULL; tab = tab->next) if (DUQSys::sameString(title, tab->title())) return tab;

	return NULL;
}

/*
 * Window State
 */

// Save current window layout
bool DUQWindow::saveWindowLayout()
{
	// Open file for writing
	LineParser stateParser;
	stateParser.openOutput(windowLayoutFilename_);
	if (!stateParser.isFileGoodForWriting()) return false;

	// Loop over tabs
	for (MainTab* tab = tabs_.first(); tab != NULL; tab = tab->next) if (tab->writeState(stateParser)) return false;

	stateParser.closeFiles();

	return true;
}

// Load window layout
bool DUQWindow::loadWindowLayout()
{
	// Open file for reading
	LineParser stateParser;
	stateParser.openInput(windowLayoutFilename_);
	if (!stateParser.isFileGoodForReading()) return false;

	while (!stateParser.eofOrBlank())
	{
		// Parse the line
		if (stateParser.getArgsDelim(LineParser::UseQuotes) != LineParser::Success) return false;

		SubWidget* subWidget = NULL;
		QMdiSubWindow* subWindow = NULL;

		// The line should contain the title of the target mdiArea, the type of the widget we should create in a subwindow, and the subwindow title
		MainTab* targetTab = findTab(stateParser.argc(0));
		if (!targetTab)
		{
			Messenger::printVerbose("Tab titled '%s' does not yet exist, so we will create it now...\n");
			targetTab = addWorkspaceTab(stateParser.argc(0));
		}

		// We now check the availability of an area for SubWindows in the tab.
		// If there is one then we must create the window and add it to the tab before reading its state.
		// If not, we search for the named sub *widget*, which should already exist in the tab.
		if (targetTab->hasSubWindowArea())
		{
			if (DUQSys::sameString(stateParser.argc(1), "PairPotential"))
			{
				PairPotentialWidget* ppWidget = new PairPotentialWidget(NULL, NULL, duq_, stateParser.argc(2));
				subWindow = targetTab->addSubWindow(ppWidget, NULL);
				subWidget = ppWidget;
			}
			else if (DUQSys::sameString(stateParser.argc(1), "MasterTerms"))
			{
				MasterTermsWidget* masterTermsWidget = new MasterTermsWidget(NULL, duq_, stateParser.argc(2));
				subWindow = targetTab->addSubWindow(masterTermsWidget, NULL);
				subWidget = masterTermsWidget;
			}
			else if (DUQSys::sameString(stateParser.argc(1), "ModuleControl"))
			{
				ModuleControlWidget* moduleWidget = new ModuleControlWidget(NULL, NULL, duq_, stateParser.argc(2));
				connect(moduleWidget, SIGNAL(moduleRun()), this, SLOT(updateControls()));
				subWindow = targetTab->addSubWindow(moduleWidget, NULL);
				subWidget = moduleWidget;
			}
			else
			{
				Messenger::error("Couldn't read state information - unrecognised widget type '%s' encountered.\n", stateParser.argc(1));
				return false;
			}
		}
		else
		{
			// No SubWindow area, so just try to find the named widget (which should already exist)
			subWidget = targetTab->findSubWidget(stateParser.argc(2));
			if (!subWidget)
			{
				Messenger::error("Couldn't read state information - widget '%s' not found in tab '%s'.\n", stateParser.argc(2), stateParser.argc(0));
				return false;
			}
		}


		// Read in the widget's geometry / state / flags (depending on whether it went into a new SubWindow or is just a SubWidget)
		if (targetTab->hasSubWindowArea())
		{
			if (stateParser.getArgsDelim(LineParser::Defaults) != LineParser::Success) return false;
			subWindow->setGeometry(stateParser.argi(0), stateParser.argi(1), stateParser.argi(2), stateParser.argi(3));
			// -- Is the window maximised, or shaded?
			if (stateParser.argb(4)) subWindow->showMaximized();
			else if (stateParser.argb(5)) subWindow->showShaded();
		}
		else
		{
			// Discard line, which is not currently used (left in for future use)
			if (stateParser.skipLines(1) != LineParser::Success) return false;
		}

		// Now call the widget's local readState()
		if (!subWidget->readState(stateParser)) return false;
	}

	return true;
}
