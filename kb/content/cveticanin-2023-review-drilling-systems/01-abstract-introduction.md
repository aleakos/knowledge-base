---
parent_id: "cveticanin-2023-review-drilling-systems"
chunk_id: "cveticanin-2023-review-drilling-systems/01-abstract-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/drilling"
  - "engineering/beam-theory"
  - "engineering/vibrations"
summary: "Review scope covering rotary and rotary-percussive drilling systems, the drill string as a Timoshenko beam model, vibration classifications, and the challenges of deep and ultra-deep well drilling."
formulas: []
---

# Abstract and Introduction

**Paper:** Cveticanin, L., Kraljevic, S., Cveticanin, D. (2023). Review on dynamic models of drilling systems applied in oil and gas industry. *Acta Mechanica*, 234, 4427–4442. https://doi.org/10.1007/s00707-023-03621-3

## Abstract

This is a review of models for dynamic analyses of various drilling systems for oil and gas industry applications. Coverage includes:
- Rotary and rotary-percussive drilling systems (vertical, horizontal, and inclined)
- Physical and mathematical modeling of drill string vibrations
- The **Timoshenko beam** as the basic physical model for drill string analysis
- Torsional, axial, transversal, and combined vibrations
- Bit-rock interaction models (various mathematical expressions for torque and force)
- Advantages and disadvantages of drilling systems
- Direction for future research

## Introduction

### Rotary Drilling
The most common oil extraction method. Key components:
- **Rotary table**: heavy flywheel at surface providing torque; smooths angular velocity irregularities
- **Drill string**: long column transmitting torque; composed of drill pipes and Bottom Hole Assembly (BHA)
  - Drill pipes: several kilometers long, tens of cm diameter; flexible in torsion and bending
  - BHA: thicker pipes (drill collars, heavy-weight drill pipes), stabilizers, instruments, shock subs, drill bit
- **Drill bit**: part of BHA receiving drive torque; fragments rock to create borehole

Capabilities: holes up to 850 mm diameter, up to 10,000 m deep. Suitable for most rock formations. Limitations: prone to pipe twisting/breakage, low penetration rate in hard rock, high bit wear.

### Rotary-Percussive Drilling
Combines rotary motion with axial percussion (hammer drilling). Advantages over simple rotary:
- More efficient in hard rock formations under same conditions
- Longer bit lifetime (collision occurs only small fraction of total time)
- Fast drilling at low weight-on-bit (WOB)
- Applicable in very hard formations using down-the-hole hammer

Hammer types: pneumatic, hydraulic, mechanical — convert pressure/mechanical energy to impact energy.

Drawbacks: low penetration in soft formations (shale), poor storability; requires synchronisation of rotation and impact actuators.

### Main Factors Affecting Drilling
1. Vibrations in the drill string
2. Bit-rock interaction conditions
3. Properties of the rock
4. Parameters of the drill bit

### Vibration Classification in Drill Strings
Three primary types based on direction:
1. **Torsional vibration**: rotation around the drill string axis; large speed variation from surface to downhole
2. **Axial vibration**: motion along the longitudinal axis
3. **Lateral vibration**: motion perpendicular to the rotation axis (in annular gap)

These can occur simultaneously; full coupled simulation is impractical — authors typically study each mechanism individually.

### Paper Structure
- Section 2: Vibration models (torsional, axial, lateral, combined)
- Section 3: Bit-rock interaction models
- Section 4: Horizontal and inclined drilling models
- Section 5: Rate of penetration (ROP) prediction models
- Section 6: New drilling system concepts
- Section 7: Conclusions
