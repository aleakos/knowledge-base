---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/007-case-history-1-composite-plug-milling"
section: "Case History 1: Composite Plug Milling in Horizontal Well"
order: 7
tags:
  - "engineering/coiled-tubing"
  - "engineering/well-intervention"
  - "engineering/plug-milling"
  - "engineering/case-study"
  - "engineering/Argentina"
summary: "Vaca Muerta plug milling operation demonstrating transient software model matching of dynamic downhole conditions with lubricant application"
formulas: []
---

## Overview

This case illustrates a composite plug milling operation in a horizontal well in Argentina's Vaca Muerta oil field. This was the first report in literature where a transient software model was used for matching the downhole dynamic conditions from a composite plug milling operation with CT.

## Operation Parameters

### Well Configuration

- Location: Vaca Muerta oil field, Argentina
- Well type: Horizontal
- CT size: Turbine-style extended-reach tool supplied 400-lbf tension
- Coefficient of friction (default): 0.24

### Initial Predictions

The predicted weights in the lateral with the default coefficient of friction of 0.24 and 400-lbf tension are shown in Figures 5 and 6 from the original paper.

## Operational Progression

### Initial Phase (0-12,000 ft)

The observed data was initially as expected. Operations began with:
- Example pull test
- Example 650-ft cleaning short trip
- Excess drag indicating debris accumulation

### Phase 2: Debris Impact (12,000-14,500 ft)

The weight temporarily dropped off during actual plug milling. Several observations:

- Pulling weights observed during short cleaning trips were higher than those during initial pull tests
- This change and the RIH weight drop-off were attributed to increased presence of plug and fracturing sand debris as the operation went deeper
- At approximately 14,500-ft, RIH weights dropped further

## Adaptive Operation: Lubricant Introduction

### Decision to Lubricate

Field operations decided to introduce lubrication to combat the increased friction from debris accumulation. They deployed:

- **Volume**: 40 barrels
- **Type**: 1% advanced lubricant (Livescu and Craig, 2015)
- **Depth**: Approximately 14,500-ft

### Lubricant Effectiveness

The effect of the lubricant can be seen clearly in Figure 6 (milling the final two plugs):

- RIH weight was regained to the levels for default coefficient of friction of 0.24
- The final two plugs were successfully milled
- On POH, the weights were now approximately 5,000 lbf less than during RIH

## Key Observations

### Very Dynamic Operation

This operation exemplified a very dynamic intervention where:

- The amount of debris (plug material and fracturing sand) varied during the later stages of operation
- Lubricant presence and concentration changed throughout the operation
- Downhole conditions continuously evolved

### Weight Matching Process Improvement

The most recent weight matching process aided operational execution and pre-job validation by:

- Enabling all recorded weight points to be incorporated into force analysis software (removing human factor from weight selection)
- Allowing observed and predicted weights for RIH and POH to be on single plot
- Providing flexibility for viewing only sections of the job using elapsed time mask
- Supporting generation of plots in data acquisition software

## Transient Model Application

This case history demonstrated the value of transient modeling in predicting and matching:

- Dynamic changes in downhole friction conditions
- Impact of operational decisions (lubricant injection) on force balances
- Complex debris transport and settling dynamics
- Time-dependent variations in CT workstring loads

## Operational Success Metrics

- All 19+ composite plugs were successfully milled in the lateral section
- Operation maintained control despite complex debris conditions
- Lubricant intervention successfully restored drilling progress at critical juncture
- Weight predictions matched field observations within acceptable tolerances

## Significance

This case history represents a modern application of CT software modeling where:

1. **Pre-job prediction** provided baseline understanding of expected forces
2. **Real-time monitoring** enabled detection of unexpected debris conditions
3. **Adaptive operations** (lubricant injection) were executed based on field observations
4. **Post-job analysis** validated model predictions against actual field data
5. **Transient modeling** captured dynamic nature of the operation better than steady-state approaches

The successful completion of this operation in Argentina's challenging Vaca Muerta formation demonstrates the importance of integrating advanced CT software modeling with adaptive field operations and real-time data analysis for optimizing complex well interventions.
