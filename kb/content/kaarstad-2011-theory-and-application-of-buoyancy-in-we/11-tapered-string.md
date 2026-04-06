---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/11-tapered-string"
section: "Applications - Buoyancy in Tapered String"
order: 11
tags:
  - "engineering/drilling"
  - "engineering/composite-strings"
  - "engineering/buoyancy"
summary: "Comprehensive example calculating cumulative buoyancy factors and axial loads throughout a composite drill string with multiple pipe sizes and internal/external fluid densities."
formulas:
  - id: "EX11"
    name: "Axial force at top of drill collars"
    expr: "F_dc^top = 0.83 × 2.13 [kN/m] × 100[m] = 177 kN"
  - id: "EX12"
    name: "Axial force at top of HWDP"
    expr: "F_HWDP^top = 0.84 × (2.13 × 100 + 0.62 × 300) = 335 kN"
  - id: "EX13"
    name: "Axial force at top of drill pipe"
    expr: "F_DP^top = 0.86 × (2.13 × 100 + 0.62 × 300 + 0.294 × 500) = 470 kN"
  - id: "EX14"
    name: "Final hook load for tapered string"
    expr: "F_hookload = 0.88 × (2.13 × 100 + 0.62 × 300 + 0.294 × 500 + 0.73 × 1000) = 1122 kN"
---

# Example Calculation: Buoyancy in a Tapered String

## Problem Overview

The composite equation for overall buoyancy is very useful to determine the axial load throughout a tubular from bottom to top. As real drilling or production strings often consist of various tubular sizes, it is useful to know the exact axial load of each component.

This example demonstrates the application using a tapered drill string landed in 1.4 s.g. drilling mud with 1.8 s.g. mud inside the drilling string.

## String Configuration

| Pipe | Depth mTVD (m) | Size | Weight (kN/m) |
|------|----------------|------|---------------|
| Drill pipe – 1 | 0-1000 | 6 5/8 x 5 | 0.73 |
| Drill pipe – 2 | 1000-1500 | 5 x 4 | 0.294 |
| HWDP | 1500-1800 | 5 x 3 | 0.62 |
| Drill collars | 1800-1900 | 8 x 3 | 2.13 |

**Fluids:**
- Outside (annulus): 1.4 s.g. mud
- Inside (drill string): 1.8 s.g. mud

## Overall Buoyancy Factors

Using Equation 5, the overall cumulative buoyancy factors calculated from bottom to top are:

| Pipe | Depth Range (m) | Buoyancy Factor β |
|------|-----------------|------------------|
| Drill collars | 1800-1900 | 0.83 |
| HWDP | 1500-1800 | 0.84 |
| Drill pipe – 2 | 1000-1500 | 0.86 |
| Drill pipe – 1 | 0-1000 | 0.88 |

## Axial Load Calculations

### Axial Force at Top of Drill Collars

Assuming the bit is off bottom (no additional load from bit):

```
F_dc^top = 0.83 × 2.13 [kN/m] × 100[m]
F_dc^top = 177 kN
```

### Axial Force at Top of HWDP

```
F_HWDP^top = 0.84 × (2.13 [kN/m] × 100[m] + 0.62 [kN/m] × 300[m])
F_HWDP^top = 0.84 × (213 + 186)
F_HWDP^top = 335 kN
```

### Axial Load at Top of 5 in Drill Pipe

```
F_DP^top = 0.86 × (2.13 [kN/m] × 100[m] + 0.62 [kN/m] × 300[m] + 0.294 [kN/m] × 500[m])
F_DP^top = 0.86 × (213 + 186 + 147)
F_DP^top = 470 kN
```

### Final Hook Load

```
F_Hookload = 0.88 × (2.13 [kN/m] × 100[m] + 0.62 [kN/m] × 300[m] + 0.294 [kN/m] × 500[m]
                     + 0.73 [kN/m] × 1000[m])
F_Hookload = 0.88 × (213 + 186 + 147 + 730)
F_Hookload = 0.88 × 1276
F_Hookload = 1122 kN
```

## Cumulative Buoyancy and Axial Load Profile

The cumulative buoyancy factor increases gradually from bottom (0.83) to top (0.88) due to:
1. Different internal and external fluid densities
2. Changing pipe cross-sectional areas
3. Cumulative effect of progressively lighter pipe sections

The axial load profile shows:
- Minimum loading at bottom (drill collars): 177 kN
- Progressive increase to surface as each lighter section is added
- Maximum loading at surface (hook): 1122 kN

## Key Insights

1. **Cumulative Effect:** The overall buoyancy factor depends on all elements below a given depth, not just the local element.

2. **Different Fluid Densities:** The heavier internal mud (1.8 s.g.) reduces buoyancy compared to the lighter external mud (1.4 s.g.).

3. **Non-uniform Buoyancy:** Different buoyancy factors at different depths reflect the changing geometry and density distribution.

4. **Load Distribution:** Hook load is highest due to supporting the entire string, while intermediate loads reflect partial string weight below that point.
