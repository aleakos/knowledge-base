---
parent_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a"
chunk_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a/01-abstract-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/structural-mechanics"
summary: "Introduction to an 8-node 3D hexahedral finite element and a 1D Timoshenko beam element, both using Hermitian interpolation, for capturing bending effects with reduced node count."
formulas: []
---

# Abstract and Introduction

**Paper:** López Machado, N.A., Vielma Pérez, J.C., López Machado, L.J., Montesinos Machado, V.V. (2022). An 8-Nodes 3D Hexahedral Finite Element and an 1D 2-Nodes Structural Element for Timoshenko Beams, Both Based on Hermitian Interpolation, in Linear Range. *Mathematics*, 10(5), 836. https://doi.org/10.3390/math10050836

## Abstract

This article presents:
1. A **3D 8-node hexahedral finite element** with 6 degrees of freedom (DOF) per node (48 DOF per element), based on third-degree Hermitian polynomials
2. A **2-node 1D structural element** with 6 DOF per node (12 DOF per element), based on third-degree Hermitian polynomials and Timoshenko beam theory

**Purposes:**
- Formulate a 3D finite element capable of capturing bending effects with only 8 nodes
- Verify whether the cross-section deformation of a structural member can be obtained from axis deformations

**Results summary:**
- Hexa 8 FE: Errors between 1% and 4% vs. ANSYS (educational version)
- 1D Timoshenko element: Axis errors of 6–7%, cross-section shape errors of 10–20%

## Introduction

### Context and Motivation

Modern structural analysis commonly models beams with 3D finite elements or 1D beam elements:
- **3D FE (hexahedra/tetrahedra)**: Typically 3 DOF per node; captures cross-section deformation and steel reinforcement in concrete beams; computationally expensive
- **1D FE**: 6 DOF per node (axial, shear, bending); efficient but cross-section deformation is captured only through geometric properties

For buildings, cross-section deformation is usually neglected. When needed (e.g., steel reinforcement in concrete beams), a 3D FE or fiber model is mandatory.

### Key Limitation of Standard 3D FE

Common 3D hexahedral elements use linear (2 nodes per edge) or quadratic (3 nodes per edge) shape functions with only 3 DOF per node (translations). Capturing bending requires at minimum quadratic polynomials, leading to 16 nodes minimum for adequate bending representation (48 equations per element, but with limited polynomial order of 2).

### Proposed Innovation

Use **Hermitian polynomial interpolation** with 6 DOF per node (3 translations + 3 rotations) in a standard 8-node hexahedral topology:
- Same 48 equations per element as a 16-node standard hexahedron
- Polynomial order 3 (vs. 2 for 16-node standard)
- Rotations are **independent DOF** (not derived from translations)

### Beam Theory Background

Two main beam theories:
- **Euler-Bernoulli**: Neglects shear deformation; valid for slender beams
- **Timoshenko**: Includes shear deformation; valid for all beam types; transverse rotation and transverse displacement are independent variables

### Related Recent Work

Recent developments cited in the paper include:
- Non-local Timoshenko formulations using Winkler-Pasternak parameters
- Theory of Functional Connections (TFC) for Timoshenko-Ehrenfest beams
- 3D nonlinear constitutive formulations without zero-stress conditions
- Interpolation functions derived from equilibrium differential equations
- Fiber-reinforced composite Timoshenko beams using Lagrangian procedure
- Inverse finite element method (iFEM) with Isogeometric Analysis (IGA)
