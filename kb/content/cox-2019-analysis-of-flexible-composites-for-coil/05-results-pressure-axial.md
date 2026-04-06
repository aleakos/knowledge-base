---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/05-results-pressure-axial"
section: "Results - Pressure and Axial Load Analysis"
order: 5
tags:
  - "engineering/composite-materials"
  - "engineering/failure-analysis"
  - "engineering/stress-distribution"
summary: "Analysis results showing acceptable fiber angles for composite tubes under combined pressure and axial loads, demonstrating role of 0-degree layers in achieving simultaneous load requirements."
formulas: []
---

## Analysis Set 1: Pressure and Axial Load Results

Results for Analysis Set 1 are summarized in detailed tables and figures showing allowable fiber orientations for each pipe based on applied loads.

### Pressure-Only Loading

When subjected to pressure loads alone (60 and 100 MPa differentials):

**Key findings:**
- **Hoop-dominant strength:** Fiber angles nearest 90° provided the most resistance to internal pressure
- **Failure distribution:** Smooth failure coefficient distributions observed for all layups
- **Layup comparison:** [θ/-θ] layup produced smoother distributions than layups with 0° layers
- **Pressure sensitivity:** Dominant factors are magnitude of pressure load, pipe diameter, and wall thickness

### Axial-Only Loading

When subjected to axial loads (1000 m freely-hanging):

**Key findings:**
- **Axial-dominant strength:** Fiber orientations nearest 0° were required to resist axial loads
- **Load interaction:** Axial loading requirements differ fundamentally from pressure requirements
- **Over-design risk:** With 0° layers, pipes were likely over-designed for axial load alone

### Combined Pressure and Axial Loading

When pressure and axial loads are applied simultaneously:

**Critical observation:** Only a small region of winding angles between approximately **35° and 65°** could satisfy both loading types simultaneously.

**Example results for 60.3/47.5 mm pipe with [θ/-θ] layup:**
- Axial force alone: acceptable range 35-65°
- Pressure alone (10 MPa IP, 70 MPa OP): acceptable range 65-90°
- **Combined loads:** axial stress state exceeded allowable limit
- **Failure coefficient:** exceeded unity for combined loading

### Role of 0° Axial Layers

The addition of 0° (axial) layers was necessary to satisfy simultaneous loading conditions:

**With [0/0/θ/-θ] layup (0° outer layers):**
- Acceptable fiber angles for combined loads: 55-90°
- Significant improvement over [θ/-θ] layup
- 0° layers carry primary axial loads
- θ/-θ layers resist hoop/pressure stresses

**With [0/0/θ/-θ/θ/-θ] layup (0° with doubled angled layers):**
- Further optimization of pressure/axial balance
- Acceptable angles: 52-90° (60 MPa), 62-90° (100 MPa)
- Better stress distribution through thickness

**With [θ/-θ/0/0/θ/-θ] layup (0° middle layers):**
- Balanced design with axial protection
- Acceptable angles: 53-90° (60 MPa), 70-90° (100 MPa)
- Mid-plane placement affects overall stiffness

## Failure Coefficient Distribution Through Wall Thickness

### Stress Distribution Characteristics

Failure coefficient plots show variation with:
- **Radial position:** through pipe wall thickness
- **Fiber angle:** from 0° to 90°
- **Load case:** pressure, axial, or combined

### Observations from Failure Maps

**[θ/-θ] layup at 60 MPa pressure difference (10 MPa inner):**
- Minimal variation through thickness (thin-walled approximation valid)
- Peak failure coefficients at intermediate fiber angles (40-60°)
- Sharp increase in failure coefficient beyond critical angles

**[0/0/θ/-θ/θ/-θ] layup:**
- More complex through-thickness distribution
- Peak values modulated by 0° layer placement
- Better stress balancing compared to pure angled layups
- Failure coefficient distribution smoother through thickness

**[θ/-θ/0/0/θ/-θ] layup:**
- Central 0° layers create distinct stress peaks
- Outer angled layers control pressure resistance
- Inner angled layers control axial resistance
- More uniform distribution achievable with optimized angles

## Key Design Insights

### Fundamental Trade-offs

1. **Pure angle layups ([θ/-θ]):**
   - Cannot simultaneously withstand pressure and axial loads
   - Very flexible (favorable for spooling)
   - Inadequate for multi-axial loading

2. **0° layer benefits:**
   - Significant influence on failure coefficient
   - Enables simultaneous pressure and axial load satisfaction
   - Must be included for operational coiled tubing design

3. **Layup complexity:**
   - More complex layups ([θ/-θ/0/0/θ/-θ], etc.) improve load distribution
   - Position of 0° layers affects stress concentration
   - Multiple angled layer pairs improve overall balance

### Pressure vs. Axial Load Resolution

The fundamental conflict between pressure (requiring hoop strength) and axial (requiring longitudinal strength) can only be resolved by:
- Including substantial 0° axial layers
- Optimizing the ratio of 0° to angled fibers
- Careful placement within layup sequence
- Accepting that pure fiber angle solutions are insufficient

### Geometry Effects

The pipe diameter and wall thickness influence which layups are acceptable:
- **Smaller pipes (50.8 mm OD):** More layup options available
- **Larger pipes (66.7 mm OD):** More restrictive angle requirements
- **Higher pressure (100 MPa):** Generally require higher fiber angles (higher θ)

## Summary of Acceptable Layups

**For 60 MPa pressure difference with 10 MPa inner pressure:**
- [θ/-θ]: None (cannot sustain axial load)
- [0/0/θ/-θ]: 55-90° acceptable
- [0/0/θ/-θ/θ/-θ]: 55-90° acceptable
- [θ/-θ/0/0/θ/-θ]: 55-90° acceptable
- [θ/-θ/θ/-θ/0/0]: 57-90° acceptable
- [θ/-θ/0/0]: 58-90° acceptable

**For 100 MPa pressure difference with 10 MPa inner pressure:**
- [θ/-θ]: None
- [0/0/θ/-θ]: 70-90° acceptable
- [0/0/θ/-θ/θ/-θ]: 64-90° acceptable
- [θ/-θ/0/0/θ/-θ]: 70-90° acceptable
- [θ/-θ/θ/-θ/0/0]: None (cannot satisfy)
- [θ/-θ/0/0]: None
