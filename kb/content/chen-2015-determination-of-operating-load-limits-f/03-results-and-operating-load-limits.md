---
parent_id: "chen-2015-determination-of-operating-load-limits-f"
chunk_id: "chen-2015-determination-of-operating-load-limits-f/03-results-and-operating-load-limits"
section: "Results: Ultimate Working Torque and Operating Load Limits"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/finite-element-method"
summary: "FEA results for ultimate working torque vs. axial tension for API RSC and DSC, polynomial fit operating load limit curves, comparison with API RP 7G, and Tarim oilfield field validation."
formulas:
  - id: "F6"
    name: "API RSC working torque limit (linear range)"
    expr: "M_max = -3.37415e-3 * T_x + 27.2966  (T_x ≤ 2182 kN)"
  - id: "F7"
    name: "API RSC working torque limit (nonlinear range)"
    expr: "M_max = -1.19867e-8*T_x³ + 9.01252e-5*T_x² - 0.231875*T_x + 221.305  (T_x > 2182 kN)"
  - id: "F8"
    name: "DSC working torque limit (linear range)"
    expr: "M_max = -2.78989e-3 * T_x + 40.4602  (T_x ≤ 3255 kN)"
  - id: "F9"
    name: "DSC working torque limit (nonlinear range)"
    expr: "M_max = -1.0230775e-5*T_x³ + 0.10314805*T_x² - 346.66728*T_x + 388404.56  (T_x > 3255 kN)"
  - id: "F10"
    name: "API RP 7G torque to yield (RSC)"
    expr: "T_Y = (Y_m * A / 6) * (P/(2π) + R_t*f/cos(θ) + R_s*f)"
---

# Results: Ultimate Working Torque and Operating Load Limits

## Von Mises Stress Distribution

For both API RSC and DSC, the maximum von Mises stress at failure is 1095 MPa (equal to the material failure criterion).

**Failure locations:**
- **API RSC**: Maximum stress at the root of the first engaged tooth in the pin AND at the shoulder in the box
- **DSC**: Maximum stress at the secondary shoulder in the pin (different failure mode)

This difference in failure location determines the distinct load-carrying behavior of each connection type.

## Ultimate Working Torque Without Axial Load

| Connection | FEA Result (kN·m) | API RP 7G (kN·m) | Relative Error |
|------------|-------------------|------------------|----------------|
| API RSC | 29.42 | 29.05 | 1.3% |
| DSC | 43.21 | 41.44 (lit.) | 4.3% |

FEA results are slightly higher than analytical results (within 5%), validating the 3D model.

**API RSC failure mode**: Torque loading curve fluctuates due to material yield, then drops to zero abruptly. The low point of the fluctuation is taken as ultimate working torque.

**DSC failure mode**: Working torque first drops to a lower value (secondary shoulder fails), then fluctuates as primary shoulder and threads take over, before final failure. The peak value (43.21 kN·m) is the ultimate working torque.

## Ultimate Working Torque Under Various Axial Tensions

### API RSC

Ultimate working torques decrease with increasing axial tension:

| Axial tension (kN) | Ultimate torque (kN·m) |
|--------------------|------------------------|
| 0 | 29.42 |
| 400 | 29.26 |
| 800 | 27.69 |
| 1,600 | 24.22 |
| 2,800 | 19.07 |
| 3,200 | 15.81 |
| 3,846 | 0.00 (failure under tension alone) |

**Operating load limit curves** (safety factor 1.1 applied, per API RP 7G convention):

Linear range (F6):
```
M_max = -3.37415e-3 * T_x + 27.2966  [T_x ≤ 2182 kN]
```

Nonlinear range (F7):
```
M_max = -1.19867e-8*T_x³ + 9.01252e-5*T_x² - 0.231875*T_x + 221.305  [T_x > 2182 kN]
```

Critical axial tension for shoulder seal integrity: 3,015 kN.

### DSC

Behaviors distinct from API RSC due to secondary shoulder:

Three operating regions in torque-tension curve (M0–M1, M1–M2–M3, M3–M4):
- **M0–M1** (T_x < 3,580 kN): Both shoulders re-contact under working torque; secondary shoulder fails first
- **M1–M2–M3** (3,580 < T_x < 3,780 kN): Only secondary shoulder can re-contact; primary shoulder remains open
- **M3–M4** (T_x > 3,780 kN): Neither shoulder re-contacts; pure thread-bearing mode

Operating load limit curves (safety factor 1.1):

Linear range (F8):
```
M_max = -2.78989e-3 * T_x + 40.4602  [T_x ≤ 3,255 kN]
```

Nonlinear range (F9):
```
M_max = -1.0230775e-5*T_x³ + 0.10314805*T_x² - 346.66728*T_x + 388404.56  [T_x > 3,255 kN]
```

Critical axial tension for seal integrity (DSC): 2,736 kN.

## Comparison with API RP 7G

The relative error between FEA and API RP 7G increases nonlinearly with axial tension, reaching **17.5% at 2,182 kN axial tension**.

The API RP 7G linear approximation is unrealistic because:
- The shoulder contact state changes under external loads
- Torsion can re-contact the shoulder even under large tension
- The connection can bear more torsion than the linear API formula predicts

API RP 7G's linear torque-tension model is only valid at small axial tensions. For deep and ERD wells with high string weights, 3D elasto-plastic FEA is necessary.

## Field Validation: Tarim Oilfield

**Incident**: DB101 well, stuck pipe during reaming at 4,806–4,836.5 m depth. Bypass valve threaded connection failed at pin, 25 mm from shoulder, at depth 4,749.4 m.

**Conditions at failure**:
- Axial tension: 2,788 kN (vs. normal suspended weight ~1,644 kN)
- Working torque: ~25 kN·m

**FEA result for bypass valve connection** (make-up torque 17.33 kN·m, axial tension 1,144 kN):
- Ultimate working torque: 26.17 kN·m

The predicted failure torque (26.17 kN·m) is consistent with the applied torque at time of failure (~25 kN·m), validating the FEA approach.

## Conclusions

1. 3D FEA ultimate working torques agree with API RP 7G and published data to within 5% when axial tension is zero — validates the numerical method.
2. Axial tension significantly reduces ultimate working torque; the relationship is nonlinear above a critical tension (2,182 kN for API RSC; 3,255 kN for DSC).
3. DSC behavior differs fundamentally from API RSC; API RP 7G operating limits do not apply to DSCs.
4. API RP 7G's linear approximation becomes increasingly unconservative as axial tension increases (up to 17.5% error at moderate tension).
5. Operating load zone diagrams (red/yellow/green) provide a practical decision-making tool for field engineers.
