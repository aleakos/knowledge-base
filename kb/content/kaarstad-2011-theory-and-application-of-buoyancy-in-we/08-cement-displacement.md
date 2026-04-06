---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/08-cement-displacement"
section: "Applications - Displacing Cement"
order: 8
tags:
  - "engineering/drilling"
  - "engineering/cementing"
  - "engineering/buoyancy"
summary: "Worked examples of hook load calculations during cement placement with cement filling drill string and/or annulus separately."
formulas:
  - id: "EX3"
    name: "Buoyancy factor for drill collars with heavy cement inside"
    expr: "β = 1 - [1.5 × 8² - 1.5 × 3²] / [7.8 × (8² - 3²)] = 0.81"
  - id: "EX4"
    name: "Buoyancy factor for drill pipe with heavy cement inside"
    expr: "β = 1 - [1.5 × 5² - 1.5 × 4²] / [7.8 × (5² - 4²)] = 0.88"
  - id: "EX5"
    name: "Hook load with cement in drill string only"
    expr: "W = 0.81 × 2.13 × 100 + 0.88 × 0.294 × 2000 = 690 kN"
  - id: "EX6"
    name: "Hook load with cement in annulus only"
    expr: "W = 0.70 × 2.13 × 100 + 0.76 × 0.294 × 2000 = 573 kN"
---

# Example Calculation: Displacing Cement

## Problem Setup

Assuming the same well as the deviated well example (Example 4.1), compute the hook load during cement placement. Assume that cement covers the entire depth interval.

Two scenarios are evaluated:
1. 1.8 s.g. cement fills the drill string, 1.5 s.g. mud in annulus
2. 1.8 s.g. cement fills the annulus, 1.5 s.g. mud in drill string

## Case 1: Cement Filling the Drill String

When heavy cement (1.8 s.g.) fills the drill string and mud (1.5 s.g.) is in the annulus:

### Buoyancy of the Drill Collars

```
β = 1 - [1.5[s.g.] × 8²[in²] - 1.5[s.g.] × 3²[in²]]
         / [7.8[s.g.] × (8²[in²] - 3²[in²])]
β = 0.81
```

### Buoyancy Factor for the Drill Pipe

```
β = 1 - [1.5[s.g.] × 5²[in²] - 1.5[s.g.] × 4²[in²]]
         / [7.8[s.g.] × (5²[in²] - 4²[in²])]
β = 0.88
```

### Hook Load Calculation

```
W = 0.81 × 2.13 [kN/m] × 100[m] + 0.88 × 0.294 [kN/m] × 2000[m]
W = 173 + 517
W = 690 kN
```

**Result:** Hook load increases to 690 kN when heavy cement is inside the pipe.

## Case 2: Cement Filling the Annulus

When cement fills the annulus and mud fills the string:

### Buoyancy Factors

Using Equation 4, the buoyancy factors are calculated. The increased density of the annular fluid results in a decreased buoyancy factor (i.e., increased buoyancy force):

- Drill pipe buoyancy factor: 0.76
- Drill collars buoyancy factor: 0.70

### Hook Load Calculation

```
W = 0.70 × 2.13 [kN/m] × 100[m] + 0.76 × 0.294 [kN/m] × 2000[m]
W = 149 + 441
W = 573 kN
```

**Result:** Hook load decreases to 573 kN when cement is displaced to the outside.

## Key Observations

1. **Inside Cement Effect:** When heavy cement fills the drill string (Case 1), the hook load increases to 690 kN compared to 649 kN with uniform mud.

2. **Outside Cement Effect:** When cement is in the annulus (Case 2), the hook load decreases to 573 kN due to increased buoyancy force from the heavier external fluid.

3. **Density Difference Impact:** The difference between cases demonstrates the critical importance of tracking internal and external fluid densities during operations.

4. **Application of Projected Height:** The projected height concept is applied for all static weight calculations, accounting for well deviation.
