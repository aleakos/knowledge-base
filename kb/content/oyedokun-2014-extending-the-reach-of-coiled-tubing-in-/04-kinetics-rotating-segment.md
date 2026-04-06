---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/04-kinetics-rotating-segment"
section: "Chapter II: Kinetics of the Rotating CT Segment"
order: 4
tags:
  - "engineering/coiled-tubing"
  - "engineering/mechanics"
  - "engineering/frenet-serret"
  - "engineering/friction"
  - "engineering/torque"
  - "engineering/contact-force"
summary: "Frenet-Serret mechanical model for the rotating CT segment: force/moment equilibrium, drag force, normal contact force, torque, and shear force derivations."
formulas:
  - id: "F2.1"
    name: "Weight per unit length"
    expr: "w = wp + wc + wd"
  - id: "F2.2"
    name: "Axial force balance"
    expr: "dF/ds = -w"
  - id: "F2.3"
    name: "Force vector in Frenet-Serret frame"
    expr: "F = Ft*et + Fn*en + Fb*eb"
  - id: "F2.4"
    name: "Moment equilibrium"
    expr: "dM/ds = -(et × F) - m"
  - id: "F2.5"
    name: "Moment vector"
    expr: "M = EI*κ*eb + Mt*et"
  - id: "F2.13"
    name: "Helix angle of CT motion"
    expr: "tan γ = ROP / (2π * rp * RPM)"
  - id: "F2.17"
    name: "Drag force magnitude"
    expr: "|wd| = μ * |wc|"
---

# Chapter II: Kinetics of the Rotating CT Segment

## 2.1 Frenet-Serret Coordinate System

The CT string is modeled as a slender elastic rod following the wellbore trajectory. The Frenet-Serret (natural) coordinate system is used, defined by three unit vectors at every point along the CT:

- **et**: Unit tangent vector — points along the CT axis in the direction of increasing arc length s
- **en**: Unit principal normal vector — points toward the center of curvature
- **eb**: Unit binormal vector — eb = et × en, completes the right-handed triad

The curvature κ and torsion τ of the wellbore path relate the derivatives of these unit vectors:

```
det/ds =  κ * en
den/ds = -κ * et + τ * eb
deb/ds = -τ * en
```

For a wellbore with inclination φ and azimuth α, the curvature and torsion are computed from the wellbore survey data (dogleg severity and toolface orientation).

## 2.1.1 Force Equilibrium

The total distributed load on the CT string per unit length is:

```
w = wp + wc + wd
```

Where:
- `wp` = buoyed weight per unit length of CT (gravitational body force)
- `wc` = normal contact force per unit length between CT and wellbore
- `wd` = drag force per unit length (friction)

The vector force balance along the CT gives the differential equation:

```
dF/ds = -w
```

The internal force vector at any cross-section is expressed in the Frenet-Serret frame as:

```
F = Ft*et + Fn*en + Fb*eb
```

Where:
- `Ft` = axial (tangential) force component — positive in tension
- `Fn` = normal force component (in the plane of curvature)
- `Fb` = binormal force component

## 2.1.2 Moment Equilibrium

The moment equilibrium equation is:

```
dM/ds = -(et × F) - m
```

Where `m` is the distributed external moment per unit length (e.g., from fluid pressure torque).

The internal moment vector is:

```
M = EI*κ*eb + Mt*et
```

Where:
- `EI` = bending stiffness of CT
- `κ` = curvature of the wellbore path
- `Mt` = torsional moment (twisting moment) in the CT

This formulation assumes the CT bending moment is governed by wellbore curvature (the CT conforms to the wellbore path).

## 2.1.3 Normal Contact Force

In the rotating segment, the CT string moves helically — advancing axially at the rate of penetration (ROP) while rotating at the angular velocity of the second motor (RPM). The direction of motion relative to the wellbore wall defines the direction of the drag (friction) force.

The helix angle of the CT motion at the contact point is:

```
tan γ = ROP / (2π * rp * RPM)
```

Where `rp` is the radial clearance between CT and casing (CT moves along a helix of radius equal to the radial clearance).

This angle γ determines how the total friction force is partitioned into axial and tangential (torsional) components:
- Axial drag component: `wd,axial = |wd| * cos γ`
- Torsional drag component: `wd,tangential = |wd| * sin γ`

As RPM increases relative to ROP, the helix angle increases, shifting more of the friction force from axial to torsional and **reducing the net axial drag**.

## 2.1.4 Drag Force and Coulomb Friction

The magnitude of the drag force per unit length is governed by the Coulomb friction law:

```
|wd| = μ * |wc|
```

Where:
- `μ` = coefficient of friction between CT and wellbore wall
- `|wc|` = magnitude of the normal contact force per unit length

The direction of `wd` is opposite to the direction of CT motion relative to the wellbore wall, which is along the helix angle γ.

For the **nonrotating segment** (above the second motor):
- CT has no rotation, so γ = 0
- All friction is axial: `wd,axial = μ * |wc|`
- This is the conventional CT drag case

For the **rotating segment** (below the second motor):
- CT rotates at RPM while advancing at ROP
- γ > 0, so axial drag is reduced: `wd,axial = μ * |wc| * cos γ`
- A torsional drag is added: `wd,tangential = μ * |wc| * sin γ`

The net benefit is a reduction in axial drag, which is the primary mechanism by which the second motor extends CT reach.

## 2.1.5 Torque and Shear Force in the Rotating Segment

The torsional moment Mt in the rotating segment has two contributions:
1. **Reactive torque from the bit motor**: Transmitted upward through the rotating segment
2. **Accumulated torsional drag**: Integrated over the contact length of the rotating segment

The shear forces (Fn, Fb) in the rotating segment arise from the normal contact force distribution and the wellbore curvature. In curved sections (doglegs), the bending stiffness EI contributes additional normal forces at the bend.
