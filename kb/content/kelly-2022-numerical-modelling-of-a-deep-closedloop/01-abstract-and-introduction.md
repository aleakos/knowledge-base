---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/01-abstract-and-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/geothermal"
  - "engineering/deep-closed-loop"
  - "engineering/energy-transition"
  - "engineering/eavor-loop"
summary: "Motivates the study of deep closed-loop geothermal systems (DCLGS) against the backdrop of intermittent renewables and limitations of conventional geothermal, introducing the Eavor-Loop as the subject of numerical evaluation."
formulas: []
---

# Abstract and Introduction

## Abstract

Conventional geothermal energy systems are limited by hydrogeological conditions and environmental risks, and wind/solar solutions have issues with intermittency and the need for grid storage. Deep closed-loop geothermal systems such as the Eavor-Loop are championed as scalable, dispatchable, zero-emission alternative energy technologies, but as yet they are largely untested. A series of numerical models are created using the finite element method to evaluate the power output claims made by Eavor. The models use typical parameter values to create a simplified study domain. The modelling results show that the power output claims are plausible, although the upper range of their predictions would likely require production temperatures in excess of 150 °C. The technology is shown to be scalable by adding additional lateral wellbore arrays, but this leads to a reduction in efficiency due to thermal interference. It is demonstrated that the presence of groundwater can improve power output at relatively high hydraulic conductivity values. Doubt is cast on the likelihood of finding such values in the deep subsurface. Flow rate is shown to increase power output, but the practicality of using it to follow energy demand is not established.

**Keywords:** deep closed-loop geothermal; heat transport; numerical modelling; baseload power; multilaterals

---

## 1. Introduction

### 1.1. State of Play

The global climate crisis has driven attention to decarbonising energy production. Wind and solar dominate the energy transition discussion, but intermittency and reliance on grid-scale storage motivate the search for clean, dispatchable baseload power. Deep geothermal energy, tapping effectively limitless heat within the Earth, is among the most promising candidates.

Geothermal has historically been restricted to high-enthalpy volcanic regions (Iceland, New Zealand). Installed capacity grew only 2.3% from 1990 to 2016 (IEA). Key limitations include:

- Traditional drilling unable to reach depths with sufficient temperatures at average geothermal gradients.
- Existing deep systems use an **open-loop** design injecting into/abstracting from confined saline aquifers or fractured basement rock, with direct rock–water interaction.
- Risks: groundwater contamination, mineral scaling, induced seismicity from hydraulic fracturing (EGS), and expensive dry wells (e.g., Newcastle Science Central, Geretsried, Germany).

According to Geiser et al. (2016), 98% of the Earth's available geothermal energy is in Hot Dry Rock or Hot Sedimentary Aquifers — resources that EGS depends on fracturing to access. Closed-loop systems could access these resources without fracturing.

The Eavor-Loop is a deep closed-loop geothermal energy system (DCLGS) that uses a water-based, "benign" heat-bearing fluid. Groundwater contamination risk is very low even in the event of a leak. Advances in lateral drilling technology, driven by the unconventional hydrocarbon boom in North America, are the key enabler.

### 1.2. The Eavor-Lite Demonstration Plant

Eavor built a demonstration plant near their Alberta, Canada base of operations — **Eavor-Lite** — completed in 2020. Key specifications:

- Two lateral sections connecting two vertical wells
- Lateral separation: ~2000 m at a depth of 2400 m
- Designed capacity: thermal energy to heat ~16,000 homes

Key proven technologies:
1. Drilling and intersecting lateral wellbores with vertical wells using **magnetic ranging technology**.
2. **Rock-Pipe sealing system** lining uncased laterals as drilled.
3. **Thermosiphon effect** — enabling operation without parasitic pumping costs.

The surface power plant uses an **organic Rankine cycle (ORC)**: heat from geothermal brine is exchanged into an organic compound (e.g., perfluoropentane) with a low boiling point, driving turbines. The ORC is approximately **13% efficient** at converting thermal to gross electrical power at an input temperature of 150 °C; higher efficiencies are achievable at higher input temperatures.

Key commercial claims by Eavor:
- Maximum production fluid temperature: **180 °C**
- Power per Eavor-Loop: **3–8 MW**
- Up to **10 lateral arrays** per drill site ("James Joyce" design), totalling up to 50 km of pipework
- Power is **dispatchable** by controlling flow rate
- Smallest lifecycle footprint of any energy source (Matuszewska et al., 2019)
- In early 2021, Chevron and BP took shares in Eavor Technologies Ltd.

### 1.3. Geretsried — The First Commercial Plant

A failed EGS project in Geretsried, Bavaria, Germany presented Eavor with the opportunity to retrofit two dry wells into the first commercial Eavor-Loop. Key facts:

- Initial expected power output: **10 MW**, with expansion to **200 MW** planned
- Expansion cost projected: **€2.4 bn**
- Enabled by Germany's Renewable Energy Sources Act feed-in tariff of **>€200/MWh**

### 1.4. Existing Literature on DCLGS

Key prior studies relevant to this work:

| Study | Method | Key Finding |
|---|---|---|
| Yuan et al. (2021) | Duhamel's convolution + natural coupling | Thermal conductivity is the primary performance factor; 10-lateral model gave 9–11 MW sustained over 30 years |
| Van Oort et al. (2021) | Review | ~25–30 MW from a single DCLGS borehole |
| GreenFire Energy (2020) | Field-scale test + numerical validation | Good agreement between supercritical CO₂ closed-loop model and experiment |
| McClure (2021) | Analytical | Claims DCLGS must fail — conduction alone insufficient for economically viable sustained output |
| Tolooiyan & Hemmingway (2014) | FEM | Modest groundwater flow significantly impacts borehole heat exchanger output; optimum orientation perpendicular to flow |
| Wu et al. (2017) | Numerical (U-shaped DCLGS) | Flow rate is the main controlling variable; lower injection rate → lower power but higher sustained production temperature |
| Chen et al. (2021) | OpenGeoSys | Deep U-tube EUBHE shows output decline over time |
| Wang et al. (2021) | Coaxial DCLGS | Cooled region extends 100 m after 30 years; >5 laterals reduces efficiency due to thermal interference |

### 1.5. Research Questions

| ID | Question | Approach |
|---|---|---|
| Q1 | Are the power output claims realistic? | Single lateral array model (SLA) |
| Q2 | How does stacking additional lateral arrays affect power output? | Multiple lateral arrays model (MLA) with 10 arrays |
| Q3 | What is the effect of groundwater flow on performance? | Static (SG) vs. flowing groundwater (FG) models |
| Q4 | Does controlling flow rate make this a dispatchable technology? | Controlled flow model (CF) + fixed temperature comparison (FT) |
