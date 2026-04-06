---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/06-numerical-examples-shells"
section: "Numerical Examples - Shell Structures with Stiffeners"
order: 6
tags:
  - "engineering/shell-elements"
  - "engineering/stiffened-structures"
  - "engineering/nonlinear-plates"
  - "engineering/cylindrical-shells"
  - "engineering/snap-through"
summary: "Validation of curved beam elements in practical shell-stiffener systems: simply-supported plate with stiffeners and snap-through of hinged cylindrical shell"
formulas: []
---

## Numerical Examples - Shell Structures with Stiffeners

The final set of examples illustrates the versatility of the proposed beam elements in handling problems of significantly more practical interest: the analysis of shell structures with stiffeners. The beam elements are combined with shell elements with drilling rotations (Ibrahimbegovic, 1994).

### Example 1: Nonlinear Analysis of Simply-Supported Square Plate with Stiffeners

#### Problem Description

Adopted from Liao and Reddy (1990). Represents nonlinear analysis of a simply-supported square plate under uniform distributed loading.

**Geometry and Material Properties:**
- Plate side: a = 40
- Plate thickness: t = 0.2
- Stiffener cross-section: b/h = 1.0/0.6
- Uniform distributed load: q = 3.75
- Young's modulus: E = 3 × 10⁷
- Poisson's ratio: ν = 0.3

**Configuration:** Stiffeners placed along the lines of symmetry

#### Discretization

Due to symmetry, only one quarter of the plate is modeled:
- **Shell elements:** Four 9-node shell elements with drilling rotations
- **Beam elements:** Four 3-node curved beam elements
- **Support condition:** "Soft-simple supports" (all rotation degrees of freedom along support lines left unrestrained)

#### Results - Load-Deflection Response

The load-deflection diagram (Fig. 8) compares three solutions:

1. **Non-stiffened plate:** Baseline case
2. **Stiffened plate (present model):** Using proposed curved beam elements
3. **Stiffened plate (Liao & Reddy):** Reference solution using same number of degrees of freedom

**Key Finding:** The present curved beam element solution and Liao & Reddy reference solution are in **very good agreement**, validating the integrated beam-shell analysis capability.

#### Physical Insights

- **Effect of stiffeners:** Significant increase in load-carrying capacity
- **Nonlinear behavior:** Pronounced geometric nonlinearity with increasing deflection
- **Stiffness contribution:** Stiffeners substantially stiffen the structure under distributed loading

### Example 2: Snap-Through of Hinged Cylindrical Shell

#### Problem Description

Nonlinear analysis of a cylindrical shell snap-through under vertical loading at the center. This is a classic test problem for shell-element performance.

**Geometry and Material Properties:**
- Radius: R = 2540 mm
- Length: L = 254 mm
- Thickness: t = 12.7 mm
- Initial slope angle: θ = 0.1 rad
- Young's modulus: E = 3102.75 N/mm²
- Poisson's ratio: ν = 0.3

**Configuration:** Two cases studied:
1. Non-stiffened shell (baseline)
2. Shell reinforced with stiffeners along free edges

#### Discretization

Due to symmetry:
- Quarter of shell modeled
- Regular mesh: Four 9-node shell elements
- Stiffeners: Two 3-node beam elements
- **Analysis method:** Displacement control using same displacement increments
- **Cross-section:** Stiffener b/h = 12.7/25.4

#### Results - Force-Displacement Response

The load-displacement diagrams (Fig. 10) show:

| Case | Critical Feature | Load Value | Observation |
|------|------------------|------------|-------------|
| Shell without stiffeners | First snap-through | ~2.2 | Unstable equilibrium |
| Shell with stiffeners | Modified critical point | ~2.5 | Beneficial offset |
| 4-node shell elements | Comparative result | ~2.3 | Excellent agreement |

#### Physical Behavior

**Without stiffeners:**
- Pre-snap-through: rising branch with decreasing stiffness
- Critical point: load maximum near center displacement = 1.2
- Post-snap-through: unstable snap to inverted shape

**With stiffeners:**
- **Critical offset:** Beneficial shift of critical point to higher load
- **Improved stability:** Enhanced resistance to snap-through
- **Load capacity:** Increase of approximately 10-15%

#### Validation

The results show **excellent agreement** with earlier results obtained with 4-node shell elements (Ibrahimbegovic & Frey, 1994) also presented in Fig. 10. This validates:
- Accuracy of curved beam element formulation
- Consistent integration with shell element technology
- Reliability for practical shell-stiffener analysis

### Integration with Shell Elements

The successful application of curved beam elements with shell elements demonstrates:

1. **Geometric consistency:** Curved beam reference axes align naturally with curved shell surfaces
2. **Kinematic compatibility:** Displacement and rotation interpolations match shell element requirements
3. **Non-locking performance:** Hierarchical interpolation maintains accuracy in combined shell-beam systems
4. **Computational efficiency:** Minimal computational overhead compared to full shell refinement

### Practical Conclusions

The proposed curved beam elements provide:

- **High accuracy** for modeling stiffeners in shell structures
- **Computational efficiency** compared to full shell discretization
- **Robustness** under large deformations and snap-through behavior
- **Practical applicability** to realistic engineering structures

For problems involving stiffened shells, curved beam elements represent the optimal balance between accuracy and computational cost, allowing practical analysis of complex aerospace and marine structures.
