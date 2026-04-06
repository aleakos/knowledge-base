---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/02-3d-td-methodology"
section: "3D Torque and Drag Calculation Methodology"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/tubular-mechanics"
summary: "Mathematical development of 3D torque and drag equations for build, hold, and drop wellbore sections, including soft-string normal contact force model and lowering/pulling equations."
formulas:
  - id: "F1"
    name: "Normal contact force (inclined/hold section)"
    expr: "N = W*sin(I)"
  - id: "F2"
    name: "Total normal contact force (soft-string 3D)"
    expr: "N_total = sqrt((T*sin(delta_phi))^2 + (T*delta_I + W*sin(I))^2)"
  - id: "F3"
    name: "Tension change (lowering, hold section)"
    expr: "delta_F = mu * N_total - W*cos(I)"
  - id: "F4"
    name: "Torque change"
    expr: "M = mu * N * R"
  - id: "F5"
    name: "Normal force in build section (lowering)"
    expr: "N = W*cos(alpha) + F_c(alpha)/R"
  - id: "F6"
    name: "Normal force from wellbore azimuth turn"
    expr: "N_turn = 2*T*sin(delta_phi/2) approximately T*delta_phi"
---

# 3D Torque and Drag Calculation Methodology

## Coordinate System

The wellbore is analyzed in two planes:
- **Vertical view**: Contains inclination angle (build, hold, drop sections)
- **Horizontal view**: Contains azimuth angle (turns left or right)

## Normal Contact Force (Original Concept)

For rotation off bottom (no friction), the normal contact force is derived from equilibrium:

**Build section** (increasing inclination):
```
N = W*sin(I) - 2*T*sin(delta/2)
```
where W = buoyed pipe weight per unit length, I = inclination, T = tension, delta = dogleg severity

**Hold/inclined section** (constant inclination):
```
N = W*sin(I)
```

**Drop section** (decreasing inclination):
```
N = W*sin(I) + 2*T*sin(delta/2)
```

**Azimuth turn (horizontal plane)**:
```
N_turn = 2*T*sin(delta_phi/2)  approximately  T*delta_phi
```

## Soft-String Model for 3D T&D

The soft-string model computes total normal contact force in 3D as the vector sum of the vertical-plane and horizontal-plane components:

```
N_total = sqrt((T*sin(delta_phi))^2 + (T*delta_I + W*sin(I))^2)
```

From N_total, tension and torque changes per unit length are:
```
Tension:  delta_T = +/- mu * N_total (+/- W*cos(I))   [sign depends on direction]
Torque:   delta_M = mu * N_total * R_pipe
```

where mu = coefficient of friction, R_pipe = pipe outer radius.

## Lowering the Pipe into the Hole

### Build Section
Normal force includes effect of curvature and tension:
```
N = W*cos(alpha) + F_c(alpha)/R
```
Axial force equation (ODE form):
```
dF/d(alpha) = mu * N * R - W*R*sin(alpha)   [for N > 0]
dF/d(alpha) = -mu * N * R - W*R*sin(alpha)  [for N < 0]
```
The N < 0 condition (pipe lifting off low side of wellbore) occurs at certain inclination ranges and must be tracked separately.

### Hold Section
```
N = W*sin(I)
N_total = sqrt(N^2 + N_turn^2)
delta_F = mu * N_total - W*cos(I)
```

### Drop Section
Similar to build but with opposite sign on curvature contribution:
```
N = W*cos(alpha) - F_c(alpha)/R
```
Sign switching (N changing from positive to negative) requires special handling.

### Azimuth Turning
When wellbore turns right or left (horizontal view), additional normal contact force acts:
```
N_turn = F_c(phi) / R_turn
```
This adds a term to N_total that increases friction independently of inclination.

## Pulling the Pipe out of the Hole

The same structural framework applies, but friction direction reverses:

```
delta_F = -mu * N_total - W*cos(I)   [build, pulling out]
delta_F = -mu * N_total + W*cos(I)   [hold, pulling out]
```

In the drop section, the interaction between weight component and friction direction again requires tracking the sign of N through the section.

## Rotation (Off Bottom and On Bottom)

For rotation off bottom:
- No axial movement, so no axial friction component
- Torque per unit length: `dM/ds = mu * N * R_pipe`
- Integrating from bottom to surface gives total surface torque

For rotating on bottom (adding weight-on-bit):
- Same as rotating off bottom but with boundary condition `F_bottom = WOB` (weight on bit)

For sliding (no rotation):
- Same equations as lowering/pulling
- Torque = 0 (no rotational friction)

## Summary of T&D Equations by Section Type

| Section | Condition | Normal Force |
|---|---|---|
| Build | Vertical only | `W*cos(I) + F_c/R` |
| Hold | Vertical + azimuth | `sqrt((W*sin(I))^2 + (F_c/R_turn)^2)` |
| Drop | Vertical only | `W*cos(I) - F_c/R` |
| Azimuth turn | Horizontal only | `F_c/R_turn` |
