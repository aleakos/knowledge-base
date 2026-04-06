---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/005-transient-analysis"
section: "Transient Analysis"
order: 5
tags:
  - "engineering/coiled-tubing"
  - "engineering/transient-flow"
  - "engineering/time-dependent-analysis"
  - "engineering/dynamic-operations"
summary: "Transient analysis methodology for modeling time-dependent downhole conditions with 17 available events and automated choke control"
formulas: []
---

## Overview

The transient analysis enables running an infinite number of changes and events to a scenario. The scenario starts from a successful steady-state solution with the CT at any point in the well. Several case histories showing how transient analysis can improve CT operations have been presented in the literature.

## Computational Approach

The transient analysis re-maps the steady-state analysis variables into a finite volume mesh. When a change is made to the steady-state variables, a new re-mapping of the scenario is required. If only transient variables are changed, the entire scenario does not have to be re-run.

### Snapshot Feature

Snapshots enable storage of the state of the solution at any point in time. Re-runs are made from snapshots, considerably reducing run time when fine-tuning the last few events of a transient analysis.

Fluid rate changes do not require a re-mapping of the solution. Ideally, the user should schedule all changes required and enter the data in a table. Then, the actual transient run is controlled by the snapshot times defined in the table. The computation will start and stop at the snapshot time set by the user.

## Available Events

Currently, there are 17 different events available. These events enable the user to change:

- CT speed
- Choke size at the surface equipment
- Snapshot time
- Flowing rates of injected liquids and gases
- Gas lift rates
- Produced liquids and gases rates

Up to five additional transient liquids and four additional transient gases can be introduced at any time during the simulation.

## Automatic Choke Control

An automatic choke option is available that calculates the choke size required to maintain a specified wellhead or bottom hole pressure.

## Historical Development

### Initial Version (Pre-2006)

The transient modeling process first requires creation of an initial steady-state model. A separate, time-based entry table is then completed, allowing for variations of two-phase rates, BHA movement, and choke settings. The transient effects on produced liquid and gas to enter the wellbore or losses to formation are then calculated.

### Updated Version (2006)

An updated version released in 2006 added cuttings transport to the existing two-phase flow model. The full three-phase interaction of solids, liquid, and nitrogen could be modeled to predict changes to solids removal when pumping multiple fluid types or for multiple CT speed variations. A more intuitive user input was also introduced.

Several empirical correlations and a simple drift-flux model were implemented for three-phase flow modeling. The flow model could handle crossflow in the CT and annulus between CT and well. Simple outflow correlations were used to account for fluid loss to formation in separate zones.

### Current Version (2011)

The most recent transient model, released in 2011, had three main improvements:

1. **Force Model** - A force model to account for time-based weight changes due to buoyancy variation
2. **Solids-Only Analysis** - A solids-only modeling process focusing exclusively on solids location and its effect on liquid velocities
3. **Enhanced Control** - A major change to the surface choke system, permitting the user to input either a narrow range of wellhead or bottom-hole pressures, with the model calculating the associated required choke size

### Solids-Only Analysis Capability

The solids-only analysis was created to support CT fracturing operations for:
- Abrasive perforating followed by displacement period
- Low-rate pad
- Higher-rate fracturing treatment
- Location and amount of solids if screen-out occurred
- Reverse circulated cleaning
- Wiper trips

The model utilized depth and fluid volume as opposed to a time-based entry table. In this version, the model incorporated a major change to the surface choke system.

## Validation Results

Several validation case histories involving transient analysis have been presented, showing phenomena that cannot be captured by steady-state CT models. These include:

- Re-calculation considering multiple well pressures and fluid content changes to confirm that CT weight was accurately recorded prior to an operational incident
- Re-calculations of solids cleanout operations where incorrect execution resulted in buried perforations and stuck CT
- Pre-job analysis: modeling the switching of a tool with respect to time instead of pressure, required because high nitrogen rates masked surface pressure indications of downhole changes
- Modeling of complex situations where clients requested optimized dewatering operations with only small volumes of nitrogen available

## Key Advantages Over Steady-State

The transient analysis provides advantages for operations such as:

- Well cleaning
- Well unloading
- Well control
- Stimulation
- Cementing
- Underbalanced drilling with nitrified fluid

In these operations, downhole conditions continuously change, and transient analysis captures the dynamic nature of the operations better than static steady-state models. The requirement to interpolate between steady-state models has been significantly reduced.

## Industry Application

The transient analysis has greatly enhanced job design and analysis capabilities, enabling more accurate predictions of downhole conditions and operational parameters throughout the duration of CT interventions. This capability is becoming increasingly important as operators seek to optimize operations and minimize risk in complex well environments.
