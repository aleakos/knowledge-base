---
parent_id: "zhang-2015-design-research-and-finite-element-analy"
chunk_id: "zhang-2015-design-research-and-finite-element-analy/04-laminated-mode-comparison"
section: "Comparative Performance of Three Laminated Modes"
order: 4
tags:
  - "engineering/laminate-design"
  - "engineering/stress-analysis"
  - "engineering/coiled-tubing"
summary: "Performance comparison of three composite laminated modes (Mode A, B, C) under individual and combined loading conditions"
formulas:
  - id: "F16"
    name: "Laminate extensional stiffness"
    expr: "A_ij = Σ_k Q̄_ij^(k) × t_k"
  - id: "F17"
    name: "Laminate bending stiffness"
    expr: "D_ij = Σ_k Q̄_ij^(k) × (h_k³ - h_{k-1}³)/3"
  - id: "F18"
    name: "Laminate coupling stiffness"
    expr: "B_ij = Σ_k Q̄_ij^(k) × (h_k² - h_{k-1}²)/2"
  - id: "F19"
    name: "Maximum allowable hoop strain"
    expr: "ε_θ_allowable = σ_θ_allowable / E_θ"
  - id: "F20"
    name: "Composite tube buckling stress (external pressure)"
    expr: "P_crit = (4E_a / (1-ν²)) × (t/D)³"
---

## Performance Metrics and Comparative Analysis

### Stress Response Under Individual Loads

#### **Pressure Loading Alone (20 MPa)**

**Hoop Stress Distribution:**

| Mode | Max Hoop (MPa) | Location | Margin to Failure |
|------|----------------|----------|------------------|
| A | 72 | Inner surface, 0° ply | 1.28 |
| B | 65 | Inner surface, 0° ply | 1.43 |
| C | 68 | Inner surface, 0° ply | 1.37 |

**Key Observations:**
- Mode B ([0/90/90/0]s) shows lowest hoop stress due to aligned 90° fibers in hoop direction
- Mode A ([45/0/0/-45]s) experiences higher stress due to off-axis fiber orientation requiring stress transfer through matrix
- Mode C ([45/0/-45/90]s) achieves middle ground with mixed orientation benefits

**Radial Stress (Compressive into liner):**
- Inner liner experiences 20 MPa compression (hydrostatic)
- Reduced to ~2-3 MPa at outer boundary due to composite stiffness contribution
- HDPE liner remains elastic (yield at 28 MPa not reached)

#### **Axial Tension Alone (100 kN)**

**Axial Stress Distribution:**

| Mode | Max Axial (MPa) | 0° Fiber Stress | Safety Factor |
|------|-----------------|-----------------|----------------|
| A | 125 | 185 | 0.92 |
| B | 105 | 158 | 1.12 |
| C | 115 | 172 | 1.01 |

**Key Observations:**
- Mode B dominates in axial stiffness due to two 0° plies aligned with loading
- Mode A shows stress concentration due to ±45° plies requiring shear transfer to 0° plies
- Mode C achieves balanced performance with two 0° plies plus distributed shear support

**Strain Distribution:**
- Longitudinal strain: 2.5-3.0 mm over 500 mm gauge length (typical)
- Linear elastic response (no plasticity for 100 kN on this geometry)
- Poisson effect: ~0.5-0.8 mm radial contraction at center

#### **Torsion Alone (1000 N·m)**

**Shear Stress in ±45° Plies:**

| Mode | Max Shear (MPa) | Peak Location | Critical Fiber Angle |
|------|-----------------|---------------|--------------------|
| A | 48 | ±45° plies, mid-thickness | ±45° orientation |
| B | 62 | 0° fiber/matrix interface | Stress concentration |
| C | 44 | ±45° plies, outer region | ±45° orientation |

**Key Observations:**
- Mode C ([45/0/-45/90]s) most efficient for torsion with dedicated ±45° plies
- Mode B weakest for torsion due to lack of off-axis fibers
- Mode A provides good torsional resistance with two ±45° plies

**Angle of Twist:**
- Mode A: φ = 0.035 rad/m (0.2°/m)
- Mode B: φ = 0.052 rad/m (0.30°/m) - 50% higher twist
- Mode C: φ = 0.031 rad/m (0.18°/m) - best torsional stiffness

### Combined Loading Response

#### **Pressure + Tension (20 MPa + 100 kN)**

**Stress Superposition and Interaction:**

| Mode | Max Principal (MPa) | Tsai-Wu Index | Location |
|------|-------------------|---|----------|
| A | 185 | 0.87 | 0° ply, inner |
| B | 160 | 0.79 | 0° ply, inner |
| C | 172 | 0.84 | 0° ply, outer |

**Key Finding:** Stresses superpose approximately linearly for small strain deformations. No significant interaction effects observed.

**Critical Ply:** 0° fibers in all modes, particularly near inner surface where hoop and axial stresses are maximum.

#### **Pressure + Torsion (20 MPa + 1000 N·m)**

**Multi-Component Stress State:**

| Mode | Max Equivalent (MPa) | Failure Index | Controlling Mechanism |
|------|---|---|--|
| A | 155 | 0.92 | Hoop + shear interaction |
| B | 165 | 0.98 | Hoop + fiber/matrix shear |
| C | 148 | 0.88 | Shear-dominated |

**Key Finding:** Mode C ([45/0/-45/90]s) maintains lowest stress despite combined loading due to:
- Distributed load path across all four fiber directions
- Efficient shear resistance in ±45° plies
- Adequate hoop reinforcement in 90° ply

#### **Full Combined Loading (20 MPa + 100 kN + 1000 N·m)**

**3D Stress State at Critical Locations:**

| Mode | σ₁ (MPa) | σ₂ (MPa) | τ₁₂ (MPa) | Tsai-Wu Index | Safety Factor |
|------|----------|----------|-----------|---|---|
| A | 245 | 85 | 48 | 1.15 | 0.87 |
| B | 218 | 72 | 62 | 1.22 | 0.82 |
| C | 225 | 80 | 44 | 0.98 | 1.02 |

**Critical Finding:** 
- **Mode A and B exceed failure threshold** (Tsai-Wu index > 1.0) under full combined loading at nominal thickness
- **Mode C remains safe** with margin to first ply failure
- Design strategy: Increase thickness of Modes A/B by ~15% OR select Mode C for 1.2 mm composite thickness

### Strain Energy and Deformation

**Elastic Strain Energy Stored (Full Combined Loading):**

| Mode | Strain Energy (J) | Deformation Energy (%) |
|------|---|---|
| A | 185 | Axial 45%, Shear 35%, Bending 20% |
| B | 172 | Axial 52%, Shear 28%, Bending 20% |
| C | 178 | Axial 48%, Shear 32%, Bending 20% |

**Total Radial Displacement at Center (Tube OD 25 mm):**
- Mode A: 0.48 mm radial outward
- Mode B: 0.42 mm radial outward
- Mode C: 0.45 mm radial outward

### Recommendations for Coiled Tubing Design

**Mode Selection Criteria:**

| Application | Primary Loading | Recommended Mode | Rationale |
|---|---|---|---|
| High-pressure wells (>15 MPa) | Pressure-dominant | Mode B | Maximum hoop reinforcement |
| Horizontal wells with tension | Tension-dominant | Mode B | Axial fiber alignment |
| Deep wells with complex operations | Combined load | Mode C | Balanced multi-directional |
| Standard drilling | Moderate all loads | Mode A | Good compromise, cost-effective |

**Thickness Optimization:**

For 20 MPa design pressure with factor of safety = 1.1:

- Mode A: Minimum 1.4 mm composite thickness (vs. 1.2 mm nominal)
- Mode B: Minimum 1.5 mm composite thickness (vs. 1.2 mm nominal)
- Mode C: Minimum 1.2 mm composite thickness (adequate as designed)

**Practical Implementation:**
- Mode C preferred for general-purpose service due to balanced properties
- Mode B specified for high-pressure applications with thicker composite section
- Mode A selected when cost optimization critical (fewer plies can be slightly underutilized)
