---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/06-buckling-analysis"
section: "Buckling of Pressurized Fabric Beam-Columns"
order: 6
tags:
  - "engineering/buckling"
  - "engineering/column-stability"
  - "engineering/pressurized-structures"
  - "engineering/flexural-buckling"
summary: "Finite element analysis of flexural buckling in pressurized fabric columns shows significant reduction in buckling loads due to fabric wrinkling, especially at lower pressures and moderate slenderness ratios."
formulas:
  - id: "F25"
    name: "Slenderness ratio"
    expr: "λ = L/rg"
---

## Problem Setup

### Geometry and Loading

**Column**: Pinned-ended pressurized fabric tube
- Subjected to axial compression F (increased until buckling)
- Inflation pressures: 69 kPa, 138 kPa, 276 kPa
- Material properties and diameters from Table 1 (experimental program)

**Mesh**: 50 equal-length elements

### Buckling Initiation

To initiate buckling and track the post-buckled path:

1. Column given initial curved shape
   - Shape: 1/2 sine wave
   - Mid-height perturbation: 0.0001 × column length
   - Realistic imperfection magnitude

2. Axial load F increased with adaptive load stepping

3. Termination criteria:
   - F increment drops below 0.0001 × largest converged F value, OR
   - Lateral displacement exceeds one cross-sectional diameter

4. Maximum F value taken as buckling load

### Identification of Buckling Load

**Method**: Plots of F vs. lateral displacement
- Large increases in displacement with increasing F near computed buckling load
- Clear transition from elastic to post-buckled behavior

## Results: Buckling Load vs. Slenderness

### Analytical Comparison

Fichter (1966) theory:
- Derived analytically for inflated fabric columns
- Includes shear deformations and pressure effects from shear-induced volume changes
- Assumes **linear elastic material** (limitation)
- Does not include fabric wrinkling effects
- Based on minimum potential energy principle

### Finite Element Results

**Agreement with Fichter theory**:
- Excellent agreement for **large slenderness ratios (λ)** (L/rg > ~50)
- Both FE model and Fichter theory approach Euler prediction asymptotically
- Validates FE implementation for linear elastic regime

**Divergence at low slenderness**:
- **Significant differences at λ < 40** (stocky columns)
- Most pronounced at **lower inflation pressures**

### Physical Explanation of Divergence

**At low slenderness ratios**:
- Fabric wrinkling becomes dominant failure mechanism
- Local buckling (wrinkling) occurs before global buckling
- Nonlinear material response crucial
- Fichter's linear elastic theory cannot capture this

**At lower pressures**:
- Pressure provides less stabilizing effect
- Wrinkling initiates at lower axial loads
- Greater reduction from Euler/Fichter predictions
- Model-predicted buckling loads substantially lower

**At higher pressures**:
- More pressure stabilization
- Wrinkling delayed to higher loads
- Closer to elastic buckling behavior
- Approach Fichter theory more closely

## Comparison with Classical Theories

| Theory | Includes | Limitations |
|---|---|---|
| **Euler** | Bending only | Ignores shear, pressure, wrinkling |
| **Fichter** | Shear, pressure (shear effect) | Linear elastic, no wrinkling |
| **Present FE Model** | Shear, pressure, wrinkling | Assumes tension-only fabric, constant pressure |

### Quantitative Differences

**Example at p₀ = 69 kPa**:
- Euler and Fichter overpredict buckling load
- FE model predictions 20–40% lower at moderate slenderness
- Difference increases as pressure decreases

**Example at p₀ = 276 kPa**:
- FE model closer to Fichter
- Less dramatic difference due to pressure stabilization
- Wrinkling effect smaller relative to pressure stiffening

## Pressure Effects on Column Stability

### Key Finding

**Higher inflation pressures clearly provide more stability** for pressurized fabric beam-columns.

### Mechanisms

1. **Direct stiffening**: Pressure increases both shear rigidity (GAs + P) and post-wrinkling bending stiffness
2. **Delayed wrinkling**: Higher pressure delays onset of fabric wrinkling to larger axial loads
3. **Increased moment capacity**: Pressure contribution P(r - ȳ) provides stabilizing moment

### Quantitative Effect

At moderate slenderness (λ ≈ 20–40):
- Buckling load increases dramatically with pressure
- Effect more significant than in linear elastic regime
- Critical for design of pressurized structural systems

## Effect of Axial Force on Bending Response

### Combined Loading Study

To study interaction between axial compression and transverse bending:

**Configuration**: Four-point bending with simultaneous axial compression
- Axial loads: F = 0, 0.1P, 0.2P, 0.3P (where P = p₀πr²)
- Transverse loads: 0 to Hw = 2p₀πr³/Lp
- Lp = distance between support and load position

### Observations

**Linear behavior (F = 0)**:
- Linear load–deflection relationship maintained
- Can carry full design transverse load Hw

**Increasing axial compression**:
- Load–deflection relationship becomes increasingly nonlinear
- Reduced transverse load capacity
- Earlier instability

**At F = 0.3P**:
- **p₀ = 138 kPa**: Member cannot carry Hw without becoming unstable
- **p₀ = 276 kPa**: Member becomes unstable at F = 0.2P with lateral loads < Hw

### Physical Mechanisms

Two competing effects:

1. **Second-order bending effects (P–Δ)**: Geometric nonlinearity from axial load
2. **Reduction in fabric pre-strain**: Applied compression reduces available fabric pre-strain
   - Initiates wrinkling at lower transverse loads
   - Softens load–deformation response
   - Decreases structural stability

### Practical Significance for Arches

**Critical for design**: Pressurized arches in service must sustain:
- Combined axial thrust (from arch geometry and loads)
- Bending moments (from non-uniform loads, wind, snow)
- Large axial thrust can limit bending capacity

Results indicate:
- Significant reduction in bending capacity with thrust
- Effect more pronounced at higher pressures (F as fraction of P)
- Need for analysis incorporating combined loading
- Cannot neglect axial force effects in design

## Summary of Buckling Findings

| Aspect | Finding |
|---|---|
| Agreement with Fichter (linear regime) | Excellent at high slenderness |
| Wrinkling effect on buckling | Substantial at moderate slenderness, lower pressures |
| Pressure stabilization | Dramatic; increases buckling load significantly |
| Axial force interaction | Strongly reduces transverse load capacity |
| Design implications | Pressure critical to stability; must account for combined loading |
