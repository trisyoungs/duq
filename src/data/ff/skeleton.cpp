// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2020 Team Dissolve and contributors

#include "data/ff/skeleton.h"

/*
 * Implements [give the reference of the implemented forcefield here, and/or a link to the source parameters file].
 * 
 * [Keep the name of the source files *.cpp and *.h for the forcefield short, and reflective of the authors and year of]
 * [publication - e.g. youngs2020.cpp, ywn1999.cpp (using authors initials) ]
 *
 * [Assume responsibility for the implementation by modifying the notes (change ??? for your initials)]
 *
 * [Add critical information in the notes section.  Leave implementation details for the companion manual page for the]
 * [forcefield, which lives in web/content/docs/ff/builtin (check the other files there for examples on what sort of information]
 * [to include).]
 *
 * Notes:
 * Any inconsistencies between the forcefield as implemented here and the original work are the sole responsibility of [???].
 */

/*
 * Set Up
 */

// Set up / create all forcefield terms
bool Forcefield_Skeleton2020::setUp()
{
    // Atom types
    /*
     * INFO Specify all atom types here using addAtomType().
     * EXAMPLE addAtomType(ELEMENT_H, 1, "HW", "-O(nh=2)", "Water hydrogen", 0.4238, 0.0, 0.0);
     * EXAMPLE addAtomType(ELEMENT_O, 2, "OW", "-H(n=2)", "Water oxygen", -0.8476, 0.6502, 3.166);
     */

    // Intramolecular terms
    // -- Water (SPC/E)
    addBondTerm("HW", "OW", SpeciesBond::HarmonicForm, {4637.0, 1.0});
    addAngleTerm("HW", "OW", "HW", SpeciesAngle::HarmonicForm, {383.0, 109.4});
    // -- Hydronium Ion
    addBondTerm("HW+", "OW+", SpeciesBond::HarmonicForm, {4030.0, 0.969});
    addAngleTerm("HW+", "OW+", "HW+", SpeciesAngle::HarmonicForm, {451.4, 113.1});
    // -- Ammonia
    addBondTerm("HN", "NH", SpeciesBond::HarmonicForm, {3864.0, 1.003});
    addAngleTerm("HN", "NH", "HN", SpeciesAngle::HarmonicForm, {334.01, 107.18});
    // -- Ammonium Ion
    addBondTerm("HN+", "NH+", SpeciesBond::HarmonicForm, {3660.3, 1.013});
    addAngleTerm("HN+", "NH+", "HN+", SpeciesAngle::HarmonicForm, {518.26, 109.47});
    // -- Sulphuric Acid
    addBondTerm("SA", "OA", SpeciesBond::HarmonicForm, {6258.0, 1.411});
    addBondTerm("SA", "OHA", SpeciesBond::HarmonicForm, {3083.8, 1.571});
    addBondTerm("OHA*", "HSA*", SpeciesBond::HarmonicForm, {4561.1, 0.949});
    addAngleTerm("OA", "SA", "OA", SpeciesAngle::HarmonicForm, {224.37, 123.69});
    addAngleTerm("OHA", "SA", "OA", SpeciesAngle::HarmonicForm, {364.56, 107.32});
    addAngleTerm("OHA", "SA", "OHA", SpeciesAngle::HarmonicForm, {608.15, 101.79});
    addAngleTerm("HSA", "OHA", "SA", SpeciesAngle::HarmonicForm, {396.82, 110.5});
    addTorsionTerm("OA", "SA", "OHA", "HSA", SpeciesTorsion::Cos3Form, {0.0, 0.0, 0.0});
    addTorsionTerm("OHA", "SA", "OHA", "HSA", SpeciesTorsion::Cos3Form, {-15.8628, -7.797, 2.3399});
    // -- Hydrogen Sulfate Ion
    addBondTerm("SA-", "OA-", SpeciesBond::HarmonicForm, {5239.9, 1.438});
    addBondTerm("SA-", "OHA-", SpeciesBond::HarmonicForm, {2328.3, 1.634});
    addAngleTerm("OA-", "SA-", "OA-", SpeciesAngle::HarmonicForm, {456.97, 114.76});
    addAngleTerm("OHA-", "SA-", "OA-", SpeciesAngle::HarmonicForm, {814.48, 103.45});
    addAngleTerm("HSA-", "OHA-", "SA-", SpeciesAngle::HarmonicForm, {398.12, 106.39});
    addTorsionTerm("OA-", "SA-", "OHA-", "HSA-", SpeciesTorsion::Cos3Form, {0.0, 0.0, 0.0});
    // -- Dimethylammonium Ion
    addBondTerm("NDM", "CDM", SpeciesBond::HarmonicForm, {3071.0, 1.499});
    addBondTerm("NDM", "HDM", SpeciesBond::HarmonicForm, {3632.0, 1.01});
    addBondTerm("CDM", "HCD", SpeciesBond::HarmonicForm, {2845.12, 1.09}); // Missing from SI - taken from OPLS-AA
    addAngleTerm("CDM", "NDM", "CDM", SpeciesAngle::HarmonicForm, {418.4, 114.3});
    addAngleTerm("HDM", "NDM", "CDM", SpeciesAngle::HarmonicForm, {418.4, 109.2});
    addAngleTerm("HCD", "CDM", "NDM", SpeciesAngle::HarmonicForm, {209.2, 108.5});
    addAngleTerm("HDM", "NDM", "HDM", SpeciesAngle::HarmonicForm, {292.9, 105.5});
    addAngleTerm("HCD", "CDM", "HCD", SpeciesAngle::HarmonicForm, {276.144, 107.8}); // Missing from SI - taken from OPLS-AA
    addTorsionTerm("HCD", "CDM", "NDM", "HDM", SpeciesTorsion::Cos3Form, {0.0, 0.0, 0.0});
    addTorsionTerm("HCD", "CDM", "NDM", "CDM", SpeciesTorsion::Cos3Form, {0.0, 0.0, 3.3765});

    return true;
}

/*
 * Definition
 */

// Return name of Forcefield
std::string_view Forcefield_Skeleton2020::name() const { return "Skeleton2020"; }

// Return description for Forcefield
std::string_view Forcefield_Skeleton2020::description() const
{
    return "Implements forcefield found in 'Enhancing effect of dimethylamine in sulfuric acid nucleation in the presence of "
           "water – a computational study', V. Loukonen, T. Kurten, I. K. Ortega, H. Vehkamaki, A. A. H. Padua, K. Sellegri, "
           "and M. Kulmala, <i>Atmos. Chem. Phys.</i> <b>10</b>, 4961 (2010), "
           "<a href='http://dx.doi.org/10.5194/acp-10-4961-2010'></a>.</br>Covers water (SPC/E), the hydronium ion, ammonia, "
           "the ammonium ion, sulfuric acid, the hydrogensulfate ion, and the dimethylammonium ion. Based on OPLS-AA "
           "parameters, with specific QM-derived parameters (see Supplementary Information, Tables 1-6).";
}

// Return short-range interaction style for AtomTypes
Forcefield::ShortRangeType Forcefield_Skeleton2020::shortRangeType() const { return Forcefield::LennardJonesType; }
