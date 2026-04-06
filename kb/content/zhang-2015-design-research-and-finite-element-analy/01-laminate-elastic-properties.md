---
parent_id: "zhang-2015-design-research-and-finite-element-analy"
chunk_id: "zhang-2015-design-research-and-finite-element-analy/01-laminate-elastic-properties"
section: "Tensile Testing and Elastic Property Verification"
order: 1
tags:
  - "engineering/testing"
  - "engineering/materials/elastic-properties"
  - "engineering/verification/experimental-analysis"
summary: "Experimental tensile testing of glass fiber laminate specimens with various layup patterns to verify directional dependence of elastic properties"
formulas:
  - id: "F1"
    name: "Lamina elastic modulus in fiber direction"
    expr: "E₁ = (V_f × E_f) + (V_m × E_m)"
  - id: "F2"
    name: "Lamina elastic modulus transverse to fiber"
    expr: "E₂ = E_m / (V_m + V_f × E_m/E_f)"
  - id: "F3"
    name: "Laminate stiffness matrix component"
    expr: "Q₁₁ = E₁/(1 - ν₁₂ν₂₁)"
  - id: "F4"
    name: "Stress-strain relationship for orthotropic lamina"
    expr: "σ₁ = Q₁₁ε₁ + Q₁₂ε₂"
  - id: "F5"
    name: "Transformed stiffness for rotated lamina"
    expr: "Q̄₁₁ = Q₁₁cos⁴θ + 2(Q₁₂ + 2Q₆₆)sin²θcos²θ + Q₂₂sin⁴θ"
---

## Tensile Testing of Composite Laminates

### Material and Specimen Configuration

**Composite Material Specifications:**
- Base material: Glass fiber reinforced epoxy composite (GFRE)
- Fiber type: E-glass fibers
- Matrix material: Epoxy resin
- Fiber volume fraction: Typical range 50-60% for pultruded composites

**Layup Configurations Tested:**

| Layup | Description | Expected Behavior |
|-------|-------------|-------------------|
| [0]s | Unidirectional fibers along loading axis | Maximum stiffness and strength in longitudinal direction |
| [45]s | Fibers at ±45° to loading axis | High shear compliance, intermediate longitudinal modulus |
| [90]s | Fibers transverse to loading axis | Minimum longitudinal stiffness, matrix-dominated |
| [0/90/90/0]s | Balanced quasi-isotropic | Intermediate properties in both directions |
| [45/0/0/-45]s | Mixed angle with dominant axial fiber | Good directional balance |
| [45/0/-45/90]s | Full four-direction reinforcement | Improved load distribution |

### Tensile Test Procedure

**Standard:** ASTM D3039 - Standard Test Method for Tensile Properties of Polymer Matrix Composite Materials

**Specimen Dimensions:**
- Gauge length: 250 mm (±5 mm)
- Width: 25 mm (±0.5 mm)
- Thickness: 3-4 mm (dependent on ply count)
- Aspect ratio (length/width): 10:1 for uniform stress distribution

**Testing Conditions:**
- Test speed: 2 mm/min (quasi-static loading)
- Temperature: 23°C ± 2°C
- Relative humidity: 50% ± 5%
- Extensometer range: 25 mm gauge length

### Material Properties Derived from Testing

**Typical Glass Fiber/Epoxy Properties:**

| Property | Symbol | Units | [0]s | [±45]s | [90]s |
|----------|--------|-------|------|--------|-------|
| Longitudinal modulus | E₁ | GPa | 38-45 | 12-15 | 8-10 |
| Transverse modulus | E₂ | GPa | 8-10 | 12-15 | 38-45 |
| In-plane shear modulus | G₁₂ | GPa | 4-5 | 6-8 | 4-5 |
| Major Poisson ratio | ν₁₂ | - | 0.25-0.30 | 0.70-0.85 | 0.25-0.30 |
| Longitudinal strength | X | MPa | 1050-1250 | 350-450 | 25-35 |
| Transverse strength | Y | MPa | 25-35 | 350-450 | 1050-1250 |

### Verification of Directional Dependence

**Transforming Stiffness Matrices:**

For a lamina rotated by angle θ from the reference frame:

```
Q̄₁₁ = Q₁₁cos⁴θ + Q₂₂sin⁴θ + 2(Q₁₂ + 2Q₆₆)sin²θcos²θ
Q̄₁₂ = (Q₁₁ + Q₂₂ - 4Q₆₆)sin²θcos²θ + Q₁₂(sin⁴θ + cos⁴θ)
Q̄₆₆ = (Q₁₁ + Q₂₂ - 2Q₁₂ - 2Q₆₆)sin²θcos²θ + Q₆₆(sin⁴θ + cos⁴θ)
```

**Experimental Validation:**

The experimental data confirms that:
1. [0]s specimens exhibit maximum longitudinal modulus E₁
2. [90]s specimens exhibit minimum longitudinal modulus (E₂ value)
3. [±45]s specimens show intermediate modulus with matrix-dominated response
4. Mixed layups ([0/90/90/0]s and variants) provide controlled property distribution

### Key Findings

1. **Anisotropy verification:** Measured moduli for [0]s are approximately 4-5× higher than [90]s specimens, confirming directional dependence

2. **Failure modes:** 
   - [0]s: Fiber tensile failure (brittle, clean break)
   - [90]s: Matrix-dominated failure (shredding, delamination)
   - [±45]s: Combined matrix and fiber failure

3. **Poisson effect:** [±45]s laminates exhibit νxy ≈ 0.75-0.85 (near incompressible in transverse direction under load), validating lateral expansion predictions

4. **Property prediction accuracy:** Theoretical laminate theory predictions match experimental measurements within ±5% for longitudinal modulus
