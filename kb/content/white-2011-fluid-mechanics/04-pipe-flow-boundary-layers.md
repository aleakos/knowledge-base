---
parent_id: "white-2011-fluid-mechanics"
chunk_id: "white-2011-fluid-mechanics/04-pipe-flow-boundary-layers"
section: "Chapters 5–7: Dimensional Analysis, Pipe Flow, and Boundary Layers"
order: 4
tags:
  - "engineering/fluid-mechanics"
  - "engineering/pipe-flow"
  - "engineering/boundary-layers"
  - "engineering/dimensional-analysis"
summary: "Pi theorem and dimensional analysis; friction factor, Moody chart, and pipe flow problems; flat-plate and pressure-gradient boundary layers; external flow drag and lift."
formulas:
  - id: "F1"
    name: "Darcy-Weisbach equation"
    expr: "h_f = f * (L/D) * (V^2/(2g))"
  - id: "F2"
    name: "Colebrook formula (turbulent pipe flow)"
    expr: "1/sqrt(f) = -2.0*log10(eps/(3.7*D) + 2.51/(Re*sqrt(f)))"
  - id: "F3"
    name: "Blasius laminar boundary layer thickness"
    expr: "delta/x = 5.0 / sqrt(Re_x)"
  - id: "F4"
    name: "Reynolds number"
    expr: "Re = rho*V*L/mu = V*L/nu"
---

# Chapters 5–7: Dimensional Analysis, Pipe Flow, and Boundary Layers

## Chapter 5: Dimensional Analysis and Similarity

### The Pi Theorem (Buckingham Pi)
If a physical relation has $n$ variables involving $k$ fundamental dimensions, there are $n - k$ independent dimensionless groups $\Pi_i$:
$$f(\Pi_1, \Pi_2, \ldots, \Pi_{n-k}) = 0$$

### Important Dimensionless Groups
| Group | Definition | Physical meaning |
|---|---|---|
| Reynolds number | $Re = \rho V L/\mu$ | Inertia/viscous |
| Froude number | $Fr = V/\sqrt{gL}$ | Inertia/gravity |
| Mach number | $Ma = V/a$ | Inertia/compressibility |
| Weber number | $We = \rho V^2 L/\Upsilon$ | Inertia/surface tension |
| Euler number | $Eu = \Delta p/(\rho V^2)$ | Pressure/inertia |

### Modeling and Similarity
For geometric, kinematic, and dynamic similarity: all dimensionless groups must match between model and prototype. Conflicting requirements (e.g., full Re and Fr similarity simultaneously) are common pitfalls.

### Nondimensionalisation of Governing Equations
Navier-Stokes in dimensionless form reveals that $Re$ is the only parameter for incompressible flow. $Re \ll 1$: Stokes (creeping) flow; $Re \gg 1$: inertia dominated with thin viscous layers.

## Chapter 6: Viscous Flow in Ducts

### Reynolds Number Regimes
- Laminar: $Re < 2300$ (pipe flow)
- Transitional: $2300 < Re < 4000$
- Turbulent: $Re > 4000$

### Friction Factor and Darcy-Weisbach Equation
Head loss in a pipe:
$$h_f = f \frac{L}{D} \frac{V^2}{2g}$$

**Friction factor:**
- Laminar: $f = 64/Re$ (exact)
- Turbulent smooth pipe (Colebrook formula):
$$\frac{1}{\sqrt{f}} = -2.0\log_{10}\left(\frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$

Explicit approximation (Moody chart correlations) by Swamee-Jain:
$$f \approx \frac{0.25}{\left[\log_{10}\left(\frac{\varepsilon}{3.7D} + \frac{5.74}{Re^{0.9}}\right)\right]^2}$$

### Laminar Pipe Flow (Hagen-Poiseuille)
- Velocity profile: $u(r) = u_{max}(1 - r^2/R^2)$, parabolic
- Volume flow: $Q = \pi R^4 \Delta p / (8\mu L)$
- Average velocity: $V = R^2 \Delta p / (8\mu L)$

### Turbulent Pipe Flow
**Log-law** (universal velocity profile in turbulent boundary layer):
$$\frac{u}{u^*} = \frac{1}{\kappa}\ln\frac{yu^*}{\nu} + B, \quad \kappa \approx 0.41, B \approx 5.0$$

**Power-law approximation:** $u/U \approx (y/R)^{1/n}$, $n \approx 7$ for moderate $Re$.

### Four Types of Pipe Flow Problems
1. Given flow rate, find $\Delta p$
2. Given $\Delta p$, find flow rate
3. Given $\Delta p$ and $Q$, find pipe diameter
4. Given $\Delta p$ and $D$, find maximum $Q$

Types 2 and 3 require iteration due to friction factor dependence on $Re$.

### Minor Losses
$$h_m = K \frac{V^2}{2g}$$

Loss coefficients $K$ for: pipe entrances, exits, bends, valves, expansions, contractions.

## Chapter 7: Flow Past Immersed Bodies

### Boundary Layer Equations
For large $Re$, the boundary layer is thin. The 2D incompressible boundary layer equations:
$$u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = U\frac{dU}{dx} + \nu\frac{\partial^2 u}{\partial y^2}$$

### Flat-Plate Boundary Layer (Blasius)
Zero pressure gradient. Blasius similarity solution:
$$\frac{\delta}{x} = \frac{5.0}{\sqrt{Re_x}}, \quad C_f = \frac{0.664}{\sqrt{Re_x}} \quad \text{(laminar)}$$

Turbulent flat plate (1/7 power law):
$$\frac{\delta}{x} \approx \frac{0.16}{Re_x^{1/7}}, \quad C_f \approx \frac{0.027}{Re_x^{1/7}}$$

### Boundary Layers with Pressure Gradient
- **Favourable** ($dU/dx > 0$, $dp/dx < 0$): boundary layer thins; no separation
- **Adverse** ($dU/dx < 0$, $dp/dx > 0$): boundary layer thickens; possible separation

Separation occurs when $\partial u/\partial y|_{wall} = 0$.

### External Flow: Drag and Lift
**Drag coefficient:** $C_D = F_D / (\frac{1}{2}\rho U^2 A)$

- Sphere: $C_D \approx 0.47$ (turbulent, $Re > 10^5$); dramatic drop at $Re \approx 5\times 10^5$ (transition)
- Cylinder: $C_D \approx 1.0$ (laminar); $\approx 0.3$ (turbulent)
- Streamlined bodies: $C_D \ll 1$

**Lift coefficient:** $C_L = F_L / (\frac{1}{2}\rho U^2 A)$

Airfoil lift: $C_L = 2\pi \sin\alpha$ (thin airfoil theory, small angle).
