---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/04-model-design-sg-fg-cf-ft"
section: "Model Design: SG, FG, CF, FT, and Adjustment Factor"
order: 4
tags:
  - "engineering/geothermal"
  - "engineering/numerical-methods"
  - "engineering/groundwater-flow"
  - "engineering/model-design"
  - "engineering/heat-transport"
summary: "Describes the static groundwater (SG), flowing groundwater (FG), controlled flow (CF), and fixed temperature (FT) models, plus the CF adjustment factor methodology used to calibrate maximum power outputs from SLA and MLA."
formulas: []
---

# Model Design: SG, FG, CF, FT, and Adjustment Factor (Sections 2.6–2.10)

## 2.6. Models SG & FG — Static vs. Flowing Groundwater (Q3)

These models investigate how groundwater flow in the vicinity of the closed-loop system affects heat transport and power output, a factor unexplored in the DCLGS literature but known to matter for shallow borehole heat exchangers (Tolooiyan & Hemmingway, 2014).

### Geometry

- **Flattened lateral array** (identical dimensions to the SLA/MLA "James Joyce" folded design)
- Domain length: **1443 m**
- Same pipe temperature and heat flux boundary conditions as SLA/MLA

### SG — Static Groundwater

- Hydraulic conductivity: **1 × 10⁻⁹ m/s**
- Uniform pressure head: **100 m** across the domain
- No hydraulic gradient → no groundwater flow

**Parameters (Table 3):**

| Property | Value |
|----------|-------|
| Temperature in pipe | 20 °C |
| Geothermal heat flux | 0.065 W/m² |
| Initial temperature in domain | 150 °C |
| Pressure head in domain | 100 m |
| Fluid density | 999.25 kg/m³ |
| Fluid viscosity | 1.1929 × 10⁻³ Pa·s |
| Specific heat capacity of fluid | 4085.9 J |
| Heat conductivity of fluid | 0.59214 W/m·K |
| Rock density | 2300 kg/m³ |
| Specific heat capacity of rock | 2150 J |
| Heat conductivity of rock | 2.618 W/m·K |
| Porosity of rock | 0.2 |
| Hydraulic conductivity of rock | 1 × 10⁻⁹ m/s |
| Heat dispersion tensor | 5.0 m |

### FG — Flowing Groundwater

- Hydraulic conductivity: **1 × 10⁻⁶ m/s** (also run at 1 × 10⁻⁹ m/s for comparison)
- Constant head boundary conditions: **100 m** on one face, **50 m** on the opposite face → hydraulic gradient of **0.035**
- The value 1 × 10⁻⁶ m/s is typical of fractured crystalline basement (Freeze & Cherry, 1979) but likely near the upper limit at 5 km depth due to pressure-driven fracture closure (Kuang & Jiao, 2014)

**Parameters (Table 4):**

| Property | Value |
|----------|-------|
| Temperature in pipe | 20 °C |
| Geothermal heat flux | 0.065 W/m² |
| Initial temperature in domain | 150 °C |
| Initial pressure head in domain | 60 m |
| Hydraulic gradient across domain | 0.035 |
| Fluid density | 999.25 kg/m³ |
| Fluid viscosity | 1.1929 × 10⁻³ Pa·s |
| Specific heat capacity of fluid | 4085.9 J |
| Heat conductivity of fluid | 0.59214 W/m·K |
| Rock density | 2300 kg/m³ |
| Specific heat capacity of rock | 2150 J |
| Heat conductivity of rock | 2.618 W/m·K |
| Porosity of rock | 0.2 |
| Hydraulic conductivity of rock | 1 × 10⁻⁶ m/s; 1 × 10⁻⁹ m/s |
| Heat dispersion tensor | 5.0 m |

---

## 2.7. Model CF — Controlled Flow (Q4)

CF represents a more realistic simulation of heat transfer to the working fluid by explicitly modelling water injection through a pipe, rather than maintaining a fixed pipe temperature.

### Geometry

- **2D** slice: **20 m long pipe**, **0.2 m diameter** (per Eavor specifications), in a rock block extending **10 m** from the pipe in each direction
- Structured rectangular mesh; node spacing: **1 m** in x-direction, closer near the pipe in y-direction

### Pipe Representation

- Pipe material group assigned **porosity = 1.0** (100% void space)
- A grout/Rock-Pipe material group surrounds the pipe with:
  - Thermal conductivity equal to rock
  - Hydraulic conductivity **1 × 10⁻²⁰ m/s** to prevent leakage (representing the closed-loop wall)
- Heat-bearing fluid assumed to behave as water (Eavor's fluid composition is not public)

### Boundary Conditions

- Inflow: **constant 20 °C** water at one end of the pipe
- Outflow: equal flow rate at the other end
- Three flow rates tested: **0.01 m³/s, 0.05 m³/s, 0.1 m³/s**

**Parameters (Table 5):**

| Property | Value |
|----------|-------|
| Initial domain temperature | 150 °C |
| Inflow temperature to pipe | 20 °C |
| Geothermal heat flux | 0.065 W/m² |
| Pressure head in domain | 100 m |
| Flow rates in pipe | 0.01, 0.05, 0.1 m³/s |
| Pipe diameter | 0.2 m |
| Fluid density | 999.25 kg/m³ |
| Fluid viscosity | 1.1929 × 10⁻³ Pa·s |
| Specific heat capacity of fluid | 4085.9 J |
| Heat conductivity of fluid | 0.59214 W/m·K |
| Rock density | 2300 kg/m³ |
| Specific heat capacity of rock | 2150 J |
| Heat conductivity of rock | 2.618 W/m·K |
| Porosity of rock | 0.2 |
| Hydraulic conductivity of rock | 1 × 10⁻¹⁵ m/s |
| Hydraulic conductivity of grout | 1 × 10⁻²⁰ m/s |
| Heat dispersion tensor | 5.0 m |

---

## 2.8. Model FT — Fixed Temperature

FT is the direct companion to CF with identical geometry and material properties, but using a **polyline boundary condition** setting the pipe at a constant **20 °C** — the same method as SLA and MLA. This allows CF and FT to be directly compared on equal footing.

- 2D unstructured triangular mesh; same node spacing near the pipe as CF

**Parameters (Table 6):** Identical to CF except no pipe flow — constant 20 °C polyline boundary condition replaces the inflow/outflow mechanism. Hydraulic conductivity of grout not applicable (no separate pipe material group).

---

## 2.9. Application of Adjustment Factor

The CF adjustment factor is calculated as:

```
CF_factor = mean_power_CF / mean_power_FT
          = 9991 W / 17,710 W
          ≈ 0.56
```

This factor (0.56) is applied multiplicatively to the SLA and MLA maximum outputs. Rationale: CF models realistic water injection (steadier, lower initial output; slower thermal drawdown); FT models infinite-flux extraction (high initial, rapid decline). The ratio captures how much of the theoretical maximum is realistically extractable.

**Important caveat:** CF and FT are 2D and small-scale, so longitudinal temperature changes along the pipe are not captured. The adjusted outputs remain upper bounds on actual power.

---

## 2.10. Data Output and Manipulation

All models output:
1. **Text file**: total energy (joules) per material group per timestep
2. **Tecplot .tec file**: temperature and head values at all nodes for selected timesteps (visualised in Tecplot)

**Post-processing pipeline:**
1. Python script reads energy text files, extracts time-series data
2. Data imported to Excel
3. Power output (W = J/s) = ΔEnergy between consecutive timesteps ÷ timestep duration in seconds (86,400 s/day)
