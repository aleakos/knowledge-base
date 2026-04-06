---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/02-fsdt-problem-formulation"
section: "2.1. FSDT Problem Formulation"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/layered-beams"
  - "engineering/elasticity"
summary: "Geometric and material formulation of the symmetric three-layered Timoshenko beam problem, including layer property functions using Heaviside notation."
formulas:
  - id: "F1"
    name: "Layer material property functions (E, G, rho) using Heaviside step function"
    expr: "E(y) = sum_{i=1}^{2} E_i [ H(|y| - sum_{j=1}^{i-1} t_j) - H(|y| - sum_{j=1}^{i} t_j) ], similarly for G(y) and rho(y)"
---

# 2.1. FSDT Problem Formulation

## Geometry

An **infinite beam** of uniform rectangular cross-section with dimensions $b_0 \times d_0$ (width × height/thickness) is considered:

- Horizontal axis **x**: coincides with the longitudinal beam axis
- Vertical axis **y**: oriented in the direction of positive beam deflection
- Axis **z**: completes the right-handed coordinate system

The beam is composed of **three elastic layers** arranged symmetrically in both geometry and material. Layers are indexed from the centre of the cross-section. Layer thicknesses $t_i$ for $i = 1, 2$ satisfy:

$$d_0 = 2(t_1 + t_2)$$

Layer 1 (central) has half-thickness $t_1$; Layer 2 (face) has half-thickness $t_2$.

## Material Property Functions

Using the Heaviside step function $H(y)$, the material properties of the symmetric three-layered beam are described by:

```
E(y) = sum_{i=1}^{2} E_i [ H(|y| - sum_{j=1}^{i-1} t_j) - H(|y| - sum_{j=1}^{i} t_j) ]

G(y) = sum_{i=1}^{2} G_i [ H(|y| - sum_{j=1}^{i-1} t_j) - H(|y| - sum_{j=1}^{i} t_j) ]

rho(y) = sum_{i=1}^{2} rho_i [ H(|y| - sum_{j=1}^{i-1} t_j) - H(|y| - sum_{j=1}^{i} t_j) ]
```

where $y \in [-d_0/2, d_0/2]$ and $E_i$, $G_i$, $\rho_i$ for $i = 1, 2$ denote the Young modulus, shear modulus, and mass density of the $i$th layer, respectively.

## Loading and Boundary Conditions

- External dynamic load acts in the **y-direction** on the upper face of the beam ($y = -d_0/2$)
- Load described by function $q(x, t)$, amplitude independent of coordinate $z$
- $q(x, t)$ is assumed **even** in the $x$ variable
- Problem is solved as symmetric also with respect to the vertical $y$ axis
- Solution domain: $[0, +\infty) \times [0, t_\text{max}]$
- Boundary conditions: beam deflection and slope vanish as $x \to +\infty$
- **Initial conditions:** assumed to be zero

## Key Notation

| Symbol | Meaning |
|--------|---------|
| $b_0$ | beam width |
| $d_0$ | beam total height/thickness |
| $t_i$ | half-thickness of layer $i$ |
| $E_i, G_i, \rho_i$ | Young modulus, shear modulus, density of layer $i$ |
| $v(x,t)$ | beam deflection |
| $\alpha(x,t)$ | slope of the beam |
| $q(x,t)$ | transverse load function |
| $H(y)$ | Heaviside step function |
