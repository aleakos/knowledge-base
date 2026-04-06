---
parent_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh"
chunk_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh/04-numerical-experiments"
section: "Numerical Experiments"
order: 4
tags:
  - "engineering/fluid-mechanics"
  - "engineering/numerical-methods"
  - "engineering/computational-fluid-dynamics"
summary: "Validation of the MWI formulation through four test cases: acoustic wave propagation, pressure pulse, lid-driven cavity, and Taylor vortices, demonstrating filter properties, transient term importance, and kinetic energy dissipation."
formulas:
  - id: "F1"
    name: "Kinetic energy of flow"
    expr: "E_kin = (1/2) * integral(rho * |u|^2 dOmega)"
  - id: "F2"
    name: "Kinetic energy error"
    expr: "epsilon_kin = (E_kin,0 - E_kin) / E_kin,0"
  - id: "F3"
    name: "Pressure term scaling with d (third-order convergence)"
    expr: "d_f * (dp/dx_i|_f - dp/dx_i|_f_bar) ~ Dx^3"
---

# Numerical Experiments

## Overview

Four representative test cases assess the MWI characteristics:
1. Propagation of acoustic waves — filter properties on non-equidistant meshes
2. Propagation of a non-monochromatic pressure pulse — importance of transient term
3. Lid-driven cavity — versatility and robustness on arbitrary meshes
4. Taylor vortices — kinetic energy conservation and dissipation analysis

Unless stated otherwise, the advecting velocity given by Eq. (61) (transient MWI formulation) is applied.

## Test Case 1: Acoustic Wave Propagation

### Setup
- One- and two-dimensional non-equidistant meshes
- Velocity excitation: $u_{in} = u_0 + u_0' \sin(2\pi f t)$, $u_0 = 0.30886$ m/s, $u_0' = 0.01 u_0$, $f = 1000$ s$^{-1}$
- Initial conditions: $p_0 = 10^5$ Pa, $T_0 = 24.80$ K, $\rho_0 = 14$ kg/m$^3$
- Speed of sound: $u_{s,0} = 100$ m/s, wavelength $\lambda_0 = 0.1$ m
- Theoretical pressure amplitude: $\Delta p_0 = u_{s,0} \rho_0 u_0' = 4.32$ Pa

### Three Interpolation Strategies Compared
1. **p-idw, MWI-idw**: Both face pressure and pressure gradients in MWI interpolated with IDW
2. **p-idw, MWI-1/2**: Face pressure with IDW, pressure gradients in MWI with 1/2-weighting
3. **p-1/2, MWI-1/2**: Both interpolated with 1/2-weighting

### Key Results
- All three formulations predict pressure amplitude $4.30 \leq \Delta p \leq 4.35$ Pa — excellent agreement with $\Delta p_0 = 4.32$ Pa
- The 'p-idw, MWI-idw' formulation shows no dependency on cell-size ratio $\Delta x_L/\Delta x_S$
- Formulations with 1/2-weighting in MWI show errors growing linearly with $\Delta x_L/\Delta x_S$ at mesh spacing changes
- **Conclusion**: IDW applied consistently is required to preserve the low-pass filter on non-equidistant meshes

## Test Case 2: Non-Monochromatic Pressure Pulse

### Setup
- Domain: 1 m length, 500 cells ($\Delta x = 0.002$ m)
- Gaussian pressure pulse: $\Delta p_0 = 200$ Pa, $x_0 = 0.2$ m, $s = 0.02$ m
- $u_0 = 0.001$ m/s, $u_{s,0} = 100$ m/s
- Comparison: MWI with and without transient term (Eqs. 51 vs. 53)

### Key Results
- **With transient term**: Accurate at all Courant numbers $Co = u_{s,0} \Delta t / \Delta x$
- **Without transient term**: Appreciable error in pressure profile that increases monotonically with $Co$
- **Conclusion**: The transient term is essential for accurate, time-step independent prediction of pressure wave propagation. Neglecting it causes a dispersion error.

## Test Case 3: Lid-Driven Cavity

### Setup
- Domain: 1 m × 1 m, top wall velocity $u_w = 1$ m/s
- Reynolds number: $Re = \rho L u_w / \mu = 1000$
- Three mesh types: (a) equidistant Cartesian 50×50, (b) triangular 3916 cells, (c) non-orthogonal quadrilateral 50×50
- Compressible fluid tests at $M = 2.67 \times 10^{-3}$ and $M = 0.1$

### Key Results
- Stable, oscillation-free results on all three meshes with non-orthogonal correction (Eq. 61)
- Without non-orthogonal correction on the non-orthogonal mesh: significant pressure oscillations after one time-step; solution diverges within a few time-steps
- For compressible flows at low Mach ($M = 2.67 \times 10^{-3}$): MWI essential to suppress pressure-velocity decoupling
- At $M \geq 0.1$: pressure-density coupling from the equation of state is sufficient to suppress decoupling
- Mesh convergence: second-order accuracy preserved (MWI does not affect order of accuracy)

### Effect of MWI Weighting Factor $\beta$
Reducing MWI weight via $\beta < 1$: visible pressure-velocity decoupling onset at $\beta = 0.1$; amplified at $\beta = 0.01$, confirming the robustness of the full MWI ($\beta = 1$).

## Test Case 4: Taylor Vortices

### Setup
- Domain: 2 m × 2 m, periodic in all directions, inviscid fluid
- Initial conditions:
  - $u = -\cos(\pi x)\sin(\pi y)$
  - $v = \sin(\pi x)\cos(\pi y)$
  - $p = -\frac{1}{4}[\cos(2\pi x) + \cos(2\pi y)]$
- Kinetic energy should be conserved for inviscid fluid

### Kinetic Energy Error
$$\varepsilon_{kin} = \frac{E_{kin,0} - E_{kin}}{E_{kin,0}} \tag{64}$$

### Key Results
- **Without MWI**: Kinetic energy remains essentially constant (negligible numerical dissipation)
- **With MWI**: Kinetic energy is dissipated — several magnitudes larger error, monotonically increasing
- **Third-order spatial convergence** of $\varepsilon_{kin}$ under mesh refinement (not second-order as reported by Ham & Iaccarino [49]):
  - Ham & Iaccarino did not account for $d \propto \Delta x$
  - The product $d_f \cdot (\text{pressure term}) \propto \Delta x^3$ (Eq. 65)
- Time-step independence: transient and steady MWI formulations produce same spatial convergence of $\varepsilon_{kin}$
- Dissipation is independent of time-step when MWI is consistently derived from the momentum equations
