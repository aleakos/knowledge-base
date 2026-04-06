---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/10-wellhead-shutin"
section: "Applications - Shut-in and Pressurized Annulus"
order: 10
tags:
  - "engineering/drilling"
  - "engineering/well-intervention"
  - "engineering/buoyancy"
summary: "Hook load calculation when wellhead is shut-in with pressure applied in annulus; piston force and end reactions."
formulas:
  - id: "EX9"
    name: "Hook load reduction from annular shut-in pressure"
    expr: "ΔF = 0.5 [kN/cm²] × π × (5/2)² [in²] × 2.54² [cm²/in²] = 63 kN"
  - id: "EX10"
    name: "Final hook load with annular pressure"
    expr: "W = 649 kN - 63 kN = 586 kN"
---

# Example Calculation: Shut-in and Pressurized Annulus

## Problem Setup

Assume that the wellhead is shut in and a pressure of 50 bar (0.5 kN/cm²) is applied in the annulus. Assume static pipe, that is, no friction at the shut-in point. As discussed in the wellhead pressure section, the same effect results if the pipe is open or closed.

## Key Principle

When external pressure is applied (annulus pressure only with pipe closed at bottom), the effective axial stress remains constant. However, an end reaction is set up resulting in a reduced hook load. 

This reduction is equal to the shut-in pressure multiplied with the exit area at the wellhead, using the outer radius:

```
ΔF = P × A = ΔP × π × r_o²
```

## Calculation

For a pipe with 5 in outer diameter (2.5 in outer radius):

```
ΔF = 0.5 [kN/cm²] × π × (5/2)² [in²] × 2.54² [cm²/in²]
ΔF = 63 kN
```

## Final Hook Load

Starting from the baseline static hook load of 649 kN (from Example 4.1):

```
W_final = W_baseline - ΔF
W_final = 649 kN - 63 kN
W_final = 586 kN
```

## Results and Interpretation

| Condition | Hook Load (kN) |
|-----------|----------------|
| Static baseline (mud only) | 649 |
| With 50 bar annulus pressure | 586 |
| Load reduction | 63 |
| Percent reduction | 9.7% |

## Physical Explanation

The 63 kN reduction represents the piston force created by the pressure difference acting on the wellhead exit area. This is an end reaction that reduces the measured hook load without affecting the actual axial stress distribution in the pipe along the well depth.

## Practical Application

This calculation is crucial for:
- **Well Intervention Operations:** Understanding how surface pressures affect string support during shut-in
- **Balancing Operations:** Predicting hook load changes when applying surface pressure
- **Safety Analysis:** Ensuring the string is not overloaded or underloaded during live well operations
