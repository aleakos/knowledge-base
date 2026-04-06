---
parent_id: "prurapark-2009-torque-and-drag-calculations-in-threedim"
chunk_id: "prurapark-2009-torque-and-drag-calculations-in-threedim/01-introduction-and-literature-review"
section: "Introduction and Literature Review"
order: 1
tags:
  - "engineering/drilling"
  - "engineering/tubular-mechanics"
  - "engineering/well-planning"
summary: "Motivation for improved torque and drag modeling in 3D wellbores, overview of the soft-string model, and literature on tortuosity, stress concentration, and buckling."
formulas: []
---

# Introduction and Literature Review

## Research Context

This PhD dissertation (Texas A&M University, May 2009) develops improved mathematical models and software for torque and drag (T&D) calculations in three-dimensional wellbores. The work is motivated by the observation that, despite T&D software existing since the early 1990s, the underlying mathematical models have changed minimally over two decades — while modern extended-reach and horizontal wells have grown significantly more complex.

## Why Torque and Drag Modeling Matters

Excessive torque and drag can cause:
- Overloading the top drive (topdrive capacity exceedance).
- Drillpipe fatigue and failure.
- Inability to slide (steerable assembly lock-up in extended-reach wells).
- Casing wear.
- Hole enlargement and mechanical borehole instability.
- Pipe buckling (sinusoidal and helical), which further increases drag and can lead to lock-up.

T&D modeling is used during well planning to:
- Optimize wellbore trajectory to minimize friction.
- Select appropriate tubular dimensions and grades.
- Choose drilling fluid type (oil-based mud lubricates better than water-based mud).
- Define maximum reach limits for extended-reach wells.
- Identify operating parameters (e.g., rotate to bottom vs. sliding).

## Literature Review

### T&D Models for 3D Wellbores

The soft-string model (Mason and Chen, 2007) is the dominant approach:
- Models the drillstring as a flexible rope (chain) — ignores tubular bending stiffness.
- The string transmits axial tension and torque, resisted by friction at wellbore contact points.
- Contact force (normal force between pipe and wellbore wall) drives friction.
- **Soft-string model** is used because it is computationally simple and generally adequate for planning purposes.

Wu and Juvkam-Wold (1991) published foundational 3D T&D equations that are used as the benchmark reference throughout this dissertation.

### Tortuosity

Wellbore tortuosity refers to high-frequency micro-scale oscillations in inclination and azimuth superimposed on the planned trajectory. Sources:
- Formation heterogeneity.
- BHA (bottom hole assembly) dynamics.
- Bit walk and formation anisotropy.

Tortuosity increases effective friction significantly — it is a major source of discrepancy between planned T&D and field measurements. The dissertation develops a mathematical model to account for tortuosity in torque calculations.

### Stress Concentration Factor (SCF)

Tool joints (upsets in drill pipe) create geometric discontinuities that concentrate stress under combined tension, torsion, and bending. The SCF is particularly relevant at shouldered connections. The dissertation derives mathematical models for SCF at tool joint locations.

### Buckling

Two buckling modes are relevant in wellbores:
- **Sinusoidal buckling**: pipe bends into a sinusoidal shape lying in the low side of the wellbore; occurs first at lower compressive loads.
- **Helical buckling**: pipe forms a helix inside the wellbore; occurs at higher loads; dramatically increases contact force and drag.

Mason and Chen (2007) provide criteria for onset of each buckling mode. Helical buckling must be avoided in practice as it can cause lock-up.

## Dissertation Objectives

1. Develop more accurate 3D T&D mathematical models for build, hold, drop, and turning wellbore sections — both for lowering pipe and for pulling pipe.
2. Model the effect of wellbore tortuosity on torque.
3. Derive a mathematical model for the stress concentration factor at tool joint connections.
4. Model buckling onset in deviated wellbores.
5. Implement Euler numerical method for computing T&D when analytical solutions are impractical.
6. Develop user-friendly 3D T&D software validated against published benchmark cases.
