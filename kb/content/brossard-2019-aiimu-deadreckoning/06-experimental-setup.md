---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/06-experimental-setup"
section: "Experimental Setup and Metrics"
order: 6
tags:
  - "engineering/benchmark-datasets"
  - "engineering/evaluation-metrics"
  - "engineering/odometry"
summary: "KITTI dataset evaluation protocol, error metrics, and baseline comparison methods for IMU dead-reckoning."
formulas: []
---

## Experimental Setup and Evaluation Metrics

### KITTI Dataset

Evaluation uses the KITTI odometry dataset, which contains:
- 22 sequences for benchmarking odometry algorithms
- 11 sequences with publicly available ground-truth trajectory
- Raw and synchronized IMU data
- Data recorded from LiDAR, cameras, and IMU
- Centimeter accurate ground-truth pose from different environments (urban, highways, streets)

**IMU Specifications:**
- RT3003² IMU (OXTS)
- Gyro bias stability: 36 deg/h
- Accelerometer bias stability: 1 mg
- Sampling rate: 100 Hz (dt = 10⁻² s)
- Raw data used (not synchronized data at 10 Hz)

**Sequence Selection:**
- Downloaded raw data with 100 Hz sampling
- Discarded seq. 03 (no raw data available)
- Sequences 00, 02, 05 excluded from main results due to data logging issues (discussed separately in Section V-C)
- 7 main sequences used (seq. 01, 04, 06, 07, 08, 09, 10)

### Error Metrics (KITTI Standard)

Two standard error metrics from KITTI benchmark:

**1. Relative Translation Error (t_{rel})**
- Averaged relative translation increment error
- Computed for all possible sub-sequences of length 100 m, ..., 800 m
- Expressed as percentage of traveled distance
- Lower is better

**2. Relative Rotational Error (r_{rel})**
- Relative rotational increment error
- Computed for all possible sub-sequences of length 100 m, ..., 800 m
- Expressed in degrees per meter
- Lower is better

### Compared Methods

The proposed method is compared against:

1. **IMLS [6]**: Recent state-of-the-art LiDAR-based approach
   - Ranked 3rd in KITTI benchmark
   - Loop-closure module disabled for comparison
   - Uses only LiDAR measurements

2. **ORB-SLAM2 [7]**: Popular stereo/monocular camera library
   - Versatile for monocular, stereo, RGB-D cameras
   - Sparse map reconstruction
   - Loop-closure capability disabled
   - Open-source, no parameter modifications

3. **IMU**: Direct integration of raw IMU measurements
   - Baseline pure inertial navigation: equations (4)-(5)
   - No filtering or constraints
   - Uses only IMU signals

4. **Proposed**: AI-IMU dead-reckoning method
   - Uses only IMU signals
   - No other sensor modalities

### Evaluation Protocol

For each sequence, the following protocol is followed:

1. Initialize filter with parameters from Section IV-B
2. Train noise parameter adapter following Section IV-C for 400 epochs
   - Training uses all sequences except the evaluated sequence
   - Ensures adapter has never seen evaluated sequence during training
3. Run IMU-based methods on full raw sequence with:
   - Ground-truth initial configuration: (R^IMU_0, v^IMU_0, p^IMU_0)
   - Other variables initialized to zero: (b^ω_0 = b^a_0 = p^c_0 = 0, R^c_0 = I)
4. Extract estimates only for time corresponding to odometry benchmark sequence
5. Compare with LiDAR and visual methods (evaluated directly on odometry sequences)

### Baseline Initialization

**IMU methods initialized with:**
- Ground-truth initial pose and velocity: R^IMU_0, v^IMU_0, p^IMU_0
- Zero initialization for unknowns: b^ω_0 = 0, b^a_0 = 0, p^c_0 = 0, R^c_0 = I

This initialization is generous and enables assessment of both bias calibration and localization accuracy during the sequence.

### Environment Types in Sequences

- **Urban**: Dense buildings, complex trajectories
- **Highway**: Long straight roads with curves
- **Country**: Mixed terrain, moderate curves

### Key Protocol Features

- Different training/testing splits prevent overfitting on specific sequences
- Ground-truth initialization allows focus on adaptation and localization
- All three methods (LiDAR, vision, IMU) evaluated on same trajectory ground-truth
- Enables fair comparison despite using different sensor modalities
