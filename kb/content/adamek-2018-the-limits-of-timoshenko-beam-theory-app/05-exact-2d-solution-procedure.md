---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/05-exact-2d-solution-procedure"
section: "3.3. Exact 2D Theory — Solution Procedure and Resulting Formulas"
order: 5
tags:
  - "engineering/beam-theory"
  - "engineering/elasticity"
  - "engineering/plane-stress"
  - "engineering/laplace-transform"
  - "engineering/fourier-transform"
  - "engineering/2D-theory"
  - "engineering/boundary-conditions"
summary: "Integral transform solution for the exact 2D layered beam problem, including Fourier-Laplace representations of displacement components and the 12-equation boundary condition system."
formulas:
  - id: "F11"
    name: "Fourier integral representations of dilatation and rotation spectra"
    expr: "eps_bar_{v,i}(x_i,y_i,t) = (1/pi) integral_0^inf D_i(omega,y_i,p) cos(omega x_i) d omega; omega_bar_{z,i}(x_i,y_i,t) = (1/pi) integral_0^inf R_i(omega,y_i,p) sin(omega x_i) d omega"
  - id: "F12"
    name: "General solution for dilatation and rotation spectra"
    expr: "D_i(omega,y_i,p) = B_{1,i} cosh(lambda_{1,i} y_i) + B_{2,i} sinh(lambda_{1,i} y_i); R_i(omega,y_i,p) = B_{3,i} cosh(lambda_{2,i} y_i) + B_{4,i} sinh(lambda_{2,i} y_i)"
  - id: "F13"
    name: "Characteristic roots of the 2D system"
    expr: "lambda_{1,i}(omega,p) = omega sqrt(1 + (p/(c_{3,i} omega))^2); lambda_{2,i}(omega,p) = omega sqrt(1 + (p/(c_{2,i} omega))^2)"
  - id: "F14"
    name: "Laplace transforms of displacement components (u_i, v_i) in terms of dilatation and rotation"
    expr: "u_bar_i = -2(c_{2,i}^2/p^2) d omega_bar_{z,i}/dy_i + (c_{3,i}^2/p^2) d eps_bar_{v,i}/dx_i; v_bar_i = 2(c_{2,i}^2/p^2) d omega_bar_{z,i}/dx_i + (c_{3,i}^2/p^2) d eps_bar_{v,i}/dy_i"
  - id: "F15"
    name: "General displacement component formulas (Fourier integral form)"
    expr: "u_bar_i = (1/pi) integral_0^inf {[C_{1,i} cosh(lambda_{1,i} y_i) + C_{2,i} sinh(lambda_{1,i} y_i)] k_{1,i} + [C_{3,i} sinh(lambda_{2,i} y_i) + C_{4,i} cosh(lambda_{2,i} y_i)] k_{2,i}} sin(omega x_i) d omega; v_bar_i = (1/pi) integral_0^inf {[C_{1,i} sinh(lambda_{1,i} y_i) + C_{2,i} cosh(lambda_{1,i} y_i)] k_{3,i} + [C_{3,i} cosh(lambda_{2,i} y_i) + C_{4,i} sinh(lambda_{2,i} y_i)] k_{4,i}} cos(omega x_i) d omega"
  - id: "F16"
    name: "Auxiliary complex functions k_{1,i} through k_{4,i}"
    expr: "k_{1,i} = -c_{3,i}^2 omega / p^2; k_{2,i} = -2 c_{2,i}^2 lambda_{2,i} / p^2; k_{3,i} = c_{3,i}^2 lambda_{1,i} / p^2; k_{4,i} = 2 c_{2,i}^2 omega / p^2"
  - id: "F17"
    name: "Boundary conditions (stress continuity and displacement continuity at interfaces)"
    expr: "sigma_{yy,3}(x_3,d_3,t) = q(x_3,t)/b_0; sigma_{xy,3}(x_3,d_3,t) = 0; [displacement and stress continuity at each interface]; sigma_{yy,1}(x_1,-d_1,t) = 0; sigma_{xy,1}(x_1,-d_1,t) = 0"
---

# 3.3. Exact 2D Theory — Solution Procedure and Resulting Formulas

## Integral Transform Approach

The classical method of integral transforms is applied similarly to the FSDT solution:
1. **Laplace transform** (with zero initial conditions) is applied to the decoupled wave equations
2. **Fourier integrals** in $x_i$ represent the Laplace-transformed dilatation and rotation

Due to the vertical symmetry of the 2D problem:

```
eps_bar_{v,i}(x_i, y_i, p) = (1/pi) integral_0^inf D_i(omega, y_i, p) cos(omega x_i) d omega

omega_bar_{z,i}(x_i, y_i, p) = (1/pi) integral_0^inf R_i(omega, y_i, p) sin(omega x_i) d omega
```

## Spectral Solution

Substituting into the transformed wave equations, the unknown spectral functions satisfy:

```
D_i(omega, y_i, p) = B_{1,i} cosh(lambda_{1,i} y_i) + B_{2,i} sinh(lambda_{1,i} y_i)

R_i(omega, y_i, p) = B_{3,i} cosh(lambda_{2,i} y_i) + B_{4,i} sinh(lambda_{2,i} y_i)
```

The characteristic roots are:

```
lambda_{1,i}(omega,p) = omega * sqrt(1 + (p / (c_{3,i} omega))^2)

lambda_{2,i}(omega,p) = omega * sqrt(1 + (p / (c_{2,i} omega))^2)
```

## Displacement Component Formulas

The Laplace transforms of displacements are derived from the kinematic relations:

```
u_bar_i = -2 (c_{2,i}^2 / p^2) d omega_bar_{z,i}/dy_i + (c_{3,i}^2 / p^2) d eps_bar_{v,i}/dx_i

v_bar_i =  2 (c_{2,i}^2 / p^2) d omega_bar_{z,i}/dx_i + (c_{3,i}^2 / p^2) d eps_bar_{v,i}/dy_i
```

Introducing the auxiliary complex functions:

```
k_{1,i} = -c_{3,i}^2 omega / p^2
k_{2,i} = -2 c_{2,i}^2 lambda_{2,i} / p^2
k_{3,i} =  c_{3,i}^2 lambda_{1,i} / p^2
k_{4,i} =  2 c_{2,i}^2 omega / p^2
```

The final general displacement formulas (valid for arbitrary layer, zero initial conditions, arbitrary boundary conditions) become:

```
u_bar_i(x_i, y_i, p) = (1/pi) integral_0^inf {
    [C_{1,i} cosh(lambda_{1,i} y_i) + C_{2,i} sinh(lambda_{1,i} y_i)] k_{1,i}
  + [C_{3,i} sinh(lambda_{2,i} y_i) + C_{4,i} cosh(lambda_{2,i} y_i)] k_{2,i}
} sin(omega x_i) d omega

v_bar_i(x_i, y_i, p) = (1/pi) integral_0^inf {
    [C_{1,i} sinh(lambda_{1,i} y_i) + C_{2,i} cosh(lambda_{1,i} y_i)] k_{3,i}
  + [C_{3,i} cosh(lambda_{2,i} y_i) + C_{4,i} sinh(lambda_{2,i} y_i)] k_{4,i}
} cos(omega x_i) d omega
```

## Boundary Conditions and Linear System

The 12 unknown functions $C_{j,i}(\omega, p)$ for $j = 1,\ldots,4$ and $i = 1, 2, 3$ are determined from boundary conditions:

```
sigma_{yy,3}(x_3, d_3, t) = q(x_3,t)/b_0  [applied load at top surface]
sigma_{xy,3}(x_3, d_3, t) = 0               [zero shear at loaded surface]

[Displacement continuity at each interface:]
u_2(x_2, d_2, t) = u_3(x_3, -d_3, t)
v_2(x_2, d_2, t) = v_3(x_3, -d_3, t)

[Stress continuity at each interface:]
sigma_{yy,2}(x_2, d_2, t) = sigma_{yy,3}(x_3, -d_3, t)
sigma_{xy,2}(x_2, d_2, t) = sigma_{xy,3}(x_3, -d_3, t)

[Similarly for layers 1-2 interface]

sigma_{yy,1}(x_1, -d_1, t) = 0  [free bottom surface]
sigma_{xy,1}(x_1, -d_1, t) = 0
```

After Laplace transform and applying Hooke's law (plane stress), this yields a system of **12 complex algebraic equations** for $C_{j,i}(\omega, p)$. The exact symbolic solution is too complex for direct presentation; numerical solution via MATLAB is used for all required values of $\omega$ and $p$.
