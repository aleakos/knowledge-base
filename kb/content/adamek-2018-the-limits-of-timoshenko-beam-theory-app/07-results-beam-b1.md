---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/07-results-beam-b1"
section: "5.1. Results — Beam of Type B1 (Stiff Plies with Thin Soft Interlayer)"
order: 7
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/layered-beams"
  - "engineering/impact"
  - "engineering/wave-propagation"
  - "engineering/results"
summary: "Comparison of FSDT and exact 2D results for glass/PVB/glass beam B1: FSDT gives good deflection estimates but underestimates velocity; cross-section warping is the primary cause of discrepancy."
formulas: []
---

# 5.1. Results — Beam B1: Two Stiff Glass Plies with Thin PVB Interlayer

## Configuration

- Two glass plies: 3 mm each
- PVB interlayer: 0.4 mm
- Total height: 6.4 mm
- Timoshenko shear coefficient: $\kappa = 0.481$ (significantly below 0.833 for homogeneous beam)

## Key Findings

### Deflection
FSDT gives results that can be considered a **quite good approximation** of the real beam deflection across all studied distances $x = \{2, 50, 100\}$ mm. FSDT slightly **underestimates** the deflection.

### Vertical Velocity
Agreement in vertical velocities (dv/dt) is **worse** than for deflection. The FSDT underestimates beam velocity.

### Root Cause: Cross-Section Warping
The primary source of discrepancy is **warping of the beam cross-section** caused by slipping of the glass layers over the soft PVB layer. This is confirmed by analysis of horizontal displacement components from the 2D solution.

- Warping effect is **less pronounced near the vertical beam axis** (x = 2 mm)
- Increases with distance from the loading point

### Wave Arrival Times
Both FSDT and 2D theory give **similar wave arrival times** for all values of $x$. This is consistent with:
- S-wave propagation through the glass layer and PVB layer at different velocities $c_2$
- Dominant flexural wave propagating in the Timoshenko beam at velocity $c_{2T} = 2402\,\text{m/s}$

### FE Validation
Numerical FE results (shown as circle points) are in excellent agreement with the exact 2D analytical solution, confirming both the FE model precision and correctness of the 2D solution evaluation.

## Wave Phenomena (from 2D velocity fields, Fig. 6)

Observed in a 100 mm portion of the beam at selected times:
- Shortly after impact, the thin PVB layer acts as a **"wave shield"** — the lower glass layer is initially unaffected by primary waves
- Over time, the pulse penetrates into the second layer and propagates with a **time delay** through both glass plies

## Effect of Modifications

### Reduction of PVB thickness (3 mm glass / 0.1 mm PVB / 3 mm glass)
- Supports the FSDT planarity assumption
- 1D solution gives **better results**; velocity time histories show improved agreement

### Replacement of PVB by stiffer aluminium alloy 2024Al (3 mm glass / 0.4 mm Al / 3 mm glass)
- Stiffening the interlayer strongly supports FSDT assumptions
- Results of FSDT and exact 2D theory become **nearly identical**

## Summary for B1

| Aspect | FSDT Performance |
|--------|-----------------|
| Deflection | Good approximation (slight underestimate) |
| Velocity | Moderate; agreement worse than deflection |
| Wave arrival times | Good agreement |
| Main limitation | Cross-section warping due to stiff-soft-stiff contrast |
| Improvement strategy | Reduce soft layer thickness or use stiffer interlayer |
