---
parent_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-"
chunk_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-/03-mitc-finite-element-formulation"
section: "MITC Finite Element Formulation and Shear Locking"
order: 3
tags:
  - "engineering/finite-element"
  - "engineering/mixed-interpolation"
  - "engineering/locking-phenomena"
summary: "Development of locking-free 2-node MITC beam element based on CUF with proper shear strain treatment"
formulas:
  - id: "F9"
    name: "Strain-displacement decomposition"
    expr: "ϵB = DBu, ϵS = DSu, where DB and DS contain spatial derivative operators"
  - id: "F10"
    name: "FEM displacement interpolation"
    expr: "uτ(y) = Nᵢ(y)qτᵢ, with shape functions N₁(r) = (1-r)/2, N₂(r) = (1+r)/2"
  - id: "F11"
    name: "Standard shear strain computation"
    expr: "ϵS = Fτ (DSy Nᵢ I) qτᵢ + (DSΩ Fτ I) Nᵢ qτᵢ"
  - id: "F12"
    name: "MITC assumed shear strains"
    expr: "ϵS = Nm ϵSm, with constant interpolation: ϵS = ϵST at tying point T"
  - id: "F13"
    name: "Fundamental nucleus of stiffness matrix"
    expr: "Kτsᵢⱼ = δLint / δqsⱼ with 9 components Kτsᵢⱼ(rc) for each row r and column c"
  - id: "F14"
    name: "Virtual displacement work"
    expr: "δLint = ∫V [δϵB·σB + δϵS·σS] dV = δqτᵢᵀ Kτsᵢⱼ qsⱼ"
---

## MITC Finite Element Formulation

### Problem: Shear Locking

In standard FEM for beam elements, shear locking is a parasitic stiffening phenomenon that severely degrades solution accuracy, especially for thin beams where shear effects should be negligible.

**Cause:** When using linear Lagrange shape functions for both bending and shear strains, the discrete shear strain becomes **overly constrained**, preventing the element from developing the correct kinematics.

**Effect:** Leads to artificially high stiffness and underestimated displacements.

### Solution: Mixed Interpolation of Tensorial Components (MITC)

MITC is a selective reduced integration technique that treats shear strains independently from displacements.

#### Standard FEM Approach

Strain-displacement relations decompose into bending and shear components:

```
ϵB = {ϵyy, ϵxx, ϵzz, ϵxz}ᵀ
ϵS = {ϵyz, ϵxy}ᵀ
```

Both are computed from displacements via:
```
ϵB = DBu,  ϵS = DSu
```

where DB and DS contain spatial derivative operators.

Using CUF and FEM interpolation:
```
uτ(y) = Nᵢ(y)qτᵢ
```

yields:
```
ϵB = Fτ (DBy Nᵢ I) qτᵢ + (DBΩ Fτ I) Nᵢ qτᵢ
ϵS = Fτ (DSy Nᵢ I) qτᵢ + (DSΩ Fτ I) Nᵢ qτᵢ
```

#### MITC Treatment

In MITC, shear strains are **interpolated a-priori** rather than computed from displacement derivatives:

```
ϵS = Nm ϵSm
```

where:
- **Nm** are assumed interpolation functions
- **ϵSm** are shear strains evaluated at tying points
- Tying points satisfy: Nnₘ = δnₘ (Kronecker delta)

For the **2-node MITC2 element**, a single tying point T is used with constant shear strain:

```
ϵS = ϵST = Fτ (DSy Nᵢ I)|T qτᵢ + (DSΩ Fτ I)|NᵢT qτᵢ
```

where |T denotes evaluation at tying point T (at natural coordinate r = 0, the element midpoint).

### Constitutive Equations in MITC Framework

Stress is computed using constitutive relations:

```
σB = C̃BB ϵB + C̃BS ϵS
σS = C̃SB ϵB + C̃SS ϵS
```

For orthotropic materials:

```
C̃BB = [C̃33  C̃23  C̃13  0  ]     C̃BS = [0  C̃36]     C̃SS = [C̃55  0  ]
       [C̃23  C̃22  C̃12  0  ]            [0  C̃26]            [0  C̃66]
       [C̃13  C̃12  C̃11  0  ]            [0  C̃16]
       [0     0     0   C̃44]            [C̃45  0 ]
```

### Fundamental Nucleus and Stiffness Matrix

The internal virtual work is:

```
δLint = δqτᵢᵀ Kτsᵢⱼ qsⱼ
```

where **Kτsᵢⱼ** is the **fundamental nucleus of the stiffness matrix** — a 3×3 block with nine components Kτsᵢⱼ(rc) indexed by row r and column c (r,c = 1,2,3).

Each component contains:
- CUF expansion terms (Fτ derivatives, shape function derivatives Nᵢ,y, etc.)
- MITC treatment (evaluations at tying point T)
- Material coefficients
- Cross-sectional and axial integrations

### Assembly and Solution

The fundamental nucleus is assembled using nested loops over:
- Node indices i,j = 1,2
- Expansion indices τ,s = 1,...,M

This produces the **elemental stiffness matrix** for any beam theory and expansion order. Standard FEM assembly then yields the global stiffness system:

```
K u = f
```

## Advantages of MITC in CUF Framework

1. **Locking-free:** Shear locking is eliminated across all expansion orders
2. **Exact shear interpolation:** For the problems considered, shear strains are interpolated exactly
3. **Unified implementation:** Same MITC technique applies to classical and higher-order models
4. **Efficient:** Selective integration reduces computational cost without sacrificing accuracy
5. **Consistent:** Fundamental nuclei formulation ensures coherence across theory orders
