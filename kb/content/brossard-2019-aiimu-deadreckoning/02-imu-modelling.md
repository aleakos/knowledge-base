---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/02-imu-modelling"
section: "IMU and Problem Modelling"
order: 2
tags:
  - "engineering/inertial-navigation"
  - "engineering/sensor-models"
  - "engineering/coordinate-frames"
summary: "Mathematical models for IMU measurements, kinematic equations, and coordinate frame definitions for wheeled vehicle navigation."
formulas:
  - id: "F1"
    name: "Angular velocity measurement"
    expr: "ω^IMU_n = ω_n + b^ω_n + w^ω_n"
  - id: "F2"
    name: "Acceleration measurement"
    expr: "a^IMU_n = a_n + b^a_n + w^a_n"
  - id: "F3"
    name: "Gyro bias evolution (random walk)"
    expr: "b^ω_{n+1} = b^ω_n + w^{bω}_n"
  - id: "F4"
    name: "Accelerometer bias evolution (random walk)"
    expr: "b^a_{n+1} = b^a_n + w^{ba}_n"
  - id: "F5"
    name: "Rotation matrix kinematics"
    expr: "R^IMU_{n+1} = R^IMU_n exp((ω_n dt)_×)"
  - id: "F6"
    name: "Velocity kinematics"
    expr: "v^IMU_{n+1} = v^IMU_n + (R^IMU_n a_n + g) dt"
  - id: "F7"
    name: "Position kinematics"
    expr: "p^IMU_{n+1} = p^IMU_n + v^IMU_n dt"
---

## IMU and Problem Modelling

### IMU Measurement Model

An inertial navigation system uses accelerometers and gyroscopes from the IMU to track:
- Orientation: R_n ∈ SO(3) (rotation matrix)
- Velocity: v_n ∈ ℝ³
- Position: p_n ∈ ℝ³

relative to a starting configuration (R₀, v₀, p₀).

#### IMU Measurement Equations

The IMU provides noisy and biased measurements of instantaneous angular velocity ω_n and specific acceleration a_n:

```
ω^IMU_n = ω_n + b^ω_n + w^ω_n                    (1)
a^IMU_n = a_n + b^a_n + w^a_n                    (2)
```

where:
- b^ω_n, b^a_n are quasi-constant biases
- w^ω_n, w^a_n are zero-mean Gaussian noises

#### Bias Evolution Model

The biases follow random walk processes:

```
b^ω_{n+1} = b^ω_n + w^{bω}_n                     (3)
b^a_{n+1} = b^a_n + w^{ba}_n                     (4)
```

where w^{bω}_n, w^{ba}_n are zero-mean Gaussian noises.

### Kinematic Model for Wheeled Vehicles

The kinematic evolution is governed by:

```
R^IMU_{n+1} = R^IMU_n exp((ω_n dt)_×)            (5)
v^IMU_{n+1} = v^IMU_n + (R^IMU_n a_n + g) dt     (6)
p^IMU_{n+1} = p^IMU_n + v^IMU_n dt               (7)
```

where:
- dt is sampling interval between discrete time instants
- v^IMU_n ∈ ℝ³ is IMU velocity in world frame
- p^IMU_n ∈ ℝ³ is IMU position in world frame
- R^IMU_n ∈ SO(3) is rotation matrix mapping IMU frame to world frame
- (y)_× denotes skew symmetric matrix for cross product with y ∈ ℝ³
- ω_n ∈ ℝ³ and a_n ∈ ℝ³ are true inputs

### Coordinate Frame System

Three coordinate frames are used (Figure 2):

1. **World frame (w)**: Static reference frame
2. **IMU frame (i)**: Where measurements (1)-(2) are made, attached to vehicle
3. **Car frame (c)**: Ideal frame attached to the car, estimated online

The car frame origin is denoted p^c_n ∈ ℝ³ (car to IMU level arm), and its orientation relative to IMU frame is R^c_n ∈ SO(3).

### Problem Definition: IMU Dead-Reckoning

Given initial known configuration (R^IMU_0, v^IMU_0, p^IMU_0), estimate in real-time:

```
x_n := (R^IMU_n, v^IMU_n, p^IMU_n, b^ω_n, b^a_n, R^c_n, p^c_n)
```

using only inertial measurements ω^IMU_n and a^IMU_n.

### Model Assumptions

- Effects of Earth rotation and Coriolis acceleration are ignored
- Earth is considered flat
- Gravity vector g ∈ ℝ³ is a known constant
- Sampling at 100 Hz (dt = 10⁻² s) in experiments

### Error Sources in Dead-Reckoning

The sources of error in IMU measurements (equations 1-2) are harmful because simple implementation of equations (5)-(7) leads to triple integration of raw data, much more harmful than single integration of differential wheel speeds. A bias of order ε has impact of order ε·t²/2 on position after t seconds, leading to potentially huge drift.
