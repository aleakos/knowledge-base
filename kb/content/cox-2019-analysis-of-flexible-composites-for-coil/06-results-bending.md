---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/06-results-bending"
section: "Results - Bending Load Analysis and Spooling"
order: 6
tags:
  - "engineering/composite-materials"
  - "engineering/bending-analysis"
  - "engineering/spooling"
  - "engineering/laminate-stiffness"
summary: "Bending stiffness results, acceptable spooling angles for 1.42 m drum radius, and Young's modulus values for various laminate configurations."
formulas: []
---

## Analysis Set 2: Bending Load Results

The analysis of three tubes with different geometries and six layups under bending loading shows suitable spooling conditions for a 1.42 m drum radius (standard industrial spooling size).

## Young's Modulus and Bending Stiffness

Young's modulus and bending stiffness values vary significantly with laminate architecture:

### Young's Modulus Values

| Layup | E (GPa) | E (GPa) | E (GPa) |
|---|---|---|---|
| | 50.8/39.4 | 60.3/47.5 | 66.7/53.9 |
| **[40/-40]** | 11.5 | 11.5 | 11.5 |
| **[60/-60]** | 8.4 | 8.4 | 8.4 |
| **[70/-70]** | 8.0 | 8.0 | 8.0 |
| **[0/0/60/-60]** | 67.7 | 67.7 | 67.7 |
| **[0/0/85/-85]** | 67.5 | 67.5 | 67.5 |
| **[0/0/55/-55/55/-55]** | 47.3 | 47.3 | 47.3 |
| **[0/0/65/-65/65/-65]** | 46.9 | 46.9 | 46.9 |
| **[55/-55/0/0/55/-55]** | 50.8 | 50.8 | 50.8 |
| **[60/-60/0/0/60/-60]** | 50.6 | 50.6 | 50.6 |
| **[75/-75/0/0/75/-75]** | 50.3 | 50.3 | 50.3 |
| **[60/-60/60/-60/0/0]** | 54.1 | 54.1 | 54.1 |
| **[85/-85/85/-85/0/0]** | 53.9 | 53.9 | 53.9 |
| **[60/-60/0/0]** | 75.7 | 75.7 | 75.7 |
| **[85/-85/0/0]** | 75.5 | 75.5 | 75.5 |
| **[55/-55/10/-10/70/-70]** | 28.3 | 28.3 | 28.3 |

### Bending Stiffness Values (*10³ N/m²)

| Layup | 50.8 mm | 60.3 mm | 66.7 mm |
|---|---|---|---|
| **[40/-40]** | 38.48 | 73.6 | 102.8 |
| **[60/-60]** | 27.9 | 53.5 | 74.7 |
| **[70/-70]** | 26.8 | 51.4 | 71.7 |
| **[0/0/60/-60]** | 225.9 | 433.8 | 609.2 |
| **[0/0/85/-85]** | 225.2 | 432.4 | 607.4 |
| **[0/0/55/-55/55/-55]** | 157.8 | 303.3 | 426.7 |
| **[0/0/65/-65/65/-65]** | 156.5 | 300.7 | 423.0 |
| **[55/-55/0/0/55/-55]** | 169.7 | 324.6 | 453.2 |
| **[60/-60/0/0/60/-60]** | 168.9 | 323.0 | 451.0 |
| **[75/-75/0/0/75/-75]** | 168.0 | 321.4 | 448.8 |
| **[60/-60/60/-60/0/0]** | 180.7 | 344.4 | 477.7 |
| **[85/-85/85/-85/0/0]** | 179.9 | 342.8 | 475.5 |
| **[60/-60/0/0]** | 252.6 | 481.8 | 669.1 |
| **[85/-85/0/0]** | 252.0 | 480.6 | 667.5 |
| **[55/-55/10/-10/70/-70]** | 94.5 | 180.8 | 252.5 |

**Key observations:**
- Bending stiffness increases significantly with pipe diameter (geometric effect)
- Layups with outer 0° layers ([0/0/θ/-θ]) show highest stiffness (~225-610 × 10³ N/m²)
- Pure angle layups ([θ/-θ]) show lowest stiffness (~27-102 × 10³ N/m²)
- Complex layups ([55/-55/10/-10/θ/-θ]) show moderate stiffness (~94-252 × 10³ N/m²)

## Acceptable Spooling Angles (1.42 m Drum Radius)

### Bending Load Only Results

| Layup | 50.8/39.4 | 60.3/47.5 | 66.7/53.9 |
|---|---|---|---|
| **[θ/-θ]** | 38-40° | None | None |
| **[0/0/θ/-θ]** | None | None | None |
| **[0/0/θ/-θ/θ/-θ]** | None | None | None |
| **[θ/-θ/0/0/θ/-θ]** | 55-65° | None | None |
| **[θ/-θ/θ/-θ/0/0]** | 35-65° | 50-65° | None |
| **[θ/-θ/0/0]** | 35-65° | 50-65° | 55-60° |

**Critical findings:**
- Smaller pipes have more favorable bending angle ranges
- Layups with outer angled layers (e.g., [θ/-θ/θ/-θ/0/0]) perform better than layups with outer 0° layers
- Pure angle layups ([θ/-θ]) severely limited (35-40° for smallest pipe only)
- Layups with inner 0° layers ([θ/-θ/0/0]) most versatile for bending

### Combined Bending and Pressure Loading

When bending and pressure loads (60 MPa differential, 10 MPa inner pressure) are combined:

| Layup | 50.8/39.4 | 60.3/47.5 | 66.7/53.9 |
|---|---|---|---|
| **[θ/-θ]** | None | None | None |
| **[0/0/θ/-θ]** | None | None | None |
| **[0/0/θ/-θ/θ/-θ]** | None | None | None |
| **[θ/-θ/0/0/θ/-θ]** | 55° | None | None |
| **[θ/-θ/θ/-θ/0/0]** | 57-65° | 60-65° | None |
| **[θ/-θ/0/0]** | 58-65° | 60-65° | None |

**Critical observation:** Combined bending and pressure loads are very restrictive. Most layups that work for bending alone fail when pressure is added. The [θ/-θ/0/0] and [θ/-θ/θ/-θ/0/0] layups emerge as most capable.

## Complex Laminate Analysis (100 MPa Pressure)

For 100 MPa outer pressure with axial load, more complex laminates are required:

**Layup: [55/-55/10/-10/θ/-θ]**

For spooling on 1.42 m drum:
- **50 MPa OD pressure + axial:** θ = 70-73°
- **100 MPa OD pressure + axial:** θ = 72-75°
- **100 MPa with 10 MPa inner pressure:** θ = 72-75°

**Key insight:** The very limited range of acceptable angles (just 3° variation) indicates tight design constraints for high-pressure applications.

## Stress Distribution Under Bending

### Stress Components

For pipes under bending loading, three primary stress components were analyzed:

1. **Longitudinal stress:** Dominant stress component, varies across pipe diameter
2. **Transverse (circumferential) stress:** Secondary component, peaks at mid-wall
3. **Shear stress:** Develops from bending deformation

### Typical Stress Patterns

**[55/-55/0/0/55/-55] layup (50.8/39.4 pipe):**
- Longitudinal stress: Sinusoidal variation around circumference, peaks on compression side
- Transverse stress: More complex distribution, includes hoop effects
- Shear stress: Periodic pattern with magnitude ~10⁷ Pa

**[60/-60/60/-60/0/0] layup (50.8/39.4 pipe):**
- Higher stress magnitudes than [55/-55/0/0/55/-55]
- More pronounced peaks indicating localized stress concentrations
- Shear stress distribution more uniform

## Comparison: Bending vs. Pressure vs. Combined

### Design Envelope Summary

**Bending dominates acceptable angles:**
- Pure bending: angles toward 35-65° (lower stiffness, more flexible)
- Pure pressure: angles toward 70-90° (higher stiffness, hoop-dominated)
- Combined: very narrow acceptable windows, often 55-65°

**Stiffness-flexibility trade-off:**
- Lower angles (35-40°): high flexibility for spooling, low stiffness, inadequate for pressure
- Medium angles (55-65°): balanced performance for combined loading
- High angles (70-90°): high stiffness, good pressure resistance, poor bending performance

### Path to 100 MPa Operation

To achieve 100 MPa operation with 1.42 m spooling radius requires:
- Complex five-orientation laminates ([55/-55/10/-10/θ/-θ])
- Narrow fiber angle windows (±2-3°)
- Significantly higher stiffness requirements
- Potential for further optimization to relax constraints
