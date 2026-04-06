---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/09-results-beam-b3"
section: "5.3. Results — Beam of Type B3 (Stiff-Core Sandwich Beam)"
order: 9
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/sandwich-beam"
  - "engineering/impact"
  - "engineering/wave-propagation"
  - "engineering/results"
summary: "FSDT performs excellently for stiff-core beam B3 (Al/Steel/Al): deflection error under 4%, velocity error under 25% (mainly time-shift artefact), confirming FSDT applicability when layer wave velocities are similar."
formulas: []
---

# 5.3. Results — Beam B3: Stiff-Core Sandwich (Aluminium Face Sheets / Steel Core)

## Configuration

- Two aluminium alloy 2024Al face sheets: 0.4 mm each
- Steel core: 5.6 mm
- Total height: 6.4 mm
- $\kappa = 0.973$ (very close to homogeneous value of 0.833, indicating near-uniform shear distribution)

## Physical Reasoning for Good FSDT Performance

Both materials being combined are **sufficiently stiff** (see Table 1 in the paper):
- Warping effect is minimal
- Transverse beam contraction is minimal
- Both materials have **very similar characteristic wave velocities** (steel: $c_3 = 5439\,\text{m/s}$, $c_2 = 3218\,\text{m/s}$; 2024Al: $c_3 = 5438\,\text{m/s}$, $c_2 = 3076\,\text{m/s}$)

These conditions strongly support the validity of the FSDT plane-section assumption.

## Key Results: Basic B3 Composition (0.4 mm Al / 5.6 mm Steel / 0.4 mm Al)

### Deflection
- Time histories $v(t)$ from FSDT and 2D theory **coincide** for all studied values of $x$
- Maximum relative error $\delta$ over all $x$ and $t$: **3.6%**

### Vertical Velocity
- Agreement is naturally somewhat worse than for deflection
- Maximum error $\delta = 25\%$ for $x = 100\,\text{mm}$ at $t \approx 37.8\,\mu\text{s}$
- This error is **a consequence of time shift** between solutions due to slightly different S-wave velocities in steel (3218 m/s) and 2024Al (3076 m/s), not a fundamental accuracy failure

## Modified B3 Composition (2 mm Al / 2.4 mm Steel / 2 mm Al)

Layers of more comparable thicknesses:
- Similarly great agreement between FSDT and exact 2D theory
- Time shift of both solutions is **greater** (due to S-wave delay in the thicker aluminium layer)
- Qualitative behaviour remains the same

## Extended Pulse Duration ($t_0 = 200\,\mu\text{s}$)

Tested for $x = \{2, 50, 100, 300, 500\}\,\text{mm}$ and $t \in [0, 1]\,\text{ms}$:
- Maximum error in deflection $v(t)$: $\delta = 0.6\%$
- Maximum error in vertical velocity $dv/dt$: $\delta = 1.5\%$

**Excellent agreement** in all cases.

## Wave Phenomena (from 2D velocity fields, Fig. 11)

The total velocity field shows:
- The beam state becomes **nearly homogeneous through the thickness very soon** after impact
- State extends further from the point of excitation rapidly
- Transient phenomena quickly disappear
- Contrast with B1 (PVB acts as wave shield) and B2 (extreme velocity contrast causes complex wave patterns)

This uniform through-thickness behaviour is the physical basis for why FSDT works well for B3.

## Summary for B3

| Aspect | FSDT Performance |
|--------|-----------------|
| Deflection | Excellent (max error ~3.6%) |
| Velocity | Good (time-shift artefact ~25% peak, not amplitude error) |
| Wave arrival times | Good (slight shift from velocity mismatch) |
| Wave-through-thickness uniformity | High — FSDT assumptions well satisfied |
| Use of FSDT | Reliable for engineering use |

**Conclusion:** FSDT is well-suited for beams where all layers have similar stiffness and wave velocities, regardless of whether the layers are thin or thick relative to each other.
