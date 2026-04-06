---
parent_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo"
chunk_id: "fogang-2020-timoshenko-beam-theory-exact-solution-fo/03-first-order-analysis"
section: "First-order Analysis and Element Stiffness Matrix"
order: 3
tags:
  - "engineering/first-order-analysis"
  - "engineering/stiffness-matrix"
  - "engineering/finite-elements"
summary: "First-order analysis methodology for Timoshenko beams, element stiffness matrices for fixed and hinged end conditions, and solutions for beams on elastic foundations."
formulas:
  - id: "F12"
    name: "Bending Moment - Distributed Load"
    expr: "M(x) = -∫∫q(x)dxdx + C₁x + C₂"
  - id: "F13"
    name: "Deflection Solution"
    expr: "EI × w(x) = -∫∫[EI/(κGA) × q(x) + M(x)]dxdx + C₃x + C₄"
  - id: "F14"
    name: "First-order Stiffness Matrix - Fixed-Fixed"
    expr: "K_Tbl = EI × [12/(1+φ)l³, 6/(1+φ)l², -12/(1+φ)l³, 6/(1+φ)l²; ...]"
  - id: "F15"
    name: "Shear Stiffness Factor"
    expr: "φ = 12EI/(l² × κGA)"
  - id: "F16"
    name: "First-order Stiffness - Hinged"
    expr: "φ' = 3EI/(l² × κGA)"
  - id: "F17"
    name: "Winkler Foundation Equilibrium"
    expr: "d²M(x)/dx² - Kw × w(x) = -q(x)"
  - id: "F18"
    name: "Winkler Foundation Material Law"
    expr: "d⁴M(x)/(κGA)dx⁴ - Kw/κGA × d²M(x)/dx² + Kw/EI × M(x) = -d²q(x)/dx²"
---

## First-order Analysis of Timoshenko Beams

In first-order (linear) analysis, we neglect axial forces and their effects on bending.

### Beam Without Elastic Foundation

Starting with static equilibrium (Equation 2), the bending moment is expressed as:

```
M(x) = -∫∫q(x)dxdx + C₁x + C₂    (Eq. 14)
```

Substituting Equations (2) and (14) into the material law (Eq. 9):

```
EI × w(x) = -∫∫[EI/(κGA) × q(x) + M(x)]dxdx + C₃x + C₄    (Eq. 15)
```

The integration constants C₁, C₂, C₃, C₄ are determined using boundary conditions and continuity equations, combined with:
- Deflections w(x)
- Cross-section rotations φ(x) from Equation (12)
- Bending moments M(x) from Equation (1)
- Shear forces V(x) from Equation (1)

### Element Stiffness Matrix - Fixed-Fixed

For a two-node beam element with fixed ends, the stiffness relationship is:

```
S = K_Tbl × V    (Eq. 18)
```

Where:
- **S**: Force/moment vector [V_i; M_i; V_k; M_k]
- **V**: Displacement/rotation vector [w_i; φ_i; w_k; φ_k]
- **K_Tbl**: Element stiffness matrix in local coordinates

The first-order stiffness matrix is:

```
K_Tbl = EI × [
  12/(1+φ)l³              6/(1+φ)l²              -12/(1+φ)l³             6/(1+φ)l²
  6/(1+φ)l²               (4+φ)/(1+φ)l           -6/(1+φ)l²              (2-φ)/(1+φ)l
  -12/(1+φ)l³             -6/(1+φ)l²             12/(1+φ)l³              -6/(1+φ)l²
  sym                                            (4+φ)/(1+φ)l
]    (Eq. 29)
```

Where the **shear stiffness factor** is:

```
φ = 12EI/(l² × κGA)    (Eq. 30)
```

Special cases:
- When φ → 0: Reduces to standard Euler-Bernoulli stiffness
- When φ → ∞: Represents increasing shear effects

### Element Stiffness Matrix - Fixed-Hinged (F-SS)

For a beam fixed at left end and simply supported (hinged) at right end:

```
K_Tbl = [
  3/(1+φ')l³        3/(1+φ')l²        -3/(1+φ')l³
                    3/(1+φ')l          -3/(1+φ')l²
                                       3/(1+φ')l³
  sym                                  
]    (Eq. 33)
```

Where:

```
φ' = 3EI/(l² × κGA)    (Eq. 34)
```

### Beam Resting on Elastic Winkler Foundation

For a beam on a Winkler foundation with stiffness K_w:

```
d²M(x)/dx² - Kw × w(x) = -q(x)    (Eq. 35)
```

Differentiating twice and combining with material law (Eq. 9):

```
d⁴M(x)/(κGA)dx⁴ - Kw/(κGA) × d²M(x)/dx² + Kw/EI × M(x) = -d²q(x)/dx²    (Eq. 36)
```

The solution yields M(x) with four integration constants. From M(x), combined with Equation (35), we obtain:

```
K_w × w(x) = d²M(x)/dx² + q(x)    (Eq. 37)

K_w × dw(x)/dx = d³M(x)/dx³ + dq(x)/dx    (Eq. 38)
```

The application of Equation (1) yields shear forces, and combination with Equations (12) and (38) yields rotations.

### Numerical Example: Simply Supported Beam with Distributed Load

Example 1 considers a simply supported beam with:
- Load: p = 10 kN/m
- Length: L = 10 m
- Section: b = 0.3 m, H = 0.5 m
- Material: E = 34.5×10⁶ kN/m², ν = 0.3, κ = 5/6

The closed-form deflection equation is:

```
EI × w(x) = (p/24)[x⁴ - (pl/12)x³ - α(pl²/2)x² + ((1/24) + (α/2))(pl³)x]    (Eq. 74)
```

Results show that the method yields exact results matching the principle of virtual work at all points.
