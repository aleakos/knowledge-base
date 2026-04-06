---
parent_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a"
chunk_id: "lopez-machado-2022-an-8nodes-3d-hexahedral-finite-element-a/04-results-validation"
section: "Results, Validation, and Conclusions"
order: 4
tags:
  - "engineering/finite-element-method"
  - "engineering/beam-theory"
  - "engineering/structural-mechanics"
summary: "Validation of Hexa 8 FE and 1D Timoshenko beam element against ANSYS, with error tables for multiple boundary conditions and loading cases, and discussion of accuracy limitations."
formulas: []
---

# Results, Validation, and Conclusions

## Cross-Section Properties

All validation tests use a 20 cm × 40 cm rectangular concrete beam cross-section:
- Concrete: $f_c = 24.52$ MPa, $E = 23{,}414$ MPa
- Minimum steel reinforcement: 6 bars Ø14 mm transformed to equivalent rectangular bars 12.5 mm × 12.5 mm
- Steel: $f_y = 411.9$ MPa, $E = 205{,}940$ MPa

Mesh is constructed with Python; medium mesh used for validation (confirmed by mesh sensitivity study in Appendix A).

## Hexa 8 Validation (vs. ANSYS)

Visualisation: Paraview (Python); commercial reference: ANSYS educational version.

### Error Table 1: Single-span beams

| Dirichlet Condition | Neumann Condition | Hexa 8 disp. (mm) | ANSYS disp. (mm) | Error (%) |
|---|---|---|---|---|
| One side fixed | Self weight | −9.87×10⁻⁶ | −9.79×10⁻⁶ | 0.79 |
| One side fixed | Pz = −1000 N | −1.26×10⁻⁴ | −1.27×10⁻⁴ | 0.96 |
| One side fixed | Px = −1000 N | −4.97×10⁻⁷ | −4.98×10⁻⁷ | 0.11 |
| Both sides fixed | Self weight | −4.21×10⁻⁶ | −4.26×10⁻⁶ | 1.21 |

Maximum error: **3.21%** — results are reliable.

## 1D Timoshenko Beam Validation (vs. Hexa 8)

Error is computed relative to the Hexa 8 FE, not ANSYS.

### Case Set 1: One Side Fixed Beam (L = 1 m)

| Case | Axis | Error (%) |
|---|---|---|
| 1 (self weight) | Z | 2.494 |
| 2 (Fy = 1000 N) | Z | 7.531 |
| 3 (torsion 2800 N·m) | Y | 9.348 |
| 3 (torsion 2800 N·m) | Z | 10.214 |

### Case Set 2: Double Pinned Beam (L = 2 m)

| Case | Axis | Error (%) |
|---|---|---|
| 1 (self weight) | Z | 8.129 |
| 2 (pure flex, Fz at L/3 and 2L/3) | Z | 0.024 |
| 3 (torsion at L/3) | Y | 0.204 |
| 3 (torsion at L/3) | Z | 6.912 |

### Case Set 3: Cantilever (pinned at 0 and 2 m, free end at 3 m)

| Case | Axis | Error (%) |
|---|---|---|
| 1 (self weight) | Z | 10.872 |
| 2 (Fz at L=3 m) | Z | 0.800 |
| 3 (Fz at L=3 m) | Z | 0.567 |
| 4 (torsion at L=3 m) | Y | 1.511 |
| 5 (torsion at L=1 m) | Y | 17.531 |
| 6 (compression at L=3 m) | X | 19.004 |

## Discussion

### Hexa 8 FE Performance
- Consistently below 4% error vs. ANSYS
- Correctly represents independent rotation DOF
- Avoids the standard issue where rotations are derived purely from translations
- Same 48 equations per element as a 16-node standard hexahedron, but polynomial order 3 vs. 2
- Computational cost (Python/Cython implementation) is high — an identified limitation

### Timoshenko Beam Limitations
1. **Torsional cases**: Errors of 10–20%; support conditions differ — Timoshenko applies supports at a single axis point (line DOF), while Hexa 8 applies supports over a surface, leading to different constraint conditions
2. **Deformed cross-section**: The geometric relationship assumption (cross-section deformed from axis deformation) breaks down for torsional loading
3. **Error at maximum deflection**: At the point of maximum deflection along the beam, errors are typically lowest regardless of overall distribution

### Practical Implications
- For structural design using common acceptance criteria (deflection limits $L/480$, $L/360$, etc.) at the scale of $10^{-3}$ cm, errors of this magnitude are generally acceptable
- For structures sensitive to torsional response, 3D Hexa 8 modeling is recommended over 1D Timoshenko

## Conclusions

1. **Hexa 8 FE** with Hermitian interpolation provides accurate results (< 4% vs. ANSYS) and correctly captures bending through independent rotation DOF
2. The 8-node approach achieves the same 48 equations per element as a 16-node standard element but with higher polynomial order (3 vs. 2)
3. **Timoshenko beam** produces axis errors of 6–7% and cross-section shape errors up to 20%; acceptable for preliminary structural design but not for detailed cross-section analysis
4. For cases where Timoshenko and Hexa 8 agree well (particularly bending-dominated cases), it is possible to use axis deformations to estimate cross-section deformation for academic purposes
5. Experimental validation against physical test results with similar geometry and material properties remains necessary

## Appendix: Mesh Sensitivity Summary (Table A1)

The medium mesh (type b: 2000–3000 hexahedrons) achieves convergence within ~0.5% error. Coarse and fine meshes yield errors from 0% to ~20% depending on the cross-section type.
