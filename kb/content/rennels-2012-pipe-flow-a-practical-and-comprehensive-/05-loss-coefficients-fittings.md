---
parent_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-"
chunk_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-/05-loss-coefficients-fittings"
section: "Loss Coefficients for Pipe Fittings and Flow Configurations"
order: 5
tags:
  - "engineering/fluid-mechanics"
  - "engineering/pipe-flow"
  - "engineering/tubular-mechanics"
summary: "Loss coefficients for entrances, contractions, expansions, orifices, bends, tees, valves, and other pipe fittings, covering the full range of piping system components"
formulas:
  - id: "F1"
    name: "Sudden expansion loss (Borda-Carnot)"
    expr: "K = (1 - A1/A2)^2  (based on inlet area A1)"
  - id: "F2"
    name: "Sharp-edged entrance loss coefficient"
    expr: "K = 0.5 (flush mounted, fully turbulent)"
  - id: "F3"
    name: "Loss coefficient area normalisation"
    expr: "K_ref = K_a * (A_ref/A_a)^2 = K_a * (d_ref/d_a)^4"
---

## Loss Coefficients for Pipe Fittings

### Methodology

All loss coefficients K are defined relative to a reference velocity head:
```
delta_P = K * rho * V_ref^2 / 2
```

When combining loss coefficients from fittings with different reference areas, normalise to a common area:
```
K_ref = K_a * (A_ref / A_a)^2
```

Loss coefficients depend primarily on geometry; Reynolds number effects are secondary for most fittings.

### Entrances (Chapter 9)

| Type | K (approx.) |
|------|------------|
| Sharp-edged, flush mounted | 0.50 |
| Sharp-edged, mounted at distance | 0.50–0.80 (depends on t/d) |
| Rounded entrance (r/d = 0.14) | ≈ 0.04 |
| Beveled entrance | 0.05–0.25 |
| Sharp-edged orifice entrance | ~0.50 + thick-edge correction |

### Contractions (Chapter 10)

- **Sharp-edged contraction**: K ≈ 0.42*(1 - A2/A1) referenced to downstream area
- **Conical contraction**: smaller loss than sharp-edged; depends on included angle
- **Rounded/smooth contraction**: very small K (< 0.05) for well-designed contraction

### Expansions (Chapter 11)

**Sudden expansion (Borda-Carnot)**:
```
K = (1 - A1/A2)^2  (based on inlet area)
```
This represents complete loss of the kinetic energy difference.

**Conical diffuser**: K is substantially less than sudden expansion; depends on included angle and area ratio. Optimal included angle ≈ 5–7° for minimum loss.

### Orifices (Chapter 13)

Orifices are used for flow measurement and restriction. Loss coefficient depends on:
- Edge geometry: sharp, round, beveled, thick
- Location: in straight pipe, in transition section, in a wall
- Area ratio β = d_o/d_pipe

For a sharp-edged orifice in a straight pipe: K ≈ (1/Cd - 1)², where Cd is the discharge coefficient (≈ 0.61 for sharp-edged).

### Bends (Chapter 15)

- **Elbow (90°, standard)**: K ≈ 0.3–0.9 depending on r/d ratio
- **Long-radius elbow (r/d = 1.5)**: K ≈ 0.2
- **Miter bend (90°, no vanes)**: K ≈ 1.1
- **Coils**: additional centrifugal effect increases K beyond straight-pipe equivalent

### Tees (Chapter 16)

Diverging and converging tees have more complex loss coefficient behaviour:
- K depends on the flow split ratio (Q_branch/Q_total)
- Run-through flow and branch flow each have separate K values
- K for branch flow is typically much larger than for run-through flow

### Valves (Chapter 18)

| Valve type | K (fully open, approx.) |
|-----------|------------------------|
| Gate valve | 0.1–0.2 |
| Globe valve | 3–10 |
| Ball valve | 0.05–0.1 |
| Butterfly valve | 0.5–2.0 (depends on angle) |
| Check valve | 0.5–3.0 |

Valve K values vary strongly with opening position and must be obtained from manufacturer data or the formulas in Chapter 18.

### Pipe Joints (Chapter 17)

Small but non-negligible losses from:
- **Weld protrusions**: K depends on height of bead relative to diameter
- **Backing rings**: similar to weld protrusion
- **Misalignment**: lateral offset or angular misalignment of pipe ends

### Practical Notes

- Loss coefficients in this book are derived from worldwide experimental data integrated into consistent equations
- Many published K values are out of date or inconsistent; the equations here represent the best available synthesis
- Reynolds number dependence is included where significant (primarily at low NRe or for specific geometries)
