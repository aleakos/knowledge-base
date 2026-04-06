---
parent_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-"
chunk_id: "sheppard-1987-designing-well-paths-to-reduce-drag-and-/06-appendix-friction-model"
section: "Appendix A - Sliding Friction Model for Drag"
order: 6
tags:
  - "engineering/drilling"
  - "engineering/friction-model"
  - "engineering/buoyancy"
summary: "Detailed mathematical derivation of the friction model including buoyancy effects and tension profile equations"
formulas:
  - id: "FA1"
    name: "Side Force on Pipe Element"
    expr: "F(s) = σ(s){[(Δθ/Δs)² + sin²θ(Δβ/Δs)²]^(1/2)} Δs"
  - id: "FA2"
    name: "Mud Pressure at Point"
    expr: "Pₘ = P₀ + Pₘg r sin θ cos φ"
  - id: "FA3"
    name: "Side Force with Buoyancy (Vertical)"
    expr: "∫₀^(2π) (P₀ + 2Pₘgr sin θ cos φ) cos φ r₁ dφ Δs - ∫₀^(2π) (P₀ + 2Pₘgr sin θ cos φ) cos φ r₂ dφ Δs + 2∫₀^(2π) (r₁² - r₂²)(1 + cos φ)(Δθ/2) P₀ cos φ dφ"
  - id: "FA4"
    name: "Side Force with Buoyancy (Horizontal)"
    expr: "2∫₀^(2π) (r₁² - r₂²)(1 + cos φ)(Δβ/2) P₀ cos φ sin θ dφ"
  - id: "FA5"
    name: "Total Side Force"
    expr: "F = {[σₑΔθ - g(ρ - ρₘ)A(s) sin θ]² + [σₑΔβ sin θ]²}^(1/2)"
  - id: "FA6"
    name: "Effective Tension Definition"
    expr: "σₑ = σ(s) + p(s)A(s)"
  - id: "FA7"
    name: "Tension Profile Differential (General)"
    expr: "dσ/ds = A(s)ρg cos θ ± K[(σₑ dθ/ds)² + g(ρ - ρₘ)A(s) sin θ]² + [σₑ(dβ/ds) sin θ]²}^(1/2) - p(s)(dA(s)/ds)"
  - id: "FA8"
    name: "Effective Tension Differential"
    expr: "d/ds[p(s)A(s)] = -Pₘg cos θ A(s) + p(s)(dA(s)/ds)"
  - id: "FA9"
    name: "Tension Profile (Effective Tension Form)"
    expr: "dσₑ/ds = A(s)ρg cos θ ± K{[(σₑ dθ/ds)² + g(ρ - ρₘ)A(s) sin θ]² + [σₑ(dβ/ds) sin θ]²}^(1/2)"
---

## Sliding Friction Foundation

The tension profile σ(s) for a drillstring with general geometry must be determined. The interaction of the drillstring with the bore wall is characterized by a coefficient of simple sliding friction K.

**Friction Law:** If a side force F acts at a contact point, the impedance to drillstring motion is a force of magnitude |KF|.

## Side Force Analysis

### Pipe Element Geometry

Consider an element of drillstring with:
- Density ρ
- Cross-sectional area A(s)
- Mean incremental length Δs

A force F(s) acts orthogonally to the drillpipe element with magnitude determined by local curvature and tension.

### Force on Curved Pipe Element

```
F(s) = σ(s){[(Δθ/Δs)² + sin²θ(Δβ/Δs)²]^(1/2)} Δs
```

Where:
- σ(s) = axial stress in pipe × pipe cross-sectional area
- Δθ/Δs = local deviation angle curvature
- Δβ/Δs = local azimuthal angle curvature

## Buoyancy Contribution to Side Force

### Mud Pressure Distribution

Mud pressure acting on pipe at polar coordinates (r, φ) relative to reference point 0 where pressure is P₀:

```
Pₘ = P₀ + Pₘg r sin θ cos φ
```

Where:
- Pₘ = mud density
- g = gravitational acceleration
- θ = deviation angle
- φ = angular position around pipe circumference

### Buoyancy in Vertical Plane

Integration of mud pressure on pipe surface in the vertical plane (building/dropping direction):

```
∫₀^(2π) (P₀ + 2Pₘgr sin θ cos φ) cos φ r₁ dφ Δs
- ∫₀^(2π) (P₀ + 2Pₘgr sin θ cos φ) cos φ r₂ dφ Δs
+ 2∫₀^(2π) (r₁² - r₂²)(1 + cos φ)(Δθ/2) P₀ cos φ dφ
```

Where:
- r₁ = outer pipe radius
- r₂ = inner pipe radius

### Buoyancy in Horizontal Plane

Integration of mud pressure in the horizontal plane (turning direction):

```
2∫₀^(2π) (r₁² - r₂²)(1 + cos φ)(Δβ/2) P₀ cos φ sin θ dφ
```

### Total Side Force

Combining the curvature-induced force and buoyancy components:

```
F = {[σₑΔθ - g(ρ - ρₘ)A(s) sin θ]² + [σₑΔβ sin θ]²}^(1/2)
```

Where the effective tension σₑ incorporates both true tension and buoyancy effects:

```
σₑ = σ(s) + p(s)A(s)
```

## Tension Profile Derivation

### General Form

For a nonrotating drillstring tripping in or out of the hole, the frictional drag acts against motion. The incremental change in tension is:

```
dσ/ds = A(s)ρg cos θ ± K{[(σₑ dθ/ds)² + g(ρ - ρₘ)A(s) sin θ]²
        + [σₑ(dβ/ds) sin θ]²}^(1/2) - p(s)(dA(s)/ds)
```

Where:
- **±K** implies: +K for tripping out, -K for tripping in
- **p(s)(dA(s)/ds)** term accounts for mud pressure at pipe cross-section discontinuities

### Conversion to Effective Tension

The expression is rendered entirely in terms of σₑ using:

```
d/ds[p(s)A(s)] = -Pₘg cos θ A(s) + p(s)(dA(s)/ds)
```

This yields the effective tension differential equation:

```
dσₑ/ds = A(s)ρg cos θ ± K{[(σₑ dθ/ds)² + g(ρ - ρₘ)A(s) sin θ]²
         + [σₑ(dβ/ds) sin θ]²}^(1/2)
```

### Key Interpretation

The σₑ profile (difference between mud pressure and compression in pipe) is expressed entirely in terms of buoyed mass of steel.

**Neutral Point:** The value of s for which σₑ(s) = 0 gives the (drilling) neutral point of the system.

## Internal vs. External Pressure

### General Case

In cases where internal mud pressure Pᵢ differs from external pressure P₀:

```
σₑ = σ(s) + P₀πr₁² - Pᵢπr₂²
```

However, this leads to no change in the final effective tension differential equation, validating the approach.

## Buoyancy Effects Summary

### Significance

- Explicit inclusion of mud pressure avoids confusion over neutral point location
- Clarifies influence of buoyancy forces on curved pipe sections
- Tension and effective tension agree at surface (where Pₑ = 0)
- Critical for accurate modeling in high-angle and overbalanced wells

### Physical Insight

The buoyancy contribution to side force has two components:

1. **Vertical buoyancy** - opposes gravitational weight in building direction
2. **Horizontal buoyancy** - assists in turning direction but scaled by deviation angle
3. Both scale with pressure difference (ρ - ρₘ)A(s)

The model captures these physics explicitly, providing accurate friction calculations across diverse well geometries and mud weights.
