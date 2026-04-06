---
parent_id: "zhang-2015-design-research-and-finite-element-analy"
chunk_id: "zhang-2015-design-research-and-finite-element-analy/02-composite-coiled-tubing-design"
section: "Three-Layer Composite Coiled Tubing Design"
order: 2
tags:
  - "engineering/coiled-tubing"
  - "engineering/structural-design"
  - "engineering/pressure-vessels"
summary: "Multi-layer composite coiled tubing architecture combining inner liner, structural reinforcement layer, and external protection"
formulas:
  - id: "F6"
    name: "Radial stress in pressurized cylinder"
    expr: "σᵣ = -P(b² + r²)/(b² - a²)"
  - id: "F7"
    name: "Hoop stress in pressurized cylinder"
    expr: "σθ = P(b² + r²)/(b² - a²)"
  - id: "F8"
    name: "Axial stress due to internal pressure"
    expr: "σz = Pa²/(b² - a²)"
  - id: "F9"
    name: "Effective stress for von Mises criterion"
    expr: "σₑff = √[(σθ - σᵣ)² + (σᵣ - σz)² + (σz - σθ)²]/√2"
  - id: "F10"
    name: "Critical coiling diameter constraint"
    expr: "D_coil ≥ 50 × t_composite (minimum bending radius for composite)"
---

## Composite Coiled Tubing Architecture

### Design Objectives

Composite coiled tubing (CCT) combines performance advantages of both fiber reinforcement and thermoplastic or elastomer protective layers:

**Primary Functions:**
1. Sustain internal pressures up to 20-50 MPa
2. Withstand axial tension loads (100+ kN)
3. Transmit torque for drilling/logging operations (1000+ N·m)
4. Survive cyclic bending from coiling to diameter ≥ 1.5 m
5. Provide corrosion and abrasion resistance in harsh downhole environments

### Three-Layer Composite Tubing Configuration

#### **Layer 1: Inner Liner**

**Material:** High-density polyethylene (HDPE) or polyurethane
**Thickness:** 1.5-2.5 mm
**Functions:**
- Pressure containment barrier (primary sealing surface)
- Chemical resistance to downhole fluids
- Anti-extrusion protection
- Internal surface integrity

**Properties:**
- Tensile strength: 25-35 MPa (unfilled HDPE)
- Young's modulus: 0.5-1.0 GPa
- Elongation at break: 300-500%
- Coefficient of friction: 0.3-0.5 (low for cable passage)

**Design Consideration:** Must deform plastically without cracking to prevent sudden burst; acts as "safety margin" through controlled yielding.

#### **Layer 2: Structural Composite Layer**

**Material:** Glass fiber reinforced epoxy
**Thickness:** 4-8 mm (multiple plies)
**Functions:**
- Primary load-bearing member
- Sustains pressure, tension, and torque
- Prevents inner liner extrusion
- Provides tubing stiffness

**Layup Design:** Tri-directional reinforcement with three laminated modes examined:

| Mode | Configuration | Application |
|------|---------------|-------------|
| Mode A | [45/0/0/-45]s | Balanced axial and torsional strength |
| Mode B | [0/90/90/0]s | Higher axial strength, moderate torsion |
| Mode C | [45/0/-45/90]s | Maximum shear resistance, isotropic behavior |

**Fiber Architecture:**
- 0° fibers: Axial direction (tension/compression under pressure)
- ±45° fibers: Diagonal reinforcement (torque transmission)
- 90° fibers: Hoop direction (pressure containment)

**Wall Thickness Optimization:**

For combined loading (internal pressure P, axial tension F, torque T):

```
Minimum composite thickness:
t_min = max{t_pressure, t_tension, t_torque}

Pressure-driven thickness:
t_p = a × P/(σθ_allowable)

Tension-driven thickness:
t_t = F/(2πa × σz_allowable)

Torque-driven thickness:
t_T = T/(2πa² × τ_allowable)
```

#### **Layer 3: External Protection Layer**

**Material:** Polyurethane or elastomer wrap
**Thickness:** 0.5-1.5 mm
**Functions:**
- External abrasion and impact protection
- Adhesive interface between composite and borehole
- Environmental weathering protection
- Handling damage prevention during deployment

**Properties:**
- Tensile strength: 15-25 MPa
- Elongation at break: 100-300%
- Durometer (Shore A): 80-95
- Resistance to hydraulic fluids and solvents

### Overall Tubing Dimensions

**Nominal Specifications (Example):**
- Outer diameter: 25 mm
- Inner diameter: 18 mm
- Wall thickness (total): 3.5 mm
  - Inner liner: 2.0 mm
  - Composite: 1.2 mm
  - Outer protection: 0.3 mm

**Mechanical Properties (Assembled Composite Tube):**

| Property | Value | Units |
|----------|-------|-------|
| Internal pressure rating | 20 | MPa |
| Axial tension capacity | 100 | kN |
| Torsional capacity | 1000 | N·m |
| Bending stiffness (EI) | 150-250 | N·m² |
| Collapse pressure (external) | 5-8 | MPa |

### Manufacturing Process

**Filament winding with composite layup:**
1. Wind inner liner onto mandrel (thermoplastic extrusion or tape)
2. Apply structural composite plies at specified angles via filament winding
3. Cure resin system (vacuum-assisted)
4. Apply external protection layer (spray or tape)
5. Remove mandrel; coil to storage diameter ≥ 1.5 m

**Quality Control:**
- Nondestructive thickness verification (ultrasonic)
- Hydrostatic burst testing at 1.5× design pressure
- Visual inspection for voids, wrinkles, delamination
