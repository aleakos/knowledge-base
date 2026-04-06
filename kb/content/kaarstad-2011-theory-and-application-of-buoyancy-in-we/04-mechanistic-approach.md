---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/04-mechanistic-approach"
section: "Mechanistic Approach to Tubular Failure"
order: 4
tags:
  - "engineering/drilling"
  - "engineering/failure-analysis"
  - "engineering/mechanics"
summary: "Stress state decomposition into hydrostatic and deviatoric components, pipe stress equations for thick-walled cylinders, and failure criteria for metals vs rocks."
formulas:
  - id: "F6"
    name: "Principal stress characteristic equation"
    expr: "σ³ - I₁σ² - I₂σ - I₃ = 0"
  - id: "F7"
    name: "Deviatoric stress decomposition"
    expr: "σ_deviatoric = σ_total - σ_hydrostatic"
  - id: "F8"
    name: "Second deviatoric stress invariant"
    expr: "J₂ = -1/6 [(σ₁ - σ₂)² + (σ₁ - σ₃)² + (σ₂ - σ₃)²]"
  - id: "F9"
    name: "Radial and tangential stresses for thick-walled cylinder"
    expr: "σ_r,t = p_i + (p_o - p_i)[r_i²/(r_o² - r_i²)][1 ± (r_i/r)²]"
  - id: "F10"
    name: "Average cross-sectional stress (stability force)"
    expr: "(σ_t + σ_r)/2 = (p_o r_o² - p_i r_i²)/(r_o² - r_i²)"
---

# Mechanistic Approach to Tubular Failure

## Definitions of Tubular Failure

An object may be subjected to compressive, tensile, bending and/or torsional load. From the following equation the magnitude of the principal stresses may be determined:

```
σ³ - I₁σ² - I₂σ - I₃ = 0
```

where I₁, I₂ and I₃ are the stress invariants.

## Stress Decomposition

A total stress state can be decomposed into a hydrostatic and a deviatoric stress component:

```
σ_deviatoric = σ_total - σ_hydrostatic
```

A principal stress equation similar to above results, but now the invariants are defined as J₁, J₂ and J₃. In particular, J₂ is used for failure considerations:

```
J₂ = -1/6 [(σ₁ - σ₂)² + (σ₁ - σ₃)² + (σ₂ - σ₃)²]
```

The principal stresses (σ₁, σ₂, σ₃) are defined by the tangential, radial and axial stress components. Some variants of J₂ are the octahedral shear stress, the von Mises and the Henky-von Mises failure models.

## Failure Behavior by Material Type

Metals like steel are very strong if loaded hydrostatically, and an eventual failure is due to shear or distortion. Soft rocks, on the other hand, may also fail due to hydrostatic loading.

| Material | Failure Type | Criterion |
|----------|-------------|-----------|
| Metals | Shear | J₂ |
| Metals | Tension | J₂ |
| Metals | Buckling | J₂ |
| Metals | Collapse | J₂ |
| Rocks | Any | J₂ or I₁ |
| Soft materials | Any | J₂, J₃ or I₁ |

## Pipe Stresses in Thick-Walled Cylinders

The radial and tangential stresses on a thick-walled cylinder can be expressed as:

```
σ_r,t = p_i + (p_o - p_i) * [r_i²/(r_o² - r_i²)] * [1 ± (r_i/r)²]
```

One important property of these equations is that the sum of the tangential and the radial stresses are constant across the cross-sectional area of the cylinder:

```
(σ_t + σ_r)/2 = (p_o r_o² - p_i r_i²)/(r_o² - r_i²)
```

This result has many important implications:

1. Comparing the generalized law of Archimedes to the average cross-sectional stress, they are similar
2. The average cross-sectional stress is identical to the "stability forces" or "fictitious forces" used in buckling analysis
3. Using the piston force approach and subtracting this average hydrostatic stress gives the law of Archimedes
4. This stress can be defined as the average hydrostatic stress

## Key Insight

By solving for the deviatoric stress and subtracting the average hydrostatic stress, we obtain the same axial stress as given by the Archimedes' principle. This stress assessment is valid for all types of failure considerations: shear failure, tensile failure, pipe buckling, and collapse of pipe.
