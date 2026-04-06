---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/04-exact-2d-problem-formulation"
section: "3.1–3.2. Exact 2D Theory — Problem Formulation and Governing Equations"
order: 4
tags:
  - "engineering/beam-theory"
  - "engineering/elasticity"
  - "engineering/plane-stress"
  - "engineering/wave-propagation"
  - "engineering/layered-beams"
  - "engineering/2D-theory"
summary: "Exact 2D plane-stress formulation for an arbitrary three-layered beam under impact, including decoupled PDEs for dilatation and rotation waves in each layer."
formulas:
  - id: "F8"
    name: "Decoupled wave equations for dilatation and rotation in layer i"
    expr: "d^2 eps_{v,i}/dt^2 = c_{3,i}^2 nabla^2 eps_{v,i}; d^2 omega_{z,i}/dt^2 = c_{2,i}^2 nabla^2 omega_{z,i}"
  - id: "F9"
    name: "Phase velocities of P-wave and S-wave in layer i"
    expr: "c_{3,i} = sqrt(E_i / (rho_i (1 - nu_i^2))); c_{2,i} = sqrt(G_i / rho_i)"
  - id: "F10"
    name: "Volume dilatation and rotation definitions"
    expr: "eps_{v,i} = du_i/dx_i + dv_i/dy_i; omega_{z,i} = (1/2)(dv_i/dx_i - du_i/dy_i)"
---

# 3.1–3.2. Exact 2D Theory — Problem Formulation and Governing Equations

## 3.1. Problem Formulation

Unlike the FSDT solution (restricted to symmetric beams), the exact 2D solution is derived for an **arbitrary three-layered elastic beam**.

### Assumptions

- **Plane stress** state (beam represented as an infinite strip of dimensions $b_0 \times d_0$)
- Load $q(x,t)$ uniformly distributed through the beam width
- Problem is symmetric with respect to the vertical axis (same as 1D case)

### Layer-by-Layer Approach

The transient response of **each layer is solved separately**, then connected via continuity boundary conditions at interfaces.

Three **local coordinate systems** are introduced (one per layer). The response of the $i$th layer ($i = 1, 2, 3$) having thickness $2d_i$ is described on domain $[0, +\infty) \times [-d_i, d_i] \times [0, t_\text{max}]$ by:

- $u_i(x_i, y_i, t)$: horizontal displacement component
- $v_i(x_i, y_i, t)$: vertical displacement component

Material properties of the $i$th layer: mass density $\rho_i$, Poisson ratio $\nu_i$, Young modulus $E_i$.

### Capabilities of the 2D Approach

This approach can capture:
- Cross-sectional warping
- Real shear stress distribution through the beam thickness
- Local lateral deformations near loading points
- All types of transient waves (consequence of impact loading)

## 3.2. Governing Equations

For each layer, the 2D displacement PDEs are rewritten as two **decoupled PDEs** in terms of:
- **Volume dilatation** $\varepsilon_{v,i}$ (governs irrotational / P-waves)
- **Rotation** $\omega_{z,i}$ about local axis $z_i$ (governs distortion / S-waves)

```
d^2 eps_{v,i}/dt^2 = c_{3,i}^2 * nabla^2 eps_{v,i}(x_i, y_i, t)

d^2 omega_{z,i}/dt^2 = c_{2,i}^2 * nabla^2 omega_{z,i}(x_i, y_i, t)
```

### Wave Phase Velocities

```
c_{3,i} = sqrt( E_i / (rho_i * (1 - nu_i^2)) )   [P-wave / dilatation wave velocity]

c_{2,i} = sqrt( G_i / rho_i )                      [S-wave / shear wave velocity]
```

### Kinematic Definitions

```
eps_{v,i}(x_i, y_i, t) = du_i/dx_i + dv_i/dy_i

omega_{z,i}(x_i, y_i, t) = (1/2) * (dv_i/dx_i - du_i/dy_i)
```

These decoupled equations govern beam transient and stationary vibration. The P-wave and S-wave propagate with distinct characteristic velocities in each layer, producing the rich wave phenomena observed in layered beams under impact.
