---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/06-summary-buoyancy-issues"
section: "Summary of Buoyancy-Related Issues"
order: 6
tags:
  - "engineering/drilling"
  - "engineering/buoyancy"
  - "engineering/well-design"
summary: "Comprehensive summary of generalized Archimedes principle applicability, buoyancy in deviated wells, buckling calculations, and surface pressure effects."
formulas: []
---

# Summary of Buoyancy-Related Issues

## Applicability of the Generalized Archimedes' Principle

The general Archimedes' principle is valid for all cases involving tubular submerged in fluids. It gives correct axial load for:

- Tensile strength analysis
- Buckling analysis
- Casing collapse analysis
- Vertical wells
- Deviated wells

## Buoyancy in Deviated Wells

The weight of a string in a deviated well is given by:

```
W = w [kN/m] × D_TVD [m] × β
```

Where:
- w = unit weight (kN/m)
- D_TVD = projected vertical height (m)
- β = buoyancy factor

This applies to any well path.

## Fundamental Principle

There is always buoyancy in a well, whether the pipe end is exposed to pressure or not. In real wells that deviate from vertical even slightly, some projected area will be exposed to provide buoyancy.

## Buckling Calculations

For buckling calculations, the generalized law of Archimedes is equivalent to the force-area method corrected for fictitious or stability forces.

For a free-hanging drill string, the neutral point is at the bottom of the pipe.

## Surface Pressure Effects

When applying a surface pressure, the following end effects must be added:

### Inside Pipe Pressure
- **Hook Load Effect:** No effect on hook load
- **Axial Tension Effect:** Increases tension equal to pressure times pipe internal area
- **Formula:** ΔF = ΔP × π r_i²

### Outside Pipe or Both Sides Pressure
- **Axial Stress Effect:** Not affecting axial stress
- **Hook Load Effect:** Reduces hook load equal to pressure multiplied with pipe exit area
- **Formula:** ΔF = ΔP × π r_o²

## Key Design Insights

1. The generalized Archimedes' principle provides a unified framework applicable to all well conditions
2. The piston force method and Archimedes' principle give identical results when stability forces are properly accounted for
3. Failure analysis should be based on stress invariants (J₂ for metals) rather than absolute stress values
4. Buoyancy is always present in deviated wells due to projected vertical areas
5. Surface pressures create end reactions that must be superimposed on buoyancy-based loading
