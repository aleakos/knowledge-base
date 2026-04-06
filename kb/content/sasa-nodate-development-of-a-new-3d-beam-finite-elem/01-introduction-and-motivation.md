---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/01-introduction-and-motivation"
section: "Introduction and Motivation"
order: 1
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/composite-materials"
  - "engineering/textile-composites"
summary: "Motivation for developing a 3D beam finite element with deformable cross-section for mesoscale modelling of textile composite yarns."
formulas: []
---

# Introduction and Motivation

## Research Context

This PhD thesis (INSA Lyon, 2017, LaMCoS laboratory) develops a new 3D beam finite element with deformable cross-section for mesoscale simulation of textile composite materials. The work was funded by the China Scholarship Council and supervised by Professor Emmanuelle Vidal-Salle, with inspiration from prior work by Dr. Francis Sabourin on enhanced shell elements.

## Composite Material Scales

Textile composites are analyzed at three scales:
- **Microscopic scale**: Individual fiber behavior — thousands of fibers per yarn, too fine for most engineering simulations.
- **Mesoscopic scale**: Individual yarn behavior — yarns interact as slender beams in the woven/warp-knit architecture. **This is the scale addressed by this thesis.**
- **Macroscopic scale**: Homogenized composite behavior — effective elastic properties.

### Why Mesoscale Modelling Matters

During textile forming (e.g., thermoforming a woven preform over a mould), the preform undergoes:
- Large displacements and rotations of the yarns.
- Inter-yarn contact and frictional sliding.
- Transverse compression and shape change of yarn cross-sections (oval → flattened).
- Longitudinal tensile stiffening.

These deformation mechanisms must be captured to accurately predict:
- Fibre orientation in the formed part.
- Forming defects (wrinkling, fibre buckling).
- Local fibre volume fraction after forming.

## Limitation of Classical Beam Elements

Classical beam theories (Bernoulli-Euler and Timoshenko) assume:
- **Rigid cross-section**: the cross-section does not deform in its own plane.
- This assumption eliminates transverse strains epsilon_yy, epsilon_zz, and shear strain 2*epsilon_yz.

Consequently, classical beams cannot model:
- Transverse compression of yarn cross-section.
- Poisson coupling between axial tension and transverse deformation.
- Shape change of cross-section (e.g., oval cross-section becoming circular under compressive contact).

## Proposed Solution

The thesis proposes a **new 3D beam element with deformable cross-section** that:
- Extends a standard 2-node Timoshenko beam element.
- Adds a **central node at mid-length** of the element.
- This central node introduces 8 additional degrees of freedom (DoFs) capturing the extra strain components epsilon_yy, epsilon_zz, and 2*epsilon_yz in the cross-section.
- Enables use of **full 3D constitutive laws** (including transverse and coupling terms).
- Is validated against ABAQUS 3D solid element simulations.

## Thesis Structure

1. **Chapter 2**: Linear small-strain 3D beam element development and validation.
2. **Chapter 3**: Extension to large displacements / small strains using Updated Lagrangian (U.L.) formulation.
3. **Chapter 4**: Beam-to-beam contact formulation with rectangular cross-sections using penalty method and Hermite smoothing.
