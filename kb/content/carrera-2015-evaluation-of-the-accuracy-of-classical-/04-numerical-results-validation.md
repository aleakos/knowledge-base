---
parent_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-"
chunk_id: "carrera-2015-evaluation-of-the-accuracy-of-classical-/04-numerical-results-validation"
section: "Numerical Results and Accuracy Assessment"
order: 4
tags:
  - "engineering/numerical-examples"
  - "engineering/stress-analysis"
  - "engineering/torsion"
summary: "Comparative analysis of classical and refined beam models on square, circular, I-section, and C-section geometries"
formulas:
  - id: "F15"
    name: "Torsion rotation angle"
    expr: "θ = TL/(GJt)"
  - id: "F16"
    name: "Torsional moment of inertia - square section"
    expr: "Jt ≈ 0.1406 b⁴ (approximate for square)"
  - id: "F17"
    name: "Maximum shear stress - square section torsion"
    expr: "σyz,max = T/(0.208 b³)"
  - id: "F18"
    name: "Torsional moment of inertia - circular section"
    expr: "Jt = πR⁴/2 (exact for solid circular)"
  - id: "F19"
    name: "Maximum shear stress - circular section torsion"
    expr: "σyz,max = TR/Jt"
  - id: "F20"
    name: "Bending displacement - Euler-Bernoulli"
    expr: "uz^b = FzL³/(3EI)"
  - id: "F21"
    name: "Shear displacement contribution"
    expr: "uz^s = FzL/(AG)"
---

## Numerical Validation and Case Studies

The paper validates the CUF-based MITC2 element through comprehensive numerical studies, assessing classical model limitations and demonstrating when refined kinematics are necessary.

### Square Cross-Section Beam (L/b = 10)

**Material:** Aluminum alloy (E = 75 GPa, ν = 0.33), b = 0.2 m

#### Case 1: Bending with Convergence Analysis

A cantilever with point load Fz = 100 N shows convergence behavior of different theories:
- EBBM, TBM, and 6-DOF models converge rapidly with ~20 elements
- Higher-order models (N=3, N=5, N=7) require ~100 elements for convergence
- MITC2 element eliminates shear locking across all orders

#### Case 2: Pure Torsion

Applied torque: T at free end

**Analytical solution:**
```
θ = TL/(GJt),  Jt ≈ 0.1406 b⁴
uz ≈ θ(b/2)  (displacement at edge)
σyz,max = T/(0.208 b³)
```

**Results:**
| Model | uz (mm) | σyz (MPa) | Observations |
|-------|---------|-----------|--------------|
| Anlt. Sol. | 0.315 | 6.009 | Benchmark |
| EBBM | 0 | 0 | Cannot capture torsion |
| TBM | 0 | 0 | Cannot capture torsion |
| 6-DOF | 0.266 | 3.750 | Underestimates stress |
| N=3 | 0.285 | 3.750 | Same as 6-DOF |
| N=4 | 0.332 | 6.168 | **Matches analytical** |
| N=5 | 0.345 | 6.168 | Converged |

**Key Finding:** Fourth-order (N=4) theory is **mandatory** to capture warping phenomena in square sections under torsion. Classical 6-DOF and lower orders significantly underestimate shear stresses.

#### Case 3: Bending-Torsional Coupling

Single off-center point load: Fz = 50 N at point A (not on centroid)

**Analytical references:**
```
Pure bending:   uz^b = FzL³/(3EI)
With shear:     uz^s = FzL/(AG)
Torsion:        θ = TL/(GJt)
```

**Maximum shear stress from torsion:**
```
σyz,max = T/(0.208 b³)
```

**Results show:**
- Classical EBBM and TBM are inapplicable (no torsion capability)
- 6-DOF provides acceptable displacement results but poor stress predictions
- N≥3 required for accurate stress distributions
- Coupling effects between bending and torsion not captured below N=4

### Circular Cross-Section Beam (R = 0.1 m, L/R = 10)

**Material:** Same aluminum alloy

For circular sections, Saint-Venant's hypothesis is nearly exact (no warping):
- Torsional moment of inertia: Jt = πR⁴/2 (exact)
- Maximum shear stress: σyz,max = TR/Jt

**Results:**

| Model | uz (mm) | σyz (MPa) |
|-------|---------|-----------|
| Anlt. Sol. | 0.452 | 6.366 |
| 6-DOF | 0.452 | 6.366 | **Exact match** |
| N=3 | 0.487 | 6.366 | Close |
| N=5 | 0.508 | 6.366 | Converged |

**Key Finding:** The **6-DOF model is sufficient** for solid circular sections because warping phenomena are negligible. No constraint warping occurs for circular geometry.

### I-Section Beam (h=100mm, w=96mm, L/h=10)

Thin-walled double-symmetric geometry with loads applied off-centroid

**Comparison Reference:** Nastran 2D/3D models, multi-line models

**Key results (Table 5):**

| Model | uz @ A (mm) | uz @ B (mm) | DOF |
|-------|-------------|-------------|-----|
| Nastran 3D | 0.956 | 2.316 | 355,800 |
| 6-DOF | 0.964 | 0.977 | 126 |
| N=10 | 1.000 | 1.687 | 19,998 |
| N=14 | 1.001 | 2.418 | 36,360 |

**Observations:**
- 6-DOF fails to capture asymmetric loading effects (uz @ A ≈ uz @ B, clearly wrong)
- Very high-order models (N=12-14) required to match 3D solutions
- Higher-order effects capture 3D strain distribution and local deformations
- Stress recovery from classical models produces significant errors

### C-Section Beam (h=100mm, w=50mm, t=8mm)

Single-symmetric thin-walled section with differential bending loads (simulating torsion application)

Forces: ±Fz = 200 N at horizontal flanges

**Critical findings:**

1. **Shear center location** depends on stress distribution:
   - Classical models: Shear center at section centroid (incorrect)
   - 6-DOF: Shear center inside C-section
   - Higher-order (N≥3): Shear center outside section (matches Saint-Venant theory at N=6)

2. **Warping displacement:**
   - 6-DOF: Insufficient to detect warping
   - N=14: Fully captures 3D out-of-plane displacement effects

3. **Hoop displacements (√(u²x + u²z)):**
   - Quantitatively negligible in 6-DOF (~0.001 mm)
   - Becomes significant in higher orders (~0.3 mm at N=14)

## Summary of Guidelines

Based on comprehensive numerical evidence:

| Geometry | Loading | Recommended Model | Reason |
|----------|---------|-------------------|--------|
| Circular, compact | Any | 6-DOF | No warping |
| Square/rectangular | Bending | EBBM/TBM | Adequate |
| Square/rectangular | Torsion/bending-torsion | N≥4 | Warping effects |
| Thin-walled | Bending only, centered | 6-DOF | Good displacement accuracy |
| Thin-walled | Off-center loading | N≥10 | 3D strain effects |
| Thin-walled | Torsion/warping | N≥12 | Full warping capture |
| I-sections, doubly-symmetric | General | N≥8 | Local deformations |
| C-sections, asymmetric | General | N≥12 | Warping and coupling |

## Practical Implications

1. **Displacement vs. Stress:** Classical models may give acceptable displacements but poor stresses
2. **Section-dependent:** Warping-free sections (circular) tolerate 6-DOF; others need refinement
3. **No universal correction:** Shear/warping factors cannot account for missing physics
4. **Hierarchical approach essential:** Only refined kinematics can capture higher-order phenomena
