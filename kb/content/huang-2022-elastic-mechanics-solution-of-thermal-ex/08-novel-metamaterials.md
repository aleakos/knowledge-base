---
parent_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex"
chunk_id: "huang-2022-elastic-mechanics-solution-of-thermal-ex/08-novel-metamaterials"
section: "Novel NTE Metamaterials Design"
order: 8
tags:
  - "engineering/metamaterials"
  - "engineering/thermal-expansion"
  - "engineering/honeycomb-structures"
  - "engineering/chiral-structures"
summary: "Design of tetra chiral and anti-tetra chiral metamaterials using bi-material curved beams to achieve enhanced negative thermal expansion"
formulas:
  - id: "F22"
    name: "Chord Length (Tetra/Anti-tetra Chiral)"
    expr: "l = 2b \\sin(\\theta/2)"
  - id: "F23"
    name: "Ring Distance (Tetra Chiral)"
    expr: "L = 2\\sqrt{\\left[r\\cos(\\theta/2)\\right]^2 + \\left[l - r\\sin(\\theta/2)\\right]^2}"
  - id: "F24"
    name: "Ring Distance Change (Tetra Chiral)"
    expr: "\\Delta L = 2\\sqrt{\\left[(r + \\Delta r)\\cos((\\theta+\\Delta\\theta)/2)\\right]^2 + \\left[(l+\\Delta l) - (r+\\Delta r)\\sin((\\theta+\\Delta\\theta)/2)\\right]^2} - L"
  - id: "F25"
    name: "CTE - Tetra Chiral"
    expr: "\\bar{\\alpha}_{chiral} = \\frac{1}{L}\\left[\\alpha_2 r^2 + \\alpha l^2 - rl\\left(\\alpha\\sin(\\theta/2) + \\alpha_2\\sin(\\theta/2) + \\cos(\\theta/2)\\frac{B_1\\theta}{E_1\\Delta T}\\right)\\right]"
  - id: "F26"
    name: "CTE - Anti-tetra Chiral"
    expr: "\\bar{\\alpha}_{anti-chiral} = \\frac{1}{L}\\left[\\alpha l - 2\\alpha_2 r\\sin(\\theta/2) - 2r\\cos(\\theta/2)\\frac{B_1\\theta}{E_1\\Delta T}\\right]"
---

## Novel Metamaterial Design Concept

### Design Strategy

Traditional approaches to NTE metamaterials use **straight bi-material beams** as ligaments in chiral/anti-chiral honeycomb structures. The innovation in this paper is to **replace straight ligaments with bi-material curved beams**, leveraging the enhanced bending characteristics of curved geometry.

**Key Insight**: Curved bi-material beams exhibit superior NTE effects compared to straight beams due to increased curvature changes during thermal deformation.

### Two Proposed Structures

**Structure 1: Anti-tetra Chiral Honeycomb (Figure 10a)**
- Four curved ligaments arranged in anti-tetra pattern
- Rings positioned at junction vertices
- Ligaments bend outward from structure center

**Structure 2: Tetra Chiral Honeycomb (Figure 10b)**
- Four curved ligaments arranged in tetra pattern  
- Rings positioned along horizontal and vertical axes
- Ligaments bend in mixed directions
- More complex configuration with nested rings

## Thermal Expansion Mechanism

### How Curvature Changes Produce NTE

When ambient temperature rises:

1. **Ligament curvature increases**: Bi-material curved beams bend more sharply
2. **Ring distances decrease**: Increased curvature pulls adjacent rings closer
3. **Structural contraction**: Net effect produces negative macroscopic CTE
4. **Ring rotation amplification**: In chiral structures, ring rotation further amplifies NTE effect

**Physical Principle**: The bending of bi-material beams during thermal deformation is the basis of realizing the NTE effect. In chiral structures, this bending leads to ring rotation, which amplifies the overall NTE effect.

## Mathematical Formulation

### Tetra Chiral Honeycomb

**Geometry Parameters**:
- Curved ligament arc radius: b
- Central angle: θ
- Ring radius: r
- Distance between rings: L

**Chord length:**

```
l = 2b sin(θ/2)
```

**Distance between two rings:**

```
L = 2√{[r cos(θ/2)]² + [l - r sin(θ/2)]²}
```

**Change in ring distance after temperature rise ΔT:**

```
ΔL = 2√{[(r+Δr)cos((θ+Δθ)/2)]² + [(l+Δl)-(r+Δr)sin((θ+Δθ)/2)]²} - L
```

**Equivalent CTE:**

From "Derivation, simplification and verification of analytical formulas" section:

```
lim_{ΔT→0} [Δr/ΔT] = α₂r

lim_{ΔT→0} [Δθ/ΔT] = ∂²uφ/(∂ρ∂ΔT) = 2B₁θ/(E₁ΔT)

lim_{ΔT→0} [Δl/ΔT] = ᾱl
```

Therefore:

```
ᾱ_chiral = lim_{ΔT→0} [ΔL/(L·ΔT)]

= (1/L²)[∂L/∂r · Δr/ΔT + ∂L/∂θ · Δθ/ΔT + ∂L/∂l · Δl/ΔT]

= (4/L²){α₂r² + ᾱl² - rl[ᾱ sin(θ/2) + α₂ sin(θ/2) + cos(θ/2) · B₁θ/(E₁ΔT)]}
```

### Anti-tetra Chiral Honeycomb

**Key Difference**: Ring distance formula differs from tetra structure:

```
L = l - 2r sin(θ/2)
```

**Equivalent CTE:**

```
ᾱ_anti-chiral = (1/L)[ᾱl - 2α₂r sin(θ/2) - 2r cos(θ/2) · B₁θ/(E₁ΔT)]
```

### Comparison with Straight-Beam Structures

When θ = 0° (limit of straight beam):
- L₀ = l₀ - 2r sin(0) = l₀ (constant)
- Curved beam formulas reduce to straight beam case
- **Difference**: For θ > 0°, curved beams produce higher magnitude negative CTE

## Validation and Performance

### Finite Element Verification

**Element type**: 8-node plane stress element (CPS8R)
**Boundary conditions**: Antisymmetric loading on ligament ends
**Temperature load**: 1°C uniform heating

### Accuracy Results

**Tetra Chiral Honeycomb**:
- Maximum relative error vs. FEM: < 9%
- Analytical results generally consistent with numerical simulation
- Error increases slightly with central angle

**Anti-tetra Chiral Honeycomb**:
- Maximum relative error vs. FEM: < 6%
- Better accuracy than tetra structure
- Smoother convergence with central angle

### Parameter Analysis Results

**Effect of Central Angle θ**:
- Both structures show increasing NTE effect with larger θ
- Chiral and anti-chiral structures show different angular sensitivities
- Demonstrates that curved beam replacement enhances NTE significantly

**Comparison with Previous Designs (Yu et al., 2019)**:
- Previous work: θ = 0° (straight beams)
- This work: variable θ with curved beams
- **Result**: Proposed metamaterials achieve significantly higher (more negative) NTE values
- Design flexibility enables optimization across wide parameter space

## Design Advantages

1. **Enhanced NTE magnitude**: Curved beams produce stronger NTE effects than straight beams
2. **Broad design space**: θ can be optimized from 0° to 180°
3. **Parametric flexibility**: Can independently adjust h/b, θ, h₁/h₂, and ring geometry
4. **Manufacturing feasible**: Compatible with 3D printing of metamaterials
5. **Scalability**: Analytical formula enables rapid design iteration at multiple scales
6. **Performance prediction**: High accuracy (< 9% error) enables confident design optimization
