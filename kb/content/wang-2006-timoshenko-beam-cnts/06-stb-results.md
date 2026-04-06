---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/06-stb-results"
section: "Single-Timoshenko Beam (STB) Model Results"
order: 6
tags:
  - "engineering/numerical-results"
  - "engineering/vibration-frequencies"
  - "engineering/comparison-analysis"
summary: "Frequency parameters for STB and SEB models across length-to-diameter ratios and boundary conditions"
formulas: []
---

## STB vs SEB Frequency Comparison

### Clamped-Clamped (CC) Boundary Condition

| Mode n | L/d=10 | L/d=30 | L/d=50 | L/d=100 | SEB |
|--------|--------|--------|--------|---------|-----|
| 1 | 4.5533 | 4.7085 | 4.7222 | 4.7280 | 4.7300 |
| 2 | 7.2493 | 7.7718 | 7.8234 | 7.8457 | 7.8540 |
| 3 | 9.6978 | 10.799 | 10.922 | 10.977 | 10.995 |
| 4 | 11.900 | 13.755 | 13.992 | 14.100 | 14.137 |
| 5 | 13.898 | 16.630 | 17.028 | 17.214 | 17.279 |
| 6 | 15.727 | 19.420 | 20.025 | 20.317 | 20.420 |
| 7 | 17.415 | 22.119 | 22.978 | 23.408 | 23.561 |
| 8 | 18.985 | 24.726 | 25.884 | 26.484 | 26.703 |
| 9 | 20.454 | 27.244 | 28.740 | 29.544 | 29.845 |
| 10 | 21.833 | 29.674 | 31.544 | 32.588 | 32.987 |

Table 1: Frequency parameter Ω = ⁴√(ρAω²ₙL⁴/(EI)) for CC double-walled CNT

### Clamped-Free (CF) Boundary Condition

| Mode n | L/d=10 | L/d=30 | L/d=50 | L/d=100 | SEB |
|--------|--------|--------|--------|---------|-----|
| 1 | 1.8663 | 1.8741 | 1.8747 | 1.8750 | 1.8750 |
| 2 | 4.5503 | 4.6769 | 4.6878 | 4.6925 | 4.6940 |
| 3 | 7.3437 | 7.7872 | 7.8300 | 7.8485 | 7.8539 |
| 4 | 9.8415 | 10.824 | 10.932 | 10.979 | 10.995 |
| 5 | 12.090 | 13.795 | 14.008 | 14.104 | 14.137 |
| 6 | 14.122 | 16.688 | 17.051 | 17.220 | 17.279 |
| 7 | 15.973 | 19.496 | 20.057 | 20.326 | 20.420 |
| 8 | 17.671 | 22.214 | 23.019 | 23.419 | 23.562 |
| 9 | 19.238 | 24.841 | 25.936 | 26.498 | 26.703 |
| 10 | 20.690 | 27.377 | 28.802 | 29.562 | 29.845 |

Table 2: Frequency parameter Ω = ⁴√(ρAω²ₙL⁴/(EI)) for CF double-walled CNT

## Key Findings

### For Stocky CNTs (L/d ≤ 30)

Timoshenko beam model results are **significantly lower** than Euler beam model due to shear deformation and rotary inertia effects:

- **CC beam with L/d = 10**: 
  - Mode 1: 3.735% difference
  - Mode 5: 19.56% difference
  - Mode 10: 33.81% difference

- **CF beam with L/d = 10**: Similar trends but with slightly different magnitudes

The relative percentage difference increases with increasing mode numbers, indicating that higher modes are more sensitive to shear and rotary inertia effects.

### For Slender CNTs (L/d ≥ 50)

- Effects of shear deformation and rotary inertia become **negligible**
- Timoshenko and Euler beam results converge
- Agreement is excellent for L/d = 100

### Effect on Different Modes

Percentage difference increases dramatically with mode number because higher frequency vibrations are more sensitive to microscopic effects like shear deformation and rotary inertia that are negligible for low-frequency modes in slender structures.

### Convergence Behavior

The close agreement between DQ method results and analytical characteristic equations (Eqs. 6-7) for L/d = 100 verifies the correctness of the DQ formulation.
