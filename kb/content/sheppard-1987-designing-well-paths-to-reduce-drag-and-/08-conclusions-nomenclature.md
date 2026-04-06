---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/08-conclusions-nomenclature"
section: "Conclusions and Nomenclature"
order: 8
tags:
  - "engineering/drilling"
  - "engineering/well-design"
  - "engineering/summary"
summary: "Summary of key findings, design recommendations, and complete nomenclature for friction model and trajectory analysis"
formulas: []
---

## Conclusions

### Primary Finding

**It is possible to reduce drag and torque by implementing certain undersection trajectories.** Furthermore, this reduction can be achieved by use of simple trajectories to target.

### Key Limitation

These trajectories are **invariably associated with higher side forces in the BHA**, creating a fundamental design tradeoff that must be carefully managed.

### Recommendation Framework

#### When to Use Undersection Trajectories

Use undersection trajectories when:
- Primary drag source is frictional (not hole condition problems)
- Hole conditions are stable and predictable
- BHA can tolerate increased side forces
- Offset well data supports the approach
- Torque analysis confirms acceptable levels

#### When to Avoid Undersection Trajectories

**Undersection trajectories will create greater problems than conventional trajectories and should be avoided** when:

- **Hole-stability problems are likely** - increased BHA side forces exacerbate instabilities
- **Differential sticking is a concern** - higher forces increase sticking risk
- **Poor hole cleaning is anticipated** - increased forces complicate cuttings transport
- **Formation tends to cavify** - side forces worsen erosion
- **Uncertainty in hole conditions** - insufficient offset well support

### Practical Implementation Guidance

**The techniques described must be used as a planning aid in conjunction with a good understanding of the likely hole conditions.**

- If **offset well information is available**: Can be applied with good confidence in areas with similar geology
- If **no offset well information is available**: Techniques must be used with **extreme caution**
- Never apply undersection trajectories speculatively without geological basis

### Critical Caveat

**It cannot be overemphasized** that drag and torque must be considered separately:
- Overall drag reduction does not guarantee torque reduction
- Torque may increase even when overall drag decreases
- BHA design must accommodate increased side forces
- Planning must address both drag and torque simultaneously

---

## Nomenclature

### Geometric and Position Variables

| Symbol | Description | Units |
|--------|-------------|-------|
| A(s) | Pipe cross-sectional area at s | ft² [m²] |
| D | Depth to kickoff point | ft [m] |
| s | Pipe length from bit | ft [m] |
| Δs | Incremental pipe length | ft [m] |
| β | Azimuthal bearing angle | degrees [rad] |
| Δβ | Incremental change in bearing angle | degrees [rad] |
| θ | Deviation angle | degrees [rad] |
| Δθ | Incremental change in deviation angle | degrees [rad] |
| θᵢ | Initial-build angle | degrees [rad] |
| α(s) | Planar curvature at s | ft⁻¹ [m⁻¹] |

### Force and Stress Variables

| Symbol | Description | Units |
|--------|-------------|-------|
| F | General side force | lbf [N] |
| F(s) | Side force at s | lbf [N] |
| Wₑ | Buoyed weight of steel per unit length | lbf/ft [N/m] |
| W | Weight on bit (WOB) | lbf [N] |
| ΔW | Difference between surface and downhole WOB | lbf [N] |
| Wdh | Downhole weight on bit | lbf [N] |
| σ(s) | Tension at s | lbf [N] |
| σₑ(s) | Effective tension at s | lbf [N] |

### Pressure and Mud Variables

| Symbol | Description | Units |
|--------|-------------|-------|
| p(s) | Mud pressure at s | psi [kPa] |
| Pᵢ | Internal mud pressure | psi [kPa] |
| Pₘ | Mud pressure at (r,φ) | psi [kPa] |
| P₀ | Mud pressure at Reference Point 0 | psi [kPa] |
| ρ | Steel density | lbm/ft³ [kg/m³] |
| ρₘ | Mud density | lbm/ft³ [kg/m³] |

### Friction and Energy Variables

| Symbol | Description | Units |
|--------|-------------|-------|
| K | Sliding-friction coefficient | dimensionless |
| ΔT | Difference between surface and downhole torque | lbf-ft [N·m] |
| g | Gravitational acceleration | ft/sec² [m/s²] |

### Pipe Geometry

| Symbol | Description | Units |
|--------|-------------|-------|
| r₁ | Outer pipe radius | ft [m] |
| r₂ | Inner pipe radius | ft [m] |
| (r,φ) | Polar coordinates on pipe element | — |

### Special Cases and Subscripts

| Notation | Description |
|----------|-------------|
| _const | Implication of constant value of associated variable |
| ± | Integration variable (in some contexts) |
| — | Integration variable (in some contexts) |

---

## Key References

### Cited Works

1. **McClendon, R.T. and Anders, E.O.** (1985) "Directional Drilling Using Catenary Method," SPE 13478, SPE/IADC Drilling Conference, New Orleans, March 6-8

2. **Johancsik, C.A., Friesen, D.B., and Dawson, R.** (1984) "Torque and Drag in Directional Wells—Prediction and Measurement," Journal of Petroleum Technology, June 1984, pp. 987-92

3. **Jogi, P.N., Burgess, T.M., and Bowling, J.P.** (1986) "Three-Dimensional Bottomhole Assembly Model Improves Directional Drilling," SPE 14768, IADC/SPE Drilling Conference, Dallas, February 10-12

---

## Metric Conversion Factors

| Imperial | Metric | Conversion Factor |
|----------|--------|-------------------|
| degrees | radians | 1.745329 E-02 |
| ft | m | 3.048 E-01* |
| lbf | N | 4.448222 E+00 |
| lbf-ft | N·m | 1.355818 E+00 |

*Exact conversion factor

---

## Paper Publication Information

- **Original manuscript received:** October 5, 1986
- **Revised manuscript received:** September 4, 1987
- **Paper accepted for publication:** April 23, 1987
- **Paper number:** SPE 15463
- **First presented:** 1986 SPE Annual Technical Conference and Exhibition, New Orleans, October 5-8
- **Published in:** SPE Drilling Engineering, December 1987, pp. 344-350
- **Authors:**
  - M.C. Sheppard, SPE, Schlumberger Cambridge Research (now Anadrill-Schlumberger)
  - C. Wick, Anadrill-Schlumberger
  - T. Burgess, SPE, Anadrill-Schlumberger

---

## Engineering Design Summary

### Undersection Well Design Strategy

**When conditions allow, undersection (constant-build) trajectories can provide:**

1. **Hook load reduction:** 15-20% typical, up to 55,000 lbf in model well
2. **Torque reduction:** 4,500-6,000 lbf-ft in model well at θᵢ = 30°
3. **Simpler implementation:** Achievable with standard BHA practices

### Critical Trade-offs to Manage

1. **Side force concentration at BHA:** Can increase 30-50%
2. **Torque sensitivity:** Exhibits minimum at intermediate angles
3. **Formation sensitivity:** Requires stable hole conditions
4. **Design complexity:** Requires careful offset well correlation

### Pre-Implementation Checklist

- [ ] Evaluate drag source (friction vs. hole condition)
- [ ] Confirm hole stability in offset wells
- [ ] Model torque response with downhole conditions
- [ ] Verify BHA capacity for increased side forces
- [ ] Plan contingency conventional geometry well
- [ ] Establish friction coefficient K from offset data
- [ ] Model both constant-build and alternative geometries
- [ ] Brief operations team on side-force implications
