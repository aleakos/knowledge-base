---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/01-abstract-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/drill-pipe"
  - "engineering/buckling"
  - "engineering/composite-materials"
  - "engineering/oil-drilling"
summary: "Overview of horizontal cylinder-in-cylinder buckling review motivated by composite drill pipe applications, covering problem setup and scope."
formulas: []
---

# Abstract and Introduction

## Abstract

Available analytical results and experiments on the structural behavior of constrained horizontal cylinders subjected to axial compression, torsion, and gravitational loads are reviewed. Such configurations are of interest to the oil-drilling field and provide static design expressions for steel tubulars. The buckling problem is similar to restrained railroad tracks and submerged/underwater pipelines under thermal expansion.

Due to outer cylinder constraint and gravitational loads, analysis has shown that long cylinders initiate buckling at loads significantly higher than classical Euler buckling loads. For these constrained long cylinders, buckling initiates in a sinusoidal mode that snakes along the lower surface of the constraining cylinder. Classic analytical expressions hold that as the axial load increases, the cylinder achieves an overall helically buckled state in which the buckled cylinder forms a helix spiraling around the inner surface of the constraining cylinder.

Torsion is shown to have little effect on either buckling load but controls the sense/direction of the helical buckling. Little experimental data exist on constrained cylinder buckling, and it is unclear how the initiating sinusoidal mode transitions to the helical mode. Implications of the buckling progression for composite cylinder applications are described including the finding that composites perform poorly relative to steel on the metric of buckling due to lower density and axial stiffness; composites perform well on the metric of lock-up length when friction is considered.

## 1. Introduction

This study of the structural buckling behavior of cylinders is motivated by interest in the use of laminated composite cylinders for oil and gas drill pipe. Current oil and gas drill pipe is made from isotropic steel cylinders. The switch to composite cylinders is motivated by the higher specific stiffness and strength of advanced composite materials as compared to steel. The anisotropy of the composite cylinders also lends itself to the possibility of custom-tuning the tubulars (via laminate design) in such a way as to optimize the structural behavior (e.g. being able to change the axial and bending stiffnesses independently). The weight benefits of these composite drill pipes are particularly attractive for use in offshore drilling platforms.

### Problem Configuration

The inner cylinder corresponds to the drill pipe. The constraining outer cylinder corresponds either to a constraining pipe lining the wall of the hole being drilled, or to the wall of the hole itself (open-hole drilling). `Δr` is the radial clearance between the two cylinders — a critical parameter in this problem.

The inner cylinder of length `L` is subjected to:
- Applied axial compressive load `P`
- Torsional load `T`

The cylinders are assumed to be **horizontal**, such that gravity acts as a distributed transverse load. The inner cylinder is assumed to be supported at its ends such that it is centered radially in the constraining outer cylinder. The outer cylinder is assumed to be a rigid constraint on the displacement of the inner cylinder where the two are in contact.

### Scope and Limitations

The idealized situation ignores many factors that influence real drill pipe behavior:
- Frictional effects (addressed separately in Section 3)
- Dynamics and bit chatter
- Internal pressure from drilling fluid

A qualitative difference between the structural behavior of "long" and "short" cylinders is noted, and "long" versus "short" is quantified for the first time in this paper.

### Reference Parameters (Steel Tubulars)

| Parameter | Steel | Composite |
|-----------|-------|-----------|
| Axial compressive load P | 100,000 N (22,480 lb) | — |
| Torsional load T | 20,000 N·m (14,750 ft-lb) | — |
| Inner cylinder OD | 14.0 cm (5.5 in) | — |
| Inner cylinder ID | 11.6 cm (4.6 in) | — |
| Outer cylinder ID | 22.2 cm (8.5 in) | — |
| Cylinder length L | 2000 m (6561 ft) | — |
| Radial clearance Δr | 4.1 cm | — |
| Young's modulus E | 207 GPa (30 Msi) | 35 GPa (5 Msi) |
| Cross-sectional moment of inertia I | 9.97×10⁻⁶ m⁴ | — |
| Cross-sectional area A | 0.00483 m² | — |
| Coefficient of friction μ | 0.3 | — |
| Effective density | 6650 kg/m³ | 350 kg/m³ |
| Material density ρ | 7900 kg/m³ | 1600 kg/m³ |
| Weight per unit length w | 315 N/m (21.6 lb/ft) | 16.6 N/m (1.1 lb/ft) |
| Nominal axial stress σ | −21 MPa | — |
| Nominal shear stress τ | 65 MPa | — |

For drilling applications the cylinder geometry is often fixed (outer radius set by desired hole size, inner radius by drilling fluid pressure drop and burst strength). Therefore only the change in modulus and density are considered when comparing steel to composite.

**Effective density** accounts for buoyancy of the cylinder in drilling fluid (density ≈ 1250 kg/m³): effective density = material density − drilling fluid density.
