---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/05-material-property-testing"
section: "Experimental Determination of Elastic Properties of Filament-Wound GRP"
order: 5
tags:
  - "engineering/composite-materials"
  - "engineering/material-testing"
  - "engineering/experimental-mechanics"
summary: "Test methods for characterising elastic properties of filament-wound glass-reinforced polyester resin, including pinched ring, split disc, axial compression, and open-ended pressure tests"
formulas:
  - id: "F1"
    name: "Halpin-Tsai equation for transverse modulus"
    expr: "E2 = Em * (1 + xi*eta*Vf)/(1 - eta*Vf); eta = (Ef/Em - 1)/(Ef/Em + xi)"
---

## Experimental Determination of Elastic Properties

### Overview of Tests Performed

Four types of mechanical test were used to characterise the elastic properties of filament-wound glass/polyester tubes:

1. **Pinched ring test** — measures flexural and in-plane properties
2. **Roller-assisted split disc test** — measures hoop tensile modulus and Poisson's ratio
3. **Axial compression test** — measures axial compressive modulus
4. **Open-ended pressure test** — measures hoop and axial strains under internal pressure

### Pinched Ring Test

A ring cut from the filament-wound tube is loaded diametrically (pinched). The diametral deflection is related to the material properties through orthotropic ring theory. Both the meridional flexural rigidity and the effective moduli in the circumferential and axial directions can be extracted.

**Theory**: Based on orthotropic extension of ring-deflection equations, accounting for shear deformation and the effect of curvature on flexural rigidity. The transverse diametral deflection per unit load is:

```
delta/W = WR^3/(2*FR) * (2/pi - 1) + corrections for shear and axial compression
```

### Roller-Assisted Split Disc Test

A modified split-disc method uses rollers to load the disc uniformly around its circumference, reducing stress concentrations from the loading pins. This measures the hoop tensile modulus E_theta and Poisson's ratio nu_theta-z.

### Axial Compression Test

Specimens loaded axially in compression to measure axial compressive modulus. Results compared with axial tensile values from other tests.

### Open-Ended Pressure Test

Specimens subjected to internal pressure without end caps (so hoop stress only). Hoop and axial strains measured by strain gauges to determine:
- Hoop modulus E_theta
- Poisson's ratio nu_theta-x

### Halpin-Tsai Equations for Property Prediction

Theoretical predictions of composite properties used for comparison:

```
E2 = Em * (1 + xi * eta * Vf) / (1 - eta * Vf)
eta = (Ef/Em - 1) / (Ef/Em + xi)
```

where Vf = fibre volume fraction, xi = reinforcement geometry factor (≈2 for transverse modulus).

### Measured Unidirectional Properties

Nominal values used for sensitivity analysis:
| Property | Value |
|----------|-------|
| E1 (fibre direction) | 50,000 MN/m² |
| E2 (transverse) | 10,000 MN/m² |
| G12 (shear) | 5,000 MN/m² |
| v12 (Poisson) | 0.3 |

E-glass fibre properties: E_f = 73,000 MN/m², polyester matrix: E_m = 3,500 MN/m².

### Key Findings

- Results showed considerable scatter and inconsistency between test methods
- Difficulties attributed to: specimen quality issues, inadequacies in the orthotropic model, and material damage during testing
- A technique was developed to fit unidirectional properties to observed laminate behaviour by back-calculation
- Fitted properties (though sometimes physically unrealistic) gave excellent prediction of component stiffness
- More well-behaved matrix materials (e.g., epoxy resin) are recommended for future projects
