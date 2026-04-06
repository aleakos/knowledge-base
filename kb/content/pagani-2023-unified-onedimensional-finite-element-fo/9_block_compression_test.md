---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/9_block_compression_test"
section: "Numerical Results: Nearly Incompressible Block Under Compression"
order: 9
tags:
  - "engineering/numerical-validation"
  - "engineering/incompressible-materials"
  - "engineering/volumetric-locking"
  - "engineering/compression-test"
summary: "Compression test of nearly incompressible neo-Hookean block demonstrating CUF capability to handle volumetric locking through Lagrange expansion models"
formulas:
  - id: "F1"
    name: "Shear modulus"
    expr: "\\mu = 80.194 \\text{ MPa}"
  - id: "F2"
    name: "Bulk modulus"
    expr: "\\kappa = \\frac{4000}{953.269} \\text{ MPa}"
---

# Numerical Results: Nearly Incompressible Block Under Compression

## Problem Description

This test case addresses a challenging problem in finite element analysis: the nearly incompressible block under pressure, originally introduced by Reese et al. and subsequently studied by many authors. This benchmark is particularly demanding because:

- Nearly incompressible material (bulk modulus κ >> shear modulus μ)
- 3D nonlinear stress state
- Potential for volumetric locking with improper formulation
- Multiple levels of pressure (moderate and large deformation)

## Problem Setup

**Geometry:**
- Cube with side length 1 mm
- Only a quarter of the cube modeled (symmetry)
- Applied pressure in center of top face

**Boundary Conditions:**
- Symmetric Dirichlet conditions on vertical faces
- Top face fixed in horizontal plane
- Pressure applied at center point

**Material Properties:**
- Material model: Neo-Hookean
- Shear modulus: μ = 80.194 MPa
- Bulk modulus: κ = 4000/953.269 MPa

The high bulk-to-shear ratio (κ/μ ≈ 52) makes this problem very sensitive to volumetric locking.

## Finite Element Model

**Spatial Discretization:**
- Refined 1D finite elements along the Y-axis
- Lagrange Expansion (LE) in cross-section domain
- Taylor Expansion models (TE) exhibit poor convergence for this problem and are not used

**Models Tested:**
- 2 LE-4, 4 LE-4 (bilinear expansion with 2 or 4 elements)
- 2 LE-9, 4 LE-9 (quadratic expansion with 2 or 4 elements)
- 2 LE-16, 4 LE-16 (cubic expansion with 2 or 4 elements)

**Shape Functions:**
- Linear (B2), quadratic (B3), and cubic (B4) shape functions along beam axis
- Consistent with expansion order in cross-section

**Integration:**
- Reduced order integration to attenuate locking phenomena
- Calculated using ∫N_i N_j dX with selective integration

## Comparison with Reference Solutions

The model is compared against:

1. **Caylak and Mahnken (2009)**: Stabilized mixed U-p formulation with 202,463 tetrahedral elements
2. **Karabelas et al. (2020)**: Pressure-projection stabilized finite element model with 10⁵ + degrees of freedom

### Displacement Results (Table 2)

**At Moderate Pressure (p = 320 MPa):**

| Model | Vertical Displacement (mm) | DOF's |
|-------|---------------------------|-------|
| Ref. (Caylak-Mahnken) | 0.6935 | 202,463 |
| 4 LE-16 | 0.6925 | 6,591 |
| 2 LE-16 | 0.7383 | 1,029 |
| 4 LE-9 | 0.7149 | 2,187 |
| 2 LE-9 | 0.6952 | 375 |
| 4 LE-4 | 0.3266 | 375 |

**At Large Pressure (p = 640 MPa):**

| Model | Vertical Displacement (mm) | DOF's |
|-------|---------------------------|-------|
| 4 LE-16 | 0.8504 | 6,591 |
| 2 LE-16 | 0.9306 | 1,029 |
| 4 LE-9 | 0.8583 | 2,187 |

## Key Findings

### Locking Behavior

**LE-4 Models are Locking-Free but Slow to Converge:**
- 4 LE-4: Severely underpredicts displacement (0.3266 vs. 0.6935 mm at 320 MPa)
- 2 LE-4: Even worse performance (0.3183 mm)
- **Conclusion**: Bilinear expansion is insufficient for this problem

### Convergence with Higher-Order Expansions

**Quadratic (LE-9) and Cubic (LE-16) Models Show Excellent Convergence:**
- 4 LE-16 matches reference solution perfectly at both pressure levels
- 2 LE-16 provides good accuracy with fewer DOF's
- 4 LE-9 and 2 LE-9 also give reasonable results
- **Conclusion**: Higher-order Lagrange expansions effectively overcome volumetric locking

### Computational Efficiency

The 4 LE-16 model provides exceptional efficiency:
- **Reference solution**: 202,463 elements, 10⁵ + DOF's
- **CUF LE-16 model**: 6,591 DOF's
- **Reduction**: ~15× fewer DOF's while maintaining accuracy

### Equilibrium Path

Figure 9 shows equilibrium curves (vertical displacement vs. pressure):

- LE-4 models systematically underestimate deformation at all pressure levels
- LE-9 and LE-16 models track the reference solution closely
- Cubic (LE-16) expansion provides the best accuracy across the entire pressure range
- Arc-length method successfully captures nonlinear response without convergence issues

## Volumetric Locking Mechanism and Mitigation

### Why Locking Occurs

In nearly incompressible analysis:
- Standard displacement-based FE becomes overly stiff
- Incompressibility constraint cannot be satisfied in reduced strain space
- Lower-order approximations lack sufficient degrees of freedom

### CUF Solution

The high-order polynomial expansions (LE-9, LE-16):
- Provide sufficient flexibility to approximate incompressible deformation
- Capture complex 3D stress states within 1D beam elements
- Reduce effective volumetric constraint through higher kinematic resolution
- Combined with penalty method effectively enforces incompressibility

## Deformed Configurations

Figure 10 shows deformed block states at different pressure levels (p = 132, 234, 385, 523 MPa):

- Significant lateral bulging visible at moderate pressures
- Progressive buckling-like behavior at higher pressures
- Displacement magnitude clearly increases with applied pressure
- Deformation pattern matches reference 3D solutions

## Practical Significance

This test demonstrates:

1. **Method Robustness**: CUF handles highly demanding incompressibility problems
2. **Theory Adaptability**: Theory order can be adjusted to achieve desired accuracy
3. **Computational Advantage**: 1D models dramatically reduce problem size vs. 3D
4. **Stress State Representation**: 1D elements capture complex 3D states through cross-section expansions
5. **Penalty Method Effectiveness**: Volumetric-isochoric split with LE expansions provides accurate constraint handling

## Literature Comparison

The proposed approach favorably compares with established methods:
- **Enhanced strain methods (Simo-Armero)**: Requires element enhancement techniques
- **Mixed U-p formulations**: Need additional pressure DOF's and complex matrix structures
- **NURBS-based isogemetric analysis**: More complex geometry handling
- **F method**: Comparable accuracy but different theoretical foundation

The CUF approach achieves competitive results with superior computational efficiency and a simpler, unified theoretical framework.
