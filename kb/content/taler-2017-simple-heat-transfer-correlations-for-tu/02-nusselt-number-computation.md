---
parent_id: "taler-2017-simple-heat-transfer-correlations-for-tu"
chunk_id: "taler-2017-simple-heat-transfer-correlations-for-tu/02-nusselt-number-computation"
section: "Nusselt Numbers for Turbulent Tube Flow"
order: 2
tags:
  - "engineering/heat-transfer"
  - "engineering/nusselt-number"
  - "engineering/turbulent-flow"
summary: "Energy conservation equation and numerical solution for Nusselt number in turbulent tube flow"
formulas:
  - id: "F1"
    name: "Energy conservation equation"
    expr: "ρc_p ū ∂T̄/∂x = (1/r)∂/∂r(rq)"
  - id: "F2"
    name: "Heat flux composition"
    expr: "q = q_m + q_t = -k∂T̄/∂r + ρc_p ε_q ∂T̄/∂r"
  - id: "F3"
    name: "Turbulent Prandtl number"
    expr: "Pr_t = ε_τ/ε_q"
  - id: "F4"
    name: "Nusselt number definition"
    expr: "Nu = (hr_w)/(k) = (2q_w r_w)/(k(T_w - T_m))"
  - id: "F5"
    name: "Correlation form"
    expr: "Nu = c_1 Re^c_2 Pr^c_3"
  - id: "F6"
    name: "Least squares objective"
    expr: "S(c_1, c_2, c_3) = ∑∑[Nu^m_ij - Nu^c_ij]² = min"
---

# Nusselt Numbers for Turbulent Tube Flow

## Energy Conservation Equation

The energy conservation equation for turbulent tube flow averaged by Reynolds has the following form:

```
ρc_p ū ∂T̄/∂x = (1/r)∂/∂r(rq)
```

where:
- q is the heat flux density
- x is the Cartesian coordinate along the tube axis
- r is the radial coordinate
- ū is the time-averaged velocity

## Heat Flux Components

The total heat flux consists of molecular and turbulent components:

```
q = q_m + q_t = -k∂T̄/∂r + ρc_p ε_q ∂T̄/∂r = k∂T̄/∂r(1 + Pr_ε ∂T̄/∂r)
```

where:
- ε_q is the eddy diffusivity for heat transfer
- ε_τ is the eddy diffusivity for momentum transfer (turbulent kinematic viscosity)
- Pr_t = ε_τ/ε_q is the turbulent Prandtl number

## Boundary Conditions

The equation is subject to:

```
k ∂T̄/∂r|_{r=r_w} = q_w                    (at wall)
∂T̄/∂r|_{r=0} = 0                         (at centerline)
T̄|_{x=0} = T_m|_{x=0}                    (inlet condition)
```

where q_w is the wall heat flux.

## Mass-Averaged Bulk Temperature

The mass-averaged (bulk) temperature is defined as:

```
T_m(x) = (2/(r_w² ū_m)) ∫₀^{r_w} ū(r)T̄(x,r)r dr
```

## Nusselt Number Calculation

The Nusselt number is calculated from the temperature distribution determined numerically:

```
Nu = (2r_w q_w)/(k(T_w - T_m))
```

## Numerical Solution Approach

1. The energy equation is solved using the finite difference method
2. Velocity profile ū(r) is calculated using Reichardt's empirical relationships
3. Nusselt number is evaluated for various Reynolds and Prandtl numbers
4. Results are compiled into extensive tables for multiple parameter combinations

## Power-Type Correlation Function

Nusselt numbers obtained from numerical solution are approximated by a product of two power functions:

```
Nu = c_1 Re^c_2 Pr^c_3
```

where unknown constants c₁, c₂, and c₃ are determined using least squares method:

```
S(c_1, c_2, c_3) = ∑_{i=1}^{n_Re} ∑_{j=1}^{n_Pr} [Nu^m_ij - Nu^c_ij]² = min
```
