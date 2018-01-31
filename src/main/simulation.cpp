/*
	*** dUQ - Simulation
	*** src/main/simulation.cpp
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
#include "modules/export/export.h"
#include "base/sysfunc.h"
#include "base/lineparser.h"
#include "templates/genericlisthelper.h"

/*
 * Private Functions
 */

// Find first occurrence of named Module in pre-processing tasks
Module* DUQ::findPreProcessingTask(const char* name)
{
	for (RefListItem<Module,bool>* ri = preProcessingTasks_.first(); ri != NULL; ri = ri->next)
	{
		Module* module = ri->item;

		if (DUQSys::sameString(name, module->name())) return module;
	}

	return NULL;
}

// Find first occurrence of named Module in post-processing tasks
Module* DUQ::findPostProcessingTask(const char* name)
{
	for (RefListItem<Module,bool>* ri = postProcessingTasks_.first(); ri != NULL; ri = ri->next)
	{
		Module* module = ri->item;

		if (DUQSys::sameString(name, module->name())) return module;
	}

	return NULL;
}

/*
 * Public Functions
 */

// Return list of main processing Modules to run
ModuleList& DUQ::processingModules()
{
	return processingModules_;
}

// Return data associated with main processing Modules
GenericList& DUQ::processingModuleData()
{
	return processingModuleData_;
}

// Iterate main simulation
bool DUQ::iterate(int nIterations)
{
	/*
	 * This is the main program loop. We perform the following steps:
	 *
	 *  1)	Run all Module pre-processing tasks using all processes available (worldPool_)
	 *  2)	Run all Modules assigned to Configurations using individual parallel strategies for Configurations
	 *  3)	Reassemble Configuration data on all processes
	 *  4)	Run all processing Modules using all processes available (worldPool_)
	 *  5)	Run any Module post-processing tasks using all processes available (worldPool_)
	 *  6)	Write data (master process only)
	 */

	mainLoopTimer_.zero();
	mainLoopTimer_.start();

	int iterationsPerformed = 0;

	while ((maxIterations_ < 0) || (iteration_ < maxIterations_))
	{
		// Increase iteration counters
		++iteration_;
		++nIterationsPerformed_;

		Messenger::banner("MAIN LOOP ITERATION %10i / %-10s    %s", iteration_, maxIterations_ == -1 ? "(no limit)" : DUQSys::itoa(maxIterations_), DUQSys::currentTimeAndDate());

		/*
		 *  0)	Print schedule of tasks to run
		 */
		Messenger::print("--> Pre-Processing\n");
		if (preProcessingTasks_.nItems() == 0) Messenger::print("  (( No Tasks ))\n");
		RefListIterator<Module,bool> preIterator(preProcessingTasks_);
		while (Module* module = preIterator.iterate()) Messenger::print("      --> %-20s  (%s)\n", module->name(), module->frequencyDetails(iteration_));
		Messenger::print("\n");

		Messenger::print("--> Configuration Processing\n");
		for (Configuration* cfg = configurations_.first(); cfg != NULL; cfg = cfg->next)
		{
			Messenger::print("   * '%s'\n", cfg->name());
			if (cfg->nModules() == 0) Messenger::print("  (( No Tasks ))\n");
			RefListIterator<Module,bool> modIterator(cfg->modules().modules());
			while (Module* module = modIterator.iterate()) Messenger::print("      --> %20s  (%s)\n", module->name(), module->enabled() ? module->frequencyDetails(iteration_) : "Disabled");
		}
		Messenger::print("\n");

		Messenger::print("--> Main Processing\n");
		RefListIterator<Module,bool> processingIterator(processingModules_.modules());
		while (Module* module = processingIterator.iterate()) Messenger::print("      --> %20s  (%s)\n", module->name(), module->frequencyDetails(iteration_));
		Messenger::print("\n");

		Messenger::print("--> Post-Processing\n");
		if (postProcessingTasks_.nItems() == 0) Messenger::print("  (( No Tasks ))\n");
		RefListIterator<Module,bool> postIterator(postProcessingTasks_);
		while (Module* module = postIterator.iterate()) Messenger::print("      --> %-20s  (%s)\n", module->name(), module->frequencyDetails(iteration_));


		/*
		 *  1) 	Perform pre-processing tasks (using worldPool_)
		 */
		if (preProcessingTasks_.nItems() > 0) Messenger::banner("Pre-Processing");
		preIterator.restart();
		while (Module* module = preIterator.iterate())
		{
			if (!module->runThisIteration(iteration_)) continue;

			Messenger::heading("'%s'", module->name());

			// Execute the pre-processing stage
			if (!module->executePreProcessing(*this, worldPool_))
			{
				Messenger::error("Module '%s' experienced errors. Exiting now.\n", module->name());
				return false;
			}
		}

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of pre-processing...\n");
		worldPool_.wait(ProcessPool::Pool);


		/*
		 *  2)	Loop over Configurations, running their modules in the sequence they are defined
		 * 	If a process is not involved in the Configuration's ProcessPool, it can move on
		 */
		Messenger::banner("Configuration Processing");

		bool result = true;
		for (Configuration* cfg = configurations_.first(); cfg != NULL; cfg = cfg->next)
		{
			// Check for failure of one or more processes / processing tasks
			if (!worldPool_.allTrue(result))
			{
				Messenger::error("One or more processes experienced failures. Exiting now.\n");
				return false;
			}

			Messenger::heading("'%s'", cfg->name());

			// Check involvement of this process
			if (!cfg->processPool().involvesMe())
			{
				Messenger::print("Process rank %i not involved with this Configuration, so moving on...\n", ProcessPool::worldRank());
				continue;
			}

			// Loop over Modules defined in the Configuration
			RefListIterator<Module,bool> moduleIterator(cfg->modules().modules());
			while (Module* module = moduleIterator.iterate())
			{
				if (!module->runThisIteration(iteration_)) continue;

				Messenger::heading("%s (%s)", module->name(), module->uniqueName());

				result = module->executeMainProcessing(*this, cfg->processPool());

				if (!result) return false;
			}
		}
		if (!result) return false;

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of Configuration processing...\n");
		worldPool_.wait(ProcessPool::Pool);


		/*
		 *  3)	Reassemble data on all nodes
		 */
		Messenger::banner("Reassemble Data");
		// Loop over Configurations
		for (Configuration* cfg = configurations_.first(); cfg != NULL; cfg = cfg->next)
		{
			Messenger::printVerbose("Broadcasting data for Configuration '%s'...\n", cfg->name());
			if (!cfg->broadcastCoordinates(worldPool_, cfg->processPool().rootWorldRank())) return false;

			Messenger::printVerbose("Broadcasting Module data for Configuration '%s'...\n", cfg->name());
			if (!cfg->moduleData().broadcast(worldPool_, cfg->processPool().rootWorldRank())) return false;
		}

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of data reassembly...\n");
		worldPool_.wait(ProcessPool::Pool);

	
		/*
		 *  4)	Run processing Modules (using worldPool_)
		 */
		if (processingModules_.nModules() > 0) Messenger::banner("Main Processing");
		processingIterator.restart();
		while (Module* module = processingIterator.iterate())
		{
			if (!module->runThisIteration(iteration_)) continue;

			Messenger::heading("%s (%s)", module->name(), module->uniqueName());

			result = module->executeMainProcessing(*this, worldPool_);

			if (!result)
			{
				Messenger::error("Module '%s' experienced errors. Exiting now.\n", module->name());
				return false;
			}
		}

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of main processing...\n");
		worldPool_.wait(ProcessPool::Pool);


		/*
		 *  5)	Perform post-processing tasks (using worldPool_)
		 */
		if (postProcessingTasks_.nItems() > 0) Messenger::banner("Post-Processing");
		postIterator.restart();
		while (Module* module = postIterator.iterate())
		{
			if (!module->runThisIteration(iteration_)) continue;

			Messenger::print("\n");
			Messenger::print("--> Module '%s'\n", module->name());

			// Execute the post-processing stage
			if (!module->executePostProcessing(*this, worldPool_))
			{
				Messenger::error("Module '%s' experienced errors. Exiting now.\n", module->name());
				return false;
			}
		}

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of post-processing...\n");
		worldPool_.wait(ProcessPool::Pool);


		/*
		 *  6)	Write data
		 */
		if (worldPool_.isMaster() && (writeFrequency_ > 0) && (iteration_%writeFrequency_ == 0))
		{
			Messenger::banner("Write Data");

			/*
			 * Flag other data for inclusion in restart file
			 */
			
			// Iteration number
			GenericListHelper<int>::realise(processingModuleData_, "Iteration", "DUQ", GenericItem::InRestartFileFlag) = iteration_;

			// Pair Potentials
			for (PairPotential* pot = pairPotentials_.first(); pot != NULL; pot = pot->next)
			{
				GenericListHelper<XYData>::realise(processingModuleData_, CharString("Potential_%s-%s_Additional", pot->atomTypeNameI(), pot->atomTypeNameJ()), "DUQ", GenericItem::InRestartFileFlag) = pot->uAdditional();
			}

			/*
			 * Restart File
			 */

			if (!saveRestart(CharString("%s.restart", filename_.get())))
			{
				Messenger::error("Failed to write restart file.\n");
				worldPool_.stop();
				return false;
			}

			/*
			 * Configuration Data
			 */

			// Keep track of number of Configurations saved / to save
			for (Configuration* cfg = configurations_.first(); cfg != NULL; cfg = cfg->next)
			{
				if (iteration_%cfg->coordinatesOutputFrequency() != 0) continue;

				Messenger::print("Writing Configuration output file '%s'...\n", cfg->outputCoordinatesFile());

				// Open the file and use the Export module to write the Configuration data as xyz
				LineParser parser;
				if (!parser.openOutput(cfg->outputCoordinatesFile(), true))
				{
					parser.closeFiles();
					worldPool_.stop();
					return false;
				}
				else if (!ExportModule::writeConfigurationXYZ(parser, cfg, cfg->name()))
				{
					Messenger::print("Export: Failed to write Configuration output file.\n");
					parser.closeFiles();
					worldPool_.stop();
					return false;
				}

				// Append ensemble file
				if (cfg->appendEnsemble())
				{
					CharString ensembleFile("%s.xyz.ensemble", cfg->name());
					Messenger::print("Appending Configuration output file '%s'...\n", ensembleFile.get());

					LineParser ensembleParser;
					if (!ensembleParser.appendOutput(ensembleFile.get()))
					{
						ensembleParser.closeFiles();
						worldPool_.stop();
						return false;
					}
					else if (!ExportModule::writeConfigurationXYZ(ensembleParser, cfg, cfg->name()))
					{
						Messenger::print("Export: Failed to append Configuration ensemble output file.\n");
						ensembleParser.closeFiles();
						worldPool_.stop();
						return false;
					}
				}
			}

			// All good. Carry on!
			worldPool_.proceed();
		}
		else if (worldPool_.isSlave() && (writeFrequency_ > 0) && (iteration_%writeFrequency_ == 0) && (!worldPool_.decision())) return false;

		// Sync up all processes
		Messenger::printVerbose("Waiting for other processes at end of data write section...\n");
		worldPool_.wait(ProcessPool::Pool);


		Messenger::banner("END OF MAIN LOOP ITERATION %10i         %s", iteration_, DUQSys::currentTimeAndDate());


		// If we have performed the requested number of iterations, break here
		++iterationsPerformed;
		if ((nIterations > 0) && (iterationsPerformed == nIterations)) break;
	}

	mainLoopTimer_.stop();

	return true;
}

// Return current simulation step
int DUQ::iteration() const
{
	return iteration_;
}

// Print timing information
void DUQ::printTiming()
{
	Messenger::banner("Timing Information");

	Messenger::print("Configuration Processing:\n");
	for (Configuration* cfg = configurations_.first(); cfg != NULL; cfg = cfg->next)
	{
		if (cfg->nModules() == 0) continue;

		Messenger::print("   * '%s'\n", cfg->name());
		RefListIterator<Module,bool> modIterator(cfg->modules().modules());
		while (Module* module = modIterator.iterate())
		{
			SampledDouble timingInfo = module->processTimes();
			Messenger::print("      --> %30s  %6.1f s/iteration (%i iterations)\n", CharString("%s (%s)", module->name(), module->uniqueName()).get(), timingInfo.mean(), timingInfo.count());
		}
	}
	Messenger::print("\n");

	Messenger::print("Main Processing:\n");
	RefListIterator<Module,bool> processingIterator(processingModules_.modules());
	while (Module* module = processingIterator.iterate())
	{
		SampledDouble timingInfo = module->processTimes();
		Messenger::print("      --> %30s  %6.1f s/iteration (%i iterations)\n", CharString("%s (%s)", module->name(), module->uniqueName()).get(), timingInfo.mean(), timingInfo.count());
	}
	Messenger::print("\n");

	Messenger::print("Total time taken for %i iterations was %s (%s / iteration).\n", nIterationsPerformed_, mainLoopTimer_.elapsedTimeString(), Timer::timeString(mainLoopTimer_.secondsElapsed() / nIterationsPerformed_));

	Messenger::print("\n");
}
