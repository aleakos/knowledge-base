---
parent_id: "bazoune-2003-shape-functions-of-threedimensional-timo"
chunk_id: "bazoune-2003-shape-functions-of-threedimensional-timo/02-finite-element-discretization"
section: "Finite Element Discretization"
order: 2
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-elements"
  - "engineering/degrees-of-freedom"
summary: "Definition of nodal displacement vector and elastic deformation relationships for 3D beam elements"
formulas:
  - id: "F1"
    name: "Nodal displacement vector"
    expr: "{e}_{12x1} = [u_1 v_1 w_1 θ_x1 θ_y1 θ_z1 u_2 v_2 w_2 θ_x2 θ_y2 θ_z2]^T"
  - id: "F2"
    name: "Elastic deformation relation"
    expr: "{d} = [N]{e}"
---

# Finite Element Discretization

## Element Configuration

A typical two-node three-dimensional beam element of length l is considered, where each node has six degrees of freedom. The nodal displacement vector is defined with respect to the element axes:

```
{e}_{12x1} = [u_1 v_1 w_1 θ_x1 θ_y1 θ_z1 u_2 v_2 w_2 θ_x2 θ_y2 θ_z2]^T
```

where:
- $(u_1, u_2)$ are the nodal axial displacements in the x-direction
- $(v_1, v_2)$ and $(w_1, w_2)$ are the transverse displacements in the y- and z-directions, respectively
- $(θ_{x1}, θ_{x2})$ are the torsional displacements about the x-axis
- $(θ_{y1}, θ_{y2})$ and $(θ_{z1}, θ_{z2})$ are the rotational displacements in the (xz)- and (xy)-planes, respectively

## Displacement Field

According to the standard finite element procedure, the elastic deformation of an arbitrary point of the beam element can be expressed as:

```
{d} = [N]{e}
```

where $\{d\}$ represents the elastic deformation vector of the beam element and $[N]$ is the matrix of shape functions used to model deformations. The shape functions are spatially dependent while the nodal displacement vector is independent.

## Element Assumptions

The shape functions for translational and rotational bending deformation employ conventional cubic Hermitian polynomials that incorporate:
- Continuity and completeness conditions
- Shear deformation parameters accounting for non-uniform stress distribution
- Linear shape functions for torsional and axial deformation (for completeness)
