---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/07-numerical-examples"
section: "Numerical Examples and Validation"
order: 7
tags:
  - "engineering/numerical-methods"
  - "engineering/validation"
  - "engineering/examples"
summary: "Detailed numerical examples validating the closed-form solutions against principle of virtual work, including first-order and second-order analysis cases."
formulas:
  - id: "F45"
    name: "Virtual Work Deflection Integral"
    expr: "δ(x₀) = ∫[M(x)m(x)/EI + V(x)v(x)/(κGA)]dx"
  - id: "F46"
    name: "Moment - Concentrated Load"
    expr: "M(x) = px(l-x)/2"
  - id: "F47"
    name: "Virtual Unit Load Moment"
    expr: "m(x) = x(l-x₀)/l for x ≤ x₀"
  - id: "F48"
    name: "Moment - Uniformly Distributed Load"
    expr: "M(x) = (p/24)[x⁴ - (pl/12)x³ - α(pl²/2)x² + ((1/24)+(α/2))(pl³)x]"
  - id: "F49"
    name: "Second-order Moment - Compression"
    expr: "M(x=l/2) = [1 - cos(ξ₁/2) + (cos(ξ₁)-1)/sin(ξ₁) × sin(ξ₁/2)] × (pl²/k)"
  - id: "F50"
    name: "Second-order Moment - Tension"
    expr: "M(x=l/2) = [1 - cosh(ξ₃/2) + (cosh(ξ₃)-1)/sinh(ξ₃) × sinh(ξ₃/2)] × (pl²/k)"
---

## Numerical Validation Examples

The paper provides comprehensive numerical examples to validate the closed-form solutions. All results are verified against the **principle of virtual work**, which provides exact reference values.

## Example 1: Simply Supported Beam with Distributed Load (First-order)

### Configuration

```
Beam properties:
- Load: p = 10 kN/m
- Length: L = 10 m
- Section: b = 0.3 m, H = 0.5 m
- Material: E = 34.5×10⁶ kN/m², ν = 0.3, κ = 5/6
- Cross-section: rectangular
- Support: Simply supported at both ends
```

### Closed-form Solution

Using Equations (14) and (15) with boundary conditions:

```
EI × w(x) = (p/24)[x⁴ - (pl/12)x³ - α(pl²/2)x² + ((1/24)+(α/2))(pl³)x]    (Eq. 74)
```

### Results Comparison

| Node Position (m) | Virtual Work (mm) | Present Study (mm) | Agreement |
|-------------------|-------------------|-------------------|-----------|
| 0.0               | 0.00000           | 0.00000           | Exact     |
| 1.0               | 0.00382           | 0.00382           | Exact     |
| 2.0               | 0.00722           | 0.00722           | Exact     |
| 3.0               | 0.00988           | 0.00988           | Exact     |
| 4.0               | 0.01157           | 0.01157           | Exact     |
| 5.0 (midspan)     | 0.01215           | 0.01215           | Exact     |
| 6.0               | 0.01157           | 0.01157           | Exact     |
| 7.0               | 0.00988           | 0.00988           | Exact     |
| 8.0               | 0.00722           | 0.00722           | Exact     |
| 9.0               | 0.00382           | 0.00382           | Exact     |
| 10.0              | 0.00000           | 0.00000           | Exact     |

**Conclusion:** Perfect agreement at all points validates the first-order analysis methodology.

## Example 2: Fixed-Pinned Beam with Concentrated Load (First-order)

### Configuration

```
Beam properties:
- Load: P = 10.0 kN at x = 5.0 m
- Total Length: L = 8.0 m
- Left support: Fixed (a = 5.0 m)
- Right support: Simply supported (b = 3.0 m)
- Same material and section as Example 1
```

### Results: Moments at Key Locations

| α = EI/(GAl²) | 0.0000 | 0.0250 | 0.0500 | 0.0750 | 0.1000 | 0.1250 | 0.1500 |
|---------------|--------|--------|--------|--------|--------|--------|--------|
| **Calculations as described in this paper** |
| MFEM = | -12.89 | -11.99 | -11.21 | -10.52 | -9.92 | -9.38 | -8.89 |
| MuL = | 13.92 | 14.25 | 14.55 | 14.80 | 15.03 | 15.23 | 15.42 |
| **Calculations according to principle of virtual work (exact)** |
| MFEM = | -12.89 | -11.99 | -11.21 | -10.52 | -9.92 | -9.38 | -8.89 |
| MuL = | 13.92 | 14.25 | 14.55 | 14.80 | 15.03 | 15.23 | 15.42 |

**Observations:**
- Moment at fixed end: Decreases (in absolute value) with increasing shear factor
- Moment under load: Increases with increasing shear factor
- Agreement is exact at all shear factor values

## Example 3: Simply Supported Beam with Distributed Load and Axial Force (Second-order)

### Configuration

```
Beam: Simply supported at both ends
- Distributed load: p (variable)
- Axial force: N (variable - compression)
- Analysis: Second-order with various k values (Eq. 47)
- Shear factors: α = 0.025, 0.05, 0.075, 0.10
```

### Moments at Midspan (L/2)

**Compression case (k < -1):**

```
M(x=l/2) = [1 - cos(ξ₁/2) + (cos(ξ₁)-1)/sin(ξ₁) × sin(ξ₁/2)] × (pl²/k)    (Eq. 76)
```

| k = | -7.50 | -6.00 | -5.00 | -4.00 | -3.00 | -2.00 | -1.00 | 0.00 | 1.00 | 2.00 | 3.00 | 4.00 |
|-----|-------|-------|-------|-------|-------|-------|-------|------|------|------|------|------|
| **α = 0.025** |
| MMP/pl² | 2.447 | 0.528 | 0.345 | 0.256 | 0.203 | 0.168 | 0.144 | 0.125 | 0.111 | 0.099 | 0.090 | 0.082 |

| k = | -6.50 | -6.00 | -5.00 | -4.00 | -3.00 | -2.00 | -1.00 | 0.00 | 1.00 | 2.00 | 3.00 | 4.00 |
|-----|-------|-------|-------|-------|-------|-------|-------|------|------|------|------|------|
| **α = 0.05** |
| MMP/pl² | 7.854 | 1.395 | 0.524 | 0.322 | 0.231 | 0.180 | 0.148 | 0.125 | 0.108 | 0.096 | 0.085 | 0.077 |

| k = | -5.50 | -5.00 | -4.00 | -3.00 | -2.00 | -1.00 | 0.00 | 1.00 | 2.00 | 3.00 | 4.00 |
|-----|-------|-------|-------|-------|-------|-------|------|------|------|------|------|
| **α = 0.075** |
| MMP/pl² | 4.259 | 1.083 | 0.432 | 0.268 | 0.194 | 0.152 | 0.125 | 0.106 | 0.092 | 0.081 | 0.073 |

| k = | -4.50 | -4.00 | -3.00 | -2.00 | -1.00 | 0.00 | 1.00 | 2.00 | 3.00 | 4.00 |
|-----|-------|-------|-------|-------|-------|------|------|------|------|------|
| **α = 0.10** |
| MMP/pl² | 1.364 | 0.655 | 0.320 | 0.211 | 0.157 | 0.125 | 0.104 | 0.089 | 0.077 | 0.073 |

**Key Observations:**
- As k → -1: Moment approaches infinity (buckling condition)
- Increasing compression (more negative k): Moment increases significantly
- Increasing tension (positive k): Moment decreases
- Shear factor effect: Higher α increases moment magnitude in compression

## Example 4: Fixed-Pinned Beam with Concentrated Load and Axial Force (Second-order)

### Configuration

```
Beam: Fixed at left, simply supported at right
- Concentrated load: P = 10.0 kN at x = 5.0 m
- Axial force: N (variable, both compression and tension)
- Span: L = 8.0 m
- Analysis: Second-order
```

### Results: Moments at Fixed End and Under Load

| k = | -4.0 (compression) |
|-----|------------------|
| **α = 0.0000** |
| MFEM = | -15.65 |
| MuL = | 16.73 |
| **α = 0.0250** |
| MFEM = | -16.99 |
| MuL = | 19.72 |
| **α = 0.0500** |
| MFEM = | -18.98 |
| MuL = | 23.70 |

| k = | 4.0 (tension) |
|-----|--------------|
| **α = 0.0000** |
| MFEM = | -11.04 |
| MuL = | 12.03 |
| **α = 0.0250** |
| MFEM = | -9.31 |
| MuL = | 11.27 |
| **α = 0.0500** |
| MFEM = | -7.98 |
| MuL = | 10.60 |

**Comparison of Compression vs Tension:**
- Compression increases moment magnitudes (stabilizing effect opposes external moment)
- Tension decreases moment magnitudes (destabilizing effect adds to external moment)
- Shear effects amplify both compression and tension influences

## Validation Methodology

All examples are validated using the **principle of virtual work**:

```
δ(x₀) = ∫[M(x)m(x)/EI + V(x)v(x)/(κGA)]dx    (Eq. A1)
```

Where:
- M(x), V(x): Real moments and shears from distributed load
- m(x), v(x): Virtual moments and shears from unit load at point of interest

The perfect agreement across all examples (first-order and second-order) confirms the accuracy and validity of the closed-form solutions and material law approach.
