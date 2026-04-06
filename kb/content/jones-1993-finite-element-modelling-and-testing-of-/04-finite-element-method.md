---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/04-finite-element-method"
section: "The Finite Element Method and Its Application to Filament-Wound Structures"
order: 4
tags:
  - "engineering/composite-materials"
  - "engineering/finite-element-method"
  - "engineering/shell-elements"
summary: "Overview of FE theory, isoparametric elements, and the application of FE analysis to filament-wound pressure vessels and structures"
formulas: []
---

## The Finite Element Method Applied to Filament-Wound Structures

### FE Method Overview

The finite element method discretises a continuous structure into finite regions (elements). Each element is defined by nodes with degrees of freedom (translations and rotations in structural analysis). The element stiffness matrix is assembled from element geometry and material properties using:

**Isoparametric formulation**: Shape functions of the same polynomial form interpolate both geometry and displacement fields. The stiffness matrix is computed by integrating strain energy over the element volume using Gaussian quadrature:

```
[K_e] = integral_V [B]^T [D] [B] dV
```

where [B] is the strain-displacement matrix and [D] is the material constitutive matrix. The global stiffness matrix is assembled from element contributions.

### Element Types Used in This Work

| Element | System | Application |
|---------|--------|-------------|
| Axisymmetric isoparametric quadrilateral Fourier element | PAFEC | Axisymmetric + non-axisymmetric loading via Fourier series |
| Ahmad's 8-noded thick shell element | PAFEC | Axisymmetric and general shells |
| Semi-Loof thin shell element | PAFEC | Thin shell analysis |
| Thin shell elements (S4R, S8R) | ABAQUS | General shells |

### FE Analysis of Filament-Wound Pressure Vessels

Literature examples of FE applied to filament-wound structures:

**Metallic-lined spheres:**
- Chen and Clewlow: bilinear elastic/strain-hardening liner, angle-wound composite, FE program AB5U for axisymmetric bodies. Burst pressure predicted from maximum effective strain criterion.
- Knight: axisymmetric FE modified for 3D orthotropy; predicted burst within 4% of experiment.

**Cylindrical vessels and tubes:**
- COMTANK system: automated FE model for oblate spheroids and dome-ended cylinders using orthotropic thin shell of revolution elements.
- Rizzo and Vicario: examined effects of specimen dimensions on test accuracy using general anisotropic axisymmetric FE.

### Laminated Composite FE Formulations

Key requirements for FE elements applicable to filament-wound structures:
- Ability to specify laminate properties layer by layer with arbitrary ply orientations
- Shell/thin-shell elements for structures with large area-to-thickness ratio
- Fourier or 3D capability for non-axisymmetric loading on axisymmetric bodies

Most commercial FE systems (PAFEC, ABAQUS) include facilities for laminated orthotropic materials, but do not provide tools to generate the input data defining the laminate structure automatically from manufacturing data.

### The Gap Addressed by This Thesis

The principal challenge is not the FE analysis itself, but the generation of the large volume of input data (ply angles, thickness distributions, lamination sequences) from the CADFIL winding data. This is addressed by the FILFEM programs described in Chapter 6.
