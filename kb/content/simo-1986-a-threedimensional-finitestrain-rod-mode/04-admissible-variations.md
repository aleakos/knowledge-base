---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/04-admissible-variations"
section: "Admissible Variations and Linearization"
order: 4
tags:
  - "engineering/finite-element-method"
  - "engineering/variational-methods"
  - "engineering/linearization"
summary: "Definition of admissible variations on manifolds and linearization of strain measures"
formulas:
  - id: "F1"
    name: "Perturbed configuration"
    expr: "φₑ(S) = φ₀(S) + εη₀(S),  Aₑ(S) = exp[εΘ(S)]A(S)"
  - id: "F2"
    name: "Admissible variations"
    expr: "η(S) ≡ (η₀(S), θ(S)) ∈ ℝ³ × ℝ³"
  - id: "F3"
    name: "Kinematically admissible variations"
    expr: "T_φ C = {η(S) = (η₀(S), θ(S)) | η₀|_{S∈[0,L]} = θ|_{S∈[0,L]} = 0}"
  - id: "F4"
    name: "Directional derivative"
    expr: "Dφ₀·η₀ = d/dε|_{ε=0} φ₀ₑ(S) = η₀(S)"
  - id: "F5"
    name: "Rotation directional derivative"
    expr: "DA·Θ = d/dε|_{ε=0} Aₑ(S) = Θ(S)A(S)"
  - id: "F6"
    name: "Linearization of strain rate"
    expr: "δγ·η = u' - θ × φ'₀"
  - id: "F7"
    name: "Linearization of curvature"
    expr: "Dκ·θ = A'θ'"
---

## Admissible Variations on the Configuration Manifold

A key characteristic of this problem is that the configuration space C is a nonlinear differentiable manifold due to the presence of SO(3). This requires careful definition of admissible variations.

### Construction of Perturbed Configurations

Given an arbitrary configuration φ = (φ₀, A) ∈ C, a perturbed configuration φₑ is constructed as:

```
φ₀ₑ(S) = φ₀(S) + εη₀(S)
Aₑ(S) = exp[εΘ(S)]A(S)
```

where:
- η₀(S) is an infinitesimal displacement of the centerline
- Θ(S) is a skew-symmetric tensor field with axial vector θ(S)
- By construction, φₑ ∈ C for all ε ∈ ℝ

The exponential of a skew-symmetric matrix ensures that Aₑ remains orthogonal.

### Admissible Variation Pair

A pair η(S) ≡ (η₀(S), θ(S)) ∈ ℝ³ × ℝ³ is called an **admissible variation** where:
- η₀(S) represents infinitesimal displacement of the centerline
- θ(S) represents a superposed infinitesimal rotation onto the moving frame

### Tangent Space to Configuration Space

For the boundary value problem with prescribed displacements and rotations, the set of kinematically admissible variations is:

```
T_φ C = {η(S) = (η₀(S), θ(S)) | η₀|_{S∈[0,L]} = θ|_{S∈[0,L]} = 0}
```

This is the **tangent space at the identity** of the configuration manifold C.

## Linearization of Strain Measures

### Directional Derivatives

For the perturbed configuration defined above, the directional derivatives are:

```
Dφ₀·η₀ = d/dε|_{ε=0} φ₀ₑ(S) = η₀(S)

DA·Θ = d/dε|_{ε=0} Aₑ(S) = Θ(S)A(S)
```

### Linearization of Spatial Strain Rates

The linearized spatial strain measures are obtained by taking directional derivatives:

**Linearized extension/shear:**
```
δγ·η = u' - θ × φ'₀
```

**Linearized curvature:**
```
δω·θ = θ'
```

where u' denotes du₀/dS.

### Linearization of Material Strain Measures

For the material description:

**Linearized extension/shear:**
```
DΓ·η = A'[u' - θ × φ₀]
```

**Linearized curvature:**
```
Dκ·θ = A'θ'
```

### Key Relationship

The spatial and material linearized strain measures are related by:

```
δγ·η = ADΓ·η
δω·θ = ADκ·θ
```

This demonstrates the complete analogy between spatial and material descriptions through the pull-back/push-forward operations with the rotation matrix A.

