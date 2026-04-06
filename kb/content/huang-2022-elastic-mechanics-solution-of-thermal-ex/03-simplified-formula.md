---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/03-simplified-formula"
section: "Formula Simplification and CTE Derivation"
order: 3
tags:
  - "engineering/beam-theory"
  - "engineering/thermal-expansion"
  - "engineering/elasticity"
  - "engineering/approximation-methods"
summary: "Simplified analytical formula for equivalent CTE using small quantity hypothesis, with negligible Poisson's ratio effects"
formulas:
  - id: "F5"
    name: "Equivalent CTE - General Form"
    expr: "\\bar{\\alpha} = \\frac{\\Delta u_x}{2b \\sin(\\theta/2) \\Delta T}"
  - id: "F6"
    name: "Relative Deformation"
    expr: "\\Delta u_x = (u_{B\\rho} + u_{A\\rho}) \\sin(\\theta/2) + (u_{B\\phi} - u_{A\\phi}) \\cos(\\theta/2)"
  - id: "F7"
    name: "Simplified CTE (Equal Thickness)"
    expr: "\\bar{\\alpha} = \\alpha_1 + \\frac{24E_1E_2b(\\alpha_1-\\alpha_2)(1-\\phi\\cot\\phi) + h[E_1^2\\alpha_1 + E_2^2\\alpha_2 + 7E_1E_2(\\alpha_1+\\alpha_2)]}{E_1^2 + 14E_1E_2 + E_2^2}\\frac{h}{b}"
  - id: "F8"
    name: "Dimensionless Form"
    expr: "\\bar{\\alpha} = \\alpha_1 + \\frac{24(E_1/E_2)(\\alpha_1-\\alpha_2)(1-\\phi\\cot\\phi) + (h/b)[\\left(E_1/E_2\\right)^2\\alpha_1 + \\alpha_2 + 7(E_1/E_2)(\\alpha_1+\\alpha_2)]}{(h/b)[\\left(E_1/E_2\\right)^2 + 14(E_1/E_2) + 1]}"
---

## Simplification Strategy

### Small Quantity Hypothesis

The original analytical formulas derived from elastic small deformation theory are complex. To make them more practical, a simplification is introduced based on the observation that thickness ratios are typically small:

```
h₁/b ≪ 1  and  h₂/b ≪ 1
```

Using Taylor series expansion and neglecting higher-order terms of h/b:

```
ln(a/b) = -h₁/b - (1/2)(h₁/b)² - (1/3)(h₁/b)³ ...

ln(c/b) = h₂/b - (1/2)(h₂/b)² + (1/3)(h₂/b)³ ...
```

### Poisson's Ratio Elimination

A key finding: **Poisson's ratio has negligible effect on bi-material beam CTE**

During simplification, when substituting the small quantity expressions into the original equations, all terms involving μ₁ and μ₂ appear as higher-order terms of h/b and are eliminated. This indicates that:
- Poisson's ratio of the base material has negligible influence
- Numerical results of simplified formulas are almost identical to original analytical formulas
- Simplified analysis of NTE and NPR of bi-material beams is not affected

### Equivalent CTE Expression

The equivalent CTE of the curved beam is obtained from the relative deformation at both ends:

**General Form:**

```
ᾱ = (Δu_x)/(2b sin(θ/2) ΔT)
```

Where the relative deformation considers both radial and circumferential displacement components at the beam ends.

### Simplified Formula for Equal Thickness (h₁ = h₂ = h/2)

For the common case of equal material thicknesses:

```
ᾱ = α₁ + [24E₁E₂b(α₁-α₂)(1-φ cot φ) + h(E₁²α₁ + E₂²α₂ + 7E₁E₂(α₁+α₂))] / 
            [(E₁² + 14E₁E₂ + E₂²)(h/b)]
```

**In Dimensionless Form:**

```
ᾱ = α₁ + [24(E₁/E₂)(α₁-α₂)(1-φ cot φ) + (h/b)[(E₁/E₂)²α₁ + α₂ + 7(E₁/E₂)(α₁+α₂)]] /
            [(h/b)[(E₁/E₂)² + 14(E₁/E₂) + 1]]
```

## Key Advantages

1. **Significantly reduced complexity**: Formulas are much shorter and more practical than original solutions
2. **High accuracy**: Numerical results nearly identical to original formulas (~0% relative error)
3. **Broad applicability**: Accurate regardless of beam slenderness ratio (h/bθ)
4. **No Poisson's ratio dependency**: Simplifies analysis without accuracy loss
5. **Parameter optimization**: Enables systematic analysis of design parameters
