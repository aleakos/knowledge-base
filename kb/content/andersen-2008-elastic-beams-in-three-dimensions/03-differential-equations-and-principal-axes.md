---
parent_id: "andersen-2008-elastic-beams-in-three-dimensions"
chunk_id: "andersen-2008-elastic-beams-in-three-dimensions/03-differential-equations-and-principal-axes"
section: "Differential Equations of Equilibrium and Principal Axes"
order: 3
tags:
  - "engineering/beam-theory"
summary: "Governing differential equations for Timoshenko and Bernoulli-Euler beams, boundary conditions, and coordinate transformations to principal axes for uncoupling bending planes."
formulas:
  - id: "F12"
    name: "Timoshenko beam governing equations (matrix form)"
    expr: "d/dx [C * dU/dx] = load vector, with 5 DOFs: w_x, w_y, w_z, θ_y, θ_z"
  - id: "F13"
    name: "Bernoulli-Euler governing equation (y-bending)"
    expr: "d²/dx²(EI_yy * d²w_z/dx²) + q_z + dm_y/dx = 0"
  - id: "F14"
    name: "Principal moments of inertia"
    expr: "I_1,2 = (I_y'y' + I_z'z')/2 ± sqrt(((I_y'y' - I_z'z')/2)² + I_y'z'²)"
  - id: "F15"
    name: "Principal axis rotation angle"
    expr: "tan(2φ) = -2*I_y'z' / (I_y'y' - I_z'z')"
---

# Differential Equations of Equilibrium and Principal Axes

## Timoshenko Beam Equations

Substituting the constitutive matrix into equilibrium equations yields the governing system for Timoshenko beam theory. With the bending centre as origin and ignoring torsion, the five coupled ODEs in matrix form (F12) involve unknowns `{w_x, w_y, w_z, θ_y, θ_z}`.

The system is of the form:
```
d/dx [C * dU/dx] + load = 0
```

where C is the 5×5 constitutive matrix and U is the vector of kinematic unknowns.

### Boundary Conditions

At each end-section (`x = x_0 = 0` or `l`), exactly 5 of 10 possible conditions are prescribed:

**Kinematic (displacement/rotation):**
```
w_x(x_0) = w_x,0
w_y(x_0) = w_y,0
w_z(x_0) = w_z,0
θ_y(x_0) = θ_y,0
θ_z(x_0) = θ_z,0
```

**Mechanical (force/moment):**
```
N(x_0) = N_0
Q_y(x_0) = Q_y,0
Q_z(x_0) = Q_z,0
M_y(x_0) = M_y,0
M_z(x_0) = M_z,0
```

## Bernoulli-Euler Beam Equations

For Bernoulli-Euler beams, the shear forces are eliminated using the equilibrium equations, yielding 4th-order ODEs (F13). For the z-bending direction (when origin is at bending centre, axes uncoupled):
```
d²/dx²(EI_yy * d²w_z/dx²) + q_z + dm_y/dx = 0
d²/dx²(EI_zz * d²w_y/dx²) - q_y + dm_z/dx = 0
d/dx(EA * dw_x/dx) - q_x = 0
```

For Bernoulli-Euler beams, kinematic boundary conditions involve rotations expressed as slopes:
```
θ_y(x_0) = -dw_z(x_0)/dx
θ_z(x_0) = dw_y(x_0)/dx
```

## Uncoupling Bending Planes: Principal Axes

Even at the bending centre, the bending moments M_y' and M_z' may still be coupled if `I_y'z' ≠ 0`. A rotation of the y'- and z'-axes by angle φ eliminates the coupling.

### Principal Axis Angle (F15)

```
tan(2φ) = -2 * I_y'z' / (I_y'y' - I_z'z')
```

### Principal Moments of Inertia (F14)

```
I_1,2 = (I_y'y' + I_z'z')/2 ± sqrt(((I_y'y' - I_z'z')/2)² + I_y'z'²)
```

In the principal axis system (y'', z''):
- `I_y''z'' = 0`
- Bending in the y''-plane and z''-plane are fully decoupled
- M_y'' causes only `(w_z'', θ_y'')` deformation
- M_z'' causes only `(w_y'', θ_z'')` deformation

### Physical Interpretation

The principal axes are the axes of symmetry of the cross-section's bending resistance. For symmetric cross-sections (I-beams, circular tubes), the principal axes coincide with the geometric symmetry axes.

## Implications for Beam Analysis

The full uncoupling of axial and bending deformations requires:
1. Origin at the **bending centre** → uncouples axial from bending
2. Axes aligned with **principal axes** → uncouples the two bending planes

Only after both transformations can bending in each plane be analyzed independently. In computational models (FEM), the position and orientation of the local coordinate system for each element must be implemented correctly, as incorrect placement introduces spurious coupling.
