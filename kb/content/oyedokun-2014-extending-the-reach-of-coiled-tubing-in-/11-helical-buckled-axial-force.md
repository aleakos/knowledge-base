---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/11-helical-buckled-axial-force"
section: "Chapter V Section 5.1.2: Axial Force Distribution in Helically Buckled CT"
order: 11
tags:
  - "engineering/coiled-tubing"
  - "engineering/helical-buckling"
  - "engineering/axial-force"
  - "engineering/contact-force"
  - "engineering/lockup"
summary: "Helical buckling axial force distribution model: contact force per unit length, force transmission equation, lockup condition, and yield load limit."
formulas:
  - id: "F5.23"
    name: "Critical helical buckling load — inclined section"
    expr: "Fcr,h = 2√2 * ζh √(EI*wp*sinφ / rc)"
  - id: "F5.24"
    name: "Critical helical buckling load — vertical section"
    expr: "Fcr,h = 5.55*(EI*wp²)^(1/3)"
  - id: "F5.27"
    name: "Contact force per unit length in helical buckling"
    expr: "wh = rc*Ft² / (4EI)"
  - id: "F5.45"
    name: "Axial yield load for CT cross-section"
    expr: "Fy = σy / (1/Ap + rc*do/(4I))"
---

# Chapter V Section 5.1.2: Axial Force Distribution in Helically Buckled CT

## 5.1.2 Helical Buckling Mode

When the compressive axial force in CT exceeds the critical helical buckling load Fcr,h, the CT adopts a helical shape, continuously wrapping around the low side of the wellbore. In horizontal sections, the CT becomes a continuous helix confined within the wellbore diameter.

Helical buckling is far more detrimental to CT reach than sinusoidal buckling because:
1. The contact force per unit length increases as the **square** of the compressive axial force
2. The friction force (and hence axial force loss) increases dramatically with depth
3. Once deeply in helical buckling, additional surface push causes more contact force and more friction — a self-reinforcing effect leading to lockup

## Critical Helical Buckling Loads

For inclined sections with inclination φ:

```
Fcr,h = 2√2 * ζh √(EI*wp*sinφ / rc)
```

For vertical sections (where the sinφ → 0 simplification applies):

```
Fcr,h = 5.55*(EI*wp²)^(1/3)
```

Where:
- `ζh` = helical buckling friction correction factor (ζh ≥ 1; larger than ζs)
- `EI` = bending stiffness
- `wp` = buoyed weight per unit length
- `φ` = wellbore inclination
- `rc` = radial clearance

Note that `Fcr,h = √2 * Fcr,s` approximately (with equal correction factors), confirming helical buckling requires approximately 41% more compressive load than sinusoidal buckling to initiate.

## Contact Force in Helical Buckling

The most important result for helically buckled CT is the contact force per unit length:

```
wh = rc*Ft² / (4EI)
```

Where:
- `wh` = normal contact force per unit length (distributed over the helix)
- `rc` = radial clearance
- `Ft` = compressive axial force (magnitude)
- `EI` = bending stiffness

**Critical observation**: The contact force increases as Ft² — it grows quadratically with compressive load. This means:
- Doubling the compressive force quadruples the contact force
- Quadrupled contact force doubles the friction force (via Coulomb's law)
- This causes the rapid axial force loss characteristic of helical buckling

## Axial Force Transmission in Helical Buckling

The differential equation for axial force along the helically buckled segment accounts for:
- Gravity component along the wellbore axis
- Friction from the buckle-enhanced contact force wh

Integrating from the bottom of the buckled section upward, the closed-form solution gives the axial force at distance s from the base:

```
F(s)t = 4EI / (μs*rc + 4EI/Ft,b)
```

(Repeated from Section 5.1.1 for completeness)

**Important**: As s increases, F(s)t decreases from Ft,b. The rate of decrease is governed by the ratio μs*rc/(4EI). High friction (large μ), small wellbore clearance (small rc), and flexible CT (small EI) all cause faster force loss along the buckled section.

## Yield Load Limit

The maximum allowable compressive load in the CT is limited by the combined axial and bending stress in the buckled configuration. The bending moment due to helical buckling adds to the compressive stress. The yield condition gives:

```
Fy = σy / (1/Ap + rc*do/(4I))
```

Where:
- `Fy` = axial yield load (maximum permissible compressive force before yielding)
- `σy` = yield strength of CT material
- `Ap` = cross-sectional area of CT pipe
- `rc` = radial clearance
- `do` = CT outer diameter
- `I` = second moment of area of CT cross-section

**Physical interpretation**: The rc*do/(4I) term represents the additional stress from bending in the helical buckle. The yield load Fy is always less than the simple axial yield load (σy * Ap), because the bending stress reduces the available capacity for axial load.

If the compressive force in the buckled section reaches Fy, permanent plastic deformation of the CT will occur — an unacceptable operational outcome. The yield load Fy therefore sets an absolute upper bound on the compressive force in the buckled section, independent of the lockup analysis.
