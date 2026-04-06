---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/07-conclusions"
section: "Summary, Conclusions, and Future Work"
order: 7
tags:
  - "engineering/finite-element-method"
  - "engineering/pressurized-structures"
  - "engineering/structural-design"
  - "engineering/nonlinear-analysis"
summary: "Development of Timoshenko beam element successfully predicts pressurized fabric beam response; highlights critical importance of fabric wrinkling and pressure effects on structural behavior and buckling."
formulas: []
---

## Major Contributions

### 1. Novel Theoretical Formulation

**Incremental virtual work principle** that explicitly includes:
- Work done by pressure under deformation-induced volume changes
- Accounts for both shear and bending-induced volume changes
- Enables straightforward inclusion of materially nonlinear response
- Treats pressure as follower force with proper kinematic coupling

### 2. Practical Finite Element Implementation

**Three-noded Timoshenko beam element** featuring:
- Quadratic transverse displacement shape functions (avoids shear locking)
- Linear rotation and axial displacement interpolation
- Material and geometric nonlinearity
- Pressure-dependent stiffness terms
- Efficient analytical integration

**Key advantages**:
- Avoids complexity of mixed interpolation formulations
- Minimizes element count
- Rapid convergence (≤11 Newton iterations)
- Suitable for MATLAB implementation

### 3. Fabric Wrinkling Characterization

**Numerical procedure** for computing nonlinear moment–curvature relationships:
- Treats fabric as tension-only linearly elastic material
- Captures local compressive buckling effects without explicit modeling
- Accounts for axial load influence on wrinkling
- Generates family of M–κ curves for different axial loads

**Key formula - Wrinkling moment**:
```
Mw = (p₀πr³/2) - (Fr/2)
```
Shows explicit dependence on both pressure and axial load.

## Key Findings

### 1. Pressure Effects are Essential

**Critical discovery**: Inclusion of work done by confined, pressurized air is **essential for accurate calculation** of beam stiffness and capacity.

**Quantitative evidence**:
- Omitting Wᵖ leads to gross underprediction of post-wrinkling stiffness
- Post-wrinkling capacity underpredicted by 30–50% depending on pressure
- Effect increases with pressure level
- No single correction factor can adequately account for omission

**Mechanisms**:
- Pressure increases shear stiffness directly: (GAs + P)
- Pressure contributes stabilizing moment post-wrinkling: P(r - ȳ)
- Pressure-dependent bending stiffness: (EIT - P dȳ/dκ)

### 2. Fabric Wrinkling Significantly Affects Buckling

**Buckling load reduction at moderate slenderness**:
- FE model predicts buckling loads 20–40% below both Euler and Fichter at λ ≈ 20–40
- Reduction most pronounced at lower inflation pressures
- Fichter's linear elastic theory cannot capture this

**Physical basis**: Local fabric buckling (wrinkling) becomes dominant failure mechanism for stocky columns, especially at low pressures.

### 3. Shear Deformations are Important

**Timoshenko theory essential**:
- Shear accounts for 22.8–31.9% of mid-span deflection at wrinkling
- Percentage decreases with increasing pressure (pressure increases shear stiffness)
- Euler-Bernoulli theory would overpredict stiffness

### 4. Axial Load Coupling Effects

**Combined loading behavior**:
- Axial compression reduces transverse load capacity
- Two mechanisms: geometric nonlinearity (P–Δ effects) and reduced fabric pre-strain
- Effect more significant at higher pressures (compression as fraction of P)
- **Critical for arch design**: Must account for combined axial thrust and bending

## Experimental Validation

### Four-Point Bending Tests

**Validation scope**:
- Three pressures: 69, 138, 276 kPa
- Three repeats per pressure (excellent repeatability)
- Full range of deformation up to one-diameter deflection
- Wrinkling observed throughout

**Model performance**:
- Excellent prediction of load–deflection response
- Accurate identification of wrinkling onset
- Correct prediction of post-wrinkling softening
- Better accuracy at lower pressures (more nonlinearity, better test of model)

**Parameter determination**:
- Shear modulus G: From independent torsion tests
- Young's modulus E: Back-calculated from pre-wrinkling linear range only
- Accounts for pressure-dependent moduli
- No fitting parameters in post-wrinkling regime

## Limitations and Future Research

### Current Limitations

1. **Tension-only material model**: Simplified but effective
   - Actual fabric likely carries small compressive stress
   - Model conservatively assumes zero compression
   - Empirically validated through good agreement with experiments

2. **Constant pressure assumption**: Valid for small deformations
   - Volume changes < 0.3% for test cases
   - Justified by experimental observations
   - Conservative (pressure increase would stiffen structure)

3. **Membrane resultant properties**: Unknown fabric thickness
   - Thickness very small and difficult to measure
   - E and G treated as resultants (true modulus × thickness)
   - Approach standard in thin-walled structure analysis

4. **Limited pressure range**: Tests conducted at 69–276 kPa
   - Lower pressures may violate circular cross-section assumption
   - Cross-sectional distortions unlikely in test range

### Recommended Future Work

1. **Material characterization**:
   - Independent quantification of effective fabric constitutive properties
   - Material-level tensile and compression tests
   - Direct measurement of fabric behavior under combined stress states

2. **Experimental program expansion**:
   - Larger pressure range testing
   - Multiple beam diameters
   - Varied loading configurations
   - Direct measurement of fabric compression/wrinkling during bending

3. **Extension to arches**:
   - Current element applicable to arch structures
   - Curved beam element development
   - Nonlinear arch analysis under combined loads

4. **Pressure-volume coupling**:
   - Incorporate gas law (Boyle's law) for larger deformations
   - Account for pressure change with volume changes
   - Applicable when deformations exceed few percent of volume

5. **Fabrication variations**:
   - Effect of different coating materials
   - Different fabric weaves (not just 0°–90°)
   - Varying wall thicknesses

## Design Implications

### For Pressurized Beam Structures

1. **Include pressure effects in analysis**:
   - Cannot use standard elastic beam theory
   - Must account for work done by pressure
   - Pressure stiffening effect is substantial (not a correction factor)

2. **Account for fabric wrinkling**:
   - Nonlinear analysis required
   - Wrinkling initiates before apparent failure
   - Reduces buckling capacity significantly

3. **Pressure selection crucial**:
   - Affects stiffness, capacity, and stability
   - Higher pressure improves all structural metrics
   - But increases weight and cost (practical trade-off)

4. **Combined loading assessment**:
   - Axial load and bending interact significantly
   - Cannot superpose elastic results
   - Especially important for arches (thrust + bending)

## Closing Statement

This research has demonstrated that a practical finite element approach can accurately predict the nonlinear response of pressurized fabric beam–columns when:

1. **Pressure effects properly included**: Virtual work formulation explicitly accounts for pressure work
2. **Fabric wrinkling captured**: Tension-only material model effectively represents local buckling
3. **Timoshenko theory applied**: Shear deformations significant; cannot use Euler-Bernoulli
4. **Moment–curvature relationship developed**: Nonlinear analysis essential

The element is **suitable for stiffness-based analysis** of both:
- Pressurized inflatable fabric structures
- Conventional non-prestressed beams with nonlinear response and shear deformations

**Key value proposition**: Numerically efficient, rigorous predictions enabling practical design of pressurized structures including inflatable arches for military and civilian applications.
