---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/07-nonlinear-analysis"
section: "Nonlinear Analysis and Incremental Theory"
order: 7
tags:
  - "engineering/nonlinear-analysis"
  - "engineering/incremental-theory"
  - "engineering/large-deformation"
  - "engineering/thermal-mechanics"
summary: "Extension of analytical solutions to finite deformation problems using Updated Lagrangian Description and material nonlinearity handling"
formulas:
  - id: "F18"
    name: "Radius Update (ith step)"
    expr: "b_i = b_{i-1} + u_\\rho|_{\\rho=b_{i-1}} = b_{i-1} + \\frac{1}{E_1}\\left[-(1+\\mu_1)\\frac{A_1}{b_{i-1}} - B_1b_{i-1} + (1-\\mu_1)(B_1 \\ln b_{i-1} + C_1)b_{i-1}\\right] + \\alpha_1\\Delta T_i b_{i-1}"
  - id: "F19"
    name: "Angle Update (ith step)"
    expr: "\\theta_i = \\theta_{i-1} + \\frac{\\partial u_\\phi}{\\partial \\rho}\\bigg|_{\\rho=b_{i-1}} = \\theta_{i-1} + \\frac{2B_1\\theta_{i-1}}{E_1}"
  - id: "F20"
    name: "Average CTE (Nonlinear)"
    expr: "\\bar{\\alpha}_i = \\frac{b_i \\sin(\\theta_i/2) - b_0 \\sin(\\theta_0/2)}{b_0 \\sin(\\theta_0/2) \\sum \\Delta T_i}"
  - id: "F21"
    name: "ULD CTE Transformation"
    expr: "\\alpha_{ULD} = \\frac{\\ln(1 + \\alpha_{TLD}\\Delta T)}{\\Delta T}"
---

## Nonlinear Thermal Deformation Analysis

### Small Deformation Limitation

The analytical formulas derived previously are based on elastic small deformation theory, where:
- Strain is small relative to 1
- Displacement is small relative to geometric dimensions
- Nonlinear geometric effects are negligible

For large temperature changes or thin-walled structures, finite deformation (geometric nonlinearity) becomes significant.

### Incremental Theory Framework

The incremental theory uses **Updated Lagrangian Description (ULD)** to extend analysis to finite deformations:

**Strategy**:
1. Obtain deformation of first incremental step from initial state
2. Use first step deformation state as reference for second step
3. Continue iteratively until final temperature state
4. Track accumulated radius and angle changes

### Incremental Update Equations

For the ith incremental step:

**Radius Update:**

```
bᵢ = bᵢ₋₁ + uᵣ|ᵣ=bᵢ₋₁

   = bᵢ₋₁ + (1/E₁){-(1+μ₁)A₁/bᵢ₋₁ - B₁bᵢ₋₁ + (1-μ₁)[B₁ln(bᵢ₋₁) + C₁]bᵢ₋₁} + α₁ΔTᵢbᵢ₋₁
```

**Angle Update:**

```
θᵢ = θᵢ₋₁ + ∂uφ/∂ρ|ᵣ=bᵢ₋₁ = θᵢ₋₁ + 2B₁θᵢ₋₁/E₁
```

**Important Note**: Coefficients A₁, B₁, C₁ in Eq. (9) contain b and must be updated at each step using the current bᵢ₋₁ value.

### Average CTE Calculation

The average equivalent CTE over the entire deformation history is:

```
ᾱᵢ = [bᵢ sin(θᵢ/2) - b₀ sin(θ₀/2)] / [b₀ sin(θ₀/2) × Σ ΔTᵢ]
```

This accounts for cumulative deformation and changing geometry throughout the loading history.

## Material Nonlinearity Extension

### Temperature-Dependent Material Properties

For materials with temperature-dependent properties:
- **CTE**: α(T) varies with temperature
- **Elastic modulus**: E(T) varies with temperature

Example materials analyzed:
- **High chromium steel**: CTE ranges from 9.29 ppm/°C (0°C) to 11.41 ppm/°C (400°C); modulus decreases from 203 GPa to 165 GPa
- **Austenitic stainless steel**: CTE ranges from 16.28 to 17.99 ppm/°C; modulus decreases from 199 GPa to 169 GPa

### Description Transformation: TLD to ULD

The material data given in typical tables are based on **Total Lagrangian Description (TLD)**, where properties are referenced to the initial configuration. For ULD-based incremental analysis, conversion is necessary:

```
α_ULD = ln(1 + α_TLD × ΔT) / ΔT
```

This transformation accounts for the difference in reference configurations:
- **TLD**: All changes referenced to initial state
- **ULD**: Each step referenced to current (updated) configuration

### Iterative Algorithm

For temperature-dependent material properties:

1. For each incremental temperature step ΔTᵢ:
   - Identify corresponding material properties: αᵢ, Eᵢ
   - Transform CTE from TLD to ULD using Eq. (19)
   - Update coefficients A₁, B₁, C₁ using current values
   - Calculate radius and angle updates
   - Store results

2. Repeat for all temperature increments

3. To obtain CTE at specific temperature:
   - Perform additional iterations treating that temperature as final state
   - Use corresponding material properties for that temperature

## Validation Results

### Geometric Nonlinearity (Constant Material Properties)

**Test Case**: b₀ = 80 mm, θ₀ = 90°, h₁ = h₂ = 4 mm
- Initial temperature: T₀ = 0°C
- Temperature increment: ΔT = 0.5°C per step
- Final state: bfinal = 76.2 mm, θfinal = 95.4°

**Results**:
- Analytical formula vs. nonlinear FEM: Maximum error = 0.66%
- Excellent agreement demonstrates formula validity for finite deformations

### Material Nonlinearity (Temperature-Dependent Properties)

**Test Case**: b₀ = 80 mm, θ₀ = 90°, h₁ = h₂ = 4 mm
- Initial temperature: T₀ = 20°C
- Temperature increment: ΔT = 0.5°C per step
- Final state: bfinal = 77.5 mm, θfinal = 93.24°

**Results**:
- Analytical formula vs. nonlinear FEM: Maximum error = 0.8%
- Demonstrates applicability to real materials with temperature-dependent properties

## Design Implications

1. **Large temperature changes**: Nonlinear analysis required for accuracy
2. **Temperature range**: Material properties must be known or interpolated across range
3. **Cumulative effects**: Geometry changes significantly affect local stress state
4. **Accuracy maintained**: Analytical approach remains valid beyond small deformation assumption
5. **Computational efficiency**: Analytical incremental theory faster than pure FEM for optimization
