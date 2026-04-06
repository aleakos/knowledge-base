---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/14-buoyancy-factor-derivation"
section: "Appendix B - The Buoyancy Factor Derivation"
order: 14
tags:
  - "engineering/buoyancy"
  - "engineering/mechanics"
  - "engineering/drilling"
summary: "Detailed mathematical derivation of buoyancy factor for vertical and deviated pipes, and proof that buoyancy always exists in wells."
formulas:
  - id: "B1"
    name: "Vertical pipe weight"
    expr: "W[N] = w[N/m] × D[m] = ρ_pipe g A[m²] D[m]"
  - id: "B2"
    name: "Hydrostatic buoyant force"
    expr: "F_hydrostatic = ρ_fluid g D A"
  - id: "B3"
    name: "Net submerged weight"
    expr: "W_buoyed = (ρ_pipe - ρ_fluid) g D A"
  - id: "B4"
    name: "Buoyancy factor definition"
    expr: "β = 1 - ρ_fluid / ρ_pipe"
---

# Appendix B: The Buoyancy Factor Derivation

## Vertical Pipe in Vertical Well

### Step 1: Pipe Weight in Air

First consider a pipe hanging off bottom in a vertical well. The weight of the tubular in air is:

```
W[N] = w[N/m] × D[m] = ρ_pipe g A[m²] D[m]
```

Where:
- w = unit weight = ρ_pipe g A
- ρ_pipe = density of pipe material
- g = gravitational acceleration
- A = cross-sectional area of pipe
- D = depth

### Step 2: Hydrostatic Buoyant Force

When the pipe is submerged in a fluid, a hydrostatic force acts on the bottom surface providing a lift. This force is equal to the bottom-hole pressure multiplied with the cross-sectional area of the pipe:

```
F_hydrostatic = ρ_fluid g D A
```

This represents the weight of the displaced fluid column.

### Step 3: Net Submerged Weight

The net pipe weight is the difference between the surface pipe weight and the buoyant force:

```
W_buoyed = (ρ_pipe - ρ_fluid) g D A
```

### Step 4: Buoyancy Factor Definition

Now defining the buoyant force as a buoyancy factor β multiplied with the surface pipe weight:

```
W_buoyed = (ρ_pipe - ρ_fluid) g D A = β ρ_pipe g D A
```

The buoyancy factor is therefore:

```
β = 1 - ρ_fluid / ρ_pipe
```

## Deviated Pipe in Deviated Well

### Key Observation

For a pipe submerged in a deviated well, both the weight (gravity) and the buoyant force (pressure on projected areas) act in the vertical direction. The critical principle is:

**The weight and the buoyant force always act in opposite directions on a pipe, regardless of pipe orientation. Also, they act on the very same areas (Archimedes defines buoyancy as the weight of the displaced fluid).**

Therefore, the buoyancy factor is equally valid for deviated wells as for vertical wells.

### Distribution of Buoyant Force

One difference exists between vertical and deviated wells:
- **Vertical well:** Buoyancy acts at the bottom end of the pipe only
- **Deviated well:** Buoyant force is distributed throughout the length of the pipe

The buoyancy force arises from pressure acting on all projected vertical areas along the pipe length, not just at the bottom.

## Effect of End Conditions

### Theoretical Consideration

If an open-ended pipe is rammed into the bottom of a perfectly straight vertical well, it is theoretically possible that buoyancy is lost and the hook load equals the surface weight of the string. In this case, the bottom pressure has no access to the bottom of the pipe and there is no projected area to provide buoyancy.

### Practical Reality

However, a real well is never perfectly vertical. Real wells deviate from perfect vertical wells by doglegs or deviation. Therefore, some projected area will always be exposed to provide buoyancy:

```
With reference to deviated geometry, full buoyancy is obtained if the pipe 
deviates from vertical by providing one cross-sectional area projected.
```

### Conclusion on Buoyancy Presence

It is therefore the professional opinion that:

**Buoyancy will always be present, whether the pipe end is exposed to pressure or not.**

Real wells deviate from perfect vertical wells by doglegs or deviation. This means that even in nominally vertical sections, slight deviations allow projected areas to accumulate uphole, creating distributed buoyant forces.

Figure B-4 illustrates how buoyant forces are distributed throughout a deviated string. The projected surface is found from bottom to top continuously. The case of a perfect straight pipe exposing only the end surface is not expected to occur in a real well and is therefore neglected.

## Summary

- Buoyancy factor β is equally valid for deviated and vertical wells
- Distribution differs (localized vs. distributed) but the overall effect is identical
- Real wells always have some deviation, ensuring buoyancy is always present
- The generalized approach using TVD and buoyancy factor accounts for these effects automatically
