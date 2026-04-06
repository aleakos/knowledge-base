---
parent_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-"
chunk_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-/04-compressible-flow"
section: "Compressible Flow"
order: 4
tags:
  - "engineering/fluid-mechanics"
  - "engineering/pipe-flow"
  - "engineering/compressible-flow"
summary: "Methods for computing pressure drop in compressible flow through pipes, from approximate incompressible formulas to ideal adiabatic/isothermal equations using Mach number"
formulas:
  - id: "F1"
    name: "Pressure drop using inlet properties (incompressible approximation)"
    expr: "P1 - P2 = K * w^2 * v / (A^2 * 2g)"
  - id: "F2"
    name: "Adiabatic outlet/inlet temperature ratio (approximate)"
    expr: "T2/T1 ≈ FPR * (P2/P1)^((gamma-1)/gamma)"
  - id: "F3"
    name: "Mach number definition"
    expr: "M = V/a  (a = acoustic velocity)"
---

## Compressible Flow

### Overview

In compressible flow, fluid density varies significantly with pressure along the flow path. This requires more sophisticated analysis than incompressible flow. Six methods of increasing accuracy are presented:

| Method | Accuracy | Applicable Range |
|--------|---------|-----------------|
| Inlet/outlet properties only | Fair | ΔP/P1 < 10% |
| Average properties (simple) | Good | ΔP/P1 < 40%, K ≥ 10 |
| Average properties (comprehensive) | Better | ΔP/P1 < 40%, K ≥ 6 |
| Expansion factors (Y) | Good, adiabatic only | From charts |
| Ideal equation, Mach number parameter | Exact (within assumptions) | Any; requires iteration |
| Ideal equation, pressure/temperature parameters | Exact (within assumptions) | Any; requires iteration |

### Method 1: Inlet or Outlet Properties (ΔP/P1 < 10%)

Treat the gas as incompressible, evaluate properties at one end:
```
P1 - P2 = K * w^2 * v / (A^2 * 2g)
```
where v is the specific volume at the inlet (or outlet). Valid when density variation is negligible.

### Method 2: Average Properties

Use the average specific volume v_avg = (v1 + v2)/2:
```
P1 - P2 ≈ K * w^2 * v_avg / (A^2 * 2g)
```

To find v2, the outlet temperature T2 is estimated from:
```
T2/T1 ≈ FPR * (P2/P1)^((gamma-1)/gamma)
```
where FPR = a + b*(P2/P1) + c*(P2/P1)² is a parabolic correction for adiabatic flow. Constants a, b, c are tabulated for γ = 1.4 and 1.3.

Requires iteration: guess P2, compute T2, compute v2, recompute P2 until convergence.

### Method 5: Ideal Adiabatic Equation Using Mach Number

The rigorous equation for adiabatic flow with friction in a constant-area duct uses Mach number as the integration parameter. Four inlet/outlet condition combinations are treated:
- Static pressure and temperature known at both ends
- Static pressure and total temperature known
- Total pressure and temperature known
- Total pressure and static temperature known

For each case, the governing equations relate Mach numbers at inlet and outlet to the friction parameter fL/D. These equations are implicit and require iterative solution (typically bisection or Newton-Raphson on M).

### Method 6: Ideal Equations Using Static Pressure and Temperature

Mathematically similar to Method 5 but avoids Mach number as an intermediate variable. Useful when pressures and temperatures are the natural measured quantities.

### Treating Changes in Area

At area changes within a compressible flow path, momentum equations are applied at each change point. The procedure in Section 4.3.1.5 or Section 4.3.2 provides the necessary equations.

### Isothermal Compressible Flow

For isothermal flow (T = constant), a separate ideal equation applies. This is relevant for long pipelines where heat exchange with the surroundings maintains constant temperature. The isothermal friction equation differs from the adiabatic equation.

### Practical Guidance

- For pressure drops below 10% of inlet pressure: use inlet properties (Method 1) — error negligible
- For moderate pressure drops (10–40%): use average properties (Method 2 or 3) — adequate for most engineering
- For high-accuracy work or large pressure drops: use ideal equations (Methods 5 or 6)
