/*
	*** Keyword - Configuration
	*** src/keywords/configuration.cpp
	Copyright T. Youngs 2012-2020

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

#include "keywords/configuration.h"
#include "classes/coredata.h"
#include "classes/configuration.h"
#include "base/lineparser.h"

// Constructor
ConfigurationKeyword::ConfigurationKeyword(Configuration* cfg) : KeywordData<Configuration*>(KeywordBase::ConfigurationData, cfg)
{
}

// Destructor
ConfigurationKeyword::~ConfigurationKeyword()
{
}

/*
 * Arguments
 */

// Return minimum number of arguments accepted
int ConfigurationKeyword::minArguments() const
{
	return 1;
}

// Return maximum number of arguments accepted
int ConfigurationKeyword::maxArguments() const
{
	return 1;
}

// Parse arguments from supplied LineParser, starting at given argument offset
bool ConfigurationKeyword::read(LineParser& parser, int startArg, const CoreData& coreData)
{
	// Find target Configuration (first argument)
	data_ = coreData.findConfiguration(parser.argc(startArg));
	if (!data_)
	{
		Messenger::error("Error setting Configuration - no Configuration named '%s' exists.\n", parser.argc(startArg));
		return false;
	}

	set_ = true;

	return true;
}

// Write keyword data to specified LineParser
bool ConfigurationKeyword::write(LineParser& parser, const char* keywordName, const char* prefix)
{
	if (data_)
	{
		if (!parser.writeLineF("%s%s  '%s'\n", prefix, keywordName, data_->name())) return false;
	}
	else if (!parser.writeLineF("%s%s  '?_?'\n", prefix, name())) return false;

	return true;
}

/*
 * Object Management
 */

// Prune any references to the supplied Configuration in the contained data
void ConfigurationKeyword::removeReferencesTo(Configuration* cfg)
{
	if (data_ == cfg) data_ = NULL;
}
