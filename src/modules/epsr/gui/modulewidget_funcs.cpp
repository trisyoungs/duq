/*
	*** EPSR Module Widget - Functions
	*** src/modules/epsr/gui/modulewidget_funcs.cpp
	Copyright T. Youngs 2012-2019

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

#include "modules/epsr/gui/modulewidget.h"
#include "gui/viewer/dataviewer.hui"
#include "gui/widgets/mimetreewidgetitem.h"
#include "main/dissolve.h"
#include "modules/epsr/epsr.h"
#include "module/group.h"
#include "classes/atomtype.h"
#include "templates/variantpointer.h"
#include "genericitems/listhelper.h"

// Constructor
EPSRModuleWidget::EPSRModuleWidget(QWidget* parent, EPSRModule* module, Dissolve& dissolve) : ModuleWidget(parent), dissolve_(dissolve), module_(module)
{
	// Set up user interface
	ui_.setupUi(this);

	refreshing_ = true;

	NumberFormat numberFormat;

	// F(Q) Graph
	FQGraph_ = ui_.FQPlotWidget->dataViewer();

	// -- Set view
	FQGraph_->view().setViewType(View::FlatXYView);
	FQGraph_->view().axes().setTitle(0, "\\it{Q}, \\sym{angstrom}\\sup{-1}");
	FQGraph_->view().axes().setMax(0, 10.0);
	FQGraph_->view().axes().setTitle(1, "F(\\it{Q})");
	FQGraph_->view().axes().setMin(1, -1.0);
	FQGraph_->view().axes().setMax(1, 1.0);
	FQGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::HalfVerticalShift);
	FQGraph_->view().setAutoFollowType(View::AllAutoFollow);
	// -- Set group styling
	FQGraph_->groupManager().setGroupColouring("Exp", RenderableGroup::AutomaticIndividualColouring);
	FQGraph_->groupManager().setGroupVerticalShifting("Exp", RenderableGroup::IndividualVerticalShifting);
	FQGraph_->groupManager().setGroupColouring("Calc", RenderableGroup::AutomaticIndividualColouring);
	FQGraph_->groupManager().setGroupVerticalShifting("Calc", RenderableGroup::IndividualVerticalShifting);
	FQGraph_->groupManager().setGroupStipple("Calc", LineStipple::QuarterDashStipple);
	FQGraph_->groupManager().setGroupColouring("Delta", RenderableGroup::AutomaticIndividualColouring);
	FQGraph_->groupManager().setGroupVerticalShifting("Delta", RenderableGroup::IndividualVerticalShifting);
	FQGraph_->groupManager().setGroupStipple("Delta", LineStipple::DotStipple);

	// F(Q) Fitting Graph
	FQFitGraph_ = ui_.FQFitPlotWidget->dataViewer();

	// -- Set view
	FQFitGraph_->view().setViewType(View::FlatXYView);
	FQFitGraph_->view().axes().setTitle(0, "\\it{Q}, \\sym{angstrom}\\sup{-1}");
	FQFitGraph_->view().axes().setMax(0, 10.0);
	FQFitGraph_->view().axes().setTitle(1, "\\sym{Delta}F(\\it{Q})");
	FQFitGraph_->view().axes().setMin(1, -1.0);
	FQFitGraph_->view().axes().setMax(1, 1.0);
	FQFitGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::HalfVerticalShift);
	FQFitGraph_->view().setAutoFollowType(View::AllAutoFollow);

	// Partial S(Q) Graph
	SQGraph_ = ui_.SQPlotWidget->dataViewer();

	// -- Set view
	SQGraph_->view().setViewType(View::FlatXYView);
	SQGraph_->view().axes().setTitle(0, "\\it{Q}, \\sym{angstrom}\\sup{-1}");
	SQGraph_->view().axes().setMax(0, 10.0);
	SQGraph_->view().axes().setTitle(1, "S(\\it{Q})");
	SQGraph_->view().axes().setMin(1, -1.0);
	SQGraph_->view().axes().setMax(1, 1.0);
	SQGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::TwoVerticalShift);
	SQGraph_->view().setAutoFollowType(View::AllAutoFollow);
	// -- Set group styling
	SQGraph_->groupManager().setGroupColouring("Estimated", RenderableGroup::AutomaticIndividualColouring);
	SQGraph_->groupManager().setGroupVerticalShifting("Estimated", RenderableGroup::IndividualVerticalShifting);
	SQGraph_->groupManager().setGroupColouring("Calc", RenderableGroup::AutomaticIndividualColouring);
	SQGraph_->groupManager().setGroupVerticalShifting("Calc", RenderableGroup::IndividualVerticalShifting);
	SQGraph_->groupManager().setGroupStipple("Calc", LineStipple::QuarterDashStipple);
	SQGraph_->groupManager().setGroupColouring("Delta", RenderableGroup::AutomaticIndividualColouring);
	SQGraph_->groupManager().setGroupVerticalShifting("Delta", RenderableGroup::IndividualVerticalShifting);
	SQGraph_->groupManager().setGroupStipple("Delta", LineStipple::DotStipple);

	// g(r) Graph
	GRGraph_ = ui_.GRPlotWidget->dataViewer();

	// -- Set view
	GRGraph_->view().setViewType(View::FlatXYView);
	GRGraph_->view().axes().setTitle(0, "\\it{r}, \\sym{angstrom}");
	GRGraph_->view().axes().setMax(0, 10.0);
	GRGraph_->view().axes().setTitle(1, "g(r)");
	GRGraph_->view().axes().setMin(1, -1.0);
	GRGraph_->view().axes().setMax(1, 1.0);
	GRGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::TwoVerticalShift);
	GRGraph_->view().setAutoFollowType(View::AllAutoFollow);
	// -- Set group styling
	GRGraph_->groupManager().setGroupColouring("Estimated", RenderableGroup::AutomaticIndividualColouring);
	GRGraph_->groupManager().setGroupVerticalShifting("Estimated", RenderableGroup::IndividualVerticalShifting);
	GRGraph_->groupManager().setGroupColouring("Calc", RenderableGroup::AutomaticIndividualColouring);
	GRGraph_->groupManager().setGroupVerticalShifting("Calc", RenderableGroup::IndividualVerticalShifting);
	GRGraph_->groupManager().setGroupStipple("Calc", LineStipple::QuarterDashStipple);

	// F(r) Graph
	FRGraph_ = ui_.FRPlotWidget->dataViewer();
	// -- Set view
	FRGraph_->view().setViewType(View::FlatXYView);
	FRGraph_->view().axes().setTitle(0, "\\it{r}, \\sym{angstrom}");
	FRGraph_->view().axes().setMax(0, 10.0);
	FRGraph_->view().axes().setTitle(1, "F(r)");
	FRGraph_->view().axes().setMin(1, -1.0);
	FRGraph_->view().axes().setMax(1, 1.0);
	FRGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::TwoVerticalShift);
	FRGraph_->view().setAutoFollowType(View::AllAutoFollow);
	// -- Set group styling
	FRGraph_->groupManager().setGroupColouring("Exp", RenderableGroup::AutomaticIndividualColouring);
	FRGraph_->groupManager().setGroupVerticalShifting("Exp", RenderableGroup::IndividualVerticalShifting);
	FRGraph_->groupManager().setGroupColouring("Calc", RenderableGroup::AutomaticIndividualColouring);
	FRGraph_->groupManager().setGroupVerticalShifting("Calc", RenderableGroup::IndividualVerticalShifting);
	FRGraph_->groupManager().setGroupStipple("Calc", LineStipple::QuarterDashStipple);

	// Phi(r) (Empirical Potentials) Graph
	phiRGraph_ = ui_.PhiRPlotWidget->dataViewer();
	// -- Set view
	phiRGraph_->view().setViewType(View::FlatXYView);
	phiRGraph_->view().axes().setTitle(0, "\\it{r}, \\sym{angstrom}");
	phiRGraph_->view().axes().setMax(0, 10.0);
	phiRGraph_->view().axes().setTitle(1, "\\sym{phi}(\\it{r})");
	phiRGraph_->view().axes().setMin(1, -1.0);
	phiRGraph_->view().axes().setMax(1, 1.0);
	phiRGraph_->groupManager().setVerticalShiftAmount(RenderableGroupManager::TwoVerticalShift);
	phiRGraph_->view().setAutoFollowType(View::AllAutoFollow);
	// -- Set group styling
	phiRGraph_->groupManager().setGroupColouring("Phi", RenderableGroup::AutomaticIndividualColouring);

	// phi(r) Magnitude Graph
	phiMagGraph_ = ui_.PhiMagPlotWidget->dataViewer();
	// -- Set view
	phiMagGraph_->view().setViewType(View::FlatXYView);
	phiMagGraph_->view().axes().setTitle(0, "Iteration");
	numberFormat = phiMagGraph_->view().axes().numberFormat(0);
	numberFormat.setType(NumberFormat::IntegerFormat);
	phiMagGraph_->view().axes().setNumberFormat(0, numberFormat);
	phiMagGraph_->view().axes().setMax(0, 10.0);
	phiMagGraph_->view().axes().setTitle(1, "\\sym{Delta}\\sym{phi}(\\it{r}), kJ mol\\sup{-1} \\sum{angstrom}\\sup{-1}");
	phiMagGraph_->view().axes().setMin(1, 0.0);
	phiMagGraph_->view().axes().setMax(1, 1.0);
	phiMagGraph_->view().setAutoFollowType(View::XAutoFollow);

	// R-Factor Graph
	rFactorGraph_ = ui_.RFactorPlotWidget->dataViewer();
	// -- Set view
	rFactorGraph_->view().setViewType(View::FlatXYView);
	rFactorGraph_->view().axes().setTitle(0, "Iteration");
	numberFormat = rFactorGraph_->view().axes().numberFormat(0);
	numberFormat.setType(NumberFormat::IntegerFormat);
	rFactorGraph_->view().axes().setNumberFormat(0, numberFormat);
	rFactorGraph_->view().axes().setMax(0, 10.0);
	rFactorGraph_->view().axes().setTitle(1, "R-Factor");
	numberFormat = rFactorGraph_->view().axes().numberFormat(1);
	numberFormat.setType(NumberFormat::ScientificFormat);
	rFactorGraph_->view().axes().setNumberFormat(1, numberFormat);
	rFactorGraph_->view().axes().setMin(1, 0.0);
	rFactorGraph_->view().axes().setMax(1, 0.5);
	rFactorGraph_->view().setAutoFollowType(View::AllAutoFollow);

	setGraphDataTargets(module_);

	// Debug Tab - EP Functions Graph
	DataViewer* epView = ui_.DebugEPFunctionsPlotWidget->dataViewer();
	// -- Set view
	epView->view().setViewType(View::FlatXYView);
	epView->view().axes().setTitle(0, "\\it{r}, \\sym{angstrom}");
	epView->view().axes().setMax(0, 10.0);
	epView->view().axes().setTitle(1, "\\sym{phi}(\\it{r})");
	epView->view().axes().setMin(1, -1.0);
	epView->view().axes().setMax(1, 1.0);
	epView->groupManager().setVerticalShiftAmount(RenderableGroupManager::TwoVerticalShift);
	// -- Set group styling
	rFactorGraph_->groupManager().setGroupColouring("RFactor", RenderableGroup::AutomaticIndividualColouring);
	// -- Set group styling
	FQFitGraph_->groupManager().setGroupColouring("Delta", RenderableGroup::AutomaticIndividualColouring);
	FQFitGraph_->groupManager().setGroupVerticalShifting("Delta", RenderableGroup::IndividualVerticalShifting);
	FQFitGraph_->groupManager().setGroupColouring("Fit", RenderableGroup::AutomaticIndividualColouring);
	FQFitGraph_->groupManager().setGroupVerticalShifting("Fit", RenderableGroup::IndividualVerticalShifting);
	FQFitGraph_->groupManager().setGroupStipple("Fit", LineStipple::QuarterDashStipple);
	
	updateControls();

	refreshing_ = false;
}

EPSRModuleWidget::~EPSRModuleWidget()
{
}

/*
 * UI
 */

// Update controls within widget
void EPSRModuleWidget::updateControls(int flags)
{
	refreshing_ = true;

	ui_.FQPlotWidget->updateToolbar();
	ui_.FQFitPlotWidget->updateToolbar();
	ui_.SQPlotWidget->updateToolbar();
	ui_.GRPlotWidget->updateToolbar();
	ui_.FRPlotWidget->updateToolbar();
	ui_.PhiRPlotWidget->updateToolbar();
	ui_.PhiMagPlotWidget->updateToolbar();
	ui_.RFactorPlotWidget->updateToolbar();

	FQGraph_->postRedisplay();
	FQFitGraph_->postRedisplay();
	SQGraph_->postRedisplay();
	GRGraph_->postRedisplay();
	FRGraph_->postRedisplay();
	phiRGraph_->postRedisplay();
	phiMagGraph_->postRedisplay();
	rFactorGraph_->postRedisplay();

	refreshing_ = false;
}

/*
 * State I/O
 */

// Write widget state through specified LineParser
bool EPSRModuleWidget::writeState(LineParser& parser) const
{
	// Write DataViewer sessions
	if (!FQGraph_->writeSession(parser)) return false;
	if (!FQFitGraph_->writeSession(parser)) return false;
	if (!SQGraph_->writeSession(parser)) return false;
	if (!GRGraph_->writeSession(parser)) return false;
	if (!FRGraph_->writeSession(parser)) return false;
	if (!phiRGraph_->writeSession(parser)) return false;
	if (!phiMagGraph_->writeSession(parser)) return false;
	if (!rFactorGraph_->writeSession(parser)) return false;

	return true;
}

// Read widget state through specified LineParser
bool EPSRModuleWidget::readState(LineParser& parser)
{
	// Read DataViewer sessions
	if (!FQGraph_->readSession(parser)) return false;
	if (!FQFitGraph_->readSession(parser)) return false;
	if (!SQGraph_->readSession(parser)) return false;
	if (!GRGraph_->readSession(parser)) return false;
	if (!FRGraph_->readSession(parser)) return false;
	if (!phiRGraph_->readSession(parser)) return false;
	if (!phiMagGraph_->readSession(parser)) return false;
	if (!rFactorGraph_->readSession(parser)) return false;

	return true;
}

/*
 * Widgets / Functions
 */

// Set data targets in graphs
void EPSRModuleWidget::setGraphDataTargets(EPSRModule* module)
{
	if (!module) return;

	int n, m;
	CharString blockData;

	// Add total R-Factor before any dataset R-Factors
	Renderable* rFacTot = rFactorGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//RFactor", module->uniqueName()), "Total", "Total");
	rFacTot->lineStyle().setStipple(LineStipple::HalfDashStipple);

	// Add reference data & calculated data to the FQGraph_, and percentage errors to the rFactorGraph_
	RefDataListIterator<Module,ModuleGroup*> targetIterator(module->allTargets());
	while (Module* targetModule = targetIterator.iterate())
	{
		// Reference data
		FQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//ReferenceData", targetModule->uniqueName()), CharString("%s (Exp)", targetModule->uniqueName()), "Exp");
	
		// Calculated data from associated module
		if (DissolveSys::sameString(targetModule->type(), "NeutronSQ"))
		{
			// F(Q)
			FQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//WeightedSQ//Total", targetModule->uniqueName()), CharString("%s (Calc)", targetModule->uniqueName()), "Calc");

			// F(Q) diff w.r.t. reference
			FQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//Difference//%s", module->uniqueName(), targetModule->uniqueName()), CharString("%s (Delta)", targetModule->uniqueName()), "Delta");

			// R-Factor between F(Q) and reference
			rFactorGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//RFactor//%s", module->uniqueName(), targetModule->uniqueName()), targetModule->uniqueName(), "RFactor");

			// Reference F(r) (from direct FT of input data)
			FRGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//ReferenceDataFT", targetModule->uniqueName()), CharString("%s (Exp)", targetModule->uniqueName()), "Exp");

			// Simulated F(r) (from FT of the calculated F(Q))
			FRGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//SimulatedFR//%s", module->uniqueName(), targetModule->uniqueName()), CharString("%s (Calc)", targetModule->uniqueName()), "Calc");
		}

		// Delta F(Q) and fit
		FQFitGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//DeltaFQ//%s", module->uniqueName(), targetModule->uniqueName()), CharString("%s (Delta)", targetModule->uniqueName()), "Delta");

		FQFitGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//DeltaFQFit//%s", module->uniqueName(), targetModule->uniqueName()), CharString("%s (Fit)", targetModule->uniqueName()), "Fit");
	}

	// Loop over groups
	ListIterator<ModuleGroup> groupIterator(module_->groupedTargets().groups());
	while (ModuleGroup* group = groupIterator.iterate())
	{
		// Add experimentally-determined partial S(Q), calculated partial S(Q), and delta S(Q) to the SQGraph_
		n = 0;
		for (AtomType* at1 = dissolve_.atomTypes().first(); at1 != NULL; at1 = at1->next(), ++n)
		{
			m = n;
			for (AtomType* at2 = at1; at2 != NULL; at2 = at2->next(), ++m)
			{
				CharString id("%s-%s [%s]", at1->name(), at2->name(), group->name());

				/*
				 * Partial Structure Factors
				 */

				// Unweighted estimated partial
				SQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//EstimatedSQ//%s//%s-%s", module_->uniqueName(), group->name(), at1->name(), at2->name()), CharString("%s (Estimated)", id.get()), "Estimated");

				// Calculated / summed partial
				SQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//UnweightedSQ//%s//%s-%s", module_->uniqueName(), group->name(), at1->name(), at2->name()), CharString("%s (Calc)", id.get()), "Calc");

				// Deltas
				SQGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//DeltaSQ//%s//%s-%s", module_->uniqueName(), group->name(), at1->name(), at2->name()), CharString("%s (Delta)", id.get()), "Delta");

				/*
				 * Partial RDFs
				 */

				// Experimentally-determined unweighted partial
				GRGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//EstimatedGR//%s//%s-%s", module_->uniqueName(), group->name(), at1->name(), at2->name()), CharString("%s (Estimated)", id.get()), "Estimated");

				// Calculated / summed partial
				GRGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//UnweightedGR//%s//%s-%s//Full", module_->uniqueName(), group->name(), at1->name(), at2->name()), CharString("%s (Calc)", id.get()), "Calc");
			}
		}
	}

	n = 0;
	for (AtomType* at1 = dissolve_.atomTypes().first(); at1 != NULL; at1 = at1->next(), ++n)
	{
		m = n;
		for (AtomType* at2 = at1; at2 != NULL; at2 = at2->next(), ++m)
		{
			CharString id("%s-%s", at1->name(), at2->name());

			// Generated potential
			phiRGraph_->createRenderable(Renderable::Data1DRenderable, CharString("PairPotential//%s//Additional", id.get()), id.get(), "Phi");
		}
	}

	// Add phi magnitude data
	phiMagGraph_->createRenderable(Renderable::Data1DRenderable, CharString("%s//EPMag", module_->uniqueName()), "EReq", "EReq");
}

/*
 * Debug Tab
 */

// Update data shown on fit coefficients viewer
void EPSRModuleWidget::updateDebugEPFunctionsGraph(int from, int to)
{
	DataViewer* viewer = ui_.DebugEPFunctionsPlotWidget->dataViewer();
	viewer->clearRenderables();
	debugFunctionData_.clear();

	if (!module_) return;

	int i = 0;
	for (AtomType* at1 = dissolve_.atomTypes().first(); at1 != NULL; at1 = at1->next(), ++i)
	{
		int j = i;
		for (AtomType* at2 = at1; at2 != NULL; at2 = at2->next(), ++j)
		{
			CharString id("%s-%s", at1->name(), at2->name());

			// Add generate potential to graph
			Renderable* phi = viewer->createRenderable(Renderable::Data1DRenderable, CharString("PairPotential//%s//Additional", id.get()), id.get(), id.get());
			viewer->addRenderableToGroup(phi, id.get());

			// Generate data for function range specified
			for (int n=from; n<=to; ++n)
			{
				Data1D* data = debugFunctionData_.add();
				(*data) = module_->generateEmpiricalPotentialFunction(dissolve_, i, j, n);
				data->setObjectTag(CharString("PairPotential//%s//Function//%i", id.get(), n));
				Renderable* rend = viewer->createRenderable(Renderable::Data1DRenderable, CharString("PairPotential//%s//Function//%i", id.get(), n), DissolveSys::itoa(n), CharString("%s/%i", id.get(), n));
				viewer->addRenderableToGroup(rend, id.get());
			}
		}
	}

}

void EPSRModuleWidget::on_DebugFromSpin_valueChanged(int value)
{
	updateDebugEPFunctionsGraph(value, ui_.DebugToSpin->value());
}

void EPSRModuleWidget::on_DebugToSpin_valueChanged(int value)
{
	updateDebugEPFunctionsGraph(ui_.DebugFromSpin->value(), value);
}
