---
parent_id: "ahmed-nodate-eulerbernoulli-and-timoshenko-beam-theor"
chunk_id: "ahmed-nodate-eulerbernoulli-and-timoshenko-beam-theor/02-euler-bernoulli-fundamentals"
section: "Euler-Bernoulli Beam Theory"
order: 2
tags:
  - "engineering/euler-bernoulli-theory"
  - "engineering/curvature"
  - "engineering/governing-equations"
summary: "Fundamental relationships and governing equations for Euler-Bernoulli beam theory"
formulas:
  - id: "F1"
    name: "Curvature definition"
    expr: "κ = |dθ/ds| = dθ/dx = d²w/dx²"
  - id: "F2"
    name: "Axial strain"
    expr: "ε_xx = -z(d²w/dx²)"
  - id: "F3"
    name: "Normal stress"
    expr: "σ_xx = -zE(d²w/dx²)"
  - id: "F4"
    name: "Bending moment"
    expr: "M_xx = -EI(d²w/dx²)"
  - id: "F5"
    name: "Moment-shear relation"
    expr: "dM_x/dx = V;  dV/dx = -q(x)"
  - id: "F6"
    name: "Governing differential equation"
    expr: "EI(d⁴w/dx⁴) - q(x) = 0;  0 ≤ x ≤ L"
---

# Euler-Bernoulli Beam Theory

## Fundamental Assumptions

The Euler-Bernoulli Beam Theory (EBBT) is based on the Euler-Bernoulli-Navier hypothesis, which states that:
- Plane cross-sections perpendicular to the neutral axis remain perpendicular to the neutral axis after bending
- No shear deformation occurs

## Kinematic Relations

For a beam deflecting in the xy-plane under the stated assumptions:

```
Axial displacement:     u_x(x,z) = -z(dw/dx)
Transverse displacement: w(x) at neutral axis
```

The curvature of the deflection curve is:

```
κ = |dθ/ds| = dθ/dx = d²w/dx²
```

## Stress-Strain Relations

### Normal Strain
```
ε_xx = du_x/dx = -z(d²w/dx²)
```

### Normal Stress
```
σ_xx = Eε_xx = -zE(d²w/dx²)
```

### Bending Moment
```
M_xx = ∬σ_xx(x_i) z dA_yz = -EI(d²w/dx²)
```

where I is the second moment of area about the neutral axis.

## Equilibrium Equations

The fundamental equilibrium relationships are:

```
dV/dx = -q(x)           (vertical force equilibrium)
dM_x/dx = V              (moment equilibrium)
```

Combining these:

```
d²M_x/dx² = -q(x)
```

## Governing Differential Equation

Substituting the moment-curvature relationship yields the fundamental governing equation for EBBT:

```
EI(d⁴w/dx⁴) - q(x) = 0;  0 ≤ x ≤ L
```

This fourth-order linear differential equation requires four boundary conditions for complete solution.

## Validity and Applicability

EBBT is most accurate for:
- Long, slender beams with small depth-to-length ratios
- Cases where shear deformation is negligible (typically L/h > 10)
- Moderate deflections with linear behavior
