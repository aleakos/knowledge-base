---
parent_id: "cveticanin-2023-review-drilling-systems"
chunk_id: "cveticanin-2023-review-drilling-systems/02-vibration-models"
section: "Vibration Models in Drilling Systems"
order: 2
tags:
  - "engineering/drilling"
  - "engineering/beam-theory"
  - "engineering/vibrations"
  - "engineering/stick-slip"
summary: "Mathematical models for torsional, axial, lateral, and coupled drill string vibrations, including stick-slip phenomena, bit-bounce, and whirl motion, using Timoshenko and Euler-Bernoulli beam models."
formulas:
  - id: "F1"
    name: "Axial-torsional bit-rock torque model"
    expr: "T_bit = a1 * (u_dot_bit / theta_dot_bit) + a2"
---

# Vibration Models in Drilling Systems

## Overview

Vibrations in drilling cause:
- Drill pipe fatigue and failure
- Drill-string component failures
- Intensive bit wear
- Wellbore instability
- Reduction in rate of penetration (ROP)
- Interruption of drilling operations

Most models treat each vibration mode independently due to the complexity of fully coupled simulation.

## 2.1 Torsional Vibrations

### Modelling Approach
Most models are linear but fail to capture nonlinear phenomena adequately. Nonlinear models include:
- **Nonlinear Euler-Bernoulli beam** [refs 33, 35-37]: various approximate analytic solution methods developed
- **Nonlinear viscoelastic Timoshenko beam** [ref 34]: nonlinearity in kinetic/strain energy and loading (friction torque, bit-rock torque, impact forces)

### Simple Timoshenko Model [ref 5]
Motion $\theta(t)$ around rotation axis x. Assumptions:
- Rotations about y and z-axis are small
- Stabilizers modelled as linear springs
- Top end: constant speed $\Omega$
- Bottom end: reaction torque from bit-rock contact causes severe torsional vibrations

### Extended Model [ref 16]
A lumped-parameter description with three elements: rotary table — drill pipe — BHA, modelled as mass-spring-damper. Torque $T_{bit}(\dot{\theta}_{bit})$ represents nonlinear dynamic bit-rock interaction. Relative angular velocity introduced as $\dot{\theta}_{bit}(t) \approx \Omega - \dot{\theta}(t)$.

### 30-Element Discretisation [combining refs 13, 14, 39]
Drill string as uniform 1D continuum under infinitesimal torsional deformation. Discretised with 30 Lagrange linear finite elements (2 nodes, 1 DOF per node — torsional rotation angle). Damping sources studied: material loss factor, inner/outer fluid viscosity, drilling mud friction, wellbore-stabilizer friction.

### 2.1.1 Stick-Slip Phenomena
**Definition**: Critical torsional vibration phenomenon where:
- **Stick phase**: bit rotation stops completely
- **Slip phase**: angular velocity increases to 2–3× nominal speed

**Mechanism**:
1. Surface rotary table continues rotating at constant speed
2. Trapped torsional energy builds below the bit
3. When torsional energy exceeds bit resistance: sudden slip
4. High-speed rotation generates torsional wave traveling up drill string
5. Rotary table's high inertia acts as fixed end, reflecting wave back down
6. Cycle repeats

**Effects**: Damage to drill pipes (large torsional deformation), drill bit damage (large angular velocities), increased cost, decreased ROP.

## 2.2 Axial Vibration

### Basic Model [ref 31]
Axial relative motion caused by impact force at the bottom bit-rock interface. Assumptions:
- Top end slides along guide
- Plane cross-sections remain plane
- Gravity effect ignored
- Transient motion decays fast (structural damping)
- Dominant axial motion (other motions omitted)

When impact frequency ≈ natural frequency of long drill string: resonance occurs. Alternating loads cause fatigue failure.

**Critical phenomenon**: **Bit-bounce** — intermittent loss of bit-rock contact.

### 2.2.1 Axial-Torsional Vibration Coupling [ref 38]
Axial displacement = rigid-body displacement $u_t$ + elastic deformation $u$. Independent equation for rigid-body axial dynamics.

Model: two coupled PDEs of motion. Bit force formulation:
$$T_{bit} = a_1 \frac{\dot{u}_{bit}}{\dot{\theta}_{bit}} + a_2 \tag{1}$$

where $\dot{u}_{bit}/\dot{\theta}_{bit}$ = depth of cut. First term: cutting force; second term: friction force. $T_{bit}$ increases indefinitely if $\dot{\theta}_{bit} \to 0$ — requires regulation.

Improvement [ref 42]: $n$-element discretisation with 2 DOF per node (angle $\theta_i$ + axial displacement $u_i$). Cutting and contact forces depend on rock surface morphology and strength. Results: dominant vibration is stick-slip; more likely in non-homogeneous rock.

## 2.3 Lateral Vibration

### Plane Lateral Vibration [ref 45]
Occurs in gas drilling. 3D spatial vibrations simplified to plane (2D) — justified because spatial vibration components are similar with slight differences in period and maximum amplitude.

**Critical situation**: Impact between column and borehole → **whirl motion** (forward and backward) due to mass imbalance.

**Useful application** [ref 47]: Elliptic drill trajectory (assisted by piezoelectric bending transducer) — increases efficiency in hard materials, produces smaller rock fragments, extends tool life. Two rotary motions of cutting edge: rotation around drill axis + small rotary vibration.

### 2.3.1 Lateral-Torsional Vibration (Stick-Slip + Whirl) [refs 48, 49]
Coexisting attractors observed experimentally. Fluid forces (drilling mud) cause coupling. A simplified stick-slip whirl model (confined in borehole with mud) uses bifurcation theory. Key finding: stick-slip vibration disappears when whirl appears.

### 2.3.2 Axial-Lateral-Torsional Model [ref 50]
Full nonlinear Timoshenko beam with finite strains (no simplifications). FEM discretisation with 6 DOF per node. Forces considered:
- Motor torque (constant $\Omega$ at top)
- Supporting force $f_{hook}$
- Torque $t_{bit}$ and force $f_{bit}$ at bit
- Weight of column
- Fluid forces (inside and outside column)
- Impact/rubbing forces between column and borehole
- Stabilizer forces
- Elastic and kinematic forces

The model [ref 51] includes fluid-structure interaction from drilling fluid flow inside and outside the column. Full description is possible but requires downhole data that is often unavailable [ref 52].
