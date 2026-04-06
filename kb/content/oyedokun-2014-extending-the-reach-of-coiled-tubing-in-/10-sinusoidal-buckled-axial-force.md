---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/10-sinusoidal-buckled-axial-force"
section: "Chapter V Section 5.1.1: Axial Force Distribution in Sinusoidally Buckled CT"
order: 10
tags:
  - "engineering/coiled-tubing"
  - "engineering/sinusoidal-buckling"
  - "engineering/axial-force"
  - "engineering/friction"
  - "engineering/buckling"
summary: "Axial force distribution model for CT in the sinusoidal buckling regime, including contact force enhancement and force transmission equations."
formulas:
  - id: "F5.1r"
    name: "Critical sinusoidal buckling load — inclined"
    expr: "Fcr,s = 2ζs √(EI*wp*sinφ / rc)"
  - id: "F5.33"
    name: "Axial force in helically buckled segment (force transmission)"
    expr: "F(s)t = 4EI / (μs*rc + 4EI/Ft,b)"
  - id: "F5.34"
    name: "Length of helically buckled segment"
    expr: "l = |4EI*(Ft,t - Ft,b) / (μ*rc*Ft,t*Ft,b)|"
---

# Chapter V Section 5.1.1: Axial Force Distribution in Sinusoidally Buckled CT

## Overview

When the compressive axial force in CT exceeds the critical sinusoidal buckling load Fcr,s but remains below the helical buckling load Fcr,h, the CT adopts a sinusoidal (lateral) buckled shape — lying in a plane on the low side of the wellbore in an inclined section.

In sinusoidally buckled CT, the primary effect on axial force distribution is an **increase in the normal contact force** between CT and wellbore, which increases friction and reduces the rate of force transmission.

## Contact Force in Sinusoidal Buckling

In the sinusoidal buckling mode, the CT makes periodic contact with the wellbore wall at the peaks of each sinusoidal half-wave. The contact forces at these points are concentrated (not distributed), but an equivalent distributed contact force per unit length can be defined for analysis purposes.

The enhanced contact force due to sinusoidal buckling is added to the gravity-induced contact force:

```
wc,total = wc,gravity + wc,buckling,sinusoidal
```

For inclined sections:
- `wc,gravity = wp * sinφ` (gravity component normal to wellbore axis)
- `wc,buckling,sinusoidal` = additional contact force from the buckled shape geometry

The sinusoidal buckling contact force enhancement is smaller than in the helical case, so axial force loss per unit length is less severe in the sinusoidal regime.

## Force Transmission in Sinusoidal Buckling Regime

In the sinusoidal buckling regime, the axial force can still be transmitted from the top of the buckled section to the bottom, but with greater loss per unit length than in the unbuckled case. The force balance along the sinusoidally buckled section accounts for:

1. The enhanced contact forces from the buckled geometry
2. The Coulomb friction acting on the enhanced contact forces
3. The CT self-weight component along the axis

The axial force distribution in this regime is analyzed as an intermediate case between the simple unbuckled drag equation and the more severe helical buckling force transmission equation.

## Sinusoidal Buckling Critical Loads with Friction Correction

The critical sinusoidal buckling load with friction correction is:

```
Fcr,s = 2ζs √(EI*wp*sinφ / rc)
```

The correction factor ζs is a function of μ and φ. Representative values from the thesis:
- μ = 0.2, φ = 30°: ζs ≈ 1.05
- μ = 0.3, φ = 45°: ζs ≈ 1.08
- μ = 0.4, φ = 90°: ζs ≈ 1.12

The friction correction is relatively modest for sinusoidal buckling.

## Transition to Helical Buckling

The critical helical buckling load Fcr,h marks the transition from sinusoidal to helical buckling. Below Fcr,h (more compressive), helical buckling initiates and contact forces increase dramatically.

The critical helical load is approximately:
```
Fcr,h ≈ √2 * Fcr,s
```

In more precise form (with friction correction):
```
Fcr,h = 2√2 * ζh √(EI*wp*sinφ / rc)
```

## Helical Buckling Axial Force Transmission

Once CT transitions into helical buckling, the axial force transmission equation changes significantly. The force transmission in the helically buckled segment follows a non-linear differential equation. The integrated solution gives the axial force at a distance s from the bottom of the helically buckled segment:

```
F(s)t = 4EI / (μs*rc + 4EI/Ft,b)
```

Where:
- `F(s)t` = axial force at distance s from the bottom of the buckled section
- `μs` = friction coefficient for the helically buckled contact (may differ from straight section μ)
- `rc` = radial clearance
- `Ft,b` = axial force at the bottom boundary of the buckled section
- `s` = measured distance from the bottom of the buckled section

The length of the helically buckled segment between two known force values (top and bottom) is:

```
l = |4EI*(Ft,t - Ft,b) / (μ*rc*Ft,t*Ft,b)|
```

Where:
- `Ft,t` = axial force at the top of the buckled section
- `Ft,b` = axial force at the bottom of the buckled section

**Physical significance**: The helical buckling force transmission equation shows that the axial force decreases rapidly along the buckled section — much faster than in unbuckled CT. This is the fundamental cause of CT lockup in horizontal wells.
