---
parent_id: "johnson-2020-using-modelbased-design-for-digital-twin"
chunk_id: "johnson-2020-using-modelbased-design-for-digital-twin/02-electrical-systems-architecture"
section: "Electrical Systems Architecture"
order: 2
tags:
  - "engineering/vfd"
  - "engineering/power-generation"
  - "engineering/power-distribution"
  - "engineering/drilling-rig"
summary: "Electrical control architecture of drilling rigs including power generation, distribution, and loading systems"
formulas: []
---

# Electrical Systems Architecture

## Three-Layer System Classification

The electrical control systems of a drilling rig are organized into three primary functional categories:

### 1. Power Generation

Power generation on drilling rigs begins with diesel-powered gensets that drive electrical generators. These generators produce clean 60 Hz alternating current (AC) electrical power to operate all rig equipment. The genset-generator combination provides the primary power source for the entire rig electrical system.

### 2. Power Distribution

Once generated, electrical power is distributed throughout the rig infrastructure using:
- Step-up and step-down transformers for voltage conversion
- Power cables and electrical conductors
- Disconnect switches and protective devices

These distribution components deliver power from gensets to various equipment loads across the rig, including lighting, compressors, blowers, vibrators, and other AC-powered systems.

### 3. Equipment Loading

The largest electrical loads on a drilling rig (by an order of magnitude or more) consist of Variable Frequency Drives (VFDs) that control and operate three primary motors:
- Top drive motors
- Draw works motors
- Mud pump motors

## Variable Frequency Drive Operation

VFDs are essential for controlling drilling rig equipment because they enable independent control of both motor speed and torque through power electronics.

### VFD Power Conversion Process

The VFD transforms 60 Hz AC power from gensets into variable frequency power through a four-stage process:

1. **Rectification:** Three-phase AC power is converted to direct current (DC)
2. **Filtering:** DC power is cleaned and smoothed through filtering circuits
3. **Chopping:** Voltage is regulated to the desired level
4. **Inversion:** DC power is converted back to variable frequency AC power, with the frequency and amplitude controlled by a digital signal processor (DSP)

The speed algorithm running on the rig's control system dictates the inverter's pulse pattern, enabling precise regulation of motor speed independent of generator frequency.

### Modular vs. Integrated VFD Designs

VFDs can be designed in two primary configurations:

**Integrated Design:**
- All functions (rectification, filtering, chopping, inversion) bundled into a single device
- Compact form factor
- Simple power connections

**Modular Design:**
- Discrete modules for DSP control, rectifier, inverter, and DC link
- Improved electrical efficiency
- Reduced space requirements
- Better maintainability (failed components can be replaced individually)
- Variable power rating capability through component substitution

In modular designs, multiple VFDs connect to a shared DC bus, allowing individual VFD filter capacitors to work together, creating an effectively larger total filter capacitance compared to individual stand-alone devices.

## Pre-Built Simulink Models

Simulink provides standard pre-built models for VFD and induction motor combinations that include:
- 3-phase rectifier stage
- DC link filter/chopper stage
- Field controller
- Induction motor block

For drilling rigs with discrete modular VFD designs, the standard pre-built model can be adapted by rearranging fundamental component blocks into new configurations that match the actual physical implementation, leveraging the module-based design features of the simulation software.
