---
parent_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh"
chunk_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh/03-mwi-derivation"
section: "Momentum-Weighted Interpolation: Derivation"
order: 3
tags:
  - "engineering/fluid-mechanics"
  - "engineering/numerical-methods"
  - "engineering/pressure-velocity-coupling"
summary: "Rigorous derivation of MWI from discretised momentum equations, defining weighting coefficients c and d, and analysing the low-pass filter property of the pressure field."
formulas:
  - id: "F1"
    name: "Discretised momentum equation at cell P"
    expr: "(a_P + rho_P/dt*V_P)*u_j,P + sum_F(a_F*u_j,F) = -dp/dx_j|_P * V_P + rho_P^O/dt*V_P*u_j,P^O"
  - id: "F2"
    name: "Weighting coefficient d_P"
    expr: "d_P = V_P / a_P"
  - id: "F3"
    name: "Weighting coefficient c_P (transient)"
    expr: "c_P = rho_P / (a_P * dt)"
  - id: "F4"
    name: "Face velocity (MWI, transient formulation)"
    expr: "u_i,f = u_i,f_bar - d_hat_f*(dp/dx_i|_f - dp/dx_i|_f_bar) + c^O_f*d_hat_f*(u^O_i,f - u^O_i,f_bar)"
  - id: "F5"
    name: "Low-pass filter relation (equidistant mesh)"
    expr: "dp/dx|_f - (1/2)*(dp/dx|_P + dp/dx|_E) ≈ -(d^3p/dx^3|_f)*(Dx^2/4)"
  - id: "F6"
    name: "Advecting velocity (unified, transient)"
    expr: "vartheta_f = u_i,f*n_i,f - alpha_f*d_hat_f*((p_F-p_P)/s_f - dp/dx_i|_f_bar * s_i,f) + c^O_f*d_hat_f*(vartheta^O_f - u^O_i,f*n_i,f)"
---

# Momentum-Weighted Interpolation: Derivation

## Starting Point

Using a first-order Euler scheme and neglecting source terms, the semi-discretised momentum equation (Eq. 4) at cell P is:

$$\left(a_P + \frac{\rho_P}{\Delta t} V_P\right) u_{j,P} + \sum_F a_F u_{j,F} = -\frac{\partial p}{\partial x_j}\bigg|_P V_P + \frac{\rho_P^O}{\Delta t} V_P u_{j,P}^O \tag{12}$$

where $a$ = sum of coefficients from advection and shear stress discretisation, superscript $O$ = previous time level.

## Defining Auxiliary Variables

$$\tilde{u}_{j,P} = -\frac{1}{a_P} \sum_F a_F u_{j,F} \tag{13}$$

$$d_P = \frac{V_P}{a_P} \tag{14}$$

$$c_P = \frac{\rho_P}{a_P \Delta t} \tag{15}, \quad c_P^O = \frac{\rho_P^O}{a_P \Delta t} \tag{16}$$

Equation (12) then becomes:
$$(1 + c_P d_P) u_{j,P} = \tilde{u}_{j,P} - d_P \frac{\partial p}{\partial x_j}\bigg|_P + c_P^O d_P u_{j,P}^O \tag{17}$$

Equivalent equations are written for cell F (Eq. 18) and, mimicking a staggered control volume, at face $f$ (Eq. 19).

## Interpolation to Face

$\tilde{u}_{j,f}$ is approximated by linear interpolation:
$$\tilde{u}_{j,f} \approx \overline{\tilde{u}}_{j,f} = l_f \tilde{u}_{j,P} + (1-l_f) \tilde{u}_{j,F} \tag{20}$$

This choice ensures time-step independence of the steady-state solution.

The resulting face velocity becomes (Eq. 21, full form):
$$u_{j,f} = \overline{u}_{j,f} - d_f \left(\frac{\partial p}{\partial x_j}\bigg|_f - \overline{\frac{\partial p}{\partial x_j}}\bigg|_f\right) + c_f^O d_f \left(u_{j,f}^O - \overline{u_{j,f}^O}\right)$$

## Pressure Gradient and Low-Pass Filter

### Equidistant Mesh

The discretised cell-centred pressure gradients:
$$\left.\frac{\partial p}{\partial x}\right|_f \approx \frac{p_E - p_P}{\Delta x}, \quad \left.\frac{\partial p}{\partial x}\right|_P \approx \frac{p_E - p_W}{2\Delta x}, \quad \left.\frac{\partial p}{\partial x}\right|_E \approx \frac{p_{EE} - p_P}{2\Delta x}$$

With 1/2-weighting interpolation of cell-centred pressure gradients to face $f$:
$$\left.\frac{\partial p}{\partial x}\right|_f - \frac{1}{2}\left(\left.\frac{\partial p}{\partial x}\right|_P + \left.\frac{\partial p}{\partial x}\right|_E\right) \approx -\frac{\partial^3 p}{\partial x^3}\bigg|_f \frac{\Delta x^2}{4} \tag{32}$$

The pressure term is proportional to the **third-order derivative of pressure** — this is the low-pass filter that suppresses non-physical pressure oscillations on collocated meshes. It converges with $\Delta x^2$, preserving second-order accuracy.

### Non-Equidistant Meshes

For inverse distance weighting (IDW) applied consistently to all pressure interpolations:
$$\left.\frac{\partial p}{\partial x}\right|_f - \left(l_f^{(idw)}\left.\frac{\partial p}{\partial x}\right|_P + (1-l_f^{(idw)})\left.\frac{\partial p}{\partial x}\right|_E\right) \propto \frac{\partial^3 p}{\partial x^3}\bigg|_f \tag{40}$$

The filter is preserved when IDW is applied consistently. Mixing IDW and 1/2-weighting breaks the filter equivalence.

## Weighting Coefficients c and d

For the pressure term to vanish when the pressure gradient is constant or linearly varying:
$$d_f = \frac{d_P + d_F}{2} \tag{48}$$

with the approximation $d_P \approx d_F$ (Eq. 50), which is necessary (not merely convenient) to obtain a physical solution.

Similarly:
$$\hat{d}_f = \frac{d_f}{1 + c_f d_f} \tag{52}$$

## MWI Formulations

### Transient formulation (Eq. 51):
$$u_{i,f} = \overline{u}_{i,f} - \hat{d}_f \left(\left.\frac{\partial p}{\partial x_i}\right|_f - \overline{\left.\frac{\partial p}{\partial x_i}\right|_f}\right) + c_f^O \hat{d}_f \left(u_{i,f}^O - \overline{u_{i,f}^O}\right)$$

### Steady-state formulation (Rhie-Chow, Eq. 53):
$$u_{i,f} = \overline{u}_{i,f} - d_f \left(\left.\frac{\partial p}{\partial x_i}\right|_f - \overline{\left.\frac{\partial p}{\partial x_i}\right|_f}\right)$$

Note: Using the transient coefficient $d^*_P = V_P/(a_P + \rho V_P/\Delta t)$ in the steady-state formula (Eq. 55) causes time-step dependent pressure-velocity decoupling for small $\Delta t$.

## Advecting Velocity on Arbitrary Meshes

For non-orthogonal meshes ($\hat{s}_f \neq \hat{n}_f$), a deferred-correction approach is applied to retain the filter:

$$\left.\frac{\partial p}{\partial x_i}\right|_f \hat{n}_{i,f} \approx \alpha_f \frac{p_F - p_P}{s_f} + \overline{\left.\frac{\partial p}{\partial x_i}\right|_f} \left(\hat{n}_{i,f} - \alpha_f \hat{s}_{i,f}\right) \tag{59}$$

The unified advecting velocity for transient flows on arbitrary meshes (Eq. 61):
$$\vartheta_f = u_{i,f} \hat{n}_{i,f} - \alpha_f \hat{d}_f \left(\frac{p_F - p_P}{s_f} - \overline{\left.\frac{\partial p}{\partial x_i}\right|_f} \hat{s}_{i,f}\right) + c_f^O \hat{d}_f \left(\vartheta_f^O - u_{i,f}^O \hat{n}_{i,f}\right)$$

Three choices for $\alpha_f$:
- $\alpha_f = 1$: Filter properties independent of mesh non-orthogonality
- $\alpha_f = \hat{n}_f \cdot \hat{s}_f$: Reduces filter weight as non-orthogonality increases (Zwart; Ham & Iaccarino)
- $\alpha_f = (\hat{n}_f \cdot \hat{s}_f)^{-1}$: Increases filter weight as non-orthogonality increases (Denner & van Wachem)
