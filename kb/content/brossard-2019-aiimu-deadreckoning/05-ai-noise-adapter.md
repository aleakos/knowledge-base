---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/05-ai-noise-adapter"
section: "AI-based Measurement Noise Parameter Adapter"
order: 5
tags:
  - "engineering/deep-learning"
  - "engineering/neural-networks"
  - "engineering/adaptive-filtering"
summary: "Convolutional neural network for dynamic adaptation of Kalman filter measurement covariance based on raw IMU signals."
formulas:
  - id: "F23"
    name: "Noise parameter adapter computation"
    expr: "N_{n+1} = CNN({ω^IMU_i, a^IMU_i}^n_{i=n-N})"
  - id: "F24"
    name: "Covariance matrix computation"
    expr: "N_{n+1} = diag(σ²_{lat} 10^{β tanh(z^{lat}_n)}, σ²_{up} 10^{β tanh(z^{up}_n)})"
---

## AI-based Measurement Noise Parameter Adapter

### Architecture and Motivation

The measurement noise parameter adapter dynamically computes the covariance N_{n+1} used in the filter update at each instant n. The key motivation is that the validity of null lateral and vertical velocity assumptions widely varies depending on vehicle maneuver:

- v^{lat}_n is much larger in turns than in straight lines
- Standard fixed parameters cannot capture this variation
- Dynamic adaptation based on motion characteristics improves robustness

### Convolutional Neural Network Design

The adapter uses a simple CNN-like architecture with three key motivations:

1. **Avoid over-fitting**: Relatively small number of parameters and outputs independent of state estimates
2. **Interpretability**: Enables reverse engineering to infer general and safe rules
3. **Trainability**: Recurrent architectures make training much harder

The complete architecture consists of CNN layers followed by a fully connected layer.

### Network Input and Output

The network takes as input a window of N inertial measurements:

```
N_{n+1} = CNN({ω^IMU_i, a^IMU_i}^n_{i=n-N})      (16)
```

The CNN outputs a vector z_n = [z^{lat}_n, z^{up}_n]^T ∈ ℝ².

### Covariance Computation

The covariance N_{n+1} ∈ ℝ^{2×2} is computed as:

```
N_{n+1} = diag(σ²_{lat} 10^{β tanh(z^{lat}_n)}, σ²_{up} 10^{β tanh(z^{up}_n)})    (17)
```

where:
- β ∈ ℝ_{>0} is a hyperparameter
- σ_{lat} and σ_{up} are initial guesses for noise parameters
- The network can inflate covariance by factor 10^β and squeeze by factor 10^{-β}
- When network is disabled or barely reactive (z_n ≈ 0), recovery of initial covariance diag(σ_{lat}, σ_{up})²

### Implementation Details

**Architecture:**
- 1D temporal convolutional neural network with 2 layers
- Layer 1: kernel size 5, output dimension 32, dilation 1
- Layer 2: kernel size 5, output dimension 32, dilation 3
- Window size: N = 15
- Activation: ReLU units between layers
- Final fully connected layer outputs z^{lat}_n and z^{up}_n

**Training Parameters:**
- β = 3 (allows 10³ covariance modification)
- Initial values:
  - σ_{lat} = 1 m/s
  - σ_{up} = 3 m/s

### Training Procedure

**Loss Function:** Relative translation error t_{rel} (averaged increment error for subsequences of 100-800 m)

**Optimizer:** Adam with learning rate 10^{-4}

**Learnable Parameters:**
- 6210 parameters of CNN adapter
- 12 additional parameters from P₀ and Q (equations 18-19)

**Training Iterations:**
1. Sample batch of nine 1-minute sequences at random times
2. Compute filter estimates for loss and gradient calculation
3. Update learnable parameters with gradient and optimizer

**Regularization:**
- Dropout with probability p = 0.5 (any CNN element ignored during iteration)
- Data augmentation: small Gaussian noise with std 10^{-4}
- Gradient clipping: maximal norm value of 1 to avoid explosion

**Continual Training:**
- 400 epochs (or potentially infinite for online training)
- Suitable for online training with accurate ground-truth (from LiDAR or precise GNSS)

### Process Noise Parameters

Process noise amplitude parameters Q_n are considered fixed by the algorithm but learned during training (see equations 18-19). Dynamic adaptation of process noise Q_n is left for future work.

### Key Insight: Covariance vs. Statistical Uncertainty

Important note: The computed covariances N_{n+1} are meant to improve localization accuracy, not necessarily reflect actual statistical covariance of y_n (15). The computed values may broadly differ from the actual statistical covariance:

- Filter uses inflated covariances during turns (e.g., factor of 10²)
- This indicates pseudo-measurements have limited value for localization during high-curvature maneuvers
- The filter should barely consider them during those moments
- This is consistent with the approach of learning filter performance rather than statistical accuracy

### Generalization and Interpretability

The adapter enables:
- Extraction of general adaptation rules (e.g., "inflate covariance during turns when gyro yaw rate is large")
- Reverse engineering of learned behavior
- Generalization to different vehicle types by modifying adaptation rules
- Certification-friendly implementation by encoding learned rules in standard EKF with pseudo-measurements
