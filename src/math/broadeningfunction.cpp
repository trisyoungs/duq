/*
	*** Broadening Function
	*** src/math/broadeningfunction.cpp
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

#include "math/broadeningfunction.h"
#include "base/lineparser.h"
#include "base/processpool.h"
#include "base/sysfunc.h"
#include "templates/enumhelpers.h"

// Constructor
BroadeningFunction::BroadeningFunction(BroadeningFunction::FunctionType function, double p1, double p2, double p3, double p4, double p5, double p6)
{
	set(function, p1, p2, p3, p4, p5, p6);

	inverted_ = false;
}

// Destructor
BroadeningFunction::~BroadeningFunction()
{
}

// Copy Constructor
BroadeningFunction::BroadeningFunction(const BroadeningFunction& source)
{
	(*this) = source;
}

// Assignment operator
void BroadeningFunction::operator=(const BroadeningFunction& source)
{
	function_ = source.function_;
	for (int n=0; n<MAXBROADENINGFUNCTIONPARAMS; ++n) parameters_[n] = source.parameters_[n];
	inverted_ = source.inverted_;

}

const char* BroadeningFunctionKeywords[] = { "Unity", "Gaussian", "ScaledGaussian", "OmegaDependentGaussian", "GaussianC2" };
int BroadeningFunctionNParameters[] = { 0, 1, 1, 1, 2 };

// Return FunctionType from supplied string
BroadeningFunction::FunctionType BroadeningFunction::functionType(const char* s)
{
	for (int n=0; n<nFunctionTypes; ++n) if (DUQSys::sameString(s, BroadeningFunctionKeywords[n])) return (FunctionType) n;
	return BroadeningFunction::nFunctionTypes;
}

// Return FunctionType name
const char* BroadeningFunction::functionType(BroadeningFunction::FunctionType func)
{
	return BroadeningFunctionKeywords[func];
}

// Return number of parameters needed to define function
int BroadeningFunction::nFunctionParameters(FunctionType func)
{
	return BroadeningFunctionNParameters[func];
}

// Return description for FunctionType
const char* BroadeningFunction::functionDescription(FunctionType func)
{
	switch (func)
	{
		case (BroadeningFunction::UnityFunction):
			return "Function that always returns 1.0";
			break;
		case (BroadeningFunction::GaussianFunction):
			return "Gaussian (no prefactor, unnormalised)";
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			return "Gaussian with prefactor";
			break;
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			return "Gaussian (no prefactor, unnormalised, omega dependent FWHM)";
			break;
		case (BroadeningFunction::GaussianC2Function):
			return "Gaussian (no prefactor, unnormalised, independent and omega-dependent FWHM, EPSR-style)";
			break;
		default:
			break;
	}

	return "NO BROADENING FUNCTION DESCRIPTION AVAILABLE.";
}

/*
 * Function Data
 */

void BroadeningFunction::set(BroadeningFunction::FunctionType function, double p1, double p2, double p3, double p4, double p5, double p6)
{
	function_ = function;
	parameters_[0] = p1;
	parameters_[1] = p2;
	parameters_[2] = p3;
	parameters_[3] = p4;
	parameters_[4] = p5;
	parameters_[5] = p6;

	// Set up any necessary dependent parameters
	setUpDependentParameters();
}

// Set function data from LineParser source
bool BroadeningFunction::set(LineParser& parser, int startArg)
{
	// Zero all parameters before we start
	for (int n=0; n<MAXBROADENINGFUNCTIONPARAMS; ++n) parameters_[n] = 0.0;

	// First argument is the form of the function
	BroadeningFunction::FunctionType funcType = BroadeningFunction::functionType(parser.argc(startArg));
	if (funcType == BroadeningFunction::nFunctionTypes)
	{
		Messenger::error("Unrecognised Function type '%s'.\n", parser.argc(startArg));
		return false;
	}

	// Do we have the right number of arguments for the function specified?
	if ((parser.nArgs() - startArg) < BroadeningFunction::nFunctionParameters(funcType))
	{
		Messenger::error("Too few parameters supplied for Function '%s' (expected %i, found %i).\n", BroadeningFunction::functionType(funcType), BroadeningFunction::nFunctionParameters(funcType), parser.nArgs() - startArg);
		return false;
	}

	// Set up function and basic parameters
	function_ = funcType;
	switch (function_)
	{
		case (BroadeningFunction::UnityFunction):
			break;
		case (BroadeningFunction::GaussianFunction):
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			// FWHM
			parameters_[0] = parser.argd(startArg+1);
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			// Prefactor A
			parameters_[0] = parser.argd(startArg+1);
			// FWHM
			parameters_[1] = parser.argd(startArg+2);
			break;
		case (BroadeningFunction::GaussianC2Function):
			// FWHM1
			parameters_[0] = parser.argd(startArg+1);
			// FWHM2
			parameters_[1] = parser.argd(startArg+2);
			break;
		default:
			Messenger::error("Function form '%s' not accounted for in set(LineParser&,int).\n", BroadeningFunction::functionType(funcType));
			return false;
	}

	// Set up any necessary dependent parameters
	setUpDependentParameters();

	return true;
}

// Set up any dependent parameters based on the input set of parameters
void BroadeningFunction::setUpDependentParameters()
{
	switch (function_)
	{
		case (BroadeningFunction::UnityFunction):
			break;
		case (BroadeningFunction::GaussianFunction):
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			// parameters_[0] = FWHM
			// c (calculated from FWHM)
			parameters_[1] = parameters_[0] / (2.0 * sqrt(2.0 * log(2.0)));
			// 1/c
			parameters_[2] = 1.0 / parameters_[1];
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			// parameters_[0] = A
			// parameters_[1] = FWHM
			// c (calculated from FWHM)
			parameters_[2] = parameters_[1] / (2.0 * sqrt(2.0 * log(2.0)));
			// 1/c
			parameters_[3] = 1.0 / parameters_[2];
			break;
		case (BroadeningFunction::GaussianC2Function):
			// parameters_[0] = FWHM1
			// parameters_[1] = FWHM2
			// c1 (calculated from FWHM1)
			parameters_[2] = parameters_[0] / (2.0 * sqrt(2.0 * log(2.0)));
			// c2 (calculated from FWHM2)
			parameters_[3] = parameters_[1] / (2.0 * sqrt(2.0 * log(2.0)));
			// 1/c1
			parameters_[4] = 1.0 / parameters_[2];
			// 1/c2
			parameters_[5] = 1.0 / parameters_[3];
			break;
		default:
			Messenger::error("Function form '%s' not accounted for in setUpDependentParameters().\n", BroadeningFunction::functionType(function_));
	}
}

// Return function type
BroadeningFunction::FunctionType BroadeningFunction::function() const
{
	return function_;
}

// Return specified parameter
double BroadeningFunction::parameter(int index) const
{
	return parameters_[index];
}

// Return short summary of function parameters
CharString BroadeningFunction::parameterSummary() const
{
	switch (function_)
	{
		case (BroadeningFunction::UnityFunction):
			return "<no parameters>";
			break;
		case (BroadeningFunction::GaussianFunction):
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			return CharString("FWHM=%f", parameters_[0]);
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			return CharString("A=%f, FWHM=%f", parameters_[0], parameters_[1]);
			break;
		case (BroadeningFunction::GaussianC2Function):
			return CharString("FWHM1=%f, FWHM2=%f", parameters_[0], parameters_[1]);
			break;
		default:
			Messenger::warn("BroadeningFunction::value(x) - Function id %i not accounted for.\n", function_);
			break;
	}

	return "NULL";
}

// Set inversion state
void BroadeningFunction::setInverted(bool state)
{
	inverted_ = state;
}

// Return value of function given parameters x and omega
double BroadeningFunction::y(double x, double omega) const
{
	return (inverted_ ? yFTActual(x, omega) : yActual(x, omega));
}

// Return value of Fourier transform of function, given parameters x and omega
double BroadeningFunction::yFT(double x, double omega) const
{
	return (inverted_ ? yActual(x, omega) : yFTActual(x, omega));
}

// Return value of function given parameters x and omega, regardless of inversion state
double BroadeningFunction::yActual(double x, double omega) const
{
	switch (function_)
	{
		case (BroadeningFunction::UnityFunction):
			return 1.0;
			break;
		case (BroadeningFunction::GaussianFunction):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero
			 * 
			 * Parameters:  0 = FWHM
			 * 		1 = c     	(precalculated from FWHM)
			 * 		2 = 1.0 / c
			 * 
			 * 	      (     x * x   ) 			  FWHM
			 * f(x) = exp ( - --------- )      where c = --------------
			 * 	      (   2 * c * c )		     2 sqrt(2 ln 2) 
			 */
			return exp(-(0.5 * x*x * parameters_[2]*parameters_[2]));
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			/*
			 * Gaussian with prefactor, centred at zero
			 * 
			 * Parameters:  0 = A, prefactor
			 * 		1 = FWHM
			 * 		2 = c     	(precalculated from FWHM)
			 * 		3 = 1.0 / c
			 * 
			 * 	        (     x * x   ) 		    FWHM
			 * f(x) = A exp ( - --------- )      where c = --------------
			 * 	        (   2 * c * c )		       2 sqrt(2 ln 2) 
			 */
			return parameters_[0] * exp(-(0.5 * x*x * parameters_[3]*parameters_[3]));
			break;
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero, with variable FWHM
			 * 
			 * Parameters:  0 = FWHM
			 * 		1 = c     	(precalculated from FWHM)
			 * 		2 = 1.0 / c
			 * 
			 * 	      (         x * x      )		        FWHM
			 * f(x) = exp ( - ---------------- )      where c = --------------
			 * 	      (   2 * (c*omega)**2 )		    2 sqrt(2 ln 2) 
			 */
			return exp(-(x*x)/(2.0*(parameters_[1]*omega)*(parameters_[1]*omega)));
			break;
		case (BroadeningFunction::GaussianC2Function):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero, with variable FWHM
			 * 
			 * Parameters:  0 = FWHM1
			 * 		1 = FWHM2
			 * 		2 = c1     	(precalculated from FWHM1)
			 * 		3 = c2     	(precalculated from FWHM2)
			 * 		4 = 1.0 / c1
			 * 		5 = 1.0 / c2
			 * 
			 * 	      (         a1 * a1       )			   FWHMn
			 * f(x) = exp ( - ------------------- )      where cn = --------------
			 * 	      (   2 * (c1 + c2*a2)**2 )		       2 sqrt(2 ln 2) 
			 */
			return exp(-(x*x)/(2.0 * (parameters_[2] + parameters_[3]*omega) * (parameters_[2] + parameters_[3]*omega)));
			break;
		default:
			Messenger::warn("BroadeningFunction::value() - Function id %i not accounted for.\n", function_);
			break;
	}

	return 0.0;
}

// Return value of Fourier transform of function, given parameters x and omega, regardless of inversion state
double BroadeningFunction::yFTActual(double x, double omega) const
{
	switch (function_)
	{
		case (BroadeningFunction::UnityFunction):
			return 1.0;
			break;
		case (BroadeningFunction::GaussianFunction):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero
			 * 
			 * Parameters:  0 = FWHM
			 * 		1 = c     	(precalculated from FWHM)
			 * 		2 = 1.0 / c
			 * 
			 * 	      (   x * x * c * c ) 		      FWHM
			 * f(x) = exp ( - ------------- )      where c = --------------
			 * 	      (         2       )	         2 sqrt(2 ln 2) 
			 */
			return exp(-(0.5 * x*x * parameters_[1]*parameters_[1]));
			break;
		case (BroadeningFunction::ScaledGaussianFunction):
			/*
			 * Gaussian with prefactor, centred at zero
			 * 
			 * Parameters:  0 = A, prefactor
			 * 		1 = FWHM
			 * 		2 = c     	(precalculated from FWHM)
			 * 		3 = 1.0 / c
			 * 
			 * 	        (   x * x * c * c ) 		        FWHM
			 * f(x) = A exp ( - ------------- )      where c = --------------
			 * 	        (	  2	  )		   2 sqrt(2 ln 2) 
			 */
			return parameters_[0] * exp(-(0.5 * x*x * parameters_[2]*parameters_[2]));
			break;
		case (BroadeningFunction::OmegaDependentGaussianFunction):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero, with variable FWHM
			 * 
			 * Parameters:  0 = FWHM1
			 * 		1 = c     	(precalculated from FWHM1)
			 * 		2 = 1.0 / c
			 * 
			 * 	      (   x*x * (c*omega)**2 ) 		           FWHM
			 * f(x) = exp ( - ------------------ )      where c = --------------
			 * 	      (		   2         )	              2 sqrt(2 ln 2) 
			 */
			return exp(-(0.5 * x*x * (parameters_[1]*omega) * (parameters_[1]*omega)));
			break;
		case (BroadeningFunction::GaussianC2Function):
			/*
			 * Unnormalised Gaussian with no prefactor, centred at zero, with variable FWHM
			 * 
			 * Parameters:  0 = FWHM1
			 * 		1 = FWHM2
			 * 		2 = c1     	(precalculated from FWHM1)
			 * 		3 = c2     	(precalculated from FWHM2)
			 * 		4 = 1.0 / c1
			 * 		5 = 1.0 / c2
			 * 
			 * 	      (   x * x * (c1 + c2*omega)**2 ) 		           FWHMn
			 * f(x) = exp ( - -------------------------- )      where cn = --------------
			 * 	      (                2             )	               2 sqrt(2 ln 2) 
			 */
			return exp(-(0.5 * x*x * (parameters_[2] + parameters_[3]*omega) * (parameters_[2] + parameters_[3]*omega)));
			break;
		default:
			Messenger::warn("BroadeningFunction::ft() - Function id %i not accounted for.\n", function_);
			break;
	}

	return 0.0;
}

/*
 * GenericItemBase Implementations
 */

// Return class name
const char* BroadeningFunction::itemClassName()
{
	return "BroadeningFunction";
}

// Write data through specified LineParser
bool BroadeningFunction::write(LineParser& parser)
{
	CharString line("%s", functionType(function_));
	for (int n=0; n<nFunctionParameters(function_); ++n) line.strcatf(" %16.9e", parameters_[n]);
	return parser.writeLine(line.get());
}

// Read data through specified LineParser
bool BroadeningFunction::read(LineParser& parser)
{
	if (parser.getArgsDelim(LineParser::Defaults) != LineParser::Success) return false;
	function_ = functionType(parser.argc(0));
	for (int n=0; n<nFunctionParameters(function_); ++n) parameters_[n] = parser.argd(n+1);
	return true;
}

/*
 * Parallel Comms
 */

// Broadcast data from Master to all Slaves
bool BroadeningFunction::broadcast(ProcessPool& procPool, int root)
{
#ifdef PARALLEL
	if (!procPool.broadcast(EnumCast<BroadeningFunction::FunctionType>(function_), root)) return false;
	if (!procPool.broadcast(parameters_, MAXBROADENINGFUNCTIONPARAMS, root)) return false;
#endif
	return true;
}

// Check item equality
bool BroadeningFunction::equality(ProcessPool& procPool)
{
#ifdef PARALLEL
	if (!procPool.equality(EnumCast<BroadeningFunction::FunctionType>(function_))) return Messenger::error("BroadeningFunction function type is not equivalent (process %i has %i).\n", procPool.poolRank(), function_);
	if (!procPool.equality(parameters_, MAXBROADENINGFUNCTIONPARAMS)) return Messenger::error("BroadeningFunction parameters are not equivalent.\n");
#endif
	return true;
}
