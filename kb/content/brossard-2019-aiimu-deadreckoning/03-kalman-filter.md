---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/03-kalman-filter"
section: "Kalman Filtering with Pseudo-Measurements"
order: 3
tags:
  - "engineering/kalman-filter"
  - "engineering/state-estimation"
  - "engineering/pseudo-measurements"
summary: "Extended Kalman Filter framework with pseudo-measurements for incorporating kinematic constraints in IMU-based localization."
formulas:
  - id: "F8"
    name: "State evolution model"
    expr: "x_{n+1} = f(x_n, u_n) + w_n"
  - id: "F9"
    name: "Pseudo-measurement constraint"
    expr: "y_n = h(x_n) + n_n"
  - id: "F10"
    name: "Covariance propagation"
    expr: "P_{n+1} = F_n P_n F^T_n + G_n Q_n G^T_n"
  - id: "F11"
    name: "Car frame orientation evolution"
    expr: "R^c_{n+1} = R^c_n exp((w^{R^c}_n)_×)"
  - id: "F12"
    name: "Car to IMU level arm evolution"
    expr: "p^c_{n+1} = p^c_n + w^{p^c}_n"
  - id: "F13"
    name: "Car frame velocity"
    expr: "v^c_n = [v^{for}_n, v^{lat}_n, v^{up}_n]^T = R^{c^T}_n R^{IMU^T}_n v^{IMU}_n + (ω_n)_× p^c_n"
  - id: "F14"
    name: "Pseudo-measurements (null lateral and vertical velocity)"
    expr: "y_n = [y^{lat}_n, y^{up}_n]^T = [v^{lat}_n, v^{up}_n]^T + n_n"
---

## Kalman Filtering with Pseudo-Measurements

### Extended Kalman Filter Framework

The Extended Kalman Filter (EKF) begins from a dynamical discrete-time nonlinear law:

```
x_{n+1} = f(x_n, u_n) + w_n                       (9)
```

where:
- x_n denotes the state to be estimated
- u_n is an input
- w_n is process noise (Gaussian with zero mean, covariance Q_n)

When side information is available in the form of loose equality constraints h(x_n) ≈ 0, a fictitious observation (pseudo-measurement) is generated:

```
y_n = h(x_n) + n_n                                (10)
```

The filter is fed with the information that y_n = 0 (pseudo-measurement), with noise n_n ~ N(0, N_n) where N_n reflects the degree of validity of the information.

### EKF Propagation and Update

Starting from initial Gaussian belief x₀ ~ N(x̂₀, P₀), the EKF alternates between:

**Propagation step**: Estimate x̂_n is propagated through model (9) with w_n = 0:

```
P_{n+1} = F_n P_n F^T_n + G_n Q_n G^T_n            (11)
```

where F_n, G_n are Jacobian matrices of f(·) with respect to x_n and u_n.

**Update step**: Pseudo-measurement is incorporated using Kalman equations to update estimate x̂_{n+1} and covariance P_{n+1}.

### Dynamical Model: Evolution of State Variables

The evolution of R^IMU_n, p^IMU_n, v^IMU_n, b^ω_n, and b^a_n is given by equations (3)-(7) from the standard kinematic model.

For the additional car frame variables R^c_n and p^c_n (representing misalignment between IMU and car frame), they are modeled as approximately constant with small variations:

```
R^c_{n+1} = R^c_n exp((w^{R^c}_n)_×)               (12)
p^c_{n+1} = p^c_n + w^{p^c}_n                      (13)
```

where w^{R^c}_n and w^{p^c}_n are centered Gaussian noises with small covariance matrices σ^{R^c}I and σ^{p^c}I learned during training. These encode possible small variations in level arm due to dampers and shock absorbers.

### Pseudo-Measurements: Kinematic Constraints

The velocity of the origin point of the car frame, expressed in the car frame:

```
v^c_n = [v^{for}_n, v^{lat}_n, v^{up}_n]^T = R^{c^T}_n R^{IMU^T}_n v^{IMU}_n + (ω_n)_× p^c_n    (14)
```

For wheeled vehicles, lateral and vertical velocities are approximately null (loose constraints):

```
y_n = [y^{lat}_n, y^{up}_n]^T = [v^{lat}_n, v^{up}_n]^T + n_n                                    (15)
```

where noises n = [n^{lat}_n, n^{up}_n]^T are centered Gaussian with covariance N_n ∈ ℝ^{2×2}.

The filter is fed with pseudo-measurement y^{lat}_n = y^{up}_n = 0.

### Key Insight on Assumptions

- The vertical velocity v^{up}_n is expressed in the car frame, so the assumption it is roughly null generally holds for 3D motion on roads
- This differs from assuming null vertical velocity in the world frame (planar horizontal motion)
- The validity of null lateral velocity v^{lat}_n varies with maneuver: much larger in turns than straight lines
- **This motivates dynamic adaptation of noise parameters N_n** based on motion characteristics

### Practical Considerations

Treating assumptions as loose constraints (allowing non-strictly null uncertainty in N_n) leads to much better estimates than treating them as strictly null. The noise parameter N_n encodes confidence in the pseudo-measurements and becomes the key to adapting the filter to changing motion conditions.
