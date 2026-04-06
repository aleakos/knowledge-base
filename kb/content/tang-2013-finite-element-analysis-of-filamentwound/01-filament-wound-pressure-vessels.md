---
parent_id: "tang-2013-finite-element-analysis-of-filamentwound"
chunk_id: "tang-2013-finite-element-analysis-of-filamentwound/01-filament-wound-pressure-vessels"
section: "Filament-Wound Composite Pressure Vessels: Analysis and Optimization"
order: 1
tags:
  - "engineering/filament-winding"
  - "engineering/pressure-vessels"
  - "engineering/failure-analysis"
  - "engineering/aerospace"
summary: "FEA of carbon/epoxy overwrapped aluminum pressure vessels with winding angle optimization using failure criteria"
formulas:
  - id: "F1"
    name: "Winding angle geodesic"
    expr: "α(R) = sin⁻¹(R₀/R) + δ(R-R₀)/(RH-R₀)"
  - id: "F2"
    name: "Axial stress"
    expr: "σaxial = PR/(2t)"
  - id: "F3"
    name: "Hoop stress"
    expr: "σhoop = PR/t"
  - id: "F4"
    name: "Netting analysis - force equilibrium"
    expr: "Nθ = σu·t·sin²α, NØ = σu·t·cos²α"
  - id: "F5"
    name: "Optimum winding angle from netting"
    expr: "Nθ/NØ = tan²α = 2  ⟹  α = arctan(√2) = 54.7°"
  - id: "F6"
    name: "Tsai-Wu failure criterion"
    expr: "F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + F₁σ₁ + F₂σ₂ + 2F₁₂σ₁σ₂ ≤ 1"
  - id: "F7"
    name: "Tsai-Hill failure criterion"
    expr: "F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + 2F₁₂σ₁σ₂ ≥ 1"
  - id: "F8"
    name: "Maximum stress criterion"
    expr: "|σ₁/X| ≥ 1, |σ₂/Y| ≥ 1, |τ₁₂/S| ≥ 1"
---

## Filament-Wound Composite Pressure Vessels

### Introduction and Applications

Filament winding is the primary manufacturing process for high-performance pressure vessels combining:
- **Lightweight construction** compared to metallic vessels
- **High stiffness and strength** through optimized fiber orientation
- **Corrosion resistance** and extended service life
- **Aerospace and industrial applications**: oxygen/hydrogen storage, propellant tanks, scuba tanks, fire-fighter equipment

This study analyzes **composite overwrapped pressure vessels (COPV)** with an aluminum 6061 liner reinforced by Carbon/Epoxy (T300/LY5052) composite layers under internal pressure.

### Vessel Geometry and Material Properties

**Test Configuration:**
- Length: 1200 mm
- Diameter: 300 mm (inner radius 150 mm)
- Aluminum liner: 0.3 mm
- Composite layers: 6 plies × 0.762 mm each = 4.572 mm
- Outer radius: 154.872 mm (thin-walled vessel: D/t = 1000, well below 1.1 criterion)

**Material Properties:**

| Property | AL 6061 | CFRP T300/LY5052 |
|----------|---------|------------------|
| Density (kg/m³) | 2750 | 1570 |
| E₁ (GPa) | 70 | 135 |
| E₂ (GPa) | 70 | 8 |
| ν₁₂ | 0.3 | 0.27 |
| G₁₂ (GPa) | 27 | 3.8 |
| σ yield (MPa) | 600 | - |

**CFRP Strength Parameters:**

| Xt (MPa) | Xc (MPa) | Yt (MPa) | Yc (MPa) | S (MPa) |
|----------|----------|----------|----------|---------|
| 1860 | 1470 | 76 | 85 | 98 |

### Stress Analysis of Thin-Walled Cylinders

For a thin-walled vessel under internal pressure P:

**Stress resultants:**
```
Hoop force:  Nθ = PR/2
Axial force: Nα = PR
```

**Resulting stresses in cylindrical coordinates:**
```
σaxial = PR/(2t)     (longitudinal)
σhoop = PR/t         (circumferential)
```

Key relationship: **Hoop-to-axial stress ratio = 2:1**

### Winding Angle Optimization via Netting Analysis

Netting analysis assumes fibers carry all loads, neglecting matrix stiffness. For a cylindrical vessel with fibers at angle α relative to the hoop direction:

**Force components in fiber direction:**
```
Nθ = σu·t·sin²α  (hoop contribution)
NØ = σu·t·cos²α  (axial contribution)
```

**Optimum angle from equilibrium:**

To maximize pressure capacity, the ratio of fiber strengths in each direction should match the load ratio:

```
Nθ/NØ = tan²α = 2
α = arctan(√2) = 54.7°
```

This theoretical optimum balances:
- **Hoop-dominated region (α < 54.7°)**: Fibers increasingly oriented circumferentially; better hoop strength but limited axial capacity
- **Axial-dominated region (α > 54.7°)**: Fibers increasingly oriented longitudinally; better axial strength but limited hoop capacity

### FEA Methodology

**Software:** ABAQUS 6.12

**Mesh:** 
- Quad-dominated elements
- Global size: 0.01 m
- Total: 4,290 nodes, 7,872 elements
- Symmetry: Half-vessel model (axisymmetric)

**Loading Strategy:**
1. **Non-constant pressure:** Incrementally increase pressure until failure to determine burst pressure
2. **Constant pressure (15 MPa):** Fixed load to measure shell displacement

**Analysis Cases:** Eight asymmetric layup configurations tested:
- [0°,-0°]s, [15°,-15°]s, [30°,-30°]s, [45°,-45°]s
- [55°,-55°]s, [60°,-60°]s, [75°,-75°]s, [90°,-90°]s

### Failure Criteria

#### Tsai-Wu Criterion

```
F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + F₁σ₁ + F₂σ₂ + 2F₁₂σ₁σ₂ ≤ 1
```

Strength coefficients:
```
F₁ = 1/Xt - 1/Xc,  F₂ = 1/Yt - 1/Yc
F₁₁ = 1/(Xt·Xc),   F₂₂ = 1/(Yt·Yc)
F₆₆ = 1/S²
F₁₂ = -½√(F₁₁·F₂₂)
```

**Nature:** Conservative quadratic interaction criterion accounting for tension-compression asymmetry.

#### Tsai-Hill Criterion

```
F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + 2F₁₂σ₁σ₂ ≥ 1
```

Strength parameters:
```
F₁₁ = 1/X²,  F₂₂ = 1/Y²
F₆₆ = 1/S²
F₁₂ = -½(1/X² + 1/Y²)
```

**Nature:** Simpler, more conservative than Tsai-Wu; isotropic quadratic interaction.

#### Maximum Stress Criterion

Failure when any stress component exceeds ultimate:
```
|σ₁| ≥ X,  |σ₂| ≥ Y,  |τ₁₂| ≥ S
```

**Nature:** Least conservative; basis for first-ply failure (safe design criterion).

### Key Results

**Burst Pressure Variation (Figure 5):**
- At 0°: 2.5 MPa (minimal resistance)
- Rising trend through 0° to 55°
- **Peak at 55°**: 15.5 MPa (Tsai-Wu), 15.6 MPa (Tsai-Hill), 16.0 MPa (Max stress)
- Declining trend from 55° to 90°
- At 90°: 6.5 MPa (all fibers in axial direction)

**Shell Displacement at 15 MPa (Figure 7):**
- Minimum displacement: 0.0045 mm at 55°
- Confirms 55° provides stiffest configuration
- Asymmetric deformation profile

**Comparison with Netting Analysis:**
- Theoretical optimum: 54.7°
- **FEA optimum: 55°**
- Excellent agreement validates simplified netting approach and FEA model

**Agreement with Experimental Literature:**
- Results correlate with experimental studies by Sayman et al., Bhavya et al., Chang et al.
- Conservative estimates appropriate for design safety

### Design Implications

1. **Winding angle critical:** Small deviation from 55° substantially reduces pressure capacity (±5° reduces capacity ~20%)

2. **Failure theory selection:** Tsai-Wu and Tsai-Hill more conservative than maximum stress; appropriate for pressure vessel design where first-ply failure is design criterion

3. **Strain distribution:** Maximum hoop strain occurs in 55° orientation, indicating load is being efficiently carried by fibers at optimal angle

4. **Practical fabrication:** 55° orientation is achievable with standard filament winding process, no special requirement

### Limitations and Future Work

- Linear elastic analysis (no damage evolution tracking)
- First-ply failure as design criterion (ultimate failure may be higher)
- Aluminum liner assumed to share load in analysis
- No environmental effects (temperature, moisture, aging)
