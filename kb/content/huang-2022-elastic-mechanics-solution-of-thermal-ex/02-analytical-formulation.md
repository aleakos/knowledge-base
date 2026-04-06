---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/02-analytical-formulation"
section: "Analytical Formulation of Single-Layer Curved Beam"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/elasticity"
  - "engineering/thermal-mechanics"
  - "engineering/structural-analysis"
summary: "Stress and displacement fields for single-layer curved beam under thermal-mechanical coupling using elastic small deformation theory"
formulas:
  - id: "F1"
    name: "Radial Stress"
    expr: "\\sigma_{\\rho i} = A_i \\rho^{-2} + B_i \\ln \\rho + C_i"
  - id: "F2"
    name: "Circumferential Stress"
    expr: "\\sigma_{\\phi i} = -A_i \\rho^{-2} + B_i(1 + \\ln \\rho) + C_i"
  - id: "F3"
    name: "Radial Displacement"
    expr: "u_{\\rho i} = \\frac{1}{E_i}\\left[-\\left(1+\\mu_i\\right)\\frac{A_i}{\\rho} - B_i\\rho + (1-\\mu_i)(B_i \\ln \\rho + C_i)\\rho\\right] + \\alpha_i\\Delta T\\rho + D_1 \\cos \\phi + D_2 \\sin \\phi"
  - id: "F4"
    name: "Circumferential Displacement"
    expr: "u_{\\phi i} = \\frac{2B_i\\rho\\phi}{E_i} + D_1 \\sin \\phi - D_2 \\cos \\phi + D_3\\rho"
---

## Pure Bending of Single-Layer Curved Beam Under Thermal-Mechanical Coupling

### Problem Setup

Consider a curved beam subjected to:
- Equal bending moments M at both ends
- Homogeneous temperature load ΔT
- Geometric parameters: inner radius a, interface radius b, outer radius c
- Polar angle φ measured counterclockwise from x-axis
- Curvature center O at coordinate origin

### Stress and Displacement Fields

For material i (i = 1, 2), the governing equations are:

**Stress Field:**

```
σ_ρi = A_i/ρ² + B_i ln ρ + C_i

σ_φi = -A_i/ρ² + B_i(1 + ln ρ) + C_i
```

**Displacement Field:**

```
u_ρi = (1/E_i)[-（1 + μ_i)A_i/ρ - B_i ρ + (1 - μ_i)(B_i ln ρ + C_i)ρ] + α_i ΔT ρ + D_1 cos φ + D_2 sin φ

u_φi = (2B_i ρ φ)/E_i + D_1 sin φ - D_2 cos φ + D_3 ρ
```

Where:
- A_i, B_i, C_i, D_1, D_2, D_3 are undetermined coefficients
- σ_ρi, σ_φi are normal and circumferential stresses
- u_ρi, u_φi are normal and circumferential displacements
- ρ, φ are polar radius and angle
- E_i, μ_i, α_i are modulus, Poisson's ratio, and CTE of material i
- ΔT is temperature change

### Boundary Conditions

The boundary conditions for no bending moments at both beam ends are:

```
σ_ρ1|_ρ=a = 0

σ_ρ2|_ρ=c = 0

∫_a^b ρ σ_φ1 dρ + ∫_b^c ρ σ_φ2 dρ = 0

σ_ρ1|_ρ=b = σ_ρ2|_ρ=b

u_ρ1|_ρ=b = u_ρ2|_ρ=b

u_φ1|_ρ=b = u_φ2|_ρ=b
```

### Determination of Coefficients

Setting D_1 = D_2 = D_3 = 0 (center as reference point) and solving the boundary conditions yields the undetermined coefficients. The solution involves complex expressions depending on:
- Material thickness ratios h_1/b and h_2/b
- Elastic moduli ratio E_1/E_2
- CTE difference (α_1 - α_2)
- Temperature change ΔT

The coefficients A_1, B_1, C_1 are given by detailed expressions (see Equations 3-5 in full paper), with A_2, B_2, C_2 obtained by interchanging material parameters.

### Physical Interpretation

- D_1, D_2, D_3 represent rigid body displacements and rotations
- The stress field is independent of temperature effects when properly formulated
- The displacement field directly incorporates thermal expansion through α_i ΔT ρ terms
- The coupled solution allows calculation of equivalent CTE for composite beams
