---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/05-parameter-analysis"
section: "Parameter Analysis and Maximum NTE Design"
order: 5
tags:
  - "engineering/thermal-expansion"
  - "engineering/design-optimization"
  - "engineering/metamaterials"
summary: "Effects of geometric parameters on CTE and conditions for achieving maximum negative thermal expansion"
formulas:
  - id: "F10"
    name: "CTE Dependency on Thickness Ratio"
    expr: "\\bar{\\alpha}(h_1/h_2, h/b, \\theta)"
  - id: "F11"
    name: "Extreme Value Condition"
    expr: "\\frac{\\partial \\bar{\\alpha}}{\\partial (h_1/h_2)} = 0"
  - id: "F12"
    name: "Static Moment Ratio at Maximum NTE"
    expr: "\\left(\\frac{h_1}{h_2}\\right)^{-2} \\propto \\frac{E_1}{E_2}"
  - id: "F13"
    name: "Maximum NTE Coefficient"
    expr: "\\frac{E_1h_1^2}{E_2h_2^2} = f(h/b, \\theta)"
---

## Thickness Effects on Equivalent CTE

### Effect of h/b (Beam Slenderness)

**Finding**: As h/b increases, the equivalent CTE decreases in magnitude (becomes less negative).

**Physical Mechanism**:
1. Increasing thickness increases flexural rigidity of curved beam
2. Higher flexural rigidity makes the beam more difficult to bend
3. Reduced bending during thermal deformation compromises NTE effect
4. Magnitude of CTE ranges from 250-910 ppm/°C, 1-2 orders magnitude higher than component materials

**Design Implication**: To maximize NTE effect, **minimize h/b**

### Effect of Central Angle θ (Arc Geometry)

**Finding**: Equivalent CTE decreases monotonously from positive to negative as θ increases from 40° to 180°.

**Physical Mechanism**:
1. Larger radian angle increases rotation angles at beam ends during thermal deformation
2. Increased end rotations produce greater structural contraction
3. Larger θ leads to stronger NTE effect

**Design Implication**: To maximize NTE effect, **maximize θ**

## Thickness Ratio Optimization (h₁/h₂)

### CTE Behavior with h₁/h₂

**Finding**: α exhibits a minimum (most negative CTE) at intermediate h₁/h₂ ratios, then increases.

**Physical Mechanism**:
1. **Extreme thickness differences**: Beam approaches single-material behavior (PTE-dominated), NTE effect degrades
2. **Optimum ratio**: Specific h₁/h₂ balance creates maximum bi-material effect
3. **Too similar thicknesses**: Reduced material contrast effect

### Maximum NTE Condition

Taking the derivative of CTE expression with respect to h₁/h₂ and setting equal to zero:

```
∂ᾱ/∂(h₁/h₂) = 0
```

**Key Finding**: At maximum NTE:

```
(h₁/h₂)⁻² ∝ E₁/E₂
```

The proportional coefficient depends on h/b and θ but is **independent of α₁ and α₂**.

This means:
- Optimal thickness ratio is determined by elastic moduli ratio
- Optimal ratio is independent of material CTE values
- Design can be optimized based on elastic properties alone

### Dimensionless Design Parameter

The effective design parameter is:

```
E₁h₁²/(E₂h₂²) = g(h/b, θ)
```

**Practical Use**: Figure 6b in the paper provides design curves showing:
- How this coefficient varies with h/b and θ
- Curves become guidance for maximum NTE design of bi-material beams
- Single set of curves applicable across different material combinations

## Combined Optimization Strategy

To achieve maximum NTE effect in bi-material curved beam design:

1. **Minimize h/b**: Reduce thickness relative to radius
2. **Maximize θ**: Use larger arc angles
3. **Optimize h₁/h₂**: Select thickness ratio satisfying E₁h₁²/(E₂h₂²) = optimal value
4. **Check design curves**: Use Figure 6b to find optimal ratio for specific h/b and θ

## Sensitivity Analysis

- **Most sensitive parameter**: h/b (strongest effect on magnitude)
- **Second-order parameter**: θ (monotonic increase in NTE)
- **Optimization parameter**: h₁/h₂ (enables fine-tuning for maximum effect)
- **Material-independent**: Optimal thickness ratio depends only on moduli, not CTE values
