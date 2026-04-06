---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/03-finite-element-approximation"
section: "Finite Element Approximation"
order: 3
tags:
  - "engineering/finite-element-method"
  - "engineering/element-interpolation"
  - "engineering/locking-phenomena"
  - "engineering/non-locking-elements"
summary: "Finite element discretization of Reissner beam theory with hierarchical displacement interpolation for eliminating shear and membrane locking"
formulas:
  - id: "EQ3.1"
    name: "Isoparametric interpolation of reference axis"
    expr: "x^h|_{L^e} = Σ_{I=1}^{Nen} N_I(ξ) x_I = Nx^e"
  - id: "EQ3.2"
    name: "Isoparametric interpolation of virtual rotations"
    expr: "δw^h|_{L^e} = Σ_{I=1}^{Nen} N_I(ξ) δw_I = N δw^e"
  - id: "EQ3.3"
    name: "Hierarchical position interpolation"
    expr: "φ^h|_{L^e} = φ + η = Σ_{I=1}^{Nen} N_I(ξ) φ_I + M(ξ) α^e = Nφ^e + Mα^e"
  - id: "EQ3.4"
    name: "Hierarchical displacement interpolation"
    expr: "δφ^h|_{L^e} = δφ + δη = Σ_{I=1}^{Nen} N_I(ξ) δφ_I + M(ξ) δα^e = N δφ^e + M δα^e"
  - id: "EQ3.6"
    name: "Element residual"
    expr: "r^e = ∫_{L^e} [N' ((φ'^e + η') × N)^T | 0 N']^T [n | m] ds"
  - id: "EQ3.10"
    name: "Linearized variational equations"
    expr: "⋃_{e=1}^{nel} [(δφ^e, δw^e) · (r^e - f^e) + δα^e · h^e] = 0"
  - id: "EQ3.18"
    name: "Orthogonal matrix from quaternions"
    expr: "Λ = (2q₀² - 1)I + 2q₀[q × I] + 2q ⊗ q"
  - id: "EQ3.19"
    name: "Quaternion parameters of incremental rotation"
    expr: "{q₀^(i), q^(i)} = {cos(|Δw^(i)|/2), (Δw^(i)/|Δw^(i)|) sin(|Δw^(i)|/2)}"
---

## Finite Element Approximation

This section discusses the finite element approximation of the variational formulation of Reissner's beam theory along with implementation details.

### Domain Discretization

The complete domain L is approximated with piece-wise polynomial functions. The reference axis is interpolated isoparametrically:

```
x^h|_{L^e} = Σ_{I=1}^{Nen} N_I(ξ) x_I = Nx^e
```

where N_I(ξ) are standard Lagrange-type polynomials and x_I are vectors of nodal coordinates.

### Rotation Parameters

Isoparametric interpolation is adopted for virtual rotation parameters:

```
δw^h|_{L^e} = Σ_{I=1}^{Nen} N_I(ξ) δw_I = N δw^e
```

### Hierarchical Displacement Interpolation

The key innovation is the non-standard approximation of the position vector using hierarchical interpolation:

```
φ^h|_{L^e} = φ + η = Σ_{I=1}^{Nen} N_I(ξ) φ_I + M(ξ) α^e = Nφ^e + Mα^e
```

From which the corresponding interpolations for virtual displacements directly follow:

```
δφ^h|_{L^e} = δφ + δη = Σ_{I=1}^{Nen} N_I(ξ) δφ_I + M(ξ) δα^e = N δφ^e + M δα^e
```

In these expressions, **M(ξ)** is a hierarchical interpolation polynomial one order higher than N_I(ξ). The part of interpolation η is **internal to an element**; hence it does not increase the total number of global (nodal) unknowns.

### Locking Phenomena and Cure

The choice of interpolation in Equations 3.2-3.4 is the approach for handling membrane and shear locking phenomena in curved beam elements. Previous work has shown:

- **Kikuchi's finding**: Inability to capture inextensional deformation modes is the main cause for locking
- **Curved elements**: Especially prone to locking with linear or quadratic isoparametric interpolation
- **Proposed approach**: Displacement interpolation has only one (hierarchical) term more than rotation interpolation, which is of one order lower

This contrasts with Tessler and Spiridigliozzi's proposal (for geometrically-linear theory), where orders of displacement interpolation polynomials are significantly higher than rotation interpolation order.

**Key Result**: The proposed non-locking cure provides non-locking performance even for low-order interpolations like Nen = 2 or Nen = 3.

### Discrete Variational Equations

With the interpolations defined in Equations 3.2 and 3.4, the matrix counterpart of the discrete form of variational equations becomes:

```
⋃_{e=1}^{nel} [δα^e · (r^e - f^e) = 0]
δr^e · h^e = 0; ∀e ∈ [1, nel]
```

where the element residual has two parts:

**Standard residual:**
```
r^e = ∫_{L^e} [N' ((φ'^e + η') × N)^T | 0 N']^T [n | m] ds
```

**Hierarchical residual:**
```
h^e = ∫_{L^e} [M']^T [n | m] ds
```

### Newton's Method and Linearization

The problem is reduced to a set of nonlinear algebraic equations solved via Newton's method. Two basic ingredients:
1. Linearization of the system of equations at given values of field variables
2. Proper update procedure

The consistent linearization must account for the fact that the space of finite rotations is manifold (not linear), requiring use of the covariant rather than directional derivative.

### Quaternion Representation of Rotations

To avoid numerical sensitivities in rotation handling, quaternion parameters are used. Four quaternion parameters {q₀, q} determine the orthogonal matrix via:

```
Λ = (2q₀² - 1)I + 2q₀[q × I] + 2q ⊗ q
```

The unit quaternion representing the orthogonal matrix corresponding to the skew-symmetric matrix of incremental rotation is:

```
{q₀^(i), q^(i)} = {cos(|Δw^(i)|/2), (Δw^(i)/|Δw^(i)|) sin(|Δw^(i)|/2)}
```

### Advantages of Quaternion Approach

In contrast with procedures used by Simo and Vu-Quoc or Crisfield:
- Never needs to extract quaternion parameters from a given orthogonal matrix
- Eliminates the step very prone to numerical sensitivities
- Avoids need for special procedures like Spurrier's extraction method

### Consistent Tangent Stiffness

The standard part of element stiffness matrix is composed of:

```
K^e = [K_m^e + K_g^e]
```

where K_m^e is material part and K_g^e is geometric part. Additional element-based parts F^e and H^e contribute to the full stiffness system.

### Hierarchical Parameter Elimination

The actual implementation uses sequential solution of the nonlinear system. The interpolation parameters α^e are eliminated at the element level, rendering the stiffness matrix for a beam element with nodal degrees of freedom only. This is accomplished using Wilson's static condensation algorithm.
