---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/03-dq-method"
section: "Differential Quadrature (DQ) Method Formulation"
order: 3
tags:
  - "engineering/numerical-methods/differential-quadrature"
  - "engineering/beam-theory"
  - "engineering/discretization"
summary: "Discretization of Timoshenko beam equations using differential quadrature method with weighting coefficients"
formulas:
  - id: "F3"
    name: "DQ grid point distribution"
    expr: "xi = (1/2)[1 - cos((i-1)/(M-1)π)] × L, i = 1,2,...,M"
  - id: "F4"
    name: "Discretized shear equation"
    expr: "KGA∑bij(wj) + ρAω²wi - KGA∑aij(φj) = 0"
  - id: "F5"
    name: "Discretized moment equation"
    expr: "EI∑bij(φj) - (KGA - ρIω²)φi + KGA∑aij(wj) = 0"
---

## Differential Quadrature Method

The essence of the DQ method is that the partial derivative of a function with respect to a space variable at a grid point can be approximated as a weighted linear sum of the function values at all grid points in the domain.

### Grid Point Distribution

For the computational domain 0 ≤ x ≤ L, the beam is divided into (M-1) intervals by M grid points with coordinates x₁, x₂, ..., xₘ. The well-accepted mesh point distribution is:

```
xi = (1/2)[1 - cos((i-1)/(M-1)π)] × L,    i = 1,2,...,M     (2)
```

This Chebyshev-type distribution clusters more points near the boundaries, improving accuracy for boundary value problems.

### Discretized Formulation

Applying the DQ rule to equations (1a) and (1b) over the domain 0 ≤ x ≤ L:

```
KGA∑(j=1 to M) bij(wj) + ρAω²wi - KGA∑(j=1 to M) aij(φj) = 0    (3a)

EI∑(j=1 to M) bij(φj) - (KGA - ρIω²)φi + KGA∑(j=1 to M) aij(wj) = 0    (3b)
```

where:
- i = 1, ..., M
- aᵢⱼ = weighting coefficients for first-order derivatives at grid point xᵢ
- bᵢⱼ = weighting coefficients for second-order derivatives at grid point xᵢ

### Weighting Coefficient Calculation

The weighting coefficients aᵢⱼ and bᵢⱼ are calculated based on equation (2). The explicit expressions are:

```
aij = 1/(xj - xi) ∏(k=1 to M, k≠i,j) (xj - xk)/(xi - xk),    i,j = 1,...,M, i≠j    (A.1)

aii = -∑(j=1 to M, j≠i) aij,    i = 1,...,M    (A.2)

bij = 2[aij·aii - aij/(xj - xi)],    i,j = 1,...,M, i≠j    (A.3)

bii = -∑(j=1 to M, j≠i) bij,    i = 1,...,M    (A.4)
```

These coefficients depend only on the grid point locations and can be computed before the eigenvalue analysis.

## Advantages of DQ Method

- Provides high accuracy with relatively few grid points
- Transforms differential equations into algebraic eigenvalue problems
- Well-suited for beam problems with various boundary conditions
- Computationally efficient compared to finite element methods
