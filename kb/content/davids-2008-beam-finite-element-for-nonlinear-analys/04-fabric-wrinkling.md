---
parent_id: "davids-2008-beam-finite-element-for-nonlinear-analys"
chunk_id: "davids-2008-beam-finite-element-for-nonlinear-analys/04-fabric-wrinkling"
section: "Fabric Wrinkling and Nonlinear Moment-Curvature Relationship"
order: 4
tags:
  - "engineering/fabric-mechanics"
  - "engineering/buckling"
  - "engineering/nonlinear-response"
  - "engineering/moment-curvature"
summary: "Numerical method for computing pressure-dependent nonlinear moment-curvature relationships accounting for fabric wrinkling via tension-only material model and axial load effects."
formulas:
  - id: "F18"
    name: "Total strain at any cross-sectional location"
    expr: "ε = ε₀ + κ(ȳ - y)"
  - id: "F19"
    name: "Radial location as function of angle"
    expr: "y = r(1 + sin α)"
  - id: "F20"
    name: "Horizontal force equilibrium"
    expr: "∫ₐ σ dA - p₀πr² + F = 2 ∫₋π/₂^π/₂ σ rt dα - P + F = 0"
  - id: "F21"
    name: "Resultant moment"
    expr: "M = ∫ₐ σ(r - ȳ) dA = 2 ∫₋π/₂^π/₂ -rσ sin α dA"
  - id: "F22"
    name: "Wrinkling moment"
    expr: "Mw = (p₀πr³/2) - (Fr/2)"
---

## Physical Model

### Tension-Only Material Assumption

To capture fabric wrinkling and resulting nonlinear moment–curvature behavior, the fabric is treated as a **tension-only material** with constant Young's modulus E.

**Rationale**: Under compressive bending strain, the fabric cannot carry compression (only tension), resulting in:
- Local compressive buckling (wrinkling)
- Movement of the neutral axis
- Nonlinear moment–curvature relationship

This simplified model allows efficient computation while capturing the essential physics.

## Cross-Sectional Analysis

### Geometry and Strains

Consider circular cross-section with radius r. The bending neutral axis location ȳ is determined from moment–curvature analysis.

Using angle α measured from the center, the radial distance of any point is:
```
y = r(1 + sin α)                            (26)
```

The total strain at any location consists of:
- Pre-strain from pressure and axial load: ε₀
- Bending strain: κ(ȳ - y)

```
ε = ε₀ + κ(ȳ - y)                          (27)
```

where:
- ε₀ = axial strain produced by p₀ and external axial force F
- κ = curvature
- ȳ = neutral axis location (to be determined)

### Neutral Axis Location

Given curvature κ and axial load F, the neutral axis location ȳ is determined by enforcing **horizontal force equilibrium**:

```
∫ₐ σ dA - p₀πr² + F = 0

2 ∫₋π/₂^π/₂ σ rt dα - P + F = 0            (28)
```

where:
- σ = fabric stress computed from ε and constitutive relationship
- P = pressure resultant p₀πr²
- t = fabric thickness
- F = axial load (positive in compression)

For tension-only linearly elastic material:
```
σ = E·ε  if ε ≥ 0
σ = 0    if ε < 0
```

**Solution procedure**: For given κ and F, Eq. (28) is a single nonlinear equation in one unknown ȳ, solved numerically using Newton's method.

### Moment Calculation

Once ȳ is determined, the corresponding moment M is computed from:

```
M = ∫ₐ σ(r - ȳ) dA = 2 ∫₋π/₂^π/₂ -rσ sin α dA    (29)
```

## Moment-Curvature Relationship Development

### Algorithm

1. For fixed axial load F:
   - Select range of curvature values κ
   - For each κ:
     - Solve Eq. (28) for neutral axis location ȳ using Newton's method
     - Compute internal moment M using Eq. (29)
   - Generate curve: M vs. κ and ȳ vs. κ

2. Account for pressure contribution:
   - Total moment = M (fabric) + P(r - ȳ) (pressure)
   - The pressure term is zero prior to wrinkling (ȳ = r)
   - Becomes positive after wrinkling initiates

3. Compute tangent properties:
   - Tangent bending rigidity: EIT = dM/dκ
   - Neutral axis derivative: dȳ/dκ
   - Both computed using finite difference approximations

### Family of Curves

The process is repeated for different axial loads, generating a **family of moment–curvature curves** quantifying the dependence on axial load.

Implementation: MATLAB numerical computing package

## Wrinkling Moment

The **wrinkling moment Mw** is defined as the moment at which the extreme fiber compressive strain becomes zero. For tension-only linearly elastic fabric, this occurs when the fabric bending strain equals the net fabric axial strain:

```
Mw = (p₀πr³/2) - (Fr/2)                   (30)
```

where:
- First term: contribution from pressure
- Second term: reduction due to axial compression F (positive in compression)

### Key Observations

1. **Compressive axial force reduces Mw**: Compression reduces the fabric pre-strain available for resisting bending
2. **Tensile axial force increases Mw**: Tension increases available pre-strain
3. **For F = 0**: Eq. (30) agrees with Main et al. (1994) expression

### Example

For 160 mm diameter cross-section with tension-only material (E = 645 N/mm) at p₀ = 69 kPa and F = 0:
```
Mw = 55,490 N·mm
```

This matches the onset of nonlinearity shown in moment–curvature plots.

## Pressure Effects on Moment Capacity

### Results from Numerical Analysis

Example: 160 mm diameter, E = 645 N/mm, p₀ = 69 kPa

**Without pressure contribution** [M(κ) only]:
- Moment capacity decreases after wrinkling onset
- Softening behavior

**With pressure contribution** [M + P(r - ȳ)]:
- Significant increase in moment capacity post-wrinkling
- Pressure-dependent lever arm (r - ȳ) provides stabilization
- Effect more pronounced at higher pressures

### Physical Interpretation

Post-wrinkling, the pressure resultant P acting at the outer radius with moment arm (r - ȳ) creates a stabilizing moment that:
- Increases with increasing curvature (as ȳ decreases)
- Increases with increasing pressure
- Explains why higher pressures prevent softening response

## Axial Load Effects

The axial load F influences structural response in two ways:

1. **Direct effect on wrinkling moment**: Reduces Mw proportionally (Eq. 30)
2. **Effect on neutral axis movement**: Changes rate at which ȳ changes with curvature

From Eq. (28), the neutral axis location depends on:
- Pressure p₀
- Axial load F
- Curvature κ

As F increases (compression), the neutral axis moves closer to the loaded side, affecting both the bending capacity and the pressure contribution moment P(r - ȳ).

## Numerical Implementation

### Procedure Summary

```matlab
% For each value of axial load F:
for κ = 0 to κ_max
    % Solve equilibrium equation (28) for ȳ
    ȳ = solve_equilibrium(κ, F)  % Newton iteration
    
    % Compute moment contributions
    M = compute_moment(κ, ȳ, F)  % Eq. (29)
    M_pressure = P * (r - ȳ)
    M_total = M + M_pressure
    
    % Store for curve generation
    moment_curvature_curve = [κ, M_total]
end

% Compute tangent properties via finite differences
EIT = dM_total / dκ
dy_dkappa = dȳ / dκ
```

### Material Parameters

From experimental tests on Federal Fabrics-Fibers woven polyester tubes (Table 1 reference):
- Young's modulus E: pressure-dependent (645–1025 N/mm)
- Pressure-dependent values reflect tow de-crimping and inter-tow friction
