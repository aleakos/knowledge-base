---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/04-second-order-analysis"
section: "Second-order Analysis - Compression and Tension"
order: 4
tags:
  - "engineering/second-order-analysis"
  - "engineering/axial-force"
  - "engineering/stability"
summary: "Second-order analysis including axial forces, governing equations for compression and tension cases, and derivation of second-order element stiffness matrices."
formulas:
  - id: "F19"
    name: "Second-order Equilibrium - Axial Force"
    expr: "d²M(x)/dx² + N × d²w(x)/dx² = -q(x)"
  - id: "F20"
    name: "Second-order Material Law"
    expr: "(1 + N/(κGA)) × d²M(x)/dx² - N/EI × M(x) = -q(x)"
  - id: "F21"
    name: "Axial Force Parameter"
    expr: "N = k × EI/l²"
  - id: "F22"
    name: "Differential Equation - Compression"
    expr: "(1 + kα) × d²M(x)/dx² - k/l² × M(x) = 0"
  - id: "F23"
    name: "Parameter xi1 - Compression"
    expr: "ξ₁ = √(-k/(1 + kα))"
  - id: "F24"
    name: "Bending Moment - Compression"
    expr: "M(x) = A₁ cos(ξ₁ x/l) + B₁ sin(ξ₁ x/l)"
  - id: "F25"
    name: "Parameter xi2 - Rotation"
    expr: "ξ₂ = √(-k(1 + kα))"
  - id: "F26"
    name: "Parameter xi3 - Tension"
    expr: "ξ₃ = √(k/(1 + kα))"
  - id: "F27"
    name: "Bending Moment - Tension"
    expr: "M(x) = A₂ cosh(ξ₃ x/l) + B₂ sinh(ξ₃ x/l)"
  - id: "F28"
    name: "Parameter xi4 - Tension Rotation"
    expr: "ξ₄ = ±√(k(1 + kα))"
---

## Second-order Analysis of Timoshenko Beams

Second-order analysis accounts for the effects of axial forces (tension or compression) on bending behavior.

### Governing Equations Without Foundation

For a constant cross-section beam with constant axial force N (positive in tension):

```
d²M(x)/dx² + N × d²w(x)/dx² = -q(x)    (Eq. 39)
```

Combining Equation (39) with material law (Eq. 9):

```
(1 + N/(κGA)) × d²M(x)/dx² - N/EI × M(x) = -q(x)    (Eq. 40)
```

### Normalized Parameters

To simplify analysis, define the axial force parameter:

```
N = k × EI/l²    (Eq. 47)
```

Where **k** is dimensionless and can be positive (tension) or negative (compression).

Substituting into Equation (40) with the bending shear factor (Eq. 13):

```
(1 + kα) × d²M(x)/dx² - k/l² × M(x) = 0    (Eq. 48)
```

### Case 1: Compressive Force with kα > -1

For compression (k < 0), define:

```
ξ₁ = √(-k/(1 + kα))    (Eq. 50)
```

The bending moment solution is:

```
M(x) = A₁ cos(ξ₁ x/l) + B₁ sin(ξ₁ x/l)    (Eq. 49)
```

The deflection is obtained from Equation (39):

```
N × dw(x)/dx = A₁ ξ₁ sin(ξ₁ x/l) - B₁ ξ₁ cos(ξ₁ x/l) + N × l × C₁    (Eq. 51)

N × w(x) = -A₁ cos(ξ₁ x/l) - B₁ sin(ξ₁ x/l) + N × C₁ × x + N × D₁    (Eq. 52)
```

The rotation from Equations (12) and (51):

```
N × φ(x) = A₁ ξ₂ sin(ξ₁ x/l) - B₁ ξ₂ cos(ξ₁ x/l) + N × l × C₁    (Eq. 53)
```

Where:

```
ξ₂ = √(-k(1 + kα))    (Eq. 54)
```

The transverse force:

```
T(x) = N × C₁    (Eq. 55)
```

### Case 2: Tensile Force or Compression with kα < -1

For tension (k > 0) or compression with kα < -1, define:

```
ξ₃ = √(k/(1 + kα))    (Eq. 61)
```

The bending moment solution uses hyperbolic functions:

```
M(x) = A₂ cosh(ξ₃ x/l) + B₂ sinh(ξ₃ x/l)    (Eq. 60)
```

Similar to Case 1, the deflection is:

```
N × dw(x)/dx = -A₂ ξ₃ sinh(ξ₃ x/l) - B₂ ξ₃ cosh(ξ₃ x/l) + N × l × C₂    (Eq. 62)

N × w(x) = -A₂ cosh(ξ₃ x/l) - B₂ sinh(ξ₃ x/l) + N × C₂ × x + N × D₂    (Eq. 63)
```

The rotation:

```
N × φ(x) = -A₂ ξ₄ sinh(ξ₃ x/l) - B₂ ξ₄ cosh(ξ₃ x/l) + N × l × C₂    (Eq. 64)
```

Where:

```
ξ₄ = ±√(k(1 + kα))    (Eq. 65)
```

The transverse force:

```
T(x) = N × C₂    (Eq. 66)
```

### Effects on Bending and Stability

**Tensile Force Effects:**
- With increasing tensile force, bending moments **decrease** (in absolute values)
- With increasing bending shear factor, bending moments **decrease** (in absolute values)

**Compressive Force Effects:**
- With increasing compressive force, bending moments **increase** (in absolute values)
- With increasing bending shear factor, bending moments **increase** (in absolute values)

**Critical Observation:**
As compressive force approaches the buckling load (k → -1), the parameters ξ₁ and ξ₂ approach infinity and the moment approach singular behavior, indicating loss of stability.

### Beam on Elastic Winkler Foundation with Axial Load

For a beam resting on a Winkler foundation with stiffness K_w and axial force N:

```
d²M(x)/dx² + N × d²w(x)/dx² - K_w × w(x) = -q(x)    (Eq. 71)
```

Combining with material law:

```
K_w × w(x) = (1 + N/(κGA)) × d²M(x)/dx² - N/EI × M(x) + q(x)    (Eq. 72)
```

Differentiating twice and combining yields:

```
(1 + N/(κGA)) × d⁴M(x)/dx⁴ - (N/EI + K_w/(κGA)) × d²M(x)/dx² + K_w/EI × M(x) = -d²q(x)/dx²    (Eq. 73)
```

The solution of Equation (73) yields M(x) with four integration constants, from which shear forces and deflections can be determined.
