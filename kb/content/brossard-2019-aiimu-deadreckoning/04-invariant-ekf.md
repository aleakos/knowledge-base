---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/04-invariant-ekf"
section: "Invariant Extended Kalman Filter (IEKF)"
order: 4
tags:
  - "engineering/kalman-filter"
  - "engineering/lie-groups"
  - "engineering/state-estimation"
summary: "Invariant Extended Kalman Filter exploiting Lie group geometry for improved convergence properties in inertial navigation."
formulas:
  - id: "F15"
    name: "Linearized error state"
    expr: "e_n = [ξ^{IMU^T}_n, e^{b^T}_n, ξ^{R^c^T}_n, e^{p^c^T}_n]^T ~ N(0, P_n)"
  - id: "F16"
    name: "State embedding in Lie group"
    expr: "χ^IMU_n = exp_{SE_2(3)}(ξ^IMU_n) χ̂^IMU_n"
  - id: "F17"
    name: "Bias state update"
    expr: "b_n = b̂_n + e^b_n"
  - id: "F18"
    name: "Car frame rotation update"
    expr: "R^c_n = exp_{SO(3)}(ξ^{R^c}_n) R̂^c_n"
  - id: "F19"
    name: "Car frame position update"
    expr: "p^c_n = p̂^c_n + e^{p^c}_n"
  - id: "F20"
    name: "Kalman gain"
    expr: "K = P_{n+1} H^T_{n+1} / S"
  - id: "F21"
    name: "Innovation"
    expr: "e^+ = K(y_{n+1} - ŷ_{n+1})"
  - id: "F22"
    name: "Covariance update"
    expr: "P^+_{n+1} = (I_{21} - KH_{n+1}) P_{n+1}"
---

## Invariant Extended Kalman Filter (IEKF)

### Why IEKF over Standard EKF?

The Invariant Extended Kalman Filter (IEKF) is a recent EKF variant that has proven to be well-suited for IMU-based localization. It has:
- Better accuracy and convergence properties
- Led to commercial aeronautics products
- Success in visual inertial odometry applications

The IEKF is based on an alternative state error formulation exploiting Lie group geometry. While a standard EKF is applicable, the IEKF provides superior performance for this application.

### Linearized Error Formulation

The filter state x_n is given by (R^IMU_n, v^IMU_n, p^IMU_n, b^ω_n, b^a_n, R^c_n, p^c_n).

Variables χ^IMU_n := (R^IMU_n, v^IMU_n, p^IMU_n) are embedded in the Lie group SE₂(3) (extension of SE(3)). Biases b_n are treated as vectors in ℝ⁶, R^c_n as element of SO(3), and p^c_n as ℝ³.

The linearized error is expressed as:

```
e_n = [ξ^{IMU^T}_n, e^{b^T}_n, ξ^{R^c^T}_n, e^{p^c^T}_n]^T ~ N(0, P_n)    (21)
```

where e_n ∈ ℝ²¹ is zero-mean Gaussian with covariance P_n ∈ ℝ^{21×21}.

### State Recovery via Exponential Map

Since measurements (15) are expressed in the robot's frame, the Right IEKF methodology is used, mapping linearized errors to state using Lie group exponential maps:

```
χ^IMU_n = exp_{SE_2(3)}(ξ^IMU_n) χ̂^IMU_n                              (22)
b_n = b̂_n + e^b_n                                                       (23)
R^c_n = exp_{SO(3)}(ξ^{R^c}_n) R̂^c_n                                    (24)
p^c_n = p̂^c_n + e^{p^c}_n                                               (25)
```

where ̂(·) denotes estimated state variables.

### Propagation Step

State and covariance are propagated using equations (5)-(7) and (12)-(13). Jacobians F_n, G_n are related to error evolution:

```
F_n = I_{21×21} + [0, 0, 0, -R_n, 0, 0_{3×6}; (g)_×, 0, 0, -(v^IMU_n)_× R_n, -R_n, 0_{3×6}; ...] dt

G_n = [R_n, 0, 0_{3×12}; (v^IMU_n)_× R_n, R_n, 0_{3×12}; ...] dt
```

### Update Step

The measurement vector y_{n+1} consists of:

```
y_{n+1} = [v^{lat}_{n+1}, v^{up}_{n+1}]^T = 0
```

with assessed uncertainty y_{n+1} ~ N(0, N_{n+1}).

The updated state and covariance follow IEKF methodology:

```
S = H_{n+1} P_{n+1} H^T_{n+1} + N_{n+1}           (29)
K = P_{n+1} H^T_{n+1} / S                         (30)
e^+ = K(y_{n+1} - ŷ_{n+1})                       (31)
χ̂^{IMU+}_{n+1} = exp_{SE_2(3)}(ξ^{IMU+}) χ̂^IMU_{n+1}    (32)
b^+_{n+1} = b_{n+1} + e^{b+}                      (33)
R̂^{c+}_{n+1} = exp_{SO(3)}(ξ^{R^c+}) R̂^c_{n+1}          (34)
p̂^{c+}_{n+1} = p̂^c_{n+1} + e^{p^c+}             (35)
P^+_{n+1} = (I_{21} - KH_{n+1}) P_{n+1}          (36)
```

### Measurement Jacobian

H_{n+1} is the measurement Jacobian matrix with respect to linearized error (21):

```
H_n = A [0, R^{IMU^T}_n, 0, -(p^c_n)_×, 0, B, C]
```

where:
- A = [I₂, 0₂] selects first two rows
- B = R^{c^T}_n R^{IMU^T}_n (v^{IMU}_n)_×
- C = -(ω^{IMU}_n - b^ω_n)_×

### Lie Group SE₂(3)

SE₂(3) is an extension of SE(3) defined as:

```
χ_n = [R_n, v_n, p_n; 0_{2×3}, I_2] ∈ SE_2(3)
```

Uncertainties ξ_n ∈ ℝ⁹ map through Lie algebra via:

```
ξ_n = [ξ^R_n, ξ^v_n, ξ^p_n]^T

ξ^∧_n = [(ξ^R_n)_×, ξ^v_n, ξ^p_n; 0_{2×5}] ∈ se_2(3)
```

Closed-form exponential map:

```
exp_{SE_2(3)}(ξ_n) = I + ξ^∧_n + a(ξ^∧_n)² + b(ξ^∧_n)³
```

where a = (1 - cos(||ξ^R_n||)) / ||ξ^R_n|| and b = (||ξ^R_n|| - sin(||ξ^R_n||)) / ||ξ^R_n||³
