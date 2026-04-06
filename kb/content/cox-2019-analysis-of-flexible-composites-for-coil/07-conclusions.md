---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/07-conclusions"
section: "Conclusions and Design Implications"
order: 7
tags:
  - "engineering/composite-materials"
  - "engineering/coiled-tubing"
  - "engineering/design-optimization"
  - "engineering/composite-design"
summary: "Conclusions from multi-axial analysis showing that advanced layups can match steel tube performance, with pressure and bending driving fundamental design trade-offs."
formulas: []
---

## Conclusions

Thick-walled composite pipes subjected to pressure, axial, and bending loads were investigated in this work. Different pipe geometries, composite layup definitions, and fiber angle orientations were studied to investigate the sensitivity of these variables on pipe strength.

## Key Findings

### 1. Simultaneous Load Requirements Drive Design Complexity

Pressure and axial loads create fundamental and conflicting design requirements:

- **Pressure resistance** requires high hoop strength (fibers near 90°)
- **Axial resistance** requires high longitudinal strength (fibers near 0°)
- **Pure fiber angle layups ([θ/-θ])** cannot simultaneously satisfy both requirements

Advanced layups with **multiple fiber orientations are necessary** to fulfill these competing demands.

### 2. Axial Layers Are Essential

The inclusion of 0° (axial) layers is critical:

- Enables satisfaction of simultaneous pressure and axial load conditions
- Allows composite tubes to match performance of equivalent steel geometries
- Must be balanced against bending flexibility requirements
- Position within layup sequence affects overall stress distribution and stiffness

### 3. Bending Imposes Additional Constraints

Spooling requirements add a third competing demand:

- **Bending compatibility** requires sufficient flexibility (lower effective stiffness)
- **Pressure resistance** requires higher stiffness (hoop-resistant layups)
- **Acceptable spooling angles** emerge as narrow windows (typically 55-65° for combined loading)
- Smaller pipe diameters offer more favorable angle ranges

### 4. Pressure Magnitude Drives Layup Complexity

Increasing pressure differentials require progressively more complex layups:

- **60 MPa differential:** [0/0/θ/-θ] and similar layups sufficient
- **100 MPa differential:** Complex five-orientation layups [55/-55/10/-10/θ/-θ] required
- **Very high pressure (>100 MPa):** Further optimization needed; design space becomes highly constrained

### 5. Performance Parity with Steel

Based on design requirements specified in this work:

**Composite tubes were capable of matching the performance of comparable steel tubes**, with respect to:
- Strength requirements (60-100 MPa pressure differentials)
- Spooling capability (1.42 m drum radius)
- Axial load capacity (1000 m freely-hanging)

Composite advantages remain:
- Superior weight reduction
- Enhanced corrosion resistance
- Extended working depths
- Better flexibility

Steel advantages remaining:
- Simpler design (fewer parameters)
- Well-established fabrication
- Mature design codes

### 6. Design Optimization Potential

Current analysis indicates substantial room for improvement:

- **Further optimization could improve margins** on the current results
- **Multi-objective optimization** (balancing pressure, axial, and bending) could identify superior layup combinations
- **Stacking sequence analysis** (not just fiber angles) could unlock additional performance
- **Hybrid designs** (e.g., selective material placement) could enhance performance

## Design Trade-offs

### Fundamental Conflicts

1. **Flexibility vs. Stiffness**
   - High flexibility (lower angles) needed for bending/spooling
   - High stiffness (higher angles or more 0° fibers) needed for pressure
   - Trade-off is fundamental and cannot be avoided

2. **Pressure vs. Axial**
   - Pure hoop-dominant designs fail in axial loading
   - Pure axial-dominant designs fail in internal pressure
   - Balanced multi-orientation designs are required

3. **Bending vs. Pressure**
   - Angles optimal for bending (35-65°) differ from pressure (70-90°)
   - Combined loading window is narrow and highly constrained
   - Small pipe diameters more favorable than large diameters

### Sensitivity to Variables

The analyses reveal key sensitivities:

- **Fiber angle:** Primary variable affecting load capacity
- **Position of 0° layers:** Significant influence on stress distribution
- **Layup complexity:** More complex layups enable higher pressures and maintained flexibility
- **Pipe diameter:** Larger diameters more difficult to spool (lower acceptable angles)
- **Wall thickness:** Affects through-thickness stress gradients

## Practical Implications

### For Coiled Tubing Applications

Composite coiled tubing can achieve industrial viability when:

1. **Appropriate layup design** is selected for specific pressure/depth requirements
2. **Spooling diameter** is maintained at acceptable levels (1.42 m or larger for most designs)
3. **Material quality** (fiber-matrix bonding, fiber volume fraction) is consistently achieved
4. **Manufacturing process** maintains tight control of fiber angles and layer thickness
5. **Thermoplastic liner** is implemented to manage matrix cracking

### Design Recommendations

**For 60 MPa applications (shallow to moderate depth):**
- Use [0/0/θ/-θ] or [θ/-θ/0/0] layups
- Fiber angles 55-65° for combined loading
- Achieves comparable strength to steel with reduced weight

**For 100 MPa applications (deep wells):**
- Use complex layups like [55/-55/10/-10/θ/-θ]
- Tight fiber angle control (±2-3°)
- Limited spooling flexibility may require larger drum radius
- Optimization studies recommended before fabrication

**Design process sequence:**
1. Specify pressure requirement (60, 100, or higher MPa)
2. Define freely-hanging length (1000 m baseline)
3. Select target spooling radius (1.42 m or custom)
4. Identify acceptable fiber angle ranges from tables
5. Select layup from acceptable options with highest margin
6. Verify through FEA or experimental validation

## Future Work

While this analysis provides comprehensive results, additional research would benefit the field:

### Analytical Extensions

- Temperature effects (thermal expansion, material property changes)
- Dynamic loads (deployment/retraction cycles)
- Fatigue analysis (cycle life prediction)
- Transverse crushing loads
- Bending moment redistribution with pressure

### Experimental Validation

- Pressure testing of composite spools
- Bending testing to failure
- Fatigue testing under combined loading
- Full-scale deployment trials
- Long-term durability assessment

### Optimization Studies

- Multi-objective optimization of layup sequences
- Sensitivity analysis for manufacturing tolerances
- Cost-benefit analysis (composite vs. steel)
- Novel material systems (carbon/glass hybrids, thermoplastic matrices)
- Additive manufacturing approaches for spooled composites

## Final Assessment

**Thick-walled composite pipes can meet the simultaneous demands of pressure resistance, axial loading, and bending flexibility imposed by coiled tubing applications.** The required advanced layups are feasible to fabricate using established winding processes.

The composite approach offers significant advantages:
- Extended working depths due to low density
- Corrosion resistance in harsh environments
- Tunable properties through careful layup design
- Potential for further optimization and cost reduction

With continued development and validation, composite coiled tubing represents a viable and attractive alternative to steel for deep-water and extended-reach drilling applications.

## Acknowledgements

The financial support provided by Regionale Forskningsfond – Vestlandet (Norway) is gratefully acknowledged. This research was conducted at Christian Michelsen Research – Prototech AS in collaboration with the Centre for Micro- and Nanomechanics (CEMINACS) at the University of Aberdeen.
