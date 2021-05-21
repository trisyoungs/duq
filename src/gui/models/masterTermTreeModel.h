// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#pragma once

#include "classes/species.h"
#include "templates/optionalref.h"
#include <QAbstractTableModel>
#include <QIcon>
#include <QModelIndex>

#include <vector>

class MasterTermTreeModel : public QAbstractItemModel
{
    Q_OBJECT

    private:
    // Source MasterIntra data
    OptionalReferenceWrapper<std::list<MasterIntra>> bonds_, angles_, torsions_, impropers_;
    // Icon return function
    std::function<QIcon(const MasterIntra *term)> iconFunction_;

    public:
    // Set source MasterIntra data
    void setData(std::list<MasterIntra> bonds, std::list<MasterIntra> angles, std::list<MasterIntra> torsions,
                 std::list<MasterIntra> impropers);
    // Set function to return QIcon for item
    void setIconFunction(std::function<QIcon(const MasterIntra *term)> func);
    // Return object represented by specified model index
    MasterIntra *rawData(const QModelIndex &index) const;

    /*
     * QAbstractItemModel overrides
     */
    public:
    int rowCount(const QModelIndex &parent = QModelIndex()) const override;
    //    QModelIndex parent(const QModelIndex &index) const override;
    QVariant data(const QModelIndex &index, int role = Qt::DisplayRole) const override;
    bool setData(const QModelIndex &index, const QVariant &value, int role = Qt::EditRole) override;
    Qt::ItemFlags flags(const QModelIndex &index) const override;
    QVariant headerData(int section, Qt::Orientation orientation, int role = Qt::DisplayRole) const override;
};
