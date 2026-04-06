---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/05-results-sla-mla"
section: "Results: SLA, MLA, and Adjusted Outputs"
order: 5
tags:
  - "engineering/geothermal"
  - "engineering/numerical-methods"
  - "engineering/power-output"
  - "engineering/thermal-drawdown"
  - "engineering/multilateral-wells"
summary: "Presents power output results for the single lateral array (SLA) and 10-array (MLA) models over 10 years, including the CF-adjusted values, and compares scaled output efficiency between one and ten arrays."
formulas: []
---

# Results: SLA, MLA, and Adjusted Outputs (Sections 3.1, 3.2, 3.7, 3.8)

## 3.1. Model SLA — Single Lateral Array (Q1)

### Power Output Over 10 Years

The SLA model tracks heat extracted from the domain by maintaining the "James Joyce" Eavor-Loop at a constant 20 °C.

| Time | Output (MW_th) |
|------|---------------|
| Day 1 (initial) | 11.9 |
| 1 Year | 8.4 |
| 5 Years | 6.6 |
| 10 Years | 5.8 |
| **10-Year Mean** | **6.9** |

- Initial decline: **3.5 MW_th** in the first year
- Average annual rate of decline: **0.61 MW_th/year**
- Rate of decline slows progressively over the simulation

### Thermal Drawdown Visualisation

Temperature slices through the lower domain show:
- After **1 day**: significant cooling already visible in the immediate pipe vicinity
- After **10 years**: cooled zone extends approximately **15–20 m** from the pipe

---

## 3.2. Model MLA — Multiple Lateral Arrays (Q2)

### Power Output Over 10 Years

The MLA model with 10 stacked lateral arrays:

| Time | Output (MW_th) |
|------|---------------|
| Day 1 (initial) | 58.5 |
| 1 Year | 44.9 |
| 5 Years | 34.7 |
| 10 Years | 29.7 |
| **10-Year Mean** | **36.4** |

- Initial decline: **13.6 MW_th** in the first year
- Average annual rate of decline: **2.88 MW_th/year**
- Thermal drawdown extends approximately **20 m** from the pipe after 10 years
- Increased cooling visible at well junction points (where vertical wells meet lateral arrays)

---

## 3.7. Models SLA & MLA — Single vs. 10 Stacked Arrays (Q2)

### Comparative Output

| Time | SLA Output (MW_th) | MLA Output (MW_th) |
|------|-------------------|-------------------|
| 1 Year | 8.4 | 44.9 |
| 5 Years | 6.6 | 34.7 |
| 10 Years | 5.8 | 29.7 |
| **10-Year Mean** | **6.9** | **36.4** |

- Initial difference: **46.6 MW_th**
- After 10 years difference: **23.9 MW_th**
- Difference between means: **29.5 MW_th**

### Scaling Efficiency Analysis

To isolate lateral array performance:
- Mean output from SLA vertical sections only: **1.7 MW_th**
- Mean MLA output for 10 lateral array sections only: 36.4 − 1.7 = **34.7 MW_th**
- Single array lateral-only output (from SLA): **5.2 MW_th**

```
Scaling factor = 34.7 MW / (10 × 5.2 MW) ≈ 0.67
```

**10 arrays produce only ~6.7× the output of a single array** (not 10×). Each array in the stacked configuration averages **~1.9 MW_th** versus **~2.9 MW_th** for the isolated single-array lateral. The stacked configuration is approximately **66% as efficient** per array as a single isolated array — indicating thermal interference between adjacent arrays.

---

## 3.8. Models SLA & MLA — Adjusted by CF Factor (0.56)

Applying the CF adjustment factor of 0.56 to the maximum outputs:

| Time | Adjusted SLA (MW_th) | Adjusted MLA (MW_th) |
|------|---------------------|---------------------|
| Day 1 (initial) | 6.6 | 32.7 |
| 1 Year | 4.7 | 25.2 |
| 5 Years | 3.7 | 19.4 |
| 10 Years | 3.2 | 16.7 |
| **10-Year Mean** | **3.9** | **20.4** |

### Comparison with Eavor's Claim (3–8 MW per loop)

- Adjusted SLA output begins at **6.6 MW_th** (upper portion of Eavor's range) and declines to **3.2 MW_th** by year 10 (just above lower bound)
- **10-year mean: 3.9 MW_th** — very close to the lower bound of Eavor's 3–8 MW claim
- Eavor's upper bound (8 MW) is **not supported** by this study at 150 °C; higher temperatures (up to Eavor's stated 180 °C) would likely be needed to reach the upper range
