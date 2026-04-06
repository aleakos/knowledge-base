---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/07-finite-element-discretization"
section: "Finite Element Formulation and Arrays"
order: 7
tags:
  - "engineering/finite-element-method"
  - "engineering/structural-analysis"
  - "engineering/reduced-integration"
summary: "Element-level discretization using shape functions, residual forces, and tangent stiffness matrices"
formulas:
  - id: "F1"
    name: "Incremental displacement interpolation"
    expr: "u₀ʰ(S) = Σᵢ₌₁ⁿᵉˡ Nᵢ(S)uᵢ,  θʰ(S) = Σᵢ₌₁ⁿᵉˡ Nᵢ(S)θᵢ"
  - id: "F2"
    name: "Element residual force vector"
    expr: "Gʰₑ(φ,ηʰ) = Σᵢ₌₁ⁿᵉˡ ηᵢʰ·Pₑᵢ(φ)"
  - id: "F3"
    name: "Nodal unbalanced force"
    expr: "Pₑᵢ(φ) = ∫_{Iₑ} Ξᵢʰ (r̂ʰ - r̄) dS"
  - id: "F4"
    name: "Discrete differential operator"
    expr: "Ξᵢʰ = [Nᵢ'I    0; -Nᵢ[φ̂₀ × ] Nᵢ'I]"
  - id: "F5"
    name: "Element stiffness matrix"
    expr: "Sₑᵢⱼ = ∫_{Iₑ} Ξᵢʰ·cₑ·Ξⱼʰ dS"
  - id: "F6"
    name: "Element geometric stiffness"
    expr: "Tₑᵢⱼ = ∫_{Iₑ} Ψᵢʰ·B̂ₑ·Ψⱼʰ dS"
  - id: "F7"
    name: "Tangent stiffness matrix"
    expr: "Kₑᵢⱼ = Sₑᵢⱼ + Tₑᵢⱼ"
---

## Finite Element Discretization

The standard finite element discretization divides the reference domain into E elements:

```
[0,L] = ∪ₑ₌₁ᴱ Iₑ
```

where Iₑ ⊂ [0,L] denotes a typical element with length h.

### Approximation Spaces

The space of admissible variations T_φC is approximated by a finite dimensional subspace Vʰ ⊂ T_φC. Within each element, the incremental displacement and rotation fields are interpolated using shape functions:

```
u₀ʰ(S) = Σᵢ₌₁ⁿᵉˡ Nᵢ(S)uᵢ
θʰ(S) = Σᵢ₌₁ⁿᵉˡ Nᵢ(S)θᵢ
```

where:
- nₑₗ is the number of nodes in element Iₑ
- Nᵢ(S) is the shape function associated with node i
- uᵢ and θᵢ are the nodal incremental displacement and rotation parameters

## Residual Force Computation

### Element Residual

The element contribution to the global residual force vector is:

```
Gʰₑ(φ,ηʰ) = Σᵢ₌₁ⁿᵉˡ ηᵢʰ·Pₑᵢ(φ)
```

where Pₑᵢ(φ) is the unbalanced nodal force at node i computed as:

```
Pₑᵢ(φ) = ∫_{Iₑ} Ξᵢʰ (r̂ʰ - r̄) dS
```

### Discrete Differential Operator

The discrete differential operator Ξᵢʰ is obtained by substituting the interpolation (5.1) into the continuous differential operator:

```
Ξᵢʰ = [Nᵢ'I       0     ]
      [-Nᵢ[φ̂₀×]  Nᵢ'I ]
```

where [φ̂₀ ×] is the skew-symmetric matrix associated with φ̂₀, and I = Diag[1,1,1].

### Stress Computation

The spatial stress vector rʰ = [nʰ, mʰ] is computed from the constitutive equations at each quadrature point, and r̄ represents the distributed load.

## Tangent Stiffness Matrix

### Material Part

The material (elastic) part of the element tangent stiffness is:

```
Sₑᵢⱼ = ∫_{Iₑ} Ξᵢʰ·cₑ·Ξⱼʰ dS
```

where cₑ are the spatial tangent elastic moduli. For the particular model (2.10), cₑ = ΠʰCIIʰᵀ.

### Geometric Part

The geometric stiffness, which arises from linearizing the differential operators, is:

```
Tₑᵢⱼ = ∫_{Iₑ} Ψᵢʰ·B̂ₑ·Ψⱼʰ dS
```

with the discrete operator:

```
Ψᵢʰ = [Nᵢ'I    0    0]
      [0      Nᵢ'I Nᵢ'I]
```

The geometric stiffness matrix B̂ₑ evaluated at φ includes terms proportional to the current stress resultants and couples, making the geometric part stress-dependent.

### Total Tangent Stiffness

```
Kₑᵢⱼ = Sₑᵢⱼ + Tₑᵢⱼ
```

### Symmetry Properties

The submatrix [2,2] of Tₑᵢⱼ leads to an **unsymmetric geometric stiffness** if the configuration is not in equilibrium. At equilibrium, the geometric stiffness becomes symmetric, consistent with the theoretical analysis in Section 4.2.

## Integration Scheme

The formulation employs **uniformly reduced integration** on the weak form to avoid shear locking. For one-dimensional problems, no spurious zero-energy modes appear, in contrast with plate or shell problems. This is a significant advantage of the rod theory.

