---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/06-delamination-criteria"
section: "Delamination Failure Criteria"
order: 6
tags:
  - "engineering/composite-materials"
  - "engineering/delamination"
  - "engineering/fracture-mechanics"
  - "engineering/interlaminar-failure"
summary: "Comprehensive review of criteria for both delamination initiation using stress-based approaches and delamination growth using strain energy release rate concepts."
formulas:
  - id: "F7"
    name: "Hashin Delamination Initiation Criterion"
    expr: "(σ₃/Zₜ)² + (σ₂₃/S₂₃)² + (σ₃₁/S₃₁)² ≥ 1"
  - id: "F8"
    name: "Single Mode Delamination Growth Criterion"
    expr: "Gᵢ ≥ Gᵢc; Gᵢᵢ ≥ Gᵢᵢc; Gᵢᵢᵢ ≥ Gᵢᵢᵢc"
  - id: "F9"
    name: "Power-Law Mixed-Mode Delamination Growth"
    expr: "(Gᵢ/Gᵢc)^m + (Gᵢᵢ/Gᵢᵢc)^n + (Gᵢᵢᵢ/Gᵢᵢᵢc)^p ≥ 1"
  - id: "F10"
    name: "Benzeggagh-Kenane B-K Criterion"
    expr: "Gₜ ≥ Gᵢc + (Gᵢᵢc - Gᵢc)[Gᵢᵢ/(Gᵢ + Gᵢᵢ)]^g"
---

## Overview

A number of criteria have been proposed to predict the initiation and growth of delamination. These criteria use combinations of through-thickness tensile and shear parameters, typically in linear, quadratic or curve-fit relationships.

## Delamination Initiation Criteria

Delamination initiation criteria predict when separation begins between layers of a composite laminate. These criteria all use combinations of the through-thickness tensile and shear parameters.

### Common Formulations

**Simple Approaches:**

```
Max-stress criterion: σ₃ ≥ Zₜ; σ₃₁ ≥ S₃₁; σ₂₃ ≥ S₂₃
```

**Quadratic Interaction:**

```
Hashin [1980]: (σ₃/Zₜ)² + (σ₂₃/S₂₃)² + (σ₃₁/S₃₁)² ≥ 1
Ochoa-Engblom [1987]: (σ₃/Zₜ)² + (σ₂₃² + σ₃₁²)/S₂₃² ≥ 1
Brewer-Lagace [1988]: (σ₂₃/S₂₃)² + (σ₃₁/S₃₁)² + (σ₃⁺/Zₜ)² + (σ₃⁻/Zc)² ≥ 1
```

where σ₃⁺ represents positive (tensile) through-thickness stress and σ₃⁻ represents negative (compressive) through-thickness stress.

### Advanced Initiation Criteria

More sophisticated approaches include:
- **Considerations of fibre direction stress** (Tsai, Tong-Tsai, Degen-Tsai, Norris variants)
- **Effective matrix stress from principal stresses** (Wisnom et al.)
- **Curve-fit parameters for specific materials** (Goyal et al.)

### Key Parameters

Delamination initiation criteria depend on:
- Through-thickness tensile strength (Zₜ, Zc for compression)
- In-plane shear strength (S₂₃, S₃₁)
- In-plane fibre-direction stress (for some criteria)
- Material in situ strengths where applicable

## Delamination Growth Criteria

Criteria for predicting the growth of a pre-existing delamination are based on the fracture mechanics concept of a strain energy release rate (G), in crack growth.

### Strain Energy Release Rate Components

Delamination growth is controlled by the rate of strain energy released during crack propagation. This is typically split into three components:

- **Mode I (Opening)**: Gᵢ - through-thickness tensile opening
- **Mode II (In-plane Shear)**: Gᵢᵢ - in-plane shear sliding
- **Mode III (Out-of-plane Shear)**: Gᵢᵢᵢ - out-of-plane shear sliding

The total strain energy release rate is: **Gₜ = Gᵢ + Gᵢᵢ + Gᵢᵢᵢ**

### Single Mode Approach

The simplest approach compares each mode independently to its threshold:

```
Gᵢ ≥ Gᵢc  (Mode I growth criterion)
Gᵢᵢ ≥ Gᵢᵢc  (Mode II growth criterion)
Gᵢᵢᵢ ≥ Gᵢᵢᵢc  (Mode III growth criterion)
```

where Gᵢc, Gᵢᵢc, Gᵢᵢᵢc are the fracture toughness values in the respective modes.

### Mixed-Mode Criteria

Most real delaminations involve mixed-mode loading (combinations of the three opening modes). Various approaches have been developed:

**Linear Approaches:**
- Simple weighted combinations
- Linear addition of normalized modes

**Power-Law Approaches:**
```
(Gᵢ/Gᵢc)^m + (Gᵢᵢ/Gᵢᵢc)^n + (Gᵢᵢᵢ/Gᵢᵢᵢc)^p ≥ 1
```
with m, n, p as curve-fit parameters (typically 1 or 2)

**B-K Criterion (Benzeggagh-Kenane):**
```
Gₜ ≥ Gᵢc + (Gᵢᵢc - Gᵢc)[Gᵢᵢ/(Gᵢ + Gᵢᵢ)]^g
```
where g is a curve-fit parameter derived from experimental testing

### Mode III Complexity

It is interesting to note the different methods for handling the mode III component:
- Some authors ignore the contribution
- Others perform 2D analyses considering only modes I and II
- Some combine mode II and III components into a single G value for shear
- Others treat mode III as acting identically to mode II

These differences are due to:
- Difficulty in obtaining pure mode III crack growth in experiment
- Debate over whether mode III is a separate mode or acts with mode II
- Absence of reliable or standardised tests for mixed mode I–III or II–III crack growth

## Important Considerations

### Advantages of Fracture Mechanics for Delamination

The fracture mechanics approach for delamination analysis provides several advantages:
- Can predict both initiation and growth in complementary framework
- Accounts for toughness properties explicitly
- Does not require assumption of initial crack size or direction
- Reduces mesh sensitivity issues compared to strength-based approaches

### Methods for Calculating Strain Energy Release Rate

A variety of methods have been developed to determine the strain energy release rate components from FE analysis results:
- J-integral method
- Equivalent domain integral
- Finite extension method
- Virtual crack extension (VCCT) method
- Crack tip element method (Davidson)

The virtual crack closure technique (VCCT) is particularly popular as it is based on simple equations and can be performed in a single FE analysis without re-meshing.

### Experimental Determination

Fracture mechanics tests are classified according to the mode or combination of modes applied. Standard test configurations include:
- Double cantilever beam (DCB) for Mode I
- End-notched flexure (ENF) for Mode II
- Mixed-mode bending (MMB) for combined I/II loading

However, reliable testing for modes involving III are less standardised.
