---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/04-material-loads-analysis"
section: "Material Properties and Load Definition"
order: 4
tags:
  - "engineering/composite-materials"
  - "engineering/material-properties"
  - "engineering/coiled-tubing"
summary: "Material properties of carbon-epoxy composite and steel, applied pressure loads, pipe geometries, and axial load assumptions for thick-walled composite pipe analysis."
formulas: []
---

## Material Properties

Numerical analyses assumed filament wound pipes composed of carbon/epoxy composite **T300/LY5052**. Material properties are compared with steel properties below:

### T300/LY5052 Carbon/Epoxy Composite
- **E₁ (Longitudinal modulus):** 135 GPa
- **E₂ (Transverse modulus):** 8.0 GPa
- **G₁₂ (Shear modulus):** 3.8 GPa
- **ν₁₂ (Poisson's ratio):** 0.27
- **ν₂₃ (Poisson's ratio):** 0.49
- **X_T (Longitudinal tensile strength):** 1860 MPa
- **Y_T (Transverse tensile strength):** 76 MPa
- **X_C (Longitudinal compressive strength):** 1470 MPa
- **Y_C (Transverse compressive strength):** 85 MPa
- **S (Shear strength):** 98 MPa

### Steel (Standard Coiled Tubing Material)
- **E (Young's modulus):** 205 GPa (isotropic)
- **G (Shear modulus):** 77 GPa
- **ν (Poisson's ratio):** 0.33
- **Tensile/Compressive strength:** 483 MPa
- **Shear strength:** 290 MPa

## Applied Pressure Loads

Internal and external pressures with differences from 60 to 100 MPa are common in the industry. Two pressure regimes were analyzed:

### Pressure Load Cases

| Pressure Difference | Inner Pressure (IP) | Outer Pressure (OP) |
|---|---|---|
| ΔP = 60 MPa | IP = 0 | OP = 60 |
| | IP = 10 | OP = 70 |
| ΔP = 100 MPa | IP = 0 | OP = 100 |
| | IP = 10 | OP = 110 |

All cases resulted in net outer pressure loading conditions.

## Composite Pipe Geometries

Three pipe sizes were analyzed to better match common coiled tubing strings:

| Outer Diameter (mm) | Inner Diameter (mm) | Wall Thickness (mm) |
|---|---|---|
| 50.8 | 39.4 | 5.7 |
| 60.3 | 47.5 | 6.4 |
| 66.7 | 53.9 | 6.4 |

These outer diameters (50.8 to 66.7 mm) represent typical coiled tubing dimensions.

## Axial Load Definition

A simplified approach was taken for axial loading. The composite tubes were required to withstand **1000 m of freely-hanging length** with:

- **No support** from wall friction
- **No support** from slanted/horizontal well shapes
- **No buoyancy** effects
- **No influence** from internal fluid weight
- **No influence** from tool weight
- **No dynamic** deployment/retraction loads

This represents a conservative design scenario. More complex analyses considering wall friction, fluid friction, axial compression, and buckling are available in referenced literature on deployed coiled tubing systems.

## Laminate Layups Analyzed

Six layup configurations were studied for each pipe geometry to determine how the position of 0° layers influences pipe strength:

1. **[θ/-θ]** - Simple symmetric angled plies
2. **[0/0/θ/-θ]** - Axial layers outer, angled inner
3. **[0/0/θ/-θ/θ/-θ]** - Multiple angled layers with outer axial
4. **[θ/-θ/0/0/θ/-θ]** - Angled outer, axial middle, angled inner
5. **[θ/-θ/θ/-θ/0/0]** - Angled outer, axial inner
6. **[θ/-θ/0/0]** - Simple angled with axial core

The angle θ varies from 0° to 90° relative to the longitudinal pipe axis, with emphasis on ranges 35°-90° for pressure/axial loads and 35°-65° for bending loads.

## Analysis Sets

### Analysis Set 1: Pressure and Axial Load (Operational Conditions)

- All six layups analyzed
- Each pipe size examined
- Pressure differences of 60 and 100 MPa
- Inner pressures of 0 and 10 MPa
- Combined with 1000 m axial load
- Failure coefficients calculated through wall thickness

### Analysis Set 2: Bending Load (Spooling Conditions)

- Three pipes of different geometries
- Six layups for each pipe
- Bending radius requirement: **1.42 m** (standard spooling size)
- Young's modulus and bending stiffness calculated
- Acceptable spooling angles determined

### Analysis Set 3: Complex Laminate

- Laminate: **[55/-55/10/-10/θ/-θ]**
- 50.8/39.4 mm (OD/ID) pipe
- 100 MPa outer pressure with axial load
- Longitudinal, transverse, and shear stresses generated for bending case
- Comprehensive stress field analysis

## Design Requirements Summary

Composite tubes must simultaneously satisfy:
1. **Pressure resistance** (60-100 MPa differential)
2. **Axial load resistance** (1000 m freely-hanging)
3. **Bending flexibility** (1.42 m spool radius)
4. **Material compatibility** (carbon fiber-epoxy T300/LY5052)
5. **Comparable performance** to equivalent steel geometries

These competing requirements drive the need for advanced laminate designs with multiple fiber orientations.
