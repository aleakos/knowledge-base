---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/06-stability-and-buckling"
section: "Stability Analysis and Buckling"
order: 6
tags:
  - "engineering/stability"
  - "engineering/buckling"
  - "engineering/eigenvalue-problem"
summary: "Buckling load determination for Timoshenko beams with various support conditions, including formulation of eigenvalue problems and buckling factor calculations."
formulas:
  - id: "F38"
    name: "Buckling Load Definition"
    expr: "N_cr = -π² EI/(βl²)"
  - id: "F39"
    name: "Buckling Condition - Trigonometric"
    expr: "sin(ξ₁) = 0"
  - id: "F40"
    name: "Buckling Condition - Hyperbolic"
    expr: "sinh(ξ₃) = 0"
  - id: "F41"
    name: "Buckling Factor - SS-SS"
    expr: "β = √(1 + απ²)"
  - id: "F42"
    name: "Buckling Factor - F-SS"
    expr: "β = √(1 + α(π/2)²) [approximate]"
  - id: "F43"
    name: "Buckling Factor - F-FR"
    expr: "β = √(1 + α(π/2)²) [approximate]"
  - id: "F44"
    name: "Buckling Factor - F-F"
    expr: "β = √(1 + απ²) [approximate]"
---

## Stability of Timoshenko Beams

Buckling analysis determines the axial load at which a beam loses stability and suddenly increases deflection. For a Timoshenko beam, stability analysis uses:

1. **Equation of static equilibrium** (Eq. 39)
2. **Material law** (Eq. 9 or 10)
3. **Bending moment** M(x)
4. **Deflection** w(x)
5. **Rotation** φ(x)
6. **Transverse force** T(x)

The analysis sets **transverse loading q(x) = 0** and solves the resulting eigenvalue problem.

## Buckling Load Definition

The critical buckling load is:

```
N_cr = -π² EI/(βl²)    (Eq. 75)
```

Where **β** is the **buckling factor** that depends on:
- Support conditions
- Bending shear factor α
- Span length l

## Analysis by Support Condition

The determinant of the boundary condition matrix is set to zero to find buckling loads. Results for various support conditions:

### Simply Supported - Simply Supported (SS-SS)

Buckling condition:

```
sin(ξ₁) = 0    (Eq. D2)
```

This gives: ξ₁ = π (at first buckling)

Buckling factor:

```
β = √(1 + απ²)    (Eq. D3)
```

For Euler-Bernoulli (α = 0): β = 1.0000
With shear effects: β increases with α

| α = EI/(GAl²) | 0.000 | 0.025 | 0.050 | 0.075 | 0.100 | 0.1250 | 0.150 |
|---------------|-------|-------|-------|-------|-------|--------|-------|
| β (SS-SS)     | 1.000 | 1.116 | 1.222 | 1.319 | 1.410 | 1.495  | 1.575 |

### Fixed - Simply Supported (F-SS)

Buckling condition:

```
ξ₂ × cos(ξ₁) - sin(ξ₁) = 0  →  ξ₁ × sin(ξ₁) + k × cos(ξ₁) = 0    (Eq. D4)
```

| α = EI/(GAl²) | 0.000 | 0.025 | 0.050 | 0.075 | 0.100 | 0.1250 | 0.150 |
|---------------|-------|-------|-------|-------|-------|--------|-------|
| β (F-SS)      | 0.699 | 0.872 | 1.015 | 1.139 | 1.251 | 1.353  | 1.447 |

### Fixed - Free (F-FR)

Buckling condition:

```
cos(ξ₁) = 0    (Eq. D5)
```

This gives: ξ₁ = π/2

Buckling factor:

```
β = √(4 + απ²)    (Eq. D6)
```

| α = EI/(GAl²) | 0.000 | 0.025 | 0.050 | 0.075 | 0.100 | 0.1250 | 0.150 |
|---------------|-------|-------|-------|-------|-------|--------|-------|
| β (F-FR)      | 2.000 | 2.061 | 2.120 | 2.177 | 2.233 | 2.288  | 2.341 |

### Fixed - Fixed (F-F)

Buckling condition:

```
(1 - cos(ξ₁))² - sin(ξ₁)×(ξ₂ - sin(ξ₁)) = 0  →  2 - 2cos(ξ₁) + k/ξ₁ sin(ξ₁) = 0    (Eq. D7)
```

| α = EI/(GAl²) | 0.000 | 0.025 | 0.050 | 0.075 | 0.100 | 0.1250 | 0.150 |
|---------------|-------|-------|-------|-------|-------|--------|-------|
| β (F-F)       | 0.500 | 0.705 | 0.862 | 0.995 | 1.112 | 1.218  | 1.316 |

## Key Observations

### Effect of Shear Deformation

**The buckling factor increases with bending shear factor α:**
- Higher shear effects reduce buckling resistance
- The buckling length **increases** with shear deformation
- Effect is more pronounced for longer slender beams

### Comparison with Euler-Bernoulli

The Euler-Bernoulli theory (α = 0) provides the **lower bound** for buckling factors:

| Condition | EB (α=0) | Timoshenko (α=0.05) | % Increase |
|-----------|----------|-------------------|------------|
| SS-SS     | 1.0000   | 1.2220            | 22.2%      |
| F-SS      | 0.6992   | 1.0146            | 45.1%      |
| F-FR      | 2.0000   | 2.1198            | 6.0%       |
| F-F       | 0.5000   | 0.8623            | 72.5%      |

The F-F case shows the largest increase due to its higher curvature sensitivity to shear effects.

## Buckling Analysis Example

Example from the paper determines buckling loads for beams with α ranging from 0 to 0.15. The results confirm that:

1. **As α increases, buckling load decreases** (buckling length increases)
2. **Effect is non-linear** with respect to α
3. **Support conditions significantly affect** the sensitivity to shear

## Practical Implications

For design of slender beams:

1. **Neglecting shear effects (Euler-Bernoulli) is conservative** for simply supported beams
2. **Shear effects are critical** for:
   - Deep beams (high depth-to-span ratio)
   - Composite beams (lower shear stiffness)
   - High-frequency dynamic loading
3. **Boundary conditions interact** with shear effects (F-F case most sensitive)

The paper demonstrates that accurate stability analysis requires inclusion of shear deformation effects through the bending shear factor α, particularly for conditions where shear becomes significant.
