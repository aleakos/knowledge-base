---
parent_id: "nour-2022-novel-torque-and-drag-model-for-drilling"
chunk_id: "nour-2022-novel-torque-and-drag-model-for-drilling/03-case-studies-and-results"
section: "Case Studies, Results, and Conclusions"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/tubular-mechanics"
summary: "Validation of the T&D model against four Western Desert, Egypt wells, sensitivity analysis results, and key conclusions on friction factors, survey spacing, and drilling best practices."
formulas:
  - id: "F14"
    name: "Average Percent Relative Deviation"
    expr: "APRD = (1/n) * Σ PDi, where PDi = |Q_abs - Q_pred| / Q_abs * 100"
  - id: "F15"
    name: "Correlation Coefficient"
    expr: "CC = [Σ Q_abs*Q_pred - Σ Q_abs * Σ Q_pred / n] / sqrt([Σ Q_abs² - (Σ Q_abs)²/n] * [Σ Q_pred² - (Σ Q_pred)²/n])"
---

# Case Studies, Results, and Conclusions

## Field Data: Four Wells in Western Desert, Egypt

| Well | MD (ft) | TVD (ft) | ER Ratio |
|------|---------|----------|----------|
| A    | 4,890   | 2,025    | 2.41     |
| B    | 4,950   | 2,181    | 2.27     |
| C    | 8,645   | 5,897    | 1.47     |
| D    | 11,092  | 7,930    | 1.40     |

Each well was analyzed across multiple hole sections (12-1/4″, 8-1/2″, 6″). The model was compared against actual recorded torque and hook load values.

## Statistical Validation Metrics

Four parameters quantify model accuracy:
- **APRD** (Average Percent Relative Deviation, F14): signed average error
- **AAPRD** (Average Absolute Percent Relative Deviation): unsigned average error
- **SD** (Standard Deviation): spread of error
- **CC** (Correlation Coefficient, F15): linear correlation between modeled and actual values

## Key Results

**Hook load prediction** is highly accurate across all wells:
- Overall APRD: 0.72%
- CC consistently above 0.90 for pickup weight

**Torque prediction** is reliable:
- Overall CC: 0.93
- Average APRD: −10.3% (slight underestimation)
- On-bottom torque prediction is most challenging due to erratic actual values caused by bit dull, lost circulation material (LCM), and high DLS

### Well-Specific Observations

- **Well A, 8-1/2″**: High DLS (up to 10.02°/100 ft) causes erratic torque; model gives reliable averaged prediction with CC = 0.86
- **Well A, 6″**: Good torque prediction to 3,200 ft; performance degraded by combined bit dull and LCM effects
- **Well B**: Erratic on-bottom torque; model achieves only 6.5% APRD; excellent drag predictions (max 6.6% APRD)
- **Well C, 8-1/2″**: Excellent accuracy, demonstrating the model performs best as DLS decreases and depth increases
- **Well D**: All friction forces are less than modeled values — attributed to drilling in the direction of minimum horizontal stress, which promotes wellbore stability

## Sensitivity Analysis

Three parameters were systematically studied:

1. **Friction factor** — the single most influential parameter on both T&D. Selection of the correct friction factor set is critical. Friction factor shifted from 0.15/0.20 to 0.25/0.30 as well D approached TD, indicating deteriorating hole conditions.

2. **BHA placement** — placing heavier D/S members (collars) in the horizontal section reduces surface torque reading but increases torque on the topmost D/S joint. A split-BHA strategy (heavy members in vertical section) is preferred to reduce contact forces and torque.

3. **Survey station spacing** — 90 ft and 180 ft spacing yield close results; 360 ft spacing yields erroneous output. Standard 91 ft spacing is adequate for 2D wells; doubling to 180 ft has acceptable effect.

## Conclusions

1. Friction factor is not a unique wellbore value — it varies with hole condition, trajectory, type of movement (axial vs. rotational), and direction of movement.
2. Viscous torque can be neglected for high-angle wells (typically <2% of total torque).
3. TDS reactive torque charts should be built and updated for every rig/well.
4. Standard 91 ft survey spacing is adequate for 2D well T&D modeling.
5. Drilling in the direction of minimum horizontal stress reduces friction forces due to improved wellbore stability.
6. The model is suitable for DLS up to 8–11°/100 ft; wells with higher DLS or significant azimuthal change require stiff-string or 3D approaches.
