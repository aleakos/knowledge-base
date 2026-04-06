---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/07-composite-cylinders"
section: "Implications for Composite Cylinders"
order: 7
tags:
  - "engineering/composite-materials"
  - "engineering/drill-pipe"
  - "engineering/structural-analysis"
  - "engineering/buckling"
  - "engineering/lock-up"
  - "engineering/material-comparison"
summary: "Comparison of steel versus composite drill pipe on buckling load and lock-up length metrics, showing composites buckle at lower loads but achieve longer lock-up lengths due to lower effective density."
formulas: []
---

# Implications for Composite Cylinders

## 4. Implications for Composite Cylinders

Study of cylinder-in-cylinder buckling is strongly motivated by an interest in switching from isotropic steel to laminated composite cylinders for drill pipe.

## 4.1. Material Properties

### Effective Axial Modulus

- **Steel:** E = 207 GPa
- **Polymer matrix carbon-fiber composite:** E ≈ 35 GPa (strongly dependent on laminate lay-up)

### Effective Density (Accounting for Drilling Fluid Buoyancy)

Drilling is performed in drilling fluid (density ≈ 1250 kg/m³) both inside and outside the drill pipe. The effective density is:

```
ρ_eff = ρ_material − ρ_drilling_fluid
```

| Material | Material Density | Effective Density |
|----------|-----------------|-------------------|
| Steel | 7900 kg/m³ | 6650 kg/m³ |
| Composite | 1600 kg/m³ | 350 kg/m³ |

Composite cylinders are effectively **1/20th the density** of steel cylinders in drilling conditions.

### Fixed Geometry Constraint

For drilling applications, cylinder geometry is largely fixed:
- Outer radius → determined by desired hole size
- Inner radius → determined by drilling fluid pressure drop and desired pipe burst strength

Therefore only changes in **modulus and density** are considered in this comparison.

## 4.2. Buckling Loads and Lock-Up Length

The key governing parameter for both sinusoidal and helical buckling loads (Eqs. F3 and F7) involves the term:

```
√(Ew)
```

where `w = ρ_eff · A · g` (weight per unit length).

### Buckling Load Comparison

Long composite cylinders initiate constrained Euler sinusoidal and helical buckling at **lower loads** than steel cylinders:

| Factor | Contribution to Reduced Buckling Load |
|--------|--------------------------------------|
| Lower effective density (~20×) | Reduces `w`, which reduces `√(Ew)` |
| Lower axial stiffness (~5–6×) | Reduces `E`, which reduces `√(Ew)` |

**Result:** Composite cylinders buckle at loads **less than 1/10th** of those for steel cylinders.

This lower buckling load is also anticipated for short composite cylinders.

### Lock-Up Length Comparison

The lock-up length scales as:

```
L_lockup ∝ √(EI/(wΔr)) ∝ √(E/w)
```

Taking into account the effective density in drilling fluid:

| Cylinder | Lock-Up Length |
|----------|---------------|
| Steel | ~5700 m |
| Composite | ~10,100 m |

Composite cylinders achieve a **longer lock-up length** despite their lower stiffness, because the dramatically lower effective density more than compensates. This is an advantage for composite drill pipe.

### Friction Caveat

Friction is a first-order contributing factor to lock-up, and frictional force depends on the normal force between cylinders. Due to the increased buoyancy of composites as compared to steel, there may be additional advantage to composite cylinders that further offsets the buckling load reduction. The role of friction in a full comparative analysis is the subject of ongoing research.

### Summary of Composite vs. Steel Performance

| Metric | Steel | Composite | Winner |
|--------|-------|-----------|--------|
| Constrained buckling load | Higher | ~10× lower | Steel |
| Lock-up length | ~5700 m | ~10,100 m | Composite |

When compression, torsion, gravity, and friction are all considered together, the full buckling and post-buckling behavior may change — the complete implications for composite versus steel drill pipe remain an open research question.
