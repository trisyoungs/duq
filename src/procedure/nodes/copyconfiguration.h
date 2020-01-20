/*
	*** Procedure Node - CopyConfiguration
	*** src/procedure/nodes/copyconfiguration.h
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

#ifndef DISSOLVE_PROCEDURENODE_COPYCONFIGURATION_H
#define DISSOLVE_PROCEDURENODE_COPYCONFIGURATION_H

#include "procedure/nodes/node.h"
#include "procedure/nodevalue.h"
#include "base/units.h"

// Forward Declarations
/* none */

// CopyConfiguration Node
class CopyConfigurationProcedureNode : public ProcedureNode
{
	public:
	// Constructor
	CopyConfigurationProcedureNode(Configuration* cfg = NULL);
	// Destructor
	~CopyConfigurationProcedureNode();


	/*
	 * Identity
	 */
	public:
	// Return whether specified context is relevant for this node type
	bool isContextRelevant(ProcedureNode::NodeContext context);
	// Return whether a name for the node must be provided
	bool mustBeNamed() const;


	/*
	 * Node Data
	 */


	/*
	 * Execute
	 */
	public:
	// Prepare any necessary data, ready for execution
	bool prepare(Configuration* cfg, const char* prefix, GenericList& targetList);
	// Execute node, targetting the supplied Configuration
	ProcedureNode::NodeExecutionResult execute(ProcessPool& procPool, Configuration* cfg, const char* prefix, GenericList& targetList);
};

#endif
