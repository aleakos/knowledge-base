---
parent_id: "fazaelizadeh-nodate-real-time-torque-and-drag-analysis-durin"
chunk_id: "fazaelizadeh-nodate-real-time-torque-and-drag-analysis-durin/02-soft-string-model"
section: "Soft-String Torque and Drag Model"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/torque-and-drag"
  - "engineering/drill-string-mechanics"
summary: "Soft-string model formulation for torque and drag, including the Johancsik-Dawson-Watts equations for axial force and torque along a 3D wellbore trajectory"
formulas:
  - id: "F1"
    name: "Axial force increment (soft-string)"
    expr: "dF/ds = W*cos(alpha) - mu*N*sign(v_axial)"
  - id: "F2"
    name: "Normal contact force per unit length"
    expr: "N = sqrt((dF/ds * sin(alpha) + F*d(alpha)/ds)^2 + (F*sin(alpha)*d(phi)/ds)^2)"
  - id: "F3"
    name: "Torque increment"
    expr: "dT/ds = mu * N * r"
---

## Soft-String Torque and Drag Model

### Model Assumptions

The soft-string (or soft-rod) model is the industry-standard formulation for T&D analysis. It assumes:
- The drill string has no bending stiffness (behaves like a flexible cable or rope)
- Contact between the drill string and the wellbore is continuous along the borehole
- Friction follows the Coulomb friction law: friction force = mu * normal force
- The wellbore trajectory is defined by survey data (measured depth, inclination, azimuth)

### Governing Equations

The model is based on force equilibrium along the wellbore path. For a drill string element of length ds at inclination angle alpha and azimuth phi:

**Normal contact force per unit length:**

The resultant normal force per unit length N combines two components: the curvature-induced component (due to change in wellbore inclination) and the torsion-induced component (due to azimuth change):

```
N = sqrt( (dF/ds * sin(alpha) + F * d(alpha)/ds)^2 + (F * sin(alpha) * d(phi)/ds)^2 )
```

**Axial force balance:**

```
dF/ds = W*cos(alpha) - mu*N*sign(v_axial)
```

where:
- F = axial tension in the drill string
- W = buoyed weight per unit length
- alpha = wellbore inclination from vertical
- mu = Coulomb friction coefficient
- v_axial = axial velocity (positive = tripping out, negative = tripping in)

**Torque increment:**

```
dT/ds = mu * N * r
```

where r is the outer radius of the drill string element.

### Boundary Conditions

Integration proceeds from the bit (bottom) to surface:
- At bit: F = WOB (compressive), T = surface torque contribution from bit
- At surface: computed F = hookload, computed T = surface torque
- Comparison of computed vs. measured values at surface allows back-calculation of friction coefficient mu

### Friction Coefficient Calibration

The friction coefficient mu is the key calibration parameter:
- Typical range: 0.15–0.40 for water-based mud, 0.10–0.25 for oil-based mud
- mu is calibrated by matching computed hookload to measured hookload during tripping operations
- Separate mu values may be used for cased hole vs. open hole sections

### Limitations of Soft-String Model

- Ignores bending stiffness: underestimates torque/drag in high-curvature sections
- Cannot predict buckling or tortuosity effects
- Treats drill string as a single flexible string without accounting for tool joint geometry
