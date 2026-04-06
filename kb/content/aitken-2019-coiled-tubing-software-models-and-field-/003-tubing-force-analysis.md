---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/003-tubing-force-analysis"
section: "Tubing Force Analysis (TFA)"
order: 3
tags:
  - "engineering/coiled-tubing"
  - "engineering/force-analysis"
  - "engineering/stress-analysis"
  - "engineering/buckling"
  - "engineering/well-geometry"
summary: "TFA methodology for calculating axial forces, tri-axial stresses, buckling conditions, and operating limits throughout the CT workstring"
formulas:
  - id: "F7"
    name: "CT Length Change (Buckling)"
    expr: "L_CT = √(L_p² + P_c²)"
  - id: "F8"
    name: "Friction Coefficient Temperature Dependence"
    expr: "μ = a + bT"
---

## Overview

The forces experienced by a CT workstring vary along its length according to a large number of variables, some of which are quantified by the flow circulation model. For instance, fluid and gas densities are used in calculating buoyancy and gravitational forces. In addition, hydrostatic and friction pressure gradients affect axial loads.

## Forces Acting on CT Workstring

The forces acting on a CT workstring are:

- Fluid flow friction forces (inside and outside)
- Contact friction forces between CT and completion, and between CT and any wireline or telemetry wire and optical fiber, including effects of helical buckling
- Buoyancy forces
- CT weight forces
- Normal reaction forces
- Weight of wireline or telemetry wire and optical fiber (if present)
- Pressure effects
- Elastic bending
- Load on BHA

## TFA Purpose and Outputs

The purpose of the TFA is to calculate:
- Axial forces and three-dimensional stresses at every depth from bottom CT end to surface
- Weight indicator reading
- Operating limit
- Friction lock conditions

The TFA predicts the onset of stability changes such as buckling and collapse, as well as the normal linear structural response of the system. Stability changes are instantaneous rather than progressive patterns of behaviour.

## Failure Modes

The CT could fail due to:

- Collapse (catastrophic; inhibits passage of liquids through tubing, greatly reduces torsional stiffness)
- Tri-axial stress exceeding the safety factor or yield
- Column failure (when CT is unsupported)
- BHA release tension or compression limit exceeded
- Buckling above the strippers
- Yield above the strippers or above the injector chains

## Buckling Analysis

Buckling occurs when the CT stability limit is exceeded at the specified depth. Due to lateral constriction by the completion tubulars, a helix will form.

The CT length changes are calculated for each step and integrated from bottom up. The displacement due to temperature, axial stress, elongation/compression, and buckling is considered. The CT length change due to buckling is calculated as:

$$L_{CT} = \sqrt{L_p^2 + P_c^2}$$

where:
- Lp = pitch length
- Pc = pitch circumference

## Weight Indicator Prediction

The predicted weight indicator reading is calculated from the axial tension (compression) force at surface. This is modified to account for:
- Effects of wellhead pressure
- CT pressure at the wellhead
- Stripper friction force
- Reel-back tension

Because the CT pressure at the wellhead has a major effect on the weight recorded by the weight indicator, it is important to match the fluid circulation case before performing a TFA run.

## Operating Limit and Friction Lock

After predicting the weight indicator, a search is performed for the first failure that would occur if continuing to slack off weight during RIH or continuing to pull on the CT in case of stuck pipe during POH.

The TFA model calculates what the weight indicator would be just before the occurrence of such a failure and displays this value as the operating limit. All calculations use a user-input safety factor that must account for combined effects of fatigue, corrosion, and manufacturing imperfections. The default value of 80% for the safety factor has given good results in field operations by preventing major failures during CT operations.

### Friction Lock Prediction

For RIH, the weight indicator reading for which friction lock occurs is also predicted. A graph of weight indicator reading versus force transmitted to the CT end shows a curve that tends to flatten as more weight is slacked off. There comes a point where the curve is completely flat. At this point, slacking off additional weight has no effect on the bottom hole CT end. No further progress downhole can be made after reaching this point.

When plotting a graph of the weight indicator for RIH, a region between the friction lock and operating limits can be seen. When entering this region, the CT is not in danger of failing, but it will unlikely make progress downhole. In actual field applications, this region should only be entered if necessary.

## Force Model Components

Assuming flow downwards through CT and upwards through the annulus, the forces taken into account for TFA are:

- Axial force (Fa)
- External fluid induced friction force (Ffe)
- Internal fluid induced friction force (Ff)
- CT and completion contact friction force (Ffc)
- Buoyancy force (Fb)
- Axial weight component (Fwa)
- Normal weight component (Fwn)
- Normal reaction force (Frn)
- Friction force between CT and any electrical line inside (Ffcwl)

## TFA Output Parameters

### At Various Measured Depths (between wellhead and BHA)

- The contact friction force, tri-axial stress, spiral pitch and elastic stretch
- The collapse differential limits and buckling equilibrium

### At Wellhead

- The weight indicator gauge reading
- The maximum load that can be applied to the BHA
- The weight indicator gauge reading at operating limit
- The weight gauge reading when friction lock occurs (only for RIH)
- The time to reach the operating limit and failure limit if the BHA becomes stuck (for RIH and POH)
- The completion wellhead and BHA pressure as the BHA trips into and out of the hole
- The CT workstring pressures at the injection point, gooseneck, and BHA
- The water unloading gas rate and BHA differential pressure during RIH
- The maximum tri-axial stress endured by the CT workstring
- The operating limit, mode of failure, and depth at which it occurs when the operating limit is reached
- The differential collapse pressure, buckling equilibrium, and tri-axial stress along the CT workstring at each BHA depth considered
- The reel back tension required to spool the CT

## Stress Analysis Method

The TFA model uses the Von Mises method to determine axial forces and tri-axial stresses at every depth segment until surface, then determines weight indicator reading, operating limit, and friction lock.

## Friction Coefficient Temperature Dependence

A simple relationship between temperature and the coefficient of friction was proposed for reduced friction operations:

$$\mu = a + bT$$

where:
- μ = coefficient of friction
- T = temperature
- a, b = fluid-dependent empirical coefficients

Note that if the temperature gradient is geothermal, the coefficient of friction varies linearly with depth. In addition, a method was proposed to calculate the optimal volume of lubricant for best lubricity depending on contact surface roughness.

## Recent Improvements

Two important improvements to the TFA model were incorporated to better align predicted and observed weights:

1. The cable weight was distributed along the length of the CT string. The initial model assumed that the cable weight was supported at the gooseneck for the vertical section of the CT.

2. A 'gooseneck' weight offset input was incorporated to account for the CT pushing on the back chain.

These improvements addressed the slight freedom of movement of the CT above the injector varying with reel tension from RIH to POH.
