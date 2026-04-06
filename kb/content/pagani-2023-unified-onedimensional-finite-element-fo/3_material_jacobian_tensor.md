---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/3_material_jacobian_tensor"
section: "Material Jacobian Tensor and Constitutive Relations"
order: 3
tags:
  - "engineering/constitutive-relations"
  - "engineering/tangent-stiffness"
  - "engineering/material-jacobian"
summary: "Derivation of second Piola-Kirchhoff stress tensor and material Jacobian (tangent stiffness) tensor for first-invariant hyperelastic materials with volumetric-isochoric decomposition"
formulas:
  - id: "F1"
    name: "Second Piola-Kirchhoff stress tensor"
    expr: "S = 2\\frac{\\partial\\Psi}{\\partial C}"
  - id: "F2"
    name: "Volumetric stress component"
    expr: "S^{vol} = Jp C^{-1}"
  - id: "F3"
    name: "Isochoric stress component"
    expr: "S^{iso} = 2J^{-2/3}\\frac{\\partial\\bar{\\Psi}}{\\partial\\bar{I}_1}\\left[\\mathbf{1} - \\frac{1}{3}\\bar{I}_1 C^{-1}\\right]"
  - id: "F4"
    name: "Linearized constitutive equation"
    expr: "\\Delta S = \\mathbb{C} \\cdot \\frac{1}{2}\\Delta C"
  - id: "F5"
    name: "Material Jacobian tensor"
    expr: "\\mathbb{C} = \\frac{\\partial S}{\\partial E} = 2\\frac{\\partial S}{\\partial C} = 4\\frac{\\partial^2\\Psi}{\\partial C \\partial C}"
  - id: "F6"
    name: "Decomposition of material Jacobian"
    expr: "\\mathbb{C} = \\mathbb{C}^{vol} + \\mathbb{C}^{iso}"
  - id: "F7"
    name: "Volumetric Jacobian component"
    expr: "\\mathbb{C}^{vol} = J\\frac{\\partial U}{\\partial J}(C^{-1} \\otimes C^{-1} - 2I_{C^{-1}}) + J^2\\frac{\\partial^2 U}{\\partial J^2} C^{-1} \\otimes C^{-1}"
  - id: "F8"
    name: "Isochoric Jacobian component (main term)"
    expr: "\\mathbb{C}^{iso} = -\\frac{4}{3}J^{-2/3}\\frac{\\partial\\bar{\\Psi}}{\\partial\\bar{I}_1}[\\mathbf{1} \\otimes C^{-1} + C^{-1} \\otimes \\mathbf{1} - \\frac{\\bar{I}_1}{3}(I_{C^{-1}} + \\frac{1}{3}C^{-1} \\otimes C^{-1})] + J^{-4/3}\\mathbb{C}_\\Psi"
  - id: "F9"
    name: "Isochoric Jacobian Psi component"
    expr: "\\mathbb{C}_\\Psi = 4\\frac{\\partial^2\\bar{\\Psi}}{\\partial\\bar{I}_1^2}[\\mathbf{1} \\otimes \\mathbf{1} - \\frac{1}{3}\\bar{I}_1(\\mathbf{1} \\otimes C^{-1} + C^{-1} \\otimes \\mathbf{1}) + \\frac{1}{9}\\bar{I}_1^2 C^{-1} \\otimes C^{-1}]"
---

# Material Jacobian Tensor and Constitutive Relations

## Second Piola-Kirchhoff Stress Tensor

Given the stored-energy function Ψ, the second Piola-Kirchhoff (PK-2) stress tensor represents a general form of the constitutive relation:

```
S = 2 ∂Ψ/∂C
```

## Decomposition into Volumetric and Isochoric Parts

Substituting the additive decomposition Ψ = U(J) + Ψ̄(Ī₁) into the stress definition, one can express the PK-2 stress as:

```
S = S^vol + S^iso
```

where:

```
S^vol = Jp C⁻¹

S^iso = 2J^(-2/3) (∂Ψ̄/∂Ī₁)[1 - (1/3)Ī₁ C⁻¹]
```

In these expressions:
- 1 is the unity (identity) matrix
- C⁻¹ is the inverse of the right Cauchy-Green strain tensor
- p = ∂U/∂J is the hydrostatic pressure
- The expression for S^iso holds specifically for first-invariant hyperelasticity models

## Linearized Constitutive Equation

According to Holzapfel's framework, the nonlinear constitutive equation can be transformed into an incremental (linearized) form:

```
ΔS = ℂ · (1/2)ΔC
```

This represents a linear relation between the increments of S and C, and is referred to as the linearized constitutive equation.

## Material Jacobian Tensor Definition

The fourth-order elasticity tensor (material Jacobian tensor) is defined as:

```
ℂ = ∂S/∂E = 2 ∂S/∂C = 4 ∂²Ψ/∂C∂C
```

where E = (1/2)(C - 1) is the Green-Lagrange strain tensor.

## Complete Expression of Material Jacobian

Substituting the decomposed stress expression and assuming U = U(J) and Ψ̄ = Ψ̄(Ī₁), the material Jacobian tensor can be written as:

```
ℂ = ℂ^vol + ℂ^iso
```

### Volumetric Component

```
ℂ^vol = J(∂U/∂J)(C⁻¹ ⊗ C⁻¹ - 2I_C⁻¹) + J² (∂²U/∂J²) C⁻¹ ⊗ C⁻¹
```

### Isochoric Component

```
ℂ^iso = -(4/3)J^(-2/3) (∂Ψ̄/∂Ī₁)[1 ⊗ C⁻¹ + C⁻¹ ⊗ 1 
        - (Ī₁/3)(I_C⁻¹ + (1/3)C⁻¹ ⊗ C⁻¹)] + J^(-4/3) ℂ_Ψ
```

where the Ψ-dependent component is:

```
ℂ_Ψ = 4(∂²Ψ̄/∂Ī₁²)[1 ⊗ 1 - (1/3)Ī₁(1 ⊗ C⁻¹ + C⁻¹ ⊗ 1) 
      + (1/9)Ī₁² C⁻¹ ⊗ C⁻¹]
```

## Key Notational Details

- ⊗ denotes the dyadic product operator
- I_C⁻¹ = ∂C⁻¹/∂C is the fourth-order identity tensor in the reference configuration
- The decomposition into volumetric and isochoric parts is a fundamental aspect of the formulation, enabling proper handling of incompressibility constraints

## Implications for Numerical Implementation

The analytical expressions for the material Jacobian are essential for:

1. **Newton-Raphson iterations**: The tangent stiffness matrix used in incremental nonlinear analysis
2. **Convergence analysis**: Proper linearization ensures quadratic convergence near the solution
3. **Stability**: Correct material Jacobian prevents spurious convergence or divergence
4. **Generality**: The expressions work for all first-invariant hyperelastic models with the given strain energy decomposition

The separation into volumetric and isochoric contributions naturally decouples the penalty method handling of incompressibility from the material response.
