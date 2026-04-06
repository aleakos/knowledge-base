---
parent_id: "brossard-2019-aiimu-deadreckoning"
chunk_id: "brossard-2019-aiimu-deadreckoning/08-discussion"
section: "Discussion and Interpretability"
order: 8
tags:
  - "engineering/adaptive-filtering"
  - "engineering/learned-adaptation"
  - "engineering/certification"
summary: "Analysis of learned adaptation rules, interpretability of neural network decisions, and certification considerations."
formulas: []
---

## Discussion: Learned Behaviors and Interpretability

### Performance Attribution

The competitive results (1.10% translational error) are owed to three key components:

1. **IEKF Design** (i): Uses recent invariant EKF proven suitable for IMU-based localization
   - Accurate convergence properties
   - Better than standard EKF for Lie group-based states
   - Could use conventional EKF but IEKF is superior

2. **Kinematic Constraints** (ii): Incorporation of side information via pseudo-measurements with dynamic adaptation
   - Null lateral and vertical velocity assumptions are valid but varying
   - Dynamic noise parameter adaptation learns motion-dependent confidence

3. **Car-IMU Alignment** (iii): Accounting for loose misalignment between IMU and car frames
   - Captures unknown level arm p^c_n
   - Captures potential small frame misalignment R^c_n
   - Encodes variations from dampers and shock absorbers

### Learned Adaptation Rules: Reverse Engineering

**Analysis of Sequence 01 (Highway):**

Figure 8 displays covariance values computed by the adapter over time:

```
log₁₀(cov(y_n)) vs. time with gyro signals
```

**Key Learned Pattern:**
- Between t = 90s and t = 110s: vehicle is turning
- Large increase in covariance values during turn (inflated by factor 10²)
- Zero velocity measurement covariance inflated from baseline
- Gyro yaw rate ω_z_n is large during this period

**Interpretation:**
The network has learned that during high-curvature maneuvers:
- Lateral velocity v^{lat}_n becomes significant
- Pseudo-measurement validity decreases
- Filter should reduce confidence in zero velocity constraint
- Inflate measurement covariance to reduce its influence

**Generalization Rule:**
"Inflate pseudo-measurement covariance when gyro yaw rate is large" - this rule is learnable and generalizable to different vehicles.

### Critical Observation: Covariance vs. Statistics

Important distinction between **learned filter covariances** and **actual statistical uncertainty**:

**Statistical Uncertainty:** Should be 100 m²/s² or less
**Learned Filter Covariances:** Reach 10² m²/s² during turns

**Interpretation:**
The inflated values do not represent actual measurement uncertainty. Instead, they indicate:
- Pseudo-measurements have **no predictive value** for localization during high-curvature maneuvers
- Filter should virtually ignore these measurements at those moments
- Covariance inflation is a mechanism for disabling measurements when assumptions break down

This approach differs from and extends prior work (e.g., [24]) which learned static parameters, whereas here parameters are **dynamically adapted** based on motion.

### Implications for Certification

Systems with AI-based approaches may be difficult to certify for commercial or industrial use. However, the interpretability of this approach enables certification:

1. **Learned rules can be extracted** via reverse engineering
2. **Rules can be encoded** in standard EKF with pseudo-measurements
3. **Deterministic implementation** replaces neural network
4. **Certification feasibility** comparable to hand-tuned adaptive filters

**Example Certification Strategy:**
- Extract learned covariance adaptation rules
- Implement as explicit decision tree or lookup table
- Prove formal properties of resulting adaptive EKF
- Certifiable alternative to end-to-end learning

### Generalization to Different Vehicles

The method's generalization properties:

**Strong Generalization:**
- Training/testing on KITTI uses different sequences
- No sequence-specific overfitting observed
- Adapter trained without access to evaluation sequences

**Future Improvements:**
- Adapt rules for different vehicle types (SUVs vs. sedans)
- Modify covariance inflation factors for different suspension systems
- Potentially transfer learning between similar vehicles

**Challenge:**
- Exact optimal parameters may vary with suspension stiffness
- But general pattern (inflate during turns) should generalize

### Comparison with Alternative Approaches

**Why not pure learning (end-to-end)?**
- End-to-end learning approaches (e.g., [24]) achieve ~30% error on similar problems
- Hybrid approach (EKF + learned adapter) achieves 1.10% error
- Physics-based structure provides constraint that enables learning

**Why not hand-tuned adaptive filters?**
- Manual tuning requires engineering expertise
- Rules learned automatically from data
- Captures complex nonlinear relationships humans might miss
- Can be updated with new vehicle data

### Process Noise vs. Measurement Noise

**Process noise (Q_n):** Fixed during operation, optimized during training
- Represents uncertainty in state evolution model
- Kept constant - dynamic adaptation left for future work
- 12 additional learnable parameters

**Measurement noise (N_{n+1}):** Dynamically adapted by CNN
- Represents uncertainty in pseudo-measurements
- Reflects varying validity of kinematic constraints
- Learned independently from state estimates

### Practical Advantages

1. **No State Information Needed**: Adapter converts raw IMU signals directly to covariances
   - No need to know estimated states
   - Reduces coupling and potential instabilities
   - Can be computed independently in parallel

2. **Real-time Capability**: CNN computation is fast
   - Simple 2-layer architecture
   - Suitable for embedded systems
   - Minimal computational overhead

3. **Robustness to Data Issues**: Demonstrated on sequences with missing data
   - Handles 2-second time gaps without divergence
   - Gracefully degrades when data quality issues occur
   - Soft constraints (loose pseudo-measurements) enable this

4. **Scalability**: Approach not limited to wheeled vehicles
   - Can apply to railway vehicles (already discussed)
   - Can couple with GNSS for hybrid localization
   - Can use as speedometer in path reconstruction
