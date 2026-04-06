---
parent_id: "costache-2017-composite-coiled-tubing-for-extended-rea"
chunk_id: "costache-2017-composite-coiled-tubing-for-extended-rea/05-finite-element-analysis"
section: "Finite Element Analysis and Buckling"
order: 5
tags:
  - "engineering/finite-element-analysis"
  - "engineering/buckling-modes"
  - "engineering/composite-stress"
  - "engineering/interlaminar-stress"
summary: "FEA methodology for buckling analysis, eigenvalue results, and stress/strain distributions"
formulas:
  - id: "F6"
    name: "Euler buckling with boundary conditions"
    expr: "F_e = k * π² * EI / L²"
---

## Finite Element Analysis and Buckling

### FEA Model Development

A parametric finite element model was built in ANSYS for buckling analysis and stress calculation. This approach provides information unavailable through Classical Laminate Theory and plate models.

#### Model Geometry and Element Selection

**Coordinate system:** Aligned with cylinder
- x-axis: longitudinal direction
- y,z-axes: radial/circumferential directions
- z-axis: through-thickness orientation

**Element type:** Solid shell element (SOLSH190)
- 8 nodes per element
- 3 degrees of freedom per node (x, y, z translations)
- Single element through thickness
- Shell section defines all layers with:
  - Layer orientation
  - Individual thickness
  - Material properties per layer

#### Boundary Conditions

Critical for accurate modeling of:
- Loading conditions of CCT in wellbore
- Actual bending stiffness calculation

**Applied approach:** Encastre and follower load conditions
- 1 m long section modeled
- One end: fully constrained (encastre)
- Other end: load applied at cylinder center with follower condition
- Allows calculation of actual composite pipe bending stiffness

**Validation against Euler formula:**

```
F_e = k * π² * EI / L²
```

With k = 0.25 in this boundary condition setup.

The back-calculated EI value is compared with the value from helical buckling equation (Eq. 2). This validation ensures model accuracy for reach predictions.

### Buckling Mode Analysis

FEA buckling mode analysis calculates most important buckling modes for composite CCT—essential for laminate composites where stiffness matrix is more complex than isotropic cases.

#### Analysis Types

**Linear buckling:** Eigenvalue analysis provides bifurcation loads (theoretical buckling loads in ideal conditions)

**Nonlinear buckling:** 
- Uses small initial deformation perturbation
- Initiates with 10% of first mode shape
- Provides realistic buckling loads accounting for imperfections
- Enables stress analysis in buckled state

#### Buckling Modes

Three primary modes identified:

**Mode 1:** Lateral deflection (unconstrained free end)
- Initial deformation type
- Lowest buckling load

**Mode 2:** Increased bending toward free end
- Progressive deformation development

**Mode 3:** Sinusoidal buckling along length
- Classic column buckling pattern
- Highest buckling load of first three modes

#### Load Progression Between Modes

Between BL1 and BL2: **749% to 784% increase**
Between BL2 and BL3: **148% to 164% increase**

Consistent progression across all configurations.

### Eigenvalue Buckling Results

#### Buckling Load Values (BL#)

| Case | BL1 [kN] | BL2 [kN] | BL3 [kN] | Material | Wall Thickness |
|------|----------|----------|----------|----------|-----------------|
| C1 | 27.8 | 241.9 | 632.1 | E-g/PEI | Thin |
| C2 | 35.2 | 310.3 | 783.8 | E-g/PEI | Thick |
| C3 | 69.7 | 603.5 | 1556.6 | C/PEEK | Thin |
| C4 | 85.4 | 751.3 | 1386.6 | C/PEEK | Thick |
| C5 | 34.6 | 301.5 | 789.3 | Hybrid | Thin |
| C6 | 40.2 | 355.4 | 758.8 | Hybrid | Thick |
| C7 | 32.6 | 281.6 | 724.8 | E-g/PEI | [10,-30]₉ |
| C8 | 41.9 | 367.9 | 973.5 | E-g/PEI | [10,-30]₉ thick |
| C9 | 33.0 | 285.5 | 737.5 | E-g/PEI | [±10,±30] |
| C10 | 42.4 | 372.3 | 987.5 | E-g/PEI | [±10,±30] thick |
| C11 | 81.8 | 695.0 | 1726.0 | C/PEEK | [10,-30]₉ |
| C12 | 104.7 | 908.0 | 2351.2 | C/PEEK | [10,-30]₉ thick |
| C13 | 82.3 | 710.3 | 1814.2 | C/PEEK | [±10,±30] |
| C14 | 105.3 | 922.6 | 2432.8 | C/PEEK | [±10,±30] thick |

#### Key Observations

**Material comparison:** All carbon/PEEK variants show significantly higher buckling loads than e-glass/PEI.

**Wall thickness effect:** Thicker walls produce highest buckling loads, though C4 (thick carbon) shows BL3 lower than thin variant C3.

**Layup optimization impact:**
- C9, C10, C13, C14 with [±10, ±30] balanced layup perform best
- 17% increase in BL1 between C1 and C7
- 19% increase between C1 and C9
- Same pattern for carbon variants: C3 vs. C11 and C13

**Hybrid layup limitation:** C5 and C6 show no advantage over pure e-glass/PEI, with C6 producing lower BL3 despite thicker walls.

**Critical insight:** More layers plus balanced ± layup gives highest buckling load. Doubling layer number significantly increases axial stiffness.

### Bending Stiffness Validation

#### EI Comparison: FEA vs. Classical Laminate Theory

**Metric:** Difference between EI from first buckling load (EIBL1) and EI from reach analysis (EIra)

| Configuration | ΔEIBL1 [%] | Material Type | Finding |
|---|---|---|---|
| C1-C4 | ~0.02-0.07 | Pure composites | Excellent agreement |
| C5 | -0.23 | Hybrid | 23% higher by FEA |
| C6 | -0.10 | Hybrid | 10% higher by FEA |
| C7-C14 | ~0.03-0.10 | Pure composites | Good agreement |

#### Critical Finding for Hybrid Composites

**Pure composite laminates:** Small differences (max 0.10%) between FEA and CLT
- Reach analysis results are reliable
- EI from CLT acceptable for reach model
- FEA not absolutely necessary but offers maximum accuracy

**Hybrid carbon/e-glass laminates:** 
- C5: EIBL1 is 23% larger than EIra
- C6: Difference is 10%
- FEA model is absolutely necessary for accurate hybrid analysis
- CLT significantly underpredicts hybrid stiffness
- Explains poor performance of hybrid configurations

**Recommendation:** For hybrid laminates, use FEA-calculated stiffness values.

### Stresses and Strains Due to Buckling

#### Analysis Approach

Expanded FEA model used for detailed stress analysis:

1. Calculate eigenvalue buckling loads and shapes
2. Update model geometry with perturbation equal to 10% of first mode shape
3. Perform nonlinear analysis using first buckling load
4. Extract stresses and strains from deformed configuration

#### Axial Stress Distribution (C14 Case Study)

**Deformation behavior:** As CCT deforms under buckling load:
- One side experiences tension
- Opposite side experiences compression
- Stresses vary gradually through thickness

#### Comparative Analysis: C13 vs. C14

Buckling stresses for innermost and outermost layers compared for thin (C13) and thick (C14) variants.

**Tension side:**
- C13 maximum tensile stress: 37.19 MPa (50% higher than C14)
- C14 maximum tensile stress: 19.06 MPa
- C13 stress reversal: -42.63 MPa compression (60% higher than C14)

**Inner surface tension side:**
- C13 inner surface: Starts in tension, reaches -88.43 MPa at load application point
- C14 inner surface: Remains in compression throughout

**Compression side:**
- Little difference between C13 and C14 outer surface
- Dramatic difference on inner surface

**C13 inner surface compression:** Maximum -188.7 MPa
**C14 inner surface compression:** Only -106.8 MPa

**Critical insight:** Thin-walled CCT experiences huge compressive stress on inside (~77% higher than thick variant). This stress concentration may limit cycle lifetime and fatigue resistance.

#### Stress Reduction Benefits of Thicker Walls

Thicker walls provide:
1. Reduced tensile stresses (48% reduction: 37.19 → 19.06 MPa)
2. Reduced inner surface compression stresses (43% reduction: -188.7 → -106.8 MPa)
3. Better cycle lifetime and fatigue resistance
4. Trade-off: Increased weight reduces horizontal reach (20% in C4 vs. C3)

#### Design Implications

Thickness selection requires balancing:
- **Reach objective:** Favor thin walls (lower weight)
- **Fatigue/durability objective:** Favor thick walls (lower stresses)
- **Operational environment:** High-cycle operations require thicker walls

Thin walls (C3) achieve maximum reach (15,800 ft). Thick walls (C4) sacrifice 5% reach but provide 48% stress reduction for improved longevity.
