---
parent_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-"
chunk_id: "gandikota-2023-drilling-digital-twin-predicts-drilling-/01-abstract-and-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/drilling"
  - "engineering/digital-twins"
summary: "Overview of a real-time drilling digital twin that predicts BHA dynamics and drilling dysfunctions using time-domain analysis integrated with surface EDR data via WITSML/MQTT protocols."
formulas: []
---

# Abstract and Introduction

## Abstract

A real-time drilling digital twin has been developed to predict drilling dysfunctions and improve operational efficiency. The system combines real-time surface electronic data recorder (EDR) data with full-physics time-domain models (TDA) to predict downhole drilling dynamics at any depth along the BHA. The digital twin uses multi-body dynamics and finite element methods and has been validated on wells in both conventional and unconventional formations.

The system automatically recognizes rig states (rotary drilling, slide drilling, connection makeup) and triggers predictive simulations accordingly. Key predicted outputs include downhole WOB, bit RPM, mechanical specific energy (MSE), and shock/vibration levels.

## Introduction

### Motivation

Most downhole measurement tools (memory subs recording WOB, bending moment, torque, vibrations) are not run routinely due to commercial and operational constraints. MWD tools provide limited vibration data with low fidelity and at a location away from the bit. As a result, drilling engineers rarely have real-time insight into downhole conditions.

Surface EDR data combined with drillstring mechanics models (torque & drag, hydraulics) have been used for operational guidance. Full-physics time-domain analysis (TDA) was historically limited to pre-job planning and post-drilling analysis.

### Digital Twin Concept

Integrating fast-running TDA models with real-time EDR data via WITSML/WITS/MQTT protocols enables:
- Near real-time prediction of downhole drilling dynamics
- Detection of drilling dysfunctions (stick-slip, lateral vibrations, bit bounce, torsional oscillations)
- Prediction of WOB, TOB, bit RPM, ROP, axial/lateral shock, and MSE at any location along the BHA
- Virtual/soft sensors providing downhole information unavailable from surface measurements alone

The workflow has been tested on multiple wells in the Permian Basin (unconventional) and other formations for both motor BHAs and rotary steerable systems (RSS).
