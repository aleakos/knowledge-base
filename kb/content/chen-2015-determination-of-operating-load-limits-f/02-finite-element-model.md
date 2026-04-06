---
parent_id: "chen-2015-determination-of-operating-load-limits-f"
chunk_id: "chen-2015-determination-of-operating-load-limits-f/02-finite-element-model"
section: "Three-Dimensional Elasto-Plastic Finite Element Model"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/finite-element-method"
summary: "Description of the 3D ABAQUS/Explicit FEA model for RSCs including governing equations, mesh, material nonlinearity, and contact conditions for the pin-box thread interface."
formulas:
  - id: "F1"
    name: "Virtual work governing equation"
    expr: "∭_V S δE dV = ∬_A F δu dA"
  - id: "F2"
    name: "Green strain tensor (incremental)"
    expr: "δE = B * δu_e"
  - id: "F3"
    name: "Contact: separation condition"
    expr: "du_n^(1) - du_n^(2) + δ > 0  →  p_n = p_t = 0"
  - id: "F4"
    name: "Contact: adhesive condition"
    expr: "du_n^(1) - du_n^(2) + δ = 0,  p_n = -E_n*(du_n^(2)-du_n^(1)-δ),  p_t = -E_t*(du_t^(2)-du_t^(1))"
  - id: "F5"
    name: "Contact: sliding condition"
    expr: "du_t^(1) - du_t^(2) > 0  →  p_t = -μ * p_n * sign(du_t^(2) - du_t^(1))"
---

# Three-Dimensional Elasto-Plastic Finite Element Model

## Governing Equations

Based on the principle of virtual work in Lagrangian coordinates (F1):
```
∭_V S δE dV = ∬_A F δu dA
```
where:
- `S` = Kirchhoff stress tensor
- `E` = Green strain tensor
- `F` = force vector on element surface
- `δu` = virtual displacement
- `V`, `A` = volume and surface in initial configuration

Green strain tensor incremental form (F2):
```
δE = B * δu_e
δu = N * δu_e
```
where `B` = strain matrix, `u_e` = nodal displacement, `N` = shape function.

The global FE equations are assembled as:
```
Σ cᵀ ∭_V Bᵀ S dV = Σ cᵀ ∬_A Nᵀ F dA
```
where `cᵀ` maps element nodal displacements to structure nodal displacements.

**Solver**: ABAQUS/Explicit — chosen because the highly discontinuous contact state of thread surfaces is better handled by explicit rather than implicit integration.

## Mesh Model

**Connection modeled**: 4-3/4″ NC35 thread, both API RSC (single shoulder) and DSC (double shoulder)

**Connection specifications:**
| Parameter | Value |
|-----------|-------|
| Outside diameter | 120.65 mm |
| Inner diameter | 50.8 mm |
| Pitch diameter at gauge point | 89.69 mm |
| Box counterbore | 98.84 mm |
| Pin length | 95.25 mm |
| Taper | 1/6 |
| Thread profile | NC35 |

**Mesh strategy:**
- Refined mesh at thread regions for numerical accuracy
- Coarse mesh away from threads for computational efficiency
- Distributing coupling element on pin free end (applies external loads)
- Kinematic coupling element on box free end (applies constraints)
- DSC differs from API RSC only by addition of a secondary shoulder

## Material Nonlinearity

True stress–plastic strain data from tensile testing:
- Yield stress: 841.8 MPa
- Ultimate stress: 997.7 MPa
- Failure criterion: plastic strain > 0.192

Elasto-plastic material behavior is defined by a tabulated true stress vs. plastic strain curve covering plastic strains from 0 to 0.097 (15 data points from 758 MPa to 1095 MPa).

## Contact Nonlinearity

Three contact states at thread and shoulder interfaces:

**Separation** (F3):
```
du_n^(1) - du_n^(2) + δ > 0  →  p_n = p_t = 0  (surfaces apart, no force)
```

**Adhesive** (F4):
```
p_n = -E_n * (du_n^(2) - du_n^(1) - δ)
p_t = -E_t * (du_t^(2) - du_t^(1))
```

**Sliding** (F5):
```
p_t = -μ * p_n * sign(du_t^(2) - du_t^(1))
```

Penalty contact algorithm: slave node penetrations generate forces opposing the penetration proportional to penetration distance; equal and opposite reactions on the master surface.

## Load Application

Two analysis steps:
1. **Step 1**: Apply recommended make-up torque smoothly, then release (simulates tong makeup in the field)
2. **Step 2**: Apply large working torque incrementally until connection failure

Smooth load curves are used to suppress numerical oscillation.

Load cases:
| | Case 1 (API RSC) | Case 2 (DSC) |
|-|-----------------|--------------|
| Make-up torque (kN·m) | 17.33 | 26.93 |
| Working torque (kN·m) | 40 | 50 |
