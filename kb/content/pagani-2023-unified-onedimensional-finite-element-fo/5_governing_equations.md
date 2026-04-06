---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/5_governing_equations"
section: "Governing Equations and Finite Element Formulation"
order: 5
tags:
  - "engineering/finite-element-method"
  - "engineering/virtual-work"
  - "engineering/nonlinear-analysis"
summary: "Derivation of governing equations using virtual work principle, internal force vectors, and tangent stiffness matrices in unified form"
formulas:
  - id: "F1"
    name: "Green-Lagrange strain decomposition"
    expr: "E = E_l + E_{nl} = (b_l + b_{nl})U"
  - id: "F2"
    name: "Virtual work principle"
    expr: "\\delta W_{int} - \\delta W_{ext} = 0"
  - id: "F3"
    name: "Virtual strain energy"
    expr: "\\delta W_{int} = < \\delta E^T S >"
  - id: "F4"
    name: "Volume integral in reference config"
    expr: "< (\\cdot) > = \\int_V (\\cdot) dX"
  - id: "F5"
    name: "Nonlinear governing equation"
    expr: "\\delta U : F_{int} - F_{ext} = 0"
  - id: "F6"
    name: "Residual nodal forces"
    expr: "\\varphi_{res} \\equiv F_{int} - F_{ext} = 0"
  - id: "F7"
    name: "Linearization of residual"
    expr: "\\varphi_{res}(U + \\delta U, F_{ext} + \\delta F_{ext}) = \\varphi_{res}(U, F_{ext}) + \\frac{\\partial \\varphi_{res}}{\\partial U}\\delta U + \\frac{\\partial \\varphi_{res}}{\\partial F_{ext}}\\delta_\\lambda \\hat{F}_{ext}"
  - id: "F8"
    name: "Tangent stiffness matrix"
    expr: "K_T = \\frac{\\partial \\varphi_{res}}{\\partial U}"
  - id: "F9"
    name: "Load scaling parameter equation"
    expr: "K_T \\delta U = \\delta_\\lambda \\hat{F}_{ext} - \\varphi_{res}"
  - id: "F10"
    name: "Arc-length constraint"
    expr: "c(\\delta U, \\delta \\lambda) = 0"
---

# Governing Equations and Finite Element Formulation

## Green-Lagrange Strain Vector

According to Pagani and Carrera, the Green-Lagrange strain can be decomposed as:

```
E = E_l + E_nl = (b_l + b_nl)U
```

where:
- E_l is the linear strain component
- E_nl is the nonlinear strain component
- b_l and b_nl are linear and nonlinear differential operators

Substituting the CUF expansions, this becomes:

```
E = (B^si_l + B^si_nl)U_si
```

where B^si_l and B^si_nl are the linear and nonlinear strain-displacement matrices.

## Virtual Work Principle

The governing equations are derived from the principle of virtual work, which states that the sum of all virtual work done by internal and external forces is zero:

```
δW_int - δW_ext = 0
```

where W_int is the strain energy and W_ext is the work of external loadings.

### Virtual Strain Energy

Considering E and S in their vectorial form (Voigt notation), the virtual variation of internal strain energy is:

```
δW_int = < δE^T S >
```

where:

```
< (·) > = ∫_V (·) dX
```

is the volume integral in the reference configuration.

### Derivation of Internal Force Vector

The virtual variation of the strain vector from the strain-displacement relation is:

```
δE = (B^sj_l + 2B^sj_nl)δU_sj
```

Taking the transpose:

```
δE^T = δU^T_sj(B^sj_l + 2B^sj_nl)^T
```

Substituting into the virtual work equation:

```
δW_int = δU^T_sj < (B^sj_l + 2B^sj_nl)^T S > = δU^T_sj F^sj_int
```

where F^sj_int is the 3×1 fundamental nucleus (FN) of the nonlinear internal force vector:

```
F^sj_int = < (B^sj_l + 2B^sj_nl)^T S >
```

This fundamental nucleus is independent of the theory approximation order and the choice of finite element discretizing the beam axis. Once F_s and N_i are chosen, the FN can be expanded to give the internal force vector of arbitrarily high-order finite beam elements.

## Nonlinear Governing Equations

Substituting both force terms and assembling over the entire structure, the set of nonlinear algebraic equations can be written as:

```
δU : F_int - F_ext = 0
```

## Linearization for Newton-Raphson Solution

Equation (F_int - F_ext = 0) is the starting point for nonlinear finite element analysis and is typically solved using the Newton-Raphson incremental linearized scheme. The residual nodal forces are:

```
φ_res ≡ F_int - F_ext = 0
```

This is linearized by expanding φ_res in Taylor series about a known solution (U, F_ext):

```
φ_res(U + δU, F_ext + δF_ext) = φ_res(U, F_ext) + (∂φ_res/∂U)δU + (∂φ_res/∂F_ext)δ_λ F̂_ext = 0
```

where:
- ∂φ_res/∂U = K_T is the tangent stiffness matrix
- ∂φ_res/∂F_ext = -1

The load is assumed to vary directly with the reference loading vector F̂_ext with a rate of change equal to the load parameter λ, i.e., F_ext = λ F̂_ext.

## Incremental System with Load Control

Rearranging yields:

```
K_T δU = δ_λ F̂_ext - φ_res
```

Since the load-scaling parameter λ is taken as a variable, an additional governing equation is required—a constraint relationship c(δU, δ_λ) = 0. This gives the complete incremental system:

```
K_T δU = δ_λ F̂_ext - φ_res
c(δU, δ_λ) = 0
```

## Arc-Length Strategy

In this work, a path-following method is employed where the constraint equation is a function of both displacement and load parameter variations. Specifically, an arc-length strategy is used where the constraint relationship corresponds to a multi-dimensional sphere. To avoid doubling back on the original load-deflection path, the solution of the consistent-linearized constraint equation is employed to advance in the calculation.

This approach is particularly effective for:
- Problems with snap-through or snap-back behavior
- Large deformation analysis
- Capturing entire equilibrium paths with turning points
