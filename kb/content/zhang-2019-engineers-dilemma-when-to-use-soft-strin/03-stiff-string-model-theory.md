---
parent_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin"
chunk_id: "zhang-2019-engineers-dilemma-when-to-use-soft-strin/03-stiff-string-model-theory"
section: "Stiff String Model: Theory and Buckling Analysis"
order: 3
tags:
  - "engineering/torque-drag-models"
  - "engineering/buckling"
  - "engineering/pipe-deformation"
summary: "Stiff string model incorporating pipe bending stiffness, buckling deformation, and increased normal forces from pipe-wall contact"
formulas:
  - id: "F13"
    name: "Pipe bending stiffness"
    expr: "EI = E × I, where I = π(D⁴ - d⁴)/64"
  - id: "F14"
    name: "Critical buckling load"
    expr: "P_crit = π²EI / (L_buckle)²"
  - id: "F15"
    name: "Sinusoidal buckling wavelength"
    expr: "λ = π × √(EI / W)"
  - id: "F16"
    name: "Post-buckling normal force increase"
    expr: "N_buckle = √(P² - P_crit²) / r_pipe"
  - id: "F17"
    name: "Total normal force (stiff string)"
    expr: "N = W×sin(θ) + N_buckle"
  - id: "F18"
    name: "Helical buckling contact pressure"
    expr: "P_contact = N_buckle / (contact_arc_length)"
---

## Stiff String Model Development

### Pipe Bending Stiffness and Buckling

**Why Pipe Stiffness Matters:**

Real pipe strings have finite bending stiffness (EI). When subjected to compression from axial loading, the pipe resists bending and exhibits buckling behavior different from a perfectly flexible cable.

**Moment of Inertia for Pipe:**

```
I = π/64 × (D_outer⁴ - D_inner⁴)
```

**Typical Values for Drill Pipe:**

| Pipe Size | OD (mm) | ID (mm) | I (m⁴) | EI (N·m²) |
|---|---|---|---|---|
| 2-3/8" | 60.3 | 42.2 | 8.1×10⁻⁶ | 1.08×10⁶ |
| 3-1/2" | 88.9 | 76.2 | 2.85×10⁻⁵ | 3.8×10⁶ |
| 4-1/2" | 114.3 | 99.0 | 5.58×10⁻⁵ | 7.45×10⁶ |
| 5-1/2" | 139.7 | 122.2 | 9.6×10⁻⁵ | 12.8×10⁶ |

**Young's Modulus for Pipe Steel:** E ≈ 207 GPa (typical)

### Buckling Theory

#### **Elastica Theory (Euler Buckling)**

For a straight pipe under axial compression with constant bending stiffness:

**Critical buckling load** (hinged-hinged ends):
```
P_crit = π²EI / L²
```

**For long sections (L = 1000 m, EI = 7.45×10⁶ N·m²):**
```
P_crit = π² × 7.45×10⁶ / (1000)²
       = 73 kN  (relatively low - buckling easily initiated)
```

**Post-buckling deflection:**
```
δ_max = L/π × √(P/P_crit - 1)
```

#### **Sinusoidal Buckling (Low Compression)**

When axial load exceeds critical value but is still moderate:

**Wavelength of buckling pattern:**
```
λ = π × √(EI / w)

where w = weight per unit length
```

**Example:**
```
For 4.5" pipe: w = 60 kN / 3000 m = 0.02 kN/m
λ = π × √(7.45×10⁶ / 0.02)
  = π × √(3.725×10⁸)
  = π × 19,300
  ≈ 60,600 m  (very long wavelength in vertical section)
```

In deviated wells, shorter wavelengths form due to interaction with wellbore curvature.

#### **Helical Buckling (Higher Compression)**

As compression increases beyond sinusoidal regime:

**Pipe forms helical path** along wellbore wall
```
Contact with wall → increased normal force
```

**Helical properties:**
- Helix radius: typically 0.5-5 mm (small)
- Helix pitch: 0.5-2 m (distance per revolution)
- Contact arc (per revolution): increases from ~1 mm to 100+ mm

**Helical buckling transition:**

Occurs when local strain energy from helical deformation < energy from further compression:

```
Transition pressure ≈ 1.5 × P_crit to 3 × P_crit
```

### Normal Force Contribution from Buckling

#### **Relationship Between Axial Load and Contact Normal Force**

In post-buckling regime, increased normal force arises from pipe-wall contact:

**Force balance on buckled pipe segment:**

```
Axial load: P = P_gravity + P_buckling
where:
P_gravity = W × sin(θ)  (gravity component)
P_buckling = excess load causing buckling
```

**Normal force from buckling:**
```
N_buckle = f(P_buckling, EI, wellbore_clearance, pipe_geometry)
```

**Approximation for helical buckling:**
```
N_buckle ≈ √(P² - P_crit²) / contact_area_factor
```

**More practical form:**
```
N_contact = a × (P - P_trigger)^b

where:
a, b = empirical coefficients (0.5 < b < 2.0)
P_trigger = threshold load (≈ critical buckling load)
```

#### **Normal Force Magnitude Comparison**

**Example: 4.5" pipe in 50° deviated well, 100 kN total load**

Vertical component: W × sin(50°) = 100 × 0.766 = 76.6 kN

**Soft string model:**
```
N = W × sin(θ) = 76.6 kN only
```

**Stiff string model with buckling:**
```
N = W × sin(θ) + N_buckle
  = 76.6 + 15-30 kN (from buckling contact)
  = 91.6-106.6 kN (20-40% higher)
```

### Stiff String Computational Algorithm

**Step 1: Segment the wellbore**
- Divide into small sections (Δs = 5-50 m)
- Each segment has inclination angle θᵢ and curvature

**Step 2: Determine axial load at each segment**
```
P_axialiᵢ = gravity_component + friction_from_below
```

**Step 3: Check for buckling initiation**
```
L_buckle_effective = 2-3 × segment_length (wave interaction length)
P_crit = π²EI / L_buckle_effective²

If P_axial > P_crit:
    buckling_initiated = true
    enter_post_buckling_regime()
```

**Step 4: Calculate normal force**
```
N_gravity = W × sin(θ)

if buckling_initiated:
    N_buckle = f(P_axial - P_crit, EI, wellbore_clearance)
    N_total = N_gravity + N_buckle
else:
    N_total = N_gravity
```

**Step 5: Calculate friction force**
```
f = μ × N_total
```

**Step 6: Iterate to convergence**
- Update axial load for next segment
- Recalculate buckling status
- Continue until wellbore bottom

### Key Differences from Soft String

**Drag Comparison - Horizontal Well (5 km horizontal section)**

| Load Factor | Soft String | Stiff String (No Buckling) | Stiff String (With Buckling) |
|---|---|---|---|
| μ = 0.20 | 10 kN | 10 kN | 18-22 kN |
| μ = 0.30 | 15 kN | 15 kN | 28-35 kN |
| μ = 0.40 | 20 kN | 20 kN | 38-48 kN |

**Buckling adds 50-150% additional friction** in extended reach wells.

### Governing Equations for Stiff String

**Differential equations for curved pipe with buckling:**

```
d²y/dx² + (P - W·sin(θ)) / (EI) × y = 0  (transverse equilibrium)
```

Where:
- y = transverse deflection
- P = axial load
- W = weight per unit length
- θ = inclination
- EI = bending stiffness

**Solution approach:**
- Solve numerically using finite differences or finite elements
- Match boundary conditions at wellbore wall (contact constraint)
- Iterate until normal force and friction converge

### Applicability and Accuracy

**Best suited for:**
- Extended reach wells (measured depth > 5× vertical depth)
- High-angle deviated wells (θ > 60°)
- Horizontal wells with significant length (> 2 km)
- Tight clearance wells (small wellbore diameter)

**Model validation:**
- Field measurements show stiff string predictions typically within ±10-20% of actual torque/drag
- Soft string commonly overpredicts by 20-50% in horizontal sections
- Agreement improves with accurate friction coefficient estimates
