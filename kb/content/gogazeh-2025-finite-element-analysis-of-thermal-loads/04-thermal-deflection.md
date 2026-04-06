---
parent_id: "gogazeh-2025-finite-element-analysis-of-thermal-loads"
chunk_id: "gogazeh-2025-finite-element-analysis-of-thermal-loads/04-thermal-deflection"
section: "Deflection Under Thermal Loads"
order: 4
tags:
  - "engineering/thermal-loads"
  - "engineering/thermal-expansion"
  - "engineering/temperature-effects"
summary: "Analysis of beam deflection response to temperature variations across rectangular, I-section, and C-section profiles"
formulas: []
---

# Deflection Under Thermal Loads

## Temperature-Deflection Relationship

### Material and Geometric Specifications

**Test Configuration:**
- Material: AISI 1020 steel cold rolled
- Beam configuration: Pine-pine (simply supported)
- Beam length: 3 m
- Moment of inertia: I = 5.27 × 10⁻⁶ mm⁴
- Reference temperature: 25°C
- Applied temperature range: 60°C to 80°C

### Rectangular Section Results

| Temperature (°C) | 60 | 65 | 70 | 75 | 80 |
|---|---|---|---|---|---|
| Maximum deflection (mm) | -1.167 | -1.334 | -1.5 | -1.667 | -1.834 |

**Key Observation**: Maximum deflection increases linearly with temperature rise. The relationship shows approximately 0.167 mm increase in deflection per 5°C temperature increase.

## Comparative Analysis by Cross-Section Type

### Cross-Section Deflection Comparison

| Temperature (°C) | 60 | 65 | 70 | 75 | 80 |
|---|---|---|---|---|---|
| Rectangular section (mm) | -1.167 | -1.334 | -1.5 | -1.667 | -1.834 |
| I-section (mm) | -0.85 | -0.97 | -1.09 | -1.215 | -1.33 |
| C-section (mm) | -1.23 | -1.14 | -1.58 | -1.76 | -1.94 |

### Performance Rankings

1. **Best Performance (Least Deflection)**: I-section
   - Shows superior resistance to thermal deflection
   - Approximately 27% reduction compared to rectangular section
   - Maintains consistent linear relationship across temperature range

2. **Intermediate Performance**: Rectangular section
   - Baseline performance
   - Linear thermal deflection response

3. **Poorest Performance (Maximum Deflection)**: C-section
   - Shows highest deflection values
   - Less efficient moment of inertia distribution
   - Higher sensitivity to thermal loads

## Analysis Implications

### Structural Response to Thermal Expansion

Thermal loads induce deflection through:
- Material thermal expansion coefficient effects
- Differential thermal stress development
- Geometric stiffness reduction at elevated temperatures

### Design Considerations

The I-section demonstrates superior performance due to:
- Optimized moment of inertia distribution
- Greater distance of material from neutral axis
- More efficient structural depth utilization

The C-section's poor performance suggests:
- Asymmetric stress distribution
- Less optimal geometric arrangement for resisting bending
- Potential stress concentration zones

## Observations

All tested sections show monotonic increase in deflection with temperature rise, indicating consistent thermal expansion behavior across the material systems studied. This linear relationship is valuable for predictive analysis and design modifications.
