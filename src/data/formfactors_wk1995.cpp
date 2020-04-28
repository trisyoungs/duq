/*
	*** Waasmaier & Kirfel '95 X-Ray Form Factors
	*** src/data/formfactors_wk1995.h
	Copyright T. Youngs 2012-2020

	This file is part of Dissolve.

	Dissolve is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Dissolve is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Dissolve.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "data/formfactors_wk1995.h"
#include "data/formfactors.h"
#include <algorithm>
#include <functional>
#include <vector>

// Constructor
FormFactorData_WK1995::FormFactorData_WK1995(int z, int formalCharge, double a1, double b1, double a2, double b2, double a3, double b3, double a4, double b4, double a5, double b5, double c)
    : FormFactorData(z, formalCharge)
{
	// Set the form factor data
	a_[0] = a1;
	b_[0] = b1;
	a_[1] = a2;
	b_[1] = b2;
	a_[2] = a3;
	b_[2] = b3;
	a_[3] = a4;
	b_[3] = b4;
	a_[4] = a5;
	b_[4] = b5;
	c_ = c;
}

// Assignment Operator
FormFactorData_WK1995 &FormFactorData_WK1995::operator=(const FormFactorData_WK1995 &source)
{
	// Set the form factor data
	a_[0] = source.a_[0];
	b_[0] = source.b_[0];
	a_[1] = source.a_[1];
	b_[1] = source.b_[1];
	a_[2] = source.a_[2];
	b_[2] = source.b_[2];
	a_[3] = source.a_[3];
	b_[3] = source.b_[3];
	a_[4] = source.a_[4];
	b_[4] = source.b_[4];
	c_ = source.c_;
	formalCharge_ = source.formalCharge_;

	return (*this);
}

// Return magnitude of form factor at specified Q value
double FormFactorData_WK1995::magnitude(double Q) const
{
	/*
	 * Equation is:
	 *
	 * f = c + SUM[ai*exp(-bi*k^2)]  i=1,5
	 *
	 * k = sin(theta) / lambda
	 *
	 * So, remove factor of 4Pi implicit in our Q value before squaring.
	 */

	const double k = Q / (4 * PI);
	const double k2 = k * k;
	return c_ + (a_[0] * exp(-b_[0] * k2) + a_[1] * exp(-b_[1] * k2) + a_[2] * exp(-b_[2] * k2) + a_[3] * exp(-b_[3] * k2) + a_[4] * exp(-b_[4] * k2));
}

namespace XRayFormFactors
{

// Return Waasmaier & Kirfel (1995) form factor data for given element and formal charge (if it exists)
optional<const FormFactorData &> wk1995Data(int Z, int formalCharge)
{
	/*
	 * New Analytical Scattering Factor Functions for Free Atoms and Ions
	 * D. Waasmaier & A. Kirfel
	 * Acta Cryst. (1995). A51, 416-413
	 *
	 * Fit parameters of all atoms/ions (with the excepetion of O1-)
	 * from publication "New Analytical Scattering Factor Functions for
	 * Free Atoms and Ions", D. Waasmaier & A. Kirfel, Acta Cryst. A 95
	 *
	 * Fit for O1- based on the tabulated values of Table 2 (D.REZ,
	 * P.REZ & I.GRANT, Acta Cryst. (1994), A50, 481-497).
	 *
	 * Fits for all other atoms/ions based on the tabulated values
	 * of Table 6.1.1.1 (atoms) and Table 6.1.1.3 (ions)
	 * (International Tables for Crystallography, Vol. C, 1992).
	 */

	static std::vector<FormFactorData_WK1995> wk1995 = {
	    // El		Q	a1		b1		a2		b2		a3		b3		a4		b4		a5		b5 c
	    {ELEMENT_H, 0, 0.413048, 15.569946, 0.294953, 32.398468, 0.187491, 5.711404, 0.080701, 61.889874, 0.023736, 1.334118, 0.000049},
	    {ELEMENT_H, 1, 0.206524, 15.569946, 0.147477, 32.398468, 0.093746, 5.711404, 0.040351, 61.889874, 0.011868, 1.334118, 0.000025},
	    {ELEMENT_H, -1, 0.702260, 23.945604, 0.763666, 74.897919, 0.248678, 6.773289, 0.261323, 233.583450, 0.023017, 1.337531, 0.000425},
	    {ELEMENT_HE, 0, 0.732354, 11.553918, 0.753896, 4.595831, 0.283819, 1.546299, 0.190003, 26.463964, 0.039139, 0.377523, 0.000487},
	    {ELEMENT_LI, 0, 0.974637, 4.334946, 0.158472, 0.342451, 0.811855, 97.102966, 0.262416, 201.363831, 0.790108, 1.409234, 0.002542},
	    {ELEMENT_LI, 1, 0.432724, 0.260367, 0.549257, 1.042836, 0.376575, 7.885294, -0.336481, 0.260368, 0.976060, 3.042539, 0.001764},
	    {ELEMENT_BE, 0, 1.533712, 42.662079, 0.638283, 0.595420, 0.601052, 99.106499, 0.106139, 0.151340, 1.118414, 1.843093, 0.002511},
	    {ELEMENT_BE, 2, 3.055430, 0.001226, -2.372617, 0.001227, 1.044914, 1.542106, 0.544233, 0.456279, 0.381737, 4.047479, -0.653773},
	    {ELEMENT_B, 0, 2.085185, 23.494068, 1.064580, 1.137894, 1.062788, 61.238976, 0.140515, 0.114886, 0.641784, 0.399036, 0.003823},
	    {ELEMENT_C, 0, 2.657506, 14.780758, 1.078079, 0.776775, 1.490909, 42.086842, -4.241070, -0.000294, 0.713791, 0.239535, 4.297983},
	    // 		{ ELEMENT_C,	Val?,	1.258489,	10.683769,	0.728215,	0.208177,	1.119856,	0.836097,	2.168133,	24.603704,
	    // 0.705239,	58.954273,
	    // 0.019722
	    // },
	    {ELEMENT_N, 0, 11.893780, 0.000158, 3.277479, 10.232723, 1.858092, 30.344690, 0.858927, 0.656065, 0.912985, 0.217287, -11.804902},
	    {ELEMENT_O, 0, 2.960427, 14.182259, 2.508818, 5.936858, 0.637853, 0.112726, 0.722838, 34.958481, 1.142756, 0.390240, 0.027014},
	    {ELEMENT_O, -1, 3.106934, 19.868080, 3.235142, 6.960252, 1.148886, 0.170043, 0.783981, 65.693512, 0.676953, 0.630757, 0.046136},
	    {ELEMENT_O, -2, 3.990247, 16.639956, 2.300563, 5.636819, 0.607200, 0.108493, 1.907882, 47.299709, 1.167080, 0.379984, 0.025429},
	    {ELEMENT_F, 0, 3.511943, 10.687859, 2.772244, 4.380466, 0.678385, 0.093982, 0.915159, 27.255203, 1.089261, 0.313066, 0.032557},
	    {ELEMENT_F, -1, 0.457649, 0.917243, 3.841561, 5.507803, 1.432771, 0.164955, 0.801876, 51.076206, 3.395041, 15.821679, 0.069525},
	    {ELEMENT_NE, 0, 4.183749, 8.175457, 2.905726, 3.252536, 0.520513, 0.063295, 1.135641, 21.813910, 1.228065, 0.224952, 0.025576},
	    {ELEMENT_NA, 0, 4.910127, 3.281434, 3.081783, 9.119178, 1.262067, 0.102763, 1.098938, 132.013947, 0.560991, 0.405878, 0.079712},
	    {ELEMENT_NA, 1, 3.148690, 2.594987, 4.073989, 6.046925, 0.767888, 0.070139, 0.995612, 14.122657, 0.968249, 0.217037, 0.045300},
	    {ELEMENT_MG, 0, 4.708971, 4.875207, 1.194814, 108.506081, 1.558157, 0.111516, 1.170413, 48.292408, 3.239403, 1.928171, 0.126842},
	    {ELEMENT_MG, 2, 3.062918, 2.015803, 4.135106, 4.417941, 0.853742, 0.065307, 1.036792, 9.669710, 0.852520, 0.187818, 0.058851},
	    {ELEMENT_AL, 0, 4.730796, 3.628931, 2.313951, 43.051167, 1.541980, 0.095960, 1.117564, 108.932388, 3.154754, 1.555918, 0.139509},
	    {ELEMENT_AL, 3, 4.132015, 3.528641, 0.912049, 7.378344, 1.102425, 0.133708, 0.614876, 0.039065, 3.219136, 1.644728, 0.019397},
	    {ELEMENT_SI, 0, 5.275329, 2.631338, 3.191038, 33.730728, 1.511514, 0.081119, 1.356849, 86.288643, 2.519114, 1.170087, 0.145073},
	    // 		{ ELEMENT_SI,	Val?,	2.879033,	1.239713,	3.072960,	38.706276,	1.515981,	0.081481,	1.390030,	93.616333,
	    // 4.995051,	2.770293,
	    // 0.146030
	    // },
	    {ELEMENT_SI, 4, 3.676722, 1.446851, 3.828496, 3.013144, 1.258033, 0.064397, 0.419024, 0.206254, 0.720421, 5.970222, 0.097266},
	    {ELEMENT_P, 0, 1.950541, 0.908139, 4.146930, 27.044952, 1.494560, 0.071280, 1.522042, 67.520187, 5.729711, 1.981173, 0.155233},
	    {ELEMENT_S, 0, 6.372157, 1.514347, 5.154568, 22.092527, 1.473732, 0.061373, 1.635073, 55.445175, 1.209372, 0.646925, 0.154722},
	    {ELEMENT_CL, 0, 1.446071, 0.052357, 6.870609, 1.193165, 6.151801, 18.343416, 1.750347, 46.398396, 0.634168, 0.401005, 0.146773},
	    {ELEMENT_CL, -1, 1.061802, 0.144727, 7.139886, 1.171795, 6.524271, 19.467655, 2.355626, 60.320301, 35.829403, 0.000436, -34.916603},
	    {ELEMENT_AR, 0, 7.188004, 0.956221, 6.638454, 15.339877, 0.454180, 15.339862, 1.929593, 39.043823, 1.523654, 0.062409, 0.265954},
	    {ELEMENT_K, 0, 8.163991, 12.816323, 7.146945, 0.808945, 1.070140, 210.327011, 0.877316, 39.597652, 1.486434, 0.052821, 0.253614},
	    {ELEMENT_K, 1, -17.609339, 18.840979, 1.494873, 0.053453, 7.150305, 0.812940, 10.899569, 22.264105, 15.808228, 14.351593, 0.257164},
	    {ELEMENT_CA, 0, 8.593655, 10.460644, 1.477324, 0.041891, 1.436254, 81.390381, 1.182839, 169.847839, 7.113258, 0.688098, 0.196255},
	    {ELEMENT_CA, 2, 8.501441, 10.525848, 12.880483, -0.004033, 9.765095, 0.010692, 7.156669, 0.684443, 0.711160, 27.231771, -21.013187},
	    {ELEMENT_SC, 0, 1.476566, 53.131023, 1.487278, 0.035325, 1.600187, 137.319489, 9.177463, 9.098031, 7.099750, 0.602102, 0.157765},
	    {ELEMENT_SC, 3, 7.104348, 0.033386, 1.511488, -53.669773, 12.572138, 38.404816, 10.859736, 24.532240, 14.125230, 0.118642, 0.601957},
	    {ELEMENT_TI, 0, 9.818524, 8.001879, 1.522646, 0.029763, 1.703101, 39.885422, 1.768774, 120.157997, 7.082555, 0.532405, 0.102473},
	    {ELEMENT_TI, 2, 7.040119, 0.537072, 1.496285, 0.031914, 9.657304, 8.009958, 201.800293, 0.006534, 24.039482, 1.649561, 0.150362},
	    {ELEMENT_TI, 3, 36.587933, 0.000681, 7.230255, 0.522262, -9.086077, 5.262317, 2.084594, 15.881716, 17.294008, 6.149805, -35.111282},
	    {ELEMENT_TI, 4, 45.355537, 0.523046, 7.092900, 13.082852, 7.483858, -43.498817, 10.193876, 1.678915, 0.023064, -0.110628, 9.252186},
	    {ELEMENT_V, 0, 10.473575, 7.081940, 1.547881, 0.026040, 1.986381, 31.909672, 1.865616, 108.022842, 7.056250, 0.474882, 0.067744},
	    {ELEMENT_V, 2, 7.754356, 7.066315, 2.064100, 0.014993, 2.576998, 7.066308, 2.011404, 22.055786, 7.126177, 0.467568, -0.533379},
	    {ELEMENT_V, 3, 9.958480, 6.763041, 1.596350, 0.056895, 1.483442, 17.750029, -10.846044, 0.328826, 17.332867, 0.388013, 0.474921},
	    {ELEMENT_V, 5, 15.575018, 0.682708, 8.448095, 5.566640, 1.612040, 10.527077, -9.721855, 0.907961, 1.534029, 0.066667, 0.552676},
	    {ELEMENT_CR, 0, 11.007069, 6.366281, 1.555477, 0.023987, 2.985293, 23.244839, 1.347855, 105.774498, 7.034779, 0.429369, 0.065510},
	    {ELEMENT_CR, 2, 10.598877, 6.151846, 1.565858, 0.023519, 2.728280, 17.432816, 0.098064, 54.002388, 6.959321, 0.426301, 0.049870},
	    {ELEMENT_CR, 3, 7.989310, 6.068867, 1.765079, 0.018342, 2.627125, 6.068887, 1.829380, 16.309284, 6.980908, 0.420864, -0.192123},
	    {ELEMENT_MN, 0, 11.709542, 5.597120, 1.733414, 0.017800, 2.673141, 21.788420, 2.023368, 89.517914, 7.003180, 0.383054, -0.147293},
	    {ELEMENT_MN, 2, 11.287712, 5.506225, 26.042414, 0.000774, 3.058096, 16.158575, 0.090258, 54.766354, 7.088306, 0.375580, -24.566132},
	    {ELEMENT_MN, 3, 6.926972, 0.378315, 2.081342, 0.015054, 11.128379, 5.379957, 2.375107, 14.429586, -0.419287, 0.004939, -0.093713},
	    {ELEMENT_MN, 4, 12.409131, 0.300400, 7.466993, 0.112814, 1.809947, 12.520756, -12.138477, 0.168653, 10.780248, 5.173237, 0.672146},
	    {ELEMENT_FE, 0, 12.311098, 5.009415, 1.876623, 0.014461, 3.066177, 18.743040, 2.070451, 82.767876, 6.975185, 0.346506, -0.304931},
	    {ELEMENT_FE, 2, 11.776765, 4.912232, 11.165097, 0.001748, 3.533495, 14.166556, 0.165345, 42.381958, 7.036932, 0.341324, -9.676919},
	    {ELEMENT_FE, 3, 9.721638, 4.869297, 63.403847, 0.000293, 2.141347, 4.867602, 2.629274, 13.539076, 7.033846, 0.338520, -61.930725},
	    {ELEMENT_CO, 0, 12.914510, 4.507138, 2.481908, 0.009126, 3.466894, 16.438129, 2.106351, 76.987320, 6.960892, 0.314418, -0.936572},
	    {ELEMENT_CO, 2, 6.993840, 0.310779, 26.285812, 0.000684, 12.254289, 4.400528, 0.246114, 35.741447, 4.017407, 12.536393, -24.796852},
	    {ELEMENT_CO, 3, 6.861739, 0.309794, 2.678570, 0.008142, 12.281889, 4.331703, 3.501741, 11.914167, -0.179384, 11.914167, -1.147345},
	    {ELEMENT_NI, 0, 13.521865, 4.077277, 6.947285, 0.286763, 3.866028, 14.622634, 2.135900, 71.966080, 4.284731, 0.004437, -2.762697},
	    {ELEMENT_NI, 2, 12.519017, 3.933053, 37.832058, 0.000442, 4.387257, 10.449184, 0.661552, 23.860998, 6.949072, 0.283723, -36.344471},
	    {ELEMENT_NI, 3, 13.579366, 0.313140, 1.902844, 0.012621, 12.859268, 3.906407, 3.811005, 10.894311, -6.838595, 0.344379, -0.317618},
	    {ELEMENT_CU, 0, 14.014192, 3.738280, 4.784577, 0.003744, 5.056806, 13.034982, 1.457971, 72.554794, 6.932996, 0.265666, -3.254477},
	    {ELEMENT_CU, 1, 12.960763, 3.576010, 16.342150, 0.000975, 1.110102, 29.523218, 5.520682, 10.114283, 6.915452, 0.261326, -14.849320},
	    {ELEMENT_CU, 2, 11.895569, 3.378519, 16.344978, 0.000924, 5.799817, 8.133653, 1.048804, 20.526524, 6.789088, 0.254741, -14.878383},
	    {ELEMENT_ZN, 0, 14.741002, 3.388232, 6.907748, 0.243315, 4.642337, 11.903689, 2.191766, 63.312130, 38.424042, 0.000397, -36.915829},
	    {ELEMENT_ZN, 2, 13.340772, 3.215913, 10.428857, 0.001413, 5.544489, 8.542680, 0.762295, 21.891756, 6.869172, 0.239215, -8.945248},
	    {ELEMENT_GA, 0, 15.758946, 3.121754, 6.841123, 0.226057, 4.121016, 12.482196, 2.714681, 66.203621, 2.395246, 0.007238, -0.847395},
	    {ELEMENT_GA, 3, 13.123875, 2.809960, 35.288189, 0.000323, 6.126979, 6.831534, 0.611551, 16.784311, 6.724807, 0.212002, -33.875122},
	    {ELEMENT_GE, 0, 16.540613, 2.866618, 1.567900, 0.012198, 3.727829, 13.432163, 3.345098, 58.866047, 6.785079, 0.210974, 0.018726},
	    {ELEMENT_GE, 4, 6.876636, 2.025174, 6.779091, 0.176650, 9.969591, 3.573822, 3.135857, 7.685848, 0.152389, 16.677574, 1.086542},
	    {ELEMENT_AS, 0, 17.025642, 2.597739, 4.503441, 0.003012, 3.715904, 14.272119, 3.937200, 50.437996, 6.790175, 0.193015, -2.984117},
	    {ELEMENT_SE, 0, 17.354071, 2.349787, 4.653248, 0.002550, 4.259489, 15.579460, 4.136455, 45.181202, 6.749163, 0.177432, -3.160982},
	    {ELEMENT_BR, 0, 17.550570, 2.119226, 5.411882, 16.557184, 3.937180, 0.002481, 3.880645, 42.164009, 6.707793, 0.162121, -2.492088},
	    {ELEMENT_BR, -1, 17.714310, 2.122554, 6.466926, 19.050768, 6.947385, 0.152708, 4.402674, 58.690361, -0.697279, 58.690372, 1.152674},
	    {ELEMENT_KR, 0, 17.655279, 1.908231, 6.848105, 16.606236, 4.171004, 0.001598, 3.446760, 39.917473, 6.685200, 0.146896, -2.810592},
	    {ELEMENT_RB, 0, 8.123134, 15.142385, 2.138042, 33.542667, 6.761702, 0.129372, 1.156051, 224.132507, 17.679546, 1.713368, 1.139548},
	    {ELEMENT_RB, 1, 17.684320, 1.710209, 7.761588, 14.919863, 6.680874, 0.128542, 2.668883, 31.654478, 0.070974, 0.128543, 1.133263},
	    {ELEMENT_SR, 0, 17.730219, 1.563060, 9.795867, 14.310868, 6.099763, 0.120574, 2.620025, 135.771317, 0.600053, 0.120574, 1.140251},
	    {ELEMENT_SR, 2, 17.694973, 1.550888, 1.275762, 30.133041, 6.154252, 0.118774, 9.234786, 13.821799, 0.515995, 0.118774, 1.125309},
	    {ELEMENT_Y, 0, 17.792040, 1.429691, 10.253252, 13.132816, 5.714949, 0.112173, 3.170516, 108.197029, 0.918251, 0.112173, 1.131787},
	    {ELEMENT_ZR, 0, 17.859772, 1.310692, 10.911038, 12.319285, 5.821115, 0.104353, 3.512513, 91.777542, 0.746965, 0.104353, 1.124859},
	    {ELEMENT_ZR, 4, 6.802956, 0.096228, 17.699253, 1.296127, 10.650647, 11.240715, -0.248108, -0.219259, 0.250338, -0.219021, 0.827902},
	    {ELEMENT_NB, 0, 17.958399, 1.211590, 12.063054, 12.246687, 5.007015, 0.098615, 3.287667, 75.011948, 1.531019, 0.098615, 1.123452},
	    {ELEMENT_NB, 3, 17.714323, 1.172419, 1.675213, 30.102791, 7.483963, 0.080255, 8.322464, -0.002983, 11.143573, 10.456687, -8.339573},
	    {ELEMENT_NB, 5, 17.580206, 1.165852, 7.633277, 0.078558, 10.793497, 9.507652, 0.180884, 31.621656, 67.837921, -0.000438, -68.024780},
	    {ELEMENT_MO, 0, 6.236218, 0.090780, 17.987711, 1.108310, 12.973127, 11.468720, 3.451426, 66.684151, 0.210899, 0.090780, 1.108770},
	    {ELEMENT_MO, 3, 7.447050, 0.072000, 17.778122, 1.073145, 11.886068, 9.834720, 1.997905, 28.221746, 1.789626, -0.011674, -1.898764},
	    {ELEMENT_MO, 5, 7.929879, 0.068856, 17.667669, 1.068064, 11.515987, 9.046229, 0.500402, 26.558945, 77.444084, -0.000473, -78.056595},
	    {ELEMENT_MO, 6, 34.757683, 1.301770, 9.653037, 7.123843, 6.584769, 0.094097, -18.628115, 1.617443, 2.490594, 12.335434, 1.141916},
	    {ELEMENT_TC, 0, 17.840963, 1.005729, 3.428236, 41.901382, 1.373012, 119.320541, 12.947364, 9.781542, 6.335469, 0.083391, 1.074784},
	    {ELEMENT_RU, 0, 6.271624, 0.077040, 17.906738, 0.928222, 14.123269, 9.555345, 3.746008, 35.860680, 0.908235, 123.552246, 1.043992},
	    {ELEMENT_RU, 3, 17.894758, 0.902827, 13.579529, 8.740579, 10.729251, 0.045125, 2.474095, 24.764954, 48.227997, -0.001699, -51.905243},
	    {ELEMENT_RU, 4, 17.845776, 0.901070, 13.455084, 8.482392, 10.229087, 0.045972, 1.653524, 23.015272, 14.059795, -0.004889, -17.241762},
	    {ELEMENT_RH, 0, 6.216648, 0.070789, 17.919739, 0.856121, 3.854252, 33.889484, 0.840326, 121.686691, 15.173498, 9.029517, 0.995452},
	    {ELEMENT_RH, 3, 17.758621, 0.841779, 14.569813, 8.319533, 5.298320, 0.069050, 2.533579, 23.709131, 0.879753, 0.069050, 0.960843},
	    {ELEMENT_RH, 4, 17.716188, 0.840572, 14.446654, 8.100647, 5.185801, 0.068995, 1.703448, 22.357307, 0.989992, 0.068995, 0.959941},
	    {ELEMENT_PD, 0, 6.121511, 0.062549, 4.784063, 0.784031, 16.631683, 8.751391, 4.318258, 34.489983, 13.246773, 0.784031, 0.883099},
	    {ELEMENT_PD, 2, 6.122282, 0.062424, 15.651012, 8.018296, 3.513508, 24.784275, 9.060790, 0.776457, 8.771199, 0.776457, 0.879336},
	    {ELEMENT_PD, 4, 6.152421, 0.063951, -96.069023, 11.090354, 31.622141, 13.466152, 81.578255, 9.758302, 17.801403, 0.783014, 0.915874},
	    {ELEMENT_AG, 0, 6.073874, 0.055333, 17.155437, 7.896512, 4.173344, 28.443739, 0.852238, 110.376106, 17.988686, 0.716809, 0.756603},
	    {ELEMENT_AG, 1, 6.091192, 0.056305, 4.019526, 0.719340, 16.948174, 7.758938, 4.258638, 27.368349, 13.889437, 0.719340, 0.785127},
	    {ELEMENT_AG, 2, 6.401808, 0.068167, 48.699802, 0.942270, 4.799859, 20.639496, -32.332523, 1.100365, 16.356710, 6.883131, 1.068247},
	    {ELEMENT_CD, 0, 6.080986, 0.048990, 18.019468, 7.273646, 4.018197, 29.119284, 1.303510, 95.831207, 17.974669, 0.661231, 0.603504},
	    {ELEMENT_CD, 2, 6.093711, 0.050624, 43.909691, 8.654143, 17.041306, 15.621396, -39.675117, 11.082067, 17.958918, 0.667591, 0.664795},
	    {ELEMENT_IN, 0, 6.196477, 0.042072, 18.816183, 6.695665, 4.050479, 31.009790, 1.638929, 103.284348, 17.962912, 0.610714, 0.333097},
	    {ELEMENT_IN, 3, 6.206277, 0.041357, 18.497746, 6.605563, 3.078131, 18.792250, 10.524613, 0.608082, 7.401234, 0.608082, 0.293677},
	    {ELEMENT_SN, 0, 19.325171, 6.118104, 6.281571, 0.036915, 4.498866, 32.529045, 1.856934, 95.037186, 17.917318, 0.565651, 0.119024},
	    {ELEMENT_SN, 2, 6.353672, 0.034720, 4.770377, 6.167891, 14.672025, 6.167879, 4.235959, 29.006456, 18.002131, 0.561774, -0.042519},
	    {ELEMENT_SN, 4, 15.445732, 6.280898, 6.420892, 0.033144, 4.562980, 6.280899, 1.713385, 17.983601, 18.033537, 0.557980, -0.172219},
	    {ELEMENT_SB, 0, 5.394956, 33.326523, 6.549570, 0.030974, 19.650681, 5.564929, 1.827820, 87.130966, 17.867832, 0.523992, -0.290506},
	    {ELEMENT_SB, 3, 10.189171, 0.089485, 57.461918, 0.375256, 19.356573, 5.357987, 4.862206, 22.153736, -45.394096, 0.297768, 1.516108},
	    {ELEMENT_SB, 5, 17.920622, 0.522315, 6.647932, 0.029487, 12.724075, 5.718210, 1.555545, 16.433775, 7.600591, 5.718204, -0.445371},
	    {ELEMENT_TE, 0, 6.660302, 33.031654, 6.940756, 0.025750, 19.847015, 5.065547, 1.557175, 84.101616, 17.802427, 0.487660, -0.806668},
	    {ELEMENT_I, 0, 19.884502, 4.628591, 6.736593, 0.027754, 8.110516, 31.849096, 1.170953, 84.406387, 17.548716, 0.463550, -0.448811},
	    {ELEMENT_I, -1, 20.010330, 4.565931, 17.835524, 0.444266, 8.104130, 32.430672, 2.231118, 95.149040, 9.158548, 0.014906, -3.341004},
	    {ELEMENT_XE, 0, 19.978920, 4.143356, 11.774945, 0.010142, 9.332182, 28.796200, 1.244749, 75.280685, 17.737501, 0.413616, -6.065902},
	    {ELEMENT_CS, 0, 17.418674, 0.399828, 8.314444, 0.016872, 10.323193, 25.605827, 1.383834, 233.339676, 19.876251, 3.826915, -2.322802},
	    {ELEMENT_CS, 1, 19.939056, 3.770511, 24.967621, 0.004040, 10.375884, 25.311275, 0.454243, 76.537766, 17.660248, 0.384730, -19.394306},
	    {ELEMENT_BA, 0, 19.747343, 3.481823, 17.368477, 0.371224, 10.465718, 21.226641, 2.592602, 173.834274, 11.003653, 0.010719, -5.183497},
	    {ELEMENT_BA, 2, 19.750200, 3.430748, 17.513683, 0.361590, 10.884892, 21.358307, 0.321585, 70.309402, 65.149834, 0.001418, -59.618172},
	    {ELEMENT_LA, 0, 19.966019, 3.197408, 27.329655, 0.003446, 11.018425, 19.955492, 3.086696, 141.381973, 17.335455, 0.341817, -21.745489},
	    {ELEMENT_LA, 3, 19.688887, 3.146211, 17.345703, 0.339586, 11.356296, 18.753832, 0.099418, 90.345459, 82.358124, 0.001072, -76.846909},
	    {ELEMENT_CE, 0, 17.355122, 0.328369, 43.988499, 0.002047, 20.546650, 3.088196, 3.130670, 134.907654, 11.353665, 18.832960, -38.386017},
	    {ELEMENT_CE, 3, 26.593231, 3.280381, 85.866432, 0.001012, -6.677695, 4.313575, 12.111847, 17.868504, 17.401903, 0.326962, -80.313423},
	    {ELEMENT_CE, 4, 17.457533, 0.311812, 25.659941, -0.003793, 11.691037, 16.568687, 19.695251, 2.886395, -16.994749, -0.008931, -3.515096},
	    {ELEMENT_PR, 0, 21.551311, 2.995675, 17.161730, 0.312491, 11.903859, 17.716705, 2.679103, 152.192825, 9.564197, 0.010468, -3.871068},
	    {ELEMENT_PR, 3, 20.879841, 2.870897, 36.035797, 0.002364, 12.135341, 16.615236, 0.283103, 53.909359, 17.167803, 0.306993, -30.500784},
	    {ELEMENT_PR, 4, 17.496082, 0.294457, 21.538509, -0.002742, 20.403114, 2.772886, 12.062211, 15.804613, -7.492043, -0.013556, -9.016722},
	    {ELEMENT_ND, 0, 17.331244, 0.300269, 62.783924, 0.001320, 12.160097, 17.026001, 2.663483, 148.748993, 22.239950, 2.910268, -57.189842},
	    {ELEMENT_ND, 3, 17.120077, 0.291295, 56.038139, 0.001421, 21.468307, 2.743681, 10.000671, 14.581367, 2.905866, 22.485098, -50.541992},
	    {ELEMENT_PM, 0, 17.286388, 0.286620, 51.560162, 0.001550, 12.478557, 16.223755, 2.675515, 143.984512, 22.960947, 2.796480, -45.973682},
	    {ELEMENT_PM, 3, 22.221066, 2.635767, 17.068142, 0.277039, 12.805423, 14.927315, 0.435687, 45.768017, 52.238770, 0.001455, -46.767181},
	    {ELEMENT_SM, 0, 23.700363, 2.689539, 23.072214, 0.003491, 12.777782, 15.495437, 2.684217, 139.862473, 17.204367, 0.274536, -17.452166},
	    {ELEMENT_SM, 3, 15.618565, 0.006001, 19.538092, 0.306379, 13.398946, 14.979594, -4.358811, 0.748825, 24.490461, 2.454492, -9.714854},
	    {ELEMENT_EU, 0, 17.186195, 0.261678, 37.156837, 0.001995, 13.103387, 14.787360, 2.707246, 134.816299, 24.419271, 2.581883, -31.586687},
	    {ELEMENT_EU, 2, 23.899035, 2.467332, 31.657497, 0.002230, 12.955752, 13.625002, 1.700576, 35.089481, 16.992199, 0.253136, -26.204315},
	    {ELEMENT_EU, 3, 17.758327, 0.244474, 33.498665, -0.003901, 24.067188, 2.487526, 13.436883, 14.568011, -9.019134, -0.015628, -19.768026},
	    {ELEMENT_GD, 0, 24.898117, 2.435028, 17.104952, 0.246961, 13.222581, 13.996325, 3.266152, 110.863091, 48.995213, 0.001383, -43.505684},
	    {ELEMENT_GD, 3, 24.344999, 2.333971, 16.945311, 0.239215, 13.866931, 12.982995, 0.481674, 43.876347, 93.506378, 0.000673, -88.147179},
	    {ELEMENT_TB, 0, 25.910013, 2.373912, 32.344139, 0.002034, 13.765117, 13.481969, 2.751404, 125.836510, 17.064405, 0.236916, -26.851971},
	    {ELEMENT_TB, 3, 24.878252, 2.223301, 16.856016, 0.227290, 13.663937, 11.812528, 1.279671, 29.910065, 39.271294, 0.001527, -33.950317},
	    {ELEMENT_DY, 0, 26.671785, 2.282593, 88.687576, 0.000665, 14.065445, 12.920230, 2.768497, 121.937187, 17.067781, 0.225531, -83.279831},
	    {ELEMENT_DY, 3, 16.864344, 0.216275, 90.383461, 0.000593, 13.675473, 11.121207, 1.687078, 26.250975, 25.540651, 2.135930, -85.150650},
	    {ELEMENT_HO, 0, 27.150190, 2.169660, 16.999819, 0.215414, 14.059334, 12.213148, 3.386979, 100.506783, 46.546471, 0.001211, -41.165253},
	    {ELEMENT_HO, 3, 16.837524, 0.206873, 63.221336, 0.000796, 13.703766, 10.500283, 2.061602, 24.031883, 26.202621, 2.055060, -58.026505},
	    {ELEMENT_ER, 0, 28.174887, 2.120995, 82.493271, 0.000640, 14.624002, 11.915256, 2.802756, 114.529938, 17.018515, 0.207519, -77.135223},
	    {ELEMENT_ER, 3, 16.810127, 0.198293, 22.681061, 0.002126, 13.864114, 9.973341, 2.294506, 22.836388, 26.864477, 1.979442, -17.513460},
	    {ELEMENT_TM, 0, 28.925894, 2.046203, 76.173798, 0.000656, 14.904704, 11.465375, 2.814812, 111.411980, 16.998117, 0.199376, -70.839813},
	    {ELEMENT_TM, 3, 16.787500, 0.190852, 15.350905, 0.003036, 14.182357, 9.602934, 2.299111, 22.526880, 27.573771, 1.912862, -10.192087},
	    {ELEMENT_YB, 0, 29.676760, 1.977630, 65.624069, 0.000720, 15.160854, 11.044622, 2.830288, 108.139153, 16.997850, 0.192110, -60.313812},
	    {ELEMENT_YB, 2, 28.443794, 1.863896, 16.849527, 0.183811, 14.165081, 9.225469, 3.445311, 23.691355, 28.308853, 0.001463, -23.214935},
	    {ELEMENT_YB, 3, 28.191629, 1.842889, 16.828087, 0.182788, 14.167848, 9.045957, 2.744962, 20.799847, 23.171774, 0.001759, -18.103676},
	    {ELEMENT_LU, 0, 30.122866, 1.883090, 15.099346, 10.342764, 56.314899, 0.000780, 3.540980, 89.559250, 16.943729, 0.183849, -51.049416},
	    {ELEMENT_LU, 3, 28.828693, 1.776641, 16.823227, 0.175560, 14.247617, 8.575531, 3.079559, 19.693701, 25.647667, 0.001453, -20.626528},
	    {ELEMENT_HF, 0, 30.617033, 1.795613, 15.145351, 9.934469, 54.933548, 0.000739, 4.096253, 76.189705, 16.896156, 0.175914, -49.719837},
	    {ELEMENT_HF, 4, 29.267378, 1.697911, 16.792543, 0.168313, 14.785310, 8.190025, 2.184128, 18.277578, 23.791996, 0.001431, -18.820383},
	    {ELEMENT_TA, 0, 31.066359, 1.708732, 15.341823, 9.618455, 49.278297, 0.000760, 4.577665, 66.346199, 16.828321, 0.168002, -44.119026},
	    {ELEMENT_TA, 5, 29.539469, 1.612934, 16.741854, 0.160460, 15.182070, 7.654408, 1.642916, 17.070732, 16.437447, 0.001858, -11.542459},
	    {ELEMENT_W, 0, 31.507900, 1.629485, 15.682498, 9.446448, 37.960129, 0.000898, 4.885509, 59.980675, 16.792112, 0.160798, -32.864574},
	    {ELEMENT_W, 6, 29.729357, 1.501648, 17.247808, 0.140803, 15.184488, 6.880573, 1.154652, 14.299601, 0.739335, 14.299618, 3.945157},
	    {ELEMENT_RE, 0, 31.888456, 1.549238, 16.117104, 9.233474, 42.390297, 0.000689, 5.211669, 54.516373, 16.767591, 0.152815, -37.412682},
	    {ELEMENT_OS, 0, 32.210297, 1.473531, 16.678440, 9.049695, 48.559906, 0.000519, 5.455839, 50.210201, 16.735533, 0.145771, -43.677956},
	    {ELEMENT_OS, 4, 17.113485, 0.131850, 15.792370, 7.288542, 23.342392, 1.389307, 4.090271, 19.629425, 7.671292, 1.389307, 3.988390},
	    {ELEMENT_IR, 0, 32.004436, 1.353767, 1.975454, 81.014175, 17.070105, 0.128093, 15.939454, 7.661196, 5.990003, 26.659403, 4.018893},
	    {ELEMENT_IR, 3, 31.537575, 1.334144, 16.363338, 7.451918, 15.597141, 0.127514, 5.051404, 21.705648, 1.436935, 0.127515, 4.009459},
	    {ELEMENT_IR, 4, 30.391249, 1.328519, 16.146996, 7.181766, 17.019068, 0.127337, 4.458904, 19.060146, 0.975372, 1.328519, 4.006865},
	    {ELEMENT_PT, 0, 31.273891, 1.316992, 18.445440, 8.797154, 17.063745, 0.124741, 5.555933, 40.177994, 1.575270, 1.316997, 4.050394},
	    {ELEMENT_PT, 2, 31.986849, 1.281143, 17.249048, 7.625512, 15.269374, 0.123571, 5.760234, 24.190826, 1.694079, 0.123571, 4.032512},
	    {ELEMENT_PT, 4, 41.932713, 6.466086, 16.339224, 0.128917, 17.653894, 16.954155, 6.012420, -12.036877, 0.778721, 4.094551, 1.111409},
	    {ELEMENT_AU, 0, 16.777390, 0.122737, 19.317156, 8.621570, 32.979683, 1.256902, 5.595453, 38.008820, 10.576854, 0.000601, -6.279078},
	    {ELEMENT_AU, 1, 32.124306, 1.216073, 16.716476, 7.165378, 16.814100, 0.118715, 7.311565, 20.442486, 0.993064, 53.095985, 4.040792},
	    {ELEMENT_AU, 3, 31.704271, 1.215561, 17.545767, 7.220506, 16.819551, 0.118812, 5.522640, 20.050970, 0.361725, 1.215562, 4.042679},
	    {ELEMENT_HG, 0, 16.839890, 0.115905, 20.023823, 8.256927, 28.428564, 1.195250, 5.881564, 39.247227, 4.714706, 1.195250, 4.076478},
	    {ELEMENT_HG, 1, 28.866837, 1.173967, 19.277540, 7.583842, 16.776051, 0.115351, 6.281459, 29.055994, 3.710289, 1.173968, 4.068430},
	    {ELEMENT_HG, 2, 32.411079, 1.162980, 18.690371, 7.329806, 16.711773, 0.114518, 9.974835, 22.009489, -3.847611, 22.009493, 4.052869},
	    {ELEMENT_TL, 0, 16.630795, 0.110704, 19.386616, 7.181401, 32.808571, 1.119730, 1.747191, 90.660263, 6.356862, 26.014978, 4.066939},
	    {ELEMENT_TL, 1, 32.295044, 1.101544, 16.570049, 0.110020, 17.991013, 6.528559, 1.535355, 52.495068, 7.554591, 20.338634, 4.054030},
	    {ELEMENT_TL, 3, 32.525639, 1.094966, 19.139185, 6.900992, 17.100321, 0.103667, 5.891115, 18.489614, 12.599463, -0.001401, -9.256075},
	    {ELEMENT_PB, 0, 16.419567, 0.105499, 32.738590, 1.055049, 6.530247, 25.025890, 2.342742, 80.906593, 19.916475, 6.664449, 4.049824},
	    {ELEMENT_PB, 2, 27.392647, 1.058874, 16.496822, 0.106305, 19.984501, 6.708123, 6.813923, 24.395554, 5.233910, 1.058874, 4.065623},
	    {ELEMENT_PB, 4, 32.505657, 1.047035, 20.014240, 6.670321, 14.645661, 0.105279, 5.029499, 16.525040, 1.760138, 0.105279, 4.044678},
	    {ELEMENT_BI, 0, 16.282274, 0.101180, 32.725136, 1.002287, 6.678302, 25.714146, 2.694750, 77.057549, 20.576559, 6.291882, 4.040914},
	    {ELEMENT_BI, 3, 32.461437, 0.997930, 19.438683, 6.038867, 16.302486, 0.101338, 7.322662, 18.371586, 0.431704, 46.361046, 4.043703},
	    {ELEMENT_BI, 5, 16.734028, 0.105076, 20.580494, 4.773282, 9.452623, 11.762162, 61.155834, 1.211775, -34.041023, 1.619408, 4.113663},
	    {ELEMENT_PO, 0, 16.289164, 0.098121, 32.807171, 0.966265, 21.095163, 6.046622, 2.505901, 76.598068, 7.254589, 28.096128, 4.046556},
	    {ELEMENT_AT, 0, 16.011461, 0.092639, 32.615547, 0.904416, 8.113899, 26.543257, 2.884082, 68.372963, 21.377867, 5.499512, 3.995684},
	    {ELEMENT_RN, 0, 16.070229, 0.090437, 32.641106, 0.876409, 21.489658, 5.239687, 2.299218, 69.188477, 9.480184, 27.632641, 4.020977},
	    {ELEMENT_FR, 0, 16.007385, 0.087031, 32.663830, 0.840187, 21.594351, 4.954467, 1.598497, 199.805801, 11.121192, 26.905106, 4.003472},
	    {ELEMENT_RA, 0, 32.563690, 0.801980, 21.396671, 4.590666, 11.298093, 22.758972, 2.834688, 160.404388, 15.914965, 0.083544, 3.981773},
	    {ELEMENT_RA, 2, 4.986228, 0.082597, 32.474945, 0.791468, 21.947443, 4.608034, 11.800013, 24.792431, 10.807292, 0.082597, 3.956572},
	    {ELEMENT_AC, 0, 15.914053, 0.080511, 32.535042, 0.770669, 21.553976, 4.352206, 11.433394, 21.381622, 3.612409, 130.500748, 3.939212},
	    {ELEMENT_AC, 3, 15.584983, 0.077438, 32.022125, 0.739963, 21.456327, 4.040735, 0.757593, 47.525002, 12.341252, 19.406845, 3.838984},
	    {ELEMENT_TH, 0, 15.784024, 0.077067, 32.454899, 0.735137, 21.849222, 4.097976, 4.239077, 109.464111, 11.736191, 20.512138, 3.922533},
	    {ELEMENT_TH, 4, 15.515445, 0.074499, 32.090691, 0.711663, 13.996399, 3.871044, 12.918157, 18.596891, 7.635514, 3.871044, 3.831122},
	    {ELEMENT_PA, 0, 32.740208, 0.709545, 21.973675, 4.050881, 12.957398, 19.231543, 3.683832, 117.255005, 15.744058, 0.074040, 3.886066},
	    {ELEMENT_U, 0, 15.679275, 0.071206, 32.824306, 0.681177, 13.660459, 18.236156, 3.687261, 112.500038, 22.279434, 3.930325, 3.854444},
	    {ELEMENT_U, 3, 15.360309, 0.067815, 32.395657, 0.654643, 21.961290, 3.643409, 1.325894, 39.604965, 14.251453, 16.330570, 3.706622},
	    {ELEMENT_U, 4, 15.355091, 0.067789, 32.235306, 0.652613, 0.557745, 42.354237, 14.396367, 15.908239, 21.751173, 3.553231, 3.705863},
	    {ELEMENT_U, 6, 15.333844, 0.067644, 31.770849, 0.646384, 21.274414, 3.317894, 13.872636, 14.650250, 0.048519, 75.339699, 3.700591},
	    {ELEMENT_NP, 0, 32.999901, 0.657086, 22.638077, 3.854918, 14.219973, 17.435474, 3.672950, 109.464485, 15.683245, 0.068033, 3.769391},
	    {ELEMENT_NP, 3, 15.378152, 0.064613, 32.572132, 0.631420, 22.206125, 3.561936, 1.413295, 37.875511, 14.828381, 15.546129, 3.603370},
	    {ELEMENT_NP, 4, 15.373926, 0.064597, 32.423019, 0.629658, 21.969994, 3.476389, 0.662078, 39.438942, 14.969350, 15.135764, 3.603039},
	    {ELEMENT_NP, 6, 15.359986, 0.064528, 31.992825, 0.624505, 21.412458, 3.253441, 0.066574, 67.658318, 14.568174, 13.980832, 3.600942},
	    {ELEMENT_PU, 0, 33.281178, 0.634999, 23.148544, 3.856168, 15.153755, 16.849735, 3.031492, 121.292038, 15.704215, 0.064857, 3.664200},
	    {ELEMENT_PU, 3, 15.356004, 0.060590, 32.769127, 0.604663, 22.680210, 3.491509, 1.351055, 37.260635, 15.416232, 14.981921, 3.428895},
	    {ELEMENT_PU, 4, 15.416219, 0.061456, 32.610569, 0.607938, 22.256662, 3.411848, 0.719495, 37.628792, 15.518152, 14.464360, 3.480408},
	    {ELEMENT_PU, 6, 15.436506, 0.061815, 32.289719, 0.606541, 14.726737, 3.245363, 15.012391, 13.616438, 7.024677, 3.245364, 3.502325},
	    {ELEMENT_AM, 0, 33.435162, 0.612785, 23.657259, 3.792942, 15.576339, 16.195778, 3.027023, 117.757004, 15.746100, 0.061755, 3.541160},
	    {ELEMENT_CM, 0, 15.804837, 0.058619, 33.480801, 0.590160, 24.150198, 3.674720, 3.655563, 100.736191, 15.499866, 15.408296, 3.390840},
	    {ELEMENT_BK, 0, 15.889072, 0.055503, 33.625286, 0.569571, 24.710381, 3.615472, 3.707139, 97.694786, 15.839268, 14.754303, 3.213169},
	    {ELEMENT_CF, 0, 33.794075, 0.550447, 25.467693, 3.581973, 16.048487, 14.357388, 3.657525, 96.064972, 16.008982, 0.052450, 3.005326}};

	auto it = std::find_if(wk1995.begin(), wk1995.end(), [&](FormFactorData_WK1995 &data) { return data.Z() == Z && data.formalCharge() == formalCharge; });
	return std::make_tuple(std::ref(*it), it == wk1995.end());
}

} // namespace XRayFormFactors
