---
parent_id: "pagani-2023-unified-onedimensional-finite-element-fo"
chunk_id: "pagani-2023-unified-onedimensional-finite-element-fo/1_introduction"
section: "Introduction and Literature Overview"
order: 1
tags:
  - "engineering/finite-element-method"
  - "engineering/hyperelasticity"
  - "engineering/soft-materials"
  - "engineering/beam-theory"
summary: "Overview of finite-strain beam theories and challenges in analyzing hyperelastic soft material structures with nearly incompressible behavior"
formulas: []
---

# Introduction and Literature Overview

Structures made of hyperelastic soft materials, such as elastomers and gels, can undergo extreme stretching before failure occurs. They are intrinsically compliant at the constitutive level and have unique elastic characteristics that can be exploited to produce functional devices such as flexible pressure sensors, soft optical composites for tunable transmittance, and electro-active tunable devices.

## Computational Challenges

A primary challenge in nonlinear finite element analysis of nearly incompressible hyperelastic materials arises from the fact that the bulk modulus is orders of magnitudes larger than the shear modulus. This creates significant numerical difficulties:

- **Volumetric locking**: Results from ill-conditioned stiffness matrices
- **Hourglass instability**: Spurious deformation modes that require stabilization

## Existing Solution Approaches

Over the past decades, various techniques have been developed to address these challenges:

**Mixed Methods**: Classical works explored application of mixed methods for dealing with the incompressibility constraint in the nonlinear regime. The seminal contribution by Simo and Armero derived a pure displacement formulation with no volumetric locking using static condensation and introducing incompatible modes and other enhancement functions within a Hu-Washizu mixed formulation.

**F Method**: More recent approaches rely on the F method, based on a local multiplicative split of the deformation gradient into volumetric and isochoric (volume-preserving) parts.

## One-Dimensional and Two-Dimensional Theories

Although the aforementioned techniques have met with success for plain-strain quadrilateral and solid finite elements, the need to develop simpler yet effective models for soft beam, plate, and shell structures is significant. However, Antman and Schuricht demonstrated that it is very complex to formulate rod and shell theories that exactly preserve incompressibility.

Recent literature includes:

- **Attard (2013)**: Comprehensive review of finite-strain beam theories
- **Chen and Wang (2014)**: Yeoh hyperelastic soft beams using inextensibility assumption
- **Lubbers et al. (2015)**: Sub-critical buckling of neo-Hookean wide beams with Reissner-Mindlin kinematics
- **Breslavsky et al. (2017, 2018)**: Static deformations and nonlinear vibrations of plates with incompressible neo-Hookean and Mooney-Rivlin materials
- **Amabili et al. (2020, 2021)**: Higher-order shell theories for incompressible hyperelastic materials
- **Pascon and Coda (2022)**: Triangular shell FE formulation for highly deformable rubber-like materials

## Proposed Approach: CUF-Based 1D Finite Element

This work introduces a unified 1D finite element for soft material structures based on the Carrera Unified Formulation (CUF). The key advantages of CUF are:

- **Recursive index notation**: Allows writing governing equations in compact form
- **Fundamental nuclei**: Independent of theory approximation order
- **Hierarchical capability**: Classical to high-order 1D approximations can be built with ease
- **Adaptability**: Although 1D, the refined element can address both slender structures and complex problems with 3D stress states

CUF has been previously extended to linear elastic geometrically nonlinear analyses of beams, plates, and shells, demonstrating capabilities for static large displacement analysis, dynamics, and laminated structures with accurate interlaminar stress fields.

## Paper Outline

The work proceeds as follows:
1. Material constitutive relations for nearly incompressible hyperelastic materials and their Jacobian tensors
2. High-order finite beam element formulation based on CUF
3. Governing equations in unified form with exact analytical expressions
4. Numerical validation through four test cases
5. Conclusions and future directions
