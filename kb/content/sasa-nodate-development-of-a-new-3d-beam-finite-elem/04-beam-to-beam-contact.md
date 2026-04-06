---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/04-beam-to-beam-contact"
section: "Chapter 4: Enhanced 3D Beam-to-Beam Contact"
order: 4
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/contact-mechanics"
summary: "Frictionless beam-to-beam contact formulation for rectangular cross-sections using penalty method, Hermite curve smoothing, and contact search algorithm."
formulas:
  - id: "F1"
    name: "Penalty contact virtual work contribution"
    expr: "delta_W_contact = epsilon_N * g_N * delta_g_N  where epsilon_N = penalty parameter, g_N = gap function (penetration), delta_g_N = virtual gap variation"
  - id: "F2"
    name: "Gap function for beam contact"
    expr: "g_N = ||x_m(xi_m) - x_s(xi_s)|| - (h_m + h_s)/2  where x_m, x_s = closest point positions, h = cross-section half-width"
  - id: "F3"
    name: "Contact contribution linearization"
    expr: "K_contact = epsilon_N * [delta_g_N * delta_g_N^T]  (symmetric contribution to tangent stiffness)"
  - id: "F4"
    name: "Hermite smoothing of beam curve"
    expr: "x_smooth(xi) = H_1(xi)*x_1 + H_2(xi)*t_1 + H_3(xi)*x_2 + H_4(xi)*t_2  where H_i = Hermite basis functions, t_i = tangent vectors"
---

# Chapter 4: Enhanced 3D Beam-to-Beam Contact

## Motivation

In textile composite preforms, yarns are in contact with each other at crossover points (e.g., warp and weft yarns in a plain weave). Accurate simulation of yarn-to-yarn contact is essential for:
- Predicting yarn shape change (oval → flattened cross-section at contact points).
- Determining yarn path geometry in the formed composite.
- Computing fabric shear and compaction behaviour.

## Frictionless Contact Between Solids: Theory

Contact problems satisfy the **Karush-Kuhn-Tucker (KKT) conditions**:
- Non-penetration constraint: g_N ≥ 0 (gap function non-negative).
- Contact pressure non-negative: p_N ≥ 0 (only compressive contact force).
- Complementary condition: p_N * g_N = 0 (either gap is zero or pressure is zero).

## Finite Element Contact Formulations

Three common approaches:
| Method | Description |
|---|---|
| **Penalty method** | Add a penalty stiffness for penetration; violates non-penetration slightly |
| **Lagrange multiplier** | Enforces constraint exactly; adds unknowns |
| **Augmented Lagrangian** | Combines both; iterative |

The thesis uses the **penalty method** because of its simplicity and compatibility with the beam element framework.

## Weak Formulation of Contact Contribution

The contact virtual work contribution using penalty formulation:

```
delta_W_contact = epsilon_N * g_N * delta_g_N
```

where:
- epsilon_N: penalty parameter (large number approximating rigid contact).
- g_N: penetration depth (negative means penetration; contact active when g_N < 0).
- delta_g_N: variation of gap function.

The consistent linearization gives the contact tangent stiffness:

```
K_contact = epsilon_N * [delta_g_N (tensor) delta_g_N^T]  +  epsilon_N * g_N * (curvature terms)
```

## Beam-to-Beam Contact for Rectangular Cross-Sections

### Contact Geometry

For beams with rectangular cross-sections, contact can occur at:
- One pair of edges (point-to-point contact).
- Two pairs of edges (edge-to-edge contact).
- Face-to-face contact (surface-to-surface).
- Four or more contact pairs for large overlap.

The contact check examines all possible edge pairs and activates the contact contribution when penetration is detected.

### Gap Function

For two beams (master m and slave s), the gap function is:

```
g_N = ||x_m(xi_m) - x_s(xi_s)|| - (h_m + h_s)/2
```

where:
- x_m(xi_m), x_s(xi_s) = positions of closest points on each beam's centroidal axis.
- h_m, h_s = half-widths of the respective cross-sections in the contact direction.

### Closest Point Search

Finding the closest points (xi_m, xi_s) on the two beam axes requires minimizing the distance function. This is a 2D minimization problem solved iteratively (Newton's method) in the contact search algorithm.

## Contact Search Algorithm

An efficient contact search is necessary for large models with many potential contact pairs. The algorithm:
1. Builds a bounding box hierarchy over all beam elements.
2. Identifies candidate element pairs with overlapping bounding boxes.
3. For each candidate pair, computes the closest points iteratively.
4. Activates contact contribution if g_N < 0.

## Hermite Smoothing

The beam centerline geometry described by linear Lagrange elements is piecewise linear — the tangent is discontinuous at element nodes. This causes convergence problems in closest-point search.

**Hermite polynomial smoothing** replaces the piecewise linear representation with a smooth C1 curve:

```
x_smooth(xi) = H_1(xi)*x_1 + H_2(xi)*t_1 + H_3(xi)*x_2 + H_4(xi)*t_2
```

where H_i are cubic Hermite basis functions and t_i are tangent vectors at element nodes. This produces a globally smooth beam axis representation that improves contact search robustness and convergence.

## Numerical Examples

Three qualitative contact examples are presented:

1. **Point-to-point contact**: Two beams crossing at a point. Cross-section deformation at contact point captured correctly.
2. **Edge-to-edge contact**: Parallel beams with edge contact. Normal forces and cross-section flattening reproduced.
3. **Surface-to-surface contact**: Beams in face-to-face contact. Load distribution across contact surface qualitatively correct.

All examples demonstrate that the central node DoFs correctly deform the cross-section under contact loading — validating the element's capability to model the oval-to-flat cross-section change characteristic of textile yarn contact.

## Conclusions

- The penalty-based beam-to-beam contact formulation with Hermite smoothing and active set search provides a robust and computationally efficient framework.
- The enhanced 3D beam element with deformable section is essential for realistic contact simulation — classical rigid-section beam elements cannot capture cross-section flattening.
- The combined element + contact formulation constitutes a complete mesoscale toolkit for textile composite forming simulation.
