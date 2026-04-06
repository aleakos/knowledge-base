---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/07-deviated-well-example"
section: "Applications - Buoyancy in Deviated Well"
order: 7
tags:
  - "engineering/drilling"
  - "engineering/well-design"
  - "engineering/buoyancy"
summary: "Worked example calculating static hook load in a deviated well with 1.5 s.g. mud and 7.8 s.g. steel pipe."
formulas:
  - id: "EX1"
    name: "Buoyancy factor calculation"
    expr: "β = 1 - 1.5/7.8 = 0.81"
  - id: "EX2"
    name: "Static hook load in deviated well"
    expr: "W = 0.81 × [0.294 kN/m × 2000 m + 2.13 kN/m × 100 m] = 649 kN"
---

# Example Calculation: Buoyancy in Deviated Well

## Well Configuration

Table 2 defines the well path for a deviated well and Table 3 describes how the drill string is composed. The well is filled with a 1.5 s.g. drilling fluid. The pipe material is steel with a density of 7.8 s.g.

### Well Path Data

| Position | Depth mTVD | Depth mMD | Inclination (°) | Radius (m) |
|----------|-----------|-----------|-----------------|-----------|
| Kick-off depth | 1000 | 1000 | 0 | - |
| End build-up | 1433 | 1524 | 0-60 | 500 |
| Top drill collars | 2000 | 2658 | 60 | - |
| Drill bit | 2100 | 2858 | 60 | - |

### Drill String Data

| Tubular | Unit weight (kN/m) | Total length (m) | Total weight (kN) |
|---------|-------------------|-----------------|------------------|
| 5 x 4 in drill string | 0.294 | 2658 | 781 |
| 8 x 3 in drill collars | 2.13 | 200 | 426 |
| **Total weight** | - | - | **1207** |

## Calculation

### Step 1: Calculate Buoyancy Factor

```
β = 1 - ρ_fluid / ρ_pipe
β = 1 - 1.5 / 7.8 = 0.81
```

### Step 2: Apply Projected Height Principle

Using the projected vertical height concept, the static hook load is:

```
W = β × [w_drill_pipe × L_TVD_dp + w_drill_collars × L_TVD_dc]
W = 0.81 × [0.294 kN/m × 2000 m + 2.13 kN/m × 100 m]
W = 0.81 × 801 kN
W = 649 kN
```

## Results and Interpretation

The static hook load is **649 kN**, which represents the effective weight at the surface accounting for buoyancy effects. This is significantly less than the in-air weight of 1207 kN due to the 0.81 buoyancy factor.

The projected height principle correctly accounts for the deviation by using the vertical depth projection (TVD) rather than measured depth (MD), ensuring that only the vertically-acting component of weight is considered for axial loading.
