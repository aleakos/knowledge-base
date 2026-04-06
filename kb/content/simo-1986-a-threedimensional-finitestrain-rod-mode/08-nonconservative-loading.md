---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/08-nonconservative-loading"
section: "Nonconservative and Follower Loads"
order: 8
tags:
  - "engineering/structural-analysis"
  - "engineering/follower-forces"
  - "engineering/nonconservative-loading"
summary: "Treatment of follower loads and nonconservative loading with load stiffness computation"
formulas:
  - id: "F1"
    name: "Follower distributed load"
    expr: "nⁿᶜ ≡ Nᵢⁿᶜtᵢ where Nᵢⁿᶜ = const"
  - id: "F2"
    name: "Weak form contribution"
    expr: "G^nc_ext = -∫_{[0,L]} η₀·nⁿᶜ dS"
  - id: "F3"
    name: "Moving frame perturbation"
    expr: "Dtᵢ·u = ψ × tᵢ, I = 1,2,3"
  - id: "F4"
    name: "Linearization of follower load"
    expr: "DG^nc_ext·u = -∫_{[0,L]} η₀·(ψ × nⁿᶜ) dS"
  - id: "F5"
    name: "Load stiffness matrix"
    expr: "S^nc_{ij} = -∫_{[0,L]} NᵢNⱼ[nⁿᶜ ×] dS"
  - id: "F6"
    name: "Pressure loading direction"
    expr: "n = pa₁ + qa₂ where a₃ is tangent to centerline"
---

## Follower (Nonconservative) Loads

Nonconservative loading can be accommodated easily within the present formulation. A key example is the follower distributed load, where the load direction follows the deformation.

### Representation of Follower Loads

A follower distributed load nⁿᶜ is characterized by components relative to the moving frame {tᵢ} that remain constant during deformation:

```
nⁿᶜ ≡ Nᵢⁿᶜtᵢ where Nᵢⁿᶜ = const
```

This means the load intensity is specified in the moving frame coordinates, so as the structure deforms and the moving frame rotates, the load automatically follows the deformation.

### Weak Form Contribution

The contribution of the follower load to the weak form of momentum balance is:

```
G^nc_ext = -∫_{[0,L]} η₀·nⁿᶜ dS
```

This external load contribution is added to the internal force balance equations.

## Linearization for Nonconservative Loading

### Perturbation of Moving Frame

For any admissible variation u = (η₀, ψ) ∈ T_φC, the moving frame {tᵢ} is perturbed according to:

```
Dtᵢ·u = ψ × tᵢ, I = 1,2,3
```

This follows from the directional derivative of the rotation field.

### Tangent Stiffness Contribution

Since Nᵢⁿᶜ = const, the linearization of the follower load contribution yields:

```
DG^nc_ext·u = -∫_{[0,L]} η₀·(ψ × nⁿᶜ) dS
```

This can be rewritten in matrix form as:

```
DG^nc_ext·u = ∫_{[0,L]} [η, ψ]ᵀ·[0           -Nᵢ'Nⱼ[nⁿᶜ×]]·[u₀]  dS
                                [0           0             ] [ψ ]
```

### Load Stiffness Matrix

The load stiffness matrix (also called follower stiffness) coupling nodes i and j is:

```
S^nc_{ij} = -∫_{[0,L]} NᵢNⱼ[nⁿᶜ ×] dS
```

This matrix is **skew-symmetric** due to the cross product operation. The skew-symmetric nature of the load stiffness contributes to the overall geometric nonsymmetry away from equilibrium.

## Pressure Loading

A special case of nonconservative loading is pressure loading, where the applied load remains normal to the centerline in all configurations.

### Pressure Loading Representation

Introduce a secondary moving frame {a₁, a₂, a₃} where a₃ is tangent to the deformed centerline. The pressure loading can then be expressed as:

```
n = pa₁ + qa₂
```

where p and q are the pressure components in the frame directions.

### Computation via Directional Derivative

The contribution to the tangent stiffness for pressure loading is computed using the directional derivative:

```
D(pressure load contribution)·u = ... (computed via chain rule)
```

This ensures proper linearization of the geometry-dependent load direction.

## Stabilization Effect of Follower Loads

An important observation from the numerical examples is that follower (nonconservative) loading can have a **stabilizing effect** on the structure. For instance, in the buckling of frames:
- Conservative (fixed) loading may lead to buckling at load P = 18532
- Follower loading increases the buckling load to P = 35447

This demonstrates the significant influence of loading type on structural behavior and stability.

