---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/09-maximum-displacement-zero-hookload"
section: "Chapter V: Maximum Displacement — Zero-Hookload Condition"
order: 9
tags:
  - "engineering/coiled-tubing"
  - "engineering/axial-force"
  - "engineering/zero-hookload"
  - "engineering/neutral-point"
  - "engineering/buckling"
  - "engineering/extended-reach"
summary: "Analysis of the zero-hookload condition as a limit on CT reach, including neutral point definition and the framework for sinusoidal and helical buckling axial force models."
formulas:
  - id: "F5.1"
    name: "Critical sinusoidal buckling load — inclined section"
    expr: "Fcr,s = 2ζs √(EI*wp*sinφ / rc)"
  - id: "F5.2"
    name: "Critical sinusoidal buckling load — vertical section"
    expr: "Fcr,s = 2.55*(EI*wp²)^(1/3)"
---

# Chapter V: Maximum Displacement — Zero-Hookload Condition

## 5.1 Overview of CT Reach Limits

The maximum measured depth achievable with CT is governed by two independent conditions, whichever is reached first:

1. **Zero-hookload condition**: The hookload (surface weight indicator reading) falls to zero — all the CT string weight is consumed by friction, and no excess weight remains to push the bit
2. **Lockup condition**: CT buckles helically in the lateral/horizontal section, and the contact forces become so large that no amount of push from surface can advance the string further

Both conditions are analyzed as functions of the CT string geometry, wellbore trajectory, material properties, and operating parameters.

## 5.1 Zero-Hookload Condition

The zero-hookload condition is reached when the sum of all frictional drag forces along the entire CT string (from bit to surface) exactly equals the total buoyed weight of the CT string. At this point, the surface hookload reading is zero.

### Neutral Point

The **neutral point** is the location along the CT string where the axial force transitions from compression (below) to tension (above). In conventional CT drilling:

- Below the neutral point: CT is in compression, subject to buckling
- Above the neutral point: CT is in tension

As more CT is run into the hole in a deviated well:
1. The neutral point moves upward
2. The length of CT in compression increases
3. The buckled length increases, raising contact forces and friction
4. Eventually, the accumulated friction equals the total CT weight → zero hookload

### Governing Buckling Thresholds

The analysis distinguishes three regimes of CT axial force:

1. **Unbuckled CT** (Ft > Fcr,s): CT lies on the low side of the wellbore without buckling
2. **Sinusoidally buckled CT** (Fcr,h < Ft < Fcr,s): CT buckles into a sinusoidal (lateral) mode
3. **Helically buckled CT** (Ft < Fcr,h): CT buckles into a helix, generating much higher contact forces

The critical sinusoidal buckling load for an inclined section is:

```
Fcr,s = 2ζs √(EI*wp*sinφ / rc)
```

For a vertical section (sinφ → 0), the formula becomes:

```
Fcr,s = 2.55*(EI*wp²)^(1/3)
```

Where:
- `ζs` = sinusoidal buckling correction factor for friction (dimensionless; ζs = 1 in frictionless case)
- `EI` = bending stiffness of CT
- `wp` = buoyed weight per unit length
- `φ` = wellbore inclination angle
- `rc` = radial clearance between CT and wellbore

### Friction Correction Factors

The correction factors ζs (sinusoidal) and ζh (helical) account for the effect of friction on the critical buckling load:

- In frictionless wellbores: ζs = ζh = 1
- In high-friction wellbores: ζs and ζh are greater than 1, meaning higher compressive loads are required to initiate buckling (friction provides some lateral restraint)

The correction factors are tabulated in the thesis as functions of the friction coefficient μ and wellbore inclination φ.

### Axial Force Profile for Zero-Hookload Calculation

The maximum measured depth under the zero-hookload condition is found by:

1. Assume a total CT length (bit depth = total MD)
2. Compute axial force distribution from bit to surface, accounting for buckling-enhanced contact forces in helically and sinusoidally buckled sections
3. Check if hookload at surface = 0
4. If hookload > 0: CT has not yet reached zero-hookload limit — increase MD
5. If hookload < 0 (impossible physically, implies string is being pushed): CT has exceeded the zero-hookload limit
6. The maximum MD under zero-hookload is where hookload = 0

The detailed axial force distribution models for sinusoidally and helically buckled sections are derived in Sections 5.1.1 and 5.1.2 (see chunks 10 and 11).
