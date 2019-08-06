/*
	*** Configuration Tab
	*** src/gui/configurationtab.h
	Copyright T. Youngs 2012-2019

	This file is part of Dissolve.

	Dissolve is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Dissolve is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Dissolve.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef DISSOLVE_CONFIGURATIONTAB_H
#define DISSOLVE_CONFIGURATIONTAB_H

#include "gui/ui_configurationtab.h"
#include "gui/maintab.h"
#include "gui/widgets/subwidget.h"

// Forward Declarations
class Configuration;
class SpeciesInfo;

// Configuration Tab
class ConfigurationTab : public QWidget, public ListItem<ConfigurationTab>, public MainTab
{
	// All Qt declarations derived from QObject must include this macro
	Q_OBJECT

	public:
	// Constructor / Destructor
	ConfigurationTab(DissolveWindow* dissolveWindow, Dissolve& dissolve, QTabWidget* parent, const char* title, Configuration* cfg);
	~ConfigurationTab();


	/*
	 * UI
	 */
	private:
	// Main form declaration
	Ui::ConfigurationTab ui_;


	/*
	 * Data
	 */
	public:
	// Return tab type
	const char* tabType() const;


	/*
	 * Configuration Target
	 */
	private:
	// Configuration data to display
	Configuration* configuration_;

	public:
	// Return displayed Configuration
	const Configuration* configuration() const;


	/*
	 * SubWidget / SubWindow Handling
	 */
	public:
	// Return the tab's SubWindow area, if it has one
	QMdiArea* subWindowArea();
	// Return the tab's SubWidget layout, if it has one
	QLayout* subWidgetLayout();


	/*
	 * Update
	 */
	private:
	// Row update function for BondsTable
	void updateSpeciesInfoTableRow(int row, SpeciesInfo* speciesInfo, bool createItems);

	protected:
	// Update controls in tab
	void updateControls();
	// Disable sensitive controls within tab, ready for main code to run
	void disableSensitiveControls();
	// Enable sensitive controls within tab, ready for main code to run
	void enableSensitiveControls();


	/*
	 * Signals / Slots
	 */
	private slots:
	// Definition
	void on_NameEdit_textChanged(QString text);
	void on_TemperatureSpin_valueChanged(double value);
	// Initial Coordinates
	void on_CoordinatesFileEdit_textChanged(QString text);
	void on_CoordinatesFileSelectButton_clicked(bool checked);
	// Content
	void on_GeneratorGenerateButton_clicked(bool checked);


	/*
	 * State
	 */
	public:
	// Read widget state through specified LineParser
	bool readState(LineParser& parser, const CoreData& coreData);
	// Write widget state through specified LineParser
	bool writeState(LineParser& parser);
};

#endif
