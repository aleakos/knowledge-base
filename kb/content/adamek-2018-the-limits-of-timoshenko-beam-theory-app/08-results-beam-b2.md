---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/08-results-beam-b2"
section: "5.2. Results — Beam of Type B2 (Soft-Core Sandwich Beam)"
order: 8
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/sandwich-beam"
  - "engineering/impact"
  - "engineering/wave-propagation"
  - "engineering/results"
summary: "FSDT is inadequate for soft-core sandwich beam B2 (steel/Divinycell/steel): significant discrepancies in deflection, velocity, and wave arrival times due to transverse beam pulsation, warping, and wavelength-thickness conflict."
formulas: []
---

# 5.2. Results — Beam B2: Soft-Core Sandwich (Steel Face Sheets / Divinycell H160 Core)

## Configuration

- Two steel face sheets: 0.4 mm each
- Divinycell H160 foam core: 5.6 mm
- Total height: 6.4 mm
- $\kappa = 0.881$
- Core wave velocities: $c_3 = 1237\,\text{m/s}$, $c_2 = 675\,\text{m/s}$ (very low)

## Key Findings

### Dramatic Differences Between 1D and 2D Solutions
The comparison reveals **significant differences** between FSDT and 2D results in both deflection and vertical velocity. This is expected due to:

1. **Soft, high core** causing both warping and significant local strains near the loaded area
2. **Substantial transverse pulsation** of the beam (amplitudes reduced with increasing time and distance $x$)
3. **Wrong wave arrival times**: FSDT gives substantially different times of wave arrival (unlike B1 where arrival times agreed)

### Transverse Pulsation
The 2D solution reveals strong oscillation of deflection through the beam thickness:
- Deflections at the lower beam edge ($y = -3.2\,\text{mm}$), beam axis ($y = 0\,\text{mm}$), and upper edge ($y = 3.2\,\text{mm}$) differ markedly at the same horizontal position
- This multi-layer through-thickness behaviour is invisible to FSDT (which assumes a single deflection field)

## Wave Phenomena (from 2D velocity fields, Fig. 7)

- Waves transmitted through the upper steel face sheet propagate **vertically** through the soft core at very low velocity
- Disturbances in the upper steel layer generate new waves travelling toward the bottom edge of the beam
- Caused by **extremely different characteristic impedances** and velocities between steel and Divinycell H160

## Wavelength Violation of FSDT Assumptions

The soft core imposes a fundamental constraint violation. At maximum frequency ~178 kHz:

$$\lambda_\text{min} = c_2 / f_\text{max} = 675 / 178000 \approx 3.8\,\text{mm}$$

The beam total thickness is 6.4 mm. The fundamental FSDT assumption requires:

> **The beam thickness must be significantly smaller than the wavelength of the shortest propagated wave.**

With $\lambda_\text{min} = 3.8\,\text{mm} < d_0 = 6.4\,\text{mm}$, this assumption is **violated**.

## Effect of Longer Pulse Duration ($t_0 = 200\,\mu\text{s}$)

Reducing the maximum frequency content (5% spectral level $\approx 23.5\,\text{kHz}$) improves FSDT precision:
- Better agreement in beam deflection
- However, FSDT still **underestimates** deflection and velocity (same trend as B1)
- **Wave arrival times remain substantially different** (unlike B1) — this is a fundamental limitation

## Summary for B2

| Aspect | FSDT Performance |
|--------|-----------------|
| Deflection | Poor; significant underestimation |
| Velocity | Poor; significant underestimation |
| Wave arrival times | Poor; substantially wrong |
| Transverse pulsation | Not captured at all by FSDT |
| Main limitations | Wavelength-thickness conflict, warping, impedance mismatch |
| Use of FSDT | Only for very rough estimates of beam response |

FSDT is **questionable** for soft-core sandwich beams under impact loading — it should not be relied upon for engineering decisions in this regime.
