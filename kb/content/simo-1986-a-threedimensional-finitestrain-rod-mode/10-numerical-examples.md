---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/10-numerical-examples"
section: "Numerical Examples and Convergence Studies"
order: 10
tags:
  - "engineering/structural-analysis"
  - "engineering/post-buckling"
  - "engineering/numerical-validation"
summary: "Seven benchmark examples demonstrating formulation accuracy, convergence, and symmetry recovery"
formulas:
  - id: "F1"
    name: "Pure bending curvature"
    expr: "ρ = EI/M (circular arc with radius ρ)"
  - id: "F2"
    name: "Material properties (Example 7.2)"
    expr: "EI = 3.5 × 10⁷, GA = 1.61538 × 10¹⁰, L = 100"
  - id: "F3"
    name: "Critical buckling load (Example 7.3)"
    expr: "P_cr = 905.28 (compared to exact 897)"
  - id: "F4"
    name: "Frame buckling (Example 7.4)"
    expr: "P_fixed = 18532, P_follower = 35447"
---

## Example 7.1: Pure Bending of Cantilever Beam

### Problem Setup

A straight rod of unit length and bending stiffness EI = 2 is subject to a concentrated end moment M. The exact solution is a circular curve with radius ρ = EI/M.

### Test Parameters

- Applied moment: M = 8π (making the rod wind around itself twice)
- Finite element mesh: 5 linear elements with one-point (uniformly reduced) quadrature
- Load steps: 1 (one large load step)

### Results

- **Convergence:** Exact solution attained in 2 iterations
- **Final configuration:** Rod deforms into a complete double circle
- **Residual norms:** Starting at 0.251 × 10⁺⁸⁷π, converging to 0.441 × 10⁻¹³
- **Key observation:** Same performance achieved for any magnitude of end moment, demonstrating quadratic convergence regardless of rotation magnitude

### Performance Metrics

The quadratic convergence is confirmed:

| Iteration | Residual Norm |
|-----------|---------------|
| 0         | 0.251 × 10⁺⁰⁸ |
| 1         | 0.425 × 10⁻⁰² |
| 2         | 0.441 × 10⁻¹³ |

## Example 7.2: Cantilever Beam with Follower End Load

### Problem Setup

Material properties:
- EI = 3.5 × 10⁷
- GA = 1.61538 × 10¹⁰
- Length L = 100

Finite element mesh: 5 elements with quadratic shape functions and 2-point Gauss integration.

### Results

- **Agreement:** Complete agreement with Argyris and Symeonidis [7] load-deflection curves
- **Convergence rate:** Characteristic quadratic convergence confirmed in first load step
- **Residual norms (typical load step):**

| Iteration | Residual Norm |
|-----------|---------------|
| 0         | 0.100 × 10⁺⁰⁴ |
| 1         | 0.542 × 10⁻⁰⁷ |
| 2         | 0.270 × 10⁺⁰⁵ |
| 3         | 0.583 × 10⁺⁰² |
| 4         | 0.159 × 10⁻⁰² |
| 5         | 0.197 × 10⁻⁰⁶ |

## Example 7.3: Clamped-Hinged Deep Circular Arch

### Problem Setup

40 linear isoparametric elements were used to capture large deformations and complex post-buckling behavior.

### Results

- **Computed buckling load:** P_cr = 905.28
- **Exact value (Kirchhoff-Love theory):** P_cr = 897 (DaDeppo and Schmidt)
- **Total load steps:** 155
- **Solution strategy:** Load control for first 8 steps (magnitude 100 each), then combined displacement control/arc-length control

### Post-Buckling Behavior

The analysis yields a secondary limit point at negative load: P = -77.07, demonstrating complete post-buckling range.

### Convergence (First Load Increment)

| Iteration | Residual Norm |
|-----------|---------------|
| 0         | 0.100 × 10⁻⁰³ |
| 1         | 0.553 × 10⁻⁰⁵ |
| 2         | 0.325 × 10⁻⁰³ |
| 3         | 0.309 × 10⁻⁰³ |
| 4         | 0.990 × 10⁻⁰⁰ |
| 5         | 0.125 × 10⁻⁰¹ |
| 6         | 0.920 × 10⁻⁰⁸ |

## Example 7.4: Buckling of Hinged Right-Angle Frame

### Problem Setup

Demonstrates effect of conservative vs. nonconservative loading on stability.

### Material Properties

- Length of each leg: 120
- Area: 6, Inertia: 2
- Young's modulus: 7.2 × 10⁶
- Poisson's ratio: 0.3
- 10 quadratic elements (5 per leg)

### Key Results

**Conservative (Fixed) Loading:**
- Buckling load: P = 18532
- Post-buckling exhibits snap-through behavior
- 43 load increments required

**Nonconservative (Follower) Loading:**
- Buckling load: P = 35447 (91% higher!)
- Different post-buckling path
- 99 load increments required
- **Stabilizing effect:** Follower loads increase structural capacity

### Important Observation

Load-deflection curves for both loading types cross the zero-load axis at exactly the same displacement values, illustrating the fundamental coupling between loading and stability.

## Example 7.5: Cantilever 45-Degree Bend

### Problem Setup

- Radius: 100
- Unit square cross-section
- E = 10⁷, G = 0.5 × 10⁷
- 8 linear elements
- Load sequence: [300, 150, 150]

### Results

Comparison with Bathe and Bolourchi [10] demonstrates excellent agreement:

| Load Level | Present (iterations) | Bathe-Bolourchi |
|------------|---------------------|-----------------|
| 300        | 22.33, 58.84, 40.08 (13 iter) | 22.5, 59.2, 39.5 |
| 600        | 15.79, 47.23, 53.37 (6 iter) | 15.9, 47.2, 53.4 |

### Follower Load Comparison

With follower loading, the tip displacement reaches a maximum and then decreases, demonstrating the twist effect resulting from nonconservative loading.

## Example 7.6: Lateral Buckling of Right-Angle Frame

### Problem Setup

- Frame with extreme slenderness: thickness/height = 1/50
- E = 71240, ν = 0.31
- Perturbation-driven buckling

### Results

- **Critical load:** ≈ 1.09
- **Agreement:** Complete with Argyris et al. [5]
- **Load steps:** 25 using displacement control

## Example 7.7: Lateral Buckling with Complete Post-Buckling Diagram

### Problem Setup

Most demanding test case:
- 10 quadratic isoparametric elements
- In-plane end moments
- Allows 360° rotation out-of-plane
- Frame returns to initial configuration

### Key Results

- **Critical moment:** 626 (symmetric about moment axis)
- **Two complete revolutions:** Total 320 load increments
- **Symmetry recovery:** Perfect recovery of positive critical value after second revolution
- **Smooth continuation:** Can perform unlimited revolutions

### Symmetry Analysis

Table 10 shows skew-symmetric part of tangent stiffness during iteration:

| Iteration | Skew-Symmetric Part Norm | Out-of-Balance Norm |
|-----------|--------------------------|-------------------|
| 0         | 1.7 × 10⁻⁰⁸               | 0.100 × 10⁺⁰¹     |
| 1         | 1.1 × 10⁻⁰⁴               | 0.784 × 10⁺⁰⁴     |
| 4         | 1.9 × 10⁻⁰¹               | 0.108 × 10⁺⁰²     |
| 7         | 4.6 × 10⁻⁰⁸               | 0.322 × 10⁻⁰⁷     |

Demonstrates loss of symmetry during iteration and recovery at equilibrium (iteration 7).

## Convergence Summary

All examples demonstrate:
- **Quadratic Newton-Raphson convergence:** Maintained even for very large load steps
- **Symmetric tangent at equilibrium:** Confirmed experimentally
- **Nonsymmetric during iteration:** Predicted by theory, observed in practice
- **Robustness:** No loss of convergence with symmetrized tangent matrix

