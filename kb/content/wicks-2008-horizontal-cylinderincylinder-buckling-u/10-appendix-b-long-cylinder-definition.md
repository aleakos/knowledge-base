---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/10-appendix-b-long-cylinder-definition"
section: "Appendix B — Definition of Long Cylinder"
order: 10
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/beam-theory"
  - "engineering/buckling"
  - "engineering/drill-pipe"
summary: "Beam-theory derivation of the end-contact length L₀ and the minimum cylinder length L required for 'long cylinder' behavior, with the threshold L > 37.2(ΔrEI/w)^(1/4)."
formulas:
  - id: "FB1"
    name: "Total cylinder length decomposition"
    expr: "L = L' + 2L₀"
  - id: "FB2"
    name: "End deflection of cantilevered beam segment"
    expr: "Δr = wL₀⁴/(72EI)"
  - id: "FB3"
    name: "Length of end segment not in contact with outer cylinder"
    expr: "L₀ = (72ΔrEI/w)^(1/4) ≈ 2.9(ΔrEI/w)^(1/4)"
  - id: "FB4"
    name: "Sinusoidal buckle half-wavelength per unit length"
    expr: "L/n = π(ΔrEI/w)^(1/4)"
  - id: "FB5"
    name: "Minimum length of in-contact region for long cylinder behavior"
    expr: "L' > 10π(ΔrEI/w)^(1/4) ≈ 31.4(ΔrEI/w)^(1/4)"
  - id: "FB6"
    name: "Long cylinder criterion (total length)"
    expr: "L > 37.2(ΔrEI/w)^(1/4)"
---

# Appendix B — Definition of Long Cylinder

## B.1. Definition of Long Cylinder

Consider a cylinder of total length `L`, simply supported at its ends, constrained inside an outer cylinder. The cylinder bends under its own weight. As a result:
- A central length `L'` of the cylinder is in contact with the bottom surface of the constraining cylinder
- A length `L₀` at each end is **not** in contact with the outer cylinder

```
L = L' + 2L₀
```

## B.2. Calculation of L₀

The end segment of length `L₀` is modeled as a **cantilevered beam** (Fig. A2 in paper):
- Right end: corresponds to the free end of the cylinder (end support); subject to vertical force `F` and applied moment `M` that combine to deflect the beam vertically by `Δr` with zero slope
- Left end: corresponds to the point where the cylinder first contacts the bottom of the outer cylinder; zero slope and zero moment assumed (zero curvature at first contact point, consistent with cylinder lying along lower wall)

Solving using beam theory:

```
Δr = wL₀⁴/(72EI)
```

Solving for `L₀`:

```
L₀ = (72ΔrEI/w)^(1/4)  ≈  2.9(ΔrEI/w)^(1/4)
```

Note: The prefactor 2.9 is based on conservative boundary condition assumptions. The 1/4 power exponent means boundary conditions have small sensitivity; different boundary assumptions change the prefactor slightly but not the scaling.

## B.3. Calculation of L'

From the sinusoidal buckling wavelength expression (rearranged):

```
L/n = π(ΔrEI/w)^(1/4)
```

To ensure boundary conditions have a small effect, `L'` must contain many wavelengths. Requiring at least **5 full periods** (10 half-wavelengths) of the sinusoidal buckle:

```
n > 10   →   L' > 10π(ΔrEI/w)^(1/4)  ≈  31.4(ΔrEI/w)^(1/4)
```

## B.4. Long Cylinder Criterion

Combining `L = L' + 2L₀` with the requirements on `L'` and `L₀`:

```
L > 37.2(ΔrEI/w)^(1/4)
```

### Application

For the nominal **steel** cylinder parameters: **L > 151 m**

This is much less than the typical drilling lengths that reach several kilometers, confirming that virtually all practical horizontal drilling scenarios involve "long" cylinder behavior.
