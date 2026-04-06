---
parent_id: "nour-2022-novel-torque-and-drag-model-for-drilling"
chunk_id: "nour-2022-novel-torque-and-drag-model-for-drilling/02-mathematical-model"
section: "Mathematical Modeling"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/tubular-mechanics"
summary: "Derivation of the simplified soft-string T&D model equations covering normal force, drag, geometric torque, viscous torque, TDS torque loss, and bit torque."
formulas:
  - id: "F1"
    name: "Normal Force"
    expr: "N = w * Δl * β * sin(θ)"
  - id: "F2"
    name: "Drag (Tension Increment)"
    expr: "ΔT = w * Δl * β * sin(θ) * μ"
  - id: "F3"
    name: "Geometric Torque Component"
    expr: "ΔM_geometric = w * Δl * β * sin(θ) * μ * (D/24)"
  - id: "F4"
    name: "Viscous Shear Stress (Herschel-Bulkley)"
    expr: "τ = τ_y + K * γ^n"
  - id: "F5"
    name: "Shear Rate"
    expr: "γ = π * D * RPM / [30 * (D_h - D)]"
  - id: "F6"
    name: "Viscous Torque Component"
    expr: "ΔM_viscous = [τ_y + K * (π*D*RPM / 30*(D_h-D))^n] * π*D²*Δl / 28800"
  - id: "F7"
    name: "TDS Torque Loss"
    expr: "M_TDS = α_f * RPM^a + α_l * RPM^b * HL^c"
  - id: "F8"
    name: "Bit Torque"
    expr: "M_BIT = μ_B * WOB * D_B / 36"
  - id: "F9"
    name: "Pickup Weight"
    expr: "P/U wt = Σ (μ * w_i * Δl_i * β * sin(θ_i) + w_i * Δl_i * β * cos(θ_i))"
  - id: "F10"
    name: "Slack-Off Weight"
    expr: "S/O wt = Σ (μ * w_i * Δl_i * β * sin(θ_i) - w_i * Δl_i * β * cos(θ_i))"
  - id: "F11"
    name: "Rotating Weight"
    expr: "Rotating wt = Σ (w_i * Δl_i * β * cos(θ_i))"
  - id: "F12"
    name: "Off-Bottom Torque"
    expr: "M_off-bottom = Σ (ΔM_geometric_i + ΔM_viscous_i) + M_TDS"
  - id: "F13"
    name: "On-Bottom Torque"
    expr: "M_on-bottom = Σ (ΔM_geometric_i + ΔM_viscous_i) + M_TDS + M_BIT"
---

# Mathematical Modeling

## Model Overview

The model divides the drill string into small sections along the wellbore. For each section, the inclination angle is taken as the average of the start and end inclination. The model computes normal force, drag (hook loads), and torque components (geometric, viscous, TDS, bit) for every segment and sums from bit to TDS.

### Assumptions and Limitations

- Coulomb friction: friction force proportional to normal load, independent of contact area
- No significant change in borehole azimuth (2D wells only)
- Curved intervals are approximated as straight segments
- Segment lengths should not exceed 100 ft
- Suitable for wells with DLS up to 8–11°/100 ft

## Geometric Torque and Hook Load Components

**Normal force** per segment (F1):
```
N = w * Δl * β * sin(θ)
```
where `w` = air weight of pipe (lb/ft), `Δl` = segment length (ft), `β` = buoyancy factor, `θ` = average inclination angle.

**Tension increment / drag** (F2):
```
ΔT = w * Δl * β * sin(θ) * μ
```
Tension is accumulated from bit (T ≈ 0) upward: `T2 = T1 + ΔT`.

**Geometric torque per segment** (F3):
```
ΔM_geometric = w * Δl * β * sin(θ) * μ * (D/24)
```
where `D` = pipe outer diameter (inches).

## Viscous Torque Component

Using the Herschel-Bulkley (yield-power law) model, shear stress at the pipe wall (F4):
```
τ = τ_y + K * γ^n
```

Shear rate from rotation (F5):
```
γ = π * D * RPM / [30 * (D_h - D)]
```

Viscous torque per segment (F6):
```
ΔM_viscous = [τ_y + K * (π*D*RPM / 30*(D_h-D))^n] * π*D²*Δl / 28800
```

In practice, viscous torque is typically less than 2% of total torque in high-angle wells.

## TDS Torque Loss

An empirical equation captures the reactive torque of the top drive system (F7):
```
M_TDS = α_f * RPM^a + α_l * RPM^b * HL^c
```

Constants (`α_f`, `a`, `α_l`, `b`, `c`) are determined from field calibration:
- Measure free-running TDS torque at two RPM values to find `α_f` and `a`
- Measure loaded TDS torque at three (RPM, HL) combinations to solve for `α_l`, `b`, `c`

**Calibration requirements:**
- Measurements taken in vertical cased section (no wellbore friction contribution)
- Corrected for viscous drag
- Surface gauges (torque, RPM, hook load) must be calibrated

## Bit Torque

Bit-induced torque (F8):
```
M_BIT = μ_B * WOB * D_B / 36
```
where `μ_B` = bit aggressiveness (dimensionless), `WOB` = weight on bit (lb), `D_B` = bit diameter (in).

## Summary Equations

**Hook loads (drag):**
- Pickup weight (F9): `P/U wt = Σ (μ * w_i * Δl_i * β * sin(θ_i) + w_i * Δl_i * β * cos(θ_i))`
- Slack-off weight (F10): `S/O wt = Σ (μ * w_i * Δl_i * β * sin(θ_i) - w_i * Δl_i * β * cos(θ_i))`
- Rotating weight (F11): `Rotating wt = Σ (w_i * Δl_i * β * cos(θ_i))`

**Torque:**
- Off-bottom torque (F12): `M_off-bottom = Σ (ΔM_geometric_i + ΔM_viscous_i) + M_TDS`
- On-bottom torque (F13): `M_on-bottom = Σ (ΔM_geometric_i + ΔM_viscous_i) + M_TDS + M_BIT`
