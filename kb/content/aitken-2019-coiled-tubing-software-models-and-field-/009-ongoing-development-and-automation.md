---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/009-ongoing-development-and-automation"
section: "Ongoing CT Software Development and Automation"
order: 9
tags:
  - "engineering/coiled-tubing"
  - "engineering/automation"
  - "engineering/telemetry"
  - "engineering/real-time-monitoring"
  - "engineering/control-systems"
summary: "Future development of CT software with real-time telemetry, automated injector control, and human-centered automation for optimized and safer operations"
formulas: []
---

## Context and Industry Drivers

In the context of current CT industry trends, generational crew change and reliance on a much smaller pool of qualified personnel, job optimization for completing safe, successful CT operations with lower costs has never been more important.

### Workforce Dynamics

- The CT field supervisor on-the-job experience prior the North America shale boom averaged 8.5-9 years
- The North America shale boom resulted in approximately 50% increase in global CT unit count
- The CT field supervisor on-the-job experience decreased to approximately 3.5 years following the boom
- Current industry faces a shortage of experienced CT field engineers

## Automation Approach: Human-Centered Design

A solution has been presented for mitigating the potential risk of health, safety and environmental (HSE) and service delivery incidents by introducing several degrees of automation into CT interventions. The foundation of the human-centered automation approach revolves around the CT software suite incorporating:

1. Pre-job modeling
2. Real-time operational feedback
3. Active control of surface equipment during CT interventions

This approach updated operational parameters to enhance safety and efficiency, and to increase the certainty of success.

## Current and Planned CT Automation Workflow

The present and planned CT automation workflow includes:

1. **Pre-job modeling and real-time operational feedback**
   - Software predictions used before and during operations
   - Continuous comparison of actual vs. predicted conditions

2. **Intelligent injector control**
   - Increased service delivery certainty
   - Active intervention maintaining safe CT operating limits at all times

3. **Automating CT interventions**
   - Using both surface and downhole data in real time
   - Reducing operator decision burden
   - Improving consistency and safety

## CT Telemetry Systems Integration

The CT operational optimization and automation rely on:

1. **Real-time CT modeling software capabilities**
2. **CT telemetry systems** that have evolved significantly over the past 15+ years

### Telemetry System Components

All CT telemetry systems consist of:

- **Downhole hardware**: Tools and sensors
- **CT transmission medium**: Wire, optical fiber, or both inside the carrying CT workstring
- **Surface equipment**: Data acquisition and control systems

### Telemetry Data Available

More than a decade ago, CT telemetry systems emerged from the well intervention need to improve certainty, efficiency, and safety. CT telemetry systems have significantly changed the way CT operations are performed by providing real-time downhole data such as:

- Pressure
- Temperature
- Depth correlation
- Forces and torque on the BHA
- Vibration profiles

## Real-Time Telemetry and Model Integration

Without the transient mode capability, monitoring downhole conditions in real time can be performed only qualitatively. Quantitative monitoring for CT operational optimization and automation requires that:

1. A CT modeling software package with transient effects (as described in this paper)
2. A CT telemetry system

...are coupled as a unified technology. Such unified technologies are currently emerging for use in the field in the coming years.

### Unified Technology Approach

Combining real-time calculations of well intervention operating limits and data acquisition using CT telemetry systems enables an intervention driven by an automated programmable logic controller (APLC) that can intervene if or when deviations from the initial job design occur.

## Real-Time Software Applications

### Example 1: Overpull Failure Prevention (Figure 11)

Part of the verification process included re-running past interventions. An overpull failure example shows:

- The pull limit was exceeded three times before CT actually parted
- Prior to final overpull, circulation was increased, resulting in higher pump pressure
- Higher pump pressure reduced the pull limits
- Final overpull was actually less than previous pulls at lower pump pressure, but it broke the CT
- **Lesson**: Pump pressure effects on forces must be continuously monitored

### Example 2: Successful Milling with Real-Time Control (Figure 12)

A successful milling operation using the newly developed system demonstrates:

- A plug was milled at 14,500-ft
- CT was RIH another 200-ft cleaning to TD
- CT was POH, pulling heavy after 100-ft
- **Operators responded to pull limit alarms** and stopped the CT unit
- Circulated and then pulled past the trouble point
- Weight gauge changes during POH were easily controlled
- Operations remained within safe operating envelope

### Example 3: Snub Analysis for Critical Control (Figure 13)

A snub analysis example for 1.75-inch CT snub failure at 4631-ft when running blanking plug for ESP bypass:

- The pipe buckled between injector and stuffing box
- Weight gauge changes during snubbing are rapid
- CT momentum substantially reduces operator's control and response
- **Critical finding**: The time for operator action was less than 8 seconds
- This demonstrates the need for an automatic system for snubbing operations
- Manual operator reaction time is insufficient for controlling rapid force changes

## Intelligent Injector Control Workflow

The intelligent injector control workflow will:

1. **Pre-emptively avoid failures** by limiting injector motor pressure prior to CT encountering obstruction
2. Calculate the operation limit which the APLC then uses to limit pressure
3. Automatically adjust injector motor pressure for control if CT weights change above certain amounts over time
4. Handle both snubbing and pulling directions with appropriate response algorithms

### System Testing and Validation

The APLC system was yard tested, confirming how the intelligent injector control hardware reacts when:

- CT weight limits are reached
- Sudden and sharp weight changes occur
- Different operational modes (RIH, POH, snubbing) are encountered

## Future Development Vision

The future development vision for the CT modeling software suite is linked to the future development of CT telemetry systems. The vision is based on its ability to:

1. **Remotely mine relevant surface and downhole data** and transform it into actionable information
2. **Improve certainty and efficiency** through data-driven decision making
3. **Increase confidence** in operations through continuous validation
4. **Reduce overall operational cost** while delivering outstanding safety

### Next Steps in Human-Centered Automation

The next steps in human-centered CT interventions are to use CT software and hardware for automation with fewer critical operational decisions left exclusively to surface personnel. Future controls will:

1. **Trip CT to specific depths** automatically
2. **Slow down** for known obstructions, well profile changes, or equipment requirements
3. **Maintain safe operating limits** without operator intervention in routine situations
4. **Enable remote expert input** while reducing operational burden

## Labor and Cost Implications

While automation is focused on improving operational quality and efficiency:

- Labour costs will decrease as well-trained technicians operate the surface equipment
- Remote experts can provide input and oversight rather than requiring on-site specialists
- Operations become more repeatable and consistent
- Safety improves through elimination of operator fatigue and reaction time delays

## Industry Impact

The coupling of advanced CT software models with real-time telemetry and automated control systems represents a paradigm shift in well intervention operations. This integrated approach enables:

- **Higher operational success rates** through predictive analytics
- **Reduced HSE incidents** through automated control of critical parameters
- **Lower operational costs** through optimized planning and automated execution
- **Better knowledge retention** despite aging workforce through embedded expertise in software
- **Faster training** of new CT personnel using standardized systems
- **More consistent operations** across global fleet of CT units
