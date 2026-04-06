---
parent_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-"
chunk_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-/01-classical-beam-theories"
section: "Classical Beam Theories: EBBM, TBM, and 6-DOF Models"
order: 1
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element"
  - "engineering/shear-deformation"
summary: "Comparison of three classical beam theories with increasing accuracy in capturing shear and torsional effects"
formulas:
  - id: "F1"
    name: "Euler-Bernoulli Beam Model kinematic field"
    expr: "uₓ = uₓ₁, uᵧ = uᵧ₁ - x(∂uₓ₁/∂y) + z(∂uᵤ₁/∂y), uᵤ = uᵤ₁"
  - id: "F2"
    name: "Timoshenko Beam Model kinematic field"
    expr: "uₓ = uₓ₁, uᵧ = uᵧ₁ + xφᵤ - zφₓ, uᵤ = uᵤ₁"
  - id: "F3"
    name: "6-DOF Beam Model with torsion"
    expr: "uₓ = uₓ₁ + zφᵧ, uᵧ = uᵧ₁ + xφᵤ - zφₓ, uᵤ = uᵤ₁ - xφᵧ"
---

## Classical Beam Theories Overview

Classical beam theories form the foundation of 1D structural analysis and are incorporated into commercial FEM software. This section compares three standard formulations with increasing capability.

### Euler-Bernoulli Beam Model (EBBM)

The EBBM kinematic field assumes plane sections remain plane and perpendicular to the beam axis:

```
uₓ = uₓ₁
uᵧ = uᵧ₁ - x(∂uₓ₁/∂y) + z(∂uᵤ₁/∂y)
uᵤ = uᵤ₁
```

**Key Assumptions:**
- Cross-sectional shear deformations are **neglected**
- Deformed cross-sections remain plane and **orthogonal** to the beam axis
- Only three displacements (uₓ₁, uᵧ₁, uᵤ₁) and two rotations (∂uₓ₁/∂y, ∂uᵤ₁/∂y) are unknowns

**Limitations:** EBBM is inadequate for:
- Short beams (high shear-span ratios)
- Composite structures with significant shear effects
- Problems where transverse shear stresses are significant

### Timoshenko Beam Model (TBM)

TBM improves upon EBBM by relaxing the orthogonality assumption:

```
uₓ = uₓ₁
uᵧ = uᵧ₁ + xφᵤ - zφₓ
uᵤ = uᵤ₁
```

**Key Features:**
- Cross-sections **do not necessarily remain perpendicular** to the beam axis
- Introduces two independent rotational degrees of freedom (φᵤ, φₓ)
- Accounts for **first-order shear effects** through the difference between section rotation and tangent slopes
- Contains correction factors for shear (shear correction factors)

**Advantages:** TBM captures shear deformation effects absent in EBBM, improving accuracy for shorter beams and composite structures.

### 6-DOF Beam Model with Torsion

The 6-DOF formulation extends TBM by adding torsional rigidity:

```
uₓ = uₓ₁ + zφᵧ
uᵧ = uᵧ₁ + xφᵤ - zφₓ
uᵤ = uᵤ₁ - xφᵧ
```

**Key Features:**
- Adds **torsional rotation** φᵧ (rotation about the y-axis/beam axis)
- Contains **six degrees of freedom per node**: three translations (uₓ₁, uᵧ₁, uᵤ₁) and three rotations (φₓ, φᵧ, φᵤ)
- Includes first-order shear effects plus **twisting effects**

**Applications:** Used extensively in commercial FEM for general structural analysis due to its balance between simplicity and capability.

## Limitations of Classical Models

All classical models share common limitations:

1. **No higher-order cross-sectional phenomena:**
   - Cannot capture elastic bending/shear coupling
   - Cannot model restrained torsional warping
   - Cannot represent 3D strain effects (Poisson effects, local deformations)

2. **Limited to specific geometries:**
   - Work well for slender, compact cross-section beams
   - Inadequate for short beams and thin-walled structures
   - Cannot accurately predict stress distributions in complex cross-sections

3. **Reliance on correction factors:**
   - Require shear correction factors (not exact)
   - Use fictitious warping correction factors
   - Need Poisson's locking corrections

These limitations motivate the development of higher-order beam theories with hierarchical refinement capabilities.
