---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/05-kinetics-nonrotating-segment"
section: "Chapter II: Kinetics of the Nonrotating CT Segment and Axial Force Distribution"
order: 5
tags:
  - "engineering/coiled-tubing"
  - "engineering/mechanics"
  - "engineering/axial-force"
  - "engineering/reactive-torque"
  - "engineering/twist"
summary: "Mechanical model for the nonrotating CT segment: reactive torque distribution, twist angle rate of change, and combined axial force distribution model."
formulas:
  - id: "F2.2b"
    name: "Axial force along nonrotating segment"
    expr: "dFt/ds = -wp*cos(φ) + μ*wc (running in) or dFt/ds = -wp*cos(φ) - μ*wc (pulling out)"
  - id: "F2.twist"
    name: "Rate of change of twist angle in nonrotating segment"
    expr: "dθ/ds = Mt / (GJ)"
---

# Chapter II: Kinetics of the Nonrotating CT Segment and Axial Force Distribution

## 2.2 Nonrotating Segment Mechanics

The nonrotating segment extends from the second (upper) motor upward to the surface reel. In this segment, the CT does not rotate — it only translates axially as CT is run into or pulled out of the well.

### Axial Force Distribution

For the nonrotating segment, the drag force is entirely axial (no rotational component):

```
dFt/ds = -wp*cos(φ) + μ*wc    [running in hole]
dFt/ds = -wp*cos(φ) - μ*wc    [pulling out of hole]
```

Where:
- `Ft` = axial force in CT (positive = tension)
- `s` = arc length along CT (measured from bit end)
- `wp` = buoyed weight per unit length
- `φ` = wellbore inclination angle
- `μ` = coefficient of friction
- `wc` = normal contact force per unit length

The normal contact force wc depends on the wellbore geometry:
- **Straight inclined section**: `wc = wp * sin(φ)`
- **Curved section (build/drop)**: `wc = wp * sin(φ) + Ft * κ` (where κ is the dogleg curvature)

### Reactive Torque Distribution

The second motor applies a reactive torque to the nonrotating segment. This torque does not remain constant along the nonrotating segment — it is reduced by frictional contact between the CT and the wellbore, but since the CT is not rotating, the reactive torque causes **twist** (angular deformation) in the pipe, not rotation.

The torsional moment Mt in the nonrotating segment satisfies:

```
dMt/ds = -mt,friction
```

Where `mt,friction` is the distributed resistive moment per unit length from contact friction if any slight rotation occurs, or is zero for a fully non-rotating string.

### Twist Angle Rate of Change

The rate of change of the twist angle in the nonrotating segment is:

```
dθ/ds = Mt / (GJ)
```

Where:
- `θ` = twist angle of the CT cross-section
- `G` = shear modulus of CT material
- `J` = polar moment of inertia of CT cross-section

This equation shows that the twist angle increases from the location of the second motor upward toward surface as the torsional moment Mt propagates up the nonrotating segment.

### Implication for Surface Operations

If the cumulative twist angle at surface becomes too large, the CT will experience uncontrolled unwinding when the second motor is stopped (e.g., when drilling is paused). This can lead to:
- Sudden release of stored torsional energy
- CT rotation at the injector head
- Wellbore control risks

The dynamic torque arrestor (analyzed in Chapter IV) is designed to prevent excessive reactive torque from reaching the nonrotating segment.

## 2.3 Combined Axial Force Distribution Model

The total CT string consists of:
1. **Bit motor assembly** (fixed length)
2. **Rotating segment** (variable length, below second motor)
3. **Second motor assembly**
4. **Nonrotating segment** (from second motor to surface)

The axial force at any point is computed by integrating from the bit upward:

1. **At the bit**: `Ft = WOB` (weight-on-bit) acting compressively
2. **Through rotating segment**: Integrate drag equation with reduced axial drag (cos γ factor)
3. **At second motor**: Force is continuous (no step change in axial force at motor)
4. **Through nonrotating segment**: Integrate standard drag equation (full axial drag)
5. **At surface**: `Ft = Fhookload` (hookload measured at surface)

The **zero-hookload condition** occurs when the hookload drops to zero — the entire string weight is consumed by friction. Beyond this point, no additional CT can be run into the hole without actively pushing it (which leads to buckling).

The **lockup condition** occurs when helical buckling causes the contact force to be so high that no amount of surface force can advance the CT — the string is effectively locked in place.

Both conditions are analyzed in detail in Chapter V.
