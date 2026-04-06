---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/04-beam-contact-and-conclusions"
section: "Enhanced 3D Beam-to-Beam Contact and Conclusions"
order: 4
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/contact-mechanics"
summary: "Frictionless 3D beam-to-beam contact formulation using penalty method and Hermite smoothing, numerical examples, and overall conclusions of the thesis."
formulas:
  - id: "F1"
    name: "Penalty contact potential"
    expr: "Pi_c = epsilon_N/2 * integral(<-g_N>^2 dA)"
  - id: "F2"
    name: "Gap function (closest point)"
    expr: "g_N = ||x_m - x_s|| - r_m - r_s"
  - id: "F3"
    name: "Contact stiffness (penalty)"
    expr: "K_c = epsilon_N * N * N^T"
---

# Enhanced 3D Beam-to-Beam Contact and Conclusions

## Motivation for Beam-to-Beam Contact

In textile preform forming, yarns interact with each other through contact. The contact between beams with rectangular cross-sections is geometrically complex:
- Multiple contact pairs possible (point-to-point, edge-to-edge, surface-to-surface)
- Smooth contact geometry important for convergence
- Frictionless contact considered as a first step

## Frictionless Contact Formulation

### Gap Function
For two beams m (master) and s (slave), the closest-point problem finds the points on each beam's axis that are closest together. The gap between beam surfaces:
```
g_N = ||x_m - x_s|| - r_m - r_s
```
where r_m, r_s are effective radii (half-dimensions for rectangular cross-sections).

### Penalty Formulation
Contact contribution to potential energy:
```
Pi_c = (epsilon_N / 2) * integral_A(<-g_N>^2 dA)
```
where `<->` denotes the Macaulay bracket (active only when penetration occurs).

**Variation** yields the contact force vector; **linearization** gives the contact stiffness matrix:
```
K_c = epsilon_N * n * n^T
```
where n is the contact normal.

The penalty parameter epsilon_N must be large enough to limit penetration but not so large as to cause ill-conditioning.

## Contact Search Algorithm

For beams with rectangular cross-sections, multiple contact pairs are possible per element pair:
- 1, 2, or 4 pairs of closest edges depending on relative orientation
- Algorithm evaluates all candidate pairs and activates those with penetration

**Steps**:
1. Broad-phase search: identify element pairs whose bounding boxes overlap
2. Close-phase search: for each candidate pair, find closest points using the search of edges
3. Gap evaluation: compute g_N for each active pair
4. Assembly: add contact contributions to global stiffness and force

## Smooth Contact: Hermite Polynomial Smoothing

Direct interpolation using standard shape functions creates C0-continuous beam centerlines, leading to kinks at element boundaries. These kinks cause contact force oscillations.

**Hermite smoothing**: The beam centerline is smoothed using Hermite cubic polynomials that enforce C1 continuity (continuous position and tangent) at element boundaries. This significantly improves contact force smoothness and convergence.

**Construction**: Inscribed curve segments are constructed from the original beam nodes and tangents. The smoothed curve is used only in the contact search and gap function evaluation, not in the structural formulation.

## Numerical Examples

### Example 1: Point-to-Point Contact
- Two beams in initial configuration with one contact point
- Applied displacement drives beams into contact
- Results: centroidal axis displacements (3 directions); cross-section deformation at contact location
- MATLAB vs. ABAQUS: qualitative agreement on contact behavior

### Example 2: Edge-to-Edge Contact
- Two beams contacting along an edge
- More complex contact geometry; multiple active pairs
- Cross-section deformation at contact region captured by enhanced element

### Example 3: Surface-to-Surface Contact
- Beams in parallel, extended contact zone
- Maximum number of contact pairs active
- Demonstrates capability for distributed contact loads

**Note**: These are primarily qualitative validations confirming correctness of contact logic; full quantitative benchmarking against ABAQUS requires further work.

## Overall Conclusions

1. **New 3D beam element** with deformable rectangular cross-section successfully developed; validated for linear/small-strain, large displacement/small-strain, and contact loading

2. **Extra central node** with 8 DOF (capturing εyy, εzz, 2εyz) is sufficient to describe cross-section deformation and enable full 3D constitutive law

3. **Updated Lagrangian formulation** handles large rotations efficiently; results for isotropic and orthotropic materials match ABAQUS 3D solid simulations

4. **Beam-to-beam contact** with Hermite smoothing and penalty formulation is functional; correctly detects and handles point, edge, and surface contact configurations

5. **Efficiency**: Element achieves solid-element accuracy with much lower DOF count — suitable for mesoscale yarn modeling in textile composites

## Future Work

- Introduce friction in the contact formulation
- Apply the element to simulate draping of woven textile preforms
- Extend to dynamic forming simulations
- Improve contact robustness for more complex yarn crossover geometries
- Develop guidelines for penalty parameter selection
