---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/02-governing-equations"
section: "Governing Equations"
order: 2
tags:
  - "engineering/geothermal"
  - "engineering/numerical-methods"
  - "engineering/heat-transport"
  - "engineering/groundwater-flow"
  - "engineering/finite-element-method"
summary: "Presents the mass balance (groundwater flow) and thermal energy balance PDEs solved by OpenGeoSys, together with constitutive equations for fluid density, dynamic viscosity, specific heat capacity, and thermal conductivity."
formulas:
  - id: "F1"
    name: "Groundwater Mass Balance"
    expr: "S_s * (delta_p / delta_t) - nabla * (k/mu * (nabla_p + rho*g*nabla_z)) = Q"
  - id: "F2"
    name: "Thermal Energy Balance"
    expr: "c*rho*(delta_T/delta_t) + c_w*rho_w*v*nabla_T - D*nabla^2_T = Q_T"
  - id: "F3"
    name: "Fluid Density"
    expr: "rho(psi, tau) = p / (R*T*psi*gamma_psi) + g_s"
  - id: "F4"
    name: "Fluid Dynamic Viscosity"
    expr: "mu = mu* * [tau^0.5 * sum_{i=0}^{3} tau^i]^{-1} * exp[delta * sum_{i=1}^{19} n_i*(delta-1)^{l_i}*(tau-1)^{J_i}]"
  - id: "F5"
    name: "Isobaric Specific Heat Capacity"
    expr: "c_p(psi, tau) = -R * tau^2 * gamma_tau_tau"
  - id: "F6"
    name: "gamma_tau_tau auxiliary sum"
    expr: "gamma_tau_tau = sum_{i=1}^{34} n_i*(7.1 - psi)^{l_i} * J_i*(J_i - 1)*(tau - 1.222)^{J_i - 2}"
  - id: "F7"
    name: "Thermal Conductivity"
    expr: "lambda = rho * c_p * D"
---

# Governing Equations (Section 2.2)

OpenGeoSys solves a two-stage coupled problem: first groundwater flow, then thermal energy transport. The constitutive relationships below determine the temperature- and pressure-dependent fluid properties fed into those equations.

## 2.1. Finite Element Method Overview

The study domain is discretised into tetrahedral (3D) or triangular/rectangular (2D) elements using **Gmsh**. Polylines within the volume represent pipework and can carry boundary conditions (constant temperature or head) or source terms. Differential equations are solved node-by-node in **OpenGeoSys**; model setup uses the **GINA_OGS** GUI. Time-step: **1 day** (verified stable; results independent of smaller time-steps). Total simulation duration: **10 years** (3650 time-steps).

## 2.2. Governing Equations

### 2.2.1. Groundwater Flow — Mass Balance Equation

```
S_s * (δp/δt) - ∇( k/μ * (∇p + ρg∇z) ) = Q       ... (1)
```

| Symbol | Meaning |
|--------|---------|
| S_s | Specific storage |
| p | Pressure head |
| t | Time |
| k | Intrinsic permeability |
| μ | Fluid dynamic viscosity |
| ρ | Fluid density |
| g | Acceleration due to gravity |
| z | Height above datum |
| Q | Flow rate |

Nodal pressure values from (1) are interpolated to derive element-level flow velocities, which feed into the thermal transport equation.

### 2.2.2. Thermal Energy Balance Equation

```
c*ρ*(δT/δt) + c_w*ρ_w*υ·∇T - D∇²T = Q_T          ... (2)
```

| Symbol | Meaning |
|--------|---------|
| c | Specific heat of saturated rock |
| ρ | Rock density |
| T | Temperature |
| t | Time |
| c_w | Specific heat of fluid |
| ρ_w | Fluid density |
| υ | Flow velocity (from Eq. 1) |
| D | Thermal diffusion/dispersion tensor |
| Q_T | Heat source or sink |

### 2.2.3. Fluid Density — ρ(ψ, τ)

Density of saline groundwater as a function of temperature, pressure, and salinity (Wagner & Kruse, 1998):

```
ρ(ψ, τ) = p / (R·T·ψ·γ_ψ) + g_s                   ... (3)
```

| Symbol | Meaning |
|--------|---------|
| ψ | Reduced pressure |
| τ | Inverse reduced temperature |
| p | Pressure |
| R | Specific gas constant for pure water |
| T | Temperature |
| g_s | Salinity term |

### 2.2.4. Fluid Dynamic Viscosity — μ

Wagner & Kruse (1998) formulation for given pressure and temperature ranges:

```
μ = μ* · [τ^0.5 · Σ_{i=0}^{3} τ^i]^{-1} · exp[ δ · Σ_{i=1}^{19} n_i·(δ-1)^{l_i}·(τ-1)^{J_i} ]   ... (4)
```

### 2.2.5. Isobaric Specific Heat Capacity — c_p(ψ, τ)

Wagner & Kruse (1998) formulation for non-critical conditions:

```
c_p(ψ, τ) = -R · τ² · γ_ττ                         ... (5)
```

where the auxiliary quantity γ_ττ is:

```
γ_ττ = Σ_{i=1}^{34} n_i · (7.1 - ψ)^{l_i} · J_i·(J_i - 1) · (τ - 1.222)^{J_i - 2}   ... (6)
```

### 2.2.6. Thermal Conductivity — λ

```
λ = ρ · c_p · D                                     ... (7)
```

where ρ is material density, c_p is isobaric specific heat capacity (Eq. 5), and D is thermal diffusivity.

> **Note on coupling:** This modelling approach is **not fully coupled** between reservoir and wellbore processes. Fluid behaviour inside the wellbore is not explicitly modelled; instead, the wellbore is represented by boundary conditions (constant temperature or controlled inflow/outflow).
