---
parent_id: "wang-2006-timoshenko-beam-cnts"
chunk_id: "wang-2006-timoshenko-beam-cnts/08-dtb-results"
section: "Double-Timoshenko Beam (DTB) Model Results"
order: 8
tags:
  - "engineering/multi-beam-models"
  - "engineering/numerical-results"
  - "engineering/frequency-analysis"
summary: "Vibration frequencies for double-walled CNT comparing DTB and DEB models across boundary conditions and L/d ratios"
formulas:
  - id: "F14"
    name: "Two sets of resonant frequencies"
    expr: "ω²ₙ₁ = ½[zₙ - √(z²ₙ - 4bₙ)]"
  - id: "F15"
    name: "Two sets of resonant frequencies (symmetric)"
    expr: "ω²ₙ₂ = ½[zₙ + √(z²ₙ - 4bₙ)]"
  - id: "F16"
    name: "Frequency sum parameter"
    expr: "zₙ = Ω⁴ₙ[EI₁/(ρA₁L⁴) + EI₂/(ρA₂L⁴)] + c₁(A)/(ρA₁A₂)"
  - id: "F17"
    name: "Frequency product parameter"
    expr: "bₙ = Ω⁸ₙ[EI₁/(ρA₁L⁴)][EI₂/(ρA₂L⁴)] + c₁Ω⁴ₙ[EI₁/(ρA₁L⁴) + EI₂/(ρA₂L⁴)]"
  - id: "F18"
    name: "High-frequency limiting behavior"
    expr: "Ωₙ₂ → √(c₁A²L⁴/(A₁A₂EI))"
---

## Double-Timoshenko Beam (DTB) Model

Using the DQ method with N=2 for double-walled CNTs, the discretized governing equations yield two sets of n-order resonant frequencies due to non-coaxial vibration modes.

## Characteristic Frequency Equations

The two sets of n-order resonant frequencies are given by:

```
ω²ₙ₁ = ½[zₙ - √(z²ₙ - 4bₙ)]                    (11a)

ω²ₙ₂ = ½[zₙ + √(z²ₙ - 4bₙ)]                    (11b)
```

where:

```
zₙ = Ω⁴ₙ[EI₁/(ρA₁L⁴) + EI₂/(ρA₂L⁴)] + c₁(A)/(ρA₁A₂)    (12a)

bₙ = Ω⁸ₙ[EI₁/(ρA₁L⁴)][EI₂/(ρA₂L⁴)] + c₁Ω⁴ₙ[EI₁/(ρA₁L⁴) + EI₂/(ρA₂L⁴)]    (12b)
```

with A = A₁ + A₂.

## Frequency Parameter Definition

The dimensionless frequency parameters are:

```
Ωₙ₁ = ⁴√(ω²ₙ₁ρAL⁴/(EI))
Ωₙ₂ = ⁴√(ω²ₙ₂ρAL⁴/(EI))
```

where I = I₁ + I₂.

## Two Frequency Sets in Double-Walled CNTs

### Lower Frequency Set (Ωₙ₁)
- Sensitive to mode number n
- Sensitive to length-to-diameter ratio L/d
- Sensitive to boundary conditions
- Corresponds to in-phase or coupled motion

### Higher Frequency Set (Ωₙ₂)
- Approximately constant across modes
- Relatively insensitive to mode number
- Relatively insensitive to L/d when L/d > 30
- Relatively insensitive to boundary conditions
- Corresponds to out-of-phase or de-coupled motion

## Effects of Shear Deformation and Rotary Inertia

### For Small L/d Ratios (L/d = 10)

The effects cannot be ignored, especially for higher modes. Shear deformation and rotary inertia lead to a **significant reduction in frequencies** compared to Euler beam results.

### For Intermediate L/d (L/d = 30)

- Euler and Timoshenko results for lower set (Ωₙ₁) in good agreement when n ≤ 5
- For higher set (Ωₙ₂), good agreement when n ≤ 9
- Beyond these n values, Timoshenko results lower due to shear and rotary effects
- Differences increase with increasing n values
- Shear deformation and rotary inertia have **greater influence on Ωₙ₁** than Ωₙ₂

### For Large L/d (L/d ≥ 50)

- Effects of shear deformation and rotary inertia on higher n-order frequencies Ωₙ₂ become **negligible**
- Ωₙ₂ is **insensitive to mode number**
- For lower frequency set Ωₙ₁, Timoshenko and Euler results agree well for first few modes (n ≤ 10)
- Higher frequencies show separation with Timoshenko results lower

### For Very Slender CNTs (L/d ≥ 100)

- DTB and DEB results are **almost equivalent**
- Shear deformation and rotary inertia have **negligible effect** on vibration frequencies

## Higher Frequency Set Asymptotic Behavior

For large L/d and small n values, when L⁴/I₁ ≫ Ω⁴ₙ and L⁴/I₂ ≫ Ω⁴ₙ:

```
zₙ → c₁A/(ρA₁A₂)    and    bₙ → 0
```

This leads to:

```
ω²ₙ₂ → c₁A/(ρA₁A₂)    or    Ωₙ₂ → ⁴√(c₁A²L⁴/(A₁A₂EI))    (14)
```

The second set of frequencies becomes **independent** of:
- Length L
- Mode number n
- Boundary conditions

and depends **only on** van der Waals force coefficients and tube diameters.

## Comparison with Different Boundary Conditions

Results for various end conditions (CC, CF, SS, CS) show:

- Higher frequency set Ωₙ₂ approximately constant at **63.5** for L/d = 50
- Values nearly identical across all four different end conditions
- Confirms that Ωₙ₂ is insensitive to end conditions, mode number, and length

## Relative Percentage Differences

The percentage difference between DTB and DEB models:

```
Ψ = |Ω_T - Ω_E|/Ω_E × 100%
```

where Ω_T and Ω_E are frequencies from DTB and DEB models respectively.

For L/d = 50:
- Ωₙ₂ shows very small differences, maximum of only 1.35% at n = 15
- Ωₙ₁ shows large differences proportional to mode number
- Differences increase from ~0.3% at mode 3 to ~9% at mode 15
