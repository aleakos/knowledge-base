---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/06-constrained-rotation"
section: "Extension to Constrained Rotation Boundaries"
order: 6
tags:
  - "engineering/beam-theory"
  - "engineering/boundary-conditions"
  - "engineering/structural-mechanics"
  - "engineering/elasticity"
summary: "Analytical solution extension for bi-material curved beams with constrained rotation angles at both ends"
formulas:
  - id: "F14"
    name: "Constrained Rotation Condition"
    expr: "\\frac{\\partial u_\\phi}{\\partial \\rho} = 0"
  - id: "F15"
    name: "Modified Coefficient B₁ (Constrained)"
    expr: "B_1 = 0 \\text{ (under constrained rotation)}"
  - id: "F16"
    name: "CTE - Constrained Rotation (General)"
    expr: "\\bar{\\alpha} = \\frac{a^2[b^2(\\alpha_1 p - \\alpha_2 n) + c^2(\\alpha_2 n - \\alpha_1 q)] + b^2[b^2(\\alpha_2 m - \\alpha_1 p) + c^2(\\alpha_1 q - \\alpha_2 m)]}{b^2[b^2(m-p) + c^2(q-m)] + a^2[b^2(p-n) + c^2(n-q)]}"
  - id: "F17"
    name: "CTE - Constrained Rotation (Simplified)"
    expr: "\\bar{\\alpha} = \\frac{\\alpha_2[2b/h + 1 + 2h_1h_2(b/h - 1 - \\mu_1)] + \\alpha_1(E_1h_1/E_2h_2)[h_1/h_2(2b/h - 1) + 2(b/h + 1 + \\mu_2)]}{[2b/h + 1 + 2h_1h_2(b/h - 1 - \\mu_1)] + (E_1h_1/E_2h_2)[h_1/h_2(2b/h - 1) + 2(b/h + 1 + \\mu_2)]}"
---

## Extension to Structures with Constrained Rotation

### Structural Configurations

In practical applications, there are two distinct structural types:

**Type A (Free Rotation - Figure 7a)**:
- Antisymmetric structure
- No bending moments at beam ends during thermal expansion
- Both ends function as free boundaries
- Original analysis applies directly

**Type B (Constrained Rotation - Figure 7b)**:
- Symmetric structure
- Bending moments exist at beam ends during thermal expansion
- Rotation angles at both ends are zero
- Requires modified boundary conditions

### Modified Boundary Conditions for Type B

For structures with constrained rotation at both ends:

```
∂u_φ/∂ρ = 0
```

This constraint modifies the analysis in the "Pure bending of a single-layer curved beam" section:

**Key Difference**: The third boundary condition from the free rotation case is no longer valid:

```
∫_a^b ρ σ_φ1 dρ + ∫_b^c ρ σ_φ2 dρ = 0  (NOT valid for constrained rotation)
```

Instead, the rotation constraint condition applies.

### Coefficient Modification

Under constrained rotation, the undetermined coefficients change:

**A₁ and C₁**: Remain structurally similar but with modified expressions

**B₁**: Becomes **B₁ = 0**, eliminating the shear stress distribution term

This modification reflects that:
- Bending moments are present (unlike free rotation case)
- Circumferential stress distribution is uniform
- The beam experiences coupled axial and bending effects

## Analytical Solution for Constrained Rotation

### General Form

The equivalent CTE for constrained rotation case is:

```
ᾱ = [a²(b²(α₁p - α₂n) + c²(α₂n - α₁q)) + b²(b²(α₂m - α₁p) + c²(α₁q - α₂m))] / 
    [b²(b²(m-p) + c²(q-m)) + a²(b²(p-n) + c²(n-q))]
```

Where m, n, p, q are defined as in the original formulation (see Equation 4).

### Simplified Form (Small h/b Approximation)

For practical thin-walled beams:

```
ᾱ = {α₂[2(b/h) + 1 + 2(h₁h₂)(b/h - 1 - μ₁)] + α₁(E₁h₁/E₂h₂)[(h₁/h₂)(2(b/h) - 1) + 2(b/h + 1 + μ₂)]} /
    {[2(b/h) + 1 + 2(h₁h₂)(b/h - 1 - μ₁)] + (E₁h₁/E₂h₂)[(h₁/h₂)(2(b/h) - 1) + 2(b/h + 1 + μ₂)]}
```

**Important Note**: Unlike the free rotation case, Poisson's ratio terms persist in the simplified formula for constrained rotation. This indicates material compressibility affects the CTE under moment constraints.

### Comparison with Free Rotation

| Aspect | Free Rotation (Type A) | Constrained Rotation (Type B) |
|--------|------------------------|------------------------------|
| B₁ coefficient | Non-zero (shear effects) | Zero (moment constraint) |
| Poisson's ratio | Eliminated (h/b >> h₁,h₂) | Retained in simplified form |
| Moment distribution | No moments at ends | Moments at ends |
| Formula complexity | Simpler, no μ terms | More complex, includes μ |
| Structural behavior | Bending-dominated | Combined axial-bending |

## Design Implications

Structures with constrained rotation show:
1. Different CTE from equivalent free-rotation designs
2. Material compressibility becomes significant
3. Moment-stress interaction affects thermal response
4. Different optimization strategies may be required
5. Poisson's ratio considerations become important for design accuracy
