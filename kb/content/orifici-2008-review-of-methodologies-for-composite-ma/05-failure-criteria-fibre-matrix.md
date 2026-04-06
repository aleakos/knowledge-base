---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/05-failure-criteria-fibre-matrix"
section: "Failure Criteria: Fibre and Matrix Failure"
order: 5
tags:
  - "engineering/composite-materials"
  - "engineering/failure-criteria"
  - "engineering/structural-analysis"
summary: "Comprehensive review of failure criteria for fibre and matrix failure in composite plies, including tension, compression, and general formulations with equations and material parameters."
formulas:
  - id: "F3"
    name: "Hashin 3D Fibre Tension Criterion"
    expr: "(σ₁/Xₜ)² + (1/S₁₂²)(σ₁₂² + σ₁₃²) ≥ 1"
  - id: "F4"
    name: "Hashin 2D Fibre Tension Criterion"
    expr: "(σ₁/Xₜ)² + (σ₁₂/S₁₂)² ≥ 1"
  - id: "F5"
    name: "Hashin-Rotem Matrix Tension Criterion"
    expr: "(σ₂/Yₜ)² + (σ₁₂/S₁₂)² ≥ 1"
  - id: "F6"
    name: "Tsai-Wu Interactive Failure Criterion"
    expr: "(1/Xₜ - 1/Xc)σ₁ + (1/Yₜ - 1/Yc)σ₂ + σ₁²/(XₜXc) + σ₂²/(YₜYc) + (σ₁₂/S₁₂)² + 2f₁₂σ₁σ₂ ≥ 1"
---

## Overview

The development of failure criteria for composite materials has been actively pursued for over 30 years by researchers around the world, and there are countless theories available in the literature. This section reviews key failure criteria and their mathematical formulations.

## Nomenclature and Conventions

In the failure criteria presented:
- **σ, τ, ε, c** are used for stress and strain in the normal and shear directions
- **X, Y, Z, S** are strengths in the fibre, matrix, through-thickness and shear directions
- **Subscripts 1, 2, 3** refer to the fibre, transverse and through-thickness directions
- **Subscripts T and C** denote limit values in tension and compression
- **Subscript "is"** refers to in situ strengths

## In Situ Strength Concept

In situ strengths are used in a number of failure criteria, though the method for determining these values varies between papers. In situ strengths are used as it has been found experimentally that a ply embedded within a multi-directional laminate has increased transverse tensile and shear strengths as compared to the same ply in a completely unidirectional laminate. This is due to the beneficial effect of the neighbouring plies on damage within an embedded ply, and means that values taken from standardised experimental characterisation coupons, which all use unidirectional coupons, can underestimate actual ply strengths.

## Important Conceptual Point

One important point for most failure criteria is that they apply at the level of the composite ply. So, limit values such as strength or fracture toughness, though referred to as "material" properties, are actually closer to structural properties given the orthotropic nature of a ply.

## Fibre Failure Criteria

### Fibre Failure in Tension

For composite laminates, fibre failure in tension occurs due to the accumulation of individual fibre failures within plies, which becomes critical when there are not enough intact fibres remaining to carry the required loads. Most authors analysing fibre failure in tension apply a maximum strength or maximum strain criterion at each ply, using simple material limit values taken from experimental testing.

**Key Formulations:**

```
Max-stress criterion: σ₁ ≥ Xₜ
Max-strain criterion: ε₁ ≥ ε₁ₜ
```

Exceptions to simple approaches include:
- Hashin [1980] - uses quadratic interaction criterion involving in-plane shear
- Chang and Chang [1987] - incorporates nonlinear shear behaviour
- Puck and Schürmann [1998] - uses maximum strain criterion with stress magnification factor for transverse normal stress

### Fibre Failure in Compression

Fibre failure in compression occurs due to microbuckling and the formation of kink bands, and though there is still debate over whether these phenomena are separate failure modes, microbuckling is a more global failure mode whilst kinking seems to be initiated by local microstructural defects and is the most common failure feature observed after testing.

**Basic Formulation:**

```
Max-stress criterion: σ₁ ≥ Xc
Max-strain criterion: ε₁ ≥ ε₁c
```

Advanced approaches incorporate:
- Microbuckling stress calculations based on matrix properties
- Kink-band formation angles and stresses
- 3D stress state effects
- Ply thickness effects on failure mode

## Matrix Failure Criteria

### Matrix Failure in Tension

Matrix failure in laminated composites is a complex phenomenon, in which matrix cracks initiate typically at defects or fibre–matrix interfaces, accumulate throughout the laminate, and coalesce leading to failure across a critical fracture plane.

All matrix failure criteria in tension assume a critical fracture plane in the transverse tension direction, and generally involve an interaction between the tensile normal and in-plane shear stresses.

**Key Formulations:**

```
Max-stress criterion: σ₂ ≥ Yₜ
Max-strain criterion: ε₂ ≥ ε₂ₜ
Hashin-Rotem quadratic: (σ₂/Yₜ)² + (σ₁₂/S₁₂)² ≥ 1
```

Refinements include:
- Nonlinear shear terms
- In situ transverse tensile and shear strengths
- Incorporating crack density
- Through-thickness shear and strength terms
- Fracture mechanics terms from consideration of cracked ply

### Matrix Failure in Compression

The criteria for matrix failure in compression are similar to those for tension failure, except that the critical fracture plane is not assumed by all authors.

**Typical Range:**

```
Max-stress criterion: σ₂ ≥ Yc
Hashin-Rotem quadratic: (σ₂/Yc)² + (σ₁₂/S₁₂)² ≥ 1
```

Notable aspects:
- Fracture plane angle commonly ~53° ± 2°, explained by compressive stress causing friction
- Some criteria assume zero fracture plane angle
- Others predict fracture plane angle from stress state

## Interactive Failure Criteria

Several authors have proposed criteria in which the separate ply failure modes are not considered, and failure of the entire ply is predicted. The so-called "fully interactive" criteria such as Tsai and Wu create a failure surface, usually in stress space, using all available strength data.

**Key Interactive Criteria:**

```
Tsai-Hill [1965]: (σ₁/X)² + (σ₂/Y)² + (σ₁₂/S)² - (σ₁σ₂/X²) ≥ 1
Hoffman [1967]: Based on different tensile/compression strengths
Tsai-Wu [1971]: Includes interaction parameter f₁₂
```

### Assessment of Interactive Criteria

Ply failure criteria are more suited and almost always applied in situations where delamination can be ignored. It is interesting to note that interactive criteria such as Tsai–Wu are often criticised due to their lack of phenomenological basis and origins in theories originally proposed for metals. However, interactive criteria have demonstrated accuracy comparable with leading theories in which the failure modes are considered, and continue to be commonly applied in industry and widely available in FE codes.

## Practical Considerations

### Comparison and Selection

Comparing the different failure criteria with each other is a difficult task, which requires extensive experimental data across the full range of possible loading scenarios. The context of failure prediction within a given analysis is important, particularly:
- Definition of critical failure mechanisms
- Level of detail required
- Size and complexity of the problem
- Availability of material data

### World-Wide Failure Exercise (WWFE)

A notable effort to compare failure criteria has been the World-Wide Failure Exercise (WWFE) organised by Hinton et al., which spanned 12 years and compared 19 leading failure theories for 14 biaxial test cases. The exercise identified five promising methods: Puck, Zinoviev, Tsai, Cuntze and Bogetti. Even the most accurate theories only predicted final fracture strength within ±50% for 85% of test cases.
