---
parent_id: "white-2011-fluid-mechanics"
chunk_id: "white-2011-fluid-mechanics/05-compressible-open-channel-turbomachinery"
section: "Chapters 8–11: Potential Flow, Compressible Flow, Open Channels, Turbomachinery"
order: 5
tags:
  - "engineering/fluid-mechanics"
  - "engineering/compressible-flow"
  - "engineering/open-channel-flow"
  - "engineering/turbomachinery"
summary: "Potential flow, shock waves, isentropic nozzle flow, open-channel hydraulics, and turbomachinery including pumps and turbines, covering Chapters 8 through 11 of White's textbook."
formulas:
  - id: "F1"
    name: "Isentropic flow relation"
    expr: "T0/T = 1 + (gamma-1)/2 * Ma^2"
  - id: "F2"
    name: "Normal shock: density ratio"
    expr: "rho2/rho1 = (gamma+1)*Ma1^2 / ((gamma-1)*Ma1^2 + 2)"
  - id: "F3"
    name: "Manning equation (open channel)"
    expr: "V = (1/n)*R_h^(2/3)*S^(1/2)"
  - id: "F4"
    name: "Euler turbomachine equation"
    expr: "W_dot = rho*Q*(U2*V_theta2 - U1*V_theta1)"
  - id: "F5"
    name: "Froude number"
    expr: "Fr = V / sqrt(g*y)"
---

# Chapters 8–11: Potential Flow, Compressible Flow, Open Channels, Turbomachinery

## Chapter 8: Potential Flow and Computational Fluid Dynamics

### Potential Flow
For irrotational, incompressible flow: $\nabla^2\phi = 0$, $\nabla^2\psi = 0$.

**Elementary solutions:**
| Flow | $\phi$ | $\psi$ |
|---|---|---|
| Uniform flow | $Ux$ | $Uy$ |
| Source/sink | $(m/2\pi)\ln r$ | $(m/2\pi)\theta$ |
| Doublet | $(\kappa\cos\theta)/r$ | $-(\kappa\sin\theta)/r$ |
| Vortex | $-(\Gamma/2\pi)\theta$ | $(\Gamma/2\pi)\ln r$ |

**Superposition:** Flow over a cylinder = uniform flow + doublet.

**Kutta-Joukowski theorem:** $L' = \rho U \Gamma$ (lift per unit span).

### Numerical CFD (Section 8.9)
Overview of finite-difference, finite-element, and finite-volume methods. Grid generation, boundary conditions, and convergence are introduced.

## Chapter 9: Compressible Flow

### Thermodynamics Review
Speed of sound: $a = \sqrt{\gamma R T}$ (ideal gas). Mach number $Ma = V/a$.

Stagnation (total) conditions:
$$\frac{T_0}{T} = 1 + \frac{\gamma-1}{2}Ma^2$$
$$\frac{p_0}{p} = \left(1 + \frac{\gamma-1}{2}Ma^2\right)^{\gamma/(\gamma-1)}$$

### Isentropic Flow with Area Changes
Area-velocity relation: $\frac{dA}{A} = (Ma^2-1)\frac{dV}{V}$

At throat ($A^*$): $Ma = 1$. For $Ma < 1$: decreasing area accelerates flow. For $Ma > 1$: increasing area accelerates flow.

**Mass flow parameter:** $\dot{m} = p_0 A^* \sqrt{\gamma/(RT_0)} \cdot f(Ma)$.

### Normal Shock Wave
Rankine-Hugoniot relations across a normal shock (subscript 1 = upstream, 2 = downstream):
$$Ma_2^2 = \frac{(\gamma-1)Ma_1^2 + 2}{2\gamma Ma_1^2 - (\gamma-1)}$$
$$\frac{p_2}{p_1} = \frac{2\gamma Ma_1^2 - (\gamma-1)}{\gamma+1}$$
$$\frac{\rho_2}{\rho_1} = \frac{(\gamma+1)Ma_1^2}{(\gamma-1)Ma_1^2 + 2}$$

Shocks always decelerate flow to $Ma_2 < 1$. Total pressure decreases across a shock.

### Fanno Flow (Friction) and Rayleigh Flow (Heat Transfer)
- **Fanno flow**: adiabatic duct flow with friction; choking at $Ma = 1$
- **Rayleigh flow**: frictionless duct flow with heat addition; also chokes at $Ma = 1$

### 2D Supersonic Flow and Expansion Waves
Oblique shocks turn the flow; Prandtl-Meyer expansion fans turn supersonic flow around convex corners.

## Chapter 10: Open-Channel Flow

### Uniform Flow: Manning and Chezy Equations
$$V = \frac{1}{n} R_h^{2/3} S^{1/2} \quad \text{(Manning, SI units)}$$

where $n$ = Manning roughness coefficient, $R_h = A/P$ = hydraulic radius, $S$ = channel slope.

Chezy formula: $V = C\sqrt{R_h S}$ with $C = R_h^{1/6}/n$ (Chezy-Manning).

### Specific Energy and Critical Flow
Specific energy: $E = y + V^2/(2g)$. Critical depth $y_c$: $dE/dy = 0$ at constant $Q$.

Froude number:
$$Fr = \frac{V}{\sqrt{gy}}$$

- $Fr < 1$: subcritical (tranquil) flow
- $Fr = 1$: critical flow
- $Fr > 1$: supercritical (rapid) flow

### Hydraulic Jump
Abrupt transition from supercritical to subcritical. Momentum balance:
$$\frac{y_2}{y_1} = \frac{1}{2}\left(-1 + \sqrt{1 + 8Fr_1^2}\right)$$

Energy is dissipated in the jump: $\Delta E = (y_2 - y_1)^3/(4y_1 y_2)$.

### Gradually Varied Flow
$$\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$$

where $S_0$ = bed slope, $S_f$ = friction slope. Twelve types of flow profiles depending on channel slope classification and flow depth relative to normal and critical depths.

## Chapter 11: Turbomachinery

### Classification
- **Pumps**: add energy to fluid (centrifugal, axial, mixed flow)
- **Turbines**: extract energy from fluid (impulse: Pelton; reaction: Francis, Kaplan)

### Centrifugal Pump
**Euler turbomachine equation:**
$$\dot{W}_{shaft} = \rho Q (U_2 V_{\theta 2} - U_1 V_{\theta 1})$$

where $U = \omega r$ = blade speed, $V_\theta$ = tangential fluid velocity.

**Head-capacity curve**: $H$ decreases as $Q$ increases. System curve: $H_s = \Delta z + f(Q^2)$.

Operating point: intersection of pump and system curves.

### Pump Similarity Rules (Affinity Laws)
For geometrically similar pumps at different speeds $\omega$ or sizes $D$:
$$\frac{Q_1}{Q_2} = \frac{\omega_1 D_1^3}{\omega_2 D_2^3}, \quad \frac{H_1}{H_2} = \frac{\omega_1^2 D_1^2}{\omega_2^2 D_2^2}, \quad \frac{P_1}{P_2} = \frac{\omega_1^3 D_1^5}{\omega_2^3 D_2^5}$$

### Specific Speed
$$N_s = \frac{\omega Q^{1/2}}{(gH)^{3/4}}$$

Centrifugal: $N_s \approx 0.1$–$1.0$; Mixed-flow: $\approx 1$–$4$; Axial: $\approx 4$–$10$.

### Pump-System Matching
For pumps in series: heads add at same $Q$. For pumps in parallel: flows add at same $H$.

### Turbines
- **Pelton (impulse)**: $W_{max}$ at $U/V_j = 1/2$; high head, low flow
- **Francis (mixed-flow reaction)**: medium head, medium flow; $\eta \approx 95\%$
- **Kaplan (axial reaction)**: low head, high flow; adjustable blades
