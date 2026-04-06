---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/04-validation-and-comparison"
section: "Validation Against Prior Work and FEM"
order: 4
tags:
  - "engineering/thermal-expansion"
  - "engineering/finite-element-method"
  - "engineering/validation"
  - "engineering/numerical-methods"
summary: "Comparison of simplified formula with Lakes' formula and finite element method across varying geometric parameters"
formulas:
  - id: "F9"
    name: "Lakes' CTE Formula"
    expr: "\\bar{\\alpha}_{Lakes} = \\frac{b \\cdot \\theta}{h} \\times \\frac{6(\\alpha_2 - \\alpha_1)\\left[1 + (h_1/h_2)^2\\right]^3}{\\left[1 + (h_1/h_2)^2\\right]\\left[1 + (h_1/h_2)\\frac{E_1}{E_2}\\right] + (h_1/h_2)^2 + (h_1/h_2)\\frac{E_2}{E_1}} \\times \\left[\\frac{1}{2}\\cot\\frac{\\theta}{2} - \\frac{1}{\\theta}\\right]"
---

## Finite Element Method Validation Setup

### Model Configuration

- **Element type**: 8-node plane stress element (CPS8R in Abaqus)
- **Geometry**: θ = 180° test case
- **Parameters**: 
  - Interface radius b = 80 mm
  - Equal material thicknesses h₁ = h₂ = 8 mm
  - Material 1 (PI): E₁ = 2.5 GPa, μ₁ = 0.34, α₁ = 30 ppm/°C
  - Material 2 (PMMA): E₂ = 2.5 GPa, μ₂ = 0.3, α₂ = 70 ppm/°C
- **Mesh**: 100 (circumferential) × 6 (radial) elements
- **Loads**: Temperature load of 1°C applied uniformly
- **Boundary condition**: Middle section of arc fixed

### Accuracy Comparison Results

#### Case 1: Equal Thickness (h₁ = h₂ = h/2, θ = 180°)

**Varying h/b from 1/16 to 1/5:**

- **Proposed Simplified Formula**:
  - Relative error: ~0%
  - Results highly consistent with FEM across all h/b values
  - Demonstrates true elasticity solution

- **Lakes' Formula (Prior Work)**:
  - Relative error: ~5.5% constant across range
  - Systematic underestimation of NTE effect
  - Not suitable for design optimization

**Conclusion**: The simplified formula provides elasticity solution accuracy where Lakes' formula is inadequate.

#### Case 2: Small Central Angle (θ < 54°, h/(bθ) = 1/10)

**Critical Finding**: Previous formulas fail at small central angles

- **Proposed Simplified Formula**:
  - Relative error: ~0% across entire angular range
  - Correctly predicts positive α for θ < 54°
  - Accurately captures CTE transition from PTE to NTE

- **Lakes' Formula**:
  - Relative error: ~20%
  - **Produces negative CTE when α should be positive** (θ < 54°)
  - Not applicable for slender arcs

**Conclusion**: Proposed formula extends applicability to previously problematic design regimes.

## Limitations of Prior Work

The Lakes formula, derived in 1996, has significant restrictions:

1. **Thickness limitation**: Fails when h/b > 1/10
2. **Angular limitation**: Invalid for small central angles (θ < 80°)
3. **Accuracy degradation**: ~5.5% systematic error even in valid range
4. **Design constraint**: Cannot optimize designs requiring slender beams

## Advantages of Simplified Formula

1. **Unified accuracy**: Valid across entire parameter space (h/b, θ)
2. **No special cases**: Single formula handles all geometric configurations
3. **Physical fidelity**: Matches FEM solutions within 0-0.8% error
4. **Design flexibility**: Enables optimization of previously constrained geometries
5. **Practical utility**: Sufficient accuracy for engineering applications while maintaining simplicity
