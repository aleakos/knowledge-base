---
parent_id: "simo-1985-a-finite-strain-beam-formulation-the-thr"
chunk_id: "simo-1985-a-finite-strain-beam-formulation-the-thr/02-derivatives-moving-basis"
section: "Derivatives of the Moving Basis"
order: 2
tags:
  - "engineering/differential-geometry"
  - "engineering/beam-theory"
summary: "Formulation of derivatives of orthonormal moving basis in terms of skew-symmetric tensors and axial vectors"
formulas:
  - id: "F6"
    name: "Orthogonal transformation relating bases"
    expr: "tᵢ(S) = A(S)Eᵢ or tᵢ(S) = Aᵢⱼeⱼ, I = 1,2,3"
  - id: "F7"
    name: "Derivative of moving frame basis"
    expr: "d/dS tᵢ(S) = Ω(S)tᵢ(S)"
  - id: "F8"
    name: "Skew-symmetric tensor definition"
    expr: "Ω(S) = [dA/dS]A'(S)"
  - id: "F9"
    name: "Skew-symmetric tensor matrix form"
    expr: "[Ω(S)] = [0, κ₃(S), -κ₂(S); -κ₃(S), 0, κ₁(S); κ₂(S), -κ₁(S), 0]"
  - id: "F10"
    name: "Axial vector of skew-symmetric tensor"
    expr: "ω(S) = κ₁(S)t₁(S) + κ₂(S)t₂(S) + κ₃(S)n(S)"
  - id: "F11"
    name: "Derivative formula using axial vector"
    expr: "d/dS tᵢ(S) = ω(S) × tᵢ(S), I = 1,2,3"
---

## Derivatives and Rotational Structure

Since the moving basis {tᵢ(S)} is orthonormal for each S ∈ I, there exists an orthogonal transformation in the special orthogonal group SO(3) such that:

```
tᵢ(S) = A(S)Eᵢ or tᵢ(S) = Aᵢⱼeⱼ, I = 1,2,3
```

where {eᵢ} denotes a fixed spatial frame and A(S) = Aᵢⱼeᵢ ⊗ Eⱼ is a two-point orthogonal tensor field.

### Skew-Symmetric Tensor and Vorticity

Taking the derivative of the transformation with respect to S:

```
d/dS tᵢ(S) = Ω(S)tᵢ(S)
```

where Ω(S) = [dA/dS]A'(S) is a skew-symmetric tensor field (Ω(S) + Ω'(S) = 0).

In matrix form with components relative to the moving frame {tᵢ}:

```
[Ω(S)] = [  0    κ₃(S)  -κ₂(S)]
         [-κ₃(S)   0     κ₁(S)]
         [κ₂(S)  -κ₁(S)   0   ]
```

The axial vector ω(S) ∈ ℝ³ associated with Ω(S) is defined by Ω(S)ω(S) = 0:

```
ω(S) = κ₁(S)t₁(S) + κ₂(S)t₂(S) + κ₃(S)n(S)
```

This allows the derivative relations to be expressed compactly as:

```
d/dS tᵢ(S) = ω(S) × tᵢ(S), I = 1,2,3
```

### Initial Curvature Treatment

For a curved reference configuration with arbitrary initial centerline curve, the basis {Eᵢ(S)} becomes a function of S:

```
Eᵢ(S) = A₀(S)ĭᵢ  ⟹  dEᵢ/dS = Ω₀(S)Eᵢ
```

where Ω₀ = [dA₀/dS]A₀' gives the initial curvature. The basic equations remain valid with Ω replaced by:

```
Ω̃ = Ω + AΩ₀A'
```

### Distinction from Convected Basis

The moving frame {tᵢ(S)} differs fundamentally from the convected basis {Ēᵢ(S)} = F₀(S)Eᵢ:
- Ē₃ is **tangent** to the centerline; n(S) = t₃(S) is **normal** to the cross-section
- The moving frame is orthonormal; the convected basis is not
- For the Kirchhoff-Love case (no shear), these bases coincide
