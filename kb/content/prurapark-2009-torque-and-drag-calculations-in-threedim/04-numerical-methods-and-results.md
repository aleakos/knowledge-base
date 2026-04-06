---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/04-numerical-methods-and-results"
section: "Chapters VII–IX: Numerical Methods, Results, and Conclusions"
order: 4
tags:
  - "engineering/drilling"
  - "engineering/numerical-methods"
  - "engineering/tubular-mechanics"
summary: "Euler numerical integration for 3D T&D calculations, comparison with Wu and Juvkam-Wold analytical method, and validation results."
formulas:
  - id: "F1"
    name: "Euler's method (ODE integration)"
    expr: "y_{k+1} = y_k + h * f(t_k, y_k)  where h = step size, f = derivative function"
  - id: "F2"
    name: "Axial tension ODE (pipe lowering)"
    expr: "dF/ds = W*cos(alpha) - mu*N(s)   integrated by Euler stepping from bottom to surface"
  - id: "F3"
    name: "Torque ODE"
    expr: "dT/ds = mu * N(s) * r   integrated from bit to surface"
---

# Chapters VII–IX: Numerical Methods, Results, and Conclusions

## Chapter VII: Euler Numerical Method for T&D

### Motivation

While analytical T&D equations exist for idealized wellbore geometries (straight sections, circular arc build/drop/turn sections), real 3D wellbore paths surveyed at discrete stations do not conform to idealized geometry. A numerical integration method allows:
- Calculation along any arbitrary 3D path defined by survey stations.
- Incorporation of spatially varying friction factors.
- Handling of tortuosity effects.

### Euler's Method

Euler's method is a first-order explicit ODE integrator:

```
y_{k+1} = y_k + h * f(t_k, y_k)
```

For T&D calculations, the ODEs being integrated are:

**Axial force (lowering)**:
```
dF/ds = W * cos(alpha(s)) - mu * N(s)
```

**Axial force (pulling)**:
```
dF/ds = W * cos(alpha(s)) + mu * N(s)
```

**Torque**:
```
dT/ds = mu * N(s) * r
```

Integration proceeds from the **bottom of the string upward** (from bit to surface) because the boundary condition is at the bit (F = weight on bit at the bottom, T = bit torque).

### Step Size Selection

A key finding is that step size h significantly affects accuracy:
- Larger h gives faster computation but larger truncation error.
- For wellbores with tight curvature or tortuosity, smaller h is required.
- The dissertation presents a step size sensitivity study showing how error scales with h.

### Application to 3D Wellbores

The Euler method is applied to each survey interval, computing the increment in F and T based on:
- Wellbore geometry at the midpoint of the interval.
- Contact force N derived from curvature and current axial force.

This allows the method to handle arbitrary 3D paths including turning wellbores and tortuous paths — a limitation of closed-form analytical solutions.

## Chapter VIII: Discussion of Results

### Verification Against Analytical Solutions

Results are compared against the Wu and Juvkam-Wold (1991) analytical equations for:
- Simple 2D wellbore profiles (build and hold).
- Results show excellent agreement when the wellbore path is smooth.

When tortuosity is added, the numerical method produces significantly higher torque predictions, consistent with field observations.

### Example: Force Calculations (2D and 3D)

A benchmark example is presented with:
- A deviated wellbore with build, hold, and drop sections.
- Both lowering and pulling cases computed.

Results compared for build and drop sections:
- Normal contact force vs. measured depth: peaks in build and drop sections where curvature is highest.
- Axial tension vs. measured depth: monotonic increase from bit to surface (slack-off case), but with inflections in curved sections due to friction direction change.

### Example: Torque Calculations

Two examples are presented:
1. **Rotating off the bottom** (standard rotary drilling): Torque is generated along the entire string. Results compared for Wu and Juvkam-Wold vs. numerical method.
2. **Survey calculations** in a 3D wellbore with azimuth turns: The 3D effect (azimuth change) on torque is quantified.

Key finding: when the wellbore turns azimuth by 10 deg/100 ft, the torque and axial force profiles change significantly compared to a 2D wellbore — demonstrating the importance of 3D modeling.

### Summary Results

| Case | Wu & Juvkam-Wold (1991) | Numerical Method (this work) | Comment |
|---|---|---|---|
| Simple 2D build-hold | Match | Match | Validation |
| 3D with azimuth change | Not directly handled | Computes correctly | New capability |
| With tortuosity | No tortuosity model | Higher torque predicted | Field-consistent |

## Chapter IX: Conclusions and Recommendations

### Conclusions

1. The new mathematical models provide more accurate and sign-consistent 3D T&D equations for all wellbore section types.
2. Tortuosity has a significant effect on torque; ignoring it underestimates field torque.
3. The Euler numerical method successfully handles complex 3D wellbore paths beyond the capability of closed-form solutions.
4. Stress concentration at tool joints is an important failure mechanism not captured by standard T&D calculations.
5. The 3D T&D software developed provides a practical engineering tool for well planning.

### Recommendations

- Incorporate buckling criteria (sinusoidal and helical onset) into real-time drilling advisory systems.
- Use measured friction factors from field data to calibrate T&D models for specific wells.
- Account for tortuosity using available MWD data or statistical models.
- Further work to extend the model to stiff-string formulations for more accurate prediction in highly deviated wells.
