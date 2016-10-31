/*
	*** Keyword Parsing - Species Block
	*** src/main/keywords_species.cpp
	Copyright T. Youngs 2012-2016

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

#include "main/keywords.h"
#include "main/duq.h"
#include "classes/atomtype.h"
#include "classes/species.h"
#include "base/sysfunc.h"

// Species Block Keywords
KeywordData SpeciesBlockData[] = {
	{ "Angle",			5,	"" },
	{ "Atom",			7,	"" },
	{ "Bond",			4,	"" },
	{ "EndSpecies",			0,	"" },
	{ "Grain",			1,	"" },
	{ "Isotopologue",		1,	"" }
};

// Convert text string to SpeciesKeyword
Keywords::SpeciesKeyword Keywords::speciesKeyword(const char* s)
{
	for (int n=0; n<nSpeciesKeywords; ++n) if (DUQSys::sameString(s,SpeciesBlockData[n].name)) return (Keywords::SpeciesKeyword) n;
	return nSpeciesKeywords;
}

// Convert SpeciesKeyword to text string
const char* Keywords::speciesKeyword(Keywords::SpeciesKeyword id)
{
	return SpeciesBlockData[id].name;
}

// Return minimum number of expected arguments
int Keywords::speciesBlockNArguments(Keywords::SpeciesKeyword id)
{
	return SpeciesBlockData[id].nArguments;
}

// Parse Species block
bool Keywords::parseSpeciesBlock(LineParser& parser, DUQ* duq, Species* species)
{
	Messenger::print("Parsing %s '%s'\n", Keywords::inputBlock(Keywords::SpeciesBlock), species->name());

	int el;
	Dnchar arg1, arg2;
	AtomType* at;
	Isotopologue* iso;
	SpeciesAngle* a;
	SpeciesAtom* i;
	SpeciesBond* b;
	SpeciesGrain* sg;
	Isotope* tope;
	bool blockDone = false, error = false;

	while (!parser.eofOrBlank(duq->worldPool()))
	{
		// Read in a line, which should contain a keyword and a minimum number of arguments
		parser.getArgsDelim(duq->worldPool(), LineParser::SkipBlanks+LineParser::UseQuotes);
		Keywords::SpeciesKeyword spKeyword = Keywords::speciesKeyword(parser.argc(0));
		if ((spKeyword != Keywords::nSpeciesKeywords) && ((parser.nArgs()-1) < Keywords::speciesBlockNArguments(spKeyword)))
		{
			Messenger::error("Not enough arguments given to '%s' keyword.\n", Keywords::speciesKeyword(spKeyword));
			error = true;
			break;
		}
		switch (spKeyword)
		{
			case (Keywords::AngleKeyword):
				a = species->addAngle(parser.argi(1)-1, parser.argi(2)-1, parser.argi(3)-1);
				if (a)
				{
					a->setEquilibrium(parser.argd(4));
					a->setForceConstant(parser.argd(5));
				}
				else error = true;
				break;
			case (Keywords::AtomKeyword):
				el = PeriodicTable::find(parser.argc(2));
				if (el == -1)
				{
					Messenger::error("Unrecognised element symbol '%s' found in %s keyword.\n", parser.argc(2), Keywords::speciesKeyword(Keywords::AtomKeyword));
					el = 0;
					error = true;
					break;
				}
				i = species->addAtom(el, parser.argd(3), parser.argd(4), parser.argd(5));
				i->setCharge(parser.argd(6));
				at = duq->findAtomType(parser.argc(7));
				if (!at)
				{
					Messenger::print("Warning: AtomType '%s' has not been defined in Species '%s'...\n", parser.argc(7), species->name());
					at = duq->atomTypeForElement(el);
					if (at) Messenger::print("--> Using first available AtomType ('%s') for element.\n", at->name());
					else
					{
						Messenger::error("No available AtomTypes.\n");
						error = true;
						break;
					}
				}
				i->setAtomType(at);
				break;
			case (Keywords::BondKeyword):
				b = species->addBond(parser.argi(1)-1, parser.argi(2)-1);
				if (b)
				{
					b->setEquilibrium(parser.argd(3));
					b->setForceConstant(parser.argd(4));
				}
				else error = true;
				break;
			case (Keywords::EndSpeciesKeyword):
				species->updateGrains();
				species->centreAtOrigin();
				species->orderAtomsWithinGrains();
				species->calculateIndexLists();
				species->identifyInterGrainTerms();
				species->createScalingMatrix();
				Messenger::print("Found end of Species '%s'.\n", species->name());
				blockDone = true;
				break;
			case (Keywords::GrainKeyword):
				sg = species->addGrain();
				sg->setName(species->uniqueGrainName(parser.argc(1)));
				Messenger::print("--> Added grain definition '%s' to Species '%s'\n", sg->name(), species->name());
				for (int n=2; n<parser.nArgs(); ++n)
				{
					i = species->atom(parser.argi(n)-1);
					if (i == NULL)
					{
						Messenger::error("Failed to find atom with index %i in Species '%s'\n", parser.argi(n), species->name());
						error = true;
					}
					else species->addAtomToGrain(i, sg);
				}
				break;
			case (Keywords::IsotopologueKeyword):
				iso = species->addIsotopologue(species->uniqueIsotopologueName(parser.argc(1)));
				duq->updateIsotopologues(species, iso);
				Messenger::print("--> Added Isotopologue '%s' to Species '%s'\n", iso->name(), species->name());
				// Each parser argument is a string of the form ATOMTYPE=ISO
				for (int n=2; n<parser.nArgs(); ++n)
				{
					// Split argument into parts before and after '='
					arg1 = DUQSys::beforeChar(parser.argc(n),'=');
					arg2 = DUQSys::afterChar(parser.argc(n),'=');
					
					at = duq->findAtomType(arg1.get());
					if (at == NULL)
					{
						Messenger::error("Failed to find AtomType '%s', referred to in Isotopologue '%s', Species '%s'\n", arg1.get(), iso->name(), species->name());
						error = true;
						break;
					}

					// Is supplied isotope valid for the AtomType's element?
					el = at->element();
					tope = PeriodicTable::element(el).hasIsotope(arg2.asInteger());
					if (tope == NULL)
					{
						Messenger::error("No such Isotope (%i) for element %s (AtomType '%s') in Isotopologue '%s', Species '%s'\n", arg2.asInteger(), PeriodicTable::element(el).symbol(), at->name(), iso->name(), species->name());
						error = true;
						break;
					}
					
					// Assign isotope to AtomType
					iso->setAtomTypeIsotope(at, tope);
				}
				break;
			case (Keywords::nSpeciesKeywords):
				Messenger::error("Unrecognised %s block keyword found - '%s'\n", Keywords::inputBlock(Keywords::SpeciesBlock), parser.argc(0));
				Keywords::printValidKeywords(Keywords::SpeciesBlock);
				error = true;
				break;
			default:
				printf("DEV_OOPS - %s block keyword '%s' not accounted for.\n", Keywords::inputBlock(Keywords::SpeciesBlock), Keywords::speciesKeyword(spKeyword));
				error = true;
				break;
		}

		// Error encountered?
		if (error) break;
		
		// End of block?
		if (blockDone) break;
	}

	return (!error);
}
