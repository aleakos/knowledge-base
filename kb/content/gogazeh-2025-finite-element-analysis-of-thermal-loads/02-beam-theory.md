---
parent_id: "gogazeh-2025-finite-element-analysis-of-thermal-loads"
chunk_id: "gogazeh-2025-finite-element-analysis-of-thermal-loads/02-beam-theory"
section: "Beam Behavior Under Theoretical Structural Loads"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/deflection-analysis"
  - "engineering/structural-mechanics"
summary: "Derivation and theoretical analysis of beam deflection equations using singularity method for simply supported beams"
formulas:
  - id: "B1"
    name: "Maximum deflection for simply supported beam with central load"
    expr: "Y(1.5) = -52.07 mm"
---

# Beam Behavior Under Theoretical Structural Loads

This section covers the derivation of theoretical equations for beam deflection and analysis of all parameters affecting deflection values.

## Derivation of Deflection Equation for Simply Supported Beam

The singularity method is employed to derive the deflection equation for a simply supported beam. This method provides a systematic approach to calculating deflection profiles under various loading conditions.

### Simply Supported Beam Configuration

A simply supported beam configuration consists of:
- Two pin supports at each end allowing free rotation
- A concentrated load applied at the midpoint
- Uniform geometry along the span

## Verification of Computational Results

### Analytical Calculation Parameters

The maximum deflection is computed mathematically using theoretical equations and compared with results obtained from computational software (Prokon).

**Material and Geometric Properties:**
- Cross section: Rectangular
- Second moment of inertia: I = 5.27 × 10⁻⁶ mm⁴
- Modulus of elasticity (E): 205 GPa
- Beam length: 3 m
- Load application point: x = 1.5 m (center)
- Single concentrated load (P): 100 kN

### Calculated Results

Maximum deflection at center:

```
Y(1.5) = -52.07 mm
```

This deflection value serves as a baseline for comparison with finite element analysis results and provides verification of the theoretical beam equations under standard loading conditions.

## Methodology

Free-body diagrams are used throughout to determine external and internal forces. The use of drawing and analysis programs helps in understanding:
- Superposition of loadings
- Resulting stresses and deformations
- Comparative analysis across different support configurations

The theoretical framework established here provides the foundation for subsequent finite element analysis validation and thermal load investigations.
