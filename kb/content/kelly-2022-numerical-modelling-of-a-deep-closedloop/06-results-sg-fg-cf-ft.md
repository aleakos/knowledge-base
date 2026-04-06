---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/06-results-sg-fg-cf-ft"
section: "Results: Groundwater and Controlled Flow Models"
order: 6
tags:
  - "engineering/geothermal"
  - "engineering/groundwater-flow"
  - "engineering/power-output"
  - "engineering/thermal-drawdown"
  - "engineering/heat-transport"
summary: "Presents power output results for static vs. flowing groundwater (SG/FG) and controlled flow vs. fixed temperature (CF/FT) models, deriving the CF adjustment factor of 0.56 used to calibrate maximum outputs."
formulas: []
---

# Results: Groundwater and Controlled Flow Models (Sections 3.3–3.6)

## 3.3. Models SG & FG — Static vs. Flowing Groundwater (Q3)

### Power Output Over 10 Years

Both models use a single flattened lateral array at 5000 m depth with initial domain temperature of 150 °C.

| Time | SG Output (MW_th) | FG Output (MW_th) |
|------|------------------|--------------------|
| Day 1 (initial) | 6.0 | 7.9 |
| 1 Year | 3.8 | 4.8 |
| 5 Years | 2.9 | 3.6 |
| 10 Years | 2.5 | 3.2 |
| **10-Year Mean** | **3.1** | **3.9** |

- Average annual decline: **0.35 MW_th/year** (SG), **0.47 MW_th/year** (FG)
- Initial difference: **1.9 MW_th**; after 10 years: **0.7 MW_th**
- FG mean is **0.8 MW_th** higher than SG mean = **26% higher average wattage** with flowing groundwater (K = 1 × 10⁻⁶ m/s, hydraulic gradient = 0.035)
- When the same FG model was run with K = 1 × 10⁻⁹ m/s, there was **almost no difference** from SG — indicating a K threshold below which groundwater flow is negligible

### Thermal Distribution

- **SG**: symmetric thermal drawdown expanding to ~15 m from pipe after 10 years; increased cooling at junction points
- **FG**: similar spatial temperature maps to SG after 10 years, but total energy loss is higher (groundwater advects heat toward the pipes, replenishing the cooled zone)
- Hydraulic head gradient (100 m → 50 m across domain) clearly visible in FG visualisations; thermal plume is asymmetric in the flow direction

---

## 3.4. Model CF — Controlled Flow (Q4)

### Power Output at 0.1 m³/s Over 10 Years

20 m pipe section with water injected at 20 °C and extracted at equal flow rate:

| Time | Output (W_th) |
|------|--------------|
| Day 1 (initial) | 29,786 |
| 1 Year | 19,332 |
| 5 Years | 8,297 |
| 10 Years | 2,853 |
| **10-Year Mean** | **9,991** |

- Average annual decline: **2,693 W/year**
- Thermal drawdown extends ~5 m from pipe after 1 year (more compact than FT)
- Cooling appears **symmetrical** around the pipe; geothermal basal flux has no visible effect at this scale

### Effect of Flow Rate

Three flow rates compared for mean output over 10 years:

| Flow rate (m³/s) | Mean output (W_th) |
|------------------|--------------------|
| 0.01 | 9,986.59 |
| 0.05 | 9,990.72 |
| 0.1 | 9,991.24 |

- Increase per 0.01 m³/s: **~0.465 W** (~0.1% increase per 0.01 m³/s step)
- This negligible difference reflects the small 20 m pipe length — at this scale the entire pipe stays near 20 °C regardless of flow rate; in a full-length pipe, flow rate effects would be much larger

### Hydraulic Head Distribution

A very high pressure peak at the inflow point decreases along the pipe to a nadir at the outflow; the rest of the domain remains at constant 100 m head. This pressure regime persists throughout the simulation.

---

## 3.5. Model FT — Fixed Temperature

20 m pipe set at constant 20 °C:

| Time | Output (W_th) |
|------|--------------|
| Day 1 (initial) | 395,004 |
| 1 Year | 44,042 |
| 5 Years | 8,233 |
| 10 Years | 1,051 |
| **10-Year Mean** | **17,710** |

- Sharp initial decline: **350,962 W** in first year
- Average annual decline: **39,395 W/year**
- Cooled region reaches ~15 m from pipe after 1 year; by 10 years it extends to the top and bottom edges of the 10 m domain
- Cooling symmetrical around pipe; no visible basal flux effect

---

## 3.6. CF vs. FT — Controlled Flow vs. Fixed Temperature

### Comparison

| Time | CF Output (W_th) | FT Output (W_th) |
|------|-----------------|-----------------|
| 1 Year | 19,332 | 44,042 |
| 5 Years | 8,297 | 8,233 |
| 10 Years | 2,853 | 1,051 |
| **10-Year Mean** | **9,991** | **17,710** |

Key observations:
- FT starts **365,218 W higher** than CF at day 1 but depletes energy quickly
- Around **year 5**, FT output drops below CF output — FT has exhausted much of the nearby thermal energy
- After 10 years, CF output is **1,802 W greater** than FT
- **Mean CF output is 56% of mean FT output**

### CF Adjustment Factor

```
CF_adjustment_factor = 9,991 W / 17,710 W ≈ 0.56
```

This factor is applied to SLA and MLA maximum outputs to obtain more realistic power estimates. The CF method is physically superior (models real fluid flow) but its small scale means longitudinal temperature gradients are absent; adjusted outputs remain upper bounds.
