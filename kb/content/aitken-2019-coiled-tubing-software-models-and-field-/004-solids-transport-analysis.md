---
parent_id: "aitken-2019-coiled-tubing-software-models-and-field-"
chunk_id: "aitken-2019-coiled-tubing-software-models-and-field-/004-solids-transport-analysis"
section: "Solids Transport Analysis"
order: 4
tags:
  - "engineering/coiled-tubing"
  - "engineering/well-cleaning"
  - "engineering/solids-transport"
  - "engineering/cuttings-removal"
summary: "Solids transport methodology based on empirical correlations for predicting cuttings removal, cleanout times, and optimal circulation parameters"
formulas: []
---

## Overview

Solids transport is more complicated than finding a critical velocity that can completely fluidize and move cuttings, because the flow is not static or in an infinite medium. The solids transport analysis is based on empirical curve fits to proprietary laboratory data at surface and downhole conditions obtained on a full-scale flow loop. Several solids transport case histories have been presented previously in the literature.

## Available Options

The solids transport module provides the following options:

### Cleanout Fluids

Four cleanout fluids are assumed to have water-like properties:
- Water
- Diesel
- Acid
- Brines

Gels can also be considered.

### Solid Types

Four solid types are available:
- Formation fines
- 20/40 carbolite proppant
- 20/40 bauxite proppant
- Carbonate/silica scales

A mixed solids option will consider the worst case of fines, carbolite, or scales. This is convenient when the user is not sure what the well contains.

### Fill Location

Fill location can be specified or calculated.

## Optimization Parameters

The penetration rate, circulation time, and wiper trip rates are varied along with the flow rates and fluids to optimize a cleanout. Both normal and reverse circulation can be considered. In reverse circulation, the penetration time (instead of rate) is specified and the optimum penetration rate is calculated.

## Output Parameters

The solids transport analysis provides the following output parameters:

- The total time and fluid volumes required
- The solids rate at surface and wiper trip rates
- The distribution of solids along the wellbore at any time during the cleanout process
- In cases where 100% solids removal is not possible, how much can be removed is calculated

## Key Validation Points

### Enhanced Engineered Cleanout Process (2001)

A step change in the industry's CT cleanout capabilities occurred with the introduction of the enhanced engineered cleanout process in 2001. Because the cleanout process was an industry first and based exclusively on in-house data, validation to other software or prior published cases was not possible.

Following a period of conservative changes in operational practice, well operators obtained increased confidence with the enhanced method when several case histories were presented, including one where an ultrasonic surface-return meter was installed to indicate the rate and total mass of returned solids. During that case history, model predictions expected the majority of solids to return to surface in 3.5-4 hours following the start of the wiper trip. The actual time sand was picked up by an ultrasonic sensor attached to the return line was similar to that predicted by the solids cleanout model.

### Extended Validation Campaign

Additional cases were presented later showing extensive validation. For instance, one study detailed how the process had been used for over 100 cleanouts around the world. Further examination of 50 wells, for which enough data was available, revealed 100% successful cleaning when comparing the predicted and actual amount of sand removed. CT sizes varying from 1.75-in. to 2.875-in. were used in that campaign.

## Advanced Cleanout Techniques

### Concentric Coiled Tubing (CCT) Approach

A sand vacuuming technology using concentric coiled tubing (CCT) with a downhole jet pump provides an alternative technique for removing fill without placing a hydrostatic load on the reservoir. This technique is fully implemented in the CT software model.

### Wiper Trip Reverse-Circulation Technique

The wiper trip reverse-circulation technique was developed especially for cleaning sand from large-diameter wellbores when necessary pump rates for conventional "forward" circulation are not achievable. This technique is fully implemented in the CT software model for all cleanout operations around the world.

### Annular Fracturing Applications

For hole cleaning between multiple annular fractures during annular fracturing operations, the hole cleaning process involves:
- Circulating clean fluid through the annulus to the bottom of the wellbore
- Bringing sands back to the surface through the CT while CT is pulling out of hole (POH)

This process is more efficient than other cleaning processes because a wiper trip to surface is not required. Results from laboratory tests enabled determination of maximum POH speed and hole cleaning time under various conditions. Empirical correlations were developed to enable optimization of the process under downhole conditions.

## Historical Case Analysis

The cleanout model was utilized to examine historic cases where the cleanout was not successful. In most situations, the unsuccessful operation was executed with historic "rules-of-thumb". Few of these cases are published, but several were detailed as recent case histories showing how the transient model improved understanding of failed operations.

## Pseudo-Transient Nature

The solids cleanout module was created in the late nineties and has a pseudo-transient nature. The location of wellbore solids and their effect on return hydrostatic pressures varies over time as circulation times and BHA locations change. However, many of the inputs remain steady-state, including circulation rates, type of fluids, and production rates.

## Industry Impact

The solids cleanout capabilities represent a major advancement in CT well intervention operations, enabling:
- Prediction of cleanout time and efficiency before job execution
- Optimization of fluid selection and circulation rates
- Accurate forecasting of solids removal percentages
- Reduction in stuck pipe incidents due to inadequate cleaning
- Significant time and cost savings in well intervention operations
