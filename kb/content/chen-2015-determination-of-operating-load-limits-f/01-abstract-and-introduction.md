---
parent_id: "chen-2015-determination-of-operating-load-limits-f"
chunk_id: "chen-2015-determination-of-operating-load-limits-f/01-abstract-and-introduction"
section: "Abstract and Introduction"
order: 1
tags:
  - "engineering/drilling"
  - "engineering/finite-element-method"
summary: "Introduction to 3D elasto-plastic FEA of rotary shouldered connections (RSC and DSC) to determine operating load limits under combined torsion and axial tension, addressing limitations of API RP 7G."
formulas: []
---

# Abstract and Introduction

## Abstract

Rotary shouldered connections (RSCs) in drill strings must withstand increasingly complex mechanical loads in deep and extended-reach wells. RSCs fail when combined torsion and tension exceed a critical threshold. Although API RP 7G provides ultimate working torques for API RSCs, its linear torque–tension relationship is only valid at low axial tensions, and it does not address double shoulder connections (DSCs).

This paper employs 3D nonlinear elasto-plastic finite element analysis (ABAQUS/Explicit) to determine ultimate working torques for both API RSC and DSC under various combinations of make-up torque and axial tension. Two operating load limit profiles (torque vs. axial tension) are provided with three operational zones:
- **Red zone**: dangerous (avoid)
- **Yellow zone**: admitted (proceed with caution)
- **Green zone**: recommended (safe operation)

Results validated against a field failure case at Tarim oilfield, China.

## Introduction

### Problem Statement

As drilling targets move deeper and well trajectories become more extreme, drill string connections face:
- High combined axial tension and torque (e.g., when freeing stuck pipe)
- Complex thread contact states that cannot be captured by linear analytical approximations

API RP 7G assumptions that cause inaccuracy at high tension:
- Tensile stress treated as uniform across combined areas
- Contribution of shear stress due to torsion is ignored
- Thread helix angle is neglected
- Linear torque–tension relationship (unrealistic when axial tension is large)

### Connection Types

Three categories of high-performance RSCs:
1. **Interchangeable with API RSC**: GPDS, VAM CDS, VAM EIS
2. **Departed from API geometry**: HT, XT, WT, FOX, KSBEAR
3. **Enhanced performance**: TurboTorque, VAM Express

Most high-performance connections are double shoulder connections (DSCs).

### Prior Art: Analytical and FEA Methods

- **Analytical**: Easy parameterization but cannot capture nonlinear thread interactions; load distribution at threads is non-uniform (max stress at first engaged tooth). API RP 7G uses simplified linear approximation.
- **2D FEA**: Used extensively but neglects thread helix angle; inaccurate for combined torsion, tension, and bending.
- **3D FEA**: More accurate but only a few published studies; prior elastic-only 3D models do not report operating load limits.

### This Work

First 3D elasto-plastic FEA study of RSCs that:
- Includes thread helix angle (true 3D geometry)
- Accounts for material nonlinearity (elasto-plastic behavior)
- Accounts for contact nonlinearity (separation, adhesion, sliding between pin and box)
- Produces polynomial-fit operating load limit curves for both API RSC and DSC
- Provides field validation
