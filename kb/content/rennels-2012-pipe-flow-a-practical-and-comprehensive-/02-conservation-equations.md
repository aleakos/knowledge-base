---
parent_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-"
chunk_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-/02-conservation-equations"
section: "Conservation Equations"
order: 2
tags:
  - "engineering/fluid-mechanics"
  - "engineering/pipe-flow"
  - "engineering/energy-equation"
summary: "Conservation of mass, momentum, and energy for pipe flow; derivation of the general energy equation, head loss concept, and grade lines"
formulas:
  - id: "F1"
    name: "Continuity equation (incompressible)"
    expr: "A1*V1 = A2*V2  (or rho1*A1*V1 = rho2*A2*V2 for compressible)"
  - id: "F2"
    name: "Momentum flux correction factor (turbulent)"
    expr: "theta = 1 + 0.9765*f"
  - id: "F3"
    name: "General energy equation (weight units)"
    expr: "P1/rho_w + phi1*V1^2/(2g) + Z1 + JQ1/w + Ep/w = P2/rho_w + phi2*V2^2/(2g) + Z2 + JQ2/w + ET/w"
  - id: "F4"
    name: "Simplified energy equation (incompressible, no pump/turbine)"
    expr: "P1/rho_w + V1^2/(2g) + Z1 + Ep/w = P2/rho_w + V2^2/(2g) + Z2 + ET/w + HL"
  - id: "F5"
    name: "Kinetic energy correction factor (turbulent)"
    expr: "phi = 1 + 2.9297*f - 1.5537*f^(3/2)"
---

## Conservation Equations

### Conservation of Mass

For steady flow, mass flow rate is constant across any cross section:
```
rho1 * A1 * V1 = rho2 * A2 * V2  (compressible)
A1 * V1 = A2 * V2                 (incompressible)
```

### Conservation of Momentum

The momentum flux correction factor θ accounts for the non-uniform velocity profile when using average velocity:

```
theta = 1 + 0.9765 * f  (turbulent flow)
theta = 1.333           (laminar flow, parabolic profile)
```

For most engineering problems with turbulent flow, θ ≈ 1.04 at f = 0.04, and the uniform profile assumption introduces negligible error.

### Conservation of Energy

The general energy equation accounts for all energy forms (potential, pressure, kinetic, heat, mechanical work) per unit weight of fluid:

```
P1/rho_w + phi1*V1^2/(2g) + Z1 + JQ1/w + Ep/w
= P2/rho_w + phi2*V2^2/(2g) + Z2 + JQ2/w + ET/w
```

Energy terms (each in units of length, i.e., feet or meters of fluid):
- **P/ρ**: pressure head
- **V²/2g**: velocity head (with correction factor ϕ for exact value)
- **Z**: elevation head (potential head)
- **JQ/w**: heat energy head
- **Ep/w**, **ET/w**: pump/turbine work heads

### Head Loss

For incompressible flow in a level constant-area pipe without pump, turbine, or external heat transfer:
```
(P1 - P2) / rho_w = Delta(JU) = HL
```

Head loss HL represents conversion of mechanical energy to heat—a loss of useful energy. The **simplified energy equation** for practical engineering use (dropping ϕ, the kinetic energy correction factor):

```
P1/rho_w + V1^2/(2g) + Z1 + Ep/w = P2/rho_w + V2^2/(2g) + Z2 + ET/w + HL
```

### Kinetic Energy Correction Factor

The correction factor ϕ accounts for the non-uniform velocity profile:
```
phi = 1 + 2.9297*f - 1.5537*f^(3/2)  (turbulent flow, Benedict equation)
phi = 2.000                             (laminar flow, parabolic profile)
```

By convention, ϕ is dropped in engineering calculations because:
- For turbulent flow, ϕ ≈ 1.04 or less (negligible for most practical purposes)
- Loss coefficients are derived from experimental data that already implicitly neglects ϕ

### Grade Lines

Plotting each energy term versus pipe length gives:
- **Energy Grade Line** (Total Head Line): sum of pressure, velocity, and elevation heads. Always slopes downward in direction of flow (except at pumps).
- **Hydraulic Grade Line** (Piezometric Head Line): everywhere lower than EGL by the velocity head V²/2g.

At a sudden enlargement, the EGL dips (energy lost to turbulence) while the HGL rises (some kinetic energy recovered as pressure).
