---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/001-introduction-and-overview"
section: "Introduction and Overview"
order: 1
tags:
  - "engineering/coiled-tubing"
  - "engineering/well-interventions"
  - "engineering/modeling"
  - "engineering/software-tools"
summary: "30-year history of coiled tubing modeling software development for planning and executing global CT operations with extensions from steady-state to transient analysis"
formulas: []
---

## Overview

A coiled tubing (CT) modeling software package has been continuously developed since the early 1980s to assist in planning and executing global CT operations. The software has evolved from simple steady-state models to sophisticated transient models that can automate CT operations.

## Development History

The development of the CT software model was initiated in the early 1980s to answer questions about:
- Downhole flow and pressure conditions during CT operations
- Stress conditions and forces on the tubing
- Operating limits and failure prevention

### Initial Objectives

The main objectives of the CT software model were:
1. Devise an engineering tool to support CT operations in their planning stage
2. Provide fast, practical analysis of CT job studies and design
3. Enable use both in the office and in the field

## Model Components

The CT software package consists of four main components:

1. **Flow Analysis** - Calculates flowrates and pressures for multiphase flow in wells
2. **Tubing Force Analysis (TFA)** - Predicts forces and stresses in the CT workstring
3. **Solids Transport Analysis** - Models cuttings removal and debris transport
4. **Transient Analysis** - Simulates time-dependent operational effects

## Capabilities

Since initial development, the CT software model has evolved to predict:

- Flowrates and pressures when oil field fluids are circulated using a CT workstring, including determination of circulation feasibility and lost returns risk
- Forces and stresses induced in the CT during running in hole (RIH), pulling out of hole (POH), and stationary load conditions
- Operating limits including friction lock occurrence and maximum loads on the bottom hole assembly (BHA) at any depth
- Solids transport effects on pressures and flowrates for cleanouts
- Time-dependent tracking of solids position and transportability for well cleaning optimization

## Data Input Requirements

The software requires the following input data:

- Directional well trajectory
- Variable completion geometry
- CT material and dimensional information
- BHA parameters
- Well production parameters
- Gas lift systems
- Circulation media (two-phase flow, stable foam, nitrogen, liquids)
  - Supported rheological models: Newtonian, Bingham Plastic, Power Law, Herschel-Bulkley
- Fill characteristics for cleanout analyses

## Current Industry Status

Although the most common approach in the industry is still to use steady-state models, in practice downhole conditions during CT operations are transient. Consequently, steady-state models have been extended to account for transient effects at both pre-planning and execution stages.

With the advent of state-of-the-art CT telemetry systems, downhole data can be acquired in real time and used with transient CT software models to automate and optimize CT operations, increasing their safety and efficiency.

## Scope and Significance

This comprehensive review presents 30 years of global experience with the CT modeling software program, including:
- Extensive validation against laboratory and field data
- Two detailed case histories illustrating transient operation benefits
- Discussion of ongoing development and real-time telemetry integration
- Impact on operational efficiency and safety with current industry shortage of experienced CT field engineers
