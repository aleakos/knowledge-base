---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/02-virtual-work-pressure"
section: "Virtual Work Expression Including Pressure Effects"
order: 2
tags:
  - "engineering/finite-element-method"
  - "engineering/virtual-work"
  - "engineering/pressurized-structures"
summary: "Development of virtual work expression that explicitly includes work done by pressure during deformation-induced volume changes for pressurized fabric beam-columns."
formulas:
  - id: "F1"
    name: "Volume change due to axial strain"
    expr: "ΔVₐ = πr² ∫ ε dx"
  - id: "F2"
    name: "Volume change due to shear strain"
    expr: "ΔVₛ = πr² ∫ (cos γ - 1) dx ≈ -πr² ∫ (γ²/2) dx"
  - id: "F3"
    name: "Volume change due to bending deformation"
    expr: "ΔVf = -πr² ∫ (r - ȳ) dθ"
  - id: "F4"
    name: "Total work done by pressure"
    expr: "Wᵖ = -P ∫ ε dx + P ∫ (γ²/2) dx + P ∫ (r - ȳ) dθ"
  - id: "F5"
    name: "Virtual work done by pressure"
    expr: "δWᵖ = P ∫ δε dx + P ∫ γ δγ dx + P ∫ (r - ȳ) δκ dx"
---

## Problem Formulation

The virtual work expression is developed for a pressurized fabric beam–column as shown in the reference geometry. Key assumptions:

- Initial pressurization occurs prior to application of external loads F and q
- Radius r and length L correspond to the inflated state
- Analysis performed within framework of moderate deformations and small strains
- Internal pressure p₀ remains constant (simplified but validated by experiment)
- Cross-sectional radius is fixed

### Justification for Constant Pressure Assumption

While a more rigorous analysis would couple a gas law with the mechanics simulation, the constant pressure assumption is justified because:

1. **Small relative volume changes**: For a mid-span deflection of one beam diameter, volume changes are only 0.29% at p₀ = 69 kPa and 0.09% at p₀ = 276 kPa
2. **Experimental validation**: Pressure monitoring during beam tests showed negligible pressure change during loading
3. **Conservative approach**: Increasing pressure increases beam stiffness and capacity, so constant pressure is conservative

## Volume Changes and Pressure Effects

### Volumetric Deformations

Consider a small segment of pressurized fabric beam of length dx undergoing:
- Axial strain ε
- Engineering shear strain γ
- Curvature κ with associated radius ρ

The bending neutral axis location ȳ is determined from moment–curvature analysis. The beam cross-section remains circular with radius r during deformation.

**Critical observation**: Under shear deformation, the beam length remains unchanged.

### Volume Change Components

Using small angle approximation cos γ ≈ 1 - ½γ²:

```
ΔVₐ = πr² ∫ ε dx                          (1)
```

```
ΔVₛ = πr² ∫ (cos γ - 1) dx ≈ -πr² ∫ (γ²/2) dx   (2)
```

```
ΔVf = -πr² ∫ (r - ȳ) dθ                   (3)
```

where:
- ΔVₐ = volume change due to axial strain
- ΔVₛ = volume change due to shear strain
- ΔVf = volume change due to bending deformation

### Total Work Done by Pressure

With pressure resultant P = p₀πr²:

```
Wᵖ = Wᵖₐ + Wᵖₛ + Wᵖf = -p₀ΔV
   = -P ∫ ε dx + P ∫ (γ²/2) dx + P ∫ (r - ȳ) dθ    (4)
```

Taking the first variation with respect to γ and θ, and using dθ = κ dx:

```
δWᵖ = δWᵖₐ + δWᵖₛ + δWᵖf 
    = P ∫ δε dx + P ∫ γ δγ dx + P ∫ (r - ȳ) δκ dx   (5)
```

where δε, δγ, and δκ correspond to valid virtual deformation fields.

### Physical Interpretation

- **δWᵖₐ**: Virtual work done by pressure resultant P acting through virtual axial displacement δε dx
- **δWᵖₛ**: Virtual work done by pressure under shear deformation. The component P sin γ ≈ Pγ acts through virtual distance δγ dx
- **δWᵖf**: Virtual work done by real moment P(r - ȳ) acting through virtual rotation δκ dx

**Important**: Prior to wrinkling, ȳ = r, so δWᵖf = 0. After wrinkling onset, ȳ decreases with increasing curvature.

## Incremental Virtual Work Statement

### Starting Point

The virtual work statement valid for the beam in its pressurized state:

```
δWint = δWext ⟺
∫ EA(ε₀ + ε)δε dx + ∫ M δκ dx + ∫ GAsγ δγ dx 
- P ∫ δε dx + P ∫ γ δγ dx + P ∫ (r - ȳ) δκ dx 
= ∫ q δv dx + ∫ F δu dx + ∫ Fv' δv' dx      (6)
```

where:
- ε₀ = P/EA = axial strain produced by internal pressure
- ε = axial strain from external loads
- M = internal bending moment
- GAs = shear rigidity (G is constant; A is area)
- Last term in δWext accounts for P–Δ effects

### Simplified Form

Recognizing P = EAε₀, the first and fourth integrals combine to eliminate ε₀:

```
δWint = δWext ⟺
∫ EA ε δε dx + ∫ M δκ dx + ∫ GAs γ δγ dx 
+ P ∫ γ δγ dx + P ∫ (r - ȳ) δκ dx
= ∫ q δv dx + ∫ F δu dx + ∫ Fv' δv' dx      (7)
```

This shows that work done by pressure during initial inflation is balanced by energy stored in fabric under strain ε₀.

### Incremental Formulation

Recasting Eq. (7) in incremental form using first-order Taylor series:

```
M(κ + Δκ) = M(κ) + (dM/dκ) Δκ = M(κ) + EIT Δκ    (8)
```

```
ȳ(κ + Δκ) = ȳ(κ) + (dȳ/dκ) Δκ                     (9)
```

where EIT is the tangent bending rigidity from the nonlinear moment–curvature relationship.

### Final Incremental Virtual Work Statement

```
∫ EA Δε δε dx + ∫ (EIT + P dȳ/dκ) Δκ δκ dx
+ ∫ (GAs + P) Δγ δγ dx - ∫ F Δv' δv' dx
= ∫ q δv dx + ∫ F δu dx + ∫ Fv' δv' dx 
  - ∫ EA ε δε dx - ∫ (M + P(r - ȳ)) δκ dx 
  - ∫ (GAs + P) γ δγ                             (10)
```

This incremental form is suitable for Newton iteration and development of the nonlinear beam finite element.
