---
parent_id: "cveticanin-2023-review-drilling-systems"
chunk_id: "cveticanin-2023-review-drilling-systems/04-directional-rop-new-systems"
section: "Directional Drilling, Rate of Penetration, and New Systems"
order: 4
tags:
  - "engineering/drilling"
  - "engineering/beam-theory"
  - "engineering/rate-of-penetration"
summary: "Models for horizontal and inclined drilling, rate of penetration prediction including neural networks, and emerging concepts such as vibro-impact, compound impact, and composite drill strings."
formulas:
  - id: "F1"
    name: "Weibull distribution for rock property"
    expr: "F(e) = (h/e0)*(e/e0)^(h-1)*exp(-(e/e0)^h)"
---

# Directional Drilling, Rate of Penetration, and New Drilling Systems

## Section 4: Horizontal and Inclined Drilling Models

### Historical Context
Vertical wells dominated initially; directional (horizontal) drilling is now very common. Used in: mining, tunnel excavation, pipeline laying, oil/gas recovery from complex reservoir geometries.

### Horizontal Drilling Model [ref 62]
Drill string modelled as an axially loaded continuous bar:
- Constant pushing force at one end
- Oscillatory force (from mud motor) at BHA end
- Friction along drill string is the dominant force
- Friction coefficient assumed as exponential autocorrelation function (uncertainty)
- FEM discretisation used; bit velocity variation simulated

### Extended Horizontal Model [ref 63]
Added torsional and lateral deformations:
- Shear deformation of drill string
- Friction from borehole and drilling slurry
- Axial load, torque, bit-rock interaction, slurry-drill string interaction, slurry damping all reduce performance
- Stick-slip vibration is present in horizontal drilling too

### Inclined Drilling [Tahera et al., ref 64]
Benefits of inclination:
- Mud flow rate reduces drill string vibration
- Increasing WOB in inclined drilling increases vibration (tradeoff)

### Curved Well Drilling [ref 65]
Ultrahigh-pressure curved wells require coupled axial-lateral-torsional nonlinear vibration model:
- Energy method and Hamiltonian principle
- Wellbore trajectory change, wellbore constraint, bit-rock interaction, and ultrahigh-pressure effects on fluid elastic modulus and viscosity included
- Validated against field data from four ultrahigh-pressure wells
- Predicts working life of drill string and ROP in curved wells

## Section 5: Rate of Penetration Prediction

ROP is a critical but difficult-to-measure parameter. Influenced by:
- Bit-rock interaction
- Fluid-rock interaction
- Well profile (inclination and azimuth)
- Pipe-rock interaction

### Analytical Model [ref 20]
Pneumatic percussion drilling; energy of compressed air (piston motion) → kinetic energy → bit impact. Model relates ROP to:
- Compressive strength of rock
- Air pressure

### Extended Model — Wu et al. [ref 66]
Three parallel ROP prediction approaches:
1. **Empirical mathematical modelling**
2. **Computer simulation of bit-rock interaction**
3. **BP neural network model** on mega drilling data

Factors included: WOB, rotation speed, rock formation properties, bit cutting structure.

All three methods achieve high accuracy. Neural network technology expected to be the future development trend for both bottom-hole environment prediction and drilling operation optimisation.

## Section 6: New Drilling System Concepts

### Vibro-Impact Drilling [ref 67]
System: lever connects drive and bit on one side, striker on the other. Drive moves at constant sliding velocity. On bit: friction force and friction impulse at impact. Friction force depends on:
- Dry friction coefficient
- Absolute bit velocity
- Stribeck velocity (critical velocity beyond which friction increases)

### Compound Impact Drilling [ref 69]
Applies simultaneous axial and torsional impacts to drill bit:
- Stereoscopic crushing effect on rock
- Crack propagation under cutter leads to rock fragmentation
- Rock fragmentation increases with: impact loading time, loading amplitude, number of cyclic loads

### Torsional Vibration-Assisted Drilling [ref 70]
Converts detrimental stick-slip torsional vibrations into a useful process:
- Organised correlation of friction properties and driving velocity
- Electromagnetically excited torsional vibrations
- Three electromechanical transducers: torsional vibration generator, induction torque converter, drive motor
- Vibrations at or near natural frequency of material being drilled
- Advantage: no landslide dumping (unlike impact drilling)
- Limitation: not suitable for deep-hole drilling due to large torsional vibrations

### High-Frequency Torsional Vibration Percussive Drilling [ref 29]
Improves performance in deep hard formations:
- When torsional vibration percussive frequency ≈ natural frequency of rock: rock resonance, maximum plastic strain and ROP
- Compared to high-pressure jet drilling: longer service life, reduced cost
- Expected to be useful for drilling process optimisation

### Composite Drill Strings [refs 71–73]
Composite drill pipes and drill collars for deep drilling:
- Fully coupled nonlinear model (physical and geometric nonlinearities)
- Accounts for drill-string weight, axial bit force, gyroscopic effect
- Fiber orientation and stacking sequence affect dynamic response
- Model: laminated composite with winded orthotropic layers; two-node elements with 6 DOF per node; Lagrange equations of motion
- Challenge: results are composite-type specific; nonlinear vibration and chaotic behaviour require chaos suppression methods

## Section 7: Conclusions and Future Research

### Summary
- Timoshenko beam is the standard physical model for drill string vibration analysis
- Current models cover torsional, axial, lateral, and coupled vibrations adequately for many cases
- Bit-rock interaction remains the primary source of uncertainty

### Recommended Future Research Directions
1. **More complex dynamical models**: 6-DOF drill string system with fully coupled vibration and nonlinearities
2. **Efficient control schemes**: Active suppression of stick-slip, bit-bounce, and whirl
3. **New control strategies**: Eliminate stick-slip, bouncing, and forward/backward whirling simultaneously
4. **Digital twins (DTs)** for drill strings: computational framework fusing structural models, measurements, and drilling experience — emerging approach for designing new drilling systems
5. **Deep and ultra-deep wells**: As shallow reserves deplete, deeper drilling requires fundamental advances in all areas above
