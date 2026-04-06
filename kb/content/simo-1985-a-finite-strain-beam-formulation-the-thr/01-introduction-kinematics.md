---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/01-introduction-kinematics"
section: "Introduction and Basic Kinematics"
order: 1
tags:
  - "engineering/finite-strain"
  - "engineering/beam-theory"
  - "engineering/nonlinear-dynamics"
summary: "Formulation of orthogonal moving frame parameterization for 3D finite strain beam theory with kinematic assumptions"
formulas:
  - id: "F1"
    name: "Line of centroids"
    expr: "S ∈ I → φ₀(S) ∈ ℝ³"
  - id: "F2"
    name: "Unit normal vector field"
    expr: "S ∈ I → n(S) ∈ ℝ³"
  - id: "F3"
    name: "Fiber unit vector field"
    expr: "S ∈ I → tᵣ(S) ∈ ℝ³"
  - id: "F4"
    name: "Orthonormal frame conditions"
    expr: "||n(S)|| = 1, ||tᵣ(S)|| = 1, n(S) · tᵣ(S) = 0, t₁(S) · t₂(S) = 0, t₃(S) = n(S) = t₁(S) × t₂(S)"
  - id: "F5"
    name: "Kinematic assumption - configuration mapping"
    expr: "x = φ(ξ₁, ξ₂, S) = φ₀(S) + Σᵣ₌₁² ξᵣtᵣ(S)"
---

## Basic Kinematic Framework

This paper develops the continuum basis for finite strain beam theory in three dimensions, generalizing Reissner's formulation for the plane static case. The approach uses an orthogonal moving frame that remains normal to the cross-section, allowing for both finite extension and finite shearing of the rod.

### Moving Basis and Kinematic Assumption

The current configuration of a rod is described by:

1. A curve defining the line of centroids in an open interval I ⊂ ℝ
2. A family of cross-sectional planes defined by unit normal vector field n(S)
3. A fiber within each cross-section defined by unit vector field tᵣ(S)

At each point along the centerline, an orthonormal moving (intrinsic) frame is defined:
```
{t₁(S), t₂(S), n(S)} with:
||n(S)|| = 1, ||tᵣ(S)|| = 1
n(S) · tᵣ(S) = 0, r = 1,2
t₃(S) = n(S) = t₁(S) × t₂(S)
```

**Kinematic Assumption:** Admissible configurations φ: A × I → ℝ³ have the explicit form:
```
x = φ(ξ₁, ξ₂, S) = φ₀(S) + Σᵣ₌₁² ξᵣtᵣ(S)
```

Here S represents the arc length of the centerline in the reference (unstressed) configuration. This assumption allows:
- Complete freedom in parametrizing the orthogonal transformation (Euler angles, quaternions, etc.)
- A computationally simpler approach using incremental vorticity as rotational degrees of freedom
- Efficient updating of the total rotation via the exponential of a skew-symmetric matrix (Rodrigues formula)

### Critical Distinctions

The moving frame {tᵣ(S)} is **not** normal to the centerline in the current configuration (due to shear deformation), distinguishing it from the classical Kirchhoff-Love model. The approach uses classical rotation and moment concepts where rotations are actions of the orthogonal group on Euclidean space, maintaining symmetric geometric stiffness in equilibrium configurations.
