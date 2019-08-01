/*
	*** Dissolve GUI - Main Stack Functions
	*** src/gui/gui_stack.cpp
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

#include "gui/gui.h"

/*
 * Create
 */

void DissolveWindow::on_StartCreateNewButton_clicked(bool checked)
{
	ui.SessionNewAction->trigger();
}

/*
 * Open / Connect
 */

void DissolveWindow::on_StartOpenLocalButton_clicked(bool checked)
{
	ui.SessionOpenLocalAction->trigger();
}

void DissolveWindow::on_StartOpenRecentButton_clicked(bool checked)
{
	ui.SessionOpenRecentAction->trigger();
}

void DissolveWindow::on_StartConnectButton_clicked(bool checked)
{
	ui.SessionConnectAction->trigger();
}

/*
 * Help
 */

void DissolveWindow::on_StartOnlineManualButton_clicked(bool checked)
{
	ui.HelpOnlineManualAction->trigger();
}

void DissolveWindow::on_StartOnlineTutorialsButton_clicked(bool checked)
{
	ui.HelpOnlineTutorialsAction->trigger();
}
