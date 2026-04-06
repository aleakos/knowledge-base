---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/01-introduction-composites-and-motivation"
section: "Introduction: Composites and Research Motivation"
order: 1
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/composite-materials"
summary: "Overview of composite material scales of analysis, textile architecture types, yarn deformation mechanisms, and motivation for developing a new 3D beam element with deformable cross-section."
formulas: []
---

# Introduction: Composites and Research Motivation

## Composite Material Overview

A composite material is a combination of two or more materials that, when combined, give properties superior to the individual components. The two main constituents are:
- **Reinforcement**: load-carrying phase (fibers, particles, whiskers)
- **Matrix**: binding phase (polymer, metal, or ceramic)

### Textile Architectures

Relevant to composite reinforcements:
- **Woven**: Warp and weft yarns interlaced (plain weave, twill, satin, and multilayer interlock variants)
- **Braided**: Yarns interlaced diagonally; good torsional resistance
- **Non-crimp (NCF)**: Layers stitched together without weaving; fibers are straight
- **Weft-knitted**: Looped yarn structure

## Scales of Analysis

Textile composites are modeled at three scales:

| Scale | Physical Level | Size Range | Elements Used |
|---|---|---|---|
| Microscopic | Individual fibers | ~7 µm diameter | 3D beam or digital elements |
| Mesoscopic | Yarns/tows | 1–few mm | Beam, shell, or solid elements |
| Macroscopic | Whole component | Centimeters to meters | Continuum shell/solid elements |

**This thesis operates at the mesoscopic scale**: yarns modeled as structural elements, capturing transverse deformation that classical beam theories cannot.

## Yarn Deformation Mechanisms

Classical beam elements cannot model these critical yarn behaviors:

1. **Tensile deformation**: Non-linear initial response (fiber untwisting) followed by linear; stiffness expressed in N (not Young's modulus) to avoid need for exact cross-section area

2. **Bending deformation**: Very low effective bending stiffness due to inter-fiber sliding; bending stiffness much lower than implied by yarn geometry and fiber modulus

3. **Transverse shearing**: Two modes — transverse shearing (cross-section shape change) and longitudinal shearing (fibers sliding along yarn axis); both controlled by inter-fiber friction

4. **Transverse compaction**: Highly non-linear; initially low resistance as voids between fibers close; increases sharply as fibers come into contact; compaction affects permeability for resin infusion and changes fiber volume fraction

## Motivation

Classical beam theories (Euler-Bernoulli and Timoshenko) both assume **rigid cross-section**:
- Cannot describe transverse compression of the yarn
- Cannot model cross-section shape change
- Full 3D constitutive law cannot be applied

Shell element models can capture these effects but at higher computational cost. Solid element models are most general but extremely expensive for yarn-scale modeling.

**The thesis proposes a new 3D beam element** that:
- Retains the efficiency of beam elements for slender structures
- Adds deformable cross-section capability through an extra mid-node
- Enables use of full 3D constitutive relations (including transverse stress components)
- Is intended for mesoscopic modeling of yarns in textile composite preforms

## Thesis Structure

1. **Chapter 2**: Development of new 2D then 3D beam element with deformable cross-section; validation for linear small-strain conditions
2. **Chapter 3**: Extension to large displacements/small strains using Updated Lagrangian formulation; validation with ABAQUS
3. **Chapter 4**: Beam-to-beam contact formulation with rectangular cross-section; Hermite smoothing; numerical examples
4. **Chapter 5**: Conclusions and future work
