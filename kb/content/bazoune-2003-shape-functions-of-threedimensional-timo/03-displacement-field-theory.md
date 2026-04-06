---
parent_id: "bazoune-2003-shape-functions-of-threedimensional-timo"
chunk_id: "bazoune-2003-shape-functions-of-threedimensional-timo/03-displacement-field-theory"
section: "The Displacement Field"
order: 3
tags:
  - "engineering/beam-theory/timoshenko-beam"
  - "engineering/kinematic-relations"
  - "engineering/shear-deformation"
summary: "Kinematic relations for 3D Timoshenko beam including axial, bending, and shear effects"
formulas:
  - id: "F1"
    name: "Axial displacement"
    expr: "U = u - y(∂v/∂x) - z(∂w/∂x)"
  - id: "F2"
    name: "Transverse displacement y"
    expr: "V = -zθ_x + v_z"
  - id: "F3"
    name: "Transverse displacement z"
    expr: "W = yθ_x + w_z"
  - id: "F4"
    name: "Shear strain relation xy-plane"
    expr: "∂v/∂x = ∂v_b/∂x + ∂v_s/∂x = θ_z + γ_xy"
  - id: "F5"
    name: "Shear strain relation xz-plane"
    expr: "∂w/∂x = ∂w_b/∂x + ∂w_s/∂x = -θ_y + γ_xz"
  - id: "F6"
    name: "Rotation-curvature relations"
    expr: "θ_z = ∂v_b/∂x; θ_y = ∂w_b/∂x"
---

# The Displacement Field

## Kinematic Relations for Timoshenko Beam Theory

Timoshenko beam theory (TBT) is applied when the cross-sectional dimensions of the beam are not small compared to its length and/or when higher bending modes are required. For a three-dimensional beam undergoing axial, torsional and bending deformations in the (xy)- and (xz)-plane:

### Axial and Transverse Displacements

```
U = u - y(∂v/∂x) - z(∂w/∂x)
V = -zθ_x + v_z
W = yθ_x + w_z
```

The transverse deformations consist of contributions from bending and shear:

```
v = v_b + v_s;  w = w_b + w_s
```

where $(v_b, w_b)$ and $(v_s, w_s)$ are components due to bending and transverse shear, respectively.

### Slope-Shear Relations

The relationships between total slope, bending rotation and transverse shear are:

```
∂v/∂x = ∂v_b/∂x + ∂v_s/∂x = θ_z + γ_xy
∂w/∂x = ∂w_b/∂x + ∂w_s/∂x = -θ_y + γ_xz
```

where $γ_{xy}$ and $γ_{xz}$ are shear strains in the (xy)- and (xz)-planes, respectively.

The two rotations $(θ_y, θ_z)$ are related to the bending deformations $(v_b, w_b)$ by:

```
θ_z = ∂v_b/∂x; θ_y = ∂w_b/∂x
```

## Important Notes

Axial warping displacement during torsion is ignored in this formulation, a standard assumption in engineering beam theory.
