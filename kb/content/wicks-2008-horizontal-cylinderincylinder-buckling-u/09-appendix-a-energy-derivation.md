---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/09-appendix-a-energy-derivation"
section: "Appendix A — Energy Derivation of Sinusoidal Buckling Load"
order: 9
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/buckling"
  - "engineering/energy-methods"
  - "engineering/beam-theory"
summary: "Complete energy-balance derivation of the constrained Euler sinusoidal buckling load using the assumed displacement field, yielding the critical load expression from first principles."
formulas:
  - id: "FA1"
    name: "Displacement field (Appendix A)"
    expr: "u₃ = Δr sin β,  u₂ = Δr(1 − cos β)"
  - id: "FA2"
    name: "Spatial dependence of angle"
    expr: "β = β₀ sin(nπ/L · x)"
  - id: "FA3"
    name: "Small-angle approximations"
    expr: "sin β ≈ β₀ sin(nπx/L);  (1 − cos β) ≈ β₀²/2 · sin²(nπx/L)"
  - id: "FA4"
    name: "Approximate displacements (small angle)"
    expr: "u₃ ≈ Δrβ₀ sin(nπx/L);  u₂ ≈ Δrβ₀²/2 · sin²(nπx/L)"
  - id: "FA5"
    name: "Total curvature of cylinder centerline"
    expr: "C ≈ n²π²/L² · Δrβ₀ sin(nπx/L)"
  - id: "FA6"
    name: "Total bending strain energy"
    expr: "SE_bending ≈ EIn⁴π⁴/(4L³) · Δr²β₀²"
  - id: "FA7"
    name: "Change in length of cylinder"
    expr: "ΔL = 1/2 ∫₀ᴸ [(∂u₃/∂x)² + (∂u₂/∂x)²] dx"
  - id: "FA8"
    name: "Change in length (small-angle, order β₀²)"
    expr: "ΔL ≈ n²π²Δr²β₀²/(4L)"
  - id: "FA9"
    name: "Change in gravitational potential energy"
    expr: "ΔPE ≈ wβ₀²ΔrL/4"
  - id: "FA10"
    name: "Energy balance (buckling criterion)"
    expr: "P_cr · ΔL = ΔPE + SE_bending"
  - id: "FA11"
    name: "Critical buckling load (derived result)"
    expr: "P_cr = EI · n²π²/L² + wL²/(n²π²Δr)"
---

# Appendix A — Energy Derivation of Sinusoidal Buckling Load

## A.1. Constrained Euler Sinusoidal Buckling

This appendix derives the critical sinusoidal buckling load using an energy balance approach (Timoshenko and Gere, 1961). The analysis is similar to that given by Wu and Juvkam-Wold (1993).

### Step 1: Assumed Displacement Field

```
u₃ = Δr sin β
u₂ = Δr(1 − cos β)
```

With spatial dependence:
```
β = β₀ sin(nπ/L · x)
```

### Step 2: Small-Angle Simplifications

For `β₀` small:
```
sin β  ≈  β  = β₀ sin(nπx/L)
1 − cos β  ≈  β²/2  = β₀²/2 · sin²(nπx/L)
```

Simplified displacements:
```
u₃ ≈ Δrβ₀ sin(nπx/L)
u₂ ≈ Δrβ₀²/2 · sin²(nπx/L)
```

### Step 3: Bending Strain Energy

Total curvature of inner cylinder centerline:
```
C = √[(∂²u₃/∂x²)² + (∂²u₂/∂x²)²]  ≈  n²π²/L² · Δrβ₀ sin(nπx/L)
```

Total bending strain energy:
```
SE_bending = 1/2 ∫₀ᴸ EI·C² dx  ≈  EIn⁴π⁴/(4L³) · Δr²β₀²
```

### Step 4: Change in Cylinder Length

```
ΔL = 1/2 ∫₀ᴸ [(∂u₃/∂x)² + (∂u₂/∂x)²] dx
```

Keeping only terms of order `β₀²`:
```
ΔL ≈ n²π²Δr²β₀²/(4L)
```

### Step 5: Change in Gravitational Potential Energy

```
ΔPE = ∫₀ᴸ w·u₂ dx  ≈  wβ₀²ΔrL/4
```

### Step 6: Energy Balance (Buckling Criterion)

At the onset of buckling, work done by the axial load acting through the shortening of the cylinder equals the increase in potential energy plus the bending strain energy:

```
P_cr · ΔL = ΔPE + SE_bending
```

Substituting:
```
P_cr · n²π²Δr²β₀²/(4L)  =  wβ₀²ΔrL/4  +  EIn⁴π⁴/(4L³) · Δr²β₀²
```

### Step 7: Result

Dividing through by `n²π²Δr²β₀²/(4L)`:

```
P_cr = EI · n²π²/L²  +  wL²/(n²π²Δr)
```

This is Eq. (2) in Section 2.1 of the paper — the critical constrained Euler sinusoidal buckling load.
