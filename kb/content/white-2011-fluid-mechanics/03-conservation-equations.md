---
parent_id: "white-2011-fluid-mechanics"
chunk_id: "white-2011-fluid-mechanics/03-conservation-equations"
section: "Chapters 3–4: Conservation Laws"
order: 3
tags:
  - "engineering/fluid-mechanics"
  - "engineering/conservation-equations"
  - "engineering/navier-stokes"
summary: "Reynolds Transport Theorem, integral and differential forms of mass, momentum, and energy conservation; Navier-Stokes equations, stream function, and vorticity."
formulas:
  - id: "F1"
    name: "Reynolds Transport Theorem"
    expr: "dB_sys/dt = d/dt(integral_CV(beta*rho*dV)) + integral_CS(beta*rho*(V dot dA))"
  - id: "F2"
    name: "Continuity equation (differential)"
    expr: "d(rho)/dt + div(rho*V) = 0"
  - id: "F3"
    name: "Navier-Stokes (incompressible, constant viscosity)"
    expr: "rho*(DV/Dt) = -grad(p) + mu*laplacian(V) + rho*g"
  - id: "F4"
    name: "Bernoulli equation"
    expr: "p + (1/2)*rho*V^2 + rho*g*z = const (along streamline, frictionless, steady, incompressible)"
  - id: "F5"
    name: "Stream function (2D incompressible)"
    expr: "u = d(psi)/dy, v = -d(psi)/dx"
---

# Chapters 3–4: Conservation Laws

## Chapter 3: Integral Relations for a Control Volume

### Reynolds Transport Theorem (RTT)
The fundamental tool for converting system (Lagrangian) equations to control volume (Eulerian) form:
$$\frac{dB_{sys}}{dt} = \frac{d}{dt}\int_{CV} \beta \rho \, dV + \oint_{CS} \beta \rho (\mathbf{V} \cdot d\mathbf{A})$$

where $B$ is any extensive property and $\beta = dB/dm$ is the corresponding intensive property.

### Conservation of Mass (Continuity)
$$\frac{d}{dt}\int_{CV} \rho \, dV + \oint_{CS} \rho (\mathbf{V} \cdot d\mathbf{A}) = 0$$

For steady flow: $\oint_{CS} \rho (\mathbf{V} \cdot d\mathbf{A}) = 0$.

For 1D steady flow between sections 1 and 2: $\rho_1 V_1 A_1 = \rho_2 V_2 A_2$.

### Linear Momentum Equation
$$\sum \mathbf{F} = \frac{d}{dt}\int_{CV} \rho \mathbf{V} \, dV + \oint_{CS} \rho \mathbf{V} (\mathbf{V} \cdot d\mathbf{A})$$

Forces include pressure, viscous stresses, gravity, and reaction forces. Applied to pipe bends, nozzles, propellers, jets.

### The Bernoulli Equation
For frictionless, steady, incompressible flow along a streamline:
$$p + \frac{1}{2}\rho V^2 + \rho g z = \text{const}$$

Valid assumptions: steady, frictionless, incompressible, along a streamline. The energy grade line (EGL) and hydraulic grade line (HGL) are graphical tools.

### Angular Momentum Theorem
$$\sum \mathbf{M}_O = \frac{d}{dt}\int_{CV} \mathbf{r} \times \rho \mathbf{V} \, dV + \oint_{CS} (\mathbf{r} \times \mathbf{V}) \rho (\mathbf{V} \cdot d\mathbf{A})$$

Applied to turbomachinery: Euler turbomachine equation $T_{shaft} = \rho Q (r_2 V_{\theta 2} - r_1 V_{\theta 1})$.

### Energy Equation
$$\dot{Q} - \dot{W}_s = \frac{d}{dt}\int_{CV} e \rho \, dV + \oint_{CS} \left(h + \frac{V^2}{2} + gz\right) \rho (\mathbf{V} \cdot d\mathbf{A})$$

For steady 1D flow: **head form** $h_p = h_f + \Delta(p/\gamma + V^2/2g + z)$ where $h_p$ is pump head and $h_f$ is friction head loss.

## Chapter 4: Differential Relations for Fluid Flow

### Acceleration Field
$$\frac{D\mathbf{V}}{Dt} = \frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla)\mathbf{V}$$

Local acceleration + convective acceleration.

### Continuity Equation (Differential)
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{V}) = 0$$

For incompressible flow: $\nabla \cdot \mathbf{V} = 0$.

### Linear Momentum — Navier-Stokes Equations
For incompressible, Newtonian fluid with constant viscosity:
$$\rho \frac{D\mathbf{V}}{Dt} = -\nabla p + \mu \nabla^2 \mathbf{V} + \rho \mathbf{g}$$

In component form (x-direction):
$$\rho\left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}\right) = -\frac{\partial p}{\partial x} + \mu\left(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}\right) + \rho g_x$$

### Energy Equation (Differential)
Includes viscous dissipation $\Phi$:
$$\rho c_v \frac{DT}{Dt} = k\nabla^2 T - p\nabla \cdot \mathbf{V} + \Phi$$

### Boundary Conditions
- **No-slip**: $\mathbf{V}_{fluid} = \mathbf{V}_{wall}$ at solid surfaces
- **Kinematic**: at a free surface, normal velocity must match surface motion
- **Dynamic**: pressure and shear stress continuous at interfaces

### Stream Function (2D Incompressible)
Defined so continuity is automatically satisfied:
$$u = \frac{\partial \psi}{\partial y}, \quad v = -\frac{\partial \psi}{\partial x}$$

Streamlines are lines of constant $\psi$. Volume flow between two streamlines = $\psi_2 - \psi_1$.

For 2D viscous flow: $\nabla^4 \psi = 0$ (biharmonic equation).

### Vorticity and Irrotationality
Vorticity: $\boldsymbol{\omega} = \nabla \times \mathbf{V}$.

Irrotational flow: $\boldsymbol{\omega} = 0 \Rightarrow$ velocity potential $\phi$ exists such that $\mathbf{V} = \nabla\phi$.

For incompressible irrotational flow: $\nabla^2\phi = 0$ (Laplace equation).

### Illustrative Viscous Flows
- **Couette flow**: flow between parallel plates; linear velocity profile
- **Poiseuille flow**: fully developed pipe flow; parabolic profile; $Q = \pi R^4 \Delta p/(8\mu L)$
