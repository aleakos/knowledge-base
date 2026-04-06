---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/02-constitutive-modelling"
section: "Constitutive Modelling"
order: 2
tags:
  - "engineering/composite-materials"
  - "engineering/material-modelling"
  - "engineering/constitutive-relations"
  - "engineering/stress-strain"
summary: "Classification of constitutive models for composite materials into explicit, implicit, and hybrid approaches, with examination of macroscopic and microscopic levels of analysis."
formulas:
  - id: "F2"
    name: "Generalized Stress-Strain Relationship"
    expr: "σ = f(ε, ε̇, ε_history, T, material_properties)"
---

## Overview

The constitutive model of a material system is the relation that is used to characterise its physical properties, and is necessary to describe the behaviour of the system under loading. Constitutive models can be classified as either explicit, implicit or hybrid, based on their form and their relationship to physically derived models of behaviour.

## Explicit Constitutive Models

Explicit constitutive models are the classical approach to defining the constitutive relationship of a material system, and connect the real properties of the system to its behaviour using physically-based theories. The mechanical behaviour of solids is normally defined as a constitutive stress–strain relation, where the stress is a function of the strain, strain rate, strain history, temperature and material properties. This can be done at the macroscopic or microscopic level.

### Macroscopic Level

The macroscopic level involves analysis at a range of scales that includes individual plies and laminates, as well as structural components and assemblies. Whilst each of these scales can be classified separately, they are all based on a constitutive model that uses smeared or averaged properties for the composite ply.

The generalised stress–strain relationship is derived from the work potential of the system. At a macroscopic level, this equation is used to define the stiffness of a single ply, or of a complete laminate using classical laminate plate theory. The determination of the stress and strain fields for the material is achieved by solving this equation with the strain–displacement, compatibility and equilibrium equations, and is commonly performed using finite element (FE) analysis.

### Microscopic Level

At the microscopic level, the constitutive relationship is used to describe the relationship between the properties of the unit composite ply to its fibre and matrix constituents. More complex models may also include the interface and interphase region between the constituents, as well as the presence of voids or other imperfections.

A generalised stress–strain law is defined in a similar manner, though typically also incorporates deformation due to thermal expansion, and is solved using mechanics of materials, theory of elasticity or an FE approach.

## Implicit Constitutive Models

Implicit constitutive models characterise the behaviour of a material using only a mathematical relationship between the inputs and outputs of a system and do not attempt to represent any of the underlying physics. Implicit models are more suited to represent highly complex and nonlinear material behaviour, where explicit models based on simple phenomenological investigations may not be able to capture all the relevant behaviour.

In order to define an implicit model, the system being investigated is first expressed mathematically in terms of its inputs and outputs, and then a system identification process is used to find an optimum approximation function. This process requires a set of input–output data, such that the fitness of the approximation is dependent on the reliability of this data.

For complex systems, the use of neural networks as a universal function approximator allows for accurate descriptions of material behaviour with multiple input and output variables. Implicit constitutive models can be developed for any material, and have been demonstrated for a range of materials, including soil, piezoelectric and FRP composites.

### Limitations and Scope

It is important to note that these models can only be used to predict behaviour within the range for which they were developed, which has implications for the application across different length scales.

## Hybrid Constitutive Models

Hybrid models combine features of explicit and implicit relations, and use both physically-based and approximation methods in order to characterise material behaviour. This type of model can be advantageous in balancing a consideration of the underlying theories or frameworks with the relative freedom of an approximation-based characterisation.

### Dissipated Energy Density as a Hybrid Approach

An example hybrid relation is the DED approach described previously, where an arbitrary polynomial function is used to mathematically define the DED, which is a material property used to measure any energy lost due to nonlinearities. The DED is defined as a polynomial equation that is incorporated into the material constitutive relation, and solved using an iterative solution process.

The hybrid model for DED has also been used in conjunction with a degradation model to simulate loss of stiffness due to material failure, and to characterise material damage in both an analysis and health monitoring context.

### Advantages

Hybrid approaches provide a practical balance between:
- Incorporating physical understanding and constraints
- Maintaining computational efficiency
- Capturing complex nonlinear behaviour
- Reducing the number of required material parameters
