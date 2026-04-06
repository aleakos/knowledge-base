---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/03-long-cylinder-overview-sinusoidal-buckling"
section: "Structural Behavior of Long Horizontal Cylinders — Sinusoidal Buckling"
order: 3
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/buckling"
  - "engineering/sinusoidal-buckling"
  - "engineering/beam-theory"
  - "engineering/oil-drilling"
summary: "Definition of 'long' cylinder regime and detailed analysis of the first buckling mode: constrained Euler sinusoidal buckling, including displacement field, critical load, and wavelength."
formulas:
  - id: "F1"
    name: "Sinusoidal buckle displacement field"
    expr: "u3 = Δr sin β, u2 = Δr(1 − cos β), β = β₀ sin(nπ/L · x), p = 2L/n"
  - id: "F2"
    name: "Critical sinusoidal buckling load (length-dependent)"
    expr: "Pˢ_cr = n²π²EI/L² + L²w/(n²π²Δr)"
  - id: "F3"
    name: "Critical sinusoidal buckling load (length-independent, long cylinder)"
    expr: "Pˢ_cr = 2(EIw/Δr)^(1/2)"
  - id: "F4"
    name: "Number of half-wavelengths at minimum buckling load"
    expr: "n = (L/π)(w/(EIΔr))^(1/4)"
  - id: "F5"
    name: "Normal force per unit length — sinusoidal buckle"
    expr: "Wₙ = [16π⁴EIΔrβ₀²/p⁴][−β₀² cos⁴(nπx/L) + 3 sin²(nπx/L) − 4 cos²(nπx/L)] + [4π²Δrβ₀²F/p²]cos²(nπx/L) + w cos β"
---

# Structural Behavior of "Long" Horizontal Cylinders — Sinusoidal Buckling

## 2. Structural Behavior of "Long" Horizontal Cylinders

A **"long" cylinder** is a cylinder sufficiently long such that the majority of the inner cylinder lies on the bottom of the constraining outer cylinder. Enough of the inner cylinder is in contact with the constraining cylinder that the boundary conditions at the cylinder ends do not affect the buckling behavior. "Long" is quantified in Section 2 and Appendix B.

An unconstrained cylinder subjected to torsion and axial load undergoes classical Euler buckling. The classical Euler buckling load is significantly **lower** than the minimum buckling load for the constrained cylinder case.

### Long Cylinder Buckling Progression (Table 1)

| Mode | Load Parameter | Description |
|------|---------------|-------------|
| 1. Bends under own weight | δ ∝ wL⁴/EI | Cylinder sags onto bottom of outer cylinder |
| 2. Constrained Euler sinusoid (n = 2) | Pˢ_cr = 2√(EIw/Δr) | Cylinder snakes along bottom wall |
| 3. Constrained Euler helical (m = 1) | Pʰ_cr = 2√2 · √(EIw/Δr) | Cylinder spirals around inner wall of outer cylinder |

## 2.1. Constrained Euler Sinusoidal Buckling

The first buckling mode for the long cylinder is **constrained Euler sinusoidal buckling** (Paslay and Bogy, 1964). In this mode the cylinder snakes along the bottom surface of the outer cylinder. The inner cylinder remains in contact with the constraining cylinder along its entire length. The solution is a small-amplitude, small-angle approximation — useful for predicting the first buckle but not the subsequent behavior.

### Displacement Field

```
u₃ = Δr sin β
u₂ = Δr(1 − cos β)
β  = β₀ sin(nπ/L · x)
p  = 2L/n
```

Where:
- `u₂`, `u₃` are centerline displacements in the y (gravity) and z directions respectively
- `β` is the angle from vertical of the buckled cylinder
- `β₀` is the amplitude angle
- `p` is the wavelength of the sinusoidal buckle
- `n` is the number of half-wavelengths

### Critical Buckling Load (Length-Dependent)

```
Pˢ_cr = n²π²EI/L² + L²w/(n²π²Δr)
```

- First term: classical Euler buckling load
- Second term: proportional to weight per unit length `w`, analogous to a beam on an elastic foundation with equivalent spring constant `w/Δr`

The elastic foundation equivalence arises because the vertical displacement `u₂` is proportional to `β²` for small displacements, making the gravitational potential energy proportional to `β²` — analogous to spring potential energy proportional to displacement squared.

### Length-Independent Critical Load (Long Cylinder Limit)

As cylinder length increases the minima of Eq. (F2) become shallower, yielding a buckling load nearly independent of length:

```
Pˢ_cr = 2(EIw/Δr)^(1/2)
```

### Optimal Half-Wavelength Count

```
n = (L/π)(w/(EIΔr))^(1/4)
```

For the nominal steel parameters: **n = 157**. Compare with classical unconstrained Euler buckling where the first buckle is always a half sinusoid (n = 1). The outer cylinder constraint greatly increases the buckling load above the classical Euler result.

### Normal Force per Unit Length (Sinusoidal Buckle)

```
Wₙ = (16π⁴EIΔrβ₀²/p⁴)[−β₀² cos⁴(nπx/L) + 3 sin²(nπx/L) − 4 cos²(nπx/L)]
     + (4π²Δrβ₀²F/p²)cos²(nπx/L) + w cos β
```

### Effect of Torsion

Torsion enters the equilibrium equations through the dimensionless parameter:

```
√2 · T / √(F·EI)
```

For the nominal drilling parameters this parameter equals **0.06**, so torsion has a negligible effect on the sinusoidal buckling load.

### Experimental Evidence

- **Wu and Juvkam-Wold (1993)** confirm the sinusoidal buckling mode, buckling load, and wavelength predicted by the analytical expressions.
- **Miska et al. (1996)** report a stable sinusoidal buckle at loads above the length-independent critical load.
- **Chen et al. (1990)** report sinusoidal buckling initiation loads nearly double those calculated from the analytical expression.

### Quantification of "Long" Cylinder

Using the wavelength formula, a cylinder is "long" if it contains at least 10 half-wavelengths of buckled sinusoid in the region lying along the bottom of the outer cylinder:

```
L > 37.2(EIΔr/w)^(1/4)
```

For the nominal steel parameters: **L > 151 m**, which is much less than typical drilling lengths of several kilometers.
