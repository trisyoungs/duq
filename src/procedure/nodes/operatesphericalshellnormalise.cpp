// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2020 Team Dissolve and contributors

#include "procedure/nodes/operatesphericalshellnormalise.h"
#include "base/lineparser.h"
#include "base/sysfunc.h"
#include "classes/box.h"
#include "classes/configuration.h"
#include "classes/species.h"
#include "keywords/types.h"
#include "procedure/nodes/select.h"

OperateSphericalShellNormaliseProcedureNode::OperateSphericalShellNormaliseProcedureNode()
    : OperateProcedureNodeBase(ProcedureNode::OperateSphericalShellNormaliseNode)
{
}

OperateSphericalShellNormaliseProcedureNode::~OperateSphericalShellNormaliseProcedureNode() {}

/*
 * Data Target (implements virtuals in OperateProcedureNodeBase)
 */

// Operate on Data1D target
bool OperateSphericalShellNormaliseProcedureNode::operateData1D(ProcessPool &procPool, Configuration *cfg)
{
    // We expect x values to be centre-bin values, and regularly spaced
    const auto &xAxis = targetData1D_->constXAxis();
    auto &values = targetData1D_->values();
    if (xAxis.nItems() < 2)
        return true;

    // Derive first left-bin boundary from the delta betwen points 0 and 1
    double leftBin = xAxis.constAt(0) - (xAxis.constAt(1) - xAxis.constAt(0)) * 0.5, rightBin, divisor;
    double r1Cubed = pow(leftBin, 3), r2Cubed;
    for (auto n = 0; n < xAxis.nItems(); ++n)
    {
        // Get new right-bin from existing left bin boundary and current bin centre
        rightBin = leftBin + 2 * (xAxis.constAt(n) - leftBin);
        r2Cubed = pow(rightBin, 3);
        divisor = (4.0 / 3.0) * PI * (r2Cubed - r1Cubed);
        values[n] /= divisor;
        if (targetData1D_->valuesHaveErrors())
            targetData1D_->error(n) /= divisor;

        // Overwrite old values
        r1Cubed = r2Cubed;
        leftBin = rightBin;
    }

    return true;
}

// Operate on Data2D target
bool OperateSphericalShellNormaliseProcedureNode::operateData2D(ProcessPool &procPool, Configuration *cfg)
{
    // We expect x values to be centre-bin values, and regularly spaced
    const auto &xAxis = targetData2D_->constXAxis();
    auto &values = targetData2D_->values();
    if (xAxis.nItems() < 2)
        return true;

    // Derive first left-bin boundary from the delta betwen points 0 and 1
    double leftBin = xAxis.constAt(0) - (xAxis.constAt(1) - xAxis.constAt(0)) * 0.5, rightBin, divisor;
    double r1Cubed = pow(leftBin, 3), r2Cubed;
    for (auto n = 0; n < xAxis.nItems(); ++n)
    {
        for (auto yIndex = 0; yIndex < targetData2D_->constYAxis().nItems(); ++yIndex)
        {
            // Get new right-bin from existing left bin boundary and current bin centre
            rightBin = leftBin + 2 * (xAxis.constAt(n) - leftBin);
            r2Cubed = pow(rightBin, 3);
            divisor = (4.0 / 3.0) * PI * (r2Cubed - r1Cubed);
            values.at(n, yIndex) /= divisor;
            if (targetData2D_->valuesHaveErrors())
                targetData2D_->error(n, yIndex) /= divisor;

            // Overwrite old values
            r1Cubed = r2Cubed;
            leftBin = rightBin;
        }
    }

    return true;
}
