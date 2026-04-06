---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/02-failure-calculation"
section: "Failure Calculation Methods"
order: 2
tags:
  - "engineering/composite-materials"
  - "engineering/failure-analysis"
  - "engineering/stress-analysis"
  - "engineering/laminate-theory"
summary: "Analytical elasticity solution for calculating stresses and failure coefficients in multi-layered laminated tubes under pressure and axial loads using boundary and continuity conditions."
formulas:
  - id: "F1"
    name: "Boundary conditions for N-layer laminated tube"
    expr: "σ_r^(1)(r₀) = -p₀, σ_r^(N)(r_a) = -p_a; σ_rz^(N)(r₀) = σ_rz^(N)(r_a) = 0"
  - id: "F2"
    name: "Continuity conditions between layers"
    expr: "σ_r^(k)(r_k) = σ_r^(k)(r_k) = 0, k = 1,N̄; u_r^(k)(r_k) = u_r^(k+1)(r_k), σ_r^(k+1)(r_k) = σ_r^(k+1)(r_k), k = 1,N̄-1"
  - id: "F3"
    name: "Axial force equilibrium"
    expr: "F_axial = 2π ∑(k=1 to N) ∫(r_k-1 to r_k) σ_z^(k)(r) r dr"
  - id: "F4"
    name: "Torque equilibrium"
    expr: "T = 2π ∑(k=1 to N) ∫(r_k-1 to r_k) τ_zθ^(k)(r) r² dr"
  - id: "F5"
    name: "Stress transformation to material coordinates"
    expr: "σ₁ = m² σ_z + n² σ_θ + 2mn τ_zθ; σ₂ = n² σ_z + m² σ_θ - 2mn τ_zθ; τ₁₂ = mn(σ_θ - σ_z) + (m² - n²) τ_zθ"
  - id: "F6"
    name: "Modified Tsai-Hill failure criterion (tension)"
    expr: "FC = (σ₁/X_T)² + (σ₂/Y_T)² - (σ₁σ₂/X_T²) + (τ₁₂/S)² (if σ₁ > 0)"
  - id: "F7"
    name: "Modified Tsai-Hill failure criterion (compression)"
    expr: "FC = (σ₁/X_C)² - (σ₁σ₂/X_C²) + (σ₂/Y_C)² + (τ̄₁₂/(μ_L S))² (if σ₁ < 0)"
---

## Analysis Methods for Failure Calculation

### Overview

The software implemented for failure calculation is based on the elasticity solution for laminated circular tubes. The MATLAB-based software allows calculation of stresses and failure coefficients at any point in the pipe when exposed to inner/outer pressure, axial force, torque, and thermal loads. For this investigation, temperature effects were excluded to simplify analysis of the multi-parametrical problem.

### Boundary Conditions

For an N-layer laminated tube with inner and outer radii r₀ and r_a subjected to outer and inner pressures p₀ and p_a:

```
σ_r^(1)(r₀) = -p₀, σ_r^(N)(r_a) = -p_a,
σ_rz^(1)(r₀) = σ_rz^(N)(r_a) = 0, σ_rz^(N)(r₀) = σ_rz^(N)(r_a) = 0
```

### Continuity Conditions

Displacements in the pipe must be continuous from layer to layer as layers are perfectly bonded:

```
σ_rz^(k) = σ_rz^(k) = 0, k = 1,N̄
u_r^(k)(r_k) = u_r^(k+1)(r_k), σ_r^(k)(r_k) = σ_r^(k+1)(r_k), k = 1,N̄-1
```

where u_r^(k) is radial displacement and r_k is the outer radius of the k-th layer.

### Axial Force and Torque Integration

The axial force F_axial at the tube end is determined by integrating axial stress over the cross-sectional area:

```
F_axial = 2π ∑(k=1 to N) ∫(r_k-1 to r_k) σ_z^(k)(r) r dr
```

The torque T is determined by integrating the moment of shear stress τ_zθ over the cross-sectional area:

```
T = 2π ∑(k=1 to N) ∫(r_k-1 to r_k) τ_zθ^(k)(r) r² dr
```

### Displacement and Stress Expressions

Displacement and layered stress expressions contain unknown constants A, B, ε₀ and γ₀ that are determined by solving the system of equations consisting of boundary conditions, continuity conditions, axial force, and torque requirements.

## Stress Transformation to Material Coordinates

Axial σ_z, hoop σ_θ, and shear τ_zθ stresses in the pipe are transformed into stresses in principal material directions using the fiber orientation angle θ:

```
σ₁ = m² σ_z + n² σ_θ + 2mn τ_zθ
σ₂ = n² σ_z + m² σ_θ - 2mn τ_zθ
τ₁₂ = mn(σ_θ - σ_z) + (m² - n²) τ_zθ
```

where m = cos θ and n = sin θ (θ is angle between pipe axis and filament).

## Failure Criterion: Tsai-Hill

The modified Tsai-Hill failure criterion was implemented for composite tubes. According to this criterion, failure occurs when the failure coefficient (FC) becomes greater than 1:
- FC < 1: no failure
- FC > 1: failure

The modified form accounts for the transverse stress differential effect and is formulated as:

**For off-axis tensile loading (σ₁ > 0):**

```
FC = (σ₁/X_T)² + (σ₂/Y_T)² - (σ₁σ₂/X_T²) + (τ₁₂/S)²
```

**For off-axis compressive loading (σ₁ < 0):**

```
FC = (σ₁/X_C)² - (σ₁σ₂/X_C²) + (σ₂/Y_C)² + (τ̄₁₂/(μ_L S))²
```

where:
- X_T, Y_T = tensile strengths in 1 and 2 directions
- X_C, Y_C = compressive strengths in 1 and 2 directions
- S = shear strength
- μ_L = material constant characterizing in-plane shear strength differential effect

This modified approach better represents composite behavior under different loading conditions compared to the original Tsai-Hill criterion, which tends to underestimate failure stress.
