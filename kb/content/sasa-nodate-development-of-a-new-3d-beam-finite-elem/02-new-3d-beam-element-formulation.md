---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/02-new-3d-beam-element-formulation"
section: "Chapter 2: Development of the New 3D Beam Element"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/timoshenko-beam"
summary: "Detailed formulation of the new 3D beam element with deformable cross-section: kinematics, shape functions, gradient matrix, and stiffness matrix."
formulas:
  - id: "F1"
    name: "Classical Timoshenko beam — strain components"
    expr: "epsilon_xx = du/dx - y*d(theta_z)/dx - z*d(theta_y)/dx;  gamma_xy = dv/dx - theta_z;  gamma_xz = dw/dx + theta_y"
  - id: "F2"
    name: "Additional strain components introduced by central node"
    expr: "epsilon_yy, epsilon_zz, 2*epsilon_yz  — captured by 8 extra DoFs at mid-length node"
  - id: "F3"
    name: "Displacement interpolation (enhanced element)"
    expr: "u(x,y,z) = N_beam(x) * u_nodes  + N_section(y,z) * a_central_node"
  - id: "F4"
    name: "Stiffness matrix assembly"
    expr: "K = integral_V [ B^T * D * B ] dV  where B = strain-displacement matrix, D = material constitutive matrix"
  - id: "F5"
    name: "Integration strategy"
    expr: "Gauss quadrature along beam axis (x) combined with through-thickness integration points (y,z) for cross-section"
---

# Chapter 2: Development of the New 3D Beam Element

## Review of Classical Beam Models

### Bernoulli-Euler Beam

The classical Bernoulli-Euler beam assumes:
- Plane sections remain plane and perpendicular to the centroidal axis after deformation.
- No shear deformation (infinite shear stiffness assumption).
- Strain state: only epsilon_xx (axial) is non-zero in the beam.

Limitations: no shear flexibility; inaccurate for thick/short beams; no cross-section deformation.

### Timoshenko Beam

Timoshenko beam relaxes the perpendicularity assumption:
- Allows cross-sections to rotate relative to the centroidal axis.
- Introduces shear strains gamma_xy and gamma_xz.
- Strain state for a classical Timoshenko element:

```
epsilon_xx = du/dx - y*(d theta_z/dx) - z*(d theta_y/dx)
gamma_xy = dv/dx - theta_z
gamma_xz = dw/dx + theta_y
```

Still missing: epsilon_yy, epsilon_zz, 2*epsilon_yz (cross-section deformation components).

## Key Inspiration: Enhanced Shell Elements

The proposed beam element is inspired by **enriched shell elements** (Sabourin's work), which add through-thickness degrees of freedom to capture through-thickness compression. The same concept is applied to beams: an extra node is added to capture cross-section deformation.

## New 3D Beam Element Architecture

### Geometry

- **2 end nodes** (standard Timoshenko beam nodes):
  - Each has 6 DoFs: u_x, u_y, u_z, theta_x, theta_y, theta_z.
  - Total at end nodes: 12 DoFs.
- **1 central node at mid-length**:
  - Has 8 additional DoFs capturing cross-section deformation modes.
  - The 8 DoFs represent the distribution of v and w displacement (in y and z directions) within the cross-section, enabling epsilon_yy, epsilon_zz, and 2*epsilon_yz.

### Additional Degrees of Freedom

The 8 extra DoFs at the central node encode:
- Symmetric and antisymmetric cross-section shape changes in y.
- Symmetric and antisymmetric cross-section shape changes in z.
- Coupling (shear within cross-section).

These are sufficient to introduce the coupling between epsilon_yy and epsilon_zz (Poisson coupling) that is essential for correct transverse mechanical behavior.

### Displacement Interpolation

The displacement field is decomposed:

```
u(x,y,z) = N_beam(x) * {u_end_nodes}  +  N_section(y,z) * {a_central_node}
```

where:
- N_beam(x): standard Timoshenko shape functions along the beam axis.
- N_section(y,z): enrichment shape functions over the cross-section.
- {a_central_node}: 8 central node DoFs.

### Gradient Matrix B

The strain-displacement matrix B maps nodal DoFs to the 6 strain components (epsilon_xx, epsilon_yy, epsilon_zz, 2*epsilon_yz, gamma_xy, gamma_xz):

```
epsilon = B * d
```

where d is the vector of all element DoFs (12 end-node + 8 central-node = 20 total per element).

### Stiffness Matrix

```
K = integral_V [ B^T * D * B ] dV
```

The volume integral is evaluated using:
- Gaussian quadrature along the beam axis (x-direction).
- Through-thickness integration points in y and z (similar to ABAQUS through-thickness integration for beam sections).

The full 3D constitutive matrix D is used — including all 6×6 terms for orthotropic materials.

## Linear Small-Strain Validation

The element was implemented in MATLAB and validated against ABAQUS Standard 3D solid element (C3D8) simulations for:

| Test Case | Quantity Validated | Result |
|---|---|---|
| Tension | Axial displacement Ux | Excellent agreement |
| Pure bending | Centroidal axis Uy, cross-section distribution | Excellent agreement |
| Shear + bending | Centroidal axis Uy, cross-section shape | Good agreement |
| Transverse compression | Cross-section Uy distribution | Captures epsilon_yy correctly |
| Torsion | Rotation angle alpha_x along beam | Excellent agreement |

Key result: the **8 extra DoFs are sufficient** to capture the coupling between epsilon_yy and epsilon_zz. Agreement with ABAQUS 3D solid elements is excellent for all test cases.

## Advantages Over Solid Elements

For slender structures (yarns in textile composites):
- Beam elements have far fewer DoFs per unit length than 3D solid meshes.
- This dramatically reduces computational cost for large textile unit cells with thousands of yarn segments.
- The new element retains the ability to model cross-section deformation (unlike classical beams), combining efficiency and accuracy.
