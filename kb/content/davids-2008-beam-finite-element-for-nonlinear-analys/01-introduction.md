---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/01-introduction"
section: "Introduction"
order: 1
tags:
  - "engineering/finite-element-method"
  - "engineering/pressurized-structures"
  - "engineering/fabric-beams"
  - "engineering/inflatable-structures"
summary: "Overview of pressurized fabric beams and arches, challenges in structural analysis including fabric wrinkling, and the development of a Timoshenko beam element for nonlinear analysis."
formulas: []
---

## Context and Applications

Pressurized fabric beams and arches are structural elements used to support tent structures designed for military and civilian applications. These members are circular in cross-section and typically fabricated from:

- Continuously woven or braided fabric tube
- Internal impermeable bladder
- Provide internal pressure that pre-stresses the fabric to carry additional compressive stress from external loads

### Advantages of Pressurized Fabric Structures
- Light weight
- Minimal packed volume
- Rapid deployment

## Key Analysis Challenges

### 1. Large Shear Deformations
Inflated beams constructed from 0°–90° woven fabric undergo large shear deformations due to the woven fabric's low effective shear modulus. This necessitates the use of Timoshenko beam theory rather than Euler-Bernoulli theory.

### 2. Fabric Wrinkling
Wrinkling of the fabric under bending-induced compressive strain represents a form of local compressive buckling that results in:
- Nonlinear load–deformation response
- Gradual softening behavior

This softening is countered by the stiffening effect of the internal pressurized air.

## Prior Research Gaps

Prior studies have made significant contributions but left important gaps:

- **Wood [1958] and Reissner [1959]**: Examined inflated fabric tubes with emphasis on cross-sectional flattening
- **Comer and Levy [1963]**: Studied deflections of inflated cantilever beams after wrinkling
- **Webber [1982]**: Extended work to predict collapse loads
- **Main et al. [1994, 1995]**: Improved approaches by considering biaxial stress effects on wrinkling, formalized nonlinear moment–curvature relationships

**Critical gap**: None of these initial studies developed general structural analysis techniques, focused on low-pressure thin-film membranes, or considered the stiffening effects of internal pressure.

### More Recent Work (Linear Analysis)
- **Steeves [1975, 1978]**: Developed linear pressurized fabric beam element with pressure stiffening term (treats axial pressure resultant as externally applied stiffening tension force)
  - Limitation: Unrealistically predicts unbounded increase in beam stiffness with increasing pressure

- **Wielgosz and Thomas [2002, 2003]; Thomas and Wielgosz [2004]**: Studied highly inflated fabric tubes using Timoshenko beam theory with pressure as a follower force
  - Limitation: Did not consider fabric wrinkling

### Global Buckling Research
Limited investigation into flexural buckling of pressurized columns:
- **Fichter [1966]**: Analyzed inflated cylindrical beams using shell theory, derived analytical equation for buckling load using minimum potential energy
- **Molloy et al. [1999]**: Used shell FE analysis for buckling of leaning inflated fabric arches
- **Plaut et al. [2000]**: Formulated linear governing equations and developed Rayleigh–Ritz solutions
- **LeVan and Wielgosz [2005]**: Introduced finite rotations and energy approach for analytical buckling studies

## Research Objectives

This paper addresses the need for efficient numerical techniques that account for:
1. Shear deformations (Timoshenko beam theory)
2. Fabric wrinkling and resulting nonlinear load–deformation response
3. Stiffening effect of internal pressure on both shear and bending response
4. Work done by pressure under deformation-induced volume changes

The paper presents:
- A Timoshenko beam element based on incremental virtual work principle
- Explicit inclusion of work done by pressure under volume changes
- Numerical method for developing pressure-dependent, nonlinear moment–curvature relationships
- Experimental validation via four-point bending tests
- Analysis of flexural buckling in pressurized fabric columns and beam–columns
