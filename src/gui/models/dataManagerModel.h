// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#pragma once

#include <QAbstractTableModel>
#include <QModelIndex>
#include "gui/referencepoint.h"
#include "templates/list.h"

#include <tuple>
#include <vector>

class DataManagerModel : public QAbstractTableModel
{
    Q_OBJECT

    private:
    List<ReferencePoint> &referencePoints_;

    public:
    DataManagerModel(List<ReferencePoint> &referencePoints);

    int rowCount(const QModelIndex &parent = QModelIndex()) const override;

    int columnCount(const QModelIndex &parent = QModelIndex()) const override;

    QVariant data(const QModelIndex &index, int role = Qt::DisplayRole) const override;

    QVariant headerData(int section, Qt::Orientation orientation, int role = Qt::DisplayRole) const override;

};
