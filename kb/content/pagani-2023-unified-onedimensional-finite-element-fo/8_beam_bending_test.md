---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/8_beam_bending_test"
section: "Numerical Results: Neo-Hookean Beam Subjected to Bending"
order: 8
tags:
  - "engineering/numerical-validation"
  - "engineering/large-deformation"
  - "engineering/beam-bending"
  - "engineering/hyperelasticity"
summary: "Large deformation bending analysis of slender hyperelastic cantilever beam with comparison to analytical solutions and literature results"
formulas:
  - id: "F1"
    name: "Applied transverse load"
    expr: "F_0 = 269.35 \\text{ N}"
  - id: "F2"
    name: "Material parameters"
    expr: "\\mu = 50 \\text{ MPa}, \\quad \\kappa = \\frac{2\\mu}{3}"
---

# Numerical Results: Neo-Hookean Beam Subjected to Bending

## Problem Description

The second analysis case involves a hyperelastic clamped-free (cantilever) beam subjected to a tip transverse force. This test demonstrates the model's capability to handle:

- **Large deformations**: Non-linear geometric effects
- **Stress prediction**: Through-thickness stress distributions
- **Theory refinement effects**: Comparison of low and high-order theories

## Geometry and Material Properties

**Beam Configuration:**
- Cross-section: Solid rectangular (100 mm thick × 150 mm height)
- Length-to-thickness ratio: 100 (very slender)
- Applied transverse load: F₀ = 269.35 N
- Material model: Neo-Hookean hyperelasticity

**Material Parameters:**
- Infinitesimal shear modulus: μ = 50 MPa
- Bulk modulus: κ = 2μ/3

This soft material produces significant deformations under moderate loading, requiring full nonlinear analysis.

## Finite Element Model

**Beam Axis Discretization:**
- Four-node cubic shape functions (B4) along the beam axis
- Five elements found sufficient for accurate results

**Cross-Section Approximation:**
- Multiple theories compared:
  - Taylor Expansion (TE): TE-1, TE-2, TE-3
  - Lagrange Expansion (LE): LE-4, LE-9, LE-16

## Convergence Analysis

The equilibrium curves (tip displacement vs. loading) reveal:

1. **Element Convergence**: Five B4 elements provide accurate results (convergence analysis in Figure 5a)
2. **Theory Convergence**: Both low- and high-order theories provide good displacement predictions (Figure 5b)

**Key Observation**: Since the beam is very slender, even first-order theories (TE-1) capture tip displacement accurately. However, stress prediction requires higher-order theories.

## Stress Distribution Results

The through-the-thickness distribution of PK-2 stresses at the midspan cross-section shows:

### Axial Stress (S_YY)

- **Low-order theories** (TE-1, LE-4): Provide reasonable accuracy
- **High-order theories** (TE-3, LE-16): Essential for accurate through-thickness variation
- Distribution becomes increasingly nonlinear with large loading

### Transverse Shear Stress (S_YZ)

- **Critical finding**: At least a third-order beam model (e.g., TE-3 or LE-16) is required for correct prediction
- Low-order theories significantly underestimate shear stresses
- High-order kinematics capture the parabolic distribution typical of bending

## Deformed Configurations

The analysis produces deformed states at multiple load levels (F/F₀ ranging from 0.04 to 1.61), showing:

- Progressive curvature changes with increasing load
- Significant rotation at the free end
- Coupling between axial and transverse deformations
- Nonlinear load-displacement response typical of soft materials

## Through-Thickness Stress Analysis

At large loading (F/F₀ = 1.05), Figure 6 compares stress distributions for different approximation orders:

**Figure 6(a) - Axial Stress Distribution:**
- All theories converge to similar axial stress distributions
- Good predictive capability even for low-order models

**Figure 6(b) - Transverse Shear Distribution:**
- LE-16 (16-node cubic) provides the most accurate distribution
- Clear parabolic shape captured by high-order theories
- Low-order theories fail to capture shear stress variation

## Key Insights

1. **Slender Structures**: For displacement predictions in slender beams, low-order theories are sufficient
2. **Stress Analysis**: Accurate stress prediction requires high-order kinematics
3. **Hyperelastic Materials**: Large deformations demand complete nonlinear analysis
4. **Theory Selection**: The choice of approximation order depends on the quantity of interest

## Comparison with Literature

The problem was previously addressed by Maas et al., who provided both analytical solutions and finite element results using different methods (FEBio). The present CUF-based results:

- Match analytical solutions in the linear regime
- Show consistent behavior in large deformation regime
- Provide accurate stress predictions with appropriate theory order
- Demonstrate superiority for stress analysis compared to lower-order approaches

## Practical Implications

This test demonstrates that the proposed 1D finite element, although one-dimensional, can:

- Address complex nonlinear phenomena in soft material structures
- Adapt to different accuracy requirements through theory refinement
- Provide efficient computation compared to 3D models
- Capture stress states that require 3D-like kinematics through CUF polynomial expansions
