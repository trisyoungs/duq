/*
	*** SanityCheck Module - Definition
	*** src/modules/sanitycheck/definition.cpp
	Copyright T. Youngs 2012-2018

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

#include "modules/sanitycheck/sanitycheck.h"

// Return type of module
const char* SanityCheckModule::type()
{
	return "SanityCheck";
}

// Return brief description of module
const char* SanityCheckModule::brief()
{
	return "Perform data sanity checks across all processes";
}

// Return instance type for module
Module::InstanceType SanityCheckModule::instanceType()
{
	return Module::MultipleInstance;
}

// Return the maximum number of Configurations the Module can target (or -1 for any number)
int SanityCheckModule::nTargetableConfigurations()
{
	return 0;
}

// Modules upon which this Module depends to have run first
const char* SanityCheckModule::dependentModules()
{
	return "";
}

// Set up supplied dependent module (only if it has been auto-added)
bool SanityCheckModule::setUpDependentModule(Module* depMod)
{
	return true;
}
