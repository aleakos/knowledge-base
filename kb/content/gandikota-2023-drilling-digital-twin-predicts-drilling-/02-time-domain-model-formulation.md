---
parent_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-"
chunk_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-/02-time-domain-model-formulation"
section: "Time Domain Analysis Model Formulation"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/digital-twins"
summary: "Multi-body dynamics formulation of the BHA time-domain model including equation of motion, beam element connections, Circle-Cylinder contact model, friction force, and PDC bit-rock interaction."
formulas:
  - id: "F1"
    name: "Equation of motion (multi-body)"
    expr: "M_b*q'' + C_b*q' + D_b*q = f_g + f_a + f_c - k"
  - id: "F2"
    name: "Friction force model"
    expr: "F_friction = f * N * v_s / v_s_empirical  (regularized Coulomb)"
  - id: "F3"
    name: "PDC bit cutting decomposition"
    expr: "w = w_c + w_f,  t = t_c + t_f"
  - id: "F4"
    name: "PDC cutting components"
    expr: "t_c = ε * d,  w_c = ζ * ε * d  (proportional to depth of cut d)"
---

# Time Domain Analysis Model Formulation

## Multi-Body Dynamics Approach

The BHA is discretized as interconnected rigid and flexible beam elements. Each element can undergo arbitrary rigid body motion with small elastic deformation.

### Equation of Motion (F1)

The equation of motion in vector-dimension (Pogorelov et al., 1998, 2012):
```
M_b * q'' + C_b * q' + D_b * q = f_g + f_a + f_c - k
```
where:
- `q` = generalized coordinates vector
- `k` = generalized inertia forces vector
- `f_g`, `f_a`, `f_c` = generalized gravity, applied, and reaction forces vectors
- `M_b`, `C_b`, `D_b` = mass, stiffness, and damping matrices of the beam

### Component Management System (CMS) Approach

Flexible beams model uniform BHA sections (uniform geometry and density). Equations of motion are generated from analytical solutions. Uniform sections are connected via viscoelastic force elements of high stiffness.

The coupling element parameters (three linear and three angular stiffness constants plus corresponding damping) are set to finite but optimized values to provide acceptable results with minimal computation time.

## Contact Model: Circle-Cylinder

BHA-wellbore contact is modeled using Circle-Cylinder contact force elements. This element models compliant contact of a circular cross-section beam with a cylindrical wellbore of varying diameter.

**Contact normal force**: depends on penetration depth and penetration rate.

**Friction force model** (regularized Coulomb, F2):
```
F_friction = f * N * v_s / v_s_empirical
```
where:
- `f` = dynamic friction coefficient
- `N` = normal force
- `v_s` = sliding velocity
- `v_s_empirical` = small empirical velocity used for regularization

This formulation includes static and dynamic friction, enabling the model to predict both bit-induced and string-induced stick-slip without additional special-purpose stick-slip models.

### Fluid Effects

Dynamic effects of drilling fluid are reduced to:
- Buoyancy forces modeled as additional masses (Chen et al., 1976)
- Frequency-dependent external damping

## PDC Bit-Rock Interaction Model

The PDC bit model (Detournay and Defourny, 1992; Detournay et al., 2008) treats the cutting process as a combination of cutting and frictional contact.

### Weight and Torque Decomposition (F3)

Total WOB and TOB are decomposed into cutting and frictional contact components:
```
w = w_c + w_f
t = t_c + t_f
```

### Cutting Components (F4)

From single-cutter test results (Richard et al., 2012) and laboratory drilling tests:
```
t_c = ε * d
w_c = ζ * ε * d
```
where `ε` = intrinsic specific energy, `d` = depth of cut.

### Three Drilling Phases

1. **Phase I (contact-dominated)**: `w_f < w_f*` — frictional contact dominates; bit behaves as a blunt tool
2. **Phase II (cutting-dominated)**: `w_f = w_f*` — any increase in WOB translates directly to increased cutting; bit behaves as a sharp tool
3. **Phase III (poor cleaning)**: `w_f > w_f*` — pile-up of sheared rock increases contact area and frictional resistance

The **intrinsic specific energy** `ε` provides a holistic characterization of PDC bit response. It is calibrated from bit geometry, WOB, bit friction, and ROP measurements at a known formation point.

## Numerical Solution

- Parallel processing on multi-core computers for efficiency
- Output frequencies up to 500 Hz (6 Hz used in the case study)
- Model uses offset subsurface data: Young's modulus, density, Poisson ratio, UCS per formation layer
