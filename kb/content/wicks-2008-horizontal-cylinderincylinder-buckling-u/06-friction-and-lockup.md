---
parent_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u"
chunk_id: "wicks-2008-horizontal-cylinderincylinder-buckling-u/06-friction-and-lockup"
section: "Friction in Long Cylinders Under Compression — Lock-Up Model"
order: 6
tags:
  - "engineering/structural-analysis"
  - "engineering/tubular-mechanics"
  - "engineering/friction"
  - "engineering/lock-up"
  - "engineering/oil-drilling"
  - "engineering/drill-pipe"
summary: "Simplified analytical model for frictional lock-up of a horizontal cylinder, deriving lock-up length by integrating the axial force balance through unbuckled and helically buckled regions."
formulas:
  - id: "F15"
    name: "Axial force equilibrium along cylinder"
    expr: "dP/dx = −μ·Wₙ(x)"
  - id: "F16"
    name: "Normal force per unit length — unbuckled region"
    expr: "Wₙ = ρAg = w"
  - id: "F17"
    name: "Normal force per unit length — helically buckled region (gravity neglected)"
    expr: "Wₙ = ΔrPʰ²/(4EI)"
  - id: "F18"
    name: "Length of unbuckled cylinder segment"
    expr: "L_unbuckled = (2√2/μ)·√(EI/(wΔr))"
  - id: "F19"
    name: "Length of helically buckled cylinder segment"
    expr: "L_helical = (√2/μ)·√(EI/(wΔr))"
  - id: "F20"
    name: "Total lock-up length"
    expr: "L_lockup = (3√2/μ)·√(EI/(wΔr))"
---

# Friction in Long Cylinders Under Compression — Lock-Up Model

## 3. Friction in Long Cylinders Under Compression

Understanding drill pipe behavior is motivated primarily by the desire to predict and avoid **lock-up** — the condition where the drill pipe is unable to progress due to frictional interactions between the inner and outer cylinders.

### Effects of Friction

Friction can have two effects on cylinder behavior:
1. **Axial/torsional load development** — friction affects how axial and torsional loads develop along the length of the horizontal drill pipe (first-order contribution to lock-up)
2. **Buckling initiation/transition loads** — friction could change buckling initiation or transition loads due to increased lateral constraint; past researchers generally assume this plays little role

### Two Definitions of Lock-Up Length

| Definition | Description |
|-----------|-------------|
| Pushing into existing hole | Distance a cylinder can be pushed before the applied pushing load increases unboundedly |
| While drilling | Length of cylinder that can maintain a given axial load at the bit before the applied load increases unboundedly |

## 3.1. Past Work

Key prior studies (all typically neglecting torsion):
- **Martinez et al. (2000)** — experiments verifying normal forces and resulting frictional forces on helically buckled horizontal cylinders
- **Wu and Juvkam-Wold (1993)** — frictional drag of helically buckled cylinders to predict lock-up; experimental evidence correlates well with theory
- **Miska et al. (1996)** — frictional effects on inclined and horizontal wellbores; considers unbuckled, sinusoidal, and helical regions; numerical method for axial load development; favorable experimental comparison
- **Kuru et al. (2000)** — extends Miska's work to curved wellbores; experimental results compare similarly favorable

## 3.2. Simplified Frictional / Lock-Up Model

The general situation: at the drilling end, there is an axial load corresponding to the load on the bit; at the pushing end, there is the applied pushing load. Three possible regions exist in the cylinder:

1. **Unbuckled** — cylinder lies flat on bottom of outer cylinder (low load end)
2. **Sinusoidal buckle** — transition region
3. **Helical buckle** — near the pushing end (high load end)

### Simplifying Assumptions

For analytical tractability, the sinusoidal buckle region is skipped entirely (cylinder transitions directly from unbuckled to helical). The normal force in the sinusoidal region is not anticipated to differ greatly from the unbuckled region.

Additional assumptions:
- Radial clearance Δr is small compared to buckle pitch p (allows axial equilibrium in undeformed coordinates)
- Transition from unbuckled to helical occurs at `Pʰ_cr = 2√2·(EIw/Δr)^(1/2)`
- Gravity term in helically buckled normal force is neglected (dominated by the Pʰ² term)

### Axial Force Equilibrium

A simple force balance on a differential element of cylinder:

```
dP/dx = −μ·Wₙ(x)
```

### Normal Force Expressions

In the **unbuckled** region:
```
Wₙ = ρAg = w
```

In the **helically buckled** region (gravity neglected):
```
Wₙ = ΔrPʰ²/(4EI)
```

### Lock-Up Length Derivation

**Length of unbuckled cylinder:**
```
L_unbuckled = (2√2/μ)·√(EI/(wΔr))
```

**Length of helically buckled cylinder** (from transition point to where axial load → ∞):
```
L_helical = (√2/μ)·√(EI/(wΔr))
```

The unbuckled region is **twice as long** as the helically buckled region.

**Total lock-up length** (first definition — pushing into existing hole):
```
L_lockup = (3√2/μ)·√(EI/(wΔr))
```

For the nominal **steel** cylinder parameters: **L_lockup ≈ 5700 m**

For the nominal **composite** cylinder parameters: **L_lockup ≈ 10,100 m**

The advantage of composite cylinders in lock-up length is captured through the `√(E/w)` scaling — despite lower stiffness, the dramatically lower effective density of composites in drilling fluid results in a longer lock-up length.
