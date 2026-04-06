---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/03-classical-stress-analysis"
section: "Classical Stress Analysis of Filament-Wound Structures"
order: 3
tags:
  - "engineering/composite-materials"
  - "engineering/structural-analysis"
  - "engineering/laminate-theory"
summary: "Orthotropic material modelling, classical lamination theory (CLT), and classical stress analysis approaches for filament-wound spheres and cylinders"
formulas:
  - id: "F1"
    name: "Hooke's law for plane-stress orthotropic material (on-axis)"
    expr: "{epsilon} = [S]{sigma}; S11=1/E1, S12=-v12/E1, S22=1/E2, S66=1/G12"
  - id: "F2"
    name: "On-axis stiffness matrix components"
    expr: "Q11=E1/(1-v12*v21), Q12=v12*E2/(1-v12*v21), Q22=E2/(1-v12*v21), Q66=G12"
  - id: "F3"
    name: "Classical lamination theory force-moment relation"
    expr: "{N,M} = [[A,B],[B,D]] {epsilon^0, kappa}"
---

## Classical Stress Analysis of Filament-Wound Structures

### Orthotropic Material Model

Composite materials differ from isotropic metals: an isotropic material requires only two elastic constants (E, nu), but:
- A fully anisotropic material requires 21 independent constants
- An **orthotropic** material (symmetrical about three perpendicular planes) requires **9 independent constants**
- **Transverse isotropy** (uniform properties in the plane normal to the fibre direction) requires only 5 constants

For **thin shell applications** (plane stress), there are 4 independent elastic constants. Hooke's law in on-axis form:

```
| epsilon_1 |   | S11  S12   0  | | sigma_1 |
| epsilon_2 | = | S12  S22   0  | | sigma_2 |
| gamma_12  |   |  0    0   S66 | | tau_12  |
```

where S11 = 1/E1, S12 = -v12/E1, S22 = 1/E2, S66 = 1/G12.

The inverse relation uses the stiffness matrix [Q] = [S]^-1:
```
Q11 = E1/(1 - v12*v21),  Q12 = v12*E2/(1 - v12*v21)
Q22 = E2/(1 - v12*v21),  Q66 = G12
```

### Off-Axis Transformation

When the material axis is rotated by angle phi relative to the loading axes, the off-axis compliance and stiffness matrices are obtained by fourth-rank tensor transformation:

```
[S_bar] = [T]^T [S] [T]
[Q_bar] = [T]^{-1} [Q] [T]^{-T}
```

This is called **general orthotropy** (as opposed to special orthotropy when loading and material axes coincide).

### Classical Lamination Theory (CLT)

CLT relates the mid-surface strains {epsilon^0} and curvatures {kappa} of a laminated plate to applied forces {N} and moments {M} per unit width:

```
| N |   | [A]  [B] | | epsilon^0 |
| M | = | [B]  [D] | |  kappa    |
```

The sub-matrices are:
- **[A]**: extensional stiffness (integral of Q_bar over thickness)
- **[B]**: bending-extension coupling (integral of Q_bar * z over thickness)
- **[D]**: bending stiffness (integral of Q_bar * z^2 over thickness)

For **regular antisymmetric angle-ply laminates** (the structure produced by helical filament winding): A16 = A26 = B11 = B12 = B22 = B66 = D16 = D26 = 0. Coupling between tension and twisting exists (B16, B26 non-zero) but vanishes as the number of layers increases.

### Classical Analysis of Filament-Wound Vessels

**Spherical vessels**: Gerstle's analysis uses rule-of-mixtures for El and v12, averaged properties for quasi-isotropic laminate, combined with Love's equilibrium/compatibility equations through elastic and plastic stages of the liner.

**Cylindrical structures**: The optimal winding angle for a closed-ended cylinder under internal pressure is ±54.7° (from netting analysis). Orthotropic extensions of Hetenyi's cylindrical shell theory are used to account for edge-moment effects.

### Limitations

Classical methods are restricted to simple geometries and uniform lamination sequences. For complex filament-wound shapes (elbows, tee-pieces), finite element analysis is the only practical approach.
