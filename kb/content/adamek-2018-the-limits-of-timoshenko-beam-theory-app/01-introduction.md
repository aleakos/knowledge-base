---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/01-introduction"
section: "1. Introduction"
order: 1
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/layered-beams"
  - "engineering/sandwich-beam"
  - "engineering/FSDT"
  - "engineering/literature-review"
summary: "Literature review of beam theories for layered beams and motivation for comparing FSDT against exact 2D theory for impact problems."
formulas: []
---

# 1. Introduction

Beams and beam-like structures are widely used in automotive industry, civil engineering, aerospace, and naval engineering. Due to their advantageous mechanical properties and possibility to be designed for a specific purpose, layered beams (especially laminated beams) are of enormous interest across many decades.

## Hierarchy of Beam Theories

To handle investigation of beam responses under static and dynamic loadings and to avoid the unnecessary complexity of the exact three-dimensional approach, many simplified one-dimensional (1D) beam theories have been developed:

1. **Euler-Bernoulli theory** — most simple, suitable for very thin beams
2. **Rayleigh theory** — takes into account the effect of rotary inertia
3. **Timoshenko theory (FSDT)** — includes both rotary inertia and shear effect; generalised over time to higher-order theories describing warping, etc.

The original Timoshenko theory, also called **first-order shear deformation theory (FSDT)**, remains one of the most used beam theories. It can give inaccurate results when a beam is composed of layers with totally different stiffnesses (discussed for static three-point bending in the literature).

## Alternative Theories for Layered Beams

For cases where FSDT is insufficient, alternatives include:

- **Zig-zag theories** — capture layer-wise effects at the interface
- **Layerwise theories (LWT)** — combine different theories per layer (Euler-Bernoulli + Euler-Bernoulli, Rayleigh + Timoshenko, Euler-Bernoulli + exact 2D elasticity, etc.)

## Solution Methods

Common methods for solving layered beam problems include:
- Dynamic stiffness matrix method
- Differential transform method
- Transfer matrix method
- Wave propagation method
- Navier solution procedure
- Integral transform method
- Fourier series + Galerkin method combination

Some approaches yield closed-form solutions advantageous for optimal design and vibration/damping analysis.

## Applications of Three-Layered Beams

Three-layered beams and plates have found application in:
- Bridge constructions
- Constrained layer damping structures
- Car windshields and laminated glass panels for architecture
- Photovoltaic panels

The most discussed group is **sandwich beams**, where an elastic or viscoelastic core is sandwiched by thin elastic layers, yielding a good ratio between weight, bending stiffness, and buckling resistance.

## Aim of This Study

This study solves the problem of an **infinite three-layered elastic beam of symmetric composition** under impact loading using:
1. Equivalent single-layer FSDT (with variable Timoshenko shear factor)
2. Exact 2D theory of elasticity (plane stress)

The FSDT results are directly compared to the exact 2D results — an approach not common in the literature, where simplified theories are usually validated only against other simplified theories, numerical solutions, or experimental data.

Crucially, the solutions are **not frequency restricted from above**, enabling investigation of instant beam responses directly after high-frequency impact loads and analysis of non-stationary flexural and 2D wave propagation.
