---
parent_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh"
chunk_id: "bartholomew-2018-unified-formulation-of-the-momentumweigh/05-source-terms-density"
section: "Source Terms and Density Weighting"
order: 5
tags:
  - "engineering/fluid-mechanics"
  - "engineering/numerical-methods"
  - "engineering/multiphase-flow"
summary: "Extension of MWI to handle discontinuous source terms using force-balanced discretisation, and density-weighted MWI for flows with large density ratios including two-phase flows."
formulas:
  - id: "F1"
    name: "Quiescent flow momentum balance with source"
    expr: "0 = -dp/dx_i|_P + S_i,P"
  - id: "F2"
    name: "Advecting velocity with driving pressure gradient"
    expr: "vartheta_f = u_i,f*n_i,f - alpha_f*d_hat_f*((Delta_p_f/s_f - S_i,f*s_i,f) - (dp_tilde/dx_i|_f_bar - S_i,f)*s_i,f) + c^O_f*d_hat_f*(vartheta^O_f - u^O_i,f*n_i,f)"
  - id: "F3"
    name: "Force-balanced source term discretisation"
    expr: "S_i,P = (1/V_P) * sum_f(w_i,f * Delta_S_f + k_i,f)"
  - id: "F4"
    name: "Distance-weighted source term interpolation at face"
    expr: "S_f = l_f^(dw)*S_P + (1 - l_f^(dw))*S_F, with l_f^(dw) = q_Pf/(q_Pf + q_Ff)"
---

# Source Terms and Density Weighting

## Motivation for Including Source Terms in MWI

For a quiescent flow with external force S, the semi-discretised momentum equations reduce to:
$$0 = -\frac{\partial p}{\partial x_i}\bigg|_P + S_{i,P} \tag{66}$$

The corresponding advecting velocity from Eq. (61) gives a condition (Eq. 68):
$$\frac{\Delta p_f}{s_f} = S_{i,f} \hat{s}_{i,f}$$

This can only be satisfied if the source term results in a uniform or linearly varying pressure field. For discontinuous source terms (e.g., surface tension at a phase interface), this fails without special treatment.

### Decomposition of Pressure Gradient

The total pressure gradient consists of:
$$\frac{\partial p}{\partial x_i}\bigg|_P = \frac{\partial \tilde{p}}{\partial x_i}\bigg|_P + S_{i,P} \tag{69}$$

where $\nabla \tilde{p}$ is the **driving pressure gradient** (associated with fluid motion) and $S_{i,P}$ represents the source-induced contribution.

Only the driving pressure gradient should enter the MWI low-pass filter. The advecting velocity including source terms becomes (Eq. 70):
$$\vartheta_f = u_{i,f}\hat{n}_{i,f} - \alpha_f \hat{d}_f \left(\frac{\Delta \tilde{p}_f}{s_f} - \overline{\frac{\partial \tilde{p}}{\partial x_i}}\bigg|_f \hat{s}_{i,f}\right) + c_f^O \hat{d}_f \left(\vartheta_f^O - u_{i,f}^O \hat{n}_{i,f}\right)$$

## Force-Balanced Source Term Discretisation

### Cell-Centred Discretisation (Eq. 73)

To match the discretisation of pressure gradients:
$$S_{i,P} = \frac{1}{V_P} \sum_f \left(w_{i,f} \Delta S_f + k_{i,f}\right), \quad \text{with } \Delta S_f = S_{j,f} \hat{s}_{j,f} s_f$$

This mirrors the pressure gradient discretisation using the divergence theorem (Eq. 33).

### Face Interpolation with Distance Weighting (Eq. 76)

The force applied by source terms is integrated over the distance between cell centre and face. To preserve this force with a discretised source:
$$S_f = l_f^{(dw)} S_P + \left(1 - l_f^{(dw)}\right) S_F, \quad l_f^{(dw)} = \frac{q_{Pf}}{q_{Pf} + q_{Ff}}$$

Note: Distance weighting (weight proportional to distance from face) is used here, contrasting with the **inverse** distance weighting for pressure.

### Full Advecting Velocity with Source Terms (Eq. 78)

$$\vartheta_f = u_{i,f}\hat{n}_{i,f} - \alpha_f \hat{d}_f \left[\frac{\Delta p_f}{s_f} - S_{i,f}'\hat{s}_{i,f} - \left(\overline{\frac{\partial p}{\partial x_i}}\bigg|_f - S_{i,f}'\right) \hat{s}_{i,f}\right] + c_f^O \hat{d}_f \left(\vartheta_f^O - u_{i,f}^O \hat{n}_{i,f}\right)$$

The same discretised source $S_{i,P}$ must also be applied in the discretised momentum equations to maintain force balance.

## Numerical Validation: Source Terms

### 1D Stepped and Ramped Source Terms
Two cases tested (Eqs. 80–81); exact solution: $\partial u/\partial x = 0$, $\partial p/\partial x = S(x)$.

Three approaches compared:
- **MWI**: No source terms in MWI — produces large velocity errors at discontinuities
- **MWI-S**: Source terms included as-is — also produces errors (discretisation mismatch)
- **MWI-S'**: Force-balanced discretisation (Eq. 73) — matches exact solution, zero velocity error

### 2D Hybrid Mesh (Quadrilateral/Triangular)
A two-dimensional domain (1 m × 0.2 m) with a triangular region (0.25 m ≤ x ≤ 0.75 m, 0.05 m ≤ y ≤ 0.15 m) demonstrates the formulation on arbitrary meshes with source terms.

### 3D Spherical Drop with Surface Tension
Surface tension acts as a discontinuous source term at the phase interface. The MWI-S' formulation eliminates spurious velocities that appear with MWI and MWI-S.

## Density Weighting in MWI

For flows with discontinuous density changes (e.g., two-phase flows), the weighting coefficient $\hat{d}_f$ must account for density jumps.

The density-weighted formulation modifies the coefficient $d_P$:
$$d_P \propto \frac{V_P}{a_P} \cdot \frac{1}{\rho_P}$$

This ensures the MWI correctly couples pressure and velocity across density discontinuities. The unified formulation:
- Handles density ratios up to six orders of magnitude
- Maintains stability for two-phase flows with large density jumps
- Reduces or eliminates solution errors compared to formulations without density weighting

## Numerical Validation: Density Discontinuity

Two-phase flows with density ratios from $10^1$ to $10^6$ are tested. The proposed unified MWI formulation:
- Provides robust pressure–velocity coupling across all density ratios
- Reduces errors significantly compared to formulations without density-aware weighting
- Maintains second-order accuracy of the underlying finite-volume method
