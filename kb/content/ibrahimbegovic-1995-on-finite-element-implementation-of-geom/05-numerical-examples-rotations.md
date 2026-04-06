---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/05-numerical-examples-rotations"
section: "Numerical Examples - Finite Rotations and Post-Buckling"
order: 5
tags:
  - "engineering/numerical-validation"
  - "engineering/post-buckling"
  - "engineering/finite-rotations"
  - "engineering/cantilever-beam"
  - "engineering/circular-arch"
summary: "Three numerical examples demonstrating finite rotation accuracy and curved geometry advantages: unrolling cantilever, post-buckling circular arch, and 3D curved cantilever"
formulas:
  - id: "EQ4.3"
    name: "Euler formula for curvature"
    expr: "κ = M/(EI) = const."
---

## Numerical Examples - Finite Rotations and Post-Buckling Analysis

This section evaluates the proposed 2-node and 3-node beam elements in problems with very large (finite) rotations. The examples demonstrate that curved reference geometry significantly increases accuracy for predicting final displacement values and critical points.

### Example 1: Unrolling of a Circular Cantilever Beam

#### Problem Description

A geometrically-nonlinear analysis of a circular cantilever beam with a bending moment applied at the free end (Fig. 2). This is the exact inverse of the roll-up cantilever test problem.

**Geometry and Material Properties:**
- Circumferential length: L = 10
- Young's modulus: E = 1200
- Poisson's ratio: ν = 0
- Cross-section: square with unit area

#### Exact Solution

Using the classical Euler formula:

```
κ = M/(EI) = const.
```

For the chosen characteristics:
- Reference circular shape → semi-circle: M = 10π
- Semi-circle → straight line: M = 20π

#### Numerical Solution

**Mesh:** Ten 3-node curved-beam elements
**Load increments:** Two-load increments

#### Results - Cantilever Free-End Displacement Components

| Load Case | Model | No. Elements | Horizontal Displ. | Vertical Displ. | Rotation |
|-----------|-------|--------------|-------------------|-----------------|----------|
| M = 10π | Present 3-node | 10 | -0.004 | 6.364 | -3.140 |
| | Straight 3-node | 10 | -0.158 | 6.159 | -3.090 |
| | Reference soln | — | 0.000 | 6.366 | -3.141 |
| M = 20π | Present 3-node | 10 | 9.998 | 0.017 | -6.281 |
| | Straight 3-node | 10 | 9.663 | 0.497 | -6.180 |
| | Reference soln | — | 10.000 | 0.000 | -6.283 |

**Key Finding:** The curved-beam elements show dramatic improvement over straight-beam elements, achieving almost exact reference solution values.

### Example 2: Post-Buckling Analysis of a Circular Arch

#### Problem Description

Nonlinear analysis of pre- and post-buckling deformation of a circular arch: hinged at one end, clamped at the other, under vertical force applied at the middle (Fig. 3).

**Geometry and Material Properties:**
- EA = GA² = 100 EI
- EI = 10⁶
- Radius: R = 100
- Angle subtended: φ = 145°

#### Solution Approach

Reference solution obtained from DaDeppo and Schmidt (1975) based on Euler's beam theory using penalty-like shear-flexible solution with 20 3-node curved beam elements.

#### Critical Load Results

| Model | No. Elements | Force |
|-------|--------------|-------|
| Present 3-node elements | 20 | 897.3 |
| Straight 3-node elements | 20 | 906. |
| Reference solution | — | 897. |

**Key Finding:** The critical load is very much influenced by large pre-buckling displacements. The curved-element model matches the reference solution precisely, while straight-element model overestimates by about 1%.

#### Pre- and Post-Buckling Behavior

The deformed shapes (Fig. 4) and force-displacement diagram (Fig. 5) clearly show:
- Complex nonlinear behavior with pre-buckling deformations
- Accurate prediction of critical point location
- Post-buckling response characteristics

### Example 3: Three-Dimensional Analysis of Curved Cantilever

#### Problem Description

Adopted from Bathe and Bolourchi (1979). Tests element performance in full 3D nonlinear problem.

**Problem Geometry:**
- Reference configuration: 45-degree circular segment
- Radius: R = 100
- Applied vertical force at free-end: P = 600

**Material Properties:**
- Young's modulus: E = 10⁷
- Poisson's ratio: ν = 0
- Cross-section: square with unit area

#### Solution and Convergence

**Elements used:**
- Eight 2-node curved beam elements
- Eight 3-node curved beam elements
- Compared with Bathe and Bolourchi using Hermitian polynomial interpolations

#### 3D Free-End Displacement Results

| Model | No. Elements | u₁ | u₂ | u₃ |
|-------|--------------|-----|--------|--------|
| Present 3-node | 8 | 13.729 | -23.814 | 53.605 |
| Present 2-node | 8 | 13.601 | -23.746 | 53.407 |
| Bathe & Bolourchi | 8 | 13.4 | -23.5 | 53.4 |

**Key Finding:** Excellent agreement with reference results. Higher accuracy than comparison methods with similar computational cost.

#### Convergence Properties

Convergence rates for 3D curved cantilever show robust Newton method performance:

| Iteration | Residual Norm | Energy Norm |
|-----------|---------------|-------------|
| 0 | 1.000 × 10² | 3.491 × 10² |
| 1 | 6.213 × 10⁻⁴ | 7.500 × 10⁻³ |
| 2 | 1.429 × 10⁻² | 4.071 × 10⁰ |
| 3 | 7.239 × 10⁻² | 1.070 × 10⁰ |
| 4 | 9.164 × 10⁻² | 2.506 × 10⁻⁶ |
| 5 | 1.315 × 10⁻³ | 5.576 × 10⁻¹³ |
| 6 | 4.820 × 10⁻⁸ | 3.086 × 10⁻²⁰ |

**Remarkable Efficiency:**
- Solution reached in **six equal load steps** (vs. 60 steps by Bathe and Bolourchi)
- Standard Newton's method quadratic convergence observed near solution
- Consistent tangent operator ensures robust convergence

### Summary of Findings

1. **Curved geometry advantage:** Improved reference geometry representation significantly increases accuracy of results
2. **Non-locking performance:** Hierarchical interpolation successfully eliminates shear and membrane locking even for low-order elements
3. **Computational efficiency:** Combined with shell elements, these beam elements provide excellent accuracy with minimal computational cost
4. **Robustness:** Consistent tangent operator guarantees quadratic convergence in Newton iterations
