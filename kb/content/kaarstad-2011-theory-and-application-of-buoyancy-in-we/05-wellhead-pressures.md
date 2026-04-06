---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/05-wellhead-pressures"
section: "Applying Wellhead Pressures"
order: 5
tags:
  - "engineering/drilling"
  - "engineering/well-intervention"
  - "engineering/buoyancy"
summary: "Effects of surface-applied pressures inside pipe, outside in annulus, or both sides; end reactions and hook load calculations for live well operations."
formulas:
  - id: "F11"
    name: "Surface pressure inside pipe - axial tension increase"
    expr: "ΔF = ΔP A = ΔP π r_i²"
  - id: "F12"
    name: "Surface pressure outside pipe - hook load reduction"
    expr: "ΔF = ΔP A = ΔP π r_o²"
---

# Applying Wellhead Pressures

During live well intervention, a surface pressure is often applied to the annulus or to the drill pipe. The generalized law of Archimedes still applies, but end reactions due to surface pressures must be added.

## Case 1: Surface Pressure Applied to the Inside of the Tubular

When surface pressure is applied only inside the pipe, the weight of the string remains unchanged, but an additional axial tension is set up in the string due to the internal pressure P. This force is:

```
ΔF = ΔP A = ΔP π r_i²
```

**Effect on Hook Load:** Increases tension equal to pressure times pipe internal area

**Effect on Axial Stress:** No effect on buoyancy; changes three-dimensional stress state

## Case 2: Surface Pressure Applied to the Outside of the Tubular

If a surface pressure is applied in the annulus only (i.e., tubular closed at bottom), the axial stress remains constant. However, a lift is provided due to a piston effect at the bottom of the pipe. The piston force can simply be computed by calculating the product of P and the projected area at each change in pipe size.

The net result at surface is the pressure multiplied by the area at the pipe exit, i.e., the wellhead:

```
ΔF = ΔP A = ΔP π r_o²
```

**Effect on Hook Load:** Reduces hook load (provides lifting force)

**Effect on Axial Stress:** No change in axial stress; only provides end reaction

## Case 3: Surface Pressure Applied to Both Sides of the Tubular

When a surface pressure is applied both in the annulus and inside the pipe, the result is no change in axial stress, but a lift (hook load reduction) given by the outer radius equation:

```
ΔF = ΔP π r_o²
```

**Effect:** Same as Case 2 - net hook load reduction

## Critical Note

These solutions are valid only inside the well. For the pipe outside the well (above the wellhead), there is no external pressure and therefore a different stress state exists.

## Summary of Wellhead Pressure Effects

| Case | Inside Pressure Effect | Axial Stress Effect | Hook Load Effect |
|------|----------------------|-------------------|------------------|
| Inside only | Yes | Increased tension | Increases |
| Outside only | No | Unchanged | Decreases |
| Both sides | No | Unchanged | Decreases |
