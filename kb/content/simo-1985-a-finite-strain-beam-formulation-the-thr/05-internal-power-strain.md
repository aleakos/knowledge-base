---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/05-internal-power-strain"
section: "Internal Power and Strain Measures"
order: 5
tags:
  - "engineering/energy"
  - "engineering/strain-measures"
  - "engineering/thermodynamics"
summary: "Derivation of reduced internal power expression and identification of conjugate strain measures in spatial and material descriptions"
formulas:
  - id: "F28"
    name: "Deformation gradient from kinematic assumption"
    expr: "F = Σᵣ₌₁² tᵣ ⊗ Eᵣ + [∂φ₀/∂S + ω × (x-φ₀)] ⊗ E₃"
  - id: "F29"
    name: "Internal power general form"
    expr: "Π = ∫_(A×I) P:Ḟ dξ dS = ∫_I [f·γ̇ + m·ω̇] dS"
  - id: "F30"
    name: "Spatial strain rate measure"
    expr: "γ(S,t) = ∂φ₀/∂S(S,t) - n(S,t)"
  - id: "F31"
    name: "Objective rate (corrected rate)"
    expr: "(·)^v = ∂(·)/∂t - w × (·)"
  - id: "F32"
    name: "Material strain rate vector"
    expr: "Γ = A'[∂φ₀/∂S - n] = A'[∂φ₀/∂S - A E₃]"
  - id: "F33"
    name: "Material rotational strain vector"
    expr: "K = A'w"
  - id: "F34"
    name: "Internal power material description"
    expr: "Π = ∫_(A×I) P:Ḟ dξ dS = ∫_I [N·Γ̇ + M·K̇] dS"
  - id: "F35"
    name: "Stored energy function spatial"
    expr: "f = ∂ψ(S,γ,ω)/∂γ, m = ∂ψ(S,γ,ω)/∂ω"
  - id: "F36"
    name: "Stored energy function material"
    expr: "N = ∂Ψ(S,Γ,K)/∂Γ, M = ∂Ψ(S,Γ,K)/∂K"
---

## Power Conjugacy and Strain Measures

### Reduced Internal Power Expression

Starting from the general 3D internal power and applying the kinematic assumption (2.1), we obtain the reduced expression:

```
Π = ∫_(A×I) P:Ḟ dξ dS = ∫_I [f·γ̇^v + m·ω̇^v] dS
```

where γ(S,t) is a spatial vector defined by:

```
γ(S,t) = ∂φ₀/∂S(S,t) - n(S,t)
```

and (·)^v denotes the **objective rate** (corrected rate):

```
(·)^v = ∂(·)/∂t - w × (·)
```

This objective rate gives the rate of change relative to an observer moving with the spatial frame {tᵢ}. It removes the effect of the spin (vorticity) of the moving frame.

### Physical Interpretation of Strain

The vector γ measures the deviation of the tangent to the centerline from the normal vector n. It represents the **shear strain** of the rod, with γ = 0 corresponding to zero shear deformation (Kirchhoff-Love condition).

### Material Description Formulation

In the material description, we introduce material strain measures:

```
Γ = A'[∂φ₀/∂S - n] = A'[∂φ₀/∂S - AE₃]
```

The rotational strain is expressed via the material vorticity vector:

```
K = A'w
```

The internal power becomes:

```
Π = ∫_I [N·Γ̇ + M·K̇] dS
```

where N and M are the material force and moment vectors (pulled back stress resultants).

### Constitutive Equations

For elastic behavior, a stored energy function ψ(S, γ, ω) can be defined such that:

```
f = ∂ψ(S,γ,ω)/∂γ  and  m = ∂ψ(S,γ,ω)/∂ω, S ∈ I
```

In the material description:

```
N = ∂Ψ(S,Γ,K)/∂Γ  and  M = ∂Ψ(S,Γ,K)/∂K, S ∈ I
```

The function Ψ is subjected to invariance requirements under superposed rigid-body motions.

### Rate Form of Constitutive Equations

For computational purposes, particularly in inelasticity, the rate form is often needed. Taking the material time derivative of the energy function:

```
[Ṅ]     [∂Ψ/∂Γ∂Γ  ∂Ψ/∂Γ∂K]  [Γ̇]     [Γ̇]
[Ṁ]  =  [∂Ψ/∂K∂Γ  ∂Ψ/∂K∂K] [K̇] = C(S,Γ,K) [K̇]
```

where C is the material elasticity tensor. In the spatial description:

```
[ḟ^v]     [∂ψ/∂γ∂γ  ∂ψ/∂γ∂ω]  [γ̇^v]     [γ̇^v]
[ṁ^v]  =  [∂ψ/∂ω∂γ  ∂ψ/∂ω∂ω] [ω̇^v] = c(S,γ,ω) [ω̇^v]
```

where c is the spatial elasticity tensor, related to C through frame transformations.
