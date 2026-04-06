---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/02-3d-torque-drag-methodology"
section: "Chapter II: 3D Torque and Drag Methodology"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/tubular-mechanics"
  - "engineering/soft-string-model"
summary: "Soft-string model equations for normal contact force and axial drag/torque in build, hold, drop, and turning wellbore sections, for both lowering and pulling operations."
formulas:
  - id: "F1"
    name: "Normal contact force — build section (lowering)"
    expr: "N = sqrt( (F * delta_alpha)^2 + (F * sin(alpha) * delta_phi)^2 )  where F = axial force, delta_alpha = inclination change, delta_phi = azimuth change"
  - id: "F2"
    name: "Axial force increment — lowering (build section)"
    expr: "delta_F = W * cos(alpha) - mu * N  where W = buoyed pipe weight per unit length, alpha = inclination, mu = friction factor"
  - id: "F3"
    name: "Axial force increment — pulling (build section)"
    expr: "delta_F = W * cos(alpha) + mu * N"
  - id: "F4"
    name: "Torque increment"
    expr: "delta_T = mu * N * r  where r = pipe outer radius"
  - id: "F5"
    name: "Soft-string 3D contact force (general)"
    expr: "N = sqrt( (F*delta_alpha)^2 + (F*sin(alpha_avg)*delta_phi)^2 )"
---

# Chapter II: 3D Torque and Drag Methodology

## Original Concept: Normal Contact Force

The foundational insight of T&D modeling is that friction between drillpipe and wellbore is proportional to the **normal contact force** N (force pressing pipe against wellbore wall). The friction force is:

```
F_friction = mu * N
```

where mu is the friction factor (Coulomb friction coefficient), typically 0.15–0.35 for oil-based mud and 0.25–0.45 for water-based mud.

## Soft-String Model

The soft-string model treats the drillstring as a flexible cable with no bending stiffness. Forces on a differential element of pipe are:
- Axial tension/compression (F).
- Buoyed pipe weight (W per unit length).
- Normal contact force (N) from the wellbore wall.
- Friction force (mu * N) opposing pipe motion.
- Torque (T) from torsional friction at contact.

### Contact Force in 3D

For a curved wellbore section, the pipe is pressed against the wellbore by centripetal effects from both inclination change and azimuth change:

```
N = sqrt( (F * delta_alpha)^2 + (F * sin(alpha_avg) * delta_phi)^2 )
```

where:
- delta_alpha = change in inclination angle over element
- delta_phi = change in azimuth angle over element
- alpha_avg = average inclination of element
- F = local axial force in pipe

## Equations for Each Wellbore Section

### Lowering Pipe into Hole

**Build Section** (inclination increasing):

```
N_build = sqrt( (F * delta_alpha)^2 + (F * sin(alpha) * delta_phi)^2 )
delta_F = W * cos(alpha_avg) - mu * N_build       (friction opposes downward motion)
delta_T = mu * N_build * r
```

Sign convention: positive delta_alpha increases inclination; N is always a positive magnitude.

**Hold Section** (constant inclination, no azimuth change):

```
N_hold = W * sin(alpha) * delta_L    (pipe weight component pressing on low side)
delta_F = W * cos(alpha) - mu * N_hold
delta_T = mu * N_hold * r
```

**Drop Section** (inclination decreasing):

The contact force sign changes: the pipe presses against the **high side** of the wellbore in the drop section, not the low side. The thesis carefully derives the sign of N depending on whether the pipe is in tension or compression.

```
N_drop (lowering) = sqrt( (F * delta_alpha)^2 + (F * sin(alpha) * delta_phi)^2 )
```

Friction direction: opposes downward motion. The sign of the normal force changes the direction of axial force increment contribution.

**Turning Section** (azimuth change):

When the wellbore changes azimuth (turns left or right), the contact force in the horizontal plane is:

```
N_turn = F * sin(alpha_avg) * delta_phi
```

This acts in the horizontal plane (pushing pipe to the outside of the turn).

### Pulling Pipe out of Hole

The same equations apply with the friction term reversed (opposes upward motion):

```
delta_F_pull = W * cos(alpha) + mu * N    (friction now adds to required pull force)
```

This increases the hook load required to pull the pipe out compared to lowering it.

## Conclusion: Chapter II

The new derivations in this chapter provide more rigorous sign conventions and explicit equations for each wellbore type (build, hold, drop, turn), for both lowering and pulling operations. This corrects ambiguities in previous published models and provides a foundation for the 3D software implementation.
