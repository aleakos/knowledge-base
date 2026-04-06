---
parent_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-"
chunk_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-/02-carrera-unified-formulation"
section: "Carrera Unified Formulation (CUF) for Hierarchical Beam Models"
order: 2
tags:
  - "engineering/unified-formulation"
  - "engineering/higher-order-theories"
  - "engineering/finite-element"
summary: "General framework for automatic generation of beam theories of arbitrary order with Taylor expansions"
formulas:
  - id: "F4"
    name: "CUF general kinematic displacement field"
    expr: "u(x,y,z) = Fτ(x,z)uτ(y), τ = 1,2,...,M"
  - id: "F5"
    name: "Linear Taylor expansion (N=1) kinematic field"
    expr: "uₓ = uₓ₁ + xuₓ₂ + zuₓ₃, uᵧ = uᵧ₁ + xuᵧ₂ + zuᵧ₃, uᵤ = uᵤ₁ + xuᵤ₂ + zuᵤ₃"
  - id: "F6"
    name: "Linear TE cross-sectional functions"
    expr: "F₁ₓ = F₁ᵧ = F₁ᵤ = 1, F₂ₓ = F₂ᵧ = F₂ᵤ = x, F₃ₓ = F₃ᵧ = F₃ᵤ = z"
  - id: "F7"
    name: "6-DOF model cross-sectional functions"
    expr: "F₁ₓ = F₁ᵧ = F₁ᵤ = 1, F₂ₓ = 0, F₂ᵧ = F₂ᵤ = x, F₃ₓ = F₃ᵧ, F₃ᵤ = 0"
  - id: "F8"
    name: "Third-order Taylor expansion (N=3)"
    expr: "u = u₁ + xu₂ + zu₃ + x²u₄ + xzu₅ + z²u₆ + x³u₇ + x²zu₈ + xz²u₉ + z³u₁₀ (for each component)"
---

## Carrera Unified Formulation (CUF)

CUF is a hierarchical framework enabling automatic generation of beam theories of arbitrary expansion order. Classical theories emerge as special cases, and refined models are systematically derived by increasing the expansion order.

### General CUF Kinematic Field

The displacement field is expressed in compact form:

```
u(x,y,z) = Fτ(x,z)uτ(y),  τ = 1,2,...,M
```

where:
- **u** = {uₓ, uᵧ, uᵤ}ᵀ is the displacement vector
- **Fτ** are generic cross-sectional functions (independent of beam axis coordinate y)
- **uτ** are generalized displacements on the beam axis
- **M** is the number of expansion terms
- Summation is implied over repeated index τ

### Taylor Expansion (TE) Models

The most practical CUF implementation uses Taylor polynomial expansions as cross-sectional functions. For two-dimensional polynomials xⁱzʲ:

**Linear (N=1) TE Model:**

```
uₓ = uₓ₁ + xuₓ₂ + zuₓ₃
uᵧ = uᵧ₁ + xuᵧ₂ + zuᵧ₃
uᵤ = uᵤ₁ + xuᵤ₂ + zuᵤ₃
```

with cross-sectional functions:
```
F₁ₓ = F₁ᵧ = F₁ᵤ = 1
F₂ₓ = F₂ᵧ = F₂ᵤ = x
F₃ₓ = F₃ᵧ = F₃ᵤ = z
```

This N=1 TE model encompasses EBBM, TBM, and classical first-order theories as special cases.

### Classical Models as CUF Special Cases

**6-DOF Model within CUF:**

The 6-DOF formulation uses selective functions:

```
F₁ₓ = F₁ᵧ = F₁ᵤ = 1
F₂ₓ = 0,  F₂ᵧ = F₂ᵤ = x
F₃ₓ = F₃ᵧ,  F₃ᵤ = 0
```

This gives exactly the 6-DOF kinematics with torsion and first-order shear.

### Higher-Order TE Models

**Third-Order (N=3) TE Model:**

```
uₓ = uₓ₁ + xuₓ₂ + zuₓ₃ + x²uₓ₄ + xzuₓ₅ + z²uₓ₆ + x³uₓ₇ + x²zuₓ₈ + xz²uₓ₉ + z³uₓ₁₀
uᵧ = uᵧ₁ + xuᵧ₂ + zuᵧ₃ + x²uᵧ₄ + xzuᵧ₅ + z²uᵧ₆ + x³uᵧ₇ + x²zuᵧ₈ + xz²uᵧ₉ + z³uᵧ₁₀
uᵤ = uᵤ₁ + xuᵤ₂ + zuᵤ₃ + x²uᵤ₄ + xzuᵤ₅ + z²uᵤ₆ + x³uᵤ₇ + x²zuᵤ₈ + xz²uᵤ₉ + z³uᵤ₁₀
```

Higher-order models automatically capture:
- 3D strain effects and cross-sectional deformations
- Warping phenomena (especially important for torsion and thin-walled sections)
- Bending/shear/torsion coupling effects
- Local cross-sectional variations in stress and strain

### Fundamental Nuclei and FEM Implementation

CUF formulations are implemented via "fundamental nuclei" — invariant building blocks that depend on:
- Material properties
- Expansion order (through Fτ functions)
- Integration domains

Once fundamental nuclei are derived, the FEM stiffness matrix and load vector are assembled by:

1. Selecting the expansion order N (number of terms M)
2. Choosing appropriate cross-sectional functions Fτ
3. Nesting fundamental nuclei in loop cycles

This approach allows **identical FEM code** to generate classical or arbitrary-order models by simply changing a single input parameter (N).

## Key CUF Advantages

1. **Hierarchical capability:** Seamlessly move from classical (N=1) to highly refined (N=14+) theories
2. **Unified framework:** Same formulation, same code for all expansion orders
3. **Automatic generation:** No manual development of new theory equations
4. **Problem-independent:** Not tied to specific applications or geometries
5. **Systematic accuracy assessment:** Compare theories on identical FEM basis to isolate effects of kinematic enrichment
