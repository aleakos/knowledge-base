---
parent_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin"
chunk_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin/04-model-selection-guidelines"
section: "Engineers' Decision Framework: When to Use Each Model"
order: 4
tags:
  - "engineering/well-operations"
  - "engineering/model-selection"
  - "engineering/decision-making/engineering-trade-offs"
summary: "Decision framework for selecting between soft string and stiff string torque-drag models based on well geometry, operational parameters, and accuracy requirements"
formulas:
  - id: "F19"
    name: "Build rate (dogleg severity)"
    expr: "DLS = dθ/dMD × 100 (degrees per 100 m)"
  - id: "F20"
    name: "Horizontal displacement ratio"
    expr: "HDR = measured_depth / vertical_depth"
  - id: "F21"
    name: "Effective friction coefficient with differential sticking"
    expr: "μ_eff = μ_mechanical + Δ P × A / (W × sin(θ))"
  - id: "F22"
    name: "Prediction accuracy tolerance"
    expr: "Acceptable_error = ±(5-10% × calculated_load)"
---

## The Engineer's Dilemma: Model Selection Decision Tree

### Decision Framework

The fundamental question: **When does the extra complexity of stiff string modeling justify its computational cost and parameter uncertainty?**

This section provides practical guidance for field engineers, drilling supervisors, and planning teams.

### Quick Decision Matrix

**Choose model based on well geometry:**

| Well Type | Profile | Soft String | Stiff String | Notes |
|---|---|---|---|---|
| **Vertical** | 0-3000 m TVD, build < 2° | ✓✓ Excellent | ✗ Unnecessary | Soft string always adequate |
| **Under-deviated** | TVD 2000-4000, angle < 30° | ✓ Good | • Marginal | Soft string acceptable if friction known |
| **Deviated 30-60°** | Build to 30-60°, moderate angle | ✓ Fair | ✓ Good | Soft string ~10% low; stiff string better |
| **High-angle** | > 70°, extended build | • Marginal | ✓✓ Excellent | Stiff string essential for accuracy |
| **Extended reach** | MD/TVD > 2, horizontal > 3000m | ✗ Poor | ✓✓ Excellent | Stiff string required; soft string unreliable |
| **Coiled tubing** | Continuous curved, flexible | ✓ Fair | • Marginal | Special CuT buckling model better |

**Legend:** ✓✓ Recommended, ✓ Acceptable, • Marginal (use with caution), ✗ Not recommended

### Detailed Selection Criteria

#### **Criterion 1: Well Inclination Angle**

**Vertical (0-15°):**
```
Drag = ~0 (sin(θ) ≈ 0)
→ Use SOFT STRING - model irrelevant at these angles
→ Torque/drag dominated by tool joint friction, not wellbore friction
```

**Deviated (15-45°):**
```
Drag increases with sin(θ)
→ Use SOFT STRING if:
   - Friction coefficient (μ) well-known (±0.05)
   - Stable hole cleaning expected
   - No buckling anticipated
→ Use STIFF STRING if:
   - Extended reach beyond 2 km horizontal
   - High-angle build sections
   - Uncertain friction or pressure differential effects
```

**High-Angle (45-75°):**
```
Significant drag from gravity component
→ STIFF STRING PREFERRED because:
   - Buckling effects become significant
   - Normal force from buckling substantial (20-50% of total)
   - Soft string 20-30% underprediction common
   - Pipe curvature effects interact with wellbore geometry
```

**Horizontal (75-90°):**
```
Drag = μ × Weight (maximum)
→ USE STIFF STRING MANDATORY because:
   - Buckling fully engaged (helical configuration)
   - Normal force increased 40-100% over gravity component
   - Soft string consistently 50-150% low
   - High-angle effects dominate accuracy requirements
```

#### **Criterion 2: Measured Depth to Vertical Depth Ratio (MD/TVD)**

This ratio indicates well complexity and reach:

| MD/TVD Ratio | Well Category | Axial Offset | Model Recommendation |
|---|---|---|---|
| < 1.1 | Vertical-ish | None | Soft String OK |
| 1.1-1.5 | Moderate deviated | 200-1000 m | Soft String, verify μ |
| 1.5-2.5 | Extended deviated | 1-3 km | Soft String marginal, Stiff String recommended |
| 2.5-5.0 | Extended reach | 3-10 km | Stiff String required |
| > 5.0 | Ultra-extended reach | > 10 km | Stiff String mandatory |

#### **Criterion 3: Build Rate (Dogleg Severity)**

Build rate (DLS) in degrees per 100 meters affects how quickly buckling pressures are exceeded:

**DLS = (angle_change in degrees) / (measured_distance in 100m intervals)**

| DLS (°/100m) | Interpretation | Bucket | Model Impact |
|---|---|---|---|
| < 1 | Gentle curve | Vertical | Soft String adequate |
| 1-2 | Moderate build | Under-deviated | Soft String with caution |
| 2-3 | Aggressive build | Deviated | Stiff String beneficial |
| > 3 | Steep dogleg | High-angle | Stiff String essential |

**Why DLS matters:** Sharper curves mean transition to high-angle sections quicker, with less time to develop steady-state friction patterns. Buckling can initiate in build sections themselves.

#### **Criterion 4: Expected Friction Coefficient Uncertainty**

**If friction coefficient (μ) is known ± 0.05:**
```
→ Soft String acceptable for moderate deviation (< 50°)
→ Accuracy ± 5-10% on drag prediction
```

**If friction coefficient uncertain ± 0.10-0.15:**
```
→ Soft string prediction accuracy ± 10-25%
→ Stiff String offers secondary verification
→ Large error bars limit operational confidence
→ Consider sensitivity analysis with μ range
```

**Factors affecting friction coefficient knowledge:**

| Parameter | Effect on μ | Solution |
|---|---|---|
| Mud type variation | ±0.10 | Run pilot wells, pressure cell data |
| Temperature gradient | ±0.08 | Well-specific thermal models |
| Pipe coating condition | ±0.12 | Visual inspection, wear data |
| Wellbore washout | ±0.15 | Caliper log review |
| Formation variation | ±0.10 | Offset well data |

**Mitigation:** Use offset well field data or pilot well measurements to constrain μ before committing to full drilling program.

#### **Criterion 5: Operational Risk and Cost Trade-offs**

**Cost of stuck pipe / non-productive time (NPT):**

```
If well is high-value target (e.g., $50M+ asset):
→ Stiff String modeling justified despite extra computational cost
→ Risk reduction value >> modeling cost

If well is low-risk onshore:
→ Soft String adequate; marginal accuracy gains not worth complexity
```

**Stuck pipe risk escalation:**

| Scenario | Risk Level | Model Recommendation |
|---|---|---|
| Vertical hole, stable | Low | Soft String |
| Deviated 30-45°, good hole | Moderate | Soft String (verify) or Stiff String |
| Deviated 60-75°, tight hole | High | Stiff String required |
| Horizontal, long exposure | Very High | Stiff String + contingency planning |

### Practical Decision Flowchart

```
START: New well plan

├─ Is TVD < 1500 m? YES
│  └─ DECISION: Use SOFT STRING (vertical emphasis)
│
├─ Is TVD 1500-3000 m with angle < 30°? YES
│  └─ DECISION: Use SOFT STRING (friction must be known ±0.05)
│
├─ Is angle 30-60° with MD/TVD < 2.0? YES
│  ├─ Is μ known ±0.05? YES
│  │  └─ DECISION: SOFT STRING acceptable
│  ├─ Is μ known ±0.05? NO
│  │  └─ DECISION: Run BOTH models for comparison
│
├─ Is angle > 60° OR MD/TVD > 2.5? YES
│  └─ DECISION: Use STIFF STRING mandatory
│
├─ Is this extended reach (MD/TVD > 5)? YES
│  └─ DECISION: STIFF STRING + buckling analysis + contingency
│
└─ Use selected model with documented assumptions
```

### Validation and Verification Strategy

**Best practice approach for critical wells:**

**Phase 1: Planning**
- Run both soft and stiff string models
- Compare predictions
- If difference > 15%: friction or buckling effects significant
- If difference < 10%: either model acceptable

**Phase 2: Pilot Well**
- Instrument with measured torque/drag data
- Actual friction coefficient can be backed-calculated
- Refine μ estimate for offset wells
- Validate model selection decision

**Phase 3: Offset Wells**
- Use calibrated friction coefficient
- Single model usually sufficient
- Apply model with documented assumptions
- Monitor actual vs. predicted regularly

### Model Selection for Specific Drilling Operations

#### **Tripping Operations (Pulling Pipe Out)**

**Soft string typical:** 5 kN drag
**Stiff string with buckling:** 10-15 kN drag (100-200% higher)

**Implication:** Pulling may reach equipment limits unexpectedly with stiff string effects

**Recommendation:** 
- Horizontal wells: Always use stiff string
- Deviated wells > 50°: Use stiff string for pulling predictions

#### **Drilling (Rotating and Circulating)**

**Added drag from rotation:** Friction torque ÷ pipe radius

**Both models similar for torque,** but normal force critical:

**Soft string:** F_friction = μ × W × sin(θ)
**Stiff string:** F_friction = μ × (W × sin(θ) + N_buckle)

**→ Stiff string predicts higher standpipe pressure requirements**

#### **Logging Operations (Wireline Depth).**

**Cable load similar to pulling operations**
- Light loads (wire tension < 10 kN)
- Buckling less pronounced than drillpipe
- **Soft string usually adequate for wireline**

#### **Casing Running**

**Casing typically higher stiffness than drillpipe:**
- Heavier wall thickness
- EI values 2-3× higher
- Buckling initiated at higher loads

**Decision:** 
- Deviated wells (< 60°): Soft string acceptable
- High-angle / horizontal: Stiff string beneficial

### Summary: The Dilemma Resolved

**When Soft String is Sufficient:**
✓ Vertical wells
✓ Deviation < 45° with known friction
✓ Conservative design (can tolerate 10-15% underprediction)
✓ Low-cost, low-risk wells

**When Stiff String is Necessary:**
✓ Deviation > 60°
✓ Extended reach (MD/TVD > 2.5)
✓ High-value wells with stuck-pipe risk
✓ Critical pull operations
✓ Friction coefficient uncertain

**Best Practice:**
Run both models, compare results:
- **Difference < 10%:** Either model acceptable; use simpler soft string
- **Difference 10-25%:** Friction/buckling effects moderate; prefer stiff string for high-angle
- **Difference > 25%:** Buckling effects large; stiff string essential; consider contingency planning
