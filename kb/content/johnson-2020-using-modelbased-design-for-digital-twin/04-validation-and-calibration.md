---
parent_id: "johnson-2020-using-modelbased-design-for-digital-twin"
chunk_id: "johnson-2020-using-modelbased-design-for-digital-twin/04-validation-and-calibration"
section: "Digital Twin Validation and Calibration"
order: 4
tags:
  - "engineering/validation"
  - "engineering/parameter-estimation"
  - "engineering/sensor-data"
  - "engineering/calibration"
summary: "Validation methodology and parameter estimation from field sensor data to calibrate digital twin accuracy"
formulas:
  - id: "F1"
    name: "Validation error criterion"
    expr: "Error = |Actual_value - Predicted_value| / Actual_value × 100%"
  - id: "F2"
    name: "Motor parameter estimation inputs"
    expr: "Parameters: [Rs, Ls, Lr, Lr, Lm, J, f] from [Speed, Torque, Current]"
---

# Digital Twin Validation and Calibration

## Validation Criterion

A digital twin is considered validated when it can predict system performance within a predefined accuracy tolerance, conventionally defined as:

```
Error threshold: ≤ 5% error
```

This means predicted values must remain within 5% of actual measured values under the same operating conditions.

## Calibration Methodology

### Data Collection Protocol

Validation data is collected directly from operational drilling rigs using multiple sensors over extended periods:

**Sensors Monitored:**
1. Speed (motor RPM)
2. Torque (load torque)
3. Current (RMS motor current)

**Data Sampling:**
- Sampling interval: 100 milliseconds (10 Hz)
- Duration: Several hours of continuous operation
- Conditions: Full range of normal operating scenarios

### Parameter Tuning Process

The calibration process consists of iterative adjustment of simulation parameters to minimize prediction error:

1. **Input to Simulation:** Command speed and command torque data collected from the rig are fed directly into the digital twin simulation

2. **Parameter Adjustment:** Sixteen motor parameters are systematically adjusted and tuned:
   - Stator resistance (Rs)
   - Stator leakage inductance (Ls)
   - Rotor resistance (Lr)
   - Rotor leakage inductance (Lr)
   - Mutual inductance (Lm)
   - Rotor inertia (J)
   - Friction factor (f)
   - Speed controller proportional gain (Ki)
   - Speed controller integral gain (Kp)
   - Speed filter bandwidth
   - Minimum and maximum torque limits
   - Nominal flux level

3. **Output Comparison:** The simulated parameters (speed, torque, motor current) are compared against actual field-measured data

4. **Iterative Refinement:** Simulation parameters are adjusted until predicted values closely match actual measurements

## Validation Results

### Top Drive Motor System

Figure 8 presents the primary parameters used to validate the digital twin:

**Input Data:**
- Commanded speed (rig control signal)
- Commanded torque (rig control signal)
- Current (measured sensor data)

**Calibrated Parameters:**
- Motor parameters (7 parameters)
- Speed control parameters (3 parameters)
- Torque control parameters (3 parameters)
- Nominal flux (1 parameter)

**Simulation Output:**
- Predicted speed
- Predicted torque
- Predicted RMS current

### RMS Current Prediction Accuracy

Figure 9 demonstrates the high fidelity of motor current prediction. The comparison shows:
- **Field recorded RMS current:** Bold blue line (actual measured data)
- **Digital twin predicted current:** Thin brown line (simulation output)
- **Error:** Less than 3% deviation across the 20-second test window

The close tracking between predicted and actual current validates that the digital twin correctly models both:
- Physical system dynamics (motor physics, cable effects)
- Software control algorithms (speed and torque control loops)

### Chirp Test Validation

After a rig moves to a new site, top drive motors undergo a standardized "chirp test" to identify potential vibration modes introduced during construction or transport.

**Chirp Test Protocol:**
- Motor commanded to run forward at increasing speeds (0 to 2.5 Hz)
- Motor commanded to reverse at increasing speeds (0 to 2.5 Hz)
- No drill string load applied to motor
- Measures transient response and natural vibration frequencies

**Results (Figure 10):**
- Commanded torque and speed recorded from rig control system
- Actual (field-recorded) motor response captured by sensors
- Digital twin predicted response computed from same command inputs
- Error between actual and predicted values: **Below 3%**

The 3% error margin on the chirp test confirms that the validated digital twin appropriately captures:
- Motor transient dynamics during acceleration and deceleration
- Control system response characteristics
- Mechanical system inertia and damping
- Vibration modes and frequency response

## Validation Conclusion

The digital twin achieves prediction accuracy of less than 3% error across various operating scenarios, meeting the industry standard of 5% maximum error for validated simulations. This level of accuracy enables the digital twin to be used confidently for:
- Performance prediction under normal operations
- "What-if" scenario analysis
- Equipment modification evaluation
- Control system optimization
