// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "classes/atomtype.h"
#include "data/elements.h"
#include "data/ff/atomtype.h"
#include "data/ff/library.h"
#include "data/ff/xml/base.h"
#include "gui/models/xmlAngleModel.h"
#include "gui/models/xmlAtomModel.h"
#include "gui/models/xmlBondModel.h"
#include "gui/models/xmlImproperModel.h"
#include "gui/models/xmlTorsionModel.h"
#include "gui/models/xmlTreeModel.h"
#include "main/dissolve.h"
#include <gtest/gtest.h>
#include <memory>
#include <tuple>
#include <vector>

namespace UnitTest
{

class XmlFFTest : public ::testing::Test
{
    public:
    XmlFFTest() = default;

    protected:
    void SetUp() override { ASSERT_TRUE(doc.load_file("ff/methanol.xml")); }

    pugi::xml_document doc;
};

TEST_F(XmlFFTest, XmlBond)
{
    XmlBondModel bonds;

    bonds.readFile(doc.root());

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

TEST_F(XmlFFTest, XmlAngle)
{
    XmlAngleModel angles;

    angles.readFile(doc.root());

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

TEST_F(XmlFFTest, XmlTorsion)
{
    XmlTorsionModel torsions;

    torsions.readFile(doc.root());

    ASSERT_EQ(torsions.columnCount(), 16);
    ASSERT_EQ(torsions.rowCount(), 3);

    std::vector<XmlTorsionData> reference = {{"H805", "O801", "C800", "H802", 0.000000, 0.000000, 0.736384, 0.000000, 1, 2, 3,
                                              4, 0.00, 3.141592653589793, 0.00, 3.141592653589793},
                                             {"H805", "O801", "C800", "H803", 0.000000, 0.000000, 0.736384, 0.000000, 1, 2, 3,
                                              4, 0.00, 3.141592653589793, 0.00, 3.141592653589793},
                                             {"H805", "O801", "C800", "H804", 0.000000, 0.000000, 0.736384, 0.000000, 1, 2, 3,
                                              4, 0.00, 3.141592653589793, 0.00, 3.141592653589793}};

    int row = 0;
    for (auto b : reference)
    {
        ASSERT_EQ(torsions.data(torsions.index(row, 0)).toString().toStdString(), std::get<0>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 1)).toString().toStdString(), std::get<1>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 2)).toString().toStdString(), std::get<2>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 3)).toString().toStdString(), std::get<3>(b));

        ASSERT_EQ(torsions.data(torsions.index(row, 4)).toDouble(), std::get<4>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 5)).toDouble(), std::get<5>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 6)).toDouble(), std::get<6>(b));
        ASSERT_EQ(torsions.data(torsions.index(row, 7)).toDouble(), std::get<7>(b));
        ++row;
    }
}

TEST_F(XmlFFTest, XmlImproper)
{
    XmlImproperModel impropers;

    impropers.readFile(doc.root());

    ASSERT_EQ(impropers.columnCount(), 16);
    ASSERT_EQ(impropers.rowCount(), 2);

    std::vector<XmlImproperData> reference = {{"C800", "O801", "H802", "H803", 0.000000, 0.000000, 0.000000, 0.000000, 1, 2, 3,
                                               4, 0.00, 3.141592653589793, 0.00, 3.141592653589793},
                                              {"C800", "O801", "H802", "H804", 0.000000, 0.000000, 0.000000, 0.000000, 1, 2, 3,
                                               4, 0.00, 3.141592653589793, 0.00, 3.141592653589793}};

    int row = 0;
    for (auto b : reference)
    {
        ASSERT_EQ(impropers.data(impropers.index(row, 0)).toString().toStdString(), std::get<0>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 1)).toString().toStdString(), std::get<1>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 2)).toString().toStdString(), std::get<2>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 3)).toString().toStdString(), std::get<3>(b));

        ASSERT_EQ(impropers.data(impropers.index(row, 4)).toDouble(), std::get<4>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 5)).toDouble(), std::get<5>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 6)).toDouble(), std::get<6>(b));
        ASSERT_EQ(impropers.data(impropers.index(row, 7)).toDouble(), std::get<7>(b));
        ++row;
    }
}

TEST_F(XmlFFTest, XmlAtom)
{
    CoreData coreData;
    Dissolve dissolve(coreData);
    XmlAtomModel atoms(dissolve);

    atoms.readFile(doc.root());

    ASSERT_EQ(atoms.columnCount(), 4);
    ASSERT_EQ(atoms.rowCount(), 6);

    std::vector<XmlAtomData> reference = {{"opls_802", "H802", "H", 1.008000},  {"opls_804", "H804", "H", 1.008000},
                                          {"opls_801", "O801", "O", 15.999000}, {"opls_803", "H803", "H", 1.008000},
                                          {"opls_800", "C800", "C", 12.011000}, {"opls_805", "H805", "H", 1.008000}};

    int row = 0;
    for (auto b : reference)
    {
        ASSERT_EQ(atoms.data(atoms.index(row, 0)).toString().toStdString(), std::get<0>(b));
        ASSERT_EQ(atoms.data(atoms.index(row, 1)).toString().toStdString(), std::get<1>(b));
        ASSERT_EQ(atoms.data(atoms.index(row, 2)).toString().toStdString(), std::get<2>(b));
        ASSERT_EQ(atoms.data(atoms.index(row, 3)).toDouble(), std::get<3>(b));
        ++row;
    }
}

TEST_F(XmlFFTest, XmlTree)
{
    CoreData coreData;
    Dissolve dissolve(coreData);
    XmlTreeModel treeModel(dissolve);

    treeModel.readFile(doc.root());

    ForcefieldLibrary::registerForcefield(treeModel.toForcefield());
    auto xmlFF = ForcefieldLibrary::forcefield("XML file");
    ASSERT_TRUE(xmlFF);
    ASSERT_EQ(xmlFF->name(), "XML file");
    auto oxygen = xmlFF->atomTypeByName("O801");
    ASSERT_TRUE(oxygen);
    auto carbon = xmlFF->atomTypeByName("C800");
    ASSERT_TRUE(carbon);
    auto hydrogen2 = xmlFF->atomTypeByName("H802");
    ASSERT_TRUE(hydrogen2);
    auto hydrogen3 = xmlFF->atomTypeByName("H803");
    ASSERT_TRUE(hydrogen3);
    auto hydrogen4 = xmlFF->atomTypeByName("H804");
    ASSERT_TRUE(hydrogen4);
    auto hydrogen5 = xmlFF->atomTypeByName("H805");
    ASSERT_TRUE(hydrogen5);
    auto nonexistent = xmlFF->atomTypeByName("Q800");
    ASSERT_FALSE(nonexistent);

    auto bond = xmlFF->getBondTerm((*oxygen).get(), (*carbon).get());
    ASSERT_TRUE(bond);
    ASSERT_EQ((*bond).get().parameters()[0], 267776.000000);
    ASSERT_EQ((*bond).get().parameters()[1], 0.141000);

    auto angle = xmlFF->getAngleTerm((*oxygen).get(), (*carbon).get(), (*hydrogen2).get());
    ASSERT_TRUE(angle);
    ASSERT_EQ((*angle).get().parameters()[0], 292.88000);
    ASSERT_EQ((*angle).get().parameters()[1], 1.911136);

    auto torsion = xmlFF->getTorsionTerm((*hydrogen5).get(), (*oxygen).get(), (*carbon).get(), (*hydrogen2).get());
    ASSERT_TRUE(torsion);
    ASSERT_EQ((*torsion).get().parameters()[0], 0);
    ASSERT_EQ((*torsion).get().parameters()[2], 0.736384);

    auto improper = xmlFF->getImproperTerm((*carbon).get(), (*oxygen).get(), (*hydrogen2).get(), (*hydrogen3).get());
    ASSERT_TRUE(improper);
    ASSERT_EQ((*improper).get().parameters()[0], 0);
}

} // namespace UnitTest
