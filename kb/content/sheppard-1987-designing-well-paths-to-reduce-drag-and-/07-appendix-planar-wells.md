---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/07-appendix-planar-wells"
section: "Appendix B - Drag in Planar Wells"
order: 7
tags:
  - "engineering/drilling"
  - "engineering/planar-wells"
  - "engineering/analytical-solutions"
summary: "Analytical solutions to tension profile equations for planar wells with zero azimuthal turning rate"
formulas:
  - id: "FB1"
    name: "Planar Well Constraint"
    expr: "∂β/∂s = 0"
  - id: "FB2"
    name: "Planar Tension Differential"
    expr: "dσₑ/ds = Wₑ cos θ ± K[(σₑ dθ/ds + Wₑ sin θ)]"
  - id: "FB3"
    name: "Effective Tension Relation"
    expr: "σₑ(s) = σ(s) + p(s)A(s)"
  - id: "FB4"
    name: "Tension Solution (Bracketed Form)"
    expr: "dσₑ±/ds = Wₑ cos θ ± K[σₑ± dθ/ds + Wₑ sin θ]"
  - id: "FB5"
    name: "Integrated Tension Solution"
    expr: "σₑ±(s) = σₑ₀± e^(±∫₀ˢ Kα(ξ)dξ) + e^(±∫₀ˢ Kα(ξ)dξ) [∫₀ˢ e^(∓∫₀ʳ Kα(ξ)dξ) F±(s)ds]"
  - id: "FB6"
    name: "Drag in Planar Wells"
    expr: "F±(s) = ±KWₑ sin θ + Wₑ cos θ"
  - id: "FB7"
    name: "Curvature Definition"
    expr: "α(s) = -dθ/ds"
---

## Planar Well Definition

A planar well is one in which the azimuthal bearing angle is constant throughout the trajectory:

```
∂β/∂s = 0
```

This constraint means the well path lies entirely within a single vertical plane defined by β = β_const.

## Simplified Tension Equation

With the planar well constraint, the general tension differential equation simplifies significantly. From the general form, the turning rate term (dβ/ds)² vanishes, leaving:

```
dσₑ/ds = Wₑ cos θ ± K[(σₑ dθ/ds)² + Wₑ sin θ]²}^(1/2)
```

Where ± applies to tripping out (+) or tripping in (-).

## Analytical Solutions

### Solution Structure

Solutions to the planar differential equation are found by obtaining the σₑ± solutions to:

```
dσₑ±/ds = Wₑ cos θ ± K[σₑ± dθ/ds + Wₑ sin θ]
```

**Patching condition:** Solutions are patched at points where:

```
σₑ(dθ/ds) = -Wₑ sin θ
```

This defines the boundary between regions of different dominant physics.

### Solution Form

```
σₑ±(s) = σₑ₀± exp(±∫₀ˢ Kα(ξ)dξ)
         + exp(±∫₀ˢ Kα(ξ)dξ)[∫₀ˢ exp(∓∫₀ʳ Kα(ξ)dξ) F±(s)ds]
```

Where:

- α(s) = curvature = -dθ/ds (negative sign by convention)
- F±(s) = ±KWₑ sin θ + Wₑ cos θ (drag force in planar well)

### Region Application

- **σₑ+ solutions** apply in regions where σₑ(dθ/ds) > -Wₑ sin θ
- **σₑ- solutions** apply in regions where σₑ(dθ/ds) < -Wₑ sin θ

## Drag in Planar Wells

### Simplified Drag Expression

For planar wells, the drag force reduces to:

```
F±(s) = ±KWₑ sin θ + Wₑ cos θ
```

This two-component expression represents:

1. **Friction term:** ±KWₑ sin θ - proportional to side force from vertical curvature
2. **Weight term:** Wₑ cos θ - related to hydrostatic and gravitational effects

### Interpretation

The relative magnitudes of the two terms determine the dominant drag mechanism:

- **When Wₑ sin θ >> Wₑ cos θ** (high-angle wells): Friction dominates
- **When Wₑ cos θ >> Wₑ sin θ** (low-angle wells): Weight-related drag dominates
- Both terms must be considered for accurate predictions

## Curvature and Well Geometry

### Curvature Definition

```
α(s) = -dθ/ds
```

The negative sign indicates that increasing curvature corresponds to decreasing (less positive) dθ/ds values in the convention where s increases from bit upward.

### Well Geometry Examples

Different planar wells are distinguished by the form of α(s):

| Well Type | Curvature Form | Characteristic |
|-----------|----------------|-----------------|
| Vertical | α(s) = 0 | No deviation |
| Constant-build | α(s) = α_const | Linear deviation angle increase |
| Tangent section | α(s) = 0 | Constant deviation angle |
| Catenary | α(s) varies with s | Specific exponential-like variation |

## Validity and Limitations

### When Analytical Solutions Apply

- **All planar (vertical plane) wells** - where β = β_const throughout trajectory
- **Well turning not significant** - most planned wells satisfy this reasonably well
- **Small turn rates** (dβ/ds ≈ 0) - influence of turning on profiles is frequently small

### Extensions to Non-Planar Wells

For wells with significant turning:
- Numerical integration of the general differential equation is required
- Qualitative behavior remains similar to planar well analysis
- Turning introduces additional complexity but not fundamental changes to physics

## Practical Application

### Analytical Advantages

1. **Direct evaluation** of tension profiles without numerical iteration
2. **Intuitive understanding** of drag mechanisms through closed-form solutions
3. **Rapid preliminary analysis** for well planning
4. **Verification tool** for numerical solutions to general well geometry

### Limitations

1. **Restricted to planar geometries** - cannot model wells with significant turn
2. **Requires curvature specification** - must know α(s) form in advance
3. **Initial condition dependent** - results depend on boundary conditions at bit
