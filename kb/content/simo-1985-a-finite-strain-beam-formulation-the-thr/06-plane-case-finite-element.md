---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/06-plane-case-finite-element"
section: "Plane Case and Finite Element Implementation"
order: 6
tags:
  - "engineering/plane-problem"
  - "engineering/finite-element"
  - "engineering/numerical-integration"
summary: "Reduction to 2D plane case matching Reissner formulation and efficient numerical update procedure for orthogonal matrices"
formulas:
  - id: "F37"
    name: "Orthogonal tensor for plane motion"
    expr: "[A(S)] = [cos θ, 0, sin θ; 0, 1, 0; -sin θ, 0, cos θ]"
  - id: "F38"
    name: "Axial vector for plane case"
    expr: "ω ≡ K = (∂θ/∂S) E₂, w = (∂θ/∂t) E₂"
  - id: "F39"
    name: "Strain measures plane case"
    expr: "Γ₃ = (1 + u')cos θ + v' sin θ - 1, Γ₁ = -(1 + u')sin θ + v' cos θ"
  - id: "F40"
    name: "Strain elongation parameter"
    expr: "ε = (ds/dS) - 1, α = tan⁻¹(v'/(1+u'))"
  - id: "F41"
    name: "Strain measures via shear angle"
    expr: "Γ₃ = (1+ε)cos(α-θ) - 1, Γ₁ = (1+ε)sin(α-θ)"
  - id: "F42"
    name: "Configuration update procedure"
    expr: "φₙ₊₁ = φₙ + ΔUₙ₊₁, Aₙ₊₁ = e^(ΔΘₙ₊₁) Aₙ"
  - id: "F43"
    name: "Current arc length"
    expr: "ds/dS = √((1+μ')² + (v')²)"
---

## Reduction to Plane Problem (2D)

### Setup

For motion in the coordinate plane normal to E₂ = e₂ = t₂, the orthogonal transformation A(S) admits:

```
[A(S)] = [cos θ,  0,  sin θ]
         [  0,    1,    0  ]
         [-sin θ, 0,  cos θ]
```

The axial vector ω(S) given by the general formula coincides with K(S) = (∂θ/∂S)E₂, and the vorticity vector is w = (∂θ/∂t)E₂.

### Strain Measures in 2D

The material strain measures Γ from (4.8b) take the explicit form:

```
Γ₃ = (1 + u')cos θ + v' sin θ - 1
Γ₁ = -(1 + u')sin θ + v' cos θ
```

where ∂φ₀/∂S = (1 + u')e₃ + v'e₁ describes the deformed tangent vector.

Introducing the notation:

```
ε = (ds/dS) - 1,  α = tan⁻¹(v'/(1+u'))
```

where s(S) is the current arc length:

```
ds/dS = √((1+u')² + (v')²)
```

The strains can be expressed as:

```
Γ₃ = (1+ε)cos(α-θ) - 1,  Γ₁ = (1+ε)sin(α-θ)
```

These coincide exactly with Reissner's formulation. Note that α - θ naturally defines the shear angle.

### Verification of Reissner Correspondence

The 2D formulation recovers the classical Reissner theory for the plane problem, confirming the theoretical consistency of the general 3D development.

## Finite Element Implementation

### Configuration Update Procedure

The parametrization employed in this paper is particularly convenient for finite element solution procedures. A key aspect is the configuration update in iterative Newton-Raphson schemes.

At step tₙ, configurations are characterized by the pair (φₙ, Aₙ). During iteration, we obtain:
- An incremental displacement vector ΔUₙ₊₁
- An infinitesimal incremental rotation vector ΔΘₙ₊₁

Let ΔΩₙ₊₁ be the skew-symmetric tensor associated with ΔΘₙ₊₁. The configuration update is:

```
φₙ₊₁ = φₙ + ΔUₙ₊₁
Aₙ₊₁ = e^(ΔΩₙ₊₁) Aₙ
```

### Computational Efficiency

A crucial advantage is that the exponential of the skew-symmetric matrix ΔΩₙ₊₁ can be computed **very efficiently without approximation** using classical rigid-body mechanics formulas (Rodrigues formula or similar, as discussed by Argyris).

This efficient update procedure relies on the simple closed-form expression for exp(ΔΩ), where ΔΩ is skew-symmetric.

### Variational Setting

By making use of the update procedure (5.7) in a variational setting, one obtains a formulation analogous to that employed by Simo et al. for plane beam problems, providing a computationally robust framework for finite element analysis of large-deformation beam problems.

The symmetry of the geometric stiffness matrix in equilibrium configurations ensures numerical stability for continuation and bifurcation analysis.
