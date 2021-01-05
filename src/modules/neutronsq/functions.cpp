// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "base/lineparser.h"
#include "classes/configuration.h"
#include "classes/isotopedata.h"
#include "classes/species.h"
#include "classes/speciesinfo.h"
#include "modules/neutronsq/neutronsq.h"
#include "modules/rdf/rdf.h"
#include "templates/algorithms.h"

// Calculate weighted g(r) from supplied unweighted g(r) and neutron weights
bool NeutronSQModule::calculateWeightedGR(const PartialSet &unweightedgr, PartialSet &weightedgr, NeutronWeights &weights,
                                          StructureFactors::NormalisationType normalisation)
{
    for_each_pair(unweightedgr.atomTypes().begin(), unweightedgr.atomTypes().end(), [&](int n, auto &atd1, int m, auto &atd2) {
        auto weight = weights.weight(atd1.atomType(), atd2.atomType());
        auto intraWeight = weights.intramolecularWeight(atd1.atomType(), atd2.atomType());

        // Bound (intramolecular) partial (multiplied by the bound term weight)
        weightedgr.boundPartial(n, m).copyArrays(unweightedgr.boundPartial(n, m));
        weightedgr.boundPartial(n, m) *= intraWeight;

        // Unbound partial (multiplied by the full weight)
        weightedgr.unboundPartial(n, m).copyArrays(unweightedgr.unboundPartial(n, m));
        weightedgr.unboundPartial(n, m) -= 1.0;
        weightedgr.unboundPartial(n, m) *= weight;

        // Full partial, summing bound and unbound terms
        weightedgr.partial(n, m).copyArrays(weightedgr.unboundPartial(n, m));
        weightedgr.partial(n, m) += weightedgr.boundPartial(n, m);
    });

    // Calculate and normalise total to form factor if requested
    weightedgr.formTotal(false);
    if (normalisation == StructureFactors::AverageOfSquaresNormalisation)
        weightedgr.total() /= weights.boundCoherentAverageOfSquares();
    else if (normalisation == StructureFactors::SquareOfAverageNormalisation)
        weightedgr.total() /= weights.boundCoherentSquareOfAverage();

    return true;
}

// Calculate weighted S(Q) from supplied unweighted S(Q) and neutron weights
bool NeutronSQModule::calculateWeightedSQ(const PartialSet &unweightedsq, PartialSet &weightedsq, NeutronWeights &weights,
                                          StructureFactors::NormalisationType normalisation)
{
    for_each_pair(unweightedsq.atomTypes().begin(), unweightedsq.atomTypes().end(), [&](int n, auto &atd1, int m, auto &atd2) {
        // Weight bound and unbound S(Q) and sum into full partial
        auto weight = weights.weight(atd1.atomType(), atd2.atomType());
        auto boundWeight = weights.intramolecularWeight(atd1.atomType(), atd2.atomType());

        // Bound (intramolecular) partial (multiplied by the bound term weight)
        weightedsq.boundPartial(n, m).copyArrays(unweightedsq.boundPartial(n, m));
        weightedsq.boundPartial(n, m) *= boundWeight;

        // Unbound partial (multiplied by the full weight)
        weightedsq.unboundPartial(n, m).copyArrays(unweightedsq.unboundPartial(n, m));
        weightedsq.unboundPartial(n, m) *= weight;

        // Full partial (sum of bound and unbound terms)
        weightedsq.partial(n, m).copyArrays(weightedsq.unboundPartial(n, m));
        weightedsq.partial(n, m) += weightedsq.boundPartial(n, m);
    });

    // Calculate and normalise total to form factor if requested
    weightedsq.formTotal(false);
    if (normalisation == StructureFactors::AverageOfSquaresNormalisation)
        weightedsq.total() /= weights.boundCoherentAverageOfSquares();
    else if (normalisation == StructureFactors::SquareOfAverageNormalisation)
        weightedsq.total() /= weights.boundCoherentSquareOfAverage();

    return true;
}

// Calculate neutron weights for relevant Configuration targets
void NeutronSQModule::calculateWeights(const RDFModule *rdfModule, NeutronWeights &weights) const
{
    // Clear weights and get species populations from RDFModule
    weights.clear();
    auto populations = rdfModule->speciesPopulations();

    for (auto speciesPop : populations)
    {
        // Find the defined Isotopologue for this Species - if it doesn't exist, use the Natural one
        auto isoRef = isotopologues_.getIsotopologues(speciesPop.first);
        if (isoRef)
        {
            const Isotopologues &topes = *isoRef;
            for (const auto &isoWeight : topes.mix())
                weights.addIsotopologue(speciesPop.first, speciesPop.second, isoWeight.isotopologue(), isoWeight.weight());
        }
        else
            weights.addIsotopologue(speciesPop.first, speciesPop.second, speciesPop.first->naturalIsotopologue(), 1.0);
    }
}
