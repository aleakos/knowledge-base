---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/05-experimental-validation"
section: "Element Performance and Experimental Validation"
order: 5
tags:
  - "engineering/experimental-validation"
  - "engineering/four-point-bending"
  - "engineering/inflatable-beams"
  - "engineering/model-validation"
summary: "Four-point bending tests on pressurized fabric beams validate finite element predictions; demonstrates importance of including pressure work in moment-curvature relationships."
formulas:
  - id: "F23"
    name: "Axial stiffness (membrane resultant)"
    expr: "EA = E(2πr)"
  - id: "F24"
    name: "Shear rigidity (with correction factor)"
    expr: "GAs = Gπr"
---

## Experimental Program

### Test Specimen and Setup

**Specimen**: 152 mm nominal diameter inflated woven fabric tube
- Material: Federal Fabrics-Fibers, Inc., Lowell, MA
- Construction: 0°–90° continuous weave, 3000 denier, dimensionally stable polyester
- Coating: ~50% urethane + 50% neoprene
- Integral urethane bladder with pressure valve
- Similar construction to inflatable arch-supported tents (design pressure: 83 kPa)

**Test Pressures**: 69 kPa, 138 kPa, 276 kPa

**Loading**: Four-point bending (Fig. 8 reference)
- Load span: 800 mm
- Support span: 2604 mm
- Load straps: 102 mm nylon straps (TYP)
- Displacement control up to 200–250 mm mid-span deflection

**Instrumentation**: String potentiometers (SP1–SP5) recorded displacement
- Pressure monitored but not regulated during tests

### Material Properties

#### Pressure-Dependent Moduli (from Turner 2006 torsion tests)

| Pressure (kPa) | Young's Modulus E (N/mm) | Shear Modulus G (N/mm) | Inflated Diameter (mm) |
|---|---|---|---|
| 69 | 645 | 8.52 | 160 |
| 138 | 866 | 10.86 | 162 |
| 276 | 1025 | 15.31 | 166 |

**Observations**:
- Moduli increase with inflation pressure (pressure-dependent)
- Diameter increases with pressure (geometric effect)
- Both effects accounted for in finite element model

**Physical basis for pressure dependence**:
- Tow de-crimping under pressure
- Inter-tow friction effects
- Changes in fabric constitutive properties

#### Material Assumptions

1. **Young's modulus E**: Back-calculated from pre-wrinkling load–deflection response
   - Uses only linear range (loads below theoretical wrinkling moment)
   - Eliminates pressure-dependent modulus estimation error
   - Treated as membrane resultant: E = true modulus × fabric thickness

2. **Shear modulus G**: Taken as pressure-dependent value from torsion tests
   - Treated as membrane resultant: GAs = Gπr
   - Shear correction factor of 2 applied for thin-walled circular tube

3. **Tangent bending rigidity EIT**: Computed from nonlinear moment–curvature analysis

## Results: Four-Point Bending

### Comparison with Experiments

**Experimental results**: Average of three tests at each pressure
- Tests very repeatable and consistent over full range of displacements
- All specimens stable; continued to gain load with increasing displacement
- Wrinkling observed; cross-section remained essentially circular

**Mesh convergence**: 100-element uniform mesh provided excellent results

### Validation Results

**At p₀ = 69 kPa**:
- Model predicts nonlinear load–deformation response well
- Exhibits more nonlinearity than higher-pressure specimens
- Applied load exceeded wrinkling load by greater amount at lower pressure

**At p₀ = 138 kPa and 276 kPa**:
- Model predictions accurate
- Less nonlinearity in load–deflection response
- Specimens carried significantly more load than lower-pressure specimens

**Theoretical wrinkling moment indicator**:
- Model correctly identifies onset point (shown in plots)
- Predicts gradual softening after wrinkling
- Load-carrying capacity strongly pressure-dependent

### Shear Deformation Effects

At the wrinkling load:
- **p₀ = 69 kPa**: 31.9% of mid-span deflection due to shear
- **p₀ = 276 kPa**: 22.8% of mid-span deflection due to shear

**Conclusion**: Including shear deformations (Timoshenko theory) is essential for accurate prediction.

## Effect of Pressure on Load–Deflection Response

### Parametric Study

To isolate the effect of work done by pressure (Wᵖ), simulations were conducted:
- E and G fixed at values from p₀ = 138 kPa
- Beam diameter held constant at 162 mm
- Only pressure W term varied

### Key Findings

**With pressure work included**:
- Load increases with pressure
- Dramatic improvement in post-wrinkling capacity
- Pressure dominates shear rigidity
- Flexural rigidity increases significantly post-wrinkling with pressure

**Without pressure work** (Wᵖ omitted):
- Large drop in post-wrinkling capacity
- Unrealistic predictions at high pressure
- Loads to achieve 162 mm deflection dramatically underpredicted

### Critical Result

```
For mid-span displacement of 162 mm:
- With Wᵖ included: Post-wrinkling load increases with pressure
- Without Wᵖ: Post-wrinkling load actually decreases
```

**Conclusion**: Neglecting the work done by pressure leads to **gross underprediction** of inflatable fabric beam stiffness and capacity. The pressure contribution is essential for accurate analysis.

## Volume Change Validation

### Measured vs. Predicted

For specimens at p₀ = 69 kPa and p₀ = 276 kPa, volume changes corresponding to one-diameter mid-span deflection:

| Pressure | Volume Change | % of Original Volume |
|---|---|---|
| 69 kPa | — | 0.29% |
| 276 kPa | — | 0.09% |

**Justification for constant pressure assumption**:
- Very small relative volume changes
- Experimental observation: pressure remained constant during tests
- Conservative assumption: increasing pressure increases stiffness and capacity

## Observation on Fabric Behavior

**Visual observations during testing**:
- Localized buckling near load application points (expected)
- No actual wrinkles observed between load straps in compressive region
- Fabric still carrying tensile hoop stress and subject to direct radial pressure
- These prevent appearance of actual wrinkles while strain is compressive

**Model assumption validity**: Tension-only fabric model reasonably captures this behavior:
- Fabric effective stress drops to zero in compression (not literally zero, but low)
- Model predicts nonlinear response correctly
- Future research opportunity: Direct measurement of fabric compression when unwrinkled

## Summary of Validation

| Aspect | Result |
|---|---|
| Load–deflection prediction | Excellent, especially at lower pressures |
| Wrinkling onset | Correctly predicted |
| Post-wrinkling softening | Accurately captured |
| Pressure effect magnitude | Essential for accuracy |
| Shear deformation effects | Important (22–32% of deflection) |
| Cross-sectional deformation | Negligible (circular section maintained) |
