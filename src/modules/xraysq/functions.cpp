// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "base/lineparser.h"
#include "classes/configuration.h"
#include "classes/isotopedata.h"
#include "classes/species.h"
#include "classes/speciesinfo.h"
#include "classes/xrayweights.h"
#include "modules/rdf/rdf.h"
#include "modules/xraysq/xraysq.h"
#include "templates/algorithms.h"

// Calculate weighted g(r) from supplied unweighted g(r) and Weights
bool XRaySQModule::calculateWeightedGR(const PartialSet &unweightedgr, PartialSet &weightedgr, const XRayWeights &weights,
                                       StructureFactors::NormalisationType normalisation)
{
    for_each_pair(unweightedgr.atomTypes().begin(), unweightedgr.atomTypes().end(), [&](int n, auto &atd1, int m, auto &atd2) {
        auto weight = weights.weight(atd1.atomType(), atd2.atomType(), 0.0);

        // Bound (intramolecular) partial (multiplied by the bound term weight)
        weightedgr.boundPartial(n, m).copyArrays(unweightedgr.boundPartial(n, m));
        weightedgr.boundPartial(n, m) *= weight;

        // Unbound partial (multiplied by the full weight)
        weightedgr.unboundPartial(n, m).copyArrays(unweightedgr.unboundPartial(n, m));
        weightedgr.unboundPartial(n, m) -= 1.0;
        weightedgr.unboundPartial(n, m) *= weight;

        // Full partial, summing bound and unbound terms
        weightedgr.partial(n, m).copyArrays(weightedgr.unboundPartial(n, m));
        weightedgr.partial(n, m) += weightedgr.boundPartial(n, m);
    });

    // Form total G(r)
    weightedgr.formTotal(false);
    if (normalisation == StructureFactors::AverageOfSquaresNormalisation)
        weightedgr.total() /= weights.boundCoherentAverageOfSquares(0.0);
    else if (normalisation == StructureFactors::SquareOfAverageNormalisation)
        weightedgr.total() /= weights.boundCoherentSquareOfAverage(0.0);

    return true;
}

// Calculate weighted S(Q) from supplied unweighted S(Q) and Weights
bool XRaySQModule::calculateWeightedSQ(const PartialSet &unweightedsq, PartialSet &weightedsq, const XRayWeights &weights,
                                       StructureFactors::NormalisationType normalisation)
{
    for_each_pair(unweightedsq.atomTypes().begin(), unweightedsq.atomTypes().end(), [&](int n, auto &atd1, int m, auto &atd2) {
        // Weight bound and unbound S(Q) and sum into full partial
        auto qWeights = weights.weight(atd1.atomType(), atd2.atomType(), unweightedsq.boundPartial(n, m).xAxis());

        // Bound (intramolecular) and unbound partials
        weightedsq.boundPartial(n, m).copyArrays(unweightedsq.boundPartial(n, m));
        weightedsq.boundPartial(n, m) *= qWeights;
        weightedsq.unboundPartial(n, m).copyArrays(unweightedsq.unboundPartial(n, m));
        weightedsq.unboundPartial(n, m) *= qWeights;

        // Full partial (sum of bound and unbound terms)
        weightedsq.partial(n, m).copyArrays(weightedsq.unboundPartial(n, m));
        weightedsq.partial(n, m) += weightedsq.boundPartial(n, m);
    });

    // Form total structure factor
    weightedsq.formTotal(false);
    if (normalisation == StructureFactors::SquareOfAverageNormalisation)
    {
        auto bbar = weights.boundCoherentSquareOfAverage(unweightedsq.boundPartial(0, 0).xAxis());
        for (auto n = 0; n < bbar.size(); ++n)
            weightedsq.total().value(n) /= bbar[n];
    }
    else if (normalisation == StructureFactors::AverageOfSquaresNormalisation)
    {
        auto bbar = weights.boundCoherentAverageOfSquares(unweightedsq.boundPartial(0, 0).xAxis());
        for (auto n = 0; n < bbar.size(); ++n)
            weightedsq.total().value(n) /= bbar[n];
    }

    return true;
}

// Calculate xray weights for relevant Configuration targets
void XRaySQModule::calculateWeights(const RDFModule *rdfModule, XRayWeights &weights,
                                    XRayFormFactors::XRayFormFactorData formFactors) const
{
    // Clear weights and get species populations from RDFModule
    weights.clear();
    auto populations = rdfModule->speciesPopulations();

    for (auto speciesPop : populations)
        weights.addSpecies(speciesPop.first, speciesPop.second);

    weights.finalise(formFactors);
}
