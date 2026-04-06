---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/06-torsional-buckling"
section: "Chapter III: Torsional Buckling of CT"
order: 6
tags:
  - "engineering/coiled-tubing"
  - "engineering/torsional-buckling"
  - "engineering/buckling"
  - "engineering/mechanics"
  - "engineering/wellbore"
summary: "Analysis of torsional buckling of the rotating CT segment in vertical, inclined, and curved wellbore sections, with critical torque formulas and summary table."
formulas:
  - id: "F3.1"
    name: "Buckling mode displacement parameter"
    expr: "δ = 2π²rc²l / ρ²"
  - id: "F3.2"
    name: "Strain energy of buckled CT"
    expr: "Ub = 8π⁴rc²EIl / ρ⁴"
  - id: "F3.8"
    name: "Critical torque — vertical section (with axial load)"
    expr: "Mcr = (1/4) * (8π²EI - 2F̄t*l² + wp*l³) / (l*π)"
  - id: "F3.9"
    name: "Critical torque — vertical section (gravity dominant)"
    expr: "Mcr = 3πEI / (4EI*π²/wp)^(1/3)"
  - id: "F3.10"
    name: "Half-buckling-wave length — vertical section"
    expr: "l = (4π²EI / wp)^(1/3)"
  - id: "F3.12"
    name: "Critical torque — inclined straight section"
    expr: "Mcr = (1/4) * (8π⁴rc*EI - 2F̄t*rc*π²l² + wp*rc*π²cosφ*l³ + wp*sinφ*l⁴) / (l*rc*π³)"
  - id: "F3.14"
    name: "Critical torque — curved (build) section"
    expr: "Mcr = (1/4) * (8π⁴rc*EI - 2F̄t*rc*π²l² + wp*rc*π²cosφ*l³*R + wp*R*sinφ*l⁴ + F̄t*l⁴) / (l*rc*π³)"
---

# Chapter III: Torsional Buckling of CT

## 3.1 Introduction to Torsional Buckling

Torsional buckling occurs when the applied torque in a slender rod exceeds a critical value, causing the rod to buckle laterally into a helical or sinusoidal mode shape. For the rotating CT segment, the torque applied by the second motor, combined with any compressive or tensile axial load and gravity, determines the onset of torsional instability.

The analysis uses an energy method (Rayleigh-Ritz) to find the critical torque Mcr at which the total potential energy of the system has a stationary point corresponding to a buckled configuration.

The assumed buckled mode shape for CT in a wellbore is a sinusoidal displacement confined within the radial clearance rc between CT and wellbore:

```
δ = 2π²rc²l / ρ²
```

Where:
- `rc` = radial clearance = (ID_casing - OD_CT) / 2
- `l` = half-wavelength of the buckled shape
- `ρ` = radius of gyration of CT cross-section

The strain energy stored in the buckled configuration is:

```
Ub = 8π⁴rc²EIl / ρ⁴
```

## 3.2 Torsional Buckling in Vertical Sections

In a vertical wellbore, gravity acts along the wellbore axis. The CT rests on the low side of the wellbore only under its own weight (no side component). The critical torque for the onset of torsional buckling in a vertical section, including the effect of axial load F̄t (positive = tension), is:

```
Mcr = (1/4) * (8π²EI - 2F̄t*l² + wp*l³) / (l*π)
```

When axial load effects are negligible relative to gravity (gravity-dominant case), the critical torque simplifies to:

```
Mcr = 3πEI / (4EI*π²/wp)^(1/3)
```

The corresponding optimal half-wavelength is:

```
l = (4π²EI / wp)^(1/3)
```

**Physical interpretation**: Heavier CT (larger wp) buckles torsionally at a shorter wavelength and lower critical torque. Stiffer CT (larger EI) requires a higher critical torque.

## 3.3 Torsional Buckling in Inclined Straight Sections

In an inclined wellbore at angle φ from vertical, gravity has components both along and perpendicular to the wellbore axis. The CT rests on the low side of the wellbore with a side contact force proportional to sin φ. The critical torque for torsional buckling in an inclined straight section is:

```
Mcr = (1/4) * (8π⁴rc*EI - 2F̄t*rc*π²l² + wp*rc*π²cosφ*l³ + wp*sinφ*l⁴) / (l*rc*π³)
```

**Key observations**:
- At φ = 0 (vertical), this reduces to the vertical section formula
- As φ increases toward 90° (horizontal), the sinφ term increases the effective confinement, raising Mcr
- Compressive axial load (negative F̄t) reduces Mcr

## 3.4 Torsional Buckling in Curved (Build) Sections

In curved wellbore sections (build/drop), the radius of curvature R creates additional geometric effects. The critical torque for a build section with radius R is:

```
Mcr = (1/4) * (8π⁴rc*EI - 2F̄t*rc*π²l² + wp*rc*π²cosφ*l³*R + wp*R*sinφ*l⁴ + F̄t*l⁴) / (l*rc*π³)
```

The additional terms involving R reflect the fact that the curvature of the wellbore creates a centripetal-like normal force on the CT, which modifies the contact force distribution and the critical buckling torque.

## 3.5 Summary Table: Critical Torsional Buckling Torque

| Wellbore Section | Critical Torque Expression | Governing Parameters |
|---|---|---|
| Vertical | `Mcr = 3πEI / (4EI*π²/wp)^(1/3)` | EI, wp |
| Inclined straight | Eq. 3.12 | EI, wp, φ, rc, F̄t |
| Curved (build) | Eq. 3.14 | EI, wp, φ, rc, F̄t, R |

**Table 3.1** (from paper): The critical torque values increase from vertical to inclined sections — it is harder to buckle CT torsionally in inclined sections because the wellbore wall provides more confinement on the low side.

## 3.6 Design Implication

The critical torque Mcr sets the upper bound on the torque that the second motor can deliver to the rotating CT segment without causing torsional buckling. The maximum rotating length (analyzed in Chapter IV) is derived from this constraint combined with the accumulated torque from friction over the rotating segment length.
