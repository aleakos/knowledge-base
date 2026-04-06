---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/03-fsdt-governing-equations-and-solution"
section: "2.2–2.3. FSDT Governing Equations and Solution Procedure"
order: 3
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/equations-of-motion"
  - "engineering/laplace-transform"
  - "engineering/fourier-transform"
summary: "FSDT equations of motion, equivalent beam parameters, Timoshenko shear coefficient, and Laplace-Fourier solution procedure for the infinite layered beam."
formulas:
  - id: "F2"
    name: "Equations of motion (FSDT)"
    expr: "rho_d b_0 d^2v/dt^2 + kappa b_0 G_d (d alpha/dx - d^2v/dx^2) = q(x,t); kappa G_d (dv/dx - alpha) + E_d d^2 alpha/dx^2 - J_d d^2 alpha/dt^2 = 0"
  - id: "F3"
    name: "Equivalent beam parameters (integral formulas)"
    expr: "rho_d = integral_{-d0/2}^{d0/2} rho(y) dy; G_d = integral_{-d0/2}^{d0/2} G(y) dy; E_d = integral_{-d0/2}^{d0/2} E(y) y^2 dy; J_d = integral_{-d0/2}^{d0/2} rho(y) y^2 dy"
  - id: "F4"
    name: "Laplace-Fourier representation of beam response"
    expr: "v_bar(x,p) = (1/pi) integral_0^inf V(omega,p) cos(omega x) d omega; alpha_bar(x,p) = (1/pi) integral_0^inf A(omega,p) sin(omega x) d omega"
  - id: "F5"
    name: "Fourier spectra of deflection and slope"
    expr: "V(omega,p) = P2(omega,p) Q(omega,p) / P6(omega,p); A(omega,p) = P0(omega,p) Q(omega,p) / P6(omega,p)"
  - id: "F6"
    name: "Complex polynomials P0, P2, P6"
    expr: "P0 = kappa omega G_d; P2 = kappa G_d + omega^2 E_d + J_d p^2; P6 = b_0 [(kappa omega^2 G_d + rho_d p^2) P2 - P0^2]"
  - id: "F7"
    name: "Cosine Fourier spectrum of load"
    expr: "Q(omega,p) = integral_{-h}^{h} q_bar(x,p) cos(omega x) dx"
---

# 2.2–2.3. FSDT Governing Equations and Solution Procedure

## 2.2. Governing Equations

The equations of motion for the equivalent single-layer Timoshenko beam in terms of deflection $v(x,t)$ and slope $\alpha(x,t)$ are:

```
rho_d b_0 d^2v/dt^2 + kappa b_0 G_d (d alpha/dx - d^2v/dx^2) = q(x,t)

kappa G_d (dv/dx - alpha) + E_d d^2 alpha/dx^2 - J_d d^2 alpha/dt^2 = 0
```

### Equivalent Beam Parameters

The constants $\rho_d$, $G_d$, $E_d$, and $J_d$ reflect the material and geometric properties of the layered beam, analogous to equivalent single-layer laminate theory parameters:

```
rho_d = integral_{-d0/2}^{d0/2} rho(y) dy

G_d   = integral_{-d0/2}^{d0/2} G(y) dy

E_d   = integral_{-d0/2}^{d0/2} E(y) y^2 dy

J_d   = integral_{-d0/2}^{d0/2} rho(y) y^2 dy
```

### Timoshenko Shear Coefficient

The parameter $\kappa$ (Timoshenko shear coefficient) corrects beam deformations with respect to the shear stress distribution in the cross-section:

- For a **homogeneous rectangular cross-section**: $\kappa = 0.833$
- For **heterogeneous beams**: $\kappa$ depends not only on cross-section geometry but also on beam composition (material-dependent)

## 2.3. Solution Procedure

The solution procedure applies:
1. **Laplace transform** (time → complex domain, variable $p \in \mathbb{C}$) to the equations of motion with zero initial conditions
2. **Fourier integrals** (for the infinite beam, as opposed to Fourier series for finite beams)

With problem symmetry, the solutions in the Laplace-Fourier domain are:

```
v_bar(x,p) = (1/pi) integral_0^inf V(omega,p) cos(omega x) d omega

alpha_bar(x,p) = (1/pi) integral_0^inf A(omega,p) sin(omega x) d omega
```

Substituting into the transformed ODEs, the Fourier spectra satisfy:

```
V(omega,p) = P2(omega,p) * Q(omega,p) / P6(omega,p)

A(omega,p) = P0(omega,p) * Q(omega,p) / P6(omega,p)
```

where the complex polynomials are:

```
P0(omega,p) = kappa omega G_d

P2(omega,p) = kappa G_d + omega^2 E_d + J_d p^2

P6(omega,p) = b_0 [ (kappa omega^2 G_d + rho_d p^2) P2(omega,p) - P0(omega,p)^2 ]
```

The load spectrum $Q(\omega, p)$ is the cosine Fourier transform of the Laplace-transformed load:

```
Q(omega,p) = integral_{-h}^{h} q_bar(x,p) cos(omega x) dx
```

where $h$ is the half-length of the loaded area.

## Inversion

The exact inverse Laplace transform via the residue theorem is theoretically possible but, for consistency with the more complex 2D solution, **numerical inversion** (FFT-based algorithm with Wynn's epsilon accelerator) is used throughout.
