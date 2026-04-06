---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/06-evaluation-and-case-studies"
section: "4. Evaluation of Derived Formulas and Description of Case Studies"
order: 6
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/numerical-methods"
  - "engineering/layered-beams"
  - "engineering/impact"
  - "engineering/case-studies"
  - "engineering/material-properties"
summary: "Numerical evaluation procedure (FFT-based Laplace inversion, Simpson's rule for Fourier integrals) and description of three beam case studies (B1, B2, B3) with material data tables and impact load definition."
formulas:
  - id: "F18"
    name: "Equivalent average modulus E_bar_d"
    expr: "E_bar_d = integral_{-d0/2}^{d0/2} E(y) dy"
  - id: "F19"
    name: "Impact load function q(x,t)"
    expr: "q(x,t) = (1/2) sigma_0 b_0 cos(pi x / (2h)) [1 - cos(2 pi t / t_0)] [H(t) - H(t - t_0)], for |x| <= h"
  - id: "F20"
    name: "Laplace transform of impact load"
    expr: "q_bar(x,p) = 2 pi^2 sigma_0 b_0 (1 - exp(-p t_0)) / (p (4 pi^2 + p^2 t_0^2)) * cos(pi x / (2h))"
  - id: "F21"
    name: "Fourier spectrum of load Q(omega,p)"
    expr: "Q(omega,p) = 8 pi^3 sigma_0 b_0 h (1 - exp(-p t_0)) / (p (4 pi^2 + p^2 t_0^2)(pi^2 - 4 omega^2 h^2)) * cos(omega h)"
  - id: "F22"
    name: "Timoshenko beam characteristic velocities"
    expr: "c_0 = sqrt(E_bar_d / rho_d); c_{2T} = sqrt(kappa G_d / rho_d)"
---

# 4. Evaluation of Derived Formulas and Description of Case Studies

## Numerical Evaluation Procedure

The evaluation of the FSDT (eq. 4) and 2D (eq. 16) solutions requires two steps of inverse transforms:

1. **Inverse Laplace transform** — performed first (order of integrals can be swapped)
   - Analytical approach (residue theorem) is feasible but requires pre-computation of dispersion curves, which is time-consuming and accuracy-sensitive
   - **FFT-based algorithm combined with Wynn's epsilon accelerator** was used for robustness and efficiency

2. **Inverse Fourier transform** — performed numerically using **Simpson's integration rule** with constant step $\Delta\omega$

### Integration Parameters

| Condition | $\omega_\text{max}$ | $\Delta\omega$ |
|-----------|---------------------|----------------|
| $t_\text{max} \leq 100\,\mu\text{s}$ | 4000 | 2 |
| $t_\text{max} > 100\,\mu\text{s}$ | 8000 | 1/3 |

## Characteristic Wave Velocities

The Timoshenko beam (1D) has two dispersion curve asymptotes:

```
c_0   = sqrt(E_bar_d / rho_d)          [longitudinal-type velocity]
c_{2T} = sqrt(kappa G_d / rho_d)       [shear-type velocity]
```

The 2D beam (strip) is characterised by an infinite number of dispersion curves with P-wave velocity $c_3$ and S-wave velocity $c_2$ per layer (from eq. F9).

## Case Studies: Three Beam Types

### Case B1 — Two Stiff Plies with Thin Soft Interlayer
- Two glass plies (3 mm each) bonded by PVB (polyvinyl butyral) interlayer (0.4 mm)
- Total height: 6.4 mm
- Application: solar panels, photovoltaic panels, laminated glass

### Case B2 — Soft-Core Sandwich Beam
- Two steel face sheets (0.4 mm each) bonded to Divinycell H160 foam core (5.6 mm)
- Total height: 6.4 mm (same as B1)
- Most widespread type of three-layered beam

### Case B3 — Stiff-Core Sandwich Beam
- Two aluminium alloy 2024Al face sheets (0.4 mm each) bonded to steel core (5.6 mm)
- Total height: 6.4 mm

## Material Properties (Table 1)

| Material/Beam | $\rho$ or $\rho_d/d_0$ [kg/m³] | $E$ or $\bar{E}_d/d_0$ [×10⁸ Pa] | $G$ or $G_d/d_0$ [×10⁸ Pa] | $\kappa$ |
|--------------|---|----|----|----|
| Glass | 2500 | 740.9 | 308.7 | 0.833 |
| PVB | 1100 | 9.850 | 3.305 | 0.833 |
| 2024Al | 2800 | 720.8 | 265.0 | 0.833 |
| Steel | 7800 | 2100 | 807.7 | 0.833 |
| Divinycell H160 | 160 | 2.051 | 0.730 | 0.833 |
| B1 | 2413 | 695.2 | 289.6 | 0.481 |
| B2 | 1115 | 264.3 | 101.6 | 0.881 |
| B3 | 7175 | 1928 | 739.9 | 0.973 |

Note: Timoshenko shear coefficients for layered beams (B1–B3) differ significantly from 0.833 (homogeneous value) and are composition-dependent.

## Characteristic Wave Velocities (Table 2)

| Material/Beam | $c_3$ [m/s] | $c_2$ [m/s] | $c_0$ [m/s] | $c_{2T}$ [m/s] |
|---|---|---|---|---|
| Glass | 5556 | 3514 | — | — |
| PVB | 1086 | 548 | — | — |
| 2024Al | 5438 | 3076 | — | — |
| Steel | 5439 | 3218 | — | — |
| Divinycell H160 | 1237 | 675 | — | — |
| B1 | — | — | 5368 | 2402 |
| B2 | — | — | 4869 | 2834 |
| B3 | — | — | 5183 | 3168 |

## Impact Load Definition

The transverse load $q(x,t)$ applied to all beams (for $|x| \leq h$):

```
q(x,t) = (1/2) sigma_0 b_0 cos(pi/(2) * x/h) * [1 - cos(2*pi*t/t_0)] * [H(t) - H(t - t_0)]
```

Primary parameter values: $\sigma_0 = 10^6\,\text{Pa}$, $b_0 = 2\,\text{mm}$, $h = 1\,\text{mm}$, $t_0 = 10\,\mu\text{s}$.

This represents a 2×2 mm area loaded by a 1 MPa pressure pulse with smooth spatial (cosine) and temporal (1 − cosine) rise. The load contains frequencies up to ~178 kHz at the 5% spectral contribution level.

The Laplace transform of this load:

```
q_bar(x,p) = 2 pi^2 sigma_0 b_0 (1 - exp(-p t_0)) / [p (4 pi^2 + p^2 t_0^2)] * cos(pi x / (2h))
```

The Fourier spectrum needed for evaluation:

```
Q(omega,p) = 8 pi^3 sigma_0 b_0 h (1 - exp(-p t_0)) / [p (4 pi^2 + p^2 t_0^2)(pi^2 - 4 omega^2 h^2)] * cos(omega h)
```

## FE Validation

A professional FE code (MSC.Marc) was used as a third independent verification method:
- Regular mesh of square linear elements: $0.1 \times 0.1\,\text{mm}$
- Explicit central-difference time integration, step $\approx 8 \times 10^{-9}\,\text{s}$
- Results for all cases B1–B3 were in excellent agreement with 2D analytical solutions
