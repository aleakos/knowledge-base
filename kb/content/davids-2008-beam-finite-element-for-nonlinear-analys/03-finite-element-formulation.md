---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/03-finite-element-formulation"
section: "Finite Element Formulation"
order: 3
tags:
  - "engineering/finite-element-method"
  - "engineering/timoshenko-beam"
  - "engineering/pressure-stiffening"
summary: "Three-noded Timoshenko beam element with quadratic displacement and linear rotation/axial shape functions, extended to accommodate materially nonlinear and pressure-dependent response."
formulas:
  - id: "F6"
    name: "Axial shape functions"
    expr: "Nᵃ₁ = 1/2 - x/l; Nᵃ₂ = 1/2 + x/l"
  - id: "F7"
    name: "Transverse displacement shape functions"
    expr: "Nᵛ₁ = 2(x/l)² - x/l; Nᵛ₂ = 2(x/l)² + x/l; Nᵛ₃ = 1 - 4(x/l)²"
  - id: "F8"
    name: "Rotation shape functions"
    expr: "Nᶿ₁ = 1/2 - x/l; Nᶿ₂ = 1/2 + x/l"
  - id: "F9"
    name: "Axial strain"
    expr: "ε = (d/dx Nᵃ) Uᵉ = Bₐ Uᵉ"
  - id: "F10"
    name: "Shear strain"
    expr: "γ = (d/dx Nᵛ - Nᶿ) Uᵉ = Bₛ Uᵉ"
  - id: "F11"
    name: "Curvature"
    expr: "κ = dθ/dx = (d/dx Nᶿ) Uᵉ = Bf Uᵉ"
  - id: "F12"
    name: "Element tangent stiffness matrix"
    expr: "kT = kₐ + kₛ + kb - kF"
  - id: "F13"
    name: "Axial stiffness"
    expr: "kₐ = ∫ EA BᵀₐBₐ dx"
  - id: "F14"
    name: "Bending stiffness"
    expr: "kb = ∫ (EIT - P dȳ/dκ) BᵀfBf dx"
  - id: "F15"
    name: "Shear stiffness"
    expr: "kₛ = ∫ (GAs + P) BᵀₛBₛ dx"
  - id: "F16"
    name: "Geometric stiffness"
    expr: "kF = ∫ F N'ᵛᵀ N'ᵛ dx"
  - id: "F17"
    name: "Residual force vector"
    expr: "Rᵉ = ∫ Nᵛᵀ q dx + ∫ Nᵃᵀ F dx - ∫ (M + P(r - ȳ)) Bᵀf dx + (kF - kₐ - kₛ) Uᵉ"
---

## Element Selection Rationale

### Challenges with Standard Elements

- **Linear two-noded elements**: Subject to shear locking
- **Higher-order elements with normal polynomial shape functions**: Require reduced integration or lower-order rotation interpolation, resulting in many nodes
- **Mixed interpolation elements**: Friedman and Kosmatka (1993) developed two-noded element with shape functions satisfying equilibrium; however, shape functions are complex and depend explicitly on EI and GAs

### Selected Approach: Three-Noded Quadratic Timoshenko Element

A three-noded Timoshenko beam element with:
- **Transverse displacement v**: Quadratic shape functions (reduces shear locking)
- **Bending rotation θ and axial displacement u**: Linear shape functions
- Successfully used for linearly elastic beams; extended here for nonlinear, pressure-dependent response
- Avoids shear locking while maintaining accuracy with minimal nodes

## Element Description

### Degrees of Freedom

```
Uᵉ = [u₁  v₁  θ₁  u₂  v₂  θ₂  v₃]ᵀ         (11)
```

Three degrees of freedom at end nodes:
- u: axial displacement (x-direction)
- v: transverse displacement (y-direction)
- θ: bending rotation

Central node has only transverse displacement degree of freedom.

### Shape Functions

In terms of local coordinate x and element length l:

**Transverse displacement (quadratic)**:
```
Nᵛ₁ = 2(x/l)² - x/l
Nᵛ₂ = 2(x/l)² + x/l
Nᵛ₃ = 1 - 4(x/l)²                          (12)
```

**Rotation and axial displacement (linear)**:
```
Nᶿ₁ = Nᵃ₁ = 1/2 - x/l
Nᶿ₂ = Nᵃ₂ = 1/2 + x/l                      (13)
```

### Strain-Displacement Relations

Using standard Timoshenko kinematic constraint dv/dx = θ + γ:

```
u = [Nᵃ₁  0  0  Nᵃ₂  0  0  0] Uᵉ = Nₐ Uᵉ   (14)
```

```
v = [0  Nᵛ₁  0  0  Nᵛ₂  0  Nᵛ₃] Uᵉ = Nᵥ Uᵉ  (15)
```

```
θ = [0  0  Nᶿ₁  0  0  Nᶿ₂  0] Uᵉ = Nθ Uᵉ     (16)
```

The resulting strain measures:

```
ε = (d/dx Nᵃ) Uᵉ = Bₐ Uᵉ                      (17)
```

```
γ = (d/dx Nᵛ - Nᶿ) Uᵉ = Bₛ Uᵉ                (18)
```

```
κ = dθ/dx = (d/dx Nᶿ) Uᵉ = Bf Uᵉ             (19)
```

## Discretization and Solution

### Element-Level Equation

Substituting element expressions into the incremental virtual work principle (Eq. 10) yields:

```
(kₐ + kₛ + kb - kF) ΔUᵉ = Rᵉ  ⟺  kT ΔUᵉ = Rᵉ   (20)
```

where kT is the element tangent stiffness matrix including pressure effects.

### Stiffness Matrix Components

```
kₐ = ∫ EA BᵀₐBₐ dx
                                             (21)
kb = ∫ (EIT - P dȳ/dκ) BᵀfBf dx

kₛ = ∫ (GAs + P) BᵀₛBₛ dx

kF = ∫ F N'ᵛᵀ N'ᵛ dx
```

**Key observations**:

1. **Bending stiffness kb** contains both material nonlinearity (EIT) and pressure effects (-P dȳ/dκ)
   - Zero prior to wrinkling (ȳ = r)
   - Positive after wrinkling (dȳ/dκ < 0)

2. **Shear stiffness ks** depends on (GAs + P)
   - Matches Fichter's linearized shell theory result
   - Pressure provides additional shear stiffness

### Residual Force Vector

```
Rᵉ = ∫ Nᵛᵀ q dx + ∫ Nᵃᵀ F dx 
   - ∫ (M + P(r - ȳ)) Bᵀf dx 
   + (kF - kₐ - kₛ) Uᵉ                      (22)
```

The moment term includes:
- Internal moment M carried by fabric
- Stabilizing moment P(r - ȳ) due to pressure, non-zero only after wrinkling

## Global Assembly and Solution

Assembling over all elements:

```
KT ΔU = R                                    (23)
```

where:
- KT = global tangent stiffness matrix
- ΔU = global displacement increment
- R = global unbalanced residual force vector

### Numerical Integration

To avoid time-consuming numerical integration, analytical expressions were developed for stiffness components assuming constant properties along element length.

**Justification**: Linear variation in θ implies constant curvature within element, consistent with treating EIT and ȳ as constant.

### Solution Strategy

**Newton iteration with adaptive load stepping**:

1. Solve KT ΔU = R for displacement increment
2. Update displacements: U ← U + ΔU
3. Recompute strains and moment–curvature relationship
4. Check convergence criterion

**Convergence Criterion**:
```
||R||₂ / ||RE||₂ ≤ 0.0001                   (24)
```

where RE is the global vector of applied forces.

**Computational Performance**:
- Rapid convergence observed
- Fewer than 11 Newton iterations required at all pressures
- Implementation in MATLAB
- Uniform mesh of 100 elements sufficient for accurate results
