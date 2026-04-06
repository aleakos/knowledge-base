---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/05-double-walled-cnt-example"
section: "Example: Double-Walled CNT Analysis"
order: 5
tags:
  - "engineering/carbon-nanotubes"
  - "engineering/material-properties"
  - "engineering/numerical-results"
summary: "Material properties and geometric parameters for double-walled CNT used in STB model verification"
formulas:
  - id: "F10"
    name: "Shear correction factor for hollow annular section"
    expr: "K = [6(1+ν)(1+α)²]/[(7+6ν)(1+α)² + (20+12ν)α²]"
  - id: "F11"
    name: "Inner/outer diameter ratio"
    expr: "α = (2R₁ - t)/(2R₂ + t)"
---

## Double-Walled CNT Geometry

Consider a double-walled CNT with:
- Inner diameter: 2R₁ = 0.7 nm
- Outer diameter: d = 2R₂ = 1.4 nm
- Length to diameter ratios: L/d = 10, 30, 50, 100

where:
- R₁ = radius of inner tube centreline
- R₂ = radius of outer tube centreline

The geometry is illustrated with inner and outer tube centerlines, effective thickness t, and total length L.

## Material Properties

The double-walled CNT is modeled with homogeneous properties across both tubes:
- Young's modulus: E = 1 TPa
- Effective thickness of single-walled CNTs: t = 0.35 nm
- Shear modulus: G = 0.4 TPa
- Poisson's ratio: ν = 0.25
- Mass density: ρ = 2.3 g/cm³

## Cross-Sectional Properties

Since the double-walled CNT is treated as a single beam with hollow annular cross-section:

```
A = A₁ + A₂    (total cross-sectional area)
I = I₁ + I₂    (total moment of inertia)
```

where subscripts 1 and 2 denote inner and outer tubes, respectively.

## Shear Correction Factor

For a hollow annular cross-section, K is determined by:

```
K = [6(1+ν)(1+α)²]/[(7+6ν)(1+α)² + (20+12ν)α²]    (5)
```

where α = (2R₁ - t)/(2R₂ + t) is the ratio of innermost and outermost diameters.

Substituting the adopted values of R₁ = 0.35 nm, R₂ = 0.7 nm, and ν = 0.25:

```
K = 0.82
```

## Boundary Conditions Analyzed

1. **Clamped-Clamped (CC)**: Both ends fixed
2. **Clamped-Free (CF)**: One end fixed, other end free

## Frequency Parameter Results

Using the DQ method, the first ten natural frequency parameters are computed for both boundary conditions at various L/d ratios.

### Key Observations

For **stocky CNTs** (L/d = 10):
- Timoshenko beam model results are significantly lower than Euler beam model
- Difference increases dramatically with mode number
- Example: For CC double-walled CNT with L/d = 10, Euler beam overpredicts frequencies by 3.735% (mode 1), 19.56% (mode 5), and 33.81% (mode 10)

For **slender CNTs** (L/d ≥ 50):
- Effects of shear deformation and rotary inertia become negligible
- Timoshenko and Euler beam results converge
- Single beam models provide adequate accuracy for L/d ≥ 50
