---
parent_id: "tudjono-2017-exact-shape-functions-for-timoshenko-bea"
chunk_id: "tudjono-2017-exact-shape-functions-for-timoshenko-bea/02-euler-lagrange-formulation"
section: "Formulation of Exact Displacement Functions"
order: 2
tags:
  - "engineering/differential-equations"
  - "engineering/timoshenko-theory"
  - "engineering/boundary-conditions"
summary: "Euler-Lagrange equations for Timoshenko beams with variable properties"
formulas:
  - id: "F1"
    name: "Axial equilibrium"
    expr: "∂/∂x[E(x)A(x)∂u/∂x] = 0"
  - id: "F2"
    name: "Shear equilibrium"
    expr: "∂/∂x[κG(x)A(x)(∂w/∂x - θ)] = 0"
  - id: "F3"
    name: "Moment equilibrium"
    expr: "∂/∂x[E(x)I(x)∂θ/∂x] + κG(x)A(x)(∂w/∂x - θ) = 0"
  - id: "F4"
    name: "Axial solution"
    expr: "E(x)A(x)∂u/∂x = k_1"
  - id: "F5"
    name: "Axial displacement integration"
    expr: "u(x) = k_1∫[1/(E(x)A(x))]dx + k_2"
---

# Formulation of Exact Displacement Functions

## Governing Differential Equations

The Euler-Lagrange equations for Timoshenko beams with variable material and geometric properties can be obtained from the principle of virtual work:

```
∂/∂x[E(x)A(x)∂u/∂x] = 0                                    (1a)

∂/∂x[κG(x)A(x)(∂w/∂x - θ)] = 0                             (1b)

∂/∂x[E(x)I(x)∂θ/∂x] + κG(x)A(x)(∂w/∂x - θ) = 0           (1c)
```

where:
- u, w, θ are axial displacement, transverse displacement, and rotation
- E(x), A(x), G(x), I(x) are elastic modulus, section area, shear modulus, and moment of inertia as functions of x
- κ is the shear correction factor

## Solution Strategy: Axial Deformation

### Step 1: Integration of Axial Equation

Integration of equation (1a) yields:

```
E(x)A(x)∂u/∂x = k_1
```

where k₁ is the indefinite integration constant.

### Step 2: Solve for Axial Displacement

Solving for u(x):

```
u(x) = k_1∫[1/(E(x)A(x))]dx + k_2
```

### Step 3: Define Integration Function

Defining:

```
ψ_1 = ∫[1/(E(x)A(x))]dx
```

### Step 4: Apply Boundary Conditions

Imposing boundary conditions of horizontal displacements at both end nodes:

```
u(0) = u_1,  u(L) = u_2
```

The exact axial displacement and its derivative can be obtained by solving for the constants.

## Key Advantage

This systematic approach allows the shape functions to naturally embed the variation of E(x)A(x) throughout the beam element, making the functions "exact" for non-uniform properties.
