---
parent_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem"
chunk_id: "sasa-nodate-development-of-a-new-3d-beam-finite-elem/03-large-displacement-updated-lagrangian"
section: "Chapter 3: Large Displacements / Small Strains — Updated Lagrangian Formulation"
order: 3
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
  - "engineering/nonlinear-mechanics"
summary: "Extension of the new 3D beam element to large displacement / small strain regime using Updated Lagrangian formulation with consistent rotation vector treatment."
formulas:
  - id: "F1"
    name: "Updated Lagrangian weak form"
    expr: "integral_{tV} [t+dt_sigma_ij * delta(t+dt_epsilon_ij)] dV = t+dt_R  (internal virtual work = external load at config t+dt)"
  - id: "F2"
    name: "Linearized UL equilibrium (incremental)"
    expr: "K_L * Delta_d + K_NL * Delta_d = t+dt_R - t_F  where K_L = linear stiffness, K_NL = geometric stiffness, t_F = internal force vector"
  - id: "F3"
    name: "Rotation decomposition (co-rotational approach)"
    expr: "R_total = R_rigid * R_strain  decomposed into rigid body rotation and deformation part"
  - id: "F4"
    name: "Incremental displacement field (enhanced 3D beam, large rotation)"
    expr: "Delta_u = Delta_u_rigid + Delta_u_deform  where Delta_u_deform includes contribution from central node DoFs"
---

# Chapter 3: Large Displacements / Small Strains — Updated Lagrangian Formulation

## Motivation

Textile forming processes involve **large displacements and rotations** of yarns (fibers rotate by tens of degrees), even though the strains within each yarn remain small. The linear small-strain formulation of Chapter 2 is insufficient; a geometrically nonlinear formulation is required.

## Lagrangian Formulation Choices

Two standard approaches for large deformation FEM:

| Formulation | Reference Configuration | Best Suited For |
|---|---|---|
| **Total Lagrangian (T.L.)** | Fixed original (undeformed) configuration | Large strains |
| **Updated Lagrangian (U.L.)** | Current (deformed) configuration, updated at each step | Large rotations / small strains |

The thesis selects **Updated Lagrangian (U.L.)** because textile forming involves large rotations with small material strains, which is the natural domain of U.L. formulation.

## Updated Lagrangian Weak Form

The principle of virtual work at configuration t+dt:

```
integral_{tV} [ t+dt_sigma_ij * delta(t+dt_epsilon_ij) ] dV = t+dt_R
```

This is linearized around the known configuration at time t, yielding an incremental form:

```
(K_L + K_NL) * Delta_d = t+dt_R - t_F
```

where:
- K_L = linear (material) stiffness matrix.
- K_NL = geometric stiffness matrix (accounts for stress-stiffening from current stress state).
- t_F = internal force vector at current configuration.
- Delta_d = incremental displacement vector.

## Rotation Vector Treatment

Large rotations require special treatment in FEM because rotation is not a vector in the usual sense — finite rotations are not commutative. The thesis adopts a **motion decomposition** approach:

```
R_total = R_rigid_body * R_deformation
```

The rotation vector is decomposed into a **rigid body rotation** (spinning without straining) and a **deformation part** that drives straining.

### Small Rotation Theory

At each increment, the rotation is assumed small enough that a linearized rotation approximation applies within the step. The accumulated rotation (large) is stored in the updated configuration, not in the linearized increment.

## Incremental Displacement Field for Enhanced 3D Beam

The incremental displacement field for the enhanced element at large rotation:

```
Delta_u = Delta_u_rigid(x,theta) + Delta_u_deform(x,y,z)
```

where:
- Delta_u_rigid: standard rigid-body translation + rotation of beam centroidal axis.
- Delta_u_deform: deformation contribution from end-node DoFs (axial/shear) + central-node DoFs (cross-section deformation).

This formulation correctly separates rigid body motion (which generates no strain) from deformational motion (which generates strain and stress).

## Validation: Large Displacement / Large Rotation Examples

### Cantilever with Isotropic Material

A cantilever beam subjected to a tip load producing large deflection (up to 90° rotation of the tip):
- Centroidal axis displacement in x and y directions vs. ABAQUS: excellent agreement.
- Cross-section deformation distributions (v_c+, v_c-, v_a, w_c+, w_c-) vs. ABAQUS: excellent agreement at multiple load levels.

### Cantilever with Orthotropic Material

Same geometry with orthotropic material properties (reflecting anisotropy of textile yarns):
- Large displacement response computed.
- Cross-section deformation distributions show coupling between transverse directions — correctly captured by the 8 central-node DoFs.
- Agreement with ABAQUS solid element models confirms the formulation is accurate for anisotropic materials under large rotations.

## Key Conclusions — Chapter 3

- The Updated Lagrangian formulation with rotation decomposition correctly handles large rotations and small strains.
- The 8 central-node DoFs remain effective in capturing cross-section deformation at large rotation configurations.
- The element provides excellent numerical performance for both isotropic and orthotropic materials.
