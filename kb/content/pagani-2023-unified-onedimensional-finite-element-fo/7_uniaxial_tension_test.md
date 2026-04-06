---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/7_uniaxial_tension_test"
section: "Numerical Results: Uniaxial Tension"
order: 7
tags:
  - "engineering/numerical-validation"
  - "engineering/hyperelasticity"
  - "engineering/uniaxial-loading"
summary: "Validation of CUF beam model through uniaxial tension test with analytical solutions for four hyperelastic material models"
formulas:
  - id: "F1"
    name: "First invariant for uniaxial tension"
    expr: "\\bar{I}_1 = I_1 = \\lambda_1^2 + \\frac{2}{\\lambda_1}"
  - id: "F2"
    name: "Isochoric strain energy for uniaxial tension"
    expr: "\\bar{\\Psi} = \\bar{\\Psi}(\\lambda_1)"
  - id: "F3"
    name: "Lagrangian (PK-1) stress"
    expr: "P_{11} = \\frac{\\partial\\bar{\\Psi}}{\\partial\\lambda_1} = \\frac{\\partial\\bar{\\Psi}}{\\partial\\bar{I}_1}\\frac{\\partial\\bar{I}_1}{\\partial\\lambda_1} = 2\\frac{\\partial\\bar{\\Psi}}{\\partial\\bar{I}_1}\\left(\\lambda_1 - \\frac{1}{\\lambda_1^2}\\right)"
  - id: "F4"
    name: "Second Piola-Kirchhoff stress"
    expr: "S_{11} = \\frac{1}{\\lambda_1}\\frac{\\partial\\bar{\\Psi}}{\\partial\\lambda_1} = \\frac{1}{\\lambda_1}P_{11}"
  - id: "F5"
    name: "Cauchy (true) stress"
    expr: "\\sigma_{11} = J^{-1}\\lambda_1\\frac{\\partial\\bar{\\Psi}}{\\partial\\lambda_1} = \\lambda_1 P_{11}"
---

# Numerical Results: Uniaxial Tension Test

## Problem Setup

The first validation test addresses uniaxial tension, for which the analytical solution is straightforward. For first-invariant hyperelastic materials under uniaxial tension with the assumption that the volume ratio J ≈ 1:

```
Ī₁ = I₁ = λ₁² + 2/λ₁

Ψ̄ = Ψ̄(λ₁)
```

where λ₁ is the stretch ratio in the traction direction, an eigenvalue of F.

## Analytical Solution

According to Holzapfel's formulation, the first Piola-Kirchhoff (PK-1) stress component is:

```
P₁₁ = ∂Ψ̄/∂λ₁ = (∂Ψ̄/∂Ī₁)(∂Ī₁/∂λ₁) = 2(∂Ψ̄/∂Ī₁)(λ₁ - 1/λ₁²)
```

From the PK-1 stress, the second Piola-Kirchhoff (PK-2) and Cauchy (true) stresses are obtained:

```
S₁₁ = (1/λ₁)P₁₁

σ₁₁ = λ₁ P₁₁
```

## Finite Element Model

A cubic sample is modeled as a beam discretized with one single finite element along the Y-axis. The element uses:
- **Discretization along beam axis**: Linear (two-node, B2) Lagrangian element
- **Cross-section approximation**: Bilinear in XZ (LE-4 Lagrange expansion)
- **Material**: Four different hyperelastic models (Neo-Hookean, Gent, Exp-Ln, Fung-Demiray)

## Material Parameters

| Model | Parameters | Unit |
|-------|-----------|------|
| Neo-Hookean | μ = 0.27 | MPa |
| Gent | μ = 0.27, J_m = 85.91 | MPa, – |
| Exp-Ln | A = 0.195, α = 0.018, b = 0.22 | MPa, –, – |
| Fung-Demiray | β = 0.2, α = 16 | MPa, – |

The penalty parameter D₁ = 33 × 10⁻⁹ MPa⁻¹ is used for all cases.

## Validation Results

The stress-stretch curves are compared between:
1. Analytical solutions (derived from strain energy functions)
2. CUF-based finite element results

### Key Findings

**Perfect Agreement**: The comparison demonstrates excellent matching between the proposed finite element model and analytical solutions for all four material models:

- **Neo-Hookean**: Linear elastic-like behavior with continuous hardening
- **Gent**: Saturation behavior at large stretches due to limited extensibility
- **Exp-Ln**: Smooth transition between moderate and large strain regimes
- **Fung-Demiray**: Exponential stiffening behavior suitable for soft tissues

### Robustness Across Theory Orders

Although not documented in detail for brevity, convergence studies using different numbers of finite elements and different F_s approximation functions (both Taylor Expansion TE and higher-order Lagrange Expansion LE) confirm:

- Analytical solutions are perfectly superimposed on CUF simulation results
- The formulation is robust to theory approximation order changes
- Both TE and LE models converge to the same solution

## Deformed Configurations

The analysis includes visualization of deformed states at multiple stretch levels (λ ranging approximately from 1.24 to 7.36), showing:

- Progressive stretching of the cubic sample
- Necking-type behavior captured by the 3D kinematics
- Significant geometric nonlinearities at large stretches
- Accurate representation of material nonlinearity from hyperelastic constitutive laws

## Significance of This Test

The uniaxial tension test serves as a fundamental validation because:

1. **Analytical Reference**: Closed-form solutions exist for all strain energy functions
2. **Simple Geometry**: No bending or other complicating effects
3. **Pure Material Nonlinearity**: Tests the constitutive implementation independently
4. **Large Strain Regime**: Validates the formulation from small to extremely large deformations
5. **Multiple Models**: Confirms applicability across different hyperelastic models

This test establishes confidence in the material implementation and serves as a baseline for more complex problems involving combined loading and geometric effects.
