---
parent_id: "andersen-2008-elastic-beams-in-three-dimensions"
chunk_id: "andersen-2008-elastic-beams-in-three-dimensions/02-constitutive-relations-and-cross-section-properties"
section: "Constitutive Relations and Cross-Section Properties"
order: 2
tags:
  - "engineering/beam-theory"
summary: "Elastic constitutive relations linking generalised stresses (section forces/moments) to generalised strains via cross-sectional constants including area, moments of inertia, shear areas, and torsion constant."
formulas:
  - id: "F6"
    name: "Axial force constitutive relation"
    expr: "N = E*(A*dw_x/dx + S_y*dθ_y/dx - S_z*dθ_z/dx)"
  - id: "F7"
    name: "Shear force constitutive relation"
    expr: "Q_y = G*A_y*(dw_y/dx - θ_z) + G*R_y*dθ_x/dx"
  - id: "F8"
    name: "Torsional moment (St. Venant)"
    expr: "M_x = G*K*dθ_x/dx (simplified, bending coupling omitted)"
  - id: "F9"
    name: "Bending moment M_y"
    expr: "M_y = E*(S_y*dw_x/dx + I_yy*dθ_y/dx - I_yz*dθ_z/dx)"
  - id: "F10"
    name: "Bending moment M_z"
    expr: "M_z = E*(-S_z*dw_x/dx - I_yz*dθ_y/dx + I_zz*dθ_z/dx)"
  - id: "F11"
    name: "Bending centre coordinates"
    expr: "y_B = S_z/A,  z_B = S_y/A"
---

# Constitutive Relations and Cross-Section Properties

## Generalised Stresses and Strains

The generalised stress and strain vectors are:
```
σ(x) = {N, Q_y, Q_z, M_x, M_y, M_z}ᵀ
ε(x) = {ε, γ_xy, γ_xz, θ_x, κ_y, κ_z}ᵀ
```

The internal virtual work per unit length is:
```
δω = N*δε + Q_y*δγ_xy + Q_z*δγ_xz + M_x*δθ_x + M_y*δκ_y + M_z*δκ_z
```

## Cross-Sectional Constants

Integrating stresses over the cross-section area yields the constitutive equations. The relevant cross-sectional constants are:

| Symbol | Definition | Physical meaning |
|--------|-----------|-----------------|
| `A` | ∫ dA | Cross-sectional area |
| `A_y = α_y * A` | Shear area | Effective area resisting Q_y shear |
| `A_z = α_z * A` | Shear area | Effective area resisting Q_z shear |
| `S_y = ∫ z dA` | First moment about y-axis | Coupling axial–bending |
| `S_z = ∫ y dA` | First moment about z-axis | Coupling axial–bending |
| `I_yy = ∫ z² dA` | Second moment about y-axis | Bending stiffness in xz-plane |
| `I_zz = ∫ y² dA` | Second moment about z-axis | Bending stiffness in xy-plane |
| `I_yz = ∫ yz dA` | Product moment of inertia | Coupling between planes |
| `K` | ∫ [y²+z²+y*(∂ω/∂z)-z*(∂ω/∂y)] dA | Torsion constant (St. Venant) |
| `R_y`, `R_z` | Warping-related shear constants | Coupling torsion–shear |

Shear reduction factors: for parabolic shear stress distribution, `α_y = α_z = 5/6`. For I-profiles, shear area ≈ web area.

## Constitutive Matrix

Ignoring twist (`θ_x`) and Vlasov torsion, the reduced constitutive matrix (symmetric) is:

```
⎡ N  ⎤   ⎡ EA    -ES_y  -ES_z   0     0   ⎤ ⎡ dw_x/dx      ⎤
⎢ M_y⎥   ⎢ ES_y   EI_yy -EI_yz  0     0   ⎥ ⎢ dθ_y/dx      ⎥
⎢ M_z⎥ = ⎢-ES_z  -EI_yz  EI_zz  0     0   ⎥ ⎢ dθ_z/dx      ⎥
⎢ Q_y⎥   ⎢ 0      0      0     GA_y   0   ⎥ ⎢ dw_y/dx - θ_z⎥
⎣ Q_z⎦   ⎣ 0      0      0      0   GA_z ⎦ ⎣ dw_z/dx + θ_y⎦
```

This matrix is symmetric only when Vlasov torsion is excluded from M_x.

## Bending Centre (Neutral Axis)

When the origin O is not at the centroid, axial force and bending moments are coupled. To uncouple them, the origin is translated to the **bending centre B** with coordinates (F11):
```
y_B = S_z / A
z_B = S_y / A
```

At B:
- `S_y' = S_z' = 0`
- Axial force N produces only uniform axial displacement, no bending
- Bending moments produce only bending, no axial displacement

The transformation of moments under this translation is:
```
M_y' = M_y - z_B * N
M_z' = M_z + y_B * N
```

## Timoshenko vs. Bernoulli-Euler Shear

For `GA_y → ∞`: `γ_xy = Q_y/(GA_y) = 0` → Bernoulli-Euler limit.

The ratio of shear-to-bending deformations scales as `(h/l)²`, where `h` is cross-section height and `l` is beam length. Shear deformation is negligible for slender beams but important for short/thick members such as drill collar segments.
