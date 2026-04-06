---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/10_thick_cylinder_test"
section: "Numerical Results: Thick Hyperelastic Cylinder (Pinching)"
order: 10
tags:
  - "engineering/numerical-validation"
  - "engineering/cylindrical-shells"
  - "engineering/large-deformation"
  - "engineering/cross-sectional-deformation"
summary: "Pinching test of thick hyperelastic cylinder demonstrating CUF capability to handle large cross-sectional deformations in thin-walled structures"
formulas:
  - id: "F1"
    name: "Inner radius"
    expr: "R_{inner} = 8 \\text{ cm}"
  - id: "F2"
    name: "Wall thickness"
    expr: "t = 2 \\text{ cm}"
  - id: "F3"
    name: "Cylindrical portion length"
    expr: "L = 15 \\text{ cm}"
  - id: "F4"
    name: "Applied line load"
    expr: "p = 999.47 \\text{ kN/cm}"
  - id: "F5"
    name: "Shear modulus"
    expr: "\\mu = 6000 \\text{ kN/cm}^2"
  - id: "F6"
    name: "Bulk modulus"
    expr: "\\kappa = 280,000 \\text{ kN/cm}^2"
  - id: "F7"
    name: "Poisson ratio"
    expr: "\\nu = 0.4"
---

# Numerical Results: Thick Hyperelastic Cylinder (Pinching Test)

## Problem Description

The final analysis case considers a thick hyperelastic cylindrical structure subjected to pinching loads. This test demonstrates the proposed beam model's capability to:

- Handle **large cross-sectional deformations** in the circumferential direction
- Analyze **thin-walled structures** without dedicated shell formulations
- Provide **accurate results with minimal DOF's** compared to solid element approaches

This problem was previously analyzed in the literature using shell and brick elements, making it an excellent benchmark for validation.

## Problem Setup

**Geometry:**
- Inner radius: R_inner = 8 cm
- Wall thickness: t = 2 cm
- Cylindrical portion length: L = 15 cm
- **Symmetry**: Only one-quarter of the structure analyzed

**Boundary Conditions:**
- Applied distributed line load on two opposite sides
- Load magnitude: p = 999.47 kN/cm (and 999.47 × 2/3 for load variation studies)
- Pinching configuration (loads applied at opposite edges, perpendicular to radius)

**Material Properties:**
- Material model: Neo-Hookean hyperelasticity
- Shear modulus: μ = 6000 kN/cm²
- Bulk modulus: κ = 280,000 kN/cm²
- Poisson ratio: ν = 0.4 (note: no volumetric locking expected with this ratio)

## Finite Element Model

**Beam Axis Discretization:**
- One single four-node cubic finite element (B4) along the circumferential direction (Y-axis)
- This minimal discretization demonstrates the efficiency of the approach

**Cross-Section Approximation:**
- Lagrange Expansion (LE-16) employed throughout the circumferential domain
- **Single element along thickness**: Sufficient to capture bending effects
- **Multiple elements along circumference**: Necessary for accurate circumferential deformation capture

**Models Tested:**
- 4 LE-16: Four circumferential elements (2,352 DOF's)
- 8 LE-16: Eight circumferential elements (1,200 DOF's)
- 16 LE-16: Sixteen circumferential elements (624 DOF's)

**Convergence Strategy**: Increasing circumferential elements improves accuracy for the large cross-sectional deformations inherent in pinching.

## Comparison with Literature Results

The CUF-based results are compared with established solutions:

**Table 3: Transverse Displacement at p = 999.47 kN/cm**

| Method | Transverse Displacement [cm] | DOF's |
|--------|------------------------------|-------|
| Büchter et al. (1994) - 7-parameter shell | 16.00 | 3,003 |
| Reese et al. (1998) - Locking-free brick | 16.49 | 4,902 |
| Elguedj et al. (2008) - NURBS isogemetric | 16.94 | – |
| **16 LE-16** (CUF) | 16.88 | 2,352 |
| **8 LE-16** (CUF) | 16.77 | 1,200 |
| **4 LE-16** (CUF) | 15.85 | 624 |

### Key Observations

1. **Accuracy**: 16 LE-16 model provides 16.88 cm, matching NURBS isogemetric result (16.94 cm)
2. **Efficiency**: Competitive with or better than alternative methods in terms of DOF efficiency
3. **Convergence**: Clear convergence with increasing circumferential elements
4. **Robustness**: All CUF models remain stable even at large deformations

## Equilibrium Path Analysis

Figure 12 presents equilibrium curves (transverse displacement vs. applied load) comparing:

- LE-16 models with varying circumferential discretization
- Reference solutions from three literature sources

### Load Range Studied

- Reference solutions: Up to approximately 1200 kN/cm
- CUF models: Successfully analyzed up to and beyond reference range
- Load parameter: p ranging from 0 to 1200+ kN/cm

### Convergence Characteristics

**16 LE-16 Model:**
- Excellent agreement with all three reference methods
- Smooth load-displacement curve
- No convergence issues even at extreme deformations

**8 LE-16 Model:**
- Good agreement with slight underprediction at large loads
- Still captures overall nonlinear behavior accurately

**4 LE-16 Model:**
- Acceptable results but noticeably stiffer response
- Requires higher loads to achieve comparable displacements

## Deformed Configurations

Figure 13 shows deformed states at four load levels:
- p = 179 kN/cm: Early deformation phase with symmetric cross-section
- p = 452 kN/cm: Progressive pinching with noticeable lateral bulging
- p = 675 kN/cm: Advanced deformation with significant out-of-plane motion
- p = 886 kN/cm: Severe pinching with complex buckled shapes

**Deformation Characteristics:**
- Progressive inward movement at load application points
- Lateral bulging between pinch points increases with load
- Complex 3D-like deformation patterns captured by LE-16 cross-section approximation
- Deformation magnitude in millimeters clearly increases across load spectrum

## Comparison with Reference Methods

### Büchter et al. (1994)
- 7-parameter nonlinear shell formulation based on enhanced assumed strain
- CUF result 16.88 cm vs. 16.00 cm (5% difference)
- CUF uses fewer DOF's (2,352 vs. 3,003)

### Reese et al. (1998)
- Locking-free brick element with reduced integration plus stabilization
- CUF result 16.88 cm vs. 16.49 cm (2.4% difference)
- Significantly fewer DOF's (2,352 vs. 4,902)

### Elguedj et al. (2008)
- NURBS-based isogemetric analysis with F method
- CUF result 16.88 cm vs. 16.94 cm (0.35% difference) - excellent agreement
- No DOF comparison available, but geometry representation likely more complex

## Significance of Results

This test demonstrates several important capabilities:

1. **Thin-Walled Structure Handling**: Single element along thickness with multiple circumferential elements effectively models cylindrical shells
2. **Large Cross-Sectional Deformations**: LE-16 cross-section expansion captures complex 3D deformation patterns
3. **Computational Efficiency**: Dramatic reduction in DOF's compared to solid element approaches
4. **Accuracy**: Results competitive with specialized shell and isogemetric formulations
5. **Generality**: Same 1D beam framework handles both slender (beam bending) and thick-walled structures

## Mathematical Model Vs. Plotting Mesh

An important note: The three-dimensional mesh shown in deformed configuration figures is purely for visualization convenience. The actual mathematical model is genuinely 1D:
- One element along the beam axis
- Cross-section discrete but still fundamentally a 1D model
- Three-dimensional deformation captured through cross-section polynomial expansions

This distinction is crucial for understanding the computational advantage: true 1D DOF count with effective 3D analysis capability.

## Practical Implications

For soft material thin-walled structures (elastomer seals, flexible conduits, etc.):

- No need for specialized shell elements
- No shell-to-solid transition elements required
- Unified 1D formulation handles various structure types
- Dramatic reduction in computational cost
- Simplified preprocessing and meshing

This makes the CUF approach particularly attractive for engineering applications involving hyperelastic structures of varying complexity.
