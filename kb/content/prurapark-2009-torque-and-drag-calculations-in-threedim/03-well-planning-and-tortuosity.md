---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/03-well-planning-and-tortuosity"
section: "Well Planning, Tortuosity, and Buckling"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/well-planning"
  - "engineering/tubular-mechanics"
summary: "3D well planning models for four wellbore types, tortuosity effects on torque calculations, and buckling criteria for deviated wells."
formulas:
  - id: "F1"
    name: "Minimum curvature (DLS) to intersect target"
    expr: "DLS = f(tie-on inclination, tie-on azimuth, target inclination, target azimuth, distance)"
  - id: "F2"
    name: "Sinusoidal buckling critical load (horizontal)"
    expr: "F_sin = 2 * sqrt(E*I*w/r)"
  - id: "F3"
    name: "Helical buckling critical load (horizontal)"
    expr: "F_hel = 2 * sqrt(2*E*I*w/r)"
---

# Well Planning, Tortuosity, and Buckling

## 3D Well Planning

### Objective
Compute minimum curvature (dogleg severity, DLS) required to connect current wellbore position to target position in three dimensions.

**Inputs**: Tie-on survey (measured depth, inclination, azimuth), target coordinates (TVD, North, East)

**Method**: Iterative solution for DLS that simultaneously satisfies:
- Target vertical depth (TVD)
- Target horizontal position (North/East)
- Target inclination and azimuth at landing

### Four Well Design Types

1. **Build type**: Single build section from vertical to target inclination; no drop
2. **Build and hold**: Build to target inclination then hold at constant inclination to target depth
3. **Build, hold, and drop**: Build to max inclination, hold, then drop back toward vertical (S-curve)
4. **Horizontal wellbore**: Build to 90° inclination, maintain horizontal to lateral target

Each type is modeled as a sequence of 3D curve segments with:
- Start and end inclination
- Start and end azimuth
- Measured depth of each segment
- DLS for each curve

### MATLAB Software

A 3D well planning software tool was developed in MATLAB v7.4.0 that:
- Computes wellbore trajectory for any of the four design types
- Visualizes 3D wellbore path
- Exports survey data for T&D calculations

## Tortuosity

### Definition
Tortuosity describes unplanned variation in wellbore direction beyond the planned trajectory. Distinguished from planned curvature (DLS).

### Types of Borehole Oscillations

1. **Micro-tortuosity (spiral hole)**: Tight corkscrew variation in direction; not detectable by standard MWD survey spacing
2. **Rippling**: 2D sinusoidal oscillation in the vertical plane
3. **Spiraling**: 3D corkscrew oscillation
4. **Hour-glassing**: Cyclic hole enlargement and narrowing

### Effect on Torque

Tortuosity increases the effective normal contact force because:
- The pipe must negotiate additional curvature beyond the planned well path
- Each micro-oscillation adds incremental friction contributions
- The effective borehole diameter for torque calculations uses D_drift (average drift diameter) instead of D_tj (tool joint diameter)

**Modified torque equation** (Gaynor et al. 2002):
```
M_tortuosity = mu * N * D_drift / 2
```

Compared to planned-path equation using D_tj. Tortuosity typically increases calculated surface torque by 10–30% in affected intervals.

### Drift Equation Model
The 2D drift equation describes the sinusoidal variation:
```
y(x) = A * sin(2*pi*x / lambda)
```
where A = amplitude, lambda = oscillation wavelength along the wellbore.

## Stress Concentration in Tool Joints

### Background
At rotary shouldered connections (RSCs), the change in cross-section creates stress concentrations under combined tension, torque, and bending loads.

### SCF Calculation
Tang et al. (2006) present FEA-based SCF values for premium connections. The SCF affects:
- Fatigue life of connections
- Maximum allowable torque at connections
- Not directly a T&D input but limits drillstring design

**Table: Maximum SCF values in shouldered connections** (selected values from literature):
- Standard rotary shouldered: SCF = 1.5–3.0
- Premium connections: SCF = 1.2–2.0 (reduced by finer thread geometry)

## Buckling

### Sinusoidal Buckling (Pipe in Horizontal Wellbore)
The critical axial compressive load for sinusoidal buckling initiation:
```
F_sin = 2 * sqrt(E*I*w/r)
```
where E = Young's modulus, I = pipe cross-sectional moment of inertia, w = buoyed weight/length, r = radial clearance (borehole radius - pipe OD/2)

### Helical Buckling
Helical buckling initiates at a higher compressive load:
```
F_hel = 2 * sqrt(2*E*I*w/r)
```

### Post-Buckling Drag
Once helical buckling occurs, the pipe presses against the borehole wall with additional contact force proportional to the helical pitch and axial load. This significantly increases drag:
```
delta_F_helix = (mu * F_hel * pitch) / (2*pi*r)
```

### Buckling in Vertical Wells
In vertical wells, gravity prevents the pipe from resting against the borehole wall unless the compressive load exceeds a critical value. The critical buckling load for vertical wells is higher than for horizontal wells due to the stabilizing effect of gravity.

### Practical Implications
- Helical buckling should be avoided to prevent lock-up
- T&D models must include post-buckling drag to accurately predict maximum reach
- Reducing DLS and friction coefficient are key mitigations
