---
parent_id: "zhang-2015-design-research-and-finite-element-analy"
chunk_id: "zhang-2015-design-research-and-finite-element-analy/03-fea-stress-analysis"
section: "Finite Element Analysis and Multi-Load Stress Assessment"
order: 3
tags:
  - "engineering/finite-element"
  - "engineering/stress-analysis"
  - "engineering/combined-loading"
summary: "FEA comparison of three composite laminated modes under combined tension, internal pressure, and torsional loading"
formulas:
  - id: "F11"
    name: "Equivalent strain energy density"
    expr: "u_e = (1/2E)[σ₁² + σ₂² + σ₃² - 2ν(σ₁σ₂ + σ₂σ₃ + σ₃σ₁)]"
  - id: "F12"
    name: "Von Mises stress (3D state)"
    expr: "σ_vm = √[(σ₁-σ₂)² + (σ₂-σ₃)² + (σ₃-σ₁)² + 6(τ₁₂² + τ₂₃² + τ₃₁²)]/√2"
  - id: "F13"
    name: "Tsai-Wu interactive failure criterion for composites"
    expr: "F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + F₁σ₁ + F₂σ₂ + 2F₁₂σ₁σ₂ ≤ 1"
  - id: "F14"
    name: "First principal stress from combined loading"
    expr: "σ₁ = (σₙ + σθ)/2 + √[((σₙ - σθ)/2)² + τ₁₂²]"
  - id: "F15"
    name: "Stress concentration factor for composite analysis"
    expr: "K_t = σ_max / σ_nominal"
---

## Finite Element Model Development

### FEA Software and Methodology

**Analysis Software:** ABAQUS/Standard with implicit integration for geometrically and materially nonlinear analysis

**Model Type:** 3D shell and solid elements with composite material definitions

**Mesh Strategy:**
- Shell elements (S4R - 4-node doubly curved shell with reduced integration) for composite layers
- Solid elements (C3D8R - 8-node brick with reduced integration) for inner liner
- Refined mesh at high-stress regions (pressure ports, boundary conditions)
- Global element size: 1-2 mm
- Local refinement near load application: 0.5 mm
- Typical model: 15,000-25,000 elements

### Material Definition

**Composite Lamina Properties (Glass/Epoxy):**

| Property | Symbol | Value | Units |
|----------|--------|-------|-------|
| Fiber modulus (0° direction) | E₁ | 40 | GPa |
| Transverse modulus | E₂ | 9 | GPa |
| Shear modulus | G₁₂ | 4.5 | GPa |
| Major Poisson ratio | ν₁₂ | 0.27 | - |
| Fiber tensile strength | Xt | 1100 | MPa |
| Fiber compressive strength | Xc | 900 | MPa |
| Transverse tensile strength | Yt | 55 | MPa |
| Transverse compressive strength | Yc | 120 | MPa |
| Shear strength | S | 90 | MPa |

**Composite Laminate Definition:**
- Thickness per ply: 0.15 mm (nominal)
- Ply stacking sequence defined with fiber orientation angles
- Material orientation: referenced to global coordinate system
- Laminate thickness: 1.2 mm (typical 8-ply stack)

**Isotropic Materials:**
- Inner HDPE liner: E = 0.8 GPa, ν = 0.42, σy = 28 MPa
- Outer elastomer: E = 0.02 GPa, ν = 0.49 (nearly incompressible)

### Loading Conditions

**Combined Loading Case (Representative Downhole Operation):**

| Load Type | Value | Application Method |
|-----------|-------|-------------------|
| Internal pressure | 20 | MPa (hydrostatic, uniform) |
| Axial tension | 100 | kN (nodal force at one end) |
| Torque | 1000 | N·m (moment applied at end) |

**Boundary Conditions:**
- Fixed end (one 500 mm section): All DOF constrained
- Free end: Loads applied via distributed moment and point load
- Symmetric boundary conditions: Reduce model size for pressure-only cases

**Load Combinations Analyzed:**
1. Pressure alone (20 MPa)
2. Tension alone (100 kN)
3. Torque alone (1000 N·m)
4. Combined P+T (20 MPa + 1000 N·m)
5. Combined P+F (20 MPa + 100 kN)
6. Full combined P+F+T (20 MPa + 100 kN + 1000 N·m)

### Three Laminated Mode Designs Compared

#### **Mode A: [45/0/0/-45]s (Balanced Axial-Torsion)**

**Ply Sequence (bottom to top):**
- Ply 1: +45° (shear resistance)
- Ply 2: 0° (axial tension)
- Ply 3: 0° (axial tension)
- Ply 4: -45° (shear resistance)
- Ply 5-8: Mirror sequence (symmetric layup)

**Expected Performance:**
- Good axial stiffness and strength
- Adequate torsional resistance
- Moderate pressure capability
- Excellent balance for combined loading

#### **Mode B: [0/90/90/0]s (Axial-Dominant)**

**Ply Sequence:**
- Ply 1-2: 0° fibers (axial direction)
- Ply 3-4: 90° fibers (hoop/pressure direction)
- Ply 5-8: Mirror sequence

**Expected Performance:**
- Maximum axial strength
- Superior pressure resistance
- Limited torsional capacity
- Good for high-pressure applications

#### **Mode C: [45/0/-45/90]s (Isotropic-Like)**

**Ply Sequence:**
- Ply 1: +45° (shear)
- Ply 2: 0° (axial)
- Ply 3: -45° (shear)
- Ply 4: 90° (hoop)
- Ply 5-8: Mirror sequence

**Expected Performance:**
- Most isotropic-like behavior
- Balanced multi-directional strength
- Highest shear resistance
- Even load distribution across fiber directions

### Stress Analysis Results

**Typical FEA Predictions (Mode A under Combined P+F+T):**

| Stress Component | Location | Value | Criterion |
|-----------------|----------|-------|-----------|
| Hoop stress (σθ) | Inner surface, 0° | 85 | MPa |
| Axial stress (σz) | Outer surface, 0° | 110 | MPa |
| Shear stress (τθz) | Mid-thickness, ±45° | 42 | MPa |
| Maximum principal | Composite layer | 145 | MPa |
| Von Mises equivalent | Critical zone | 165 | MPa |

**Failure Index Analysis (Tsai-Wu Criterion):**

For each ply at each material point:
```
Tsai-Wu Index = F₁₁σ₁² + F₂₂σ₂² + F₆₆τ₁₂² + F₁σ₁ + F₂σ₂ + 2F₁₂σ₁σ₂
```

- Index < 1.0: Safe, no ply failure predicted
- Index ≈ 1.0: First ply failure initiates
- Index > 1.0: Ply failure zone

**Mode Comparison Summary:**
- Mode A: First ply failure at ~18 MPa pressure (design margin 1.1×)
- Mode B: First ply failure at ~22 MPa pressure (design margin 1.1×)
- Mode C: First ply failure at ~21 MPa pressure (design margin 1.05×)

### Stress Distribution Features

**Circumferential Variation:**
- Non-uniform due to gravity-induced bending during coiling simulation
- Peak stresses at bottom of coil (compression)
- Reduced stresses at top (tension relief)

**Axial Variation (Along Tubing Length):**
- Stress concentration near fixed boundary (≈1.3× average)
- Uniform stress in mid-section
- Boundary layer decay over 5-10 tubing diameters

**Through-Thickness Stress Profile:**
- Hoop stress: Highest at inner liner (pressure bearing)
- Axial stress: Highest in 0° plies
- Shear stress: Peak in ±45° plies
