---
parent_id: "costache-2017-composite-coiled-tubing-for-extended-rea"
chunk_id: "costache-2017-composite-coiled-tubing-for-extended-rea/04-reach-analysis"
section: "Horizontal Reach Analysis"
order: 4
tags:
  - "engineering/horizontal-reach"
  - "engineering/buckling-analysis"
  - "engineering/friction"
  - "engineering/wellbore-design"
summary: "Reach analysis results comparing CCT vs. steel with parametric sensitivity analysis"
formulas:
  - id: "F4"
    name: "Helical buckling load"
    expr: "F_hel = 2 * (2 * 2^0.5 - 1) * (EI * W_e / r)^0.5"
  - id: "F5"
    name: "Euler buckling with boundary condition"
    expr: "F_e = k * π² * EI / L²"
---

## Horizontal Reach Analysis

### Reach Model Overview

The reach model is based on empirically fitted curves and calculates maximum horizontal section length based on:
- Bending stiffness (EI)
- Submerged weight (We)
- Coefficient of friction (μ)
- Build section radius (R)
- Vertical section height (D)
- Radial wellbore clearance (r)

#### Key Physics

As weight transmits from vertical section through build section, axial load at end of build section (Feoc) must be compared with helical buckling load. When Feoc exceeds Fhel, friction increases exponentially and tubular cannot extend further into horizontal section.

### Results: Zero Bit Weight (No BHA)

#### Steel vs. E-glass/PEI vs. Carbon/PEEK

Comparing standard steel 2.375" CT (μ = 0.2) with CCT configurations in seawater:

**Steel 2.375":** Maximum reach ~9180 ft (2798 m)
- Heaviest system
- Very high bending stiffness prevents early helical buckling
- Reaches further than lighter e-glass/PEI due to stiffness

**E-glass/PEI thin (C1):** Maximum reach ~10,320 ft (3146 m)
- Lower weight and friction offset lower stiffness
- No helical buckling observed
- Superior to steel

**Carbon/PEEK thin (C3):** Maximum reach ~15,800 ft (4816 m)
- Highest bending stiffness
- Lowest weight among CCT variants
- Dramatic improvement over both steel and e-glass/PEI

**Carbon/PEEK thick (C4):** Maximum reach ~14,780 ft (4504 m)
- Slightly less reach than thin variant due to added weight
- Demonstrates weight penalty for extra strength margin

#### Reach Behavior with Depth

Horizontal reach increases sharply at low vertical depths. Above 3000 ft (914.4 m) vertical section:
- Increase slows significantly
- Friction drag accumulates
- Axial compression approaches helical buckling load
- Further depth increases yield minimal reach gain
- Helical buckling marked in red on figures

### Results: With Bottom Hole Assembly (BHA = 500 lbf)

BHA presence dramatically reduces reach due to additional weight that must be pushed.

#### Reach Reduction by Configuration

**E-glass/PEI thin (C1):** 35% reach reduction
- Goes from 10,320 ft to 6662 ft
- Low weight insufficient without bending stiffness

**Carbon/PEEK thin (C3):** 31% reach reduction
- Goes from 15,800 ft to 10,840 ft
- Better stiffness mitigates weight penalty

**E-glass/PEI thick (C2):** 24% reach reduction
- Higher stiffness provides more benefit
- Goes from 7681 ft to 5869 ft

**Carbon/PEEK thick (C4):** 20% reach reduction
- Best performance with BHA
- Goes from 14,780 ft to 11,760 ft

**Steel:** Only 7% reach reduction
- High stiffness dominates BHA impact
- Poor initial reach makes BHA impact less significant

**Key insight:** Low weight alone is insufficient for BHA deployment. Bending stiffness is equally critical.

### Effects of Drilling Fluid Density

Using denser drilling fluid (ρ = 1300 kg/m³) instead of seawater (ρ = 1030 kg/m³):

#### E-glass/PEI Behavior

E-glass configurations show slight reach increase:
- Without BHA: ~9% improvement
- With BHA: ~8% improvement
- Explains by helical buckling and large submerged weight

#### Carbon/PEEK Unexpected Results

**C3 thin variant:** Counterintuitive 22% reach reduction with denser fluid
- Cause: Reduced axial compression force at build section end
- CCT approaches buoyancy with denser fluid
- Lower force transmitted to horizontal section
- Demonstrates importance of stiffness when weight effects are minimized

**Other carbon variants:** More consistent benefits from denser fluid

**Critical finding:** As systems approach buoyancy, axial load transmission becomes limiting factor, not friction.

### Friction Coefficient Sensitivity

#### Baseline: μ = 0.3 and 0.2

Typical steel CT analysis uses μ = 0.3. Hypothetical steel with μ = 0.2 reaches 10,020 ft (3054 m) without BHA and denser fluid.

#### Low Friction: μ = 0.16

Reducing friction by 20% (from 0.2 to 0.16) produces dramatic reach increases:

**Minimum reach increase:** 29% for many configurations
**Maximum reach increase:** 53% for carbon/PEEK thin (C3)
**Most important:** Reach increase larger for all configurations with BHA

Best performers with low friction:
- C3 thin: 21,390 ft (6520 m) without BHA
- C13 thin: 23,470 ft (7155 m) without BHA
- C14 thick: 21,550 ft (6569 m) with BHA

**Key insight:** Friction coefficient has largest single impact on reach capability. Small reductions produce exponential reach gains.

### Parametric Sensitivity Analysis

#### Methodology

Sensitivity evaluated by:
- OD: 1 to 10 (normalized to ODmax)
- We: 1 to 10 (normalized to Wemax)
- EI: 1e8 to 1e9
- Holding non-analyzed parameters at minimum values

#### Sensitivity Slopes (Figure 5)

**Bending stiffness (EI/EImax):** slope = 0.75
- **Most important parameter**
- Nearly linear influence on reach
- 1% increase in normalized EI yields ~0.75% reach increase

**Submerged weight (We/Wemax):** slope = -0.7
- **Closely behind EI in importance**
- Negative slope: lower weight increases reach
- Non-linear at very low normalized values
- Threshold effect: below threshold, reach increases explosively

**Outer diameter (OD/ODmax):** slope = 0.66
- Important but slightly less than We
- Increases both EI and friction characteristics
- Non-linear effects apparent

#### Critical Threshold Effect

**Radial clearance r:** Reach increases steeply after OD/ODmax > 0.7
- Tighter fit prevents helical buckling
- Non-linear benefit from diameter optimization

#### Conclusion from Sensitivity

Slope values are close, but influence types differ:
- EI shows nearly linear influence
- We and OD show non-linearity
- No significant reach extension achieved for steel CT (insufficient stiffness)
- Clearance optimization critical for helical buckling prevention

### Reach Comparison Summary

| Configuration | No BHA (seawater) | With BHA (seawater) | No BHA (mud) | With BHA (mud) | Performance |
|---|---|---|---|---|---|
| C1 E-g/PEI thin | 10,320 | 6,662 | 10,320 | 5,978 | Baseline |
| C2 E-g/PEI thick | 7,681 | 5,869 | 9,166 | 6,562 | Limited |
| C3 C/PEEK thin | 15,800 | 10,840 | 18,320 | 8,401 | Excellent |
| C4 C/PEEK thick | 14,780 | 11,760 | 17,600 | 11,470 | Very Good |
| C11-C14 C/PEEK optimized | 16,590-16,820 | 11,630-12,860 | 18,890-19,040 | 8,966-12,290 | Superior |

**Overall finding:** Carbon/PEEK configurations with optimized layup achieve 180% reach increase over steel CT through superior stiffness-to-weight ratio and reduced friction.
