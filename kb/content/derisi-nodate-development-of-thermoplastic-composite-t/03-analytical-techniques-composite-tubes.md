---
parent_id: "derisi-nodate-development-of-thermoplastic-composite-t"
chunk_id: "derisi-nodate-development-of-thermoplastic-composite-t/03-analytical-techniques-composite-tubes"
section: "Analytical Techniques for Composite Tubes"
order: 3
tags:
  - "engineering/composite-materials"
  - "engineering/tubular-mechanics"
  - "engineering/elasticity"
summary: "Review of analytical stress analysis methods for anisotropic composite tubes under combined bending, torsion, and axial loading."
formulas:
  - id: "F1"
    name: "General Hooke's law (anisotropic)"
    expr: "sigma_i = C_ij * epsilon_j  (i,j = 1..6)"
  - id: "F2"
    name: "Orthotropic compliance matrix"
    expr: "epsilon_i = S_ij * sigma_j  with S_12 = -nu_12/E_1, S_21 = -nu_21/E_2"
  - id: "F3"
    name: "Displacement functions in cylindrical coordinates"
    expr: "u_r = f(r,theta,z),  u_theta = g(r,theta,z),  u_z = h(r,theta,z)"
  - id: "F4"
    name: "Stress function approach"
    expr: "Equilibrium PDEs solved via stress functions phi_r and phi_z; leads to 8th-order ODE system"
---

# Analytical Techniques for Composite Tubes

## Overview

Analytical stress analysis of composite tubes is significantly more complex than isotropic tube analysis because anisotropy introduces coupling between bending, torsion, and axial extension modes. Chapter 2 of the thesis reviews the state of the art and highlights the limitations of available methods.

## Coordinate System and Definitions

Cylindrical coordinates (r, θ, z) are used:
- r: radial distance from tube center
- θ: angular (hoop) coordinate
- z: tube axis

The tube has N layers, each with inner radius a_n and outer radius b_n. Each layer has its own fiber orientation and elastic properties.

## Constitutive Relations

### Anisotropic Hooke's Law

```
sigma_i = C_ij * epsilon_j    (summation over j = 1..6)
```

For the most general anisotropic case, the 6×6 stiffness matrix C_ij has up to 21 independent constants.

### Orthotropic Simplification

When three mutually perpendicular planes of symmetry exist (orthotropic material), the compliance matrix reduces:

```
[epsilon_1]   [S_11  S_12  S_13   0    0    0 ] [sigma_1]
[epsilon_2]   [S_12  S_22  S_23   0    0    0 ] [sigma_2]
[epsilon_3] = [S_13  S_23  S_33   0    0    0 ] [sigma_3]
[gamma_23]    [ 0    0    0   S_44   0    0 ] [tau_23 ]
[gamma_13]    [ 0    0    0    0   S_55   0 ] [tau_13 ]
[gamma_12]    [ 0    0    0    0    0   S_66] [tau_12 ]
```

where S_12 = -nu_12/E_1 and the reciprocal relation nu_12/E_1 = nu_21/E_2 holds.

### Transformation of Elastic Constants

For a ply oriented at angle θ from the tube axis, the on-axis stiffnesses are transformed using the standard rotation matrix involving cos(θ) and sin(θ) terms. This yields coupling terms (e.g., C_16, C_26) that are non-zero in the tube coordinate system, introducing the characteristic bending-torsion coupling of composite tubes.

## Analysis of Anisotropic Tubes Under Combined Loading

The tube is subjected to:
- Bending moments M_x, M_y
- Twisting torque T
- Axial force N

### Displacement Functions

The displacement field in the tube wall is expressed as:

```
u_r = U(r) * f(theta, z)
u_theta = V(r) * g(theta, z)
u_z = W(r) * h(theta, z) + rigid body terms
```

Rigid body translations and rotations are superposed on the elastic deformation field.

### Stress Functions

Equilibrium equations in cylindrical coordinates yield a system of partial differential equations. These are reduced to ODEs by introducing stress functions phi_r(r) and phi_z(r), leading to an **8th-order ODE system** with 8 integration constants per layer.

For an N-layer tube, this creates a 8N × 8N linear system to be solved, subject to continuity conditions at each layer interface and traction-free boundary conditions at the inner and outer surfaces.

### Solution Procedure

1. Express displacement and stress components in terms of r-dependent functions.
2. Apply compatibility conditions to reduce to ODE form.
3. Solve ODE system (analytically or numerically).
4. Apply boundary conditions and interface continuity conditions.
5. Recover full stress and displacement fields.

## Equilibrium of Anisotropic Cantilever Beam

For a composite tube treated as a cantilever beam:
- End loads (force F, moment M) create a statically determinate external load distribution.
- Cross-sectional stress resultants (N, M_x, M_y, T) are known functions of position along z.
- Analytical solution for the internal stress state requires the full 3D elasticity solution described above.

## Limitations and Motivation for Numerical Methods

Despite extensive efforts to simplify the analytical solutions, the resulting equation systems remain very complex. Furthermore:
- Analytical methods assume **straight, uniform cross-section tubes** under **uniform loading**.
- Actual helicopter landing gear consists of **curved tubes** with **variable cross-sections** under **non-uniform loading**.

These constraints make analytical methods insufficient for the design problem. ANSYS finite element analysis was therefore adopted as the primary design tool, with analytical methods used only for preliminary elastic-range estimates.
