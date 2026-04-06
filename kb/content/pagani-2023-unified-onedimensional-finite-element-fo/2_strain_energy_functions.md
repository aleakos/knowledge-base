---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/2_strain_energy_functions"
section: "Strain Energy Functions for Hyperelastic Materials"
order: 2
tags:
  - "engineering/hyperelasticity"
  - "engineering/constitutive-relations"
  - "engineering/strain-energy-functions"
summary: "Decomposition of strain energy into volumetric and isochoric parts with four hyperelastic models suitable for nearly incompressible soft materials"
formulas:
  - id: "F1"
    name: "Strain energy function"
    expr: "\\Psi = \\Psi(I_1, I_2, I_3)"
  - id: "F2"
    name: "First invariant of C"
    expr: "I_1 = tr(C)"
  - id: "F3"
    name: "Second invariant of C"
    expr: "I_2 = \\frac{1}{2}(I_1^2 - tr(C^2))"
  - id: "F4"
    name: "Third invariant of C"
    expr: "I_3 = det(C)"
  - id: "F5"
    name: "Additive decomposition of strain energy"
    expr: "\\Psi = U(J) + \\bar{\\Psi}(\\bar{I}_1, \\bar{I}_2)"
  - id: "F6"
    name: "Volumetric penalty function (Sussman-Bathe)"
    expr: "U(J) = \\frac{1}{D_1}(J - 1)^2"
  - id: "F7"
    name: "Neo-Hookean isochoric energy"
    expr: "\\bar{\\Psi}(\\bar{I}_1) = \\frac{\\mu}{2}(\\bar{I}_1 - 3)"
  - id: "F8"
    name: "Gent isochoric energy"
    expr: "\\bar{\\Psi}(\\bar{I}_1) = -\\frac{\\mu J_m}{2} \\ln\\left(1 - \\frac{\\bar{I}_1 - 3}{J_m}\\right)"
  - id: "F9"
    name: "Exp-Ln isochoric energy"
    expr: "\\bar{\\Psi}(\\bar{I}_1) = A\\left[\\frac{1}{a}\\exp(a(\\bar{I}_1 - 3)) + b(\\bar{I}_1 - 2)(1 - \\ln(\\bar{I}_1 - 2)) - \\frac{1}{a} - b\\right]"
  - id: "F10"
    name: "Fung-Demiray isochoric energy"
    expr: "\\bar{\\Psi}(\\bar{I}_1) = \\frac{\\beta}{2\\alpha}[\\exp(2\\alpha(\\bar{I}_1 - 3)) - 1]"
---

# Strain Energy Functions for Hyperelastic Materials

## General Formulation for Isotropic Materials

For isotropic hyperelastic materials, the strain energy function can be expressed in terms of the principal stretches (λ₁, λ₂, λ₃) or equivalently in terms of the invariants of the right Cauchy-Green strain tensor:

```
Ψ = Ψ(I₁, I₂, I₃)
```

where the invariants are defined as:

```
I₁ = tr(C)
I₂ = 1/2(I₁² - tr(C²))
I₃ = det(C)
```

and C = F^T F is the right Cauchy-Green strain tensor.

## Nearly Incompressible Materials: Volumetric-Isochoric Split

For nearly incompressible materials where the Jacobian determinant J = det(F) ≈ 1, it is convenient to decompose the deformation gradient following Flory's approach:

```
F = F_vol F̄
```

where:
- F_vol = J^(1/3) 1 represents volumetric changes
- F̄ = J^(-1/3) F represents isochoric (volume-preserving) changes

This decomposition allows an additive split of the strain energy function:

```
Ψ = U(J) + Ψ̄(Ī₁, Ī₂)
```

where:
- U(J) is the volumetric penalty function acting to enforce incompressibility
- Ψ̄(Ī₁, Ī₂) is the isochoric potential
- Ī₁ and Ī₂ are the deviatoric strain invariants

## Volumetric Function

The volumetric function acts as a penalization of incompressibility. Following Sussman and Bathe:

```
U(J) = 1/D₁(J - 1)²
```

where D₁ = 2/κ is the material incompressibility parameter and κ is the bulk modulus.

## Isochoric Energy Functions (First-Invariant Models)

This work focuses on first-invariant hyperelasticity where Ψ̄ = Ψ̄(Ī₁). Four prominent models are considered:

### 1. Neo-Hookean Model

The simplest and most widely used model for its computational efficiency:

```
Ψ̄(Ī₁) = μ/2(Ī₁ - 3)
```

where μ is the infinitesimal shear modulus.

### 2. Gent Model

A two-parameter model capturing limited extensibility behavior:

```
Ψ̄(Ī₁) = -μJ_m/2 ln(1 - (Ī₁ - 3)/J_m)
```

where J_m is the limit value of (Ī₁ - 3), representing maximum stretch.

### 3. Exp-Ln Model

A recent formulation by Khajehsaeid et al. that effectively captures moderate and large strain regimes:

```
Ψ̄(Ī₁) = A[1/a exp(a(Ī₁ - 3)) + b(Ī₁ - 2)(1 - ln(Ī₁ - 2)) - 1/a - b]
```

where:
- A = μ/2
- Parameters a and b adjust moderate and large stretch regimes respectively

### 4. Fung-Demiray Model

More appropriate for soft tissue biomechanics:

```
Ψ̄(Ī₁) = β/(2α)[exp(2α(Ī₁ - 3)) - 1]
```

where β = μ is the infinitesimal shear modulus and α is the stiffening parameter.

## General Remarks

Although these strain energy functions have been demonstrated to be effective for polymeric and biological materials, the formulation is general enough that other strain energy functions can be used without loss of generality. The additive decomposition into volumetric and isochoric parts is a standard approach that:

- Decouples volumetric locking issues from material nonlinearity
- Allows use of penalty methods to enforce incompressibility
- Maintains mathematical rigor through proper convexity requirements
- Extends naturally to more complex constitutive models
