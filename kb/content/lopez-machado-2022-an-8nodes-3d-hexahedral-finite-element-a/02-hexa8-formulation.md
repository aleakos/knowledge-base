---
parent_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a"
chunk_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a/02-hexa8-formulation"
section: "Hexahedral FE Formulation"
order: 2
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/isoparametric-elements"
summary: "Isoparametric formulation of the 8-node hexahedral element with Hermitian shape functions, Jacobian transformation, elasticity matrix, and stiffness/force matrices via Gaussian integration."
formulas:
  - id: "F1"
    name: "Hermitian polynomial"
    expr: "P(xi) = a + b*xi + c*xi^2 + d*xi^3"
  - id: "F2"
    name: "Hermitian shape functions"
    expr: "H1=(1/4)(xi^3 - 3xi + 2); H2=(1/4)(xi^3 - xi^2 - xi + 1); H3=(1/4)(-xi^3 + 3xi + 2); H4=(1/4)(xi^3 + xi^2 - xi - 1)"
  - id: "F3"
    name: "Elemental stiffness matrix (weak form)"
    expr: "K_e = integral_Omega(B^T * D * B * J * dOmega) = sum_i(w_i * B(x_i)^T * D * B(x_i) * det(J))"
  - id: "F4"
    name: "Elemental force matrix (weak form)"
    expr: "F_e = integral_Omega(N^T * q(x) * J * dOmega) = sum_i(w_i * N(x_i)^T * q(x) * det(J))"
  - id: "F5"
    name: "Jacobian matrix"
    expr: "J = [[dx/dxi, dy/dxi, dz/dxi], [dx/deta, dy/deta, dz/deta], [dx/dzeta, dy/dzeta, dz/dzeta]]"
---

# Hexahedral Finite Element Formulation (Hexa 8)

## Isoparametric Formulation

The hexahedral element is defined in the isoparametric domain $\Omega = (-1, 1)$ for each edge ($\xi$, $\eta$, $\zeta$ axes). The element has 8 nodes and 6 DOF per node (3 translations + 3 rotations), giving 48 DOF per element.

## Hermitian Polynomial (Eq. 1)

Third-degree Hermitian polynomial along one local axis:
$$P(\xi) = a + b\xi + c\xi^2 + d\xi^3$$

Boundary conditions for one edge ($\theta_{w1}$, $w_1$, $\theta_{w2}$, $w_2$): displacement $w$ and rotation $\theta = dP/d\xi$ at each node. Solving the 4×4 linear system yields the constants $a, b, c, d$.

## Shape Functions (Eq. 3)

$$H_1(\xi) = \frac{1}{4}(\xi^3 - 3\xi + 2) \quad \text{(displacement, node 1)}$$
$$H_2(\xi) = \frac{1}{4}(\xi^3 - \xi^2 - \xi + 1) \quad \text{(rotation, node 1)}$$
$$H_3(\xi) = \frac{1}{4}(-\xi^3 + 3\xi + 2) \quad \text{(displacement, node 2)}$$
$$H_4(\xi) = \frac{1}{4}(\xi^3 + \xi^2 - \xi - 1) \quad \text{(rotation, node 2)}$$

$H_1, H_3$ represent displacements; $H_2, H_4$ represent rotations.

**Completeness property**: Evaluating any displacement shape function at its own node gives 1; evaluating any rotation shape function there gives 0.

## 3D Shape Functions (Superposition, Eqs. 4–11)

For node $k$, the 3D shape functions are products of 1D Hermitian functions along each axis. For example:
- Node 1: $NH_1(\xi,\eta,\zeta) = H_3(\xi)H_3(\eta)H_3(\zeta)$; $RH_1(\xi,\eta,\zeta) = H_4(\xi)H_4(\eta)H_4(\zeta)$
- Node 2: $NH_2 = H_1(\xi)H_3(\eta)H_3(\zeta)$; $RH_2 = H_2(\xi)H_4(\eta)H_4(\zeta)$

(Full set: Eqs. 4–11 for all 8 nodes)

## Coordinate Transformation (Jacobian, Eqs. 12–16)

The isoparametric coordinates are mapped to Cartesian coordinates $(X, Y, Z)$ using:
$$X = \sum_{i=1}^n NH_i(\xi,\eta,\zeta) X_i + \sum_{i=1}^n RH_i(\xi,\eta,\zeta) X_i$$

Similarly for $Y$ and $Z$.

**Jacobian matrix:**
$$J = \begin{bmatrix}
\partial x/\partial\xi & \partial y/\partial\xi & \partial z/\partial\xi \\
\partial x/\partial\eta & \partial y/\partial\eta & \partial z/\partial\eta \\
\partial x/\partial\zeta & \partial y/\partial\zeta & \partial z/\partial\zeta
\end{bmatrix}$$

Cartesian derivatives are obtained via:
$$\frac{\partial}{\partial X} = (J^{-1})^T \frac{\partial}{\partial \xi}$$

## Deformation and Displacement Matrices (Eqs. 17–18)

**B matrix (6 rows per node, 48 total columns):** Contains partial derivatives of shape functions w.r.t. Cartesian coordinates, relating strains to nodal DOF.

For node $n$, the B-matrix block contains entries like $\partial NH_n/\partial x$, $\partial RH_n/\partial x$, etc., forming the six strain components $\{\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{xy}, \gamma_{yz}, \gamma_{zx}\}$.

**N matrix (displacement interpolation, 6×6 per node):**
$$N = \text{diag}(NH_n, NH_n, NH_n, RH_n, RH_n, RH_n)$$

## Elasticity Parameters (Eq. 19)

The constitutive relation $\sigma = D\varepsilon$ uses the Lamé parameters $\mu$ and $\lambda$:

$$D = \begin{bmatrix}
2\mu+\lambda & \lambda & \lambda & 0 & 0 & 0 \\
\lambda & 2\mu+\lambda & \lambda & 0 & 0 & 0 \\
\lambda & \lambda & 2\mu+\lambda & 0 & 0 & 0 \\
0 & 0 & 0 & \mu & 0 & 0 \\
0 & 0 & 0 & 0 & \mu & 0 \\
0 & 0 & 0 & 0 & 0 & \mu
\end{bmatrix}$$

## Numerical Integration (Gaussian Quadrature)

3 integration points per edge; Gauss points:
$$x = \left[-\sqrt{3/5},\ 0,\ \sqrt{3/5}\right], \quad w = \left[5/9,\ 8/9,\ 5/9\right]$$

27 total integration points (permutation of $x$ and $w$).

## Stiffness and Force Matrices (Eqs. 20–23)

**Strong formulation:**
$$K_e = \int_\Omega B^T D B \, J \, d\Omega, \quad F_e = \int_\Omega N^T q(x) J \, d\Omega$$

**Weak (numerical) form:**
$$K_e = \sum_{i=1}^n w_i B(x_i)^T D B(x_i) \det(J), \quad F_e = \sum_{i=1}^n w_i N(x_i)^T q(x) \det(J)$$

The global stiffness $K$ and force $F$ are assembled from all elemental matrices $K_e$ and $F_e$.
