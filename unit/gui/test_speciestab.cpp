// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "classes/species.h"
#include "gui/models/speciesAngleModel.h"
#include "gui/models/speciesAtomModel.h"
#include "gui/models/speciesBondModel.h"
#include "gui/models/speciesImproperModel.h"
#include "gui/models/speciesTorsionModel.h"
#include "main/dissolve.h"
#include <gtest/gtest.h>
#include <vector>

namespace UnitTest
{

class SpeciesTabTest : public ::testing::Test
{
    public:
    SpeciesTabTest() = default;

    protected:
    void SetUp() override {}
};

TEST_F(SpeciesTabTest, DataManger)
{

    CoreData coreData;
    Dissolve dissolve(coreData);

    dissolve.clear();
    dissolve.loadInput("restart/benzene.txt");
    auto &species = dissolve.species()[0];

    SpeciesAtomModel atom(species->atoms(), dissolve);
    SpeciesBondModel bond(species->bonds(), dissolve);
    SpeciesAngleModel angle(species->angles());
    SpeciesTorsionModel torsion(species->torsions());
    SpeciesImproperModel improper(species->impropers());

    // Test Atoms
    EXPECT_EQ(atom.columnCount(), 6);
    EXPECT_EQ(atom.rowCount(), 12);

    // Test Carbon atom
    EXPECT_EQ(atom.data(atom.index(0, 0)).toString().toStdString(), "Carbon");
    EXPECT_EQ(atom.data(atom.index(0, 1)).toString().toStdString(), "CA");
    EXPECT_DOUBLE_EQ(atom.data(atom.index(0, 2)).toDouble(), -1.399);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(0, 3)).toDouble(), 0.1600);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(0, 4)).toDouble(), 0.000);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(0, 5)).toDouble(), -0.115);

    // Test Hydrogen Atom
    EXPECT_EQ(atom.data(atom.index(6, 0)).toString().toStdString(), "Hydrogen");
    EXPECT_EQ(atom.data(atom.index(6, 1)).toString().toStdString(), "HA");
    EXPECT_DOUBLE_EQ(atom.data(atom.index(6, 2)).toDouble(), 1.483);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(6, 3)).toDouble(), 2.001);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(6, 4)).toDouble(), 0.000);
    EXPECT_DOUBLE_EQ(atom.data(atom.index(6, 5)).toDouble(), 0.115);

    // Mutate Hydrogen
    EXPECT_FALSE(atom.setData(atom.index(6, 0), "Carbon"));
    EXPECT_TRUE(atom.setData(atom.index(6, 1), "HA"));
    EXPECT_FALSE(atom.setData(atom.index(6, 1), "Unreal"));
    EXPECT_TRUE(atom.setData(atom.index(6, 2), "CA"));
    EXPECT_TRUE(atom.setData(atom.index(6, 3), 3.0));
    EXPECT_TRUE(atom.setData(atom.index(6, 4), 4.0));
    EXPECT_TRUE(atom.setData(atom.index(6, 5), 5.0));
    for (auto i = 3; i < 6; ++i)
	EXPECT_EQ(atom.data(atom.index(6, i)).toDouble(), i);

    // Test Bonds
    EXPECT_EQ(bond.columnCount(), 7);
    EXPECT_EQ(bond.rowCount(), 12);
    EXPECT_EQ(bond.data(bond.index(3, 0)).toInt(), 4);
    EXPECT_EQ(bond.data(bond.index(3, 1)).toInt(), 5);
    EXPECT_EQ(bond.data(bond.index(3, 2)).toString().toStdString(), "@CA-CA");
    EXPECT_DOUBLE_EQ(bond.data(bond.index(3, 3)).toDouble(), 3924.59);
    EXPECT_DOUBLE_EQ(bond.data(bond.index(3, 4)).toDouble(), 1.4);
    EXPECT_EQ(bond.data(bond.index(3, 5)).toDouble(), 0);
    EXPECT_EQ(bond.data(bond.index(3, 6)).toDouble(), 0);

    // Mutate bond
    EXPECT_FALSE(bond.setData(bond.index(3, 0), 5));
    EXPECT_FALSE(bond.setData(bond.index(3, 1), 6));
    for (auto i = 3; i < 7; ++i)
	EXPECT_FALSE(bond.setData(bond.index(3, i), 6));
    EXPECT_FALSE(bond.setData(bond.index(3, 2), "Undefined"));
    EXPECT_TRUE(bond.setData(bond.index(3, 2), "Harmonic"));
    for (auto i = 3; i < 5; ++i)
    {
	EXPECT_TRUE(bond.setData(bond.index(3, i), i));
	EXPECT_DOUBLE_EQ(bond.data(bond.index(3, i)).toDouble(), i);
    }
    for (auto i = 5; i < 7; ++i)
    {
	EXPECT_FALSE(bond.setData(bond.index(3, i), i));
	EXPECT_EQ(bond.data(bond.index(3, i)).toDouble(), 0);
    }
    EXPECT_TRUE(bond.setData(bond.index(3, 2), "@CA-CA"));
    EXPECT_DOUBLE_EQ(bond.data(bond.index(3, 3)).toDouble(), 3924.59);
    EXPECT_DOUBLE_EQ(bond.data(bond.index(3, 4)).toDouble(), 1.4);
    EXPECT_NEAR(bond.data(bond.index(3, 5)).toDouble(), 0, 1e-100);
    EXPECT_NEAR(bond.data(bond.index(3, 6)).toDouble(), 0, 1e-100);

    EXPECT_EQ(angle.columnCount(), 8);
    EXPECT_EQ(angle.rowCount(), 18);

    EXPECT_EQ(torsion.columnCount(), 9);
    EXPECT_EQ(torsion.rowCount(), 24);
}

} // namespace UnitTest
