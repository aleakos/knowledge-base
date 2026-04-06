---
parent_id: "orifici-2008-review-of-methodologies-for-composite-ma"
chunk_id: "orifici-2008-review-of-methodologies-for-composite-ma/04-damage-characterisation-approaches"
section: "Damage Characterisation Approaches"
order: 4
tags:
  - "engineering/composite-materials"
  - "engineering/damage-mechanics"
  - "engineering/failure-prediction"
  - "engineering/fracture-mechanics"
summary: "Comparison of strength-based and fracture mechanics approaches for characterizing onset and progression of damage in composite structures."
formulas: []
---

## Overview

In the analysis of composite structures, various approaches are used to characterise the onset and progression of damage. This typically involves monitoring a particular type of parameter to predict and monitor damage development and growth. Though there are a variety of damage characterisation approaches, these can be generally categorised as being based on theories of strength or fracture mechanics.

## Strength-Based Characterisation

The strength, as defined by the allowable stresses for a material, can be used to characterise the initiation and growth of all types of damage. The application of the strength approach is usually fairly simple, with one or more strength criteria defined, and the material deemed to have been irreversibly damaged once these criteria are satisfied.

### Characteristics of Strength Criteria

The criteria themselves can range from:
- Single stress parameter limits
- Combinations of various stress terms
- Normalisation of stress terms using structural or material values
- Distinct criteria for each damage mechanism
- General damage criteria applied across mechanisms

### Alternative Parameters

There are also a number of parameters similar to stress that have been used to characterise damage including:
- Strain
- Force
- Displacement
- Rotation

### Limitations

It is important to note that strength-based characterisation of damage is most commonly applied to define the damage initiation, and not the progression of an existing damage region. This is especially relevant for delaminations, where the strength approach provides no guidance on crack growth once initiated.

## Fracture Mechanics Approach

Classical fracture mechanics is a theory that studies the growth of existing defects, and whilst not often used for most forms of composite damage, has been successfully applied to the study of delamination and debonding.

### Historical Context

Classical fracture mechanics were developed and applied for damage analysis of metals, in which a single crack propagates at a mostly uniform rate through the material. In fracture mechanics theory, the growth of a macroscopic defect is controlled by the rate of strain energy released in propagation, as compared to a threshold maximum strain energy release rate for that material, which is a measure of material toughness.

### Strain Energy Release Rate

The strain energy released in crack propagation is typically split into the separate mechanisms of crack growth:
- **Mode I (Opening)**: Peeling - tensile opening of crack faces
- **Mode II (In-plane Shear)**: Shearing - in-plane sliding of crack faces
- **Mode III (Out-of-plane Shear)**: Tearing - out-of-plane sliding of crack faces

### Application to Delamination

The study of a single macroscopic crack in metals is analogous to the propagation of delamination, so that composite researchers almost without exception have applied classical fracture mechanics principles in order to study the growth of a pre-existing delamination.

Numerous researchers investigating the behaviour of delamination failure have found that the strain energy release rate is affected by a wide range of factors, including:
- Loading magnitude and direction
- Crack growth direction
- Proportion of the different crack opening modes
- Orientation of plies bounding the delamination
- Laminate geometry and stacking sequence

### Critical Limitation

It is important to note that the classical fracture mechanics approach assumes a pre-existing crack, and generally does not characterise the initiation of damage. This complementary relationship with strength-based approaches suggests that a combined methodology may be optimal: strength criteria for damage initiation followed by fracture mechanics for damage growth prediction.

## Material Characterisation Methods

### Experimental Standards

All failure criteria are dependent on an experimental determination of material limits. There are a number of standards organisations, for example the International Standards Organisations (ISO), American Society for Testing and Materials (ASTM), or European Structural Integrity Society (ESIS), specifying testing procedures for a large range of material properties, though these are generally limited to strength and fracture mechanics parameters.

### Standard Testing Procedures

Strength and other mechanical properties are determined with simple, well-established test procedures, such as:
- Compression tests
- Tensile tests
- Shear tests
- Three-point bend tests

Fracture mechanics tests are classified according to the mode, or combination of modes, of the loading applied to the specimen.

### Limitations of Current Approaches

A feature of most current experimental characterisation techniques is their reliance on uniaxial testing machines, and their capability to identify only one or two material parameters per test coupon. These tests can be relatively problematic and not all fracture mechanics properties are currently able to be determined reliably.

## Multi-Axial Testing Approach

Multiaxial testing machines have been developed to overcome traditional testing limitations, and allow for the application of loads in a variety of degrees of freedom. The application of multiaxial testing machines for material characterisation requires an approach to determine a set of parameters from the multiaxial response of the specimen.

### Advantages

- Multiple material parameters obtained per test
- More efficient use of materials and resources
- Capability to characterise materials under complex loading
- Specific characterisation for each material lay-up and type

### Design Optimization Methods

Approaches such as design of experiments and online load path planning have shown that the multiaxial testing approach can be optimised and made general enough for characterisation in a range of different scenarios. These systematic methods improve test efficiency while maintaining representation of critical loading conditions.
