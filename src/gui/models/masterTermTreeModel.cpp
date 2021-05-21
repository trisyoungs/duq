// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#include "gui/models/masterTermTreeModel.h"
#include "classes/atomtype.h"

Q_DECLARE_METATYPE(MasterIntra *);

// Set source MasterIntra data
void MasterTermTreeModel::setData(std::list<MasterIntra> bonds, std::list<MasterIntra> angles, std::list<MasterIntra> torsions,
                                  std::list<MasterIntra> impropers)
{
    beginResetModel();
    bonds_ = bonds;
    angles_ = angles;
    torsions_ = torsions;
    impropers_ = impropers;
    endResetModel();
}

// Set function to return QIcon for item
void MasterTermTreeModel::setIconFunction(std::function<QIcon(const MasterIntra *term)> func) { iconFunction_ = func; }

MasterIntra *MasterTermTreeModel::rawData(const QModelIndex &index) const
{
    assert(index.parent().isValid());

    switch (index.parent().row())
    {
        case (0):
            assert(bonds_);
            //            return bonds_->get()[index.row()];
        case (1):
            assert(angles_);
            //            return bonds_->get()[index.row()];
            break;
        case (2):
            assert(torsions_);
            //            return bonds_->get()[index.row()];
            break;
        case (3):
            assert(impropers_);
            //            return bonds_->get()[index.row()];
            break;
        default:
            throw(std::runtime_error(fmt::format("No valid data for model index {},{}.\n", index.row(), index.column())));
    }
}

/*
 * QAbstractItemModel overrides
 */

int MasterTermTreeModel::rowCount(const QModelIndex &parent) const
{
    if (parent.isValid())
    {
        switch (parent.row())
        {
            case (0):
                return bonds_ ? bonds_->get().size() : 0;
            case (1):
                return angles_ ? angles_->get().size() : 0;
            case (2):
                return torsions_ ? torsions_->get().size() : 0;
            case (3):
                return impropers_ ? impropers_->get().size() : 0;
            default:
                return 0;
        }
    }
    else
        return 4;
}

//
// QModelIndex MasterTermTreeModel::parent(const QModelIndex &index) const
//{
//
//}

QVariant MasterTermTreeModel::data(const QModelIndex &index, int role) const
{
    if (index.column() == 0)
    {
        if (role != Qt::DisplayRole)
            return QVariant();

        switch (index.row())
        {
            case (0):
                return "Bonds";
            case (1):
                return "Angles";
            case (2):
                return "Torsions";
            case (3):
                return "Impropers";
        }
    }
    else
    {
        if (role == Qt::DisplayRole || role == Qt::EditRole)
        {
            switch (index.column())
            {
                // Name
                case (0):
                    return QString::fromStdString(std::string(rawData(index)->name()));
                default:
                    return QVariant();
            }
        }
        else if (role == Qt::DecorationRole && iconFunction_)
            return QVariant(iconFunction_(rawData(index)));
        else if (role == Qt::UserRole)
            return QVariant::fromValue(rawData(index));
    }

    return QVariant();
}

bool MasterTermTreeModel::setData(const QModelIndex &index, const QVariant &value, int role)
{
    if (role != Qt::EditRole)
        return false;

    auto *atomType = rawData(index);
    switch (index.column())
    {
        // Name
        case (0):
            atomType->setName(value.toString().toStdString());
            break;
        // Parameters
        case (1):
            // TODO
            return false;
        default:
            return false;
    }

    emit dataChanged(index, index);

    return true;
}

Qt::ItemFlags MasterTermTreeModel::flags(const QModelIndex &index) const
{
    return index.parent().isValid() ? Qt::ItemIsSelectable | Qt::ItemIsEditable | Qt::ItemIsEnabled
                                    : Qt::ItemIsSelectable | Qt::ItemIsEnabled;
}

QVariant MasterTermTreeModel::headerData(int section, Qt::Orientation orientation, int role) const
{
    if (role != Qt::DisplayRole)
        return QVariant();

    if (orientation == Qt::Horizontal)
        switch (section)
        {
            case (0):
                return "Name";
            case (1):
                return "Parameters";
            default:
                return QVariant();
        }

    return QVariant();
}
