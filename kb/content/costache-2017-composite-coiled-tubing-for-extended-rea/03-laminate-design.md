---
parent_id: "costache-2017-composite-coiled-tubing-for-extended-rea"
chunk_id: "costache-2017-composite-coiled-tubing-for-extended-rea/03-laminate-design"
section: "Laminate Selection and Design"
order: 3
tags:
  - "engineering/laminate-design"
  - "engineering/burst-pressure"
  - "engineering/collapse-pressure"
  - "engineering/composite-layup"
summary: "Functional requirements, burst/collapse calculations, and layup optimization for composite coiled tubing"
formulas:
  - id: "F1"
    name: "Thick-walled tubing burst stress"
    expr: "σ_b = P_b * (OD² + ID²) / (OD² - ID²)"
  - id: "F2"
    name: "Thick-walled tubing collapse stress"
    expr: "σ_c = -2 * P_c * OD² / (OD² - ID²)"
  - id: "F3"
    name: "Euler buckling formula"
    expr: "F_e = k * π² * EI / L²"
---

## Laminate Selection and Design

### Functional Requirements

The composite coiled tubing was designed with the following specifications:

- **Maximum outer diameter (OD):** 60 mm
- **Minimum inner diameter (ID):** 25 mm
- **Collapse pressure (Pc):** 20.7 MPa
- **Burst pressure (Pb):** 45 MPa

#### Baseline Strength Data

**Unidirectional carbon/epoxy:**
- Compression strength: 800-1250 MPa
- Tensile strength: 1500 MPa

**Unidirectional e-glass/epoxy:**
- Tensile strength: 1000 MPa
- Compression strength: 600 MPa

**UD tapes in epoxy:**
- Compression strength (σc): 450 MPa

### Burst and Collapse Calculation

The calculation assumes only the innermost layer carries stress, introducing a large safety margin since other layers contribute to load capacity.

#### Design Approach

Since bending stiffness increases rapidly with outer diameter, ODmax = 60 mm was selected, reducing the number of cases to address. Using IDmin = 25 mm yields a maximum wall thickness of 17.5 mm.

Reducing wall thickness by factor 0.5 to 8.75 mm results in larger ID = 42.5 mm.

#### Thick-Walled Tubing Formulas

For thick-walled cylinders:

```
σ_b = P_b * (OD² + ID²) / (OD² - ID²)

σ_c = -2 * P_c * OD² / (OD² - ID²)
```

#### Calculated Wall Thicknesses

| ID [mm] | tc [mm] | tg [mm] | Case |
|---------|---------|---------|------|
| 25 | 0.383 | 0.577 | burst |
| | 0.34 | 0.62 | collapse |
| 42.5 | 0.647 | 0.98 | burst |
| | 0.572 | 1.05 | collapse |

Where:
- tc = circumferential (hoop) layer thickness
- tg = glass reinforced layer thickness

**Design rule:** The circumferential layer thickness takes the largest value for each inner diameter to satisfy both burst and collapse cases.

### Layup Selection

#### Laminate Configurations

14 different combinations were evaluated based on:
- Two inner diameters (25 mm and 42.5 mm)
- Two material systems (E-glass/PEI and Carbon/PEEK)
- Variable wall thicknesses

#### Stress Minimization Strategies

Studies on hard rock drilling CCT systems revealed several optimization approaches:

1. **Increase number of layers:** Optimal at ~18 layers (vs. 9 baseline)
2. **Consecutive angle arrangement:** [±10, ±30...] layup decreases through-laminate stresses
3. **Balanced layup:** [±10, ±30]n patterns improve compression performance

#### Configuration Summary

**Cases C1-C4:** Baseline configurations with 9 layers
- C1: E-glass/PEI, thin wall, ID = 42.5 mm
- C2: E-glass/PEI, thick wall, ID = 25 mm
- C3: Carbon/PEEK, thin wall, ID = 42.5 mm
- C4: Carbon/PEEK, thick wall, ID = 25 mm

**Cases C5-C6:** Hybrid configurations
- Inner carbon/PEEK tube encased in outer e-glass/PEI
- Two thickness variants

**Cases C7-C14:** Optimized layup angles
- [10, -30]₉: 9 layers with optimized angles
- [±10, ±30]₄±10: 18 total layers with balanced ± pattern

### Reach Analysis Parameters

For each laminate configuration, key parameters were calculated:

#### Material Densities (Vf = 0.5)

- E-glass/PEI laminate: 1910 kg/m³
- Carbon/PEEK laminate: 1560 kg/m³

#### Submerged Weight Calculation

Submerged weight (We) accounts for tubular surrounded by liquid:
- Seawater density: 1030 kg/m³
- Dense drilling mud: 1300 kg/m³

#### Bending Stiffness

Calculated using longitudinal laminate modulus E₁ from Classical Laminate Theory.

#### Reach Model Parameters

Additional reach analysis inputs:
- Coefficient of friction (μ) between wellbore and tubular
- Build section radius (R)
- Vertical section height (D)
- Radial clearance between wellbore and tubular (r)

#### Helical Buckling Criterion

As weight is transmitted from vertical through build section, the axial load at end of build section (Feoc) is compared with helical buckling load:

```
F_hel = 2 * (2 * 2^0.5 - 1) * (EI * W_e / r)^0.5
```

**Critical condition:** If Feoc > Fhel, friction increases exponentially and tubular cannot be pushed further in horizontal section.

### Design Trade-offs

The laminate design balances competing requirements:

1. **Burst/collapse:** Requires sufficient wall thickness
2. **Weight:** Lower weight improves reach
3. **Bending stiffness:** Higher stiffness prevents helical buckling
4. **Layer number:** More layers increase stiffness but add weight
5. **Layup angle:** Optimization reduces interlaminar stresses

Carbon/PEEK systems offer superior stiffness-to-weight ratios compared to E-glass/PEI, enabling greater horizontal reach.
