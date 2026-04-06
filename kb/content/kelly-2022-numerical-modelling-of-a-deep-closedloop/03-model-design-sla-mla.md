---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/03-model-design-sla-mla"
section: "Model Design: SLA and MLA"
order: 3
tags:
  - "engineering/geothermal"
  - "engineering/numerical-methods"
  - "engineering/model-design"
  - "engineering/eavor-loop"
  - "engineering/multilateral-wells"
summary: "Describes the design and parameters of the single lateral array (SLA) and multiple lateral arrays (MLA) 3D FEM models used to evaluate maximum power output of one and ten stacked Eavor-Loop arrays."
formulas: []
---

# Model Design: SLA and MLA (Sections 2.3–2.5)

## 2.3. Overview of Model Design

Four model series were developed iteratively (2D reduced-scale → 3D full-scale):

| Model | Name | Purpose | Research Question |
|-------|------|---------|-------------------|
| SLA | Single Lateral Array | Baseline maximum power output for one "James Joyce" design | Q1 |
| MLA | Multiple Lateral Arrays | Ten stacked arrays around shared vertical wells | Q2 |
| CF | Controlled Flow | Realistic heat transfer with injected water flow | Q4 calibration |
| FT | Fixed Temperature | Companion to CF; same geometry with constant-T boundary | Q4 calibration |

SLA and MLA use a **constant pipe temperature** of 20 °C to simulate infinite flushing with cool water — representing the **maximum possible power output**. CF and FT are smaller-scale models used to derive an **adjustment factor** scaling SLA/MLA outputs to more realistic values.

---

## 2.4. Model SLA — Single Lateral Array (Q1)

### Geometry

- Two vertical wells placed **50 m apart**, extending to **5000 m depth**
- At 5000 m depth, injection well fans into a **5-tine multilateral array** that folds back and reconnects to the production well ("James Joyce" design)
- Domain block extends **50 m in each direction** around the pipework, with a "toe" section for the lateral array
- 3D tetrahedral mesh; pipework represented as polylines

### Key Design Decisions

- Depth and temperature targets based on Eavor press releases: drilling to 5 km depth, targeting 150 °C
- Geothermal gradient: **0.03 K/m** → 150 °C at 5000 m depth
- Multilateral pipe length: derived from Eavor's statement that 10 arrays on shared vertical wells = 50,000 m total → **4000 m per multilateral section** (after subtracting vertical well lengths)
- Geothermal heat flux: **0.065 W/m²** (Chapman, 1986), applied as net-zero source terms (equal flux in at base, out at top)
- **No hydraulic gradient** — static groundwater

### Boundary Conditions

All pipes are set at a **constant 20 °C**. This cools surrounding rock and removes heat from the domain. Since the geothermal heat flux is net zero, cooling at the pipes is the only source of net energy loss, enabling direct calculation of extracted power.

### Parameters

| Property | Value |
|----------|-------|
| Temperature in pipe | 20 °C |
| Geothermal heat flux | 0.065 W/m² |
| Geothermal gradient | 0.03 K/m |
| Pressure head in domain | 100 m |
| Fluid density | 999.25 kg/m³ |
| Fluid viscosity | 1.1929 × 10⁻³ Pa·s |
| Specific heat capacity of fluid | 4085.9 J |
| Heat conductivity of fluid | 0.59214 W/m·K |
| Rock density | 2300 kg/m³ |
| Specific heat capacity of rock | 2150 J |
| Heat conductivity of rock | 2.618 W/m·K |
| Porosity of rock | 0.2 |
| Hydraulic conductivity of rock | 1 × 10⁻¹⁵ m/s |
| Heat dispersion tensor | 5.0 m |

---

## 2.5. Model MLA — Multiple Lateral Arrays (Q2)

### Geometry

Based on Eavor's claim that up to **10 Eavor-Loops** can be emplaced from a single drill location sharing the same vertical wells (the "James Joyce" design).

- SLA lateral geometry duplicated and rotated to create **5 arrays evenly spaced at 2π/5 radians** in a lower tier
- A second tier of **5 arrays offset by π/5 radians** positioned **50 m above** the first tier
- Total: **10 stacked lateral arrays**
- Domain basal width: **1200 m** (to accommodate expanded arrangement)
- Configuration designed to exploit maximum-temperature zone at depth while maximising inter-array spacing to reduce thermal interference

### Boundary Conditions

Identical to SLA: all pipes at constant **20 °C**, geothermal heat flux **0.065 W/m²**, geothermal gradient **0.03 K/m**.

### Parameters

| Property | Value |
|----------|-------|
| Temperature in pipe | 20 °C |
| Geothermal heat flux | 0.065 W/m² |
| Geothermal gradient | 0.03 K/m |
| Pressure head in domain | 100 m |
| Fluid density | 999.25 kg/m³ |
| Fluid viscosity | 1.1929 × 10⁻³ Pa·s |
| Specific heat capacity of fluid | 4085.9 J |
| Heat conductivity of fluid | 0.59214 W/m·K |
| Rock density | 2300 kg/m³ |
| Specific heat capacity of rock | 2150 J |
| Heat conductivity of rock | 2.618 W/m·K |
| Porosity of rock | 0.2 |
| Hydraulic conductivity of rock | 1 × 10⁻¹⁵ m/s |
| Heat dispersion tensor | 5.0 m |
