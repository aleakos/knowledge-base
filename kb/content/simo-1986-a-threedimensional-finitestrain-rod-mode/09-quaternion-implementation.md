---
parent_id: "simo-1986-a-threedimensional-finitestrain-rod-mode"
chunk_id: "simo-1986-a-threedimensional-finitestrain-rod-mode/09-quaternion-implementation"
section: "Quaternion Parametrization and Update Algorithm"
order: 9
tags:
  - "engineering/rotation-algorithms"
  - "engineering/finite-element-method"
  - "engineering/mathematics/quaternions"
summary: "Singularity-free quaternion implementation for rotation updates using Spurrier's algorithm"
formulas:
  - id: "F1"
    name: "Quaternion representation"
    expr: "q = q₀ + q̂ = q₀ + q₁e₁ + q₂e₂ + q₃e₃"
  - id: "F2"
    name: "Unit quaternion constraint"
    expr: "Σᵢ₌₀³ qᵢ² = 1"
  - id: "F3"
    name: "Quaternion from rotation vector"
    expr: "q = cos(||θ||/2) + (θ/||θ||) sin(||θ||/2)"
  - id: "F4"
    name: "Pseudo-vector of rotation"
    expr: "θ̄ = q̂/q₀ = 1 + θ̄"
  - id: "F5"
    name: "Orthogonal matrix from quaternion"
    expr: "Q = [q₀²+q₁²-½  q₁q₂-q₃q₀  q₁q₃+q₂q₀ ; q₂q₁+q₃q₀  q₀²+q₂²-½  q₂q₃-q₁q₀ ; q₃q₁-q₂q₀  q₃q₂+q₁q₀  q₀²+q₃²-½]"
  - id: "F6"
    name: "Quaternion extraction"
    expr: "q₀ = ±½√(1 + Tr(Q)), qᵢ = ±½(Qₖⱼ - Qⱼₖ)/q₀"
---

## Quaternion Representation

From a computational standpoint, an implementation based on quaternion parameters proves to be the optimal choice that:
- Avoids singularity in the rotation parametrization
- Minimizes storage requirements
- Enables efficient computation

### Quaternion Definition

Quaternions are elements of the hypercomplex space, expressed as:

```
q = q₀ + q̂ = q₀ + q₁e₁ + q₂e₂ + q₃e₃
```

where:
- q₀ represents the scalar part
- q̂ = (q₁, q₂, q₃) represents the vector part
- For unit quaternions: Σᵢ₌₀³ qᵢ² = 1

There is a one-to-one correspondence between unit quaternions and orthogonal matrices (rotations in SO(3)), where each rotation is represented by a pair ±q.

## Quaternion from Rotation Vector

Given an incremental rotation vector θ = δ₁e₁ + δ₂e₂ + δ₃e₃, the associated unit quaternion is:

```
q = cos(||θ||/2) + (θ/||θ||) sin(||θ||/2)
```

The pseudo-vector of rotation θ̄ is then:

```
θ̄ = q̂/q₀ = 1 + θ̄
```

### Singularity Issues

Singularity occurs when ||θ|| = (2n+1)π, i.e., when q₀ = cos(||θ||/2) = 0. The exponential map formula becomes singular as ||θ̄|| → (2n+1)π.

For practical implementations, the quaternion parametrization elegantly avoids this by using the four parameters directly, with the constraint that q₀² + ||q̂||² = 1.

## Orthogonal Matrix from Quaternion

An orthogonal matrix Q is computed from its associated unit quaternion q by:

```
     [q₀²+q₁²-½   q₁q₂-q₃q₀   q₁q₃+q₂q₀]
Q =  [q₂q₁+q₃q₀  q₀²+q₂²-½   q₂q₃-q₁q₀]
     [q₃q₁-q₂q₀   q₃q₂+q₁q₀  q₀²+q₃²-½]
```

This ensures Q is automatically orthogonal by construction and provides numerical stability.

## Quaternion Extraction Algorithm

Given an orthogonal matrix Q, the associated quaternion parameters must be extracted carefully to maintain numerical accuracy. The naive formulas suffer from round-off errors near 0° and 180° rotations.

### Spurrier's Algorithm

The algorithm proposed by Spurrier was reported to be the fastest and most robust. The procedure is:

1. Find M = max(Tr(Q), Q₁₁, Q₂₂, Q₃₃)
2. If M = Tr(Q), then:
   ```
   q₀ = ½√(1 + Tr(Q))
   qᵢ = ½(Qₖⱼ - Qⱼₖ)/q₀  for i = 1,2,3
   ```
3. Otherwise, let i be such that M = Qᵢᵢ:
   ```
   qᵢ = ½√(Qᵢᵢ + ½(1 - Tr(Q)))
   q₀ = ½(Qₖⱼ - Qⱼₖ)/qᵢ
   qₗ = ½(Qᵢₗ + Qₗᵢ)/qᵢ  for l = j,k
   ```

where i,j,k is a cyclic permutation of 1,2,3.

## Configuration Update with Quaternions

The update procedure using quaternions is:

1. **Retrieve** the quaternion qₙ from storage and compute Aₙ
2. **Compute** the quaternion q associated with the incremental rotation θ
3. **Compute** exp[Θ] from q using the quaternion formula
4. **Perform** the configuration update: Aₙ₊₁ = exp[Θ]Aₙ
5. **Extract** qₙ₊₁ from Aₙ₊₁ using Spurrier's algorithm and store

### Storage Efficiency

Quaternion parameters are kept in the database to minimize storage:
- Quaternions: 4 parameters per node
- Orthogonal matrices: 9 parameters per node
- Storage saving: ~56% reduction

## Curvature Update with Quaternions

The spatial curvature vector is updated in two steps:

1. Compute the axial vector associated with exp[Θ]Ωₙexp[-Θ]
2. Evaluate the axial vector β of (d exp[Θ]/dS)exp[-Θ] using:

```
β = (sin||θ||/||θ||)θ' + (1 - sin||θ||/||θ||)(θ·θ'/||θ||²)θ 
    + ½(sin(||θ||/2)/(||θ||/2))²(θ × θ')
```

obtained from the expressions in Appendix A. The sum of these two axial vectors yields the updated spatial curvature.
