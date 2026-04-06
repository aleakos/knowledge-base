---
parent_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-"
chunk_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-/03-validation-and-real-time-integration"
section: "Model Validation and Real-Time Data Integration"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/digital-twins"
summary: "Blind validation of TDA model against 50Hz downhole memory sub data in the Permian Basin, and description of real-time WITSML integration workflow including rig state detection."
formulas: []
---

# Model Validation and Real-Time Data Integration

## Model Validation

### Test Setup

Validation was performed on Permian Basin lateral wells with motorized BHAs that included high-fidelity memory subs measuring WOB, TOB, axial vibrations, and lateral vibrations at 50 Hz.

- **Calibration point**: 10,200 ft (rock properties/intrinsic specific energy calibrated here)
- **Prediction point**: 18,000 ft (model run blind, no measured data used as input)
- Double-blind tests ensured prediction integrity

### Validation Results Summary

| Parameter | Accuracy |
|-----------|---------|
| Downhole WOB | Good correlation — validates PDC rock cutting model |
| Torque on Bit (TOB) | Good correlation |
| Rate of Penetration (ROP) | Within 5% of surface measurements overall |
| Bit RPM / stick-slip | Accurately predicts stick-slip behavior |
| Axial shock | Good overall; ~22% relative error |
| Lateral shock | Good overall; ~29% relative error |

### Key Observations

- WOB and TOB predictions validate the intrinsic specific energy calibration approach
- Bit RPM predictions (Figures 7d, 7e) clearly capture stick-slip phenomena, including both bit-induced and string-induced occurrences
- Axial shock predictions overestimate somewhat; lateral shock correlates well
- Higher errors for shock (~22–29%) are attributed to: simplified formation stiffness, over-gauge effects, and measurement variability
- Formation properties calibrated at the start of the lateral show good predictability over the full lateral (low relative error for RPM, WOB)

## Real-Time WITSML Integration

### Data Ingestion Architecture

The electronic data recorder (EDR) captures drilling data aggregated at the edge and in the cloud. The integration uses WITSML and MQTT protocols (TCP/IP network).

### Workflow Steps

1. **Data receipt**: WITSML/MQTT stream received and verified as current drilling data
2. **Data sorting**: Application layer sorts data into: survey, subsurface parameters, drilling parameters, rig operations
3. **Survey validation**: Survey information is validated and updated in the model
4. **Data conditioning**: Time-series drilling data undergoes cleaning, conditioning, and validation; used to update model planning parameters
5. **Rig state detection**: Hook load and block position identify start of on-bottom drilling; sub-state + rotary speed + flow rate identify rotary vs. slide drilling
6. **Model trigger**: Rig state information triggers the real-time TDA simulation

### Control Architecture

Open-loop control: continuous drilling parameters (WOB, RPM, flow rate) feed the model automatically to predict downhole response.

Manual override: users can disable WITSML/WITS connectivity to perform sensitivity analysis for ROP optimization.

### Operational Deployment Modes

The workflow is functional in:
- Office / remote settings
- Real-time operations center (ROC)
- At the edge (rig site)

## Case Study: Permian Basin Delaware (Wolfcamp Formation)

**Target formation**: Wolfcamp, eastern Delaware Basin (deeper TVD than western Delaware, much deeper than Midland Basin)

**Formation properties** (from literature):
- Soft shales: UCS ~5 ksi average
- Interbedded limestone/sandstone: 15–20 ksi UCS

**BHA**: 6-3/4″ lateral section with motor-assisted push-the-bit RSS

### Real-Time Prediction Performance (90 ft drilling interval)

| Parameter | Observation |
|-----------|------------|
| WOB | Captures general depth-dependent changes; better match in last 50 ft of stand |
| RPM | ~88 RPM predicted vs. 80 RPM in EDR; 10% deviation (within acceptable limits) |
| Differential pressure | Under-predicts early in stand, similar to WOB behavior |
| ROP | Good overall response; does not capture sharp drop-off seen in EDR |
| Bit RPM / stick-slip | No stick-slip predicted for this stand (consistent with observations) |
| Depth of cut | 0.1–0.2 inches — cutters not over-engaged |
| Axial/lateral shock | Within acceptable limits throughout the stand |
| MSE | Average <100 ksi (efficient drilling); some local peaks ~300 ksi not sustained |

## Summary

The digital twin demonstrates that fast-running physics-based TDA models can be successfully integrated with real-time surface data to predict drilling dysfunctions and performance. Key capabilities validated include:
- Stick-slip prediction without dedicated stick-slip models
- Shock and vibration prediction at any location along the BHA (virtual sensors)
- Automated rig state recognition and model triggering
- Robust operation across motor and RSS BHAs in unconventional formations
