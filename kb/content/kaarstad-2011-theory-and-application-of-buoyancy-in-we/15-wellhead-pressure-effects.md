---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/15-wellhead-pressure-effects"
section: "Appendix C - Effects of Shut-in Wellhead Pressure"
order: 15
tags:
  - "engineering/drilling"
  - "engineering/well-intervention"
  - "engineering/pressure-analysis"
summary: "Detailed analysis of surface-applied pressure effects showing that generalized Archimedes' principle applies with end reactions added; cases for internal, external, and both-sides pressures."
formulas: []
---

# Appendix C: Effects of Shut-in Wellhead Pressure

## Fundamental Principle

The generalized law of Archimedes defines the axial loading for all cases involving buoyancy effects. If a surface pressure is applied inside the string or in the annulus, it should be evaluated as an **end reaction** to be added to the buoyed weight of the pipe.

## Pressure Distribution During Shut-in

When surface pressure is applied, the resulting pressures in the drill pipe and annulus depend on the shut-in configuration:

| Shut-in Pressure | Pressure in Annulus | Pressure in Drill Pipe |
|-----------------|-------------------|----------------------|
| Case C.1: Drill pipe only | P_a = ρ g D | P_dp = ρ g D + ΔP |
| Case C.2: Annulus only | P_a = ρ g D + ΔP | P_dp = ρ g D |
| Case C.3: Both sides | P_a = ρ g D + ΔP | P_dp = ρ g D + ΔP |

Where ΔP is the applied surface pressure.

## Case C.1: Surface Pressure Applied Inside the String

### Analysis

Comparing the calculated force expressions with the results of the buoyancy derivation, it is clear that:

**The buoyed weight of the drill string remains constant when a surface pressure is applied inside the drill string.**

The weight is still given by the principle of Archimedes and depends only on the density difference between steel and the external fluid.

### Three-Dimensional Stress State

However, the three-dimensional stress state is changed due to the internal surface pressure. This must be taken into account in failure calculations of the drill pipe.

### Axial Tension Increase

The axial tension increase due to the inside surface pressure is:

```
ΔF = ΔP × π r_i²
```

where r_i is the internal pipe radius.

**For failure considerations:** This internal pressure force should be added to the weight-based loads when assessing tubular capacity.

## Case C.2: Surface Pressure Applied in the Annulus

### Analysis

The net result is that the **deviatoric loading is the same whether or not a surface pressure is applied.**

However, an **end reaction is set up providing a lifting force.**

### Piston Effect

Hook load reduction is equal to the surface pressure times the **exit area** of the pipe (at the wellhead):

```
ΔF = ΔP × π r_o²
```

where r_o is the outer pipe radius at the exit point.

### Stress State

The deviatoric force (the stress relevant for metal failure) remains constant. Only the hook load (axial load at surface) is reduced by the piston effect. The axial stress distribution in the pipe at depth is unchanged.

## Case C.3: Surface Pressure on Both Sides of the String

### Analysis

For this case, the additional surface pressure causes a lifting force in the string, as in Case C.2.

Comparing with the vertical well results, it is clear that:

**The deviatoric force remains constant when a surface pressure is applied inside and outside the drill string. The deviatoric force is given by the principle of Archimedes.**

### Hook Load Effect

The hookload, as seen on surface, decreases by:

```
ΔF = ΔP × π r_o²
```

This is identical to the Case C.2 result, as the external pressure dominates the end reaction.

## Stress State Summary Table

The following table shows forces at different locations in the drill string for each case:

| Pressure Case | Piston Force | Avg. Hydrostatic Force | Deviatoric Force |
|--------------|-------------|----------------------|------------------|
| C.1 (inside) | Changes with pressure | Unchanged | Unchanged |
| C.2 (outside) | Changes with pressure | Unchanged | Unchanged |
| C.3 (both) | Changes with pressure | Unchanged | Unchanged |

Key insight: Only the piston force (and thus hook load) changes with external pressure. The deviatoric force relevant for failure assessment remains constant.

## Practical Application

### For Tubular Design

Use the deviatoric stress components (based on J₂) for failure assessment. Surface pressures that create piston forces do not affect the stress distribution along the well.

### For Hook Load Prediction

Use the Archimedes-based weight plus end reactions from surface pressures to predict hook load changes during live well operations.

### For Balanced Operations

Understanding that external pressure reduces hook load (via piston effect) allows proper equipment sizing and operational planning for well intervention.
