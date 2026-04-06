---
parent_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom"
chunk_id: "ibrahimbegovic-1995-on-finite-element-implementation-of-geom/01-introduction"
section: "Introduction"
order: 1
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/geometric-nonlinearity"
summary: "Introduction to 3D curved beam elements based on Reissner's finite-strain beam theory for geometrically nonlinear analysis"
formulas: []
---

## Introduction

Nonlinear analysis of three-dimensional beam-like structural systems subject to very large displacements and strains is a problem frequently encountered in different areas of engineering practice, perhaps most notably in space-structure technology. Numerous approaches have been proposed, but the vast majority have been limited to considering beam finite elements with straight reference axes (e.g., Argyris et al., Bathe and Bolourchi, Simo and Vu-Quoc, Crisfield).

This work provides three-dimensional beam elements whose reference axes can be arbitrary space-curved lines. Indeed, the modeling of many beam-like structures requires elements with curved reference geometry. Earlier work in planar deformations (Stolarski and Belytschko, Saje, Ibrahimbegovic and Frey) demonstrated that increasing the accuracy of curved reference geometry approximation entails significant increases in result accuracy.

### Key Contributions

The curved three-dimensional beam elements presented are based on Reissner's theory and later revisited by Simo. The beam theory accommodates:
- Large displacements
- Finite (unrestricted size) rotations
- Large strains
- Finite rotations (extension of Reissner's original theory)

### Theoretical Framework

This theory stands in contrast with corotational-type formalisms because:
1. Can be readily implemented in higher-order beam elements
2. All element arrays are handled directly in global structure coordinate system
3. No final local-global transformations needed for element arrays
4. Enhances overall computational efficiency

However, the choice of non-locking interpolations becomes somewhat more delicate, requiring a fresh approach compared with corotational-type beam elements.

### Paper Organization

1. **Section 2**: Equations of Reissner's beam theory
2. **Section 3**: Choice of non-locking interpolations and computational procedure
3. **Section 4**: Numerical problems demonstrating satisfying performance
4. **Section 5**: Closing remarks
