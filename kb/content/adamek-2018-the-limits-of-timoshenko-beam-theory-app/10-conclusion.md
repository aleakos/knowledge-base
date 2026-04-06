---
parent_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app"
chunk_id: "adamek-2018-the-limits-of-timoshenko-beam-theory-app/10-conclusion"
section: "6. Conclusion"
order: 10
tags:
  - "engineering/beam-theory"
  - "engineering/timoshenko-beam"
  - "engineering/FSDT"
  - "engineering/layered-beams"
  - "engineering/sandwich-beam"
  - "engineering/impact"
summary: "Conclusions on FSDT applicability to layered beam impact problems: excellent for similar-stiffness layers, good for thin soft interlayer, questionable for soft-core sandwiches."
formulas: []
---

# 6. Conclusion

The analyses performed for three typical types of three-layered beams under impact loading lead to the following conclusions regarding the application of the **equivalent single-layer first-order shear deformation theory (FSDT)** with variable Timoshenko shear coefficient.

## FSDT Performance by Beam Type

### Beams with Thin Soft Interlayer (B1 type)

- FSDT gives a **very good estimate** of beam deflection and velocity near the point of excitation
- Results at larger distances are quite similar (mainly in amplitudes) to those from the exact theory
- To reach more precise results, FSDT should be applied to beams with **extremely thin interlayers** (e.g., adhesive layers)

### Soft-Core Sandwich Beams (B2 type)

- Application of FSDT to impact problems of classical sandwich beams with soft core and thin stiff face sheets is **questionable**
- Substantial transverse beam contractions near impact and non-negligible warping cause **underestimation** of both deflection and vertical velocity in all studied cases
- Reducing the maximum frequency content in the applied pulse decreases differences but does not resolve them
- **FSDT can be used only for very rough estimates** of beam response to impact loading

### Beams with Stiff Layers of Similar Wave Velocities (B3 type)

- FSDT gives the **best results** compared to the exact 2D solution
- Very precise results are obtained both for:
  - Combinations of thin and thick layers
  - Layers of similar thicknesses
- This case is characterised by both stiff layers and similar characteristic wave velocities across layers

## Scope and Generalisation

All conclusions above were made under the specific assumptions of this study. To generalise to:
- Other beam geometries and boundary conditions
- Other frequency ranges of applied loading

further analyses are required.

## Practical Implication

The **thoughtful usage of FSDT** can lead in impact problems of layered beams to:
- Very precise results (case B3), or
- At least qualified estimates (case B1)

in a matter of **seconds** — as opposed to the complex 2D exact solution.

When FSDT is used in **layer-wise formulation** or in combination with **higher-order beam theories**, it will give good results for a broader spectrum of layered beam problems, at the cost of higher computational demands.

## Advantage of Solutions Presented

Both the FSDT and exact 2D solutions presented in this work are **not frequency limited from above**. This makes them suitable for:
- Impact problems with arbitrarily wide frequency spectra
- Benchmarking and testing other simplified theories applied to layered beam problems
