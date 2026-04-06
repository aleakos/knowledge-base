---
parent_id: "bazoune-2003-shape-functions-of-threedimensional-timo"
chunk_id: "bazoune-2003-shape-functions-of-threedimensional-timo/04-shape-function-derivation"
section: "Derivation of Shape Functions"
order: 4
tags:
  - "engineering/shape-functions"
  - "engineering/beam-bending"
  - "engineering/hermitian-polynomials"
summary: "Systematic derivation of shape functions for bending deformation in xy and xz planes"
formulas:
  - id: "F1"
    name: "Axial shape function matrix"
    expr: "[N_a(ξ)] = [N_a(ξ)] = [(1 - ξ) ξ]"
  - id: "F2"
    name: "Bending displacement expansion"
    expr: "v(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3"
  - id: "F3"
    name: "Shear strain assumption"
    expr: "γ_xy = const = γ_0"
  - id: "F4"
    name: "Bending moment relation"
    expr: "M_z = -EI_z(dθ_z/dx)"
  - id: "F5"
    name: "Moment-shear relation"
    expr: "dM_z/dx - Q_y = 0"
  - id: "F6"
    name: "Shear force relation"
    expr: "Q_y = κ_y G A γ_xy"
  - id: "F7"
    name: "Shear deformation parameter"
    expr: "Φ_z = (12EI_z)/(κ_y GA l^2)"
---

# Derivation of Shape Functions

## General Approach

Shape functions are derived for axial and torsional deformation using simple linear polynomials. For bending deformations, cubic Hermitian polynomials are employed that incorporate both continuity and completeness conditions along with shear deformation parameters.

## Axial and Torsional Shape Functions

The shape function matrices for axial and torsional deformation are straightforward:

```
[N_a(ξ)] = [N_a(ξ)] = [(1 - ξ) ξ]
[N_θ(ξ)] = [N_θ(ξ)] = [(1 - ξ) ξ]
```

where ξ = x/l is the dimensionless axial co-ordinate.

## Bending Deformation Process

### Step 1: Expand Translational Displacement

For bending deformation in the (xy)-plane, the translational displacement v(x) at an arbitrary location x is expressed as:

```
v(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3
```

### Step 2: Apply Shear Strain Assumption

Following reference [2], the shear strain is assumed to be independent of element axial co-ordinate x and constant along the finite element:

```
γ_xy = const = γ_0
```

### Step 3: Relate Moment and Shear

The bending moment $M_z$ and shearing force $Q_y$ are related by:

```
M_z = -EI_z(dθ_z/dx)
dM_z/dx - Q_y = 0
```

where $I_z$ is the second moment of area about the z-axis.

The shear force is related to the transverse shear strain by:

```
Q_y = κ_y G A γ_xy
```

where $κ_y$ is the shear correction factor accounting for non-uniform shear stress distribution, A is the cross-sectional area, E is the modulus of elasticity, and G is the shear modulus.

## Key Parameter: Shear Deformation Parameter

The shear deformation parameter is defined as:

```
Φ_z = (12EI_z)/(κ_y GA l^2)
```

This parameter represents the ratio between bending and shear stiffnesses and is crucial for incorporating shear effects into the shape functions.
