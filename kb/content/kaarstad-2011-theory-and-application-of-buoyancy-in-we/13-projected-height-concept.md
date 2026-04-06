---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/13-projected-height-concept"
section: "Appendix A - The Projected Height Concept"
order: 13
tags:
  - "engineering/drilling"
  - "engineering/deviated-wells"
  - "engineering/mechanics"
summary: "Mathematical foundation of projected vertical height for calculating axial weight components in deviated boreholes."
formulas:
  - id: "A1"
    name: "Total pipe weight"
    expr: "W[N] = w[N/m] × L[m]"
  - id: "A2a"
    name: "Axial weight component"
    expr: "W_a = W cos α = L w cos α"
  - id: "A2b"
    name: "Normal weight component"
    expr: "W_n = W sin α = L w sin α"
  - id: "A3"
    name: "Vertical depth projection relationship"
    expr: "D_TVD = L cos α"
  - id: "A4"
    name: "Axial weight in terms of TVD"
    expr: "W_a[N] = w[N/m] × D_TVD[m]"
  - id: "A5"
    name: "Normal force in inclined pipe"
    expr: "W_n[N] = w[N/m] × D_TVD[m] × tan α"
---

# Appendix A: The Projected Height Concept

## Physical Setup

Consider a tubular resting on the low side in a deviated borehole. The weight of the pipe can be decomposed into an axial component (parallel to hole) and a normal component (perpendicular to hole).

## Weight Decomposition

The total weight of pipe is:

```
W[N] = w[N/m] × L[m]
```

This total weight can be decomposed into components:

**Axial component (along hole axis):**
```
W_a = W cos α = L w cos α
```

**Normal component (perpendicular to hole):**
```
W_n = W sin α = L w sin α
```

Where α is the hole inclination angle and L is the pipe length.

## Geometric Relationship

From inspection of the geometry of the inclined pipe, the following fundamental relationship exists between the pipe length L and the vertical projection (true vertical depth TVD):

```
D_TVD = L cos α
```

## Key Result: Projected Height Principle

Combining the weight equations with the geometric relationship:

```
W_a[N] = w[N/m] × D_TVD[m]
```

This is a remarkable result. The axial weight in a deviated well equals the unit weight multiplied by the projected vertical height (TVD), not the measured depth (MD).

**Physical Interpretation:** As the well deviates from vertical, the component of gravitational force acting along the hole axis decreases. This reduction is exactly accounted for by using TVD instead of the full hole length L.

## Normal Force in Motion

For a pipe in motion (during tripping), combining the weight equations gives the normal force:

```
W_n[N] = w[N/m] × D_TVD[m] × tan α
```

This normal force is important when considering friction and drag during pipe motion. It is directly proportional to the tangent of the inclination angle and the TVD.

## Application to Buoyancy Calculations

The projected height principle is applied before incorporating the buoyancy factor. The complete formula is:

```
W_in_well[N] = w[N/m] × D_TVD[m] × β
```

Where:
- w = unit weight (kN/m)
- D_TVD = projected vertical height (m)  
- β = buoyancy factor

This combination allows correct calculation of axial load at any point in any well path - vertical or deviated.

## Practical Advantages

1. **Universal Applicability:** Works for any well inclination from 0° (vertical) to 90° (horizontal)
2. **Simplicity:** Simple multiplication rather than trigonometric integration
3. **Physical Clarity:** Represents the actual gravitational component along the hole
4. **Accurate Design:** Ensures tubulars are not over or under-rated for actual conditions
