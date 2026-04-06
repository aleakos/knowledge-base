---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/05-detailed-analysis-undersection"
section: "Detailed Analysis of Constant-Build Trajectories"
order: 5
tags:
  - "engineering/drilling"
  - "engineering/bha-design"
  - "engineering/side-forces"
summary: "Analysis of side force redistribution, drag reduction mechanisms, and torque behavior in undersection wells with critical well-problem implications"
formulas: []
---

## Side Force Redistribution

### Critical Issue

The redistribution of side forces becomes a crucial issue if hole problems or differential sticking at the BHA are expected. **Overall drag reduction must be viewed with caution** because while total drag decreases, the distribution of drag along the wellbore changes dramatically.

## Drag Reduction Mechanisms

### Comparative Profile Analysis

Figures 7 and 8 present drag profile, torque-loss profile, and effective tension profile (σₑ) as functions of pipe depth for:

- **Figure 7:** Tangent-build trajectory (conventional deviated well)
- **Figure 8:** Constant-build trajectory (θᵢ = 30°)

### Well Configuration for Comparison

Both well geometries use the same model well parameters:
- KOP at 2,400 ft
- Target at 9,000 ft vertical, 6,000 ft horizontal displacement
- 44.5° conventional well angle vs. 58° undersection well angle

### Key Comparison Results

#### Total Drag Reduction

For setting θᵢ = 30° (constant-build):
- **Total drag reduction:** ~55,000 lbf (245 kN)
- **Magnitude:** Substantial and well-documented

#### Local Drag Distribution - Critical Finding

**A direct consequence emerges from profile comparison:**

The drag in the **BHA is actually GREATER** in the undersection case than the conventional case. Similarly, comparison of torque loss for the two cases leads to the same conclusion.

### Cause: Increased Target Angle

The cause of increased side forces at the BHA is the increased target angle associated with undersection wells:

| Well Type | Target Angle |
|-----------|--------------|
| Conventional well | 44.5° (0.78 rad) |
| Undersection (θᵢ = 30°) | 58° (1.01 rad) |

**Mechanism:** The increased target angle produces greater side forces through the **Wₑ sin θ** term in Equation 3:

```
F(s) = K{[σₑ(s)α(s) - Wₑ sin θ(s)]...}
```

The increase in target angle is a **general property of undersection wells**. For catenary wells, the enhancement is greater than in constant-build cases.

### Drag Profile Distribution

#### Higher Sections

Away from drill collar and heavyweight sections, drag in the undersection well is **significantly reduced** compared to conventional well:

- Marked reduction in initial-build section
- Cumulative reduction in upper sections exceeds increased lower-section drag
- Overall drag reduction is achieved

#### Lower Sections

In drill collar and heavyweight sections: drag increases, but...

#### Net Effect

**The reduction of drag in higher sections of the well outweighs the increased drag in the lower sections**, resulting in overall drag reduction.

## Implications for Well Problem Assessment

### When Undersection Wells Should Be Avoided

**The suggestion to implement undersection well must be based on careful analysis of the nature of the drag problem.**

In cases where **contingent problems are anticipated**, undersection wells are inappropriate:

1. **Hole instability** - increased BHA side forces exacerbate instability
2. **Differential sticking** - higher BHA forces increase sticking risk
3. **Poor hole cleaning** - higher side forces complicate cuttings transport

In such circumstances: **The conventional well plan is the appropriate choice.**

### Planning Uncertainty

**Critical caveat:** The techniques described must be used as a planning aid in conjunction with good understanding of likely hole conditions.

- If **no offset well information** is available: Use techniques with **extreme caution**
- If **offset well data** exists showing specific hole problems: Can be more confident in trajectory choice

### BHA Side Force Management

The **side forces at the BHA must be kept as low as possible** when hole stability problems or differential sticking are likely.

## Torque Reduction Behavior

### Torque is More Sensitive Than Drag

The problems of drag and torque loss are closely linked but must be considered separately. **Torque loss is more critically dependent on side force redistribution than overall drag.**

### Nonmonotonic Torque Response

A key difference from drag analysis:

- **Drag decreases monotonically** with decreasing θᵢ
- **Torque loss exhibits a minimum** at an intermediate θᵢ value

This means there are circumstances where torque loss **would be expected to increase** for undersection wells (θᵢ lower than maximum).

### Potential Torque Increase

In certain geological conditions:
- The **conventional well plan provides least torque requirement** even though overall drag might be reduced with an undersection well
- **Any attempt to drill an undersection well would exacerbate torque problems**
- This represents a fundamental constraint on undersection well applicability

## Implementation Guidelines

### Prerequisite Analysis

Before implementing undersection trajectory:

1. **Understand drag source** - must be frictional, not differential sticking or instability
2. **Assess hole stability** - predict potential instability problems
3. **Evaluate offset data** - use historical drilling performance where available
4. **Verify BHA capacity** - ensure side forces won't exceed BHA limits
5. **Analyze torque implications** - confirm torque won't increase above acceptable levels

### Decision Framework

**Implement undersection geometry only when:**

- Primary drag source is friction (not formation problems)
- Hook load reduction need exceeds torque concerns
- BHA design can accommodate increased side forces
- Hole stability is not a primary concern
- Offset wells support the approach

**Use conventional geometry when:**

- Hole stability is questionable
- Differential sticking is likely
- Torque analysis shows unfavorable response
- No offset well support for undersection approach
- Uncertain hole conditions exist
