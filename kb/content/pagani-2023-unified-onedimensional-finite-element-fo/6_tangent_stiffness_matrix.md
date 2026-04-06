---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/6_tangent_stiffness_matrix"
section: "Tangent Stiffness Matrix and Geometric Stiffness"
order: 6
tags:
  - "engineering/finite-element-method"
  - "engineering/tangent-stiffness"
  - "engineering/geometric-stiffness"
summary: "Complete derivation of tangent stiffness matrix components including material, initial stress, and geometric stiffness contributions"
formulas:
  - id: "F1"
    name: "Linearization of strain energy"
    expr: "\\delta^2 W_{int} = < \\delta(\\delta E^T S) >"
  - id: "F2"
    name: "Strain energy linearization components"
    expr: "\\delta^2 W_{int} = < \\delta E^T \\delta S > + < \\delta(\\delta E^T) S >"
  - id: "F3"
    name: "Material stiffness contribution"
    expr: "< \\delta E^T \\delta S > = \\delta U^T_{sj}(K^{ijss}_0 + K^{ijss}_{T1})\\delta U_{si}"
  - id: "F4"
    name: "Constitutive stiffness nucleus (linear-linear)"
    expr: "K^{ijss}_0 = < (B^{sj}_l)^T \\mathbb{C} B^{si}_l >"
  - id: "F5"
    name: "Linear-nonlinear coupling nucleus"
    expr: "K^{ijss}_{lnl} = < (B^{sj}_l)^T \\mathbb{C} B^{si}_{nl} >"
  - id: "F6"
    name: "Nonlinear-linear coupling nucleus"
    expr: "K^{ijss}_{nll} = 2 < (B^{sj}_{nl})^T \\mathbb{C} B^{si}_l >"
  - id: "F7"
    name: "Nonlinear-nonlinear coupling nucleus"
    expr: "K^{ijss}_{nlnl} = 2 < (B^{sj}_{nl})^T \\mathbb{C} B^{si}_{nl} >"
  - id: "F8"
    name: "First-order tangent stiffness"
    expr: "K^{ijss}_{T1} = 2K^{ijss}_{lnl} + K^{ijss}_{nll} + 2K^{ijss}_{nlnl}"
  - id: "F9"
    name: "Geometric stiffness contribution"
    expr: "< \\delta(\\delta E^T) S > = \\delta U^T_{sj} K^{ijss}_r \\delta U_{si}"
  - id: "F10"
    name: "Geometric stiffness nucleus"
    expr: "K^{ijss}_r = < \\text{diag}((B^\\dagger_{nl})^T S) >"
  - id: "F11"
    name: "Total tangent stiffness"
    expr: "K^{ijss}_T = K^{ijss}_0 + K^{ijss}_{T1} + K^{ijss}_r"
---

# Tangent Stiffness Matrix and Geometric Stiffness

## Linearization of Virtual Strain Energy

The analytical expression of the tangent stiffness matrix is obtained by linearizing the virtual variation of strain energy. Assuming that the loading is conservative so that the linearization of virtual external work is null (δ²W_ext = 0):

```
δ²W_int = < δ(δE^T S) >
        = < δE^T δS > + < δ(δE^T) S >
        = δU^T_sj(K^ijss_0 + K^ijss_T1 + K^ijss_r)δU_si
        = δU^T_sj K^ijss_T δU_si
```

The tangent stiffness matrix has three distinct contributions, each evaluated using fundamental nuclei that are independent of the theory approximation order.

## Material Stiffness (Constitutive) Contribution

The first term δE^T δS demands the linearized constitutive relation:

```
δS = C δE = C(B^si_l + 2B^si_nl)δU_si
```

where C is the material Jacobian tensor derived in Section 3.

Substituting this and the virtual strain expression:

```
< δE^T δS > = δU^T_sj < (B^sj_l + 2B^sj_nl)^T C(B^si_l + 2B^si_nl) > δU_si
            = δU^T_sj(K^ijss_0 + K^ijss_lnl + K^ijss_nll + K^ijss_nlnl) δU_si
            = δU^T_sj(K^ijss_0 + K^ijss_T1) δU_si
```

### Constitutive Stiffness Nuclei

The individual stiffness nuclei are:

```
K^ijss_0 = < (B^sj_l)^T C B^si_l >

K^ijss_lnl = < (B^sj_l)^T C B^si_nl >

K^ijss_nll = 2 < (B^sj_nl)^T C B^si_l >

K^ijss_nlnl = 2 < (B^sj_nl)^T C B^si_nl >
```

where:
- K^ijss_0 is the linear-linear (material) stiffness nucleus
- K^ijss_T1 = 2K^ijss_lnl + K^ijss_nll + 2K^ijss_nlnl represents the sum of first-order and second-order nonlinear matrices

As with the internal force vector, these are 3×3 matrices that can be expanded using the indices s, s = 1, ..., M and i, j = 1, ..., N_n to obtain elemental stiffness matrices for arbitrarily refined beam models.

## Geometric Stiffness (Initial Stress) Contribution

The evaluation of the second contribution in the linearization requires the linearization of the nonlinear geometric relations:

```
δ(δE^T) = [δU_X,si δU_X,sj; δU_Y,si δU_Y,sj; δU_Z,si δU_Z,sj]^T (B^‡_nl)^T
```

After manipulation, this yields:

```
< δ(δE^T) S > = δU^T_sj < diag((B^‡_nl)^T S) > δU_si
              = δU^T_sj K^ijss_r δU_si
```

### Geometric Stiffness Nucleus

The geometric stiffness nucleus is:

```
K^ijss_r = < diag((B^‡_nl)^T S) >
```

where diag((B^‡_nl)^T S) is the 3×3 diagonal matrix whose diagonal terms are the components of the vector (B^‡_nl)^T S.

The geometric stiffness arises from the nonlinear form of the strain-displacement equations and is often called the initial stress stiffness. It represents the additional stiffness (or loss of stiffness) due to the current stress state and geometry.

## Total Tangent Stiffness Matrix

The complete tangent stiffness matrix is the sum of all three contributions:

```
K^ijss_T = K^ijss_0 + K^ijss_T1 + K^ijss_r
```

This can be decomposed as:

```
K^ijss_T = K^ijss_0        (material stiffness)
         + K^ijss_T1        (initial stress from material nonlinearity)
         + K^ijss_r         (geometric stiffness)
```

## Implementation Advantages

The fundamental nuclei formulation provides several computational advantages:

1. **Unified Framework**: The same code structure handles all expansion orders and element types
2. **Automatic Differentiation**: Material Jacobian components are analytically derived
3. **Hierarchical Refinement**: Increasing theory order simply expands the nuclei using additional indices
4. **Numerical Efficiency**: Each nucleus is computed once and reused for all combinations of indices
5. **Code Clarity**: The fundamental nuclei clearly separate physical contributions to stiffness

## Convergence and Stability

The proper evaluation of all three stiffness contributions is essential for:
- **Quadratic Convergence**: Newton-Raphson method requires exact linearization
- **Stability in Large Deformations**: Geometric stiffness correctly captures instabilities
- **Bifurcation Analysis**: Complete tangent stiffness matrix enables detection of critical points
