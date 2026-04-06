---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/05-stiffness-matrices-second-order"
section: "Second-order Element Stiffness Matrices"
order: 5
tags:
  - "engineering/stiffness-matrix"
  - "engineering/second-order-analysis"
  - "engineering/finite-elements"
summary: "Derivation and formulation of second-order element stiffness matrices for compression and tension cases, including fixed-fixed and fixed-hinged configurations."
formulas:
  - id: "F29"
    name: "Second-order Stiffness - Compression Case"
    expr: "K_Tbl = (EI k/l²) × [K₁₁ K₁₂ -K₁₁ K₁₂; K₂₂ -K₁₂ K₂₄; K₁₁ -K₁₂; sym K₂₂]"
  - id: "F30"
    name: "K11 - Compression"
    expr: "K₁₁ = -kξ₂sin(ξ₁)/Δ"
  - id: "F31"
    name: "K12 - Compression"
    expr: "K₁₂ = -k(1-cos(ξ₁))/Δ"
  - id: "F32"
    name: "K22 - Compression"
    expr: "K₂₂ = k(cos(ξ₁)-1/ξ₂sin(ξ₁))/Δ"
  - id: "F33"
    name: "Delta - Compression"
    expr: "Δ = 2-2cos(ξ₁)-ξ₂sin(ξ₁)"
  - id: "F34"
    name: "Second-order Stiffness - Tension Case"
    expr: "K_Tbl = (EI k/l²) × [K₁₁ K₁₂ -K₁₁ K₁₂; K₂₂ -K₁₂ K₂₄; K₁₁ -K₁₂; sym K₂₂]"
  - id: "F35"
    name: "K11 - Tension"
    expr: "K₁₁ = kξ₄sinh(ξ₃)/Δ"
  - id: "F36"
    name: "K12 - Tension"
    expr: "K₁₂ = -k(1-cosh(ξ₃))/Δ"
  - id: "F37"
    name: "Delta - Tension"
    expr: "Δ = 2-2cosh(ξ₃)+ξ₄sinh(ξ₃)"
---

## Second-order Element Stiffness Matrix - Fixed-Fixed

The second-order analysis introduces axial forces which modify the element stiffness matrix. The fundamental relationship remains:

```
S = K_Tbl × V    (Eq. 18 extended)
```

For a fixed-fixed element with second-order effects, the stiffness matrix depends on whether the axial force is tension or compression.

### Case 1: Compressive Force with kα > -1

From the second-order analysis (Case 1), the element stiffness matrix is derived from boundary conditions and continuity equations (Eqs. 56a-56h):

```
Static compatibility:
T_i = -T(x=0) → T_i = -N × C₁                                    (Eq. 56a)
M_i = M(x=0) → M_i = A₁                                          (Eq. 56b)
T_k = T(x=l) → T_k = N × C₁                                      (Eq. 56c)
M_k = -M(x=l) → M_k = -A₁ cos(ξ₁) - B₁ sin(ξ₁)                 (Eq. 56d)

Geometric compatibility:
w(x=0) = w_i → N × w_i = -A₁ + N × D₁                          (Eq. 56e)
φ(x=0) = φ_i → N × φ_i = -B₁ξ₂/l + N × C₁                      (Eq. 56f)
w(x=l) = w_k → N × w_k = -A₁ cos(ξ₁) - B₁ sin(ξ₁) + N×C₁×l + N×D₁    (Eq. 56g)
φ(x=l) = φ_k → N × φ_k = A₁ ξ₂/l × sin(ξ₁) - B₁ ξ₂/l × cos(ξ₁) + N×C₁    (Eq. 56h)
```

The resulting element stiffness matrix is:

```
K_Tbl = (EI k/l²) × [
  K₁₁                K₁₂                -K₁₁               K₁₂
  (K₂₂)              -K₁₂               K₂₄
  K₁₁                -K₁₂
  sym                K₂₂
]    (Eq. 57)
```

Where:

```
K₁₁ = -kξ₂ sin(ξ₁)/Δ                                    (Eq. 58)
K₁₂ = -k(1 - cos(ξ₁))/Δ
K₂₂ = k(cos(ξ₁) - 1/ξ₂ sin(ξ₁))/Δ
K₂₄ = k(-1 + 1/ξ₂ sin(ξ₁))/Δ
Δ = 2 - 2cos(ξ₁) - ξ₂ sin(ξ₁)
```

### Fixed-Hinged Configuration - Compression

For a fixed end at left and hinged at right:

```
K_Tbl = [
  K₁₁ EI/l³          K₁₂ EI/l²         -K₁₁ EI/l³
  K₁₂ EI/l          -K₁₂ EI/l²
  K₁₁ EI/l³
  sym
]    (Eq. 59)
```

Where:

```
K₁₁ = -kx ξ₂cos(ξ₁)/Δ                                   (Eq. 59)
K₁₂ = -kx sin(ξ₁)/Δ
Δ = sin(ξ₁) - ξ₂ cos(ξ₁)
```

### Case 2: Tensile Force or Compression with kα < -1

For tension (k > 0) or compression with kα < -1, hyperbolic functions replace trigonometric functions:

```
K_Tbl = (EI k/l²) × [
  K₁₁                K₁₂                -K₁₁               K₁₂
  K₂₂                -K₁₂               K₂₄
  K₁₁                -K₁₂
  sym                K₂₂
]    (Eq. 67)
```

Where:

```
K₁₁ = kξ₄ sinh(ξ₃)/Δ                                    (Eq. 68)
K₁₂ = -k(1 - cosh(ξ₃))/Δ
K₂₂ = k(cosh(ξ₃) - 1/ξ₄ sinh(ξ₃))/Δ
K₂₄ = k(-1 + 1/ξ₄ sinh(ξ₃))/Δ
Δ = 2 - 2cosh(ξ₃) + ξ₄ sinh(ξ₃)
```

Note: The parameter ξ₄ has a positive value for tension and negative for compression with kα < -1.

### Fixed-Hinged Configuration - Tension

For tension (k > 0):

```
K_Tbl = [
  K₁₁ EI/l³          K₁₂ EI/l²         -K₁₁ EI/l³
  K₁₂ EI/l          -K₁₂ EI/l²
  K₁₁ EI/l³
  sym
]    (Eq. 69)
```

Where:

```
K₁₁ = -kx ξ₄cosh(ξ₃)/Δ                                  (Eq. 69a)
K₁₂ = -kx sinh(ξ₃)/Δ                                   (Eq. 69b)
Δ = sinh(ξ₃) - ξ₄ cosh(ξ₃)                             (Eq. 70)
```

## Numerical Example: Element Stiffness Calculation

Example 3 calculates a second-order element stiffness matrix with:
- k = -1.5 (compressive axial force)
- α = 0.05 (bending shear factor)
- Length L = 4.0 m

Using Equations (57) and (58):

```
K_Tbl = EI × [
   0.0917    0.2303   -0.0917    0.2303
   0.2303    0.6759   -0.2303    0.2454
  -0.0917   -0.2303    0.0917   -0.2303
   0.2303    0.2454   -0.2303    0.6759
]
```

This matrix can be verified against the formula by Hu et al. [8]. The parameter relationships show equivalence:
- χ = 1 + k
- λ = ξ₁
- χλ = ξ₂
- (λ/L)² = -k/L²

## Comparison with Hu et al. Formulation

The paper demonstrates that the element stiffness matrices derived here are **equivalent** to those presented by Hu et al. [8] through parameter transformations. However, the present approach:

1. **Extends to tension cases** (Hu et al. only covers compression with k > -1)
2. **Provides clearer physical interpretation** through the material law approach
3. **Handles both compression and tension** in a unified framework
4. **Includes Winkler foundation effects** (not covered in Hu et al.)

The results are numerically identical when parameters are properly transformed, validating the accuracy of the derived matrices.
