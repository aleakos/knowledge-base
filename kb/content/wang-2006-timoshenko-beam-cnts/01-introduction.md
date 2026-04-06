---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/01-introduction"
section: "Introduction"
order: 1
tags:
  - "engineering/carbon-nanotubes"
  - "engineering/vibration-analysis"
  - "engineering/continuum-mechanics"
summary: "Overview of carbon nanotubes and the need for Timoshenko beam models over Euler beam models for accurate vibration analysis"
formulas: []
---

## Carbon Nanotubes and Analysis Methods

Carbon nanotubes (CNTs) were discovered in 1991 and possess superior mechanical, electronic, and chemical properties:
- About 10 times stronger but 6 times lighter than steel
- Can conduct electricity as a semiconductor
- Transmit heat extremely well

The mechanical behavior of CNTs has been explored through:
- Experiments
- Molecular dynamics (MD) simulations
- Elastic continuum mechanics

Presently, conducting experiments on CNTs is difficult due to nanometer dimensions. MD simulations are highly computationally time-consuming and often limited to coarse atomic systems. Continuum mechanics serves as a practical and cost-effective alternative method to study CNTs by treating them as continuous elastic structures.

Research by Yakobson et al. comparing atomic modeling with continuum shell models found that the continuum shell model can satisfactorily estimate changes in buckling patterns. This led to the conclusion: "The laws of continuum mechanics are amazingly robust and allow one to treat even intrinsically discrete objects only a few atoms in diameter."

## Existing Beam Models

Many elastic continuum models have been developed for studying CNTs:
- Beam models (single and multi-beam)
- Cylindrical shell models
- Space truss/frame models

These models are used for studying bending, buckling, and vibration behaviors of CNTs.

### Euler Beam Model

The Euler beam model is widely used in vibration and buckling analyses and sound wave propagation studies. The single elastic beam (SEB) model:
- Neglects interaction between tubes
- Assumes nested tubes of multi-walled CNTs (MWNTs) deform coaxially
- Is relatively simple and easy to apply
- Contains only one unknown variable (deflection)
- Ignores effects of transverse shear deformation and rotary inertia

However, these effects have substantial impact on vibration frequencies of CNTs when:
- The tubes are stocky (small length-to-diameter ratios)
- Dealing with high modes of vibration

### Need for Timoshenko Beam Model

Stocky beams are encountered when CNTs are applied as:
- Nanotweezers
- Nanoprobes

Generally having small length-to-diameter ratios, these applications require accurate prediction of high vibration modes to avoid destructive resonance effects at high frequencies. Yoon et al. were among the earliest researchers to use the Timoshenko beam model for CNTs to study effects of shear deformation and rotary inertia on wave propagation.

This paper investigates free vibration behavior of MWNTs using the Timoshenko beam model, examining effects of shear deformation and rotary inertia for different length-to-diameter ratios and boundary conditions, utilizing the differential quadrature (DQ) method for solution.
