---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/4_cuf_beam_formulation"
section: "Carrera Unified Formulation and High-Order Beam Elements"
order: 4
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/cuf"
  - "engineering/kinematic-expansion"
summary: "Unified beam formulation based on CUF with hierarchical Taylor and Lagrange expansion models for arbitrary cross-section polynomial approximations"
formulas:
  - id: "F1"
    name: "Deformation gradient"
    expr: "F = \\mathbf{1} + \\nabla U = \\mathbf{1} + D"
  - id: "F2"
    name: "3D displacement field expansion"
    expr: "U(X, Y, Z) = F_s(X, Z)U_s(Y), \\quad s = 1, 2, \\ldots, M"
  - id: "F3"
    name: "Taylor Expansion model (TE-2)"
    expr: "U_X = U_{X1} + X U_{X2} + Z U_{X3} + X^2 U_{X4} + XZ U_{X5} + Z^2 U_{X6}"
  - id: "F4"
    name: "Number of expansion terms (Taylor)"
    expr: "M = (N+1)(N+2)/2"
  - id: "F5"
    name: "Lagrange expansion model (LE-9)"
    expr: "U_X = F_1(X,Z)U_{X1} + F_2(X,Z)U_{X2} + \\cdots + F_9(X,Z)U_{X9}"
  - id: "F6"
    name: "Nodal approximation along beam axis"
    expr: "U_s(Y) = N_i(Y)U_{si}, \\quad i = 1, 2, \\ldots, N_n"
---

# Carrera Unified Formulation and High-Order Beam Elements

## Overview of CUF

The Carrera Unified Formulation (CUF) is a hierarchical approach to constructing beam, plate, and shell theories. The key innovation is the ability to write governing equations and finite element arrays in a compact, recursive form that is invariant of the theory approximation order. This allows both classical (Euler-Bernoulli, Timoshenko) and arbitrary high-order theories to be formulated within a single unified framework.

## 3D Displacement Field Expansion

For a deformed hyperelastic body, the displacement vector U(X) maps points in the reference configuration X = (X, Y, Z) to points in the current configuration x = (x, y, z). The deformation gradient is:

```
F = 1 + ∇U = 1 + D
```

where D is the displacement gradient.

In the CUF domain, the 3D displacement field of a solid beam with main dimension along the Y-axis can be expressed as a generic expansion of generalized displacements U_s(Y):

```
U(X, Y, Z) = F_s(X, Z)U_s(Y),    s = 1, 2, ..., M
```

where:
- F_s are functions of coordinates X and Z on the cross-section
- U_s are generalized (unknown) displacements along the beam axis
- M is the number of expansion terms
- Repeated subscript s indicates summation (Einstein notation)

## Taylor Expansion (TE) Models

In Taylor expansion models, the generalized displacements are expanded around the beam axis using a truncated Maclaurin polynomial of order N. The F_s functions are polynomials of type X^i Z^j.

For a quadratic Taylor expansion (TE-2, N=2) model, the full 3D displacement field is:

```
U_X(X,Y,Z) = U_X1(Y) + X U_X2(Y) + Z U_X3(Y) + X² U_X4(Y) + XZ U_X5(Y) + Z² U_X6(Y)

U_Y(X,Y,Z) = U_Y1(Y) + X U_Y2(Y) + Z U_Y3(Y) + X² U_Y4(Y) + XZ U_Y5(Y) + Z² U_Y6(Y)

U_Z(X,Y,Z) = U_Z1(Y) + X U_Z2(Y) + Z U_Z3(Y) + X² U_Z4(Y) + XZ U_Z5(Y) + Z² U_Z6(Y)
```

**Hierarchical Property**: Taylor expansion models are hierarchical, meaning a TE model of order N contains all lower-order terms. The number of expansion terms is:

```
M = (N + 1)(N + 2)/2
```

**Classical Theories as Special Cases**: The classical beam theories are particular cases of the linear CUF TE model (TE-1):
- Euler-Bernoulli beam theory
- Timoshenko beam theory

## Lagrange Expansion (LE) Models

Lagrange expansion models use Lagrange-type polynomials to expand the generalized displacements on the beam section domain. The cross-section physical surface is discretized into a number of expansion sub-domains with polynomial degree depending on the expansion type.

Available LE models include:
- **LE-3**: Three-node linear expansion
- **LE-4**: Four-node bilinear expansion
- **LE-9**: Nine-node quadratic expansion
- **LE-16**: Sixteen-node cubic expansion

For example, the quadratic LE-9 model has 3D displacement field:

```
U_X(X,Y,Z) = F_1(X,Z) U_X1(Y) + F_2(X,Z) U_X2(Y) + ··· + F_9(X,Z) U_X9(Y)

U_Y(X,Y,Z) = F_1(X,Z) U_Y1(Y) + F_2(X,Z) U_Y2(Y) + ··· + F_9(X,Z) U_Y9(Y)

U_Z(X,Y,Z) = F_1(X,Z) U_Z1(Y) + F_2(X,Z) U_Z2(Y) + ··· + F_9(X,Z) U_Z9(Y)
```

where F_1, ..., F_9 form a standard quadratic Lagrange polynomial set.

**Advantages of LE Models**:
- Local expansions of pure displacement variables at arbitrary positions on the cross-section
- Ability to capture complex 3D-like solutions at global/local scale
- Superior accuracy in zones of interest
- Better handling of heterogeneous and thin-walled structures

## Discretization Along Beam Axis

Independently of the cross-section expansion choice (TE or LE), the generalized displacements are approximated along the beam axis by discretizing the 1D domain with finite elements:

```
U_s(Y) = N_i(Y) U_si,    i = 1, 2, ..., N_n
```

where:
- N_i are 1D shape functions
- U_si are nodal values of generalized displacements
- N_n is the number of nodes per element

## Unified and Hierarchical Formulation

The principal advantage of using the compact notation is that governing equations and finite element matrices can be formulated in a unified and hierarchical manner that is affected neither by:
- Choice of cross-section expansion (F_s selection)
- Choice of FE shape functions (N_i selection)

This allows implementation of classical to higher-order theories in an automatic manner by exploiting the index notation of CUF.

## Computational Efficiency

The hierarchical nature of CUF enables:
1. **Multiple refinement strategies**: Increase order N without rewriting code
2. **Convergence studies**: Easily compare different approximation orders
3. **Automatic theory switching**: Use same code for Euler-Bernoulli, Timoshenko, higher-order, etc.
4. **Computational transparency**: Code structure is independent of theory complexity
