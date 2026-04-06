---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/04-numerical-implementation"
section: "Numerical Implementation Details"
order: 4
tags:
  - "engineering/computational-procedures"
  - "engineering/numerical-integration"
  - "engineering/quaternions"
  - "engineering/rotation-updates"
summary: "Computational procedures for updating hierarchical displacements, finite rotations, and bending strains in Newton's iterative solution"
formulas:
  - id: "TABLE1"
    name: "Element hierarchical displacement update procedure"
    expr: "(1) Retrieve a^(i) and α^(i)\n(2) Keep a^(i) fixed, compute α^(i+1) from static condensation\n(3) Compute element tangent K_k^e for next iterate"
  - id: "TABLE2"
    name: "Update of finite rotations (at each GNP)"
    expr: "(1) Retrieve {q₀^(i), q^(i)}\n(2) Compute quaternion parameters from (3.19)\n(3) Update quaternion parameters using product rule\n(4) Compute A^(i+1) from {q₀^(i+1), q^(i+1)}\n(5) Store for next iteration"
  - id: "TABLE3"
    name: "Update of bending strains (at each GNP)"
    expr: "(1) Retrieve ω^(i)\n(2) Compute ω^(i) and dω/ds^(i)\n(3) Compute ω^(i+1) using exponential map formula\n(4) Store ω^(i+1) for next iteration"
  - id: "EQ4.1"
    name: "2-node beam element interpolation"
    expr: "N_I(ξ) = ½(1 + ξξ_I), I = 1,2; M(ξ) = 1 - ξ²"
  - id: "EQ4.2"
    name: "3-node beam element interpolation"
    expr: "N_I(ξ) = ∏_{K=1,K≠I}^3 (ξ - ξ_K)/(ξ_I - ξ_K); M(ξ) = ξ(1 - ξ²)"
---

## Numerical Implementation Details

This section describes the computational procedures for solving the nonlinear algebraic equations using Newton's method. The implementation involves special procedures for handling hierarchical displacement parameters, finite rotations using quaternions, and bending strain updates.

### Hierarchical Displacement Update

The hierarchical displacement interpolation parameters are handled through sequential solution of the nonlinear system. The process is summarized in Table 1:

**Step 1:** Retrieve current values of global displacement parameters at iteration **(i)**

```
a^(i) := {φ^(i), A^(i)}
and element parameters α^(i)
```

**Step 2:** Keeping a^(i) fixed, compute α^(i+1) from the element-level equations using static condensation (Wilson method)

```
α^(i+1) = α^(i) - [H^e]^(-1)|_{a^(i), α^(i)} · h^e|_{a^(i), α^(i)}
```

**Step 3:** Compute element tangent matrix for the next iterate

```
K_k^e ← K^e|_{a^(i), α^(i+1)} - F^e|_{a^(i), α^(i+1)} · [H^e]^(-1)|_{a^(i), α^(i+1)} · F^eT|_{a^(i), α^(i+1)}
```

### Finite Rotation Update Using Quaternions

A special updating procedure is required for finite rotations since rotation parameters cannot be directly interpolated. The procedure is performed at each Gauss-Newton Point (GNP) where the current value of finite rotation matrix is needed.

**Step 1:** Retrieve quaternion parameters: {q₀^(i), q^(i)}

**Step 2:** Compute quaternion parameters of incremental rotations from:

```
{q₀^(i), q^(i)} = {cos(|Δw^(i)|/2), (Δw^(i)/|Δw^(i)|) sin(|Δw^(i)|/2)}
```

**Step 3:** Update quaternion parameters using quaternion product rule:

```
{q₀^(i+1), q^(i+1)} = {(q₀^(i))q₀^(i) - q^(i) · q^(i), (q₀^(i))q^(i) + q₀^(i)q^(i) + q^(i) × q^(i)}
```

**Step 4:** Compute A^(i+1) from {q₀^(i+1), q^(i+1)} using:

```
Λ = (2q₀² - 1)I + 2q₀[q × I] + 2q ⊗ q
```

**Step 5:** Store {q₀^(i+1), q^(i+1)} for next iteration

### Key Advantage of Quaternion Approach

**Critical benefit:** In contrast with procedures by Simo and Vu-Quoc or Crisfield, one never needs to extract the quaternion parameters from a given orthogonal matrix of large rotations. This eliminates the step that is very prone to numerical sensitivities and would require special procedures like Spurrier's extraction method.

### Bending Strain Update

A special computational procedure updates the bending strain measures at each iteration. The updated values of bending strain measures can be computed as:

```
Ω^(i+1) = [ω^(i+1) × I] = d/ds A^(i+1) A^(i+1)T = 
[½(exp[Δw^(i)] exp[Δw^(i)]T + exp[Δw^(i)] [ω^(i) × I] exp[Δw^(i)]T]
```

This procedure is carried out in terms of the corresponding axial vectors ω.

**Step 1:** Retrieve ω^(i)

**Step 2:** Compute ω^(i) and dω/ds^(i)

**Step 3:** Compute ω^(i+1) using exponential map formula:

```
ω^(i+1) = T(Δw^(i)) · d(Δw^(i))/ds + exp[Δw^(i)] ω^(i)
```

**Step 4:** Store ω^(i+1) for next iteration

### Element Interpolation Functions

Two elements are most useful in analysis of general shell structures with stiffeners:

**2-node beam element:**

```
N_I(ξ) = ½(1 + ξξ_I), I = 1,2
M(ξ) = 1 - ξ²
```

**3-node element:**

```
N_I(ξ) = ∏_{K=1,K≠I}^3 (ξ - ξ_K)/(ξ_I - ξ_K)
M(ξ) = ξ(1 - ξ²)
```

### Alternative Rotation Vector Parameterization

If the rotation vector is used to parameterize the rotation (Remark 3.1), then updating procedures simplify considerably. From interpolation values, the rotation vector can be computed directly at each numerical integration point:

```
θ^(i+1)(ξ_{GNP}) = Σ_{I=1}^{Nen} N_I(ξ_{GNP}) θ_I^(i+1)
```

which yields the current value of orthogonal matrix A^(i+1) directly. For either operation, secondary storage manipulation becomes unnecessary, making this approach computationally more efficient.

### Consistent Tangent Operator

The consistent tangent operator ensures quadratic convergence rate for Newton's method. It is composed of:
- Material stiffness: accounts for constitutive relations
- Geometric stiffness: accounts for stress-dependent terms
- Additional hierarchical terms from eliminated internal parameters

The element stiffness is assembled globally and the resulting nonlinear algebraic system is solved iteratively until convergence criteria are satisfied.
