---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/09-discussion-and-conclusions"
section: "Discussion and Conclusions"
order: 9
tags:
  - "engineering/composite-materials"
  - "engineering/failure-criteria"
  - "engineering/material-characterisation"
  - "engineering/damage-prediction"
summary: "Summary discussion contextualizing various failure theories within the dissipated energy density framework, key findings from World-Wide Failure Exercise, and outlook for 6-DOF characterization methodology."
formulas:
  - id: "F13"
    name: "World-Wide Failure Exercise Accuracy"
    expr: "Even most accurate theories predicted final fracture strength within ±50% for 85% of test cases"
---

## Context of DED Framework

In order to assess the different approaches for failure predictions and damage modelling, it is necessary to put all considerations within the context of the development of DED. As previously explained, it has been demonstrated that DED can be reliably determined from experimental testing for any material, and measures the cumulative irreversible effects of all damage mechanisms. This has been implemented within an automated, data-driven material characterisation methodology to define the development of damage, and the subsequent loss in material performance, as a function of strain.

Current work is aimed at extending this approach to develop a characterisation methodology for composite materials to define behaviour leading up to and including failure. As part of this, it is necessary to consider the range of damage predictions and modelling approaches in the literature, in order to highlight approaches that are suitable for predicting composite failure and are applicable within the current DED framework.

## Applicability of Failure Criteria to DED Framework

In terms of applicability within the framework of DED, most failure theories and criteria are suitable in this respect due to their operation within the stress space. The DED approach has been incorporated into a fully nonlinear constitutive behaviour, which describes a stress–strain relationship that is dependent on the DED function, which itself is similar to a characterised material property.

**Key Advantage:** In this manner, most criteria can be applied in combination with the DED framework, in terms of monitoring and representing failure throughout the analysis.

## Reducibility of Failure Criteria

Furthermore, in a companion paper it is shown that various criteria can be reduced to one another, and that under specific conditions most failure criteria and theories are actually constrained renderings of criteria based on energy density. This type of construction allows current failure theories to be reformulated within energy density terms.

### Implication for DED Implementation

The relationship between failure criteria and energy density concepts suggests that:
- Failure prediction can be consistently incorporated into energy-based frameworks
- Multiple failure theories may be alternative formulations of similar physical concepts
- The energy density approach provides a unifying theoretical basis
- Practical implementation flexibility is maintained while preserving theoretical rigor

## Consistent Application with DED

In order to be consistent with the application of DED within the constitutive relationship, it may be more suitable to simply monitor various failure criteria to predict final failure. This type of analysis would be dependent on completely characterising the DED function in all six degrees of freedom (DOF) up until failure.

### Comprehensive 6-DOF Approach

A 6-DOF DED function would:
- **Obviate the need** for any further damage modelling (ply damage, delamination modelling)
- **Implicitly include** all damage types within the DED function
- **Simplify implementation** by using single comprehensive material characterization
- **Require extensive testing** across all six DOF space

A fully automated 6-DOF testing machine developed at NRL for this purpose will be applied to investigate irreversible damage development under a wide range of loading conditions up until and including failure.

## World-Wide Failure Exercise Results

Comparing the different failure criteria with each other is a difficult task, which requires extensive experimental data across the full range of possible loading scenarios. The context of failure prediction within a given analysis is also important, particularly:
- Definition of failure or critical failure mechanisms
- Level of detail required
- Size and complexity of the problem
- Availability of material data

This process is further complicated by:
- Vast number of theories and criteria available in literature
- Necessary use of curve-fitting or 'tuning' in any analysis
- Subjective nature of comparison itself

### WWFE Overview

A notable effort in this regard has been the World-Wide Failure Exercise (WWFE) organised by Hinton et al. This exercise:
- **Spanned 12 years** of collaborative research
- **Compared 19 leading failure theories**
- **Tested 14 biaxial test cases** covering different materials, laminates and load cases
- **Made predictions both with and without** experimental data access
- **Ranked criteria** in categories including accuracy, tuning requirements, and applicability

### Key WWFE Findings

**Identified Promising Methods:**
1. Puck
2. Zinoviev (maximum stress approach)
3. Tsai
4. Cuntze
5. Bogetti (3D maximum strain approach)

**Accuracy Limitations:**
```
Even most accurate theories predicted final fracture strength 
of multi-directional laminates within ±50% for 85% of test cases
```

**Important Observations:**
- Predictions at lamina level were more accurate than at laminate level
- Multi-directional interactions introduce significant uncertainty
- Some issues existed with experimental data quality and completeness
- Exercise was highly valuable despite limitations

### Future WWFE Initiatives

Two further exercises are currently planned:
- **WWFE-II**: Addresses shortcomings in current theories considering triaxial loadings
- **WWFE-III**: Focuses on damage and associated modelling techniques

## Current State of the Art Assessment

### Strength-based Approaches
- **Well-established** with clear physical interpretation
- **Generally applicable** across different materials and scales
- **Limited in predicting** damage progression and growth
- **Relatively simple** to implement in standard FE codes

### Fracture Mechanics Approaches
- **Powerful for delamination** and crack growth prediction
- **Complementary to strength-based** for complete failure analysis
- **Computationally intensive** for propagation problems
- **Requires pre-existing crack** assumption

### Damage Mechanics Approaches
- **Flexible framework** encompassing multiple damage types
- **Can represent damage evolution** with material property degradation
- **Requires careful calibration** of damage parameters
- **Can lead to artificial tuning** if not carefully applied

### Hybrid Approaches (e.g., DED)
- **Bridges physics-based and data-driven** methodologies
- **Captures cumulative damage effects** without explicit mechanism identification
- **Requires automated testing** infrastructure for practical application
- **Promising for comprehensive** failure prediction

## Synthesis Recommendations

### For Practical Implementation

1. **Use combined methodology**: Strength-based initiation followed by fracture mechanics for growth
2. **Apply appropriate criteria**: Select failure mode criteria matching expected damage mechanisms
3. **Validate experimentally**: Compare predictions with testing at relevant scales
4. **Avoid excessive tuning**: Use sound engineering judgment; resist calibrating away incorrect predictions
5. **Consider length scales**: Explicitly address scale effects in analysis

### For Future Development

1. **Improve multi-directional laminate prediction**: Current theories show ±50% scatter
2. **Establish length scale links**: Better connect sub-ply, ply, laminate, and structural levels
3. **Develop standardised testing**: Complete standardisation for all fracture mechanics modes
4. **Extend triaxial understanding**: WWFE-II, WWFE-III address these critical gaps
5. **Implement 6-DOF characterisation**: Move toward comprehensive DED-based approaches

## Conclusions

A comprehensive review has been conducted of methodologies for modelling constitutive behaviour and failure in fibre-reinforced polymer composites. This review was part of a project to extend an approach developed at NRL for data-driven characterisation of composite material systems that is based on the application of DED.

### Review Scope

**Constitutive Modelling:**
- Methods were classified as explicit, implicit, or hybrid
- Physical basis versus approximation-based formulations were examined
- DED approach represents successful hybrid framework

**Failure Mechanisms:**
- Four primary mechanisms identified: fibre failure, matrix cracking, buckling, delamination
- Interactive nature of mechanisms emphasised
- Composite viewed as structure rather than simple material

**Failure Criteria:**
- Comprehensive categories: fibre, matrix, shear, ply, delamination initiation/growth
- Distinction between tension and compression formulations noted
- WWFE identified most promising approaches

**Damage Modelling:**
- All approaches relate to damage mechanics framework
- Progressive damage, interface elements, and fracture mechanics reviewed
- Trade-offs between simplicity, accuracy, and computational cost examined

**Length Scale Issues:**
- Critical for composite analysis from sub-ply to component level
- Scale-dependent phenomena must be recognized
- Explicit consideration of length scales essential for validation

### Key Findings

1. **Most criteria applicable to DED**: Due to stress-space operation, criteria can be incorporated into DED constitutive framework
2. **Theoretical reducibility**: Various criteria reduce to energy-density-based formulations under specific conditions
3. **Complementary approaches**: Strength-based initiation and fracture mechanics growth provide comprehensive framework
4. **Length scale importance**: Understanding and accounting for scale effects is critical
5. **WWFE limitations**: Even best methods show ±50% scatter on multi-directional laminates

### Future Outlook

The successful application of a 6-DOF material characterisation approach based on DED is promising for comprehensive failure prediction. The fully automated 6-DOF loading machine developed at NRL will enable investigation of irreversible damage development under wide range of loading conditions up to and including failure, providing the experimental foundation for advanced characterisation methodologies.
