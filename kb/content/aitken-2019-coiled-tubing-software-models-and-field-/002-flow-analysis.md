---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/002-flow-analysis"
section: "Flow Analysis"
order: 2
tags:
  - "engineering/coiled-tubing"
  - "engineering/multiphase-flow"
  - "engineering/fluid-dynamics"
  - "engineering/pressure-gradients"
summary: "Flow analysis methodology for calculating pressure and flowrate distributions during CT circulation using empirical correlations and rheological models"
formulas:
  - id: "F1"
    name: "Shear Rate"
    expr: "γ̇ = dV/dr"
  - id: "F2"
    name: "Shear Stress"
    expr: "τ = F/A"
  - id: "F3"
    name: "Bingham Plastic Viscosity"
    expr: "μₑ = τy/γ̇ + μp"
  - id: "F4"
    name: "Power-Law Viscosity"
    expr: "τ = K'(γ̇)^n'"
  - id: "F5"
    name: "Herschel-Bulkley Viscosity"
    expr: "μₑ = τy/γ̇ + K'(γ̇)^(n'-1)"
  - id: "F6"
    name: "Pressure Drop (Laminar/Turbulent)"
    expr: "ΔP = (2ρlfV²)/(d) × ΔL"
---

## Flow Analysis Workflow

The initial flow analysis workflow was presented by Misselbrook et al. (1991). To mimic real CT operations, numerous flow configurations are possible including:

- Normal circulation with flow down the CT workstring and up the completion
- Reverse circulation with flow down the completion and up the CT workstring
- Production or injection flows in a completion without a CT workstring
- Concentric CT flow with any combination of flow directions

All these configurations enable detailed steady-state flow specifications. Pressure can be specified on surface or downhole. The analysis begins at a known pressure location and proceeds along the flow path accounting for frictional and hydrostatic changes to determine unknown pressures.

## Fluid Property Database

An extensive database of known fluids is available, including:
- Water
- Brine
- Acids
- Oil and diesel

This enables variation of rheological properties with temperature and pressure.

## Specialized Analysis Options

The velocity string option enables simultaneous analysis of as many as four siphon strings. The flow analysis in the completion can approximate many production strings or one CT workstring with the complex annulus option. Pressure can be specified at:
- The wellhead
- Reel rotating joint
- The perforations

Sensitivity analysis enables varying one of 28 parameters over a range of values while holding all others constant. In this way, a single run can consider up to 200 different values for one parameter (e.g., N₂ injection rates to avoid lost returns).

## Nodal Computational Approach

The numerical model is based on a nodal computational approach that applies empirical correlations to estimate the rate of change of time-averaged fluid properties in the direction of the mean flow velocity. For the flow analysis, the flow path cross-sectional areas are defined through input data. To account for pressure variations in the gaseous phase, the flow path is divided into segments between input nodes. These segments have similar lengths and are assumed to have uniform thermodynamic properties.

The fluid properties and flow rates are used to compute spatial gradients of pressure and temperature from steady-state mass, momentum, and energy conservation equations.

## Flow Regimes

For single-phase calculations, the following regimes are considered:
- Laminar flow (thin, discrete concentric layers of fluid displaced in parallel)
- Turbulent flow (fluid particles break out of their lamina and mix)
- Plug flow (applies to Bingham Plastic fluids only)

### Laminar Flow

Laminar flow occurs when thin, discrete concentric layers of fluid are displaced, with respect to other layers, in parallel to the direction of flow at unique speeds. As flow rates increase, fluid particles break out of their lamina and mix within adjacent fluid layers, defining the transition from laminar to turbulent flow.

### Turbulent Flow

In turbulent flow, shear stress is not directly related to shear rate across the pipe by fluid viscosity. This relationship is modified by a friction factor. Friction factors are found empirically as a function of Reynolds number and roughness of wall surfaces.

### Plug Flow

Plug flow applies to Bingham Plastic fluids only. When shear stress is below yield stress, plugs can form. Their creation and movement are unstable and unsteady. In steady-state flow analysis, calculations stop when conditions suggest plug flow. In a transient force analysis model, plug flow is allowed.

## Rheological Models

Five main rheology types are supported:

### Newtonian Fluids
For Newtonian fluids such as water, brine, acids, oil and diesel, the relationship between shear rate and shear stress is linear.

### Bingham Plastic Fluids

For Bingham plastic fluids, such as cross-linked cleanout gels and non-friction reduced cement slurries:

$$\mu_e = \frac{\tau_y}{\dot{\gamma}} + \mu_p$$

where:
- τy = yield stress
- μp = plastic viscosity

### Power-Law Fluids

The viscosity of Power-Law fluids, such as fracturing fluids and friction reduced cement slurries, is characterized using:

$$\tau = K'(\dot{\gamma})^{n'}$$

where:
- K' = consistency index
- n' = behaviour exponent

The behaviour exponent n' indicates the type of power law rheology:
- n' < 1: shear thinning
- n' = 1: Newtonian
- n' > 1: shear thickening

Most CT applications use friction-reduced cement with Power-Law rheology.

### Herschel-Bulkley Fluids

For Herschel-Bulkley fluids, such as oil, water, and mixed metal hydroxide-based drilling fluids:

$$\mu_e = \frac{\tau_y}{\dot{\gamma}} + K'(\dot{\gamma})^{n'-1}$$

A Herschel-Bulkley fluid remains rigid when shear stress is smaller than yield stress, but flows like a Power-Law fluid when shear stress exceeds yield stress.

### CTC Power-Law Fluids

CTC Power-Law fluids, such as low concentration polymer gels (Guar, HEC, CMC, Xanthan), have slightly different rheology than standard Power-Law fluids. These gels have significant elastic strength that causes them to have lower friction losses in turbulent flow.

## Flow Pattern Correlations

Several flow pattern correlations from open literature are implemented in the flow model to predict two-phase flow regimes. Two-phase flow correction factors for viscosity and friction, based upon experimental and field data, are used downhole and uphill on the reel.

## Pressure Drop Calculation

Bottom hole pressure is calculated based on injection pressure, pump rates, return rates, and return pressure. The pressure drop over a CT length can be calculated for laminar and turbulent flow of a single-phase liquid using:

$$\Delta P = \frac{2\rho lfV^2}{d}$$

where:
- ρ = fluid density
- f = Fanning friction factor
- d = hydraulic diameter
- l = length of flow path
- V = fluid velocity

Similar equations describe two-phase and foam flows of homogeneous fluids.

## Flow Output

Flow output is calculated at incremental measured depths (MDs) between the wellhead and bottom of the hole. The parameters include:

- The hydrostatic and friction pressure gradients
- The pressure, temperature and density for each phase
- The velocity for each phase
- The gas volume fraction/foam quality, effective viscosity, and shear rate
- The Reynolds number and flow type for two-phase flow regimes

## Computational Considerations

Note that fluid properties are held constant for each segment of the flow path. This can lead to slightly different results if the calculation is run top down or bottom up. If surface pressures are specified, fluid properties are found at slightly smaller pressures because pressure tends to increase when the flow path goes down. Results can vary by up to 5%, depending on segment lengths, fluid properties, and downhole pressure.
