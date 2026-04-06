---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/07-results-analysis"
section: "Experimental Results and Analysis"
order: 7
tags:
  - "engineering/performance-evaluation"
  - "engineering/benchmark-comparison"
  - "engineering/robustness-testing"
summary: "KITTI benchmark results showing competitive performance with LiDAR and vision methods using only IMU signals."
formulas: []
---

## Experimental Results and Analysis

### Overall Results Summary

| Metric | IMLS (LiDAR) | ORB-SLAM2 (Vision) | IMU (Baseline) | Proposed (AI-IMU) |
|--------|---|---|---|---|
| **Avg Translational Error** | **0.98%** | 1.17% | 171% | **1.10%** |
| **Avg Rotational Error** | **0.12 deg/m** | 0.27 deg/m | 0.31 deg/m | **0.23 deg/m** |

The proposed method achieves **1.10% average translational error**, competing with top-ranked methods despite using only moderately precise IMU.

### Per-Sequence Performance

**Translational Error (t_{rel} in %)**

| Sequence | Environment | IMLS | ORB-SLAM2 | IMU | Proposed |
|----------|---|------|-----------|-----|----------|
| 01 | Highway | 0.48 | 1.38 | 5.35 | **1.11** |
| 04 | Country | 0.25 | 0.41 | 0.97 | **0.35** |
| 06 | Urban | 0.78 | 0.89 | 5.78 | **0.97** |
| 07 | Urban | 0.32 | 1.16 | 12.6 | **0.84** |
| 08 | Urban, Country | 1.84 | 1.52 | 549 | **1.48** |
| 09 | Urban, Country | 0.97 | 1.01 | 23.4 | **0.80** |
| 10 | Urban, Country | 0.50 | 0.31 | 4.58 | **0.98** |

**Rotational Error (r_{rel} in deg/m)**

| Sequence | IMLS | ORB-SLAM2 | IMU | Proposed |
|----------|------|-----------|-----|----------|
| 01 | 0.08 | 0.20 | 0.12 | **0.12** |
| 04 | 0.08 | 0.21 | 0.10 | **0.08** |
| 06 | 0.07 | 0.22 | 0.19 | **0.20** |
| 07 | 0.12 | 0.49 | 0.30 | **0.32** |
| 08 | 0.17 | 0.30 | 0.56 | **0.32** |
| 09 | 0.11 | 0.25 | 0.32 | **0.22** |
| 10 | 0.14 | 0.34 | 0.25 | **0.23** |

### Key Observations

1. **Massive Drift of Pure IMU Integration**
   - Translational errors reach 549% (seq. 08) and 23.4% (seq. 09)
   - Rotational errors up to 0.56 deg/m
   - Pure integration completely unusable for dead-reckoning

2. **Proposed Method Competitiveness**
   - Translational error (1.10%) very close to LiDAR (0.98%)
   - Significantly better than ORB-SLAM2 (1.17%)
   - Rotational error (0.23 deg/m) between vision and LiDAR
   - Achieved with only IMU, no vision or LiDAR

3. **Performance by Environment**
   - **Highway (seq. 01)**: 1.11% error - excellent on structured roads
   - **Country (seq. 04)**: 0.35% error - best performance on simpler terrain
   - **Urban (seq. 06, 07)**: 0.84%-0.97% error - good performance in complex environments

4. **Robustness to Vehicle Stops**
   - Seq. 07 includes 5-second car stop
   - Proposed method unaffected by stops (0.84% error)
   - Pure IMU diverges significantly after stop (12.6% error)

### Ablation Study: Impact of Key Components

**Highway Sequence (01) End Trajectory Analysis**

Effect of removing components from full proposed method:

| Configuration | Translational Error |
|---|---|
| Full proposed method | **1.11%** |
| Without covariance adaptation | 1.94% |
| Without car-IMU alignment (R^c_n, p^c_n) | 1.65% |

**Key Findings:**
- Covariance adaptation improves error by 0.83% (from 1.94% to 1.11%)
- Car frame alignment improves error by 0.54% (from 1.65% to 1.11%)
- Both components essential for competitive performance
- Rotational error unchanged (r_{rel} = 0.12 deg/m) - alignment mainly helps translation

### Trajectory Visualization Results

**Sequence 07** (Urban drive with stop):
- Proposed method closely follows ground-truth throughout
- Pure IMU diverges after car stops
- IMLS and ORB-SLAM2 provide similar performance

**Sequence 08** (4.2 km, 9 min urban/country):
- GPS outage occurs in this sequence
- Proposed method accurately estimates trajectory during GPS outage
- Pure IMU integration quickly diverges (649% error)
- Final positioning error only 5 m for 3.2 km sequence

**Sequence 09** (Urban/country with turns):
- Proposed method competes with LiDAR/vision
- Pure IMU drifts quickly after first turn (23.4% error)
- Demonstrates robustness to complex maneuvers

### Sequences 00, 02, 05: Data Quality Issues

These sequences exhibit degraded performance due to logging problems:

| Sequence | Length | Proposed Error |
|----------|--------|---|
| 00 | 3.7 km | 7.40% |
| 02 | 5.1 km | 2.85% |
| 05 | 2.2 km | 2.76% |

**Root Cause:** 2-second time jump with missing IMU and ground-truth data during logging
- Figure 10 shows data gap between t = 1s and t = 3s
- Jump in IMU and ground-truth signals causes estimate shift
- No divergence despite severe data corruption
- Demonstrates robustness to data quality issues

**When corrected during training:** Performance returns to expected levels, supporting that method is robust rather than inherently limited.

### Comparison with Visual Inertial Odometry

- Attempted comparison with VIO methods but found limitations:
  - [38]: Code in development, results sometimes diverge
  - [39]: Non-open-source, evaluated only on short sequences (≤30s)
  - [33, 40]: Evaluated on seq. 08 with ~20 m final error (4× worse than proposed)

Proposed method outperforms available VIO implementations, suggesting that methods tailored for ground vehicles achieve higher accuracy than general methods for smartphones/drones/aerial vehicles.

### Implementation

Full implementation is open-source:
- https://github.com/mbrossar/ai-imu-dr
- Python with PyTorch for neural network
- Can be integrated with LiDAR systems or precise GNSS for online training
