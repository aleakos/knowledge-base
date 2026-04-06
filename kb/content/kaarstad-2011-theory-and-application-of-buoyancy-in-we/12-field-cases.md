---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/12-field-cases"
section: "Field Cases - Dynamic Buoyancy Factor in Running In Hole"
order: 12
tags:
  - "engineering/drilling"
  - "engineering/well-operations"
  - "engineering/buoyancy"
  - "engineering/field-data"
summary: "Two North Sea field cases demonstrating dynamic buoyancy factor model during running-in-hole operations with pipe filling every 1000 m."
formulas: []
---

# Field Cases: Dynamic Buoyancy Factor in Running In Hole

## Overview

To verify the effectiveness of the generalized Archimedes' principle model, two field cases are presented where the buoyancy effect is prominent.

When running in hole (RIH) with a drill string, a float valve is often used. The float valves provide added blowout protection at the bottom of the drill string, prevent flow-back when making connections, and keep cuttings out of the drill string. It is important to fill the drill pipe regularly (e.g., every 1000 mMD) when RIH. Failure to do so will increase the collapse load on the drill string and can cause damage to the drill pipe and/or the float valve.

## Field Case #1: Horizontal Well

### Well Profile

- **Total Length:** 5300 mMD
- **Kick-off Point:** 350 mMD
- **Build Section 1:** Builds to 30 degrees at 1200 mMD
- **Sail Section:** Continues down to 2750 mMD
- **Build Section 2:** Ends horizontally at approximately 4500 mMD
- **Well Type:** Horizontal

### Operations and Analysis

During RIH of this well, the pipe is filled with mud every 1000 mMD. The drill string must be projected onto the vertical depth axis before Equation 5 can be used to calculate the buoyancy factor through the drill string.

This exercise is repeated as the drill string is RIH. The result shows the overall buoyancy factor plotted as a function of bit depth.

For a given bit depth, the local cumulative buoyancy factor through the drill string varies as a function of depth. The result is that when calculating the axial load on the drill string, the local buoyancy factor applied on a drill string element is found from the cumulative buoyancy factor curve at the depth of interest.

### Dynamic Buoyancy Factor Model

The buoyancy factor is a dynamic parameter that is changing as the drill string is RIH. When calculating the local buoyancy factor on a drill string that is lifted or lowered, a **dynamic buoyancy factor (DBF) model** is applied.

The model clearly shows a large variation in the overall buoyancy factor depending on the amount of air in the drill string. This variation in buoyancy factor is reflected in the hook load as the drill string is being RIH.

### Key Results

The modeled data using the DBF model clearly gives a better match than the single buoyancy factor model:

- **Single Buoyancy Factor:** Assumes constant buoyancy throughout RIH (inaccurate)
- **Dynamic Buoyancy Factor:** Accounts for changing air volume as pipe is filled periodically

Using the DBF enables accurate prediction of the naturally step-shaped hook load while RIH so that other factors affecting the hookload may be recognized at an early stage.

## Field Case #2: Shallow Horizontal Well

### Well Profile

- **Type:** Shallow horizontal well with large turns
- **Kick-off Point:** Approximately 400 mMD
- **Build to Horizontal:** 2300 mMD at 1600 mTVD
- **Last Run:** 3000 mMD to 5000 mMD

### Distinctive Feature

There is a large variation in the overall buoyancy factor with increasing bit depth. However, there is one distinct difference compared to Field Case #1.

Because of the shallow vertical depth of this well, the effect of buoyancy in this well is higher at large bit depths. This is shown in the buoyancy factor plot where the overall buoyancy factor increases substantially with bit depth.

### Physical Explanation

The increased buoyancy effect at large bit depths in shallow wells occurs because:
1. The vertical projection becomes a smaller fraction of measured depth
2. More air volume accumulates in the drill string at depth
3. The air significantly reduces effective density compared to mud

### Application of DBF Model

The DBF model can now be applied to calculate the lowering force of the drill string while RIH. The modeled data fits the recorded hookload data when applying the DBF model. 

The simplicity of applying the DBF model into the 3-dimensional torque and drag model clearly proves it to be a powerful tool for accurate torque and drag calculations.

## Summary of Field Cases

Both field cases demonstrate the following critical points:

1. **Importance of Correct Buoyancy Calculation:** Field data clearly validates the theoretical model
2. **Dynamic Nature of Buoyancy:** Buoyancy varies as pipe is filled during RIH operations
3. **Multiple Fluid Densities:** The equation is general and applies to any combination of fluids (mud and air in these cases)
4. **Practical Tool Development:** The DBF model provides a simple yet powerful approach to torque and drag analysis
5. **Early Anomaly Detection:** Accurate hook load prediction enables early recognition of other issues affecting the well

The success of these field cases validates the generalized Archimedes' principle and demonstrates its practical utility in complex well operations.
