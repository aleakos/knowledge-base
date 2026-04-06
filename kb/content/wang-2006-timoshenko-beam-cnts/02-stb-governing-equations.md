---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/02-stb-governing-equations"
section: "Single-Timoshenko Beam (STB) Model - Basic Equations"
order: 2
tags:
  - "engineering/beam-theory/timoshenko"
  - "engineering/governing-equations"
  - "engineering/vibration-analysis"
summary: "Governing differential equations for Timoshenko beam vibration including transverse shear deformation and rotary inertia effects"
formulas:
  - id: "F1"
    name: "Timoshenko beam equilibrium equation 1"
    expr: "ρAω²w - KGA(dφ/dx - d²w/dx²) = 0"
  - id: "F2"
    name: "Timoshenko beam equilibrium equation 2"
    expr: "EI(d²φ/dx²) - KGA(φ - dw/dx) + ρIω²φ = 0"
---

## Governing Equations for Timoshenko Beam

The governing equations for a vibrating Timoshenko beam are:

```
ρAω²w - KGA(dφ/dx - d²w/dx²) = 0                                    (1a)

EI(d²φ/dx²) - KGA(φ - dw/dx) + ρIω²φ = 0                           (1b)
```

### Notation and Parameters

| Symbol | Definition |
|--------|-----------|
| w | Transverse displacement |
| φ | Slope of the beam due to bending deformation alone |
| x | Axial coordinate |
| I | Second moment of area of cross-section |
| A | Cross-sectional area |
| ρ | Mass density per unit volume |
| K | Shear correction factor |
| E | Young's modulus |
| G | Shear modulus |
| ω | Circular frequency of the beam |

### Key Differences from Euler Beam

Unlike the Euler beam model which assumes:
- Plane sections remain perpendicular to the neutral axis
- No transverse shear deformation
- No rotary inertia

The Timoshenko beam model accounts for:
- **Transverse shear deformation**: φ ≠ dw/dx (slope ≠ deflection gradient)
- **Rotary inertia**: The term ρIω²φ in equation (1b)

These effects become significant for stocky beams (small L/d ratios) and high vibration modes.

### Analytical Solutions

Analytical solutions for equation (1) with various boundary conditions are available in the literature. These will be used to verify results obtained by the differential quadrature method.
