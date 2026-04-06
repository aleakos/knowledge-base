---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/07-multi-beam-model"
section: "Multi-Walled Timoshenko Beam Model"
order: 7
tags:
  - "engineering/multi-beam-models"
  - "engineering/van-der-waals-forces"
  - "engineering/coupled-vibration"
summary: "Coupled governing equations for multi-walled CNTs with van der Waals interaction and individual tube properties"
formulas:
  - id: "F12"
    name: "Multi-tube coupled equation for tube 1"
    expr: "ρA₁ω²w₁ - K₁GA₁(dφ₁/dx - d²w₁/dx²) = c₁(w₂ - w₁)"
  - id: "F13"
    name: "Van der Waals interaction coefficient"
    expr: "cⱼ = [320 × (2Rⱼ) erg/cm²] / (0.16D²),    D = 0.142 nm"
---

## Limitations of Single-Beam Model

The single-Timoshenko beam (STB) model has important limitations:

1. **Cannot represent individual tube behavior**: Fails to capture inter-tube relative motion
2. **Inadequate for non-coaxial vibration**: Provides only one set of n-order frequencies when there should be N sets for N tubes
3. **Boundary condition restrictions**: Only applicable when all nested tubes have the same end conditions
4. **Missing high-order frequencies**: Insufficient for predicting frequencies of CNTs with small L/d and higher-order vibration modes

For multi-walled CNTs (MWNTs), a **multi-beam model** is needed to address these limitations.

## Multi-Timoshenko Beam Model Formulation

As an improvement over the multi-Euler beam model, the **multi-Timoshenko beam model** is proposed. In this model:

- Each nanotube of an MWNT is simulated by a **Timoshenko beam** (allowing transverse shear and rotary inertia)
- Deflections of adjacent tubes are **coupled through van der Waals forces**
- Each tube's **end conditions can be specified individually**
- Provides **N sets of frequencies** for an N-tube MWNT

### Coupled Governing Equations for N-Tube MWNT

For a multi-walled CNT with N tubes, the 2×N coupled governing equations are:

**Tube 1 (innermost):**
```
ρA₁ω²w₁ - K₁GA₁(dφ₁/dx - d²w₁/dx²) = c₁(w₂ - w₁)

EI₁(d²φ₁/dx²) - K₁GA₁(φ₁ - dw₁/dx) + ρI₁ω²φ₁ = 0                (8a)
```

**Tube j (intermediate):**
```
ρAⱼω²wⱼ - KⱼGAⱼ(dφⱼ/dx - d²wⱼ/dx²) = cⱼ(wⱼ₊₁ - wⱼ) + cⱼ₋₁(wⱼ - wⱼ₋₁)

EIⱼ(d²φⱼ/dx²) - KⱼGAⱼ(φⱼ - dwⱼ/dx) + ρIⱼω²φⱼ = 0                 (8b)
```

**Tube N (outermost):**
```
ρAₙω²wₙ - KₙGAₙ(dφₙ/dx - d²wₙ/dx²) = cₙ₋₁(wₙ - wₙ₋₁)

EIₙ(d²φₙ/dx²) - Kₙ GAₙ(φₙ - dwₙ/dx) + ρIₙω²φₙ = 0                 (8n)
```

### Parameter Definitions

- Iⱼ = second moment of area of jth tube
- Aⱼ = cross-sectional area of jth tube
- Kⱼ = shear correction factor of jth tube
- cⱼ = van der Waals interaction coefficient between tubes j and j+1

Each tube has potentially different shear correction factors Kⱼ due to different cross-sectional dimensions, calculated from equation (5).

All tubes share the same:
- Young's modulus E
- Shear modulus G
- Mass density ρ

## Van der Waals Interaction Coefficients

The van der Waals interaction coefficients can be estimated as:

```
cⱼ = [320 × (2Rⱼ) erg/cm²] / (0.16D²),    D = 0.142 nm,    j = 1,2,...,N-1    (9)
```

where:
- Rⱼ = center line radius of the jth tube
- D = length of carbon-carbon (C-C) bond = 0.142 nm

### Example: Double-Walled CNT

For the double-walled CNT with R₁ = 0.35 nm:

```
c₁ = 6.943 × 10¹¹ erg/cm³ = 0.06943 TPa
```

This coefficient represents the coupling stiffness between the two tubes due to interlayer van der Waals forces.

## Advantages of Multi-Beam Model

1. **Van der Waals forces**: Takes into account interlayer interactions
2. **Individual boundary conditions**: Each tube can have different end conditions
3. **Multiple frequency sets**: Provides N sets of frequencies for N-tube MWNT
4. **Intertube relative motion**: Captures non-coaxial vibration
5. **Shear and rotary effects**: Each tube's individual properties included

## Extension to Elastic Medium

For MWNTs embedded in an elastic medium, a lateral pressure effect can be easily accommodated by adding the term kwₙ to the right-hand side of the outer tube equation, where k is the spring constant determined by:
- Material constants of elastic medium
- Outermost diameter of embedded MWNT
- Wave-length of vibrational modes
