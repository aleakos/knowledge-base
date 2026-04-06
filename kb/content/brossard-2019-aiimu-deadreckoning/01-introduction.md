---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/01-introduction"
section: "Introduction and Motivation"
order: 1
tags:
  - "engineering/inertial-navigation"
  - "engineering/localization"
  - "engineering/sensor-fusion"
summary: "Accurate IMU-based dead-reckoning using Kalman filtering and deep learning for dynamic noise parameter adaptation in intelligent vehicles."
formulas: []
---

## Introduction and Motivation

Intelligent vehicles require accurate localization and motion estimation to safely navigate and validate information from imaging sensors (lasers, ultrasonic systems, video cameras). An accurate estimate of vehicle dynamics enables correlation of sensor feeds, validation of information, and ensures safe motion. In extreme cases where emergency stops must be performed due to severe occlusions, lack of texture, or imaging system failure, vehicles must assess their dynamical motion accurately.

The Inertial Measurement Unit (IMU) is a key component for intelligent vehicles in achieving this goal. While Global Navigation Satellite System (GNSS) provides global position estimation, it suffers from significant limitations:

- Phase tracking loss in densely built-up areas and through tunnels
- Sensitivity to jamming
- Cannot provide continuous accurate and robust localization (exemplified by GPS outages in the KITTI dataset)

### Key Problem

Kalman filters are routinely used to integrate IMU outputs. When mounted on a car, filters commonly incorporate side information about wheeled vehicle dynamics, such as approximately null lateral and upward velocity assumptions, in the form of pseudo-measurements. However, the confidence level (encoded in covariance noise parameters) is difficult to set manually and should dynamically adapt to motion conditions. For example, lateral slip is much larger in bends than in straight lines.

### Proposed Approach

This paper proposes a novel method for IMU-only dead-reckoning that combines:

1. **State-space model** for wheeled vehicles with kinematic assumptions
2. **Invariant Extended Kalman Filter (IEKF)** for exploiting kinematic constraints
3. **Deep neural networks** for dynamic adaptation of covariance noise parameters

The approach estimates position, velocity, orientation, and IMU biases with associated uncertainty while achieving competitive results with LiDAR and stereo vision methods (average 1.10% translational error on KITTI dataset).

### Advantages Over Alternatives

**Why not pure IMU integration?** Direct integration of raw IMU measurements leads to triple integration of errors, with biases having impact of order ε·t²/2 on position after t seconds, causing potentially huge drift.

**Why not GNSS only?** GNSS is vulnerable to outages and jamming in urban environments.

**Why not vision-based methods?** Vision sensors are susceptible to failures (occlusions, lack of texture, imaging system failures), whereas a robust IMU-based backup ensures safety.
