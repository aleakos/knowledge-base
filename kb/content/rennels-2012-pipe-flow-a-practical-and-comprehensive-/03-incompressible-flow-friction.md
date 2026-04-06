---
parent_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-"
chunk_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-/03-incompressible-flow-friction"
section: "Incompressible Flow and Surface Friction"
order: 3
tags:
  - "engineering/fluid-mechanics"
  - "engineering/pipe-flow"
  - "engineering/friction-factor"
summary: "Incompressible flow head loss equation, Darcy-Weisbach friction factor, Colebrook-White equation, Moody chart, and explicit friction factor approximations"
formulas:
  - id: "F1"
    name: "Darcy-Weisbach head loss equation"
    expr: "HL = f * (L/D) * V^2/(2g) = K * V^2/(2g)"
  - id: "F2"
    name: "Laminar friction factor"
    expr: "f = 64 / N_Re"
  - id: "F3"
    name: "Colebrook-White equation (implicit)"
    expr: "1/sqrt(f) = -2*log10(epsilon/(3.7*D) + 2.51/(N_Re*sqrt(f)))"
  - id: "F4"
    name: "Churchill 1977 all-regime formula"
    expr: "f = 8*[(8/N_Re)^12 + (A + B)^(-3/2)]^(1/12)"
  - id: "F5"
    name: "Pressure drop from loss coefficient"
    expr: "delta_P = K * w^2 / (2*g*A^2*rho_w)"
---

## Incompressible Flow and Surface Friction

### Head Loss Equation

For incompressible flow, the conventional head loss due to pipe friction is given by the Darcy-Weisbach equation:
```
HL = f * (L/D) * V^2/(2g)
```
where:
- f = Darcy friction factor (dimensionless)
- L = pipe length
- D = inside diameter
- V = average velocity
- g = acceleration of gravity

The loss coefficient K = f * L/D, so HL = K * V²/(2g).

Pressure drop:
```
delta_P = K * w^2 / (2*g*A^2*rho_w)
```

### Friction Factor Regimes

**Laminar flow** (NRe < 2000):
```
f = 64 / N_Re
```
Velocity profile is parabolic; friction factor depends only on Reynolds number.

**Critical zone** (2000 < NRe < 4000): Unstable; friction factor unpredictable.

**Turbulent flow** (NRe > 4000):
- **Smooth pipes** (Prandtl): 1/√f = 2.0 log10(NRe √f) − 0.8
- **Rough pipes** (von Kármán): 1/√f = 2.0 log10(D/ε) + 1.74
- **Transition** (Colebrook-White, 1939):
```
1/sqrt(f) = -2 * log10(epsilon/(3.7*D) + 2.51/(N_Re*sqrt(f)))
```

This implicit equation must be solved iteratively (e.g., by successive substitution or Newton-Raphson).

### Explicit Friction Factor Approximations

Several explicit approximations to the Colebrook-White equation exist:

| Formula | Author | Accuracy |
|---------|--------|---------|
| Moody's approximate | Moody (1944) | ±5% |
| Swamee and Jain | 1976 | ±3% |
| Chen's formula | Chen (1979) | ±0.05% |
| Haaland's formula | Haaland (1983) | ±1.5% |

**Churchill (1977) all-regime formula** — valid for all Reynolds numbers:
```
f = 8 * [(8/N_Re)^12 + (A + B)^(-3/2)]^(1/12)
```
where A and B are functions of NRe and ε/D. This single formula covers laminar, critical, and turbulent regimes.

### Surface Roughness

Absolute roughness ε values for common pipe materials (new, clean):

| Material | ε (mm) |
|----------|--------|
| Drawn tubing | 0.0015 |
| Commercial steel | 0.046 |
| Cast iron | 0.26 |
| Concrete | 0.3–3.0 |

For aged/corroded pipe, roughness increases significantly (moderately corroded steel: ε ≈ 0.2–0.5 mm).

### Sources of Head Loss

Two principal sources:
1. **Surface friction**: dominant in long straight pipes; quantified by the Darcy-Weisbach equation
2. **Induced turbulence**: due to fittings, bends, valves, contractions, expansions; quantified by local loss coefficients K

Loss coefficients are primarily a function of fitting geometry; Reynolds number effects are secondary. Loss coefficients for different pipe areas are combined by area-normalisation:
```
K_combined = K_a * (A_ref/A_a)^2
```
where A_ref is the standardized reference area (usually the main pipe area).
