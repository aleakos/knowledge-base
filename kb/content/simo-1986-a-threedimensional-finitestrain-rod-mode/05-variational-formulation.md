---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/05-variational-formulation"
section: "Weak Form and Tangent Stiffness Operator"
order: 5
tags:
  - "engineering/finite-element-method"
  - "engineering/variational-methods"
  - "engineering/stiffness-matrix"
summary: "Weak form of momentum balance, consistent linearization, and tangent stiffness with symmetry analysis"
formulas:
  - id: "F1"
    name: "Weak form of momentum balance"
    expr: "G(φ,η) = ∫_{[0,L]} [n·(dη₀/dS - θ × dφ₀/dS) + m·dθ/dS] dS - ∫_{[0,L]} (n̄·η₀ + m̄·θ) dS"
  - id: "F2"
    name: "Linearized weak form"
    expr: "L[G(φ,η)] = G(φ,η) + DG(φ,η)·Δφ"
  - id: "F3"
    name: "Material part of tangent"
    expr: "D₁G(φ,η)·Δφ = ∫_{[0,L]} (Ξ'η)·(ĉΞ'Δφ) dS"
  - id: "F4"
    name: "Geometric tangent stiffness"
    expr: "D₂G(φ,η)·Δφ = ∫_{[0,L]} (Ψ'η)·(B̂Ψ'Δφ) dS"
  - id: "F5"
    name: "Skew-symmetric part at equilibrium"
    expr: "[DG(φ,η)·Δφ]^A = ∫_{[0,L]} [m'·(θ × ψ') - n·((θ × ψ) × φ'₀)] dS"
  - id: "F6"
    name: "Conservative loading condition"
    expr: "∫_{[0,L]} m̄·(θ × ψ) dS + [m·(θ × ψ)]|^{S=L}_{S=0} = 0"
---

## Weak Form of Momentum Balance

### Spatial Weak Form

Starting from the local balance equations, multiplication by admissible variations η(S) and integration by parts yields the weak form:

```
G(φ,η) = ∫_{[0,L]} [n·(dη₀/dS - θ × dφ₀/dS) + m·dθ/dS] dS 
        - ∫_{[0,L]} (n̄·η₀ + m̄·θ) dS
```

This must hold for all admissible variations η ∈ T_φ C.

### Material Form

The material version is:

```
G(φ,η) = ∫_{[0,L]} {N·A' [dη₀/dS - θ × dφ₀] + M·A'·dθ/dS} dS
        - ∫_{[0,L]} (n̄·η₀ + m̄·θ) dS
```

At equilibrium, G(φ,η) = 0 for all η ∈ T_φ C.

## Consistent Linearization

### Definition of Tangent Operator

The linearized weak form is expressed as:

```
L[G(φ,η)] = G(φ,η) + DG(φ,η)·Δφ
```

where DG(φ,η)·Δφ is the Fréchet directional derivative computed as:

```
DG(φ,η)·Δφ = d/dε|_{ε=0} G(φₑ, η)
```

This decomposition yields two parts:
- Material stiffness: D₁G (from linearizing internal forces)
- Geometric stiffness: D₂G (from linearizing the differential operators)

### Material Part of Tangent

```
D₁G(φ,η)·Δφ = ∫_{[0,L]} (Ξ'η)·(ĉΞ'Δφ) dS
```

where ĉ is the spatial form of the elasticity tensor.

### Geometric Part of Tangent

```
D₂G(φ,η)·Δφ = ∫_{[0,L]} (Ψ'η)·(B̂Ψ'Δφ) dS
```

where B̂ is the geometric stiffness matrix evaluated at φ.

## Symmetry of Tangent Stiffness at Equilibrium

### General Nonsymmetry Away from Equilibrium

For configurations not in equilibrium, the skew-symmetric part of the tangent operator is:

```
[DG(φ,η)·Δφ]^A = ∫_{[0,L]} [m'·(θ × ψ') - n·((θ × ψ) × φ'₀)] dS + boundary terms
```

This is **generally nonsymmetric** even for conservative loading when φ is not in equilibrium.

### Recovery of Symmetry at Equilibrium

The key result is that at an **equilibrium configuration**, if the distributed moment is zero (m̄ = 0) and the loading is **conservative** (satisfying the condition below), then the tangent stiffness becomes symmetric:

```
∫_{[0,L]} m̄·(θ × ψ) dS + [m·(θ × ψ)]|^{S=L}_{S=0} = 0
```

This condition is analogous to that for pressure-dependent loading.

### Conservative vs. Nonconservative Loading

**Conservative loading:** Moments with fixed spatial orientation violate this condition. The follower load representation naturally satisfies the conservative loading requirement through the moving frame formulation.

**Nonconservative loading:** Examples include end moments with fixed spatial axes, which do not satisfy the conservative loading condition.

### Vainberg Theorem Connection

This result is a particular instance of the general Vainberg theorem from differential geometry: the second variation of a functional on a manifold is symmetric only at the critical points (equilibrium configurations). The Hessian of the energy functional makes sense only at critical points.

