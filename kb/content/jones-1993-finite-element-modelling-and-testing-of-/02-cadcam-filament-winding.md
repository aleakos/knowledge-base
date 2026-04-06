---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/02-cadcam-filament-winding"
section: "CAD/CAM for Filament Winding"
order: 2
tags:
  - "engineering/composite-materials"
  - "engineering/filament-winding"
  - "engineering/manufacturing"
summary: "Description of CADFIL I and CADFIL II CAD/CAM systems for CNC filament winding of axisymmetric and non-axisymmetric components"
formulas: []
---

## CAD/CAM for Filament Winding

### History

Filament winding dates to the 1940s (early rocketry applications). Traditional machines used mechanical linkages. CNC technology, applied to filament winding since the late 1970s, enabled:
- Complex non-axisymmetric component manufacture
- Precise, computer-generated fibre path control
- Integration with CAD/CAM software

### CNC Filament Winding Process

A typical CNC machine has up to six axes:
- **A**: mandrel rotation (spindle)
- **B**: payout eye rotation about Y-axis
- **C**: wrist-like swing motion of payout eye (where fitted)
- **X**: payout eye movement parallel to machine axis
- **Y**: horizontal movement
- **Z**: vertical movement

The payout eye path is computed so the fibre is always tangential to the desired geodesic path at the point of contact with the mandrel. Small departures from geodesic paths are possible using friction steering.

### CADFIL I (Axisymmetric Components)

CADFIL I runs on IBM-compatible PCs and operates in two programs:

**Program 1 — Fibre and payout eye path generation:**
1. Mandrel defined as series of points forming its generator (meridional section), triangulated into a surface model
2. Fibre path generated from a starting position and angle; defaults to geodesic, with optional friction steering
3. Payout eye path computed by extending tangents to the fibre path to the required clearance distance

**Program 2 — Post-processing:**
1. Closure of the payout eye path using a progression factor (scale factor on mandrel rotation)
2. Generation of CNC part-program (machine co-ordinate commands)

**Band pattern number**: The order of rotational symmetry in the fibre layout. A band pattern of 1 means successive windings lie immediately adjacent; a band pattern of 3 means every third winding lies adjacent to the first.

### CADFIL II (Non-Axisymmetric Components)

More complex than CADFIL I; operates as follows:
1. Mandrel surface discretised into plane facets with corner co-ordinates
2. A template fibre path is created (geodesic or friction-steered), then replicated into a family of equally spaced fibres
3. The fibre family is replicated by reflection in symmetry planes and assembled into a winding sequence
4. Payout eye constrained to move on an explicitly defined control surface (cylinders, cones, ellipsoids)
5. CNC control data generated from payout eye path

### Key Feature for FE Modelling

Both CADFIL systems define the component structure almost completely through their winding data files, given material properties and roving cross-section. This data is the foundation for automatic FE model generation described in Chapter 6 (FILFEM programs).
