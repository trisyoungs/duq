/*
	*** dUQ Main Structure
	*** src/main/duq.cpp
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

#include "main/duq.h"
#include "classes/species.h"
#include "classes/atomtype.h"
#include "classes/braggpeak.h"
#include "classes/kvector.h"
#include "classes/partialset.h"
#include "classes/weights.h"
#include "base/genericitem.h"
#include "templates/genericitems.h"

// List<T> Master Instances
template <class T> List<T> List<T>::masterInstance_;

// Constructor
DUQ::DUQ() : atomTypes_(List<AtomType>::master()), species_(List<Species>::master()), configurations_(List<Configuration>::master())
{
	// PairPotentials
	pairPotentialDelta_ = 0.005;
	pairPotentialRange_ = 15.0;
	pairPotentialsIncludeCoulomb_ = true;

	// Simulation
	iteration_ = 0;
	nIterationsPerformed_ = 0;
	setUp_ = false;

	// Simulation Setup
	nBoxNormalisationPoints_ = 500000000;
	seed_ = -1;
	restartFileFrequency_ = 10;

	// Parallel Comms
	parallelStrategy_ = DUQ::SequentialConfigStrategy;

	// I/O
	autoAddDependentModules_ = false;

	// Register GenericItems
	registerGenericItems();
}

// Destructor
DUQ::~DUQ()
{
	clear();
}

/*
 * Core
 */

// Clear all data
void DUQ::clear()
{
	Messenger::printVerbose("Clearing Configurations...\n");
	configurations_.clear();

	Messenger::printVerbose("Clearing Species...\n");
	species_.clear();

	Messenger::printVerbose("Clearing PotentialMap...\n");
	potentialMap_.clear();

	Messenger::printVerbose("Clearing AtomTypes...\n");
	atomTypes_.clear();

	Messenger::printVerbose("Clearing misc...\n");
	filename_.clear();

	setUp_ = false;
}

// Register GenericItems
void DUQ::registerGenericItems()
{
	GenericItem::addItemClass(new GenericItemContainer<bool>("bool"));
	GenericItem::addItemClass(new GenericItemContainer<int>("int"));
	GenericItem::addItemClass(new GenericItemContainer<double>("double"));
	GenericItem::addItemClass(new GenericItemContainer<CharString>("CharString"));

	GenericItem::addItemClass(new GenericItemContainer< Vec3<int> >("Vec3<int>"));
	GenericItem::addItemClass(new GenericItemContainer< Vec3<double> >("Vec3<double>"));

	GenericItem::addItemClass(new GenericItemContainer< Array2D<double> >("Array2D<double>"));
	GenericItem::addItemClass(new GenericItemContainer< Array2D<DummyClass> >("Array2D<DummyClass>"));

	GenericItem::addItemClass(new GenericItemContainer< Array<int> >("Array<int>"));
	GenericItem::addItemClass(new GenericItemContainer< Array<double> >("Array<double>"));
// 	GenericItem::addItemClass(new GenericItemContainer<Array<T>(""));
	GenericItem::addItemClass(new GenericItemContainer< Array< Vec3<int> > >("Array<Vec3<int>>"));
	GenericItem::addItemClass(new GenericItemContainer< Array< Vec3<double> > >("Array<Vec3<double>>"));

	GenericItem::addItemClass(new GenericItemContainer<BraggPeak>(BraggPeak::itemClassName()));
	GenericItem::addItemClass(new GenericItemContainer<KVector>(KVector::itemClassName()));
	GenericItem::addItemClass(new GenericItemContainer<IsotopologueMix>(IsotopologueMix::itemClassName()));
	GenericItem::addItemClass(new GenericItemContainer<PartialSet>(PartialSet::itemClassName()));
	GenericItem::addItemClass(new GenericItemContainer<XYData>(XYData::itemClassName()));
	GenericItem::addItemClass(new GenericItemContainer<Weights>(Weights::itemClassName()));
}

// Set up everything needed to run the simulation
bool DUQ::setUp()
{
	setUp_ = false;

	// Initialise random seed
	if (seed_ == -1) srand( (unsigned)time( NULL ) );
	else srand(seed_);

	// Perform simulation set up (all processes)
	Messenger::banner("Setting Up Simulation");
	if (!setUpSimulation())
	{
		Messenger::print("Failed to set up simulation.\n");
		return false;
	}

	// Set up parallel comms / limits etc.
	Messenger::banner("Setting Up Parallelism");
	if (!setUpMPIPools())
	{
		Messenger::print("Failed to set up parallel communications.\n");
		return false;
	}

	setUp_ = true;

	return true;
}

// Return whether the simulation has been set up
bool DUQ::isSetUp() const
{
	return setUp_;
}
