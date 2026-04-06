---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/04-constant-build-vs-catenary"
section: "Drag Properties of Constant-Build vs. Catenary Trajectories"
order: 4
tags:
  - "engineering/drilling"
  - "engineering/well-design"
  - "engineering/trajectory-planning"
summary: "Comparative analysis of hook load and torque for constant-build and catenary trajectories with quantitative results from model well"
formulas: []
---

## Model Well Parameters

A typical model well (based on Well 3, Ref. 2) with fixed reference points was used to compare drag and torque properties:

### Well Specifications

| Parameter | Value | SI Units |
|-----------|-------|----------|
| Kickoff Point Depth | 2,400 ft | 732 m |
| Build Rate (initial section) | 5°/100 ft | 2.86 × 10⁻³ rad/m |
| Target Vertical Depth | 9,000 ft | 2,744 m |
| Horizontal Displacement | 6,000 ft | 1,829 m |
| Conventional Well Angle | 44.5° | 0.78 rad |

### Drillstring Configuration

| Component | Specification |
|-----------|---------------|
| Drill Collar | 372 ft × 6.5 in. (113 m × 16.5 cm) |
| Heavyweight Pipe | 840 ft × 5 in. (256 m × 12.7 cm) |
| Drillpipe | 5 in. (12.7 cm) to surface |
| Mud Weight | 9.8 lb/gal (1,174 kg/m³) |
| Friction Coefficient | K = 0.4 (severe conditions) |
| WOB for Torque Calcs | 38,000 lbf (169 kN) |

## Hook Load Analysis

### Comparison Results

Figure 5 presents hook load during tripping out from full depth as a function of angle θᵢ (angle attained at end of initial-build section).

**Key Observations:**

As θᵢ is reduced:
- Curvature α(s) in the section downstring from initial-build section increases
- Inclination achieved at target increases
- Upper curve = constant-curvature trajectory
- Lower curve = catenary trajectory

### Quantitative Results

| Scenario | Hook Load | Reduction | Notes |
|----------|-----------|-----------|-------|
| Conventional (θᵢ = 44.5°) | 320,000 lbf | — | 1,423 kN |
| Undersection θᵢ = 30° (const-build) | 265,000 lbf | 55,000 lbf | 245 kN reduction |
| Undersection θᵢ = 30° (catenary) | 265,000 lbf | 55,000 lbf | 245 kN reduction |

### Critical Finding

**For θᵢ ≥ 30°, constant-build and catenary trajectories are equally effective** in reducing hook load. The two curves converge, indicating that the simpler constant-build trajectory achieves nearly equivalent drag reduction.

## Catenary Feasibility Issue

### The Tensioning Problem

An important practical constraint: **In the well described, it is impossible to achieve a correctly tensioned catenary unless the BHA sticks.**

**What occurs instead:**
- At a given hook load, the entire drillpipe length between the end of the initial-build section and the top of heavyweight pipe lifts off from the bore wall
- This allows efficient transmission of pull to the BHA
- Approximates catenary behavior passively

### Implication

Even in favorable circumstances, the **constant-build trajectory is almost as effective as the catenary trajectory**, while being more practically achievable.

## Rotary Torque Analysis

### Torque Loss vs. Initial-Build Angle

Figure 6 shows rotary torque as a function of θᵢ for the constant-build case:

| Well Type | Surface-to-Bit Torque Loss | Reduction (at θᵢ = 30°) |
|-----------|---------------------------|------------------------|
| Conventional (θᵢ = 44.5°) | 22,500 lbf-ft | — |
| | 30.5 kN·m | |
| Undersection (θᵢ = 30°) | 18,000 lbf-ft | 4,500 lbf-ft |
| | 24.4 kN·m | 6,100 N·m |

**Torque Reduction:** Constant-build trajectory with θᵢ = 30° reduces torque loss by ~4,500 lbf-ft (6,100 N·m). Catenary would give similar reduction.

### Important Distinction

Unlike hook load, **the torque loss exhibits a minimum at an intermediate value of θᵢ**. This is critical because:

- Hook load decreases monotonically with decreasing θᵢ
- Torque loss shows nonmonotonic behavior
- There are circumstances where torque loss would **increase** for undersection wells
- In such cases, conventional well plan provides least torque requirement despite reduced overall drag

### Torque vs. Drag Tradeoff

The problems of drag and torque loss, although closely linked, must be considered separately:

- Overall drag reduction may occur while torque increases
- **Attempting to drill an undersection well would exacerbate torque problems** in certain geological conditions
- Drilling plan must be based on understanding of both phenomena

## Comparative Summary

### Constant-Build Advantages

1. **Practical achievability** - standard BHA placement techniques
2. **Nearly equal efficiency** - 95%+ of catenary performance for typical cases
3. **Simpler directional control** - achievable with existing drilling practices
4. **More predictable behavior** - familiar drilling responses

### Catenary Advantages

1. **Slightly better theoretical performance** - marginally lower drag for perfectly executed trajectories
2. **Optimal mechanics** - mathematically optimal for specific tension profiles

### Practical Recommendation

For most applications, **constant-build trajectories are preferred** because they achieve essentially equivalent drag reduction with significantly better practical feasibility and directional control.
