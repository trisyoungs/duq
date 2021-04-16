// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#pragma once

#include "procedure/nodes/calculatebase.h"
#include "templates/array.h"

// Forward Declarations
class SelectProcedureNode;

// Calculate Angle Node
class CalculateAngleProcedureNode : public CalculateProcedureNodeBase
{
    public:
    CalculateAngleProcedureNode(SelectProcedureNode *site0 = nullptr, SelectProcedureNode *site1 = nullptr,
                                SelectProcedureNode *site2 = nullptr);
    ~CalculateAngleProcedureNode() override = default;

    /*
     * Observable Target (implements virtuals in CalculateProcedureNodeBase)
     */
    public:
    // Return number of sites required to calculate observable
    int nSitesRequired() const;
    // Return dimensionality of calculated observable
    int dimensionality() const;

    /*
     * Execute
     */
    public:
    // Execute node, targetting the supplied Configuration
    bool execute(ProcessPool &procPool, Configuration *cfg, std::string_view prefix, GenericList &targetList) override;
};
