---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/01-introduction-and-ded-framework"
section: "Introduction and Dissipated Energy Density Framework"
order: 1
tags:
  - "engineering/composite-materials"
  - "engineering/damage-mechanics"
  - "engineering/material-characterisation"
  - "engineering/energy-methods"
summary: "Overview of composite materials applications and the dissipated energy density (DED) approach for characterizing strain-induced material damage without requiring explicit knowledge of damage mechanisms."
formulas:
  - id: "F1"
    name: "Dissipated Energy Density Function"
    expr: "DED = f(strain, material_coefficients)"
---

## Introduction

Fibre-reinforced polymer (FRP) composites are finding increasing application in aerospace, marine and many other industries due to the advantages they provide in performance, structural efficiency and cost. However, despite years of extensive research around the world, a complete and validated methodology for predicting the behaviour of composite structures including the effects of damage has not yet been fully achieved. This is largely due to their complex nature, so that for any composite structure the performance and the development of damage leading to failure are dependent on a range of parameters including the geometry, material, lay-up, loading conditions, load history and failure modes.

## Dissipated Energy Density Framework

An approach has been developed at the US Naval Research Laboratory (NRL) to characterise strain-induced material damage that is based on the energy dissipated by a material undergoing irreversible damage processes. This dissipated energy can be determined experimentally from the nonlinear behaviour of a specimen under loading, as shown in Figure 1.

A dissipated energy density (DED) function, with units of energy per unit volume, can be determined from experimental testing and is postulated to be a property of the material. The DED function relates the strain at any point in the material to the dissipated energy, and as such measures the cumulative nonlinear softening effect all damage mechanisms, without requiring explicit knowledge of these mechanisms. The DED function has been used as a measure of local material softening due to load-induced damage, to quantify the nonlinear damage or global softening of composite materials and structures, or in a reciprocal sense to characterise material health.

### Experimental Determination of DED

The DED function is determined in a data-driven approach that uses an extensive set of test data. This data set is obtained from a multi-axial test machine, which is capable of inputting loading displacements in a number of degrees of freedom (DOF) simultaneously. The experimental procedure is used to determine a set of dissipated energy values at a range of data points throughout the displacement loading space.

A linear polynomial form of the DED function is proposed as a function of strain and material coefficients. The strain coefficients are interpolation functions between points in the strain space, and the material coefficients are solved for using the experimental energy data. The DED function characterised in this way is specific to the ply material, lay-up and ply thickness, and needs to be repeated when changes to the laminate are made.

For this reason, the data-driven approach is suited to a highly automated process, where for example a 3-DOF machine developed at NRL can feed specimens in continuously and is capable of characterising up to 12 different laminates an hour. Two generations of 6-DOF machines have also been developed, and are capable of performing automated characterisation testing using the complete displacement loading space.

### DED Integration into Constitutive Behaviour

The DED function can then be incorporated into a nonlinear definition of the material constitutive behaviour, by assuming that the work potential is the sum of recoverable and dissipated parts. From this, a coupled system of nonlinear equations is defined that describes the stress–strain, equilibrium and strain–displacement relationships. The DED function is used to define a failure surface, and determine whether the material is in an inelastic or elastic domain. The stress state of the material is then determined in an iterative process, which requires the material coefficients of the DED function and material strain state to be initially estimated and then updated iteratively.

## Project Scope

The Cooperative Research Centre for Advanced Composite Structures (CRC-ACS) is leading a four-year collaborative research project that aims to extend the data-driven approach developed at NRL and develop a characterisation methodology for composite materials to determine mechanical behaviour leading up to and including failure. The project involves validation of the approach using a range of different coupons and subcomponents as well as implementation into a suitable software package, with a focus on mitigating issues associated with analysis at difference length scales.

This paper summarises the results of a critical review performed within the project to assess the state of the art in material constitutive modelling and composite failure theories. The theories and approaches are then discussed within the context of the DED framework. The results of the review will be applied within the project to select appropriate constitutive modelling and failure approaches for implementation within a data-driven material characterisation methodology.
