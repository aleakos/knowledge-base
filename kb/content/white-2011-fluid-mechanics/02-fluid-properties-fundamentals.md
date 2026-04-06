---
parent_id: "white-2011-fluid-mechanics"
chunk_id: "white-2011-fluid-mechanics/02-fluid-properties-fundamentals"
section: "Chapters 1–2: Fluid Properties and Pressure"
order: 2
tags:
  - "engineering/fluid-mechanics"
  - "engineering/fluid-properties"
  - "engineering/hydrostatics"
summary: "Fundamental fluid properties including viscosity, thermodynamic properties, and the continuum hypothesis; hydrostatic pressure distributions and forces on submerged surfaces."
formulas:
  - id: "F1"
    name: "Newton's viscosity law"
    expr: "tau = mu * du/dy"
  - id: "F2"
    name: "Hydrostatic pressure equation"
    expr: "dp/dz = -rho*g"
  - id: "F3"
    name: "Hydrostatic force on plane surface"
    expr: "F = rho*g*h_cg*A"
---

# Chapters 1–2: Fluid Properties and Pressure

## Chapter 1: Introduction

### The Concept of a Fluid
A fluid is a substance that deforms continuously under an applied shear stress, no matter how small. Unlike a solid, a fluid cannot sustain a shear stress in static equilibrium. Both liquids and gases are fluids.

### The Continuum Hypothesis
A fluid is treated as a continuous medium (not as discrete molecules) when the length scales of interest are much larger than the mean free path. The Knudsen number $Kn = \lambda/L \ll 1$ is the criterion for continuum validity.

### Dimensions and Units
The SI system uses: mass [kg], length [m], time [s], temperature [K]. Force is derived: 1 N = 1 kg·m/s². Pressure: 1 Pa = 1 N/m².

### Thermodynamic Properties
Key fluid properties:
- **Density** $\rho$: mass per unit volume
- **Pressure** $p$: normal stress (compressive) at a point
- **Temperature** $T$: thermodynamic temperature
- **Internal energy** $u$, **Enthalpy** $h = u + p/\rho$
- **Entropy** $s$, **Specific heats** $c_p$, $c_v$
- **Bulk modulus** $K = \rho(\partial p/\partial \rho)_s$: resistance to compression

For ideal gas: $p = \rho R T$, $c_p - c_v = R$, $\gamma = c_p/c_v$.

### Viscosity
**Dynamic viscosity** $\mu$: relates shear stress to rate of strain:
$$\tau = \mu \frac{\partial u}{\partial y}$$

**Kinematic viscosity** $\nu = \mu/\rho$.

For Newtonian fluids, $\mu$ is constant (water, air). Non-Newtonian fluids (paints, blood, polymer solutions) have viscosity dependent on strain rate.

**Temperature dependence:**
- Liquids: viscosity decreases with temperature
- Gases: viscosity increases with temperature (Sutherland law)

### Other Secondary Properties
- **Surface tension** $\Upsilon$: force per unit length at a liquid-gas interface
- **Vapor pressure** $p_v$: pressure below which liquid vaporises
- **Speed of sound** $a = \sqrt{\gamma R T}$ for an ideal gas

### Flow Patterns
- **Streamline**: curve everywhere tangent to the velocity vector at an instant
- **Streakline**: locus of particles that have passed through a given point
- **Pathline**: trajectory of a single fluid particle

For steady flow, all three coincide.

## Chapter 2: Pressure Distribution

### Pressure and Pressure Gradient
Pressure is an isotropic scalar in a fluid at rest. The pressure gradient drives fluid motion:
$$\nabla p = \rho(\mathbf{g} - \mathbf{a})$$

where $\mathbf{g}$ is gravitational acceleration and $\mathbf{a}$ is acceleration of the fluid.

### Hydrostatic Pressure Distribution
For a static fluid at rest under gravity:
$$\frac{dp}{dz} = -\rho g \tag{2.1}$$

For incompressible fluid: $p = p_0 + \rho g h$ where $h$ is depth below surface.

For compressible atmosphere (ideal gas): requires integration with varying $\rho(z)$.

### Manometry
Manometers measure pressure differences using fluid columns. The basic principle:
$$p_A - p_B = \sum \rho_i g h_i$$

### Hydrostatic Forces on Plane Surfaces
Total hydrostatic force on a planar submerged surface of area $A$:
$$F = \rho g h_{CG} A$$

where $h_{CG}$ is the depth of the centroid. The **center of pressure** $y_{CP}$ is below the centroid:
$$y_{CP} = \bar{y} + \frac{I_{xx,CG}}{\bar{y} A}$$

where $I_{xx,CG}$ is the second moment of area about the centroidal axis.

### Hydrostatic Forces on Curved Surfaces
Resolved into horizontal and vertical components:
- **Horizontal**: equal to force on projected vertical plane
- **Vertical**: equals weight of fluid above the curved surface

### Buoyancy and Stability
**Archimedes' principle**: buoyant force = weight of displaced fluid.

Stability of floating bodies depends on the relative positions of the center of gravity (G) and metacenter (M). Stable if M is above G.

### Pressure Distribution in Rigid-Body Motion
For a fluid undergoing solid-body rotation or linear acceleration, pseudo-pressures develop. For linear acceleration $a_x$:
$$\frac{\partial p}{\partial x} = -\rho a_x, \quad \frac{\partial p}{\partial z} = -\rho g$$

Free surface tilts at angle $\tan\theta = a_x/g$.
