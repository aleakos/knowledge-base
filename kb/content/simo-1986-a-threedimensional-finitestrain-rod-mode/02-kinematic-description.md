---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/02-kinematic-description"
section: "Kinematic Description and Strain Measures"
order: 2
tags:
  - "engineering/structural-analysis"
  - "engineering/kinematics"
  - "engineering/strain-theory"
summary: "Kinematic framework with moving frame, deformation gradient, and conjugate strain measures"
formulas:
  - id: "F1"
    name: "Orthogonal transformation of moving frame"
    expr: "tᵢ(S,t) = A(S,t)Eᵢ = Aᵢⱼ(S,t)eⱼ, I = 1,2,3"
  - id: "F2"
    name: "Position of centroid"
    expr: "x₀ = φ₀(S,t) = φ₀ᵢ(S,t)eᵢ"
  - id: "F3"
    name: "Stress resultant and couple"
    expr: "n = ∫ᵣ T₃ dΓ,  m = ∫ᵣ [x - φ₀(S,t)] × T₃ dΓ"
  - id: "F4"
    name: "Spatial strain measures"
    expr: "γ = ∂φ₀(S,t)/∂S - t₃,  ω = A' A"
  - id: "F5"
    name: "Material strain measures"
    expr: "Γ = A' ∂φ₀(S,t)/∂S - E₃,  κ = A'ω"
---

## Kinematic Description

The rod configuration is described by two fields: the position of the line of centroids and an orthonormal moving frame attached to each cross-section.

### Moving Frame Parametrization

Let {tᵢ(S,t)}ᵢ₌₁,₂,₃ represent orthonormal basis vectors of a moving frame where:
- S ∈ [0,L] denotes the curvilinear coordinate along the undeformed beam centerline
- t ∈ ℝ₊ is a time parameter
- The moving frame is positioned by an orthogonal transformation:

```
tᵢ(S,t) = A(S,t)Eᵢ = Aᵢⱼ(S,t)eⱼ
```

where A ∈ SO(3) is an orthogonal matrix satisfying AA' = I.

### Configuration Space

The configuration space C consists of pairs (φ₀, A) where:
- φ₀ maps the undeformed centerline [0,L] to the current spatial position
- A maps the undeformed centerline to SO(3)

### Derivatives of Orthogonal Transformations

The spatial and material descriptions of rotation rates are related through:

**Spatial description:**
```
∂A(S,t)/∂S = Ω(S,t)A(S,t)
∂A(S,t)/∂t = W(S,t)A(S,t)
```

**Material description:**
```
∂A(S,t)/∂S = A(S,t)K̄(S,t)
∂A(S,t)/∂t = A(S,t)W̄(S,t)
```

where Ω and K̄ are skew-symmetric tensors with axial vectors ω and κ respectively.

## Stress Resultants and Conjugate Strain Measures

### Spatial Stress Quantities

Over a cross-section Γ in its current configuration:

```
n = ∫ᵣ T₃ dΓ
m = ∫ᵣ [x - φ₀(S,t)] × T₃ dΓ
```

where P = Tᵢ ⊗ Eᵢ is the nonsymmetric Piola-Kirchhoff stress tensor.

### Strain Measures

The conjugate strain measures are derived through stress power equivalence:

```
∫₍₀,L₎ P:F̄ dΓ dS = ∫₍₀,L₎ [n·γ̇ + m·ω̇] dS = ∫₍₀,L₎ [N·Γ̇ + M·κ̇] dS
```

This yields spatial strain measures:
- Extension/shearing: `γ = ∂φ₀(S,t)/∂S - t₃`
- Curvature (spatial): `ω = A'A`

And material strain measures:
- Extension/shearing: `Γ = A' ∂φ₀(S,t)/∂S - E₃`
- Curvature (material): `κ = A'ω`

