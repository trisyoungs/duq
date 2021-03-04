// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "classes/atomtype.h"
#include "data/elements.h"
#include "main/dissolve.h"
#include "models/xmlAngleModel.h"
#include "models/xmlAtomModel.h"
#include "models/xmlBondModel.h"
#include <gtest/gtest.h>
#include <tuple>
#include <vector>

TEST(XmlFF, XmlBond)
{
    XmlBondModel bonds;

    bonds.readFile("/home/adam/Code/dissolve/tests/ff/methanol.xml");

    ASSERT_EQ(bonds.columnCount(), 4);
    ASSERT_EQ(bonds.rowCount(), 5);

    std::vector<XmlBondData> reference = {{"O801", "C800", 0.141000, 267776.000000},
					  {"H802", "C800", 0.109000, 284512.000000},
					  {"H803", "C800", 0.109000, 284512.000000},
					  {"H804", "C800", 0.109000, 284512.000000},
					  {"H805", "O801", 0.094500, 462750.400000}};

    int row = 0;
    for (auto b : reference)
    {
	ASSERT_EQ(bonds.data(bonds.index(row, 0)).toString().toStdString(), std::get<0>(b));
	ASSERT_EQ(bonds.data(bonds.index(row, 1)).toString().toStdString(), std::get<1>(b));
	ASSERT_EQ(bonds.data(bonds.index(row, 2)).toDouble(), std::get<2>(b));
	ASSERT_EQ(bonds.data(bonds.index(row, 3)).toDouble(), std::get<3>(b));
	++row;
    }
}

TEST(XmlFF, XmlAngle)
{
    XmlAngleModel angles;

    angles.readFile("/home/adam/Code/dissolve/tests/ff/methanol.xml");

    ASSERT_EQ(angles.columnCount(), 5);
    ASSERT_EQ(angles.rowCount(), 7);

    std::vector<XmlAngleData> reference = {
	{"O801", "C800", "H802", 1.911136, 292.880000}, {"O801", "C800", "H803", 1.911136, 292.880000},
	{"O801", "C800", "H804", 1.911136, 292.880000}, {"C800", "O801", "H805", 1.893682, 460.240000},
	{"H802", "C800", "H803", 1.881465, 276.144000}, {"H802", "C800", "H804", 1.881465, 276.144000},
	{"H803", "C800", "H804", 1.881465, 276.144000}};

    int row = 0;
    for (auto b : reference)
    {
	ASSERT_EQ(angles.data(angles.index(row, 0)).toString().toStdString(), std::get<0>(b));
	ASSERT_EQ(angles.data(angles.index(row, 1)).toString().toStdString(), std::get<1>(b));
	ASSERT_EQ(angles.data(angles.index(row, 2)).toString().toStdString(), std::get<2>(b));
	ASSERT_EQ(angles.data(angles.index(row, 3)).toDouble(), std::get<3>(b));
	ASSERT_EQ(angles.data(angles.index(row, 4)).toDouble(), std::get<4>(b));
	++row;
    }
}

TEST(XmlFF, XmlAtom)
{
    CoreData coreData;
    Dissolve dissolve(coreData);
    XmlAtomModel atoms(dissolve);

    atoms.readFile("/home/adam/Code/dissolve/tests/ff/methanol.xml");

    ASSERT_EQ(atoms.columnCount(), 5);
    ASSERT_EQ(atoms.rowCount(), 6);

    std::vector<XmlAtomData> reference = {{"opls_802", "H802", "H", 1.008000, -1},  {"opls_804", "H804", "H", 1.008000, -1},
					  {"opls_801", "O801", "O", 15.999000, -1}, {"opls_803", "H803", "H", 1.008000, -1},
					  {"opls_800", "C800", "C", 12.011000, -1}, {"opls_805", "H805", "H", 1.008000, -1}};

    int row = 0;
    for (auto b : reference)
    {
	ASSERT_EQ(atoms.data(atoms.index(row, 0)).toString().toStdString(), std::get<0>(b));
	ASSERT_EQ(atoms.data(atoms.index(row, 1)).toString().toStdString(), std::get<1>(b));
	ASSERT_EQ(atoms.data(atoms.index(row, 2)).toString().toStdString(), std::get<2>(b));
	ASSERT_EQ(atoms.data(atoms.index(row, 3)).toDouble(), std::get<3>(b));
	ASSERT_EQ(atoms.data(atoms.index(row, 4)).toString().toStdString(), "Missing");
	++row;
    }

    // Cannot set atom type because we haven't defined this type yet.
    ASSERT_FALSE(atoms.setData(atoms.index(0, 4), "H"));
    ASSERT_EQ(atoms.data(atoms.index(0, 4)).toString().toStdString(), "Missing");

    auto type = dissolve.addAtomType(Elements::H);
    ASSERT_EQ(type->name(), "H");

    // Now we can add the atom type because it exists;
    ASSERT_TRUE(atoms.setData(atoms.index(0, 4), "H"));
    ASSERT_EQ(atoms.data(atoms.index(0, 4)).toString().toStdString(), "H");
}