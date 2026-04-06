---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/04-helical-buckling"
section: "Constrained Euler Helical Buckling"
order: 4
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/buckling"
  - "engineering/helical-buckling"
  - "engineering/torsion"
  - "engineering/oil-drilling"
summary: "Analysis of the second buckling mode — constrained Euler helical buckling — including critical loads, post-buckling pitch-load relationship, normal forces, and torsion effects."
formulas:
  - id: "F6"
    name: "Critical helical buckling load (length-dependent)"
    expr: "Pʰ_cr = 4m²π²EI/L² + L²w/(2m²π²Δr)"
  - id: "F7"
    name: "Critical helical buckling load (length-independent, long cylinder)"
    expr: "Pʰ_cr = 2√2 · (EIw/Δr)^(1/2)"
  - id: "F8"
    name: "Number of full helical wavelengths at minimum buckling load"
    expr: "m = (L/π)(w/(8EIΔr))^(1/4)"
  - id: "F9"
    name: "Post-buckling load–pitch relationship (Lubinski, frictionless)"
    expr: "Pʰ = 8π²EI/p²,  Pʰ > Pʰ_cr"
  - id: "F10"
    name: "Normal force per unit length — helical buckle (Mitchell)"
    expr: "Wₙ = ΔrPʰ²/(4EI) + w cos β"
  - id: "F11"
    name: "Post-buckling helical pitch with compression and torsion"
    expr: "Pʰ = 8π²EI/p² − 3Tπ/p"
  - id: "F12"
    name: "Normal force per unit length — helical buckle with torsion (Qiu)"
    expr: "Wₙ = PhΔr/[128(EI)²] · (3T + √(9T² + 32PʰEI)) · (T + √(9T² + 32PʰEI)) + w cos β"
  - id: "F13"
    name: "Helical buckling load using sinusoidal wavelength substitution (m = n/2)"
    expr: "Pʰ_cr = n²π²EI/L² + 2L²w/(n²π²Δr)"
---

# Constrained Euler Helical Buckling

## 2.2. Constrained Euler Helical Buckling

As the axial load on the inner cylinder increases beyond the sinusoidal buckling load, the buckling mode progresses to an overall **helical buckling mode** (constrained Euler helical buckling). In this mode the inner cylinder forms a helix wrapping around the inner wall of the outer cylinder.

### Critical Buckling Load (Length-Dependent)

Chen et al. (1990) derived the axial buckling initiation load using an energy analysis (neglecting torsion) for buckling from the straight configuration lying at the bottom of the constraining cylinder:

```
Pʰ_cr = 4m²π²EI/L² + L²w/(2m²π²Δr)
```

Where `m` is the number of full helix wavelengths.

### Length-Independent Critical Load (Long Cylinder Limit)

```
Pʰ_cr = 2√2 · (EIw/Δr)^(1/2)
```

This load is **√2 (≈ 41%) higher** than the length-independent constrained Euler sinusoidal buckling load.

> Note: For frictional interactions to raise the sinusoidal buckling load to the helical buckling load, friction would need to effectively double the weight per unit length.

### Optimal Full-Wavelength Count

```
m = (L/π)(w/(8EIΔr))^(1/4)
```

For the nominal steel parameters: **m = 98**.

### Post-Buckling Load–Pitch Relationship (Lubinski)

As the compressive load increases, the inner cylinder forms a helix with smaller pitch:

```
Pʰ = 8π²EI/p²,    Pʰ > Pʰ_cr
```

### Normal Force per Unit Length (Frictionless Helical Buckle)

Mitchell (1986) derived the normal force per unit length at the constraining wall:

```
Wₙ = ΔrPʰ²/(4EI) + w cos β
```

At the critical helical buckling load (Eq. F7):
- The **first term** equals twice the weight per unit length `w` (twice the maximum of the second term)
- The **second term** reflects gravity's effect: cylinder weight adds to normal force at the bottom and subtracts at the top
- As axial load increases, the normal force grows rapidly — this can lead to substantial frictional forces and eventually **lock-up**

### Effect of Torsion on Helical Mode

Torsion enters the governing differential equation in the same small dimensionless parameter `√2·T/√(F·EI)` as for sinusoidal buckling — torsion has a small effect on the critical helical buckling load for nominal drilling parameters.

**However**, torsion determines the **sense (direction) of the helix**.

Deli et al. (1998) showed that for a constrained cylinder subject to gravitational, torsional, and compressive loads, the helically post-buckled solution has a **non-uniform helix angle** (the rate of change of angle in x-direction depends on position). The **helical pitch** is uniform/constant and equals that of a weightless cylinder. The helical pitch with compression and torsion:

```
Pʰ = 8π²EI/p² − 3Tπ/p
```

### Normal Force with Compression and Torsion (Qiu)

```
Wₙ = PhΔr/[128(EI)²] · (3T + √(9T² + 32PʰEI)) · (T + √(9T² + 32PʰEI)) + w cos β
```

This simplifies to the frictionless expression (Eq. F10) when torsional load T = 0.

### Relationship Between Helical and Sinusoidal Wavelengths

Substituting `m = n/2` (smooth transition from sinusoidal to helical) into the length-dependent helical buckling load yields:

```
Pʰ_cr = n²π²EI/L² + 2L²w/(n²π²Δr)
```

The first term equals the first term of the sinusoidal buckling load. The second term is twice as large for the helical mode — this difference in the second term explains the difference in buckling load between the two modes at the same wavelength.

### Experimental Evidence

- **Chen et al. (1990)** present some experimental evidence of the constrained Euler helical mode.
- **Lubinski (1962, 1953)** presents experimental results of this mode.
- **Martinez et al. (2000)** performed experiments to investigate normal and frictional forces on helically buckled cylinders, providing evidence consistent with the normal force expression.
- **Wu and Juvkam-Wold (1993)** experimentally investigated axial load development during the transition from sinusoidal to helical buckling.
- **Pastusek and Van Brackin (2003)** include a photo of helical wear scars on drill pipe as service evidence.
