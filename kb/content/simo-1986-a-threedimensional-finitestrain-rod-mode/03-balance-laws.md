---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/03-balance-laws"
section: "Balance Laws and Constitutive Equations"
order: 3
tags:
  - "engineering/structural-analysis"
  - "engineering/continuum-mechanics"
  - "engineering/balance-equations"
summary: "Local balance equations for forces and moments with material elasticity tensor"
formulas:
  - id: "F1"
    name: "Linear momentum balance (spatial)"
    expr: "∂n/∂S + n̄ = ρA φ̈₀"
  - id: "F2"
    name: "Angular momentum balance (spatial)"
    expr: "∂m/∂S + ∂φ₀/∂S × n + m̄ = ρI ẅ + w × [ρIw]"
  - id: "F3"
    name: "Spatial constitutive equations"
    expr: "n = ∂ψ(S,γ,ω,Λ)/∂γ,  m = ∂ψ(S,γ,ω,Λ)/∂ω"
  - id: "F4"
    name: "Material constitutive equations"
    expr: "N = ∂Ψ(S,Γ,κ)/∂Γ,  M = ∂Ψ(S,Γ,κ)/∂κ"
  - id: "F5"
    name: "Material elasticity tensor"
    expr: "C(S,Γ,κ) = [∂²Ψ/∂Γ∂Γ  ∂²Ψ/∂Γ∂κ; ∂²Ψ/∂Γ∂κ  ∂²Ψ/∂κ∂κ]"
  - id: "F6"
    name: "Diagonal elasticity matrix"
    expr: "C = diag[GA₁, GA₂, EA, EI₁, EI₂, GJ]"
---

## Balance Laws

### Linear Momentum Balance

The spatial form of the local balance of linear momentum is:

```
∂n/∂S + n̄ = ρA φ̈₀
```

where:
- n is the stress resultant (force per unit area integrated over the cross-section)
- n̄ is the distributed external force
- A is the cross-sectional area
- ρ is the mass density per unit reference length

### Angular Momentum Balance

The spatial form of the local balance of angular momentum is:

```
∂m/∂S + ∂φ₀/∂S × n + m̄ = ρI ẅ + w × [ρIw]
```

where:
- m is the spatial stress couple (moment per unit area integrated)
- m̄ is the distributed external moment
- I is the spatial (time-dependent) inertia tensor
- w is the angular velocity vector

## Constitutive Equations

### Spatial Form

The stress resultants and couples are derived from the specific stored energy function ψ:

```
n = ∂ψ(S,γ,ω,Λ)/∂γ
m = ∂ψ(S,γ,ω,Λ)/∂ω
```

where γ and ω are the spatial strain measures and Λ represents internal variables.

### Material Form

In the material (reference) description:

```
N = ∂Ψ(S,Γ,κ)/∂Γ
M = ∂Ψ(S,Γ,κ)/∂κ
```

where Γ and κ are the material strain measures.

The functions ψ and Ψ are subjected to invariance requirements under superposed rigid-body motions.

## Material Elasticity Tensor

The material tangent elasticity tensor is defined as:

```
C(S,Γ,κ) = [∂²Ψ/∂Γ∂Γ    ∂²Ψ/∂Γ∂κ  ]
            [∂²Ψ/∂κ∂Γ    ∂²Ψ/∂κ∂κ  ]
```

### Diagonal Elasticity Matrix

For practical applications, the elasticity tensor is often assumed constant and diagonal:

```
C = diag[GA₁, GA₂, EA, EI₁, EI₂, GJ]
```

where:
- GA₁, GA₂: shear stiffness along t₁ and t₂ axes
- EA: axial stiffness
- EI₁, EI₂: principal bending stiffnesses
- GJ: torsional stiffness

This diagonal form decouples the extensional, shear, bending, and torsional behaviors.

