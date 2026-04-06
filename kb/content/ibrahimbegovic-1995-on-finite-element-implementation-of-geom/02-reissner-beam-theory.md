---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/02-reissner-beam-theory"
section: "Three-dimensional Reissner's Beam Theory"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/reissner-theory"
  - "engineering/finite-strain"
  - "engineering/virtual-work"
summary: "Derivation of 3D Reissner beam theory using equilibrium equations and virtual work principle"
formulas:
  - id: "EQ2.1"
    name: "Equilibrium equations"
    expr: "n' + n̄ = 0; m' + φ' × n + m̄ = 0"
  - id: "EQ2.2"
    name: "Virtual work principle"
    expr: "∫_L {δε · n + δκ · m} ds = ∫_L {δφ · n̄ + δw · m̄} ds"
  - id: "EQ2.3"
    name: "Virtual strain measures"
    expr: "δε = δφ' - δw × φ₀'; δκ = δw'"
  - id: "EQ2.10"
    name: "Final virtual strain measures (curved beam)"
    expr: "δε = δφ' - δw × φ' - (δa₁ - δw × a₁); δκ = δω - δw × ω"
  - id: "EQ2.12"
    name: "Spatial strain measures"
    expr: "ε = φ' - a₁; κ = ω"
  - id: "EQ2.14"
    name: "Constitutive equations (component form)"
    expr: "nⁱ = Cⁱⱼ εⱼ, C_n = diag(EA, GA₂, GA₃); mⁱ = Cⁱⱼ κⱼ, C_m = diag(GJ, EI₂, EI₃)"
---

## Three-dimensional Reissner's Beam Theory

The three-dimensional beam theory discussed is based on Reissner's foundational work. The key idea is to use the equilibrium equations set in terms of stress resultants to deduce the energy-conjugate strain measure through application of the virtual work principle.

### Equilibrium Equations

Considering stress resultants **n** and couples **m** parameterized over a curved beam reference configuration with arc length parameter **s**:

```
n' + n̄ = 0
m' + φ' × n + m̄ = 0
```

where **n̄** and **m̄** are prescribed loads along the beam axis, and φ is a point mapping defining the beam axis in the deformed configuration. Prime (') denotes derivation with respect to arc length parameter.

### Virtual Work Principle

For homogeneous Dirichlet boundary conditions:

```
∫_L {δε · n + δκ · m} ds = ∫_L {δφ · n̄ + δw · m̄} ds
```

where **δφ** and **δw** are vectors of virtual displacements and rotations respectively, and **δε** and **δκ** are virtual strain measures energy-conjugate to stress resultants and couples.

### Virtual Strain Measures

By substituting equilibrium equations into the virtual work expression and integrating by parts, the explicit forms are:

```
δε = δφ' - δw × φ₀'
δκ = δw'
```

### Finite Rotations

The key difficulty in going from virtual to finite strain measures is describing finite rotations. The approach traces the current position of an orthogonal frame **aᵢ** initially constructed at a point of the beam.

For an initially curved beam, the position of the orthogonal frame in the current configuration is defined via product of two orthogonal matrices:

```
aᵢ = A gᵢ = A A₀ eᵢ = Ã eᵢ
```

where **A₀(s)** is the orthogonal matrix positioning the local basis **gᵢ** onto the beam reference configuration, and **A** is an unknown variable determining the deformed configuration.

### Admissible Variation of Rotation Matrix

If using the orthogonal matrix to describe finite rotations:

```
δA = d/dt[A_t]|_{t=0} = d/dt[exp(t δW) A]|_{t=0} = δW A
```

where **δW** is a skew-symmetric matrix of virtual rotations. The corresponding axial vector is:

```
δW b = δw × b; ∀b ∈ ℝ³
⟹ δW ≝ [δw × I]
```

### Final Virtual Strain Measures (Curved Beam)

For a curved beam, the final form of virtual strain measures is:

```
δε = δφ' - δw × φ' - (δa₁ - δw × a₁)
δκ = δω - δw × ω
```

Interestingly, these formally have the same form as for a beam with straight reference configuration.

### Spatial Strain Measures

Using the result for calculating admissible variations of the rotation matrix, the virtual strains can be rewritten as:

```
δε = A δ[A^T(φ' - a₁)] = ℒ(φ' - a₁)
δκ = A δ[A^T ω] = ℒ(ω)
```

where the notation represents a particular form of the Lie derivative. From the virtual work principle, it follows that:

```
ε = φ' - a₁
κ = ω
```

are the spatial strain measures, consistent with the virtual strain measures. These are objective strain measures.

### Constitutive Equations

If the component form of spatial strain measures and their energy conjugate stress resultants and couples are presented as:

```
ε = εᵢ aᵢ  ⟹  εᵢ = ε · aᵢ
κ = κᵢ aᵢ  ⟹  κᵢ = κ · aᵢ
n = nⁱ aᵢ  ⟹  nⁱ = n · aᵢ
m = mⁱ aᵢ  ⟹  mⁱ = m · aᵢ
```

The constitutive equations are:

```
nⁱ = Cⁱⱼ εⱼ, C_n = diag(EA, GA₂, GA₃)
mⁱ = Cⁱⱼ κⱼ, C_m = diag(GJ, EI₂, EI₃)
```

where E and G are Young's and shear moduli respectively, while A, A₂, A₃ and J, I₂, I₃ are cross-section areas and moments of inertia.

### Potential Energy

The potential energy of the beam can be written as:

```
Π(φ, A) = ∫_L {½(φ' - a₁) · AC_n A^T(φ' - a₁) + ½ω · AC_m A^T ω} ds - Π_ext
```

with corresponding variational equations representing explicit form of the virtual work equation.
