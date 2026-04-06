---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/01-introduction"
section: "Introduction"
order: 1
tags:
  - "engineering/structural-analysis"
  - "engineering/finite-element-method"
  - "engineering/rod-theory"
summary: "Overview of three-dimensional finite-strain rod model with orthogonal rotations, avoiding Euler angle singularities"
formulas:
  - id: "F1"
    name: "Configuration space definition"
    expr: "C ≡ {φ ≡ (φ₀, A) | φ₀:(0,L)→ℝ³, A:(0,L)→SO(3)}"
---

## Introduction

This paper addresses the variational formulation and computational implementation of a three-dimensional finite-strain rod model using the finite element method. The model is a reparametrization of extensions to the classical Kirchhoff-Love model that includes finite extension and shearing of rods.

### Key Contributions

The formulation employs a specific parametrization that avoids the singularity typically associated with Euler angles, while maintaining the classical interpretation of rotations as orthogonal transformations. Rotations belong to the special orthogonal group SO(3), a noncommutative (Lie) group that creates a nonlinear differentiable manifold for the configuration space.

### Comparison with Alternative Approaches

Unlike the semitangential rotation approach proposed by Argyris and coworkers, this formulation treats rotations as traditional orthogonal transformations in Euclidean space. The configuration space is:

```
C ≡ {φ ≡ (φ₀, A) | φ₀:(0,L)→ℝ³, A:(0,L)→SO(3)}
```

where φ₀ represents the position of the line of centroids and A represents the orientation of the moving frame.

### Geometric Approach and Algorithms

The geometric approach used here enables efficient algorithm formulation. A key innovation is the configuration update procedure, which becomes the algorithmic counterpart of the exponential map. The procedure relies crucially on Rodrigues' formula for computing the exponential of skew-symmetric matrices.

### Tangent Operator Symmetry

The paper demonstrates that the geometric stiffness matrix is generally nonsymmetric due to the non-Euclidean character of the configuration space. However, complete symmetry is recovered at equilibrium configurations under conservative loading, following from the Vainberg theorem on manifolds.

### Practical Implementation

The computational implementation uses quaternion parameters for section rotation parametrization, which:
- Avoids the singularity present in the pseudo-vector parametrization
- Minimizes storage requirements
- Provides efficient exponential map evaluation

