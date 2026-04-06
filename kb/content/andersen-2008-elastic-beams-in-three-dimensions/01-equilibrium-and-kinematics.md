---
parent_id: "andersen-2008-elastic-beams-in-three-dimensions"
chunk_id: "andersen-2008-elastic-beams-in-three-dimensions/01-equilibrium-and-kinematics"
section: "Equations of Equilibrium and Kinematics"
order: 1
tags:
  - "engineering/beam-theory"
summary: "Derivation of section force and moment definitions, static equilibrium equations, and kinematic assumptions for three-dimensional elastic beams including Timoshenko and Bernoulli-Euler theories."
formulas:
  - id: "F1"
    name: "Force equilibrium of beam element"
    expr: "dF/dx + q = 0"
  - id: "F2"
    name: "Moment equilibrium of beam element"
    expr: "dM/dx + i×F + m = 0"
  - id: "F3"
    name: "Axial displacement field"
    expr: "u_x(x,y,z) = w_x(x) + z*θ_y(x) - y*θ_z(x) + ω(y,z)*dθ_x/dx"
  - id: "F4"
    name: "Axial strain"
    expr: "ε_xx = dw_x/dx + z*dθ_y/dx - y*dθ_z/dx + ω(y,z)*d²θ_x/dx²"
  - id: "F5"
    name: "Curvature components"
    expr: "κ_y = dθ_y/dx, κ_z = dθ_z/dx"
---

# Equations of Equilibrium and Kinematics

## Introduction

This textbook (DCE Lecture Notes No. 23, Aalborg University, 2008) provides the theoretical foundation for three-dimensional elastic beam structures. The treatment spans Timoshenko and Bernoulli-Euler beam theories, cross-sectional properties, torsion, and finite element formulation.

## Section Forces and Moments

For a beam with axis along x, the section force vector F and section moment vector M are:

```
F = {N, Q_y, Q_z}ᵀ
M = {M_x, M_y, M_z}ᵀ
```

where:
- `N` = axial force
- `Q_y`, `Q_z` = shear forces in y- and z-directions
- `M_x` = torsional moment
- `M_y`, `M_z` = bending moments

These are related to stresses through integrals over the cross-section area A:
```
N = ∫ σ_xx dA,   Q_y = ∫ σ_xy dA,   Q_z = ∫ σ_xz dA
M_x = ∫ (σ_xz * y - σ_xy * z) dA
M_y = ∫ z * σ_xx dA,   M_z = -∫ y * σ_xx dA
```

## Equilibrium Equations

For a differential beam element loaded by distributed force q and distributed moment m (F1, F2):

```
dN/dx + q_x = 0
dQ_y/dx + q_y = 0
dQ_z/dx + q_z = 0

dM_x/dx + m_x = 0
dM_y/dx - Q_z + m_y = 0
dM_z/dx + Q_y + m_z = 0
```

## Kinematics

The beam cross-section is assumed to remain plane and rigid during deformation (classical beam theory). The displacement of any point is fully determined by 6 components:
- Translations: `w_x(x)`, `w_y(x)`, `w_z(x)`
- Rotations: `θ_x(x)` (twist), `θ_y(x)`, `θ_z(x)`

### Displacement Fields

The displacement field for any material point (F3):
```
u_x(x,y,z) = w_x(x) + z*θ_y(x) - y*θ_z(x) + ω(y,z)*dθ_x/dx
u_y(x,y,z) = w_y(x) - z*θ_x(x)
u_z(x,y,z) = w_z(x) + y*θ_x(x)
```

The term `ω(y,z)*dθ_x/dx` accounts for warping — the non-planar deformation of non-circular cross-sections under torsion.

### Strain Components

The axial strain (F4) and angular shear strains are:
```
ε_xx = dw_x/dx + z*dθ_y/dx - y*dθ_z/dx + ω*d²θ_x/dx²
γ_xy = dw_y/dx - θ_z + (∂ω/∂y - z)*dθ_x/dx
γ_xz = dw_z/dx + θ_y + (∂ω/∂z + y)*dθ_x/dx
```

### Curvature

The curvature components of the beam axis (F5):
```
κ_y = dθ_y/dx    (curvature in xz-plane)
κ_z = dθ_z/dx    (curvature in xy-plane)
```

For Bernoulli-Euler beams: `θ_y = -dw_z/dx` and `θ_z = dw_y/dx`, giving `γ_xy = γ_xz = 0`.

## Timoshenko vs. Bernoulli-Euler Theory

| Feature | Timoshenko | Bernoulli-Euler |
|---------|-----------|-----------------|
| Shear deformation | Included (γ ≠ 0) | Ignored (γ = 0) |
| Cross-section | Remains plane, can rotate relative to beam axis | Remains plane and orthogonal to deformed axis |
| Accuracy | Better for short/thick beams | Better for slender beams |
| Shear forces | Derived from kinematics | Derived from statics |

Timoshenko theory was developed from Bresse (1859) and extended to dynamics by Timoshenko (1921).

## Torsion: St. Venant vs. Vlasov

- **St. Venant (homogeneous) torsion**: assumes dθ_x/dx = constant; warping is identical in all cross-sections; no axial strains from torsion.
- **Vlasov (non-homogeneous) torsion**: applies when warping is restrained at supports; produces axial stresses and varying shear stresses along the beam. Prevention of warping significantly stiffens a beam against torsion.
