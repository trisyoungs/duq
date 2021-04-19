// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "gui/models/dataManagerReferencePointModel.h"
#include "classes/referencepoint.h"
#include <gtest/gtest.h>
#include <vector>

namespace UnitTest
{

class DataManagerTest : public ::testing::Test
{
    public:
    DataManagerTest() = default;

    protected:
    void SetUp() override {}
};

TEST_F(DataManagerTest, DataManger)
{

    CoreData coreData;
    Dissolve dissolve(coreData);
    std::vector<ReferencePoint> points;

    dissolve.clear();
    dissolve.loadInput("restart/benzene.txt");


    DataManagerReferencePointModel model(dissolve, points);

    //Expect an error if the file does not exist
    EXPECT_TRUE(model.addFile("error", "restart/not.exist.restart"));

    //Expect this file to load properly
    ASSERT_FALSE(model.addFile("benzene", "restart/benzene.txt.restart.test"));

    EXPECT_EQ(model.columnCount(), 2);
    EXPECT_EQ(model.rowCount(), 1);

    EXPECT_EQ(model.rowCount(), 1);
    EXPECT_EQ(model.data(model.index(0, 0)).toString().toStdString(), "benzene");
    EXPECT_EQ(model.data(model.index(0, 1)).toString().toStdString(), "restart/benzene.txt.restart.test");
}

} // namespace UnitTest
