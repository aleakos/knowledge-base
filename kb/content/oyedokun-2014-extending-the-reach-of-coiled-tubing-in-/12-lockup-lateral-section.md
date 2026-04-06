---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/12-lockup-lateral-section"
section: "Chapter V Sections 5.1.3 and 5.2: Maximum Measured Depth and Lockup in Lateral Section"
order: 12
tags:
  - "engineering/coiled-tubing"
  - "engineering/lockup"
  - "engineering/helical-buckling"
  - "engineering/extended-reach"
  - "engineering/maximum-depth"
summary: "Maximum measured depth formulas under zero-hookload and lockup conditions, and lockup analysis in horizontal lateral sections."
formulas:
  - id: "F5.48"
    name: "Maximum lateral section length before lockup — general inclined"
    expr: "ll = |Fcr,s / (ζs*wp*sinφ*√(μ² - μcotφ)) * [arctan(μζh√2 / √(μ² - μcotφ)) - π/2]|"
  - id: "F5.49"
    name: "Maximum lateral section length before lockup — horizontal"
    expr: "ll = |Fcr,s / (μζs*wp) * [arctan(ζh√2) - π/2]|"
---

# Chapter V Sections 5.1.3 and 5.2: Maximum Measured Depth and Lockup in Lateral Section

## 5.1.3 Maximum Measured Depth (Zero-Hookload Condition)

The maximum measured depth under the zero-hookload condition is determined by integrating the axial force distribution from bit to surface, tracking transitions between:
- Unbuckled CT (below Fcr,s): Axial drag from gravity and simple friction
- Sinusoidally buckled CT (Fcr,h < Ft < Fcr,s): Enhanced contact force, moderate extra drag
- Helically buckled CT (Ft < Fcr,h): Dramatically enhanced contact force, severe drag

The calculation proceeds as follows:

1. **Assume a total CT string length** (trial measured depth)
2. **Starting at the bit** with the WOB as the initial compressive load
3. **Move upward through the lateral section**: Apply the helical buckling force transmission equation `F(s)t = 4EI / (μs*rc + 4EI/Ft,b)` while Ft > Fcr,h
4. **Through sinusoidal buckling region**: Apply enhanced drag equation while Fcr,h < Ft < Fcr,s
5. **Through inclined sections**: Apply standard drag equation with gravity and friction
6. **Through vertical section** (if present): Apply vertical drag equations
7. **At surface**: Read computed hookload

If hookload = 0, the assumed depth is the maximum depth under zero-hookload.

## 5.2 Lockup in the Lateral Section

Lockup is the condition where additional surface push produces zero additional axial force at the bit — the string is mechanically frozen. Lockup can occur even when the hookload is still positive (above zero), because the force transmission through the helically buckled section becomes effectively zero.

### Lockup Mechanism

In the helically buckled lateral section, the axial force transmission equation `F(s)t = 4EI / (μs*rc + 4EI/Ft,b)` shows that as s → ∞ (or more precisely, as the buckled length becomes very long):

```
F(s)t → 0   as   s → ∞
```

Regardless of how large Ft,b (the force at the top of the buckled section) becomes, the force at the bottom approaches zero as the buckled length increases. This is the mathematical definition of lockup.

### Maximum Lateral Section Length Before Lockup

The maximum lateral section length that can be drilled before lockup occurs depends on:
- The force available at the top of the lateral section (from the vertical and inclined sections above)
- The critical buckling loads Fcr,s and Fcr,h
- The friction coefficient μ
- The wellbore inclination (in the general case)
- The CT material and geometric properties (EI, wp, rc)

For a general inclined lateral section, the maximum length before lockup is:

```
ll = |Fcr,s / (ζs*wp*sinφ*√(μ² - μcotφ)) * [arctan(μζh√2 / √(μ² - μcotφ)) - π/2]|
```

For a perfectly horizontal lateral section (φ = 90°, cotφ = 0), this simplifies to:

```
ll = |Fcr,s / (μζs*wp) * [arctan(ζh√2) - π/2]|
```

Where:
- `ll` = maximum lateral section length before lockup
- `Fcr,s` = critical sinusoidal buckling load (from Section 5.1)
- `ζs`, `ζh` = sinusoidal and helical buckling friction correction factors
- `wp` = buoyed weight per unit length
- `φ` = wellbore inclination angle
- `μ` = coefficient of friction

### Physical Interpretation

The lockup length formula shows that:
- **Higher friction (larger μ)**: Shorter lockup length — friction causes faster force loss
- **Stiffer CT (larger EI via Fcr,s)**: Longer lockup length — stiffness delays buckling
- **Heavier CT (larger wp)**: Shorter lockup length — weight increases contact force
- **Larger wellbore (larger rc via Fcr,s)**: Shorter lockup length — more room to buckle

### Effect of Second Motor (Rotating Segment) on Lockup Length

For the rotating segment below the second motor, the helix angle γ modifies the effective friction coefficient:

```
μeff,axial = μ * cos γ
```

Substituting μeff,axial for μ in the lockup length formula gives a longer maximum lateral section length. This is the quantitative benefit of the proposed two-motor configuration.

For the nonrotating segment above the second motor, the standard μ applies, and lockup length is unchanged. The total reach benefit comes from the extension provided by the rotating segment beneath the second motor.
