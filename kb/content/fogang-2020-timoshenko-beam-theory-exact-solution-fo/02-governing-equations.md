---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/02-governing-equations"
section: "Governing Equations and Material Law"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/equilibrium"
  - "engineering/material-law"
summary: "Static equilibrium equations, Timoshenko material relationships, and the combined moment-shear force-curvature material law."
formulas:
  - id: "F1"
    name: "Static Equilibrium - Shear Force"
    expr: "V(x) = dM(x)/dx"
  - id: "F2"
    name: "Static Equilibrium - Distributed Load"
    expr: "d²M(x)/dx² = -q(x)"
  - id: "F3"
    name: "Bending Moment - Rotation"
    expr: "M(x) = -EI × dφ(x)/dx"
  - id: "F4"
    name: "Shear Force - Deflection Strain"
    expr: "V(x) = κGA × (dw(x)/dx - φ(x))"
  - id: "F5"
    name: "Slope Strain Decomposition"
    expr: "dw(x)/dx = φ(x) + V(x)/(κGA)"
  - id: "F6"
    name: "Second Deflection Derivative"
    expr: "d²w(x)/dx² = dφ(x)/dx + d(V(x)/(κGA))/dx"
  - id: "F7"
    name: "Curvature-Moment Equation"
    expr: "d²w(x)/dx² = -M(x)/EI + d(V(x)/(κGA))/dx"
  - id: "F8"
    name: "Material Law - Combined Bending-Shear"
    expr: "d²w(x)/dx² + M(x)/EI - d(V(x)/(κGA))/dx = 0"
  - id: "F9"
    name: "Material Law - Constant Cross Section"
    expr: "d²w(x)/dx² + M(x)/EI - 1/(κGA) × d²M(x)/dx² = 0"
  - id: "F10"
    name: "Bending Shear Factor"
    expr: "α = EI/(l² × κGA)"
  - id: "F11"
    name: "Rotation - Material Law"
    expr: "φ(x) = dw(x)/dx - (1/(κGA)) × dM(x)/dx"
---

## Sign Conventions

The paper adopts standard conventions for beam analysis:

- **M(x)**: Bending moment in the section
- **V(x)**: Shear force
- **w(x)**: Deflection (positive downward)
- **q(x)**: Distributed load (positive downward)
- **φ(x)**: Rotation of cross section (positive clockwise)

## Static Equilibrium (First-order)

For an infinitesimal element, the equilibrium equations are:

```
V(x) = dM(x)/dx                    (Eq. 1)

d²M(x)/dx² = -q(x)                 (Eq. 2)
```

These equations apply in both first-order and second-order analysis.

## Timoshenko Material Relationships

The Timoshenko beam theory relates moments and shear forces to deflections and rotations:

```
M(x) = -EI × dφ(x)/dx              (Eq. 3)

V(x) = κGA × (dw(x)/dx - φ(x))    (Eq. 4)
```

Where:
- **E**: Elastic modulus
- **I**: Second moment of area
- **κ**: Shear correction factor
- **G**: Shear modulus
- **A**: Cross-sectional area

## Development of Material Law

Equation (4) can be reformulated as:

```
dw(x)/dx = φ(x) + V(x)/(κGA)       (Eq. 5)
```

Differentiating both sides with respect to x:

```
d²w(x)/dx² = dφ(x)/dx + d(V(x)/(κGA))/dx    (Eq. 6)
```

Substituting Equation (3) into Equation (6):

```
d²w(x)/dx² = -M(x)/EI + d(V(x)/(κGA))/dx    (Eq. 7)
```

Rearranging yields the **combined material law for bending and shear**:

```
d²w(x)/dx² + M(x)/EI - d(V(x)/(κGA))/dx = 0    (Eq. 8)
```

### For Constant Cross Section

Substituting Equation (1) into Equation (8):

```
d²w(x)/dx² + M(x)/EI - (1/(κGA)) × d²M(x)/dx² = 0    (Eq. 9)
```

### For Non-uniform Cross Section

For continuously varying cross sections:

```
d²w(x)/dx² + M(x)/EI(x) - (1/(κGA(x))) × d²M(x)/dx² - (1/(κGA(x))²) × d(κGA(x))/dx × dM(x)/dx = 0    (Eq. 10)
```

### With Non-uniform Heating

Under thermal loading:

```
d²w(x)/dx² + M(x)/EI - (1/(κGA)) × d²M(x)/dx² + αT × ΔT/d = 0    (Eq. 11)
```

Where **αT** is the thermal expansion coefficient and **d** is the depth.

## Rotation Relationship

Combining Equations (1) and (5):

```
φ(x) = dw(x)/dx - (1/(κGA)) × dM(x)/dx    (Eq. 12)
```

## Bending Shear Factor

A key parameter in the analysis is the **bending shear factor**:

```
α = EI/(l² × κGA)    (Eq. 13)
```

This dimensionless factor quantifies the relative importance of shear deformation:
- α = 0: Euler-Bernoulli behavior (no shear deformation)
- α > 0: Timoshenko behavior (with shear deformation effects)

## Comparison with Euler-Bernoulli

The Euler-Bernoulli beam theory assumes φ(x) = dw(x)/dx (no shear deformation). The key differences are:

| Aspect | Timoshenko | Euler-Bernoulli |
|--------|-----------|-----------------|
| Geometry | φ(x) = dw/dx - V/(κGA) | φ(x) = dw/dx |
| Material Law | Includes shear compliance term | M(x) = -EI × d²w/dx² |
| Applicability | Deep beams, composites, high frequencies | Slender beams |

The governing equations are Equation (2) (static equilibrium) and Equation (9) or (10) (material law).
