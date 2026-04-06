---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/03-well-planning-tortuosity-buckling"
section: "Chapters III–VI: Well Planning, Tortuosity, Stress Concentration, and Buckling"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/well-planning"
  - "engineering/tubular-mechanics"
summary: "3D well planning mathematics, tortuosity models and their effect on torque, stress concentration factor at tool joints, and buckling criteria for deviated wellbores."
formulas:
  - id: "F1"
    name: "Minimum curvature dogleg severity (DLS) to intersect a target"
    expr: "DLS = arccos( cos(delta_Inc)*cos(delta_Az) ) / course_length  (minimum DLS to reach target from current survey station)"
  - id: "F2"
    name: "Tortuosity torque model — drift equation"
    expr: "T_tortuosity = mu * N_tortuosity * r  where N_tortuosity depends on oscillation amplitude and frequency of wellbore path"
  - id: "F3"
    name: "Stress concentration factor (SCF) — shouldered connection"
    expr: "SCF = sigma_max / sigma_nominal  where sigma_max is peak stress at shoulder and sigma_nominal is the nominal pipe body stress"
  - id: "F4"
    name: "Critical sinusoidal buckling force (horizontal well)"
    expr: "F_sin = 2 * sqrt( E*I*w*sin(alpha) / r_c )  where E*I = bending stiffness, w = buoyed weight per unit length, r_c = radial clearance"
  - id: "F5"
    name: "Critical helical buckling force (horizontal well)"
    expr: "F_hel = 2*sqrt(2) * sqrt( E*I*w*sin(alpha) / r_c )"
---

# Chapters III–VI: Well Planning, Tortuosity, Stress Concentration, and Buckling

## Chapter III: 3D Well Planning

### Wellbore Trajectory Types

The dissertation covers four standard wellbore profile types:
1. **Build type**: Inclination increases to target; no drop section.
2. **Build and hold**: Inclination built to a target angle, held constant to target.
3. **Build, hold, and drop**: Inclination built, held, then dropped (S-curve well).
4. **Horizontal well**: Inclination built to 90°, horizontal section to target.

### Mathematical Modeling Between Surveys

Wellbore position is tracked using survey stations (measured depth, inclination, azimuth). The **minimum curvature method** is the standard for computing 3D position between survey stations.

To find the minimum dogleg severity (DLS) to intersect a target from a given survey station:

```
DLS = arccos( cos(delta_Inc) * cos(delta_Az) ) / course_length
```

where delta_Inc and delta_Az are the required inclination and azimuth changes, and course_length is the planned distance to target.

The dissertation includes a worked example for computing tie-on surveys and target direction.

### 3D Wellbore Path Visualization

MATLAB v7.4 was used to visualize 3D wellbore paths, validating that planned trajectories intersect specified targets.

## Chapter IV: Tortuosity

### Physical Description

Wellbore tortuosity is the high-frequency oscillation of the actual drilled path around the planned smooth trajectory. It appears in:
- **2D (rippling)**: sinusoidal oscillation in the vertical plane.
- **3D (spiraling / corkscrew)**: helical oscillation of the borehole centerline.
- **Cyclic enlargement (hour-glassing)**: alternating diameter changes.

MWD (measurement while drilling) survey tools cannot detect tight spiral tortuosity because their sensor spacing is too large relative to the oscillation wavelength.

### Effect on Torque

Tortuosity increases the effective contact force on the drillstring because the pipe must conform to the micro-scale curvature of the borehole. The additional normal contact force generates additional friction and torque.

The dissertation develops a **drift equation** model for borehole oscillations:

```
T_total = T_smooth_wellbore + T_tortuosity
```

where T_tortuosity depends on the amplitude and frequency of the borehole oscillation. This explains why field-measured torque consistently exceeds predictions from smooth wellbore models.

## Chapter V: Stress Concentration Factor

### Tool Joint Geometry

Drill pipe tool joints are upsets (larger diameter sections) threaded and shouldered. At the transition from the tool joint body to the pipe body, a geometric discontinuity concentrates stress. Under combined tension, torsion, and bending:

```
SCF = sigma_max / sigma_nominal
```

where sigma_nominal is computed from the nominal pipe cross-section.

### Mathematical Model

The dissertation derives the SCF based on elastic stress analysis at the shoulder, accounting for:
- Thread root geometry.
- Shoulder face contact.
- Combined loading (tension + torsion + bending).

Maximum SCF values and their locations in shouldered connections are tabulated. The torque-turn curve (torque vs. turns applied during make-up) provides a diagnostic tool for connection integrity.

## Chapter VI: Buckling

### Buckling Modes

| Mode | Description | Drag Contribution |
|---|---|---|
| Sinusoidal | Pipe lies in a sinusoidal wave on low side of wellbore | Moderate drag increase |
| Helical | Pipe wraps in a helix inside wellbore | Severe drag increase; risk of lock-up |

### Critical Buckling Forces

For a horizontal wellbore:

**Sinusoidal buckling onset**:
```
F_sin = 2 * sqrt( E*I * w * sin(alpha) / r_c )
```

**Helical buckling onset**:
```
F_hel = 2*sqrt(2) * sqrt( E*I * w * sin(alpha) / r_c )
```

where:
- E*I = bending stiffness of the drillstring
- w = buoyed weight per unit length
- alpha = wellbore inclination
- r_c = radial clearance between pipe and wellbore

For vertical wellbores, the buckling load is computed from slender column theory.

### Post-Buckling Drag

Once helical buckling occurs, the contact force increases dramatically, creating a feedback loop of increasing drag. T&D models must correctly account for post-buckling contact force to predict weight transfer to bit (WOB) in horizontal wells.
