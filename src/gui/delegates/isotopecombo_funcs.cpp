/*
	*** IsotopeCombo Functions
	*** src/gui/delegates/combolist_funcs.cpp
	Copyright T. Youngs 2012-2018

	This file is part of dUQ.

	dUQ is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	dUQ is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with dUQ.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "gui/delegates/isotopecombo.hui"
#include "base/element.h"
#include "templates/list.h"
#include "templates/variantpointer.h"
#include <QTableWidgetItem>

IsotopeComboDelegate::IsotopeComboDelegate(QObject* parent) : QItemDelegate(parent)
{
}

// Destructor
IsotopeComboDelegate::~IsotopeComboDelegate()
{
}

// Create editor
QWidget* IsotopeComboDelegate::createEditor(QWidget* parent, const QStyleOptionViewItem &option, const QModelIndex &index) const
{
	// Create editor widget (in this case a combo box) and add the available options
	QComboBox* editor = new QComboBox(parent);

	// Get the data from the model index - it should be an Isotope*
	Isotope* isotope = (Isotope*) VariantPointer<Isotope>(index.data(Qt::UserRole));
	if (isotope)
	{
		// Populate combo with all possible Isotopes for this Element
		Element* element = isotope->element();
		ListIterator<Isotope> isotopeIterator(element->isotopes());
		while (Isotope* tope = isotopeIterator.iterate()) editor->addItem(textForIsotope(tope));
	}
	else Messenger::error("IsotopeComboDelegate::createEditor() - Did not find an Isotope* in the associated QModelIndex.\n");

	return editor;
}

// Set initial value in editor
void IsotopeComboDelegate::setEditorData(QWidget* editor, const QModelIndex &index) const
  {
	// Grab (cast) the QComboBox
	QComboBox* comboBox = static_cast<QComboBox*>(editor);

	// Get the data from the model index - it should be an Isotope*
	Isotope* isotope = (Isotope*) VariantPointer<Isotope>(index.data(Qt::UserRole));
	if (isotope)
	{
		comboBox->setCurrentIndex(isotope->element()->isotopeIndex(isotope));
	}
	else Messenger::error("IsotopeComboDelegate::createEditor() - Did not find an Isotope* in the associated QModelIndex.\n");
// 	QString value = index.model()->data(index, Qt::EditRole).toString();
}

// Get value from editing widget, and set back in model
void IsotopeComboDelegate::setModelData(QWidget* editor, QAbstractItemModel* model, const QModelIndex &index) const
{
	// Grab (cast) the QComboBox
	QComboBox* comboBox = static_cast<QComboBox*>(editor);

	// Get existing Isotope
	Isotope* isotope = (Isotope*) VariantPointer<Isotope>(index.data(Qt::UserRole));
	if (isotope)
	{
		// Get parent Element, and find index of new Isotope
		Element* element = isotope->element();
		isotope = element->isotope(comboBox->currentIndex());

		// Set the Isotope pointer in the model
		model->setData(index, VariantPointer<Isotope>(isotope), Qt::UserRole);
		model->setData(index, comboBox->currentText(), Qt::EditRole);
	}
}

// Update widget geometry
void IsotopeComboDelegate::updateEditorGeometry(QWidget* editor, const QStyleOptionViewItem &option, const QModelIndex &index) const
{
	editor->setGeometry(option.rect);
}

/*
 * Helper Functions
 */

// Return text for Isotope specified
QString IsotopeComboDelegate::textForIsotope(Isotope* isotope)
{
	if (!isotope) return "NULL";

	// Special cases
	if (isotope->A() == Isotope::NaturalIsotope) return QString("Natural (bc = %1)").arg(isotope->boundCoherent());
	else if (isotope->A() == Isotope::ZeroIsotope) return QString("Zero (bc = %1)").arg(isotope->boundCoherent());
	else if (isotope->A() == Isotope::InverseIsotope) return QString("Inverse (bc = %1)").arg(isotope->boundCoherent());

	return QString("%1 (bc = %2)").arg(isotope->A()).arg(isotope->boundCoherent());
}
