---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/02-friction-model"
section: "Friction Model for Drag and Torque Loss"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/drag-torque"
  - "engineering/well-mechanics"
summary: "Mathematical friction model for estimating drag and torque loss in wells based on side forces and friction coefficient"
formulas:
  - id: "F1"
    name: "Effective Tension"
    expr: "σₑ(s) = σ(s) + p(s)A(s)"
  - id: "F2"
    name: "Effective Tension Profile Differential Equation"
    expr: "dσₑ/ds = Wₑ cos θ(s) ± K[σₑ(dθ/ds)² + Wₑ sin θ(s)]² + [σₑ(dβ/ds) sin θ(s)]²"
  - id: "F3"
    name: "Drag Force"
    expr: "F(s) = K{[σₑ(s)(dθ/ds) + Wₑ sin θ(s)]² + [σₑ(s)(dβ/ds) sin θ(s)]²}^(1/2)"
---

## Friction Model Foundation

To estimate drag and torque loss associated with different well geometries, a friction-based model assumes:

**Key Assumption:** The drag force on the drill string at any location is proportional to the side force acting there, with coefficient K (sliding-friction coefficient) as the proportionality constant. The resultant frictional force acts against drillstring motion, causing drag during tripping out and torque loss when rotating.

## Effective Tension Framework

### Definition of Effective Tension

The effective tension σₑ(s) combines true tension σ(s) and the hydrostatic pressure effect:

```
σₑ(s) = σ(s) + p(s)A(s)
```

Where:
- σ(s) = true tension at location s
- p(s) = mud pressure at s
- A(s) = cross-sectional area of pipe at s

**Advantages:**
- Avoids confusion over neutral point (where effective tension = 0) location
- Explicitly accounts for mud pressure effects
- Clarifies influence of buoyancy forces on curved pipe sections
- Tension and effective tension agree at surface

## Tension Profile Derivation

The effective tension profile is derived from:

```
dσₑ/ds = Wₑ cos θ(s) ± K[(σₑ dθ/ds)² + Wₑ sin θ(s)]²
         + [σₑ(dβ/ds) sin θ(s)]²^(1/2)
```

Where:
- Wₑ = buoyed weight per unit length of pipe/collar (lb/ft or N/m)
- θ(s) = deviation angle at location s
- β(s) = azimuthal bearing angle
- K = sliding-friction coefficient
- **+K term** applies for tripping out
- **-K term** applies for tripping in
- For rotating drillstring: K = 0

**Parameter Convention:** s parameterizes distance along well path from bit (s=0 at bottom)

## Drag Profile Calculation

From the effective tension profile, the drag profile F(s) is given by:

```
F(s) = K{[σₑ(s)(dθ/ds) + Wₑ sin θ(s)]² + [σₑ(s)(dβ/ds) sin θ(s)]²}^(1/2)
```

### Application to Drillstring Analysis

For a **rotating drillstring**, drag F(s) is considered to act at an appropriate radius:
- Tool-joint radius in drillpipe
- Collar radius in drill collar
- Stabilizer radius in BHA

This generates local torque loss. **Total torque loss** = sum of contributions throughout well.

## Friction Coefficient Determination

### Experimental Values

Experiments have consistently yielded K values in the range **0.2 to 2.4**, with a preponderance of values around **0.3**.

For wells already drilled, an effective value of K can be determined by comparing:
- Hook load during tripping
- Torque losses during drilling

with solutions of the differential equations expressed as functions of K. This approach yields a **global friction factor** for the entire well.

### Measurement-While-Drilling Analysis

With MWD technology, direct access to downhole weight-on-bit (WOB) and downhole torque enables:

1. **Real-time friction analysis** on a foot-by-foot basis during drilling
2. **Diagnosis of drilling problems** through friction log interpretation
3. **Transfer of torque and weight** from surface to bit analysis

The friction factor varies due to:
- Differences in local friction values between cased and openhole sections
- BHA stiffness effects
- Stabilizer action in different formations

### Planning Wells Without Offset Data

In the absence of offset well data, a value of **K = 0.3** is generally suitable based on available data. Results will be qualitatively reasonable and sufficient for geometry selection as long as the drag source is frictional.

## Solution Methods

### Analytical Solutions

Analytical solutions to the differential equation exist for **planar wells** (∂β/∂s = 0), described in Appendix B.

### General Solutions

For wells with turning (where ∂β/∂s ≠ 0), the differential equation must be solved iteratively using numerical methods.
