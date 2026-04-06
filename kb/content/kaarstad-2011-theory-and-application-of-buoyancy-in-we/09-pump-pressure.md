---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/09-pump-pressure"
section: "Applications - Applying Pump Pressure Inside Drill String"
order: 9
tags:
  - "engineering/drilling"
  - "engineering/hydraulics"
  - "engineering/buoyancy"
summary: "Calculation of axial tension increase in drill string due to pump pressure during drilling operations."
formulas:
  - id: "EX7"
    name: "Tension increase in drill collar from pump pressure"
    expr: "ΔF = 3 [kN/cm²] × π × (3/2)² [in²] × 2.54² [cm²/in²] = 137 kN"
  - id: "EX8"
    name: "Tension increase in drill pipe from pump pressure"
    expr: "ΔF = 3 [kN/cm²] × π × (4/2)² [in²] × 2.54² [cm²/in²] = 243 kN"
---

# Example Calculation: Applying Pump Pressure Inside Drill String

## Problem Setup

During drilling, the pump pressure applied is 300 bar (3 kN/cm²). Pressurizing the string has no effect on buoyancy. However, an internal tension is set up inside the drill string. This tension is equal to the pressure multiplied with the internal area of the pipe.

## Calculation Approach

The increased tension in each component is calculated using:

```
ΔF = P × A_internal = P × π × r_i²
```

Where the pressure needs appropriate unit conversion for the chosen pipe dimensions.

## Tension Increase in Drill Collar

For the 8 x 3 in drill collars with 3/2 in internal radius:

```
ΔF = 3 [kN/cm²] × π × (3/2)² [in²] × 2.54² [cm²/in²]
ΔF = 137 kN
```

## Tension Increase in Drill Pipe

For the 5 x 4 in drill pipe with 4/2 = 2 in internal radius:

```
ΔF = 3 [kN/cm²] × π × (4/2)² [in²] × 2.54² [cm²/in²]
ΔF = 243 kN
```

## Results and Implications

| Component | ID (in) | Internal Area | Tension Increase (kN) |
|-----------|---------|---------------|----------------------|
| Drill Collars | 3 | 7.07 in² | 137 |
| Drill Pipe | 4 | 12.57 in² | 243 |

## Key Points

1. **No Effect on Buoyancy:** Pump pressure does not change the buoyancy factor or the weight reduction from fluid support.

2. **Additional Axial Load:** The pressure creates an additional tensile stress that must be added to the weight-based axial loads for failure assessment.

3. **Larger Pipe ID = Larger Effect:** The drill pipe experiences a greater absolute tension increase due to its larger internal diameter, even though the pressure is the same throughout the string.

4. **Failure Assessment:** These tensions must be considered in conjunction with other loads when assessing tubular capacity using stress invariants like J₂.

5. **Practical Importance:** Understanding this effect is critical for safe pump pressure selection and tubular design in drilling operations.
