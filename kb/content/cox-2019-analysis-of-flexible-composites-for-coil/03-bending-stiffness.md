---
parent_id: "cox-2019-analysis-of-flexible-composites-for-coil"
chunk_id: "cox-2019-analysis-of-flexible-composites-for-coil/03-bending-stiffness"
section: "Stiffness and Bending Calculations"
order: 3
tags:
  - "engineering/composite-materials"
  - "engineering/bending-analysis"
  - "engineering/laminate-stiffness"
  - "engineering/spooling"
summary: "Analytical approach for calculating bending stresses in multi-layered thick-walled fiber-reinforced pipes and determining Young's modulus and bending stiffness for various laminate configurations."
formulas:
  - id: "F8"
    name: "Boundary conditions for bending (no internal/external pressure)"
    expr: "σ_r^(1)(r₀) = 0, σ_r^(N)(r_a) = 0"
  - id: "F9"
    name: "Continuity conditions for bending"
    expr: "u_r^(k)(r_k) = u_r^(k+1)(r_k), u_θ^(k)(r_k) = u_θ^(k+1)(r_k), σ_r^(k)(r_k) = σ_r^(k+1)(r_k), k = 1,N-1"
  - id: "F10"
    name: "Equilibrium for bending moment"
    expr: "∫∫ σ_r r² sin θ dr dθ = M; r ∈ [r₀, r_a], θ ∈ [0, 2π]"
  - id: "F11"
    name: "Stress field components for bending"
    expr: "σ_r = (Br + Cr⁻³ + Ar) sin θ; σ_θ = [B(1+β)r - C(1-β)r⁻³ + 3Ar] sin θ; τ_rθ = -(Br + Cr⁻³ + Ar) cos θ; τ_z = (s₁Br + s₂Cr⁻³ + s₃Ar) sin θ"
  - id: "F12"
    name: "Radial and hoop displacements for bending"
    expr: "u_r = (p₁Br² + p₂Cr² + p₃Ar²) sin θ; u_θ = (q₁Br² + q₂Cr² + q₃Ar²) cos θ"
  - id: "F13"
    name: "Bending moment relation"
    expr: "M = EIK"
  - id: "F14"
    name: "Bending moment for circular cross-section"
    expr: "M = (π/4)(r_a⁴ - r₀⁴)EK"
  - id: "F15"
    name: "Axial Young's modulus"
    expr: "E_x^(k) = E₁ / [m⁴ + m²n²(2ν₁₂ + 4G₁₂/E₁) + n⁴ E₁/E₂]"
  - id: "F16"
    name: "Stress in terms of strain"
    expr: "σ_x^(k) = E_x^(k) ε_x"
  - id: "F17"
    name: "Force carried by each ply"
    expr: "F^(k) = σ^(k) A^(k)"
  - id: "F18"
    name: "Laminate Young's modulus"
    expr: "E = F/A_x"
---

## Stiffness and Bending Calculations

The bending stresses in composite pipes are calculated using the analytical approach for multi-layered thick-walled fiber-reinforced pipes. Stresses are obtained by solving the system of equations consisting of boundary conditions, continuity conditions, and equilibrium for bending moment.

### Boundary Conditions for Bending

For a pipe spooled on a drum with no internal or external pressure:

```
σ_r^(1)(r₀) = 0, σ_r^(N)(r_a) = 0
```

### Continuity Conditions for Bending

Layers are perfectly bonded, so continuity conditions for displacements and stresses on layer interfaces are:

```
u_r^(k)(r_k) = u_r^(k+1)(r_k)
u_θ^(k)(r_k) = u_θ^(k+1)(r_k)
σ_r^(k)(r_k) = σ_r^(k+1)(r_k), k = 1, N-1
```

where N is the number of layers and u_θ^(k) is the hoop displacement of the k-th layer.

### Equilibrium for Bending Moment

Equilibrium is satisfied by:

```
∫∫ σ_r r² sin θ dr dθ = M; r ∈ [r₀, r_a], θ ∈ [0, 2π]
```

where M is the bending moment.

### Stress Field Components

The components of the stress field have the form:

```
σ_r = (Br + Cr⁻³ + Ar) sin θ
σ_θ = [B(1+β)r - C(1-β)r⁻³ + 3Ar] sin θ
τ_rθ = -(Br + Cr⁻³ + Ar) cos θ
τ_z = (s₁Br + s₂Cr⁻³ + s₃Ar) sin θ
```

where A, B, and C are unknowns determined by solving the system of equations, and S_ij are compliance constants.

The parameters β and η are defined in terms of stiffness terms:

```
β = √(1 + 2R₁₁ + 2R₁₂ + R₄₄)/R₂₂
η = (S₂₃ - S₁₃)/(R₁₁ + 2R₁₂ + R₄₄ - 3R₂₂)
```

### Radial and Hoop Displacements

Radial and hoop displacements are presented as:

```
u_r = (p₁Br² + p₂Cr² + p₃Ar²) sin θ
u_θ = (q₁Br² + q₂Cr² + q₃Ar²) cos θ
```

where p and q terms depend on material properties and β.

## Bending Moment and Young's Modulus Calculations

### Classical Bending Theory

The bending moment is related to curvature and Young's modulus by:

```
M = EIK
```

where:
- M = bending moment
- K = curvature
- E = Young's modulus
- I = second moment of inertia

For a tube of circular cross-section:

```
M = (π/4)(r_a⁴ - r₀⁴)EK
```

where:
- r_a = outer pipe radius
- r₀ = inner pipe radius
- K = 1/R (R is drum radius)

### Axial Young's Modulus of Lamina

The axial Young's modulus of a lamina at angle θ can be found as:

```
E_x^(k) = E₁ / [m⁴ + m²n²(2ν₁₂ + 4G₁₂/E₁) + n⁴ E₁/E₂]
```

where:
- E₁ = longitudinal Young's modulus of unidirectional composite
- E₂ = transverse Young's modulus
- G₁₂ = shear modulus
- ν₁₂ = Poisson's ratio
- m = cos θ, n = sin θ
- θ = fiber orientation angle

### Stress and Strain Relationship

The stress in each ply can be expressed in terms of strain ε_x:

```
σ_x^(k) = E_x^(k) ε_x
```

### Laminate Young's Modulus

The force represented by applied stress equals the sum of forces carried by each ply:

```
F = Σ σ^(k) A^(k)
```

This allows calculation of overall laminate Young's modulus:

```
E = F/A_x
```

where A_x is the total cross-sectional area = π(r_a² - r₀²)

### Combined Analysis

By knowing the laminate Young's modulus and the bending stiffness, the bending moment for different drum radii can be solved for. This permits ranking acceptable pipes according to their stiffnesses; the pipe must be stiff enough to be pushed into the well while also meeting pressure and axial load requirements.

The MATLAB software generates stress fields around the circumference of the pipe and through the thickness of every individual ply layer, providing comprehensive three-dimensional stress distributions for design analysis.
