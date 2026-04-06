---
parent_id: "taler-2017-simple-heat-transfer-correlations-for-tu"
chunk_id: "taler-2017-simple-heat-transfer-correlations-for-tu/03-proposed-correlations"
section: "Simple Power-Type Correlations"
order: 3
tags:
  - "engineering/heat-transfer"
  - "engineering/correlations"
  - "engineering/turbulent-flow"
summary: "Three simple power-type heat transfer correlations for different Prandtl number ranges"
formulas:
  - id: "F1"
    name: "Correlation for low Prandtl numbers"
    expr: "Nu = 0.02155 Re^0.8018 Pr^0.7095"
  - id: "F2"
    name: "Correlation for medium Prandtl numbers"
    expr: "Nu = 0.01253 Re^0.8413 Pr^0.6179"
  - id: "F3"
    name: "Correlation for high Prandtl numbers"
    expr: "Nu = 0.00881 Re^0.8991 Pr^0.3911"
  - id: "F4"
    name: "Finite tube length correction"
    expr: "Nu = c_1 Re^c_2 Pr^c_3 [1 + (d_w/L)^(2/3)]"
---

# Simple Power-Type Correlations

## Three Proposed Correlations

Based on least squares fitting of Nusselt numbers obtained from numerical solution of the energy conservation equation, three simple power-type correlations are proposed for different Prandtl number ranges.

### Correlation 1: Low Prandtl Numbers (0.1 ≤ Pr ≤ 1.0)

```
Nu = 0.02155 Re^0.8018 Pr^0.7095
Valid for: 3·10³ ≤ Re ≤ 10⁶, 0.1 ≤ Pr ≤ 1.0
```

**Characteristics:**
- Power exponents for Reynolds and Prandtl numbers are nearly equal (0.8018 vs 0.7095)
- Applicable to liquid metals with Pr < 0.1
- Both exponents contribute substantially to Nusselt number variation

### Correlation 2: Medium Prandtl Numbers (1.0 < Pr ≤ 3.0)

```
Nu = 0.01253 Re^0.8413 Pr^0.6179
Valid for: 3·10³ ≤ Re ≤ 10⁶, 1.0 < Pr ≤ 3.0
```

**Characteristics:**
- Reynolds exponent increases to 0.8413
- Prandtl exponent decreases to 0.6179
- Intermediate regime between low and high Prandtl numbers

### Correlation 3: High Prandtl Numbers (3.0 < Pr ≤ 1000)

```
Nu = 0.00881 Re^0.8991 Pr^0.3911
Valid for: 3·10³ ≤ Re ≤ 10⁶, 3.0 < Pr ≤ 1000
```

**Characteristics:**
- Reynolds exponent reaches maximum (0.8991), approaching 0.9
- Prandtl exponent decreases significantly to 0.3911
- Applicable to water and oils at typical temperatures

## Analysis of Exponent Behavior

The analysis of correlations 1-3 shows that:

1. **Reynolds Number Dependence**: Power exponent increases with Prandtl number
   - Low Pr: Re^0.80 (approximately equal contribution from Re and Pr)
   - Medium Pr: Re^0.84
   - High Pr: Re^0.90 (nearly proportional to Re)

2. **Prandtl Number Dependence**: Power exponent decreases with Prandtl number
   - Low Pr: Pr^0.71
   - Medium Pr: Pr^0.62
   - High Pr: Pr^0.39 (weak dependence)

This reflects the physics: for high Prandtl fluids (thick thermal boundary layer), heat transfer is dominated by convection (Re dependence), while for low Prandtl fluids, both convection and diffusion contribute significantly.

## Finite Tube Length Correction

For tubes of finite length, the correlations can be modified by including the same multiplier as in the Gnielinski formula:

```
Nu = c_1 Re^c_2 Pr^c_3 [1 + (d_w/L)^(2/3)]
```

This accounts for entrance effects and developing flow conditions.

## Advantages Over Classical Correlations

- **Simplicity**: Direct power functions without additional friction factor calculations
- **Accuracy**: Comparable to or better than Dittus-Boelert
- **Broad Range**: Valid across 3 orders of magnitude for Reynolds and Prandtl numbers
- **Physical Basis**: Derived from numerical solution of fundamental energy equation
- **Practical Use**: Easier computational implementation than Gnielinski
