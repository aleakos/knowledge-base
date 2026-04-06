---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/04-eigenvalue-analysis"
section: "Eigenvalue Problem and Natural Frequencies"
order: 4
tags:
  - "engineering/eigenvalue-problems"
  - "engineering/natural-frequencies"
  - "engineering/vibration-analysis"
summary: "Matrix formulation of discretized equations and eigenvalue solution for natural frequencies"
formulas:
  - id: "F6"
    name: "Eigenvalue problem matrix form"
    expr: "[S]{U} = ω²{U}"
  - id: "F7"
    name: "Frequency parameter"
    expr: "Ω = ∜(ρAω²nL⁴/(EI))"
  - id: "F8"
    name: "Characteristic equation - CC boundary"
    expr: "cosh(Ω)cos(Ω) = 1"
  - id: "F9"
    name: "Characteristic equation - CF boundary"
    expr: "cosh(Ω)cos(Ω) = -1"
---

## Matrix Eigenvalue Formulation

The discretized equations (3a) and (3b) can be expressed in matrix form:

```
[S]{U} = ω²{U}                                                    (4)
```

where:
- {U}ᵀ = {w₂, w₃, ..., wₘ₋₁, φ₂, φ₃, ..., φₘ₋₁} includes degrees of freedom on interior points of the domain
- [S] is the stiffness matrix derived from equations (3a) and (3b)

The boundary conditions are incorporated by removing rows and columns corresponding to boundary points from the global system matrix.

## Natural Frequencies and Eigenvalues

The natural vibration frequencies of the beam are furnished by the eigenvalues of the eigenvalue problem defined by equation (4). The eigenvalues may be computed using standard eigenvalue solvers such as the QR algorithm.

## Frequency Parameter Definition

To make results dimensionless and comparable across different CNT configurations, the frequency parameter is defined as:

```
Ω = ∜(ρAω²nL⁴/(EI))
```

where n is the mode number.

## Characteristic Equations for Euler Beam

For verification of DQ results, analytical solutions for Euler beams are used. These are obtained from the characteristic equations:

### Clamped-Clamped (CC) Boundary Condition

```
cosh(Ω)cos(Ω) = 1                                                (6)
```

### Clamped-Free (CF) Boundary Condition

```
cosh(Ω)cos(Ω) = -1                                               (7)
```

These equations arise from applying boundary conditions to the general solution of the Euler beam equation. For Timoshenko beams, analytical solutions are more complex due to the coupled system of differential equations.

## Numerical Solution

The QR algorithm provides efficient computation of eigenvalues. For each load case or boundary condition, the process:
1. Assembles the [S] matrix from DQ discretization
2. Applies boundary conditions
3. Solves the generalized eigenvalue problem
4. Extracts eigenvalues and converts to frequency parameters Ω
5. Computes physical frequencies ω = (EI/(ρAL⁴))^(1/4) × Ω
