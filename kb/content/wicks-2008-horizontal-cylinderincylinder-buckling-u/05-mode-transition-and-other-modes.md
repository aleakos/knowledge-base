---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/05-mode-transition-and-other-modes"
section: "Transition Between Sinusoidal and Helical Modes; Other Buckling Modes; Short Cylinders"
order: 5
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/buckling"
  - "engineering/mode-transition"
  - "engineering/thin-walled-cylinders"
  - "engineering/oil-drilling"
summary: "Discussion of the poorly understood sinusoidal-to-helical buckling transition range, thin-walled buckling modes, and short cylinder behavior."
formulas:
  - id: "F14"
    name: "Load range for sinusoidal-to-helical transition"
    expr: "√2 · Pˢ_cr < P < 2√2 · Pˢ_cr  (equivalently, Pʰ_cr < P < 2Pʰ_cr)"
---

# Transition Between Sinusoidal and Helical Modes; Other Buckling Modes; Short Cylinders

## 2.3. Transition Between Sinusoidal and Helical Modes

The transition from sinusoidal to helical buckling has **not been analyzed in detail** by many researchers, nor has it been well documented experimentally. This transition is complicated because:

- The sinusoidal mode wraps the cylinder around the constraining cylinder in **alternating senses**
- The helical mode wraps the cylinder in **only one direction/sense**

### Analytical Bounds on the Transition

Neglecting torsion and friction, several analytical studies have shown:
- The helical solution is valid for `P > √2 · Pˢ_cr`
- The sinusoidal solution is not valid for `P > 2√2 · Pˢ_cr`

Therefore the transition must occur in the range:

```
√2 · Pˢ_cr < P < 2√2 · Pˢ_cr
(equivalently, Pʰ_cr < P < 2Pʰ_cr)
```

### Researchers' Estimates of Transition Point

| Source | Estimated Transition Load | Basis |
|--------|--------------------------|-------|
| Wu and Juvkam-Wold (1993) | ~1.3 Pʰ_cr (≈30% above Pʰ_cr) | Assumed proportional load increase with change in cylinder length during transition; average axial load = Pʰ_cr. Experimental support provided. |
| Qiu et al. (1996, 1998) | ~1.3 Pʰ_cr (≈30% above Pʰ_cr) | Sinusoidal mode becomes unstable at this load. Experimental support provided. |
| Mitchell (1997) | ~2 Pʰ_cr | Differential form of equilibrium equations with helical buckle displacement field. |

Overall consensus: the long cylinder fully transitions from sinusoidal to helical between **~1.3 Pʰ_cr and 2 Pʰ_cr**.

### Open Questions

- There may be an **intermediate state** between sinusoidal and helical buckling, or the transition may be non-smooth (two states possibly bistable over some range of axial load)
- He and Kyllingstad (1995) observed that under compression without torsion, the helical mode had reversal of pitch sense — details unexplained
- When friction is considered, the inequality bounding the transition is likely not applicable
- Under combined axial load, torsion, gravity, and friction, torsion may play a more significant role — this is the subject of ongoing research

## 2.4. Other Buckling Modes

Several buckling modes relevant for **thin-walled cylinders** must be considered in addition to constrained buckling modes. For typical drilling geometry and loads, these thin-walled modes are **not seen** because their buckling loads are 2–3 orders of magnitude higher than loads encountered in drilling (for the nominal steel tubular case).

These thin-walled modes include:
- Thin-walled helical buckling under torsional load
- Concertina buckling under compressive load
- Diamond-shaped buckling under compressive load
- Square-pattern buckling under compressive load

(Discussed in detail by Bazant and Cedolin, 1991)

## 2.5. Structural Behavior of "Short" Cylinders

There are several drilling applications in which **short cylinders** are used. In these applications the majority of the cylinder does not lie along the bottom surface of the outer cylinder. Boundary conditions have a large effect on buckling and structural behavior for short cylinders.

Common short cylinder applications have a tighter fit of the inner cylinder in the outer cylinder, which will influence the buckling progression. The buckling progression of short cylinders is **not well understood** and merits further study.
