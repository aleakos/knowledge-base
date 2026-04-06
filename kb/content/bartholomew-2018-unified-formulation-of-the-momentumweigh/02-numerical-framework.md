---
parent_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh"
chunk_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh/02-numerical-framework"
section: "Numerical Framework"
order: 2
tags:
  - "engineering/fluid-mechanics"
  - "engineering/numerical-methods"
  - "engineering/finite-volume-method"
summary: "Finite-volume discretisation of incompressible and compressible flow equations, including semi-discretised momentum and continuity equations for cell P."
formulas:
  - id: "F1"
    name: "Semi-discretised momentum equation (incompressible)"
    expr: "rho_P*(d(u_j)/dt|_P)*V_P + sum_f(u_j,f * vartheta_f * A_f) = -dp/dx_j|_P * V_P + sum_f(tau_ij,f * n_i,f * A_f) + S_j,P * V_P"
  - id: "F2"
    name: "Discretised continuity equation (incompressible)"
    expr: "sum_f(vartheta_f * A_f) = 0"
  - id: "F3"
    name: "Compressible momentum equation"
    expr: "d(rho*u_j)/dt + d(rho*u_j*u_i)/dx_i = -dp/dx_j + d(tau_ij)/dx_i + S_j"
  - id: "F4"
    name: "Compressible continuity equation"
    expr: "d(rho)/dt + d(rho*u_i)/dx_i = 0"
  - id: "F5"
    name: "Energy equation"
    expr: "d(rho*h)/dt + d(rho*u_i*h)/dx_i = dp/dt + d(tau_ij*u_j)/dx_i + S_i*u_i"
  - id: "F6"
    name: "Ideal gas equation of state"
    expr: "rho = p / ((gamma-1)*c_v*T)"
---

# Numerical Framework

## Incompressible Flow

The governing equations for incompressible flow (Eqs. 1 and 2 from Section 1) are discretised using the finite-volume method. The semi-discretised equations for cell P are:

**Momentum equation:**
$$\rho_P \frac{\partial u_j}{\partial t}\bigg|_P V_P + \sum_f u_{j,f} \vartheta_f A_f = -\frac{\partial p}{\partial x_j}\bigg|_P V_P + \sum_f \tau_{ij,f} \hat{n}_{i,f} A_f + S_{j,P} V_P \tag{4}$$

**Continuity equation:**
$$\sum_f \vartheta_f A_f = 0 \tag{5}$$

where:
- Subscript $f$ denotes faces of cell P
- $A_f$ = area of face $f$
- $\hat{n}_f$ = unit normal vector of face $f$ (outward pointing w.r.t. cell P)
- $\vartheta_f = \mathbf{u}_f \cdot \hat{n}_f$ = advecting velocity
- $S_P$ = discretised source terms
- $V_P$ = volume of cell P

The transient term is discretised using first- or second-order backward Euler schemes. The face velocity $u_{j,f}$ is evaluated using the central differencing scheme with implicit correction for mesh skewness.

### Main Objective

Derive a consistent discretisation for the advecting velocity:
$$\vartheta_f = u_{i,f} \hat{n}_{i,f} = \overline{u_{i,f}} \hat{n}_{i,f} + f(\nabla p, S', \rho) \tag{6}$$

based on the MWI, where $\overline{u_{i,f}}$ is interpolated from the adjacent cell centres. Constructing a force-balanced discretisation of the source term $S_P$ is also a main objective.

## Compressible Flow (Low Mach Number)

For compressible flows, the framework of Xiao et al. [12] is used:

**Momentum equation:**
$$\frac{\partial \rho u_j}{\partial t} + \frac{\partial \rho u_j u_i}{\partial x_i} = -\frac{\partial p}{\partial x_j} + \frac{\partial \tau_{ij}}{\partial x_i} + S_j \tag{7}$$

**Continuity equation:**
$$\frac{\partial \rho}{\partial t} + \frac{\partial \rho u_i}{\partial x_i} = 0 \tag{8}$$

**Energy equation:**
$$\frac{\partial \rho h}{\partial t} + \frac{\partial \rho u_i h}{\partial x_i} = \frac{\partial p}{\partial t} + \frac{\partial}{\partial x_i}\left(\tau_{ij} u_j + S_i u_i\right) \tag{9}$$

where $h = c_p T + u^2/2$ is the total enthalpy, heat conduction is neglected.

**Equation of state (ideal gas):**
$$\rho = \frac{p}{(\gamma - 1) c_v T} \tag{10}$$

with $\gamma = c_p/c_v$ the heat capacity ratio.

### Newton-Linearised Continuity Discretisation

$$\frac{\partial \rho}{\partial t} + \sum_f \rho_f^{(i)} \vartheta_f^{(i)} A_f + \sum_f \rho_f^{(i-1)} \vartheta_f^{(i)} A_f - \sum_f \rho_f^{(i-1)} \vartheta_f^{(i-1)} A_f = 0 \tag{11}$$

where superscript $(i)$ denotes implicitly solved values and $(i-1)$ denotes deferred values from the previous iteration. This Newton-linearisation allows simulations without MWI for compressible flows, unlike the incompressible framework.

## Mesh Geometry

The notation follows Fig. 2 of the paper:
- Cell P with neighbour cell F sharing face $f$
- $\hat{n}_f$ = unit normal vector of face $f$
- $\hat{s}_f$ = unit vector connecting cells P and F (both outward pointing w.r.t. cell P)
- $f'$ = interpolation point associated with face $f$
- $\mathbf{r}_f$ = vector from interpolation point $f'$ to face centre $f$

The incompressible framework supports single-phase and multiphase flows on arbitrary meshes (Denner & van Wachem [37]). The compressible framework handles single-phase flows at all speeds (Xiao et al. [12]).
