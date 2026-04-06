---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/03-proposed-technique"
section: "Proposed Technique, Operating Methodology, Challenges, and Objectives"
order: 3
tags:
  - "engineering/coiled-tubing"
  - "engineering/extended-reach"
  - "engineering/downhole-motors"
  - "engineering/torsional-buckling"
  - "engineering/dynamic-torque-arrestor"
summary: "Describes the proposed two-motor CT configuration: a second motor rotates the lower CT segment to reduce drag, with operating methodology, challenges, and study objectives."
formulas: []
---

# Proposed Technique, Operating Methodology, Challenges, and Objectives

## Section 1.1.5: Proposed Technique

The novel approach proposed in this thesis uses **two downhole motors** in series:

```
Surface reel
    |
[Nonrotating CT segment]
    |
[Second (upper) downhole motor]  <-- NEW
    |
[Rotating CT segment]
    |
[First (lower) downhole motor]  <-- Conventional (rotates bit)
    |
[Bit assembly]
```

The second motor, placed in the CT string above the conventional bit motor, rotates the lower portion of the CT string. This creates two functionally distinct segments:

- **Nonrotating segment**: Above the second motor — behaves like conventional CT, subject to axial drag and torsional reactive torque from the second motor
- **Rotating segment**: Between the two motors — rotates at the speed output by the second motor, converting axial sliding friction to torsional drag

By rotating the lower segment, the contact force between CT and the wellbore wall is redirected. Instead of purely axial friction opposing forward motion, the net friction force has both axial and tangential components. The axial component is reduced, lowering drag and extending reach.

## Section 1.1.6: Operating Methodology

The second motor is driven by the same drilling fluid pumped through the CT string. The fluid flow path is:

1. Fluid pumped from surface through CT bore
2. Fluid enters second (upper) motor → rotates CT below it
3. Fluid exits second motor → enters first (lower) motor → rotates bit
4. Fluid exits through bit nozzles into annulus

**Key operating parameters**:
- The rotational speed of the lower CT segment is governed by the differential pressure and flow rate through the second motor
- The bit motor speed is set by the remaining differential pressure after the second motor
- The two motors must be matched to deliver acceptable bit speed while providing adequate CT rotation

## Section 1.1.7: Challenges

Introducing rotation to the lower CT segment creates new mechanical challenges:

### Reactive Torque Transmission
The second motor exerts a reactive torque on the nonrotating upper segment. This torque accumulates as twist in the nonrotating segment. If the twist becomes excessive, the upper segment may:
- Buckle torsionally
- Experience premature fatigue failure
- Cause wellbore control issues at surface

### Torsional Buckling of Rotating Segment
The rotating segment itself is subject to combined axial compression and torque. Torsional buckling can occur in:
- Vertical sections (helical buckling under pure torque)
- Inclined sections (interaction of gravity, axial force, and torque)
- Curved sections (dog-leg sections)

### Maximum Rotating Length
There is a maximum length of CT that can be rotated before torsional buckling initiates. Beyond this length, the mechanical benefit of rotation is lost.

### Dynamic Torque Management
A mechanism is needed to limit reactive torque buildup in the nonrotating segment. Two candidate tools are examined:
- **Full-gaged stabilizer**: Provides a fixed reference, but does not dynamically limit torque
- **Dynamic torque arrestor**: A new tool concept that limits reactive torque by slipping at a preset torque threshold

## Section 1.1.8: Thesis Objectives

The specific objectives of this study are:

1. Develop the mechanical model for the **rotating CT segment** under combined axial and torsional loads using the Frenet-Serret framework
2. Develop the model for the **nonrotating CT segment** including reactive torque distribution
3. Analyze **torsional buckling** of CT in vertical, inclined, and curved wellbore sections
4. Determine the **maximum rotating length** before torsional buckling initiates
5. Analyze the **dynamic torque arrestor** design and performance
6. Model **axial force distribution** under sinusoidal and helical buckling conditions
7. Determine **maximum achievable measured depth** under zero-hookload and lockup conditions
8. Present **worked numerical examples** demonstrating reach extension benefit
