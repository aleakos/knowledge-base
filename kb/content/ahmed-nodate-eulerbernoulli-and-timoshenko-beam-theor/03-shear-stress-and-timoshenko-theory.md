---
parent_id: "ahmed-nodate-eulerbernoulli-and-timoshenko-beam-theor"
chunk_id: "ahmed-nodate-eulerbernoulli-and-timoshenko-beam-theor/03-shear-stress-and-timoshenko-theory"
section: "Shearing Stresses and Timoshenko Beam Theory"
order: 3
tags:
  - "engineering/shear-stress"
  - "engineering/timoshenko-theory"
  - "engineering/shear-deformation"
summary: "Analysis of shear stress distribution and Timoshenko beam theory accounting for shear effects"
formulas:
  - id: "F1"
    name: "Actual shear stress parabolic distribution"
    expr: "τ_xz = (V/(2I))(t²/4 - z²) = (6V)/(At²)(t²/4 - z²)"
  - id: "F2"
    name: "Maximum shear stress"
    expr: "max τ_xz = (3V)/(2bt) = (3/2)τ_xz^av"
  - id: "F3"
    name: "Shear strain relation"
    expr: "γ_xz = max τ_xz^ac/G = τ_xz^av/(2/3·G)"
  - id: "F4"
    name: "General shear strain"
    expr: "γ_xz = V/(K_s G A)"
  - id: "F5"
    name: "Bending moment-rotation"
    expr: "M(x) = -EI(dφ(x)/dx)"
  - id: "F6"
    name: "Shear force-curvature"
    expr: "V(x) = -EI(d²φ(x)/dx²)"
  - id: "F7"
    name: "Shear force-transverse displacement"
    expr: "V(x) = K_s G A(dw^T(x)/dx - φ(x))"
  - id: "F8"
    name: "Timoshenko governing equation"
    expr: "d⁴w^T(x)/dx⁴ = q(x)/EI - (1/(K_s G A))(d²q(x)/dx²)"
---

# Shearing Stresses and Timoshenko Beam Theory

## Shear Stress Distribution

In non-uniform bending where both shear and bending coexist, the actual shear stress distribution follows a parabolic law rather than being uniform.

### For Rectangular Cross-Section

For a rectangular cross-section with width b, thickness t, area A = bt, and moment of inertia I = bt³/12:

```
τ_xz = (V/(2I))(t²/4 - z²) = (6V)/(At²)(t²/4 - z²)
```

This distribution:
- Vanishes at free surfaces z = ±t/2
- Reaches maximum at the neutral axis z = 0:

```
max τ_xz = (3V)/(2bt) = (3/2)τ_xz^av
```

where the average shear stress is:

```
τ_xz^av = V/A
```

## Shear Deformation Effects

Timoshenko showed that the warpage of cross-sections due to shear stress distribution causes initially plane cross-sections to become warped but remain orthogonal to upper and lower surfaces.

The shear strain is defined as:

```
γ_xz = V/(K_s G A)
```

where K_s is the shear correction factor introduced to account for the non-uniform shear stress distribution. Standard values include:
- K_s = 2/3 (Timoshenko static analysis)
- K_s = 5/6 (Roark's value for rectangular sections)
- K_s = 10(1+ν)/(12+11ν) (Cowper's value)

## Timoshenko Beam Theory Formulation

Unlike EBBT where sections remain normal to the neutral axis, Timoshenko theory recognizes:
- Rotation φ due to bending
- Additional rotation φ_s due to shear
- Total slope: dw^T/dx = φ + φ_s

### Fundamental Relations

```
M(x) = -EI(dφ(x)/dx)                              (1)

V(x) = -EI(d²φ(x)/dx²)                            (2)

V(x) = K_s G A(dw^T(x)/dx - φ(x))                (3)
```

### Combined Governing Equation

The fourth-order differential equation governing Timoshenko beam deflection is:

```
d⁴w^T(x)/dx⁴ = q(x)/EI - (1/(K_s G A))(d²q(x)/dx²)
```

## Comparison with EBBT

Timoshenko theory:
- Provides better predictions for short, deep beams (small L/h ratios)
- Accounts for shear deformation effects
- Requires four boundary conditions (similar to EBBT)
- Reduces to EBBT as K_s GA → ∞
