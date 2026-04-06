---
parent_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh"
chunk_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh/01-abstract-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/fluid-mechanics"
  - "engineering/numerical-methods"
  - "engineering/computational-fluid-dynamics"
summary: "Overview of momentum-weighted interpolation (MWI) for collocated variable arrangements, motivation for a unified formulation, and historical context of pressure-velocity coupling methods."
formulas:
  - id: "F1"
    name: "Momentum equation (incompressible)"
    expr: "rho*(d(u_j)/dt + d(u_j*u_i)/dx_i) = -dp/dx_j + d(tau_ij)/dx_i + S_j"
  - id: "F2"
    name: "Continuity equation (incompressible)"
    expr: "d(u_i)/dx_i = 0"
---

# Abstract and Introduction

**Paper:** Bartholomew, P., Denner, F., Abdol-Azis, M.H., Marquis, A., van Wachem, B.G.M. (2018). Unified formulation of the momentum-weighted interpolation for collocated variable arrangements. *Journal of Computational Physics*, 375, 177–208. https://doi.org/10.1016/j.jcp.2018.08.030

## Abstract

Momentum-weighted interpolation (MWI) is a widely used discretisation method to prevent pressure–velocity decoupling in simulations of incompressible and low Mach number flows on meshes with a collocated variable arrangement. Despite its popularity, a unified and consistent formulation of the MWI is not available. This work devises a discretisation procedure following an in-depth analysis of the individual terms of the MWI, derived from physically consistent arguments, based on which a unified formulation of the MWI for flows on structured and unstructured meshes is proposed, including extensions for discontinuous source terms and discontinuous changes of density.

Key findings:
- The MWI enforces a low-pass filter on the pressure field, suppressing oscillatory solutions.
- Numerical dissipation of kinetic energy introduced by the MWI converges with **third order** in space and is independent of the time-step if the MWI is derived consistently from the momentum equations.
- A force-balanced discretisation of source terms is proposed that matches the discretisation of pressure gradients and preserves the force applied to the flow.
- The unified formulation significantly reduces or eliminates solution errors with increased stability for flows with large density ratios.

## Introduction

### The Pressure-Velocity Coupling Problem

An isothermal, incompressible flow is governed by:

**Momentum equations:**
$$\rho\left(\frac{\partial u_j}{\partial t} + \frac{\partial u_j u_i}{\partial x_i}\right) = -\frac{\partial p}{\partial x_j} + \frac{\partial \tau_{ij}}{\partial x_i} + S_j \tag{1}$$

**Continuity equation:**
$$\frac{\partial u_i}{\partial x_i} = 0 \tag{2}$$

A three-dimensional incompressible flow has only three independent equations for four unknowns (three velocity components plus pressure). Discretising the pressure gradient on an equidistant mesh using central differencing yields:
$$\left.\frac{\partial p}{\partial x}\right|_P \approx \frac{p_E - p_W}{2\Delta x} \tag{3}$$

The pressure gradient at node P is not dependent on the pressure value at P itself, permitting two independent "chequerboard" pressure fields as valid discrete solutions.

### Historical Background

- **Staggered arrangements** (Harlow & Welch): Velocity at cell-face centres; pressure at cell centres. Natural coupling between pressure and velocity, but difficult to apply to unstructured meshes.
- **Collocated arrangements**: All variables stored at cell centres. More flexible for complex geometries.
- **MWI (Rhie-Chow interpolation)**: The dominant method for collocated arrangements. Originally proposed by Rhie and Chow [18], attributed to several researchers in the early 1980s.

### Limitations of Existing MWI Formulations

The original Rhie-Chow formulation only considers coupling between pressure gradients with advection and shear stress terms, neglecting:
- Transient term contributions
- Source term contributions
- Contributions from underrelaxation

A range of modifications have been proposed over the years, but no unified formulation exists. The spread of separate developments has led to a large number of subtly differing approaches.

### Objective of This Work

Derivation of a unified and consistent formulation of the MWI applicable to:
- Arbitrary meshes (structured and unstructured)
- Discontinuous source terms
- Varying fluid densities
- Single-phase and multiphase flows

The paper is structured as follows:
- Section 2: Numerical framework
- Section 3: MWI derived from discretised momentum equations; validation on structured and unstructured meshes
- Section 4: Extension for source terms
- Section 5: Density weighting for flows with discontinuous density changes
- Section 6: Unified formulation
- Section 7: Conclusion
