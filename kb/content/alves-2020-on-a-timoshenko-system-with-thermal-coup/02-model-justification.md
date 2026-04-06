---
parent_id: "alves-2020-on-a-timoshenko-system-with-thermal-coup"
chunk_id: "alves-2020-on-a-timoshenko-system-with-thermal-coup/02-model-justification"
section: "Justification of the Model"
order: 2
tags:
  - "engineering/beam-theory"
  - "engineering/thermoelasticity"
  - "engineering/constitutive-relations"
  - "engineering/stress-strain"
summary: "Rigorous derivation of the fully thermoelastic Timoshenko system from constitutive laws combining Timoshenko beam theory with elastic/thermoelastic relations and thermal strain models."
formulas:
  - id: "F6"
    name: "Stress-Strain Relation with Thermal Effects"
    expr: "σ11 = a11 ε11 − αΘ11 and σ13 = a13 ε13 − αΘ13"
  - id: "F7"
    name: "Elastic Strain - Longitudinal Component"
    expr: "ε11(x1, x3, t) = ∂w1/∂x1 = ux1(x1, t) + x3 ψx1(x1, t)"
  - id: "F8"
    name: "Elastic Strain - Shear Component"
    expr: "ε13(x1, x3, t) = (1/2)(∂w1/∂x3 + ∂w2/∂x1) = (1/2)[ψ(x1, t) + ϕx1(x1, t)]"
  - id: "F9"
    name: "Thermal Strain Components"
    expr: "εT11(x1, x3, t) = α δ11 [θ1(x1, t) + x3 θ3(x1, t)]"
  - id: "F10"
    name: "Bending Moment"
    expr: "M(x1, t) = EI[ψx1(x1, t) − α δ11 θ3(x1, t)]"
  - id: "F11"
    name: "Shear Force"
    expr: "S(x1, t) = 2k'GA(1/2)[ψ(x1, t) + ϕx1(x1, t)] − α δ13 θ1(x1, t)"
  - id: "F12"
    name: "Heat Conduction - Newton's Law"
    expr: "ρ0cv θt = ∇²θ − α Θ0(ε11,t + ε13,t)"
  - id: "F13"
    name: "1D Heat Equation - Longitudinal Component"
    expr: "ρ0cv θ1,t = θ1,x1x1 − (α/2)Θ0(ϕx1 + ψ)t"
  - id: "F14"
    name: "1D Heat Equation - Vertical Component"
    expr: "ρ0cv θ3,t = θ3,x1x1 − α Θ0 ψx1t"
  - id: "F15"
    name: "Momentum Equations - Timoshenko Beams"
    expr: "ρA ϕtt − Sx = 0, ρI ψtt − Mx + S = 0"
---

## Justification of the Model (1.1)-(1.4)

This section provides complete mathematical and physical justification of the thermoelastic Timoshenko model through constitutive laws combining Timoshenko theory with elastic/thermoelastic relations.

## Timoshenko Hypotheses

The derivation assumes a thin 3D beam [0,L] × Ω where:
- Ω ⊂ R² is a uniform cross section
- L >> diam(Ω) (thin beam assumption)
- Bending occurs only in the (x₁, x₃)-plane
- Normal stresses (x₂-direction) are negligible

**Key Assumptions:**

**(A1)** Center of Ω at origin: ∫Ω x3 dx2dx3 = ∫Ω x2 dx2dx3 = 0

**(A2)** Thinness: diam(Ω) << L

**(A3)** Bending only in (x₁, x₃)-plane, negligible stresses in x₂-direction

**(A4)** Only two relevant stresses: σ₁₁ and σ₁₃ (others negligible)

## Physical Variables and Displacements

**Elastic displacements:**
- u(x₁, t): longitudinal displacement of points on x₁-axis
- ψ(x₁, t): rotation angle for normal to x₁-axis
- w₁(x₁, x₃, t) = u(x₁, t) + x₃ψ(x₁, t): longitudinal displacement field
- w₂(x₁, x₃, t) = ϕ(x₁, t): vertical beam displacement

**Temperature representation:**

The temperature distribution in the (x₁, x₃)-plane is linearized:

```
Θ(x₁, x₃, t) = θ₁(x₁, t) + x₃θ₃(x₁, t)
```

where:
- θ₁: temperature deviation along longitudinal direction
- θ₃: temperature deviation along vertical direction
- Θ₀: reference uniform temperature

## Stress-Strain Relations

For a homogeneous, elastically and thermally isotropic thin beam/plate:

```
σ₁₁ = a₁₁(ε₁₁ − εT₁₁)
σ₁₃ = a₁₃(ε₁₃ − εT₁₃)
```

where:
- a₁₁ = E (Young's modulus)
- a₁₃ = 2k'G (shear modulus with correction coefficient k')
- α > 0: coefficient of thermal expansion
- εT = α Θ: thermal strain (linear approximation)

## Elastic Strains (Timoshenko Theory)

```
ε₁₁(x₁, x₃, t) = ∂w₁/∂x₁ = ux₁(x₁, t) + x₃ψx₁(x₁, t)

ε₁₃(x₁, x₃, t) = (1/2)(∂w₁/∂x₃ + ∂w₂/∂x₁) = (1/2)[ψ(x₁, t) + ϕx₁(x₁, t)]
```

## Thermal Strains

Under the assumption |Θ/Θ₀| << 1:

```
εT₁₁(x₁, x₃, t) = α δ₁₁[θ₁(x₁, t) + x₃θ₃(x₁, t)]
εT₁₃(x₁, x₃, t) = α δ₁₃[θ₁(x₁, t) + x₃θ₃(x₁, t)]
```

where δ₁₁, δ₁₃ > 0 are material-dependent constants.

## Bending and Shear Relations

The bending moment and shear force are defined by integration over the cross section:

```
M(x₁, t) = ∫Ω x₃σ₁₁(x₁, x₃, t) dx₂dx₃
S(x₁, t) = ∫Ω σ₁₃(x₁, x₃, t) dx₂dx₃
```

Normalized by area A and moment of inertia I of cross section Ω:

```
A = ∫Ω dx₂dx₃,    I = ∫Ω x₃² dx₂dx₃
```

### Classical Thermoelastic Bending Moment

Using the longitudinal displacement vanishes (u ≈ 0) as justified in Remark 2.1:

```
M(x₁, t) = EI[ψx₁(x₁, t) − α δ₁₁ θ₃(x₁, t)]
```

This is the standard relation with thermal correction on rotation gradient.

### Novel Thermoelastic Shear Force

The shear force includes thermal coupling on its primary variable:

```
S(x₁, t) = 2k'GA(1/2)[ψ(x₁, t) + ϕx₁(x₁, t)] − 2k'GA α δ₁₃ θ₁(x₁, t)
```

Simplified to:

```
S(x₁, t) = k'GA[ψ(x₁, t) + ϕx₁(x₁, t)] − 2k'GA α δ₁₃ θ₁(x₁, t)
```

This is distinctive: thermal effects couple directly on θ₁, not just its derivatives.

## Heat Conduction (Fourier's Law)

Starting from Newton's law:

```
ρ₀cν Θt = ∇²Θ − α Θ₀(ε₁₁,t + ε₁₃,t)
```

After linearizing and separating into components, we obtain two 1D heat equations:

```
ρ₀cν θ₁,t = θ₁,xx − (α/2)Θ₀(ϕx + ψ)t
ρ₀cν θ₃,t = θ₃,xx − α Θ₀ ψxt
```

where x denotes x₁ (simplified notation).

## Momentum Equations for Timoshenko Beams

The classical momentum balance equations are:

```
ρA ϕtt − Sx = 0
ρI ψtt − Mx + S = 0
```

## Derivation of Case 1: Fully Thermoelastic System

Substituting M from the thermoelastic bending moment and S from the thermoelastic shear force into the momentum equations:

```
ρA ϕtt − k'GA(ϕx + ψ)x + 2αδ₁₃k'GA θ₁,x = 0
ρI ψtt − EI ψxx + k'GA(ϕx + ψ) + αδ₁₁EI θ₃,x − 2αδ₁₃k'GA θ₁ = 0
```

Combined with the two heat equations, this yields the fully thermoelastic Timoshenko system **(1.1)-(1.4)** with simplified notation:

- ρ₁ = ρA
- ρ₂ = ρI
- k = k'GA
- b = EI
- ρ₃ = 4ρ₀cν/(Θ₀δ₁₃k'GA)
- ρ₄ = ρ₀cν/(Θ₀δ₁₁EI)
- c₀ = 4/(Θ₀δ₁₃k'GA)
- c₁ = 1/(Θ₀δ₁₁EI)
- m = 2αδ₁₃k'GA
- σ = αδ₁₁EI
- θ = θ₁, ϑ = θ₃

## Key Physical Insight

**Remark 2.1:** The longitudinal displacement variable u vanishes due to integration properties. This justifies why classical (and thermoelastic) Timoshenko systems depend only on vertical displacement ϕ and rotation ψ.

## Classification of Thermoelastic Systems

The model derives three possible systems based on which constitutive laws are applied:

1. **Fully Thermoelastic** (this paper): Both M and S thermoelastic → Exponentially stable without χ = 0

2. **Partially Thermoelastic (Bending)**: M thermoelastic, S elastic → Requires χ = 0 for stability

3. **Partially Thermoelastic (Shear)**: S thermoelastic, M elastic → Requires χ = 0 for stability
