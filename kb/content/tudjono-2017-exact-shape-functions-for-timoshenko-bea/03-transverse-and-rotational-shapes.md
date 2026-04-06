---
parent_id: "tudjono-2017-exact-shape-functions-for-timoshenko-bea"
chunk_id: "tudjono-2017-exact-shape-functions-for-timoshenko-bea/03-transverse-and-rotational-shapes"
section: "Transverse and Rotational Shape Functions"
order: 3
tags:
  - "engineering/shape-functions"
  - "engineering/transverse-displacement"
  - "engineering/rotation"
summary: "Derivation of exact shape functions for transverse displacement and rotation in variable beams"
formulas:
  - id: "F1"
    name: "Transverse displacement assumption"
    expr: "w(x) = a_0 + a_1 x + (a_2/2)x^2 + (a_3/6)x^3"
  - id: "F2"
    name: "Transverse derivative"
    expr: "∂w/∂x = a_0 + a_1 x + (a_2/2)x^2"
  - id: "F3"
    name: "Second derivative"
    expr: "∂²w/∂x² = a_2 + a_3 x"
  - id: "F4"
    name: "Shear equilibrium rearranged"
    expr: "κG(x)A(x)(∂w/∂x - θ) = c_1"
  - id: "F5"
    name: "Rotation solution"
    expr: "w(x) = c_1ψ_1 + ∫θ(x)dx + c_4"
  - id: "F6"
    name: "Boundary condition relations"
    expr: "{c} = [M_wθ]^(-1){a}"
---

# Transverse and Rotational Shape Functions

## Transverse Displacement Formulation

The transverse displacement is assumed in polynomial form:

```
w(x) = a_0 + a_1 x + (a_2/2)x^2 + (a_3/6)x^3
```

with derivatives:

```
∂w/∂x = a_0 + a_1 x + (a_2/2)x^2
∂²w/∂x² = a_2 + a_3 x
```

## Transverse Shear Solution

The solution of the transverse shear equilibrium equation (1b) is obtained from:

```
κG(x)A(x)(∂w/∂x - θ) = c_1
```

From which:

```
w(x) = c_1ψ_1 + ∫θ(x)dx + c_4
θ(x) = -c_1/(κG(x)A(x)) + ∂w/∂x
```

## Moment-Curvature Relationship

The moment equilibrium (equation 1c) becomes:

```
∂/∂x[E(x)I(x)∂θ/∂x] + c_1 = 0
```

with solution relating rotation and its derivatives to the polynomial coefficients.

## Boundary Condition Application

Imposing boundary conditions at both beam ends:

```
w(0) = w_1,  w(L) = w_2
θ(0) = θ_1,  θ(L) = θ_2
```

Leads to relationship:

```
{c} = [M_wθ]^(-1){a}
```

where the matrix $[M_{wθ}]$ relates polynomial coefficients a to integration constants c based on the variable properties E(x), I(x), G(x), A(x) evaluated at specific points along the beam.

## Final Shape Functions

The transverse displacement and rotation shape functions are obtained by expressing w(x) and θ(x) in terms of nodal degrees of freedom, yielding:

```
w(x) = [N_w1  N_w2  N_w3  N_w4]{w_1  θ_1  w_2  θ_2}^T
θ(x) = [N_θ1  N_θ2  N_θ3  N_θ4]{w_1  θ_1  w_2  θ_2}^T
```

where the shape functions automatically incorporate the variation of E(x), I(x), G(x), A(x) throughout the element.
