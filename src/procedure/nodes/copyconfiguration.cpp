/*
	*** Procedure Node - CopyConfiguration
	*** src/procedure/nodes/copyconfiguration.cpp
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

#include "procedure/nodes/copyconfiguration.h"
#include "procedure/nodes/box.h"
#include "keywords/types.h"
#include "classes/box.h"
#include "classes/configuration.h"
#include "classes/coredata.h"
#include "classes/species.h"
#include "base/lineparser.h"
#include "base/sysfunc.h"

// Constructor
CopyConfigurationProcedureNode::CopyConfigurationProcedureNode(Configuration* cfg) : ProcedureNode(ProcedureNode::CopyConfigurationNode)
{
	// Set up keywords
	keywords_.add("Target", new ConfigurationKeyword(cfg), "Configuration", "Target Configuration to copy");
}

// Destructor
CopyConfigurationProcedureNode::~CopyConfigurationProcedureNode()
{
}

/*
 * Identity
 */

// Return whether specified context is relevant for this node type
bool CopyConfigurationProcedureNode::isContextRelevant(ProcedureNode::NodeContext context)
{
	return (context == ProcedureNode::GenerationContext);
}

// Return whether a name for the node must be provided
bool CopyConfigurationProcedureNode::mustBeNamed() const
{
	return false;
}

/*
 * Node Data
 */

/* 
 * Execute
 */

// Prepare any necessary data, ready for execution
bool CopyConfigurationProcedureNode::prepare(Configuration* cfg, const char* prefix, GenericList& targetList)
{
	return true;
}

// Execute node, targetting the supplied Configuration
ProcedureNode::NodeExecutionResult CopyConfigurationProcedureNode::execute(ProcessPool& procPool, Configuration* cfg, const char* prefix, GenericList& targetList)
{
	Configuration* sourceCfg = keywords_.retrieve<Configuration*>("Configuration");
	if (!sourceCfg)
	{
		Messenger::error("No Configuration set in CopyConfiguration node.\n");
		return ProcedureNode::Failure;
	}

	// If our configuration already contains molecules, complain and exit
	if (cfg->nMolecules() != 0)
	{
		Messenger::error("Configuration '%s' already has content, so refusing to overwrite by copying from another source.\n", cfg->name());
		return ProcedureNode::Failure;
	}

	// Copy the Box using a BoxProcedureNode for consistency
	const Box* sourceBox = sourceCfg->box();
	BoxProcedureNode boxNode(sourceBox->axisLengths(), sourceBox->axisAngles(), sourceBox->isNonPeriodic());
	if (!boxNode.execute(procPool, cfg, prefix, targetList)) return ProcedureNode::Failure;

	// Copy molecule content
	const DynamicArray<Molecule>& sourceMolecules = sourceCfg->molecules();
	for (int n=0; n<sourceCfg->nMolecules(); ++n) cfg->addMolecule(sourceMolecules.constValue(n));

	return ProcedureNode::Success;
}
