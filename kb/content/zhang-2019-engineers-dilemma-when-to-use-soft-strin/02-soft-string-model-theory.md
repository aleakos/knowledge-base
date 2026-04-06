---
parent_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin"
chunk_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin/02-soft-string-model-theory"
section: "Soft String Model: Theory and Application"
order: 2
tags:
  - "engineering/torque-drag-models"
  - "engineering/friction"
  - "engineering/well-operations"
summary: "Soft string model theory assuming flexible pipe without buckling, applicable to vertical and moderately deviated wells"
formulas:
  - id: "F7"
    name: "Normal force - soft string model"
    expr: "N = W × sin(θ)"
  - id: "F8"
    name: "Friction force element"
    expr: "dF_f = μ × N × dl = μ × W × sin(θ) × dl"
  - id: "F9"
    name: "Total drag force (soft string)"
    expr: "F_drag = ∫₀ᴸ μ × W × sin(θ) × dl"
  - id: "F10"
    name: "Weight per unit length"
    expr: "w = W / L"
  - id: "F11"
    name: "Torque from friction"
    expr: "T = ∫ μ × N × r_pipe dl"
  - id: "F12"
    name: "Equivalent friction coefficient"
    expr: "μ_eq = F_drag / (W × sin(θ_avg))"
---

## Soft String Model Development

### Model Assumptions and Applicability

**Fundamental Assumptions:**

1. **Pipe is flexible and non-buckling:**
   - Pipe conforms passively to wellbore geometry
   - No bending stiffness resistance
   - Pipe follows lowest-energy configuration

2. **Normal force from gravity only:**
   - N = W × sin(θ) at any point
   - No additional normal force from buckling deflection
   - Independent of pipe stiffness (EI) and diameter

3. **Friction is Coulomb friction:**
   - F_f = μ × N (proportional to normal force)
   - Coefficient μ constant along wellbore
   - Direction of friction opposes pipe motion

4. **Quasi-static loading:**
   - No inertial effects
   - Pipe in equilibrium at each increment of motion
   - Valid for slow pipe movement (tripping speeds ≤ 2 m/s)

5. **Applicable range:**
   - Vertical wells: θ ≈ 0° (shallow sections)
   - Under-deviated wells: θ ≤ 45°
   - Sections with good hole cleaning (no stuck pipe risk)

**When NOT to use soft string model:**
- Horizontal or near-horizontal wells (θ > 75°)
- Extended reach wells (measured depth > 5× vertical depth)
- High-angle build sections (dθ/dMD > 2°/100m)
- Suspended/stuck pipe scenarios

### Mathematical Formulation

#### **Force Balance in Inclined Section**

For a differential element of pipe at depth s with inclination angle θ(s):

**Axial force balance along pipe:**
```
dT/ds + w×cos(θ) + μ×w×sin(θ)×sin(θ) = 0

where:
T = axial tension at depth s
w = weight per unit length (N/m)
μ = friction coefficient
θ = wellbore inclination angle
```

**Normal force:**
```
N = w × sin(θ)  (pipe gravity component perpendicular to wellbore)
```

**Friction force:**
```
f = μ × N = μ × w × sin(θ)  (resistance along wellbore)
```

#### **Solution for Uniform Friction Coefficient**

For constant μ and vertical sections (θ = 0):

```
Drag force = 0  (no normal force, no friction)
```

For constant μ and inclined sections (0 < θ < 90°):

```
F_drag = ∫₀ᴸ μ × W × sin(θ(s))/L × ds
       = μ × W × (1/L) × ∫₀ᴸ sin(θ(s)) ds
       = μ × W × sin(θ_avg)
```

**For linear build section** (θ = 0 at start, θ = θ_target at depth L_build):

```
θ(s) = (θ_target / L_build) × s

F_drag = μ × W × (θ_target / π) × sin(π/2)
       = μ × W × θ_target / π  (radians)
```

**For hold sections** (constant inclination θ = θ_hold):

```
F_drag = μ × W × sin(θ_hold) × (L_hold / L_total)
```

### Computation Algorithm

**Step-by-step soft string calculation:**

1. **Segment wellbore** into small incremental sections (Δs = 10-100 m)

2. **For each segment i:**
   - Get inclination angle θᵢ
   - Calculate weight component: Wᵢ = w × Δs
   - Calculate normal force: Nᵢ = Wᵢ × sin(θᵢ)
   - Calculate friction force: fᵢ = μ × Nᵢ
   - Add to cumulative drag: F_drag = Σ fᵢ

3. **Total drag:**
   ```
   F_drag_total = Σᵢ₌₁ⁿ [μ × Wᵢ × sin(θᵢ)]
   ```

4. **Torque calculation** (for rotation):
   - Friction torque: T_f = F_drag_total × r_pipe
   - Total torque = T_f + T_connection + T_bit
   - r_pipe = pipe outer radius ≈ 0.035-0.060 m

### Application Examples

#### **Example 1: Vertical Well Section**

**Well profile:**
- Depth: 0-2000 m (vertical)
- Pipe size: 4.5" (114 mm OD)
- Weight: 60 kN total
- Friction coefficient: μ = 0.25

**Soft string prediction:**
```
θ = 0° → sin(θ) = 0
F_drag = 0  (no normal force, no friction)
```

**Reality check:** Vertical wells show minimal drag, confirming model

#### **Example 2: Deviated Well (45° Dogleg)**

**Well profile:**
- Vertical: 0-1000 m (θ = 0)
- Build: 1000-1500 m (θ goes from 0 to 45°)
- Hold: 1500-3000 m (θ = 45°)
- Pipe size: 4.5"
- Total weight: 80 kN
- Friction coefficient: μ = 0.28

**Soft string calculation:**

Vertical section (0-1000 m):
```
F_drag,vertical = 0  (θ = 0)
```

Build section (1000-1500 m):
```
θ_avg = 22.5°
F_drag,build = 0.28 × 80 × sin(22.5°) × (500/3000)
             = 0.28 × 80 × 0.383 × 0.167
             = 1.44 kN
```

Hold section (1500-3000 m):
```
F_drag,hold = 0.28 × 80 × sin(45°) × (1500/3000)
            = 0.28 × 80 × 0.707 × 0.5
            = 7.90 kN
```

**Total drag: 1.44 + 7.90 = 9.34 kN**

#### **Example 3: Horizontal Well (Extended Reach)**

**Well profile:**
- Vertical: 0-1500 m
- Build: 1500-2500 m (θ: 0° → 90°)
- Horizontal: 2500-7500 m (θ = 90°)
- Pipe size: 4.5"
- Total weight: 100 kN
- Friction coefficient: μ = 0.30

**Soft string calculation:**

Build section:
```
F_drag,build ≈ 0.30 × 100 × (sin avg over build)
             ≈ 0.30 × 100 × 0.64 × (1000/7500)
             ≈ 2.56 kN
```

Horizontal section (5000 m):
```
F_drag,horizontal = 0.30 × 100 × sin(90°) × (5000/7500)
                  = 0.30 × 100 × 1.0 × 0.667
                  = 20.0 kN
```

**Total drag: 2.56 + 20.0 = 22.56 kN**

### Limitations and Accuracy Issues

**Known shortcomings of soft string model for horizontal sections:**

1. **Underpredicts drag by 10-30%** compared to actual measurements
2. **Assumes constant friction coefficient** (ignores pressure differential effects)
3. **Neglects buckling effects** (real pipes deflect and create additional friction)
4. **No account for pipe curvature** stiffness
5. **Assumes straight-line load path** (ignores sinuous wellbore variations)

**Error sources:**

| Error Source | Magnitude | Impact |
|---|---|---|
| Buckling not included | 10-25% | Significant in horizontal |
| Pipe diameter variation | 2-5% | Tool joints stiffer |
| Temperature effects on μ | 5-10% | Depth-dependent |
| Wellbore washout | 3-8% | Enlarged sections |
| Mud rheology changes | 5-15% | With temperature/circulation |
