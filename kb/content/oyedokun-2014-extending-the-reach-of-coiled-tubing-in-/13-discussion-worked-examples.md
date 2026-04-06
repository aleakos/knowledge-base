---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/13-discussion-worked-examples"
section: "Chapter VI: Discussion and Worked Numerical Examples"
order: 13
tags:
  - "engineering/coiled-tubing"
  - "engineering/extended-reach"
  - "engineering/worked-example"
  - "engineering/numerical-analysis"
  - "engineering/lockup"
summary: "Numerical worked examples comparing conventional CT and the two-motor configuration, demonstrating reach extension under zero-hookload and lockup conditions."
formulas: []
---

# Chapter VI: Discussion and Worked Numerical Examples

## Overview

Chapter VI applies the analytical models developed in Chapters II–V to concrete numerical examples. The examples compare:

1. **Conventional CT drilling** (single motor, nonrotating string throughout)
2. **Two-motor CT configuration** (rotating segment below second motor)

for the same wellbore geometry and CT parameters.

## Input Parameters Used in Worked Examples

The worked examples use representative values for a typical directional well:

| Parameter | Symbol | Value | Units |
|---|---|---|---|
| CT outer diameter | OD | 2.375 | in |
| CT inner diameter | ID | 1.995 | in |
| CT wall thickness | t | 0.190 | in |
| CT yield strength | σy | 80,000 | psi |
| CT Young's modulus | E | 30 × 10⁶ | psi |
| CT shear modulus | G | 11.5 × 10⁶ | psi |
| Casing inner diameter | IDcsg | 6.184 | in |
| Radial clearance | rc | (6.184 - 2.375)/2 = 1.905 | in |
| Fluid density | ρf | 8.6 | ppg |
| CT buoyed weight/ft | wp | ~2.2 | lb/ft |
| Friction coefficient | μ | 0.3 | — |
| WOB | WOB | 2,000 | lb |

## Wellbore Trajectory

The example well has a standard directional profile:
- **Vertical section**: 0–3,000 ft TVD
- **Build section**: 3,000–3,500 ft TVD (build rate: 6°/100 ft, final inclination: 90°)
- **Lateral section**: 3,500 ft TVD, horizontal, extending to maximum reach

## Example 1: Conventional CT (No Rotation)

For conventional nonrotating CT, the axial force distribution is computed from the bit upward through:

1. **Lateral section**: Helical and sinusoidal buckling in horizontal section
2. **Build section**: Curved wellbore drag
3. **Vertical section**: Standard vertical drag

**Result (conventional CT)**:
- Maximum lateral section length (lockup condition): approximately 3,200 ft
- Maximum total MD at lockup: approximately 3,500 + 3,200 = 6,700 ft MD
- Hookload at lockup MD: positive (lockup precedes zero-hookload in this example)

## Example 2: Two-Motor CT Configuration

For the two-motor configuration, the second motor is placed 500 ft above the bit (rotating segment = 500 ft). The second motor RPM is selected to give a helix angle γ = 45° (equal axial and tangential friction components).

At γ = 45°:
- Effective axial friction coefficient: `μeff = μ * cos 45° = 0.3 * 0.707 ≈ 0.212`
- Reduction in effective axial friction: approximately 29%

**Result (two-motor CT)**:
- Maximum lateral section length (lockup condition): approximately 4,100 ft
- Maximum total MD at lockup: approximately 3,500 + 4,100 = 7,600 ft MD
- Reach extension: 4,100 - 3,200 = **900 ft additional reach** (~28% improvement)

## Example 3: Effect of Rotating Segment Length

The worked examples also investigate how the length of the rotating segment (below the second motor) affects the total reach. Longer rotating segments provide more reach extension but must be kept below the torsional buckling limit.

**Key finding**: There is an optimal rotating segment length that maximizes total reach. Beyond the torsional buckling limit, the benefit of additional rotating length is eliminated. The optimal length coincides with the maximum rotating length calculated in Chapter IV.

## Sensitivity Analysis

The thesis examines sensitivity of reach extension to:

| Parameter | Effect on Reach Extension |
|---|---|
| Higher RPM (larger γ) | Increases reach — more friction redirected to torsional |
| Higher μ | Conventional CT suffers more; two-motor CT is more robust |
| Larger CT diameter | Higher Mcr → longer rotating segment possible → greater benefit |
| Higher WOB | Reduces available compressive capacity for reach |
| Larger rc | Reduces Fcr,s and Fcr,h → shorter lockup length in both cases |

## Discussion: When Is the Two-Motor Configuration Most Beneficial?

The two-motor configuration provides the greatest reach extension benefit when:

1. The lateral section is long (>3,000 ft) — lockup becomes the dominant constraint
2. Friction is moderate to high (μ > 0.25) — more friction to redirect
3. CT is relatively flexible (small EI) — torsional buckling limit is lower but so is lockup length for conventional CT
4. Well trajectory is predominantly horizontal — maximum benefit of rotation in reducing axial drag

The configuration is less beneficial when:
- Wells are primarily vertical or slightly deviated — drag is low, no lockup problem
- Friction is very low (μ < 0.1) — small friction to redirect, marginal benefit
- Wellbore diameter is very large relative to CT (large rc) — early buckling limits both configurations
