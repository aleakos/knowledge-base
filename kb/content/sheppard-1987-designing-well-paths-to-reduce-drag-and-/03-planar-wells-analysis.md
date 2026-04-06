---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/03-planar-wells-analysis"
section: "Drag Reduction and Well Geometry - Planar Wells"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/well-design"
  - "engineering/well-geometry"
summary: "Analysis of drag reduction mechanisms in planar well trajectories with constant build and catenary solutions"
formulas:
  - id: "F4"
    name: "Effective Tension for Planar Wells"
    expr: "σₑ(s) = σₑ₀ + ∫₀ˢ KCα(ξ)dξ e^(-∫₀ˢ Kα(ξ)dξ) + e^(∫₀ˢ Kα(ξ)dξ)[∫₀ˢ e^(-∫₀ʳ Kα(ξ)dξ) F₊(s)ds]"
  - id: "F5"
    name: "Drag Force in Planar Wells"
    expr: "F(s) = KWₑ sin θ(s) + Wₑ cos θ(s)"
  - id: "F6"
    name: "Drag Term Minimization"
    expr: "K[σₑ(s)α(s) - Wₑ sin θ(s)]"
  - id: "F7"
    name: "Catenary Condition"
    expr: "σₑ(s) = (Wₑ sin θ(s))/α(s)"
---

## Planar Well Geometry

### Definition and Characteristics

A **planar well** satisfies the constraint:

```
∂β/∂s = 0
```

This means the well path lies in a single vertical plane defined by a constant azimuthal bearing angle β = β_const.

### Prevalence in Drilling

Most planned wells are designed as planar geometries, making analysis of planar wells particularly practical. The majority of drilled wells also have small degrees of turn, and analysis of planned planar wells provides fruitful insights. Analysis of wells with turning is qualitatively similar to planar well analysis.

## Analytical Solutions for Planar Wells

For planar wells, analytical solutions exist to the tension profile differential equation:

```
σₑ(s) = σₑ₀ + ∫₀ˢ Kα(ξ)dξ exp(-∫₀ˢ Kα(ξ)dξ) 
        + exp(∫₀ˢ Kα(ξ)dξ)[∫₀ˢ exp(-∫₀ʳ Kα(ξ)dξ) F₊(s)ds]
```

Where:
- α(s) = curvature profile = -dθ/ds
- F₊(s) = +KWₑ sin θ + Wₑ cos θ

## Drag Reduction Mechanisms

### Expression for Drag in Planar Wells

The drag force in planar wells reduces to:

```
F(s) = KWₑ sin θ(s) + Wₑ cos θ(s)
```

The primary drag term for reduction is:

```
K[σₑ(s)α(s) - Wₑ sin θ(s)]
```

**Drag reduction principle:** Reducing the magnitude of this term reduces overall drag.

Two classes of trajectories achieve side-force reduction:
1. Catenary trajectories
2. Constant-build trajectories

## Catenary Well Plans

### Catenary Definition

A catenary curve is a special trajectory where the effective tension satisfies:

```
σₑ(s) = (Wₑ sin θ(s))/α(s)
```

### Properties

- **General catenary curves** give rise to reduction in side force
- **Perfect catenary** renders side force zero only if a particular tension is applied to the string
- For positive curvature α(s), this condition requires nonzero, positive effective tension everywhere

### Practical Limitations

**Critical constraint:** The condition σₑ(s) = (Wₑ sin θ)/α(s) cannot be maintained everywhere because:

1. It is violated at least at the bit during tripping
2. It is violated for much of the BHA during drilling
3. This makes zero side forces impossible everywhere in the drillstring

**Directional control challenge:** Drilling an even approximate catenary curve requires precise directional control that may not be practical.

## Constant-Build Trajectories

### Practical Basis

In practice, well building characteristics are achieved through strategic stabilizer placement in the BHA. Experience shows:
- A given BHA at constant WOB tends to build at a fairly constant rate
- Varying downhole conditions influence this tendency
- This suggests exploration of constant-build-rate drag reduction properties

### Trajectory Definition

A constant-build trajectory has a final section with curvature:

```
α(s) = α_const
```

Although the drag term F(s) remains nonzero, the magnitude can be reduced by appropriate choice of α_const, achieving drag reduction.

### Generic Well Trajectory Structure

Planned directional wells typically follow this pattern:

1. **Vertical section:** From surface to kickoff point (KOP) at depth D
2. **Initial-build section:** Builds at constant rate until inclination angle θᵢ is obtained
   - Required to clear near-surface steel work (especially on dense platforms)
   - Defines initial azimuthal direction β_const
   - In practice, θᵢ is typically nonzero
3. **Final section:** Follows trajectory with curvature profile α(s)
   - For constant-build: α(s) = α_const
   - Parameter s denotes trajectory distance, s=0 at target

### Advantages Over Catenary

- **Practical achievability:** Readily achievable with standard BHA placement
- **Comparative efficiency:** Theoretical drag reduction usually close to catenary trajectory improvement
- **Implementation:** Easier directional control requirements
