---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/04-force-torque-equations"
section: "Force and Torque: Equations of Motion"
order: 4
tags:
  - "engineering/stress-resultants"
  - "engineering/balance-equations"
summary: "Formulation of resultant force and torque, balance equations in spatial and material descriptions"
formulas:
  - id: "F20"
    name: "First Piola-Kirchhoff stress tensor decomposition"
    expr: "P(ξ,S) = T₁(ξ,S) ⊗ E₁ + T₂(ξ,S) ⊗ E₂ + T₃(ξ,S) ⊗ E₃"
  - id: "F21"
    name: "Resultant force per unit reference arc length"
    expr: "f(S,t) = ∫_A P(ξ,S)E₃ dξ = ∫_A T₃(ξ,S) dξ"
  - id: "F22"
    name: "Resultant torque per unit reference arc length"
    expr: "m(S,t) = ∫_A [x - φ₀(S,t)] × T₃(ξ,S) dξ"
  - id: "F23"
    name: "Linear momentum balance equation (spatial)"
    expr: "∂f/∂S + q̄ = L̇ᵣ = Aₚφ̈₀"
  - id: "F24"
    name: "Angular momentum balance equation (spatial)"
    expr: "∂m/∂S + ∂φ₀/∂S × f + m̄ = Ḣᵣ = Iₚẇ + w × Hᵣ"
  - id: "F25"
    name: "Material force vector"
    expr: "N = NᵢEᵢ, pulled back via f = AN"
  - id: "F26"
    name: "Material moment vector"
    expr: "M = MᵢEᵢ, pulled back via m = AM"
  - id: "F27"
    name: "Component relations"
    expr: "f = NᵢAEᵢ = Nᵢtᵢ and m = MᵢAEᵢ = Mᵢtᵢ"
---

## Stress Resultants and Balance Equations

### Stress Tensor and Resultants

Consider a cross-section Aₛ in the current configuration. The first Piola-Kirchhoff stress tensor P(ξ,S) can be decomposed as:

```
P(ξ,S) = T₁(ξ,S) ⊗ E₁ + T₂(ξ,S) ⊗ E₂ + T₃(ξ,S) ⊗ E₃
```

where T₃(ξ,S) = P(ξ,S)E₃ is the stress vector (per unit reference area) acting on the cross-section.

The **resultant contact force** per unit reference length is:

```
f(S,t) = ∫_A P(ξ,S)E₃ dξ = ∫_A T₃(ξ,S) dξ
```

The **resultant torque** per unit reference arc length is:

```
m(S,t) = ∫_A [x - φ₀(S,t)] × T₃(ξ,S) dξ
```

### Spatial Description - Balance Equations

The linear and angular momentum balance equations in the spatial description take the form:

**Linear momentum balance:**
```
∂f/∂S + q̄ = L̇ᵣ = Aₚφ̈₀
```

**Angular momentum balance:**
```
∂m/∂S + ∂φ₀/∂S × f + m̄ = Ḣᵣ = Iₚẇ + w × Hᵣ, S ∈ I
```

where q̄ and m̄ are the applied force and torque per unit reference arc length.

### Material Description

The vector fields f(S,t) and m(S,t) take values on the current configuration. In the material description, we define:

```
S → N ≡ NᵢEᵢ,  S → M ≡ MᵢEᵢ,  S ∈ I
```

by pulling back f(S,t) and m(S,t) to the reference configuration via the orthogonal transformation A(S,t):

```
f = AN  and  m = AM
```

The geometric meaning follows from:

```
f = NᵢAEᵢ = Nᵢtᵢ  and  m = MᵢAEᵢ = Mᵢtᵢ
```

**Key observation:** The components of the force and moment vectors f and m relative to the moving frame {tᵢ} equal those of N and M relative to the reference frame {Eᵢ}.

### Kirchhoff-Love Limit

For the classical Kirchhoff-Love case (no shearing), the formulation reduces to the classical thin rod equations. This is achieved when:

```
∂φ₀/∂S = (ds/dS) n, ||n(s)|| = 1
```

(the first Frenet formula), which implies vanishing shear strain.
