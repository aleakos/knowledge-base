---
parent_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a"
chunk_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a/03-timoshenko-beam-formulation"
section: "1D Timoshenko Beam Formulation"
order: 3
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/timoshenko"
summary: "Variational formulation and Hermitian polynomial discretisation of a 2-node 1D Timoshenko beam element with 6 DOF per node, including shear deformation correction and full 3D stiffness matrix."
formulas:
  - id: "F1"
    name: "Euler-Bernoulli beam equation"
    expr: "EI * d^4v/dx^4 = q(x)"
  - id: "F2"
    name: "Timoshenko shear force balance"
    expr: "EI_z * d^3v/dx^3 + K_s*G*A*gamma = 0"
  - id: "F3"
    name: "Shear distortion"
    expr: "gamma = -6*(EI_z/(K_s*G*A))"
  - id: "F4"
    name: "Timoshenko shape functions (phi = 1/(1+alpha), alpha = 12*EI_z/(K_s*G*A*L^2))"
    expr: "N1(x)=1-3x^2phi/L^2+2x^3phi/L^3-xphi(phi1-1)/L; N2(x)=x-2x^2phi/L+x^3phi/L^2+(x^2phi(phi1-1)/L - xphi(1/phi-1)/2); N3=xphi(phi-1)/L+3x^2phi/L^2-2x^3phi/L^3; N4=x^2phi/L^2*(various terms)"
  - id: "F5"
    name: "Timoshenko stiffness matrix (bending+shear, 4x4)"
    expr: "K_e = phi*EI_z/L^3 * [[12, 6L, -12, 6L], [6L, L^2*(3phi+1)/phi, -6L, L^2*(3phi-1)/phi], [-12, -6L, 12, -6L], [6L, L^2*(3phi-1)/phi, -6L, L^2*(3phi+1)/phi]]"
---

# 1D Timoshenko Beam Element Formulation

## Variational (Weak) Formulation

Starting from the Euler-Bernoulli beam equation:
$$EI\frac{d^4 v(x)}{dx^4} = q(x) \tag{24}$$

where $E$ = Young's modulus, $I$ = second moment of area, $v(x)$ = displacement, $q(x)$ = applied external force.

A test function $w(x)$ is applied and the equation is integrated twice by parts over domain $\Omega = (0, L)$ to reduce the order. The final weak form (Eq. 30):
$$\int_0^L \frac{d^2 w}{dx^2} EI_z \frac{d^2 v}{dx^2} = \int_0^L w(x)q(x)\,dx$$

where $M(0)$ and $M(L)$ are bending moments at the initial and final nodes.

## Hermitian Polynomial for 1D Beam (Eq. 31)

$$v(x) = dx^3 + cx^2 + bx + a$$

Boundary conditions: $\{v_1, \theta_1, v_2, \theta_2\}$ at $x = 0$ and $x = L$.

## Timoshenko Shear Extension (Eqs. 32–34)

Timoshenko's beam theory adds shear distortion $\gamma$ as an independent variable. The shear force balance:
$$EI_z \frac{d^3 v}{dx^3} + K_s G A \gamma = 0 \tag{32}$$

The shear distortion:
$$\gamma = -6\frac{EI_z}{K_s G A} \tag{33}$$

The rotation including shear:
$$\theta(x) = \frac{dv}{dx} + 6\frac{EI_z}{K_s G A} \tag{34}$$

where:
- $K_s$ = shear correction factor (depends on cross-section shape)
- $G$ = shear modulus
- $A$ = shear area

## Timoshenko Shape Functions (Eqs. 36–39)

Defining:
$$\phi = \frac{1}{1+\alpha}, \quad \alpha = \frac{12 EI_z}{K_s G A L^2}$$

The four shape functions are:
$$N_1(x) = 1 - \frac{3x^2\phi}{L^2} + \frac{2x^3\phi}{L^3} - \frac{x\phi(\phi_1-1)}{L} \tag{36}$$

$$N_2(x) = x - \frac{2x^2\phi}{L} + \frac{x^3\phi}{L^2} + \frac{x^2\phi(\phi_1-1)}{L} - \frac{x\phi}{2}\left(\frac{1}{\phi}-1\right) \tag{37}$$

$$N_3(x) = \frac{x\phi(\phi-1)}{L} + \frac{3x^2\phi}{L^2} - \frac{2x^3\phi}{L^3} \tag{38}$$

$$N_4(x) = \frac{x^2\phi}{L^2} - \frac{x^3\phi}{L^3} + \frac{x^2\phi}{2L} - \frac{x\phi}{2}\left(\frac{1}{\phi}-1\right) \tag{39}$$

## Stiffness Matrix (Eq. 43)

The 4×4 stiffness matrix for bending and shear ($v_1, \theta_1, v_2, \theta_2$ ordering):
$$K_e = \frac{\phi EI_z}{L^3}\begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & \frac{L^2(3\phi+1)}{\phi} & -6L & \frac{L^2(3\phi-1)}{\phi} \\
-12 & -6L & 12 & -6L \\
6L & \frac{L^2(3\phi-1)}{\phi} & -6L & \frac{L^2(3\phi+1)}{\phi}
\end{bmatrix}$$

**Note:** When $\alpha = 0$ (no shear deformation, Euler-Bernoulli limit), $K_e$ reduces to the classical Euler-Bernoulli stiffness matrix.

## Force Vector (Eq. 44)

For uniformly distributed load $w(x)$:
$$F_e = \begin{bmatrix} -\frac{1}{2}w(x)L \\ -\frac{1}{12}L^2 w(x) \\ -\frac{1}{2}w(x)L \\ \frac{1}{12}L^2 w(x) \end{bmatrix}$$

## Full 3D Element (12 DOF per element)

The full 3D stiffness matrix (Figure A2 in paper) has dimensions 12×12, combining:
- Bending around z-axis (using $I_z$)
- Bending around y-axis (using $I_y$)
- Axial effects
- Torsional effects

The full 3D DOF schema (Figure A3) shows 6 DOF per node: $\{u, v, w, \theta_u, \theta_v, \theta_w\}$.

## Cross-Section Deformation from Axis Displacements

The 1D Timoshenko element uses geometric relationships to infer cross-section deformation from axis displacement. This is based on the hypothesis that the deformed cross-section shape can be reconstructed from axis deformations using trigonometric relations — valid for simple cases but loses accuracy for torsional and complex loading conditions.
