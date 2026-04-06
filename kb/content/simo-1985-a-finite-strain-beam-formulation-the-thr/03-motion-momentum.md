---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/03-motion-momentum"
section: "Motion, Linear and Angular Momentum"
order: 3
tags:
  - "engineering/dynamics"
  - "engineering/rigid-body-dynamics"
summary: "Development of linear and angular momentum expressions for moving frames with dynamic effects"
formulas:
  - id: "F12"
    name: "Motion of rod as curve of configurations"
    expr: "t ∈ ℝ⁺ → φₜ ≡ φ₀(S,t) + Σᵣ₌₁² ξᵣtᵣ(S,t)"
  - id: "F13"
    name: "Time derivative of moving frame"
    expr: "ṫᵢ(S,t) = [A(S,t)Ȧ'(S,t)]tᵢ(S,t) = W(S,t)tᵢ(S,t), I = 1,2,3"
  - id: "F14"
    name: "Vorticity relation"
    expr: "ṫᵢ(S,t) = w(S,t) × tᵢ(S,t)"
  - id: "F15"
    name: "Linear momentum per unit reference arc"
    expr: "Lᵣ = ∫_A ρ₀(ξ,S)φ̇(ξ,S,t) dξ = AₚφḟB(S,t)"
  - id: "F16"
    name: "Angular momentum per unit reference arc"
    expr: "Hᵣ = ∫_A ρ₀(ξ,S)[x - φ₀(S,t)] × φ̇(ξ,S,t) dξ"
  - id: "F17"
    name: "Reduced angular momentum expression"
    expr: "H = [∫_A ρ₀(||φ-φ₀||²I - (φ-φ₀) ⊗ (φ-φ₀)] dξ] w = Iₚw"
  - id: "F18"
    name: "Angular momentum time derivative"
    expr: "Ḣ = Iₚẇ + w × Hᵣ"
  - id: "F19"
    name: "Inertia tensor for principal axes"
    expr: "Iₚ = I₁t₁ ⊗ t₁ + I₂t₂ ⊗ t₂ + Jn ⊗ n"
---

## Dynamic Effects and Momentum Formulation

A motion of the rod is a curve of configurations parametrized by time:

```
t ∈ ℝ⁺ → φₜ ≡ φ₀(S,t) + Σᵣ₌₁² ξᵣtᵣ(S,t)
```

### Time Derivatives of the Moving Frame

The moving frame {tᵢ(S,t)} evolves with time as the orthogonal transformation A(S,t) changes. The material time derivative is:

```
ṫᵢ(S,t) = [A(S,t)Ȧ'(S,t)]tᵢ(S,t) = W(S,t)tᵢ(S,t), I = 1,2,3
```

where W(S,t) = -W'(S,t) is a spatial skew-symmetric tensor defining the **spin** of the moving frame. The associated axial vector w(S,t), the **vorticity of the moving frame**, satisfies W(S,t)w(S,t) = 0 and gives:

```
ṫᵢ(S,t) = w(S,t) × tᵢ(S,t)
```

### Linear Momentum

For an arbitrary cross-section A with current extent Aₛ, the linear momentum per unit reference arc length is:

```
Lᵣ = ∫_A ρ₀(ξ,S)φ̇(ξ,S,t) dξ = Aₚφ̇₀(S,t)
```

where ρ₀(ξ,S) is the reference density and the centroid acceleration is φ̇₀(S,t).

### Angular Momentum

The angular momentum per unit reference arc length, relative to the centroid x₀ = φ₀(S,t), is:

```
Hᵣ = ∫_A ρ₀(ξ,S)[x - φ₀(S,t)] × φ̇(ξ,S,t) dξ
```

Using the kinematic relations, this reduces to:

```
H = [∫_A ρ₀(||φ-φ₀||²I - (φ-φ₀) ⊗ (φ-φ₀)] dξ] w = Iₚw
```

where Iₚ is the **inertia tensor**:

```
Iₚ = Σₐ₌₁² Σᵦ₌₁² [∫_A ρ₀ξₐξᵦ dξ](δₐᵦ1 - tₐ ⊗ tᵦ)
```

The components of Iₚ relative to the moving frame are independent of time.

### Angular Momentum Rate

Taking the material time derivative:

```
Ḣ = Iₚẇ + w × Hᵣ
```

This has identical structure to angular momentum equations in rigid-body mechanics.

### Principal Axes Form

When the moving frame aligns with principal axes of inertia, with polar moment J = I₁ + I₂:

```
Iₚ = I₁t₁ ⊗ t₁ + I₂t₂ ⊗ t₂ + Jn ⊗ n
```

where I₁(S) = ∫_A [ξ₂]²ρ₀(ξ,S) dξ and I₂(S) = ∫_A [ξ₁]²ρ₀(ξ,S) dξ are the principal moments of inertia.
