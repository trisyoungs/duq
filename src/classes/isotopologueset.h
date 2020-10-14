// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2020 Team Dissolve and contributors

#pragma once

#include "classes/isotopologues.h"
#include "genericitems/base.h"
#include "templates/optionalref.h"
#include <vector>

// Forward Declarations
class Configuration;
class Species;
class Isotopologue;
class IsotopologueCollection;
class LineParser;

// IsotopologueSet - Isotopologues for one or more Species in a single Configuration
class IsotopologueSet : public GenericItemBase
{
    public:
    IsotopologueSet(IsotopologueCollection *parent = nullptr, Configuration *cfg = nullptr);
    ~IsotopologueSet();

    /*
     * Parent Collection
     */
    private:
    // Parent IsotopologueCollection in which this set exists
    IsotopologueCollection *parentCollection_;

    public:
    // Set parent IsotopologueCollection in which this set exists
    void setParentCollection(IsotopologueCollection *parent);
    // Parent IsotopologueCollection in which this set exists
    IsotopologueCollection *parentCollection() const;

    /*
     * Mix Definitions
     */
    private:
    // Configuration in which the Species are used
    Configuration *configuration_;
    // Isotopologue mixtures for individual Species
    std::vector<Isotopologues> isotopologues_;

    public:
    // Clear all existing data
    void clear();
    // Set Configuration in which the Species are used
    void setConfiguration(Configuration *cfg);
    // Return Configuration in which the Species are used
    Configuration *configuration() const;
    // Add Isotopologue with the specified relative weight
    void add(Isotopologue *iso, double relativeWeight);
    // Remove specified Species from the list (if it exists)
    void remove(Species *sp);
    // Remove any occurrences of the specified Isotopologue
    void remove(Isotopologue *iso);
    // Remove the specified IsotopologueWeight
    void remove(IsotopologueWeight *isoWeight);
    // Return whether Isotopologues for the specified Species exists
    bool contains(const Species *sp) const;
    // Return Isotopologues for the specified Species
    OptionalReferenceWrapper<const Isotopologues> getIsotopologues(const Species *sp) const;
    // Return number of Isotopologues defined
    int nIsotopologues() const;
    // Return vector of all Isotopologues
    std::vector<Isotopologues> &isotopologues();
    // Return vector of all Isotopologues (const)
    const std::vector<Isotopologues> &constIsotopologues() const;

    /*
     * GenericItemBase Implementations
     */
    public:
    // Return class name
    static std::string_view itemClassName();
    // Read data through specified LineParser
    bool read(LineParser &parser, CoreData &coreData);
    // Write data through specified LineParser
    bool write(LineParser &parser);
};
