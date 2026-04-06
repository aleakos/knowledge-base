---
parent_id: "derisi-nodate-development-of-thermoplastic-composite-t"
chunk_id: "derisi-nodate-development-of-thermoplastic-composite-t/05-tube-design-and-testing"
section: "Design of Composite Tubes for Large Deformation"
order: 5
tags:
  - "engineering/composite-materials"
  - "engineering/tubular-mechanics"
  - "engineering/structural-testing"
summary: "Strain Controlled Design methodology and iterative design, manufacture, and bending test of four composite tubes targeting aluminum 7075-T6 equivalent performance."
formulas:
  - id: "F1"
    name: "Strain Controlled Design — target strain criterion"
    expr: "epsilon_max_composite <= epsilon_failure_laminate   where epsilon_max is set equal to epsilon_failure_aluminum (~7%)"
  - id: "F2"
    name: "Bending stress in beam (elastic range)"
    expr: "sigma = M * c / I   where c = outer radius, I = moment of inertia of tube cross-section"
  - id: "F3"
    name: "Sandwich panel bending stiffness (simplified tube model)"
    expr: "EI_eff = E_face * t_face * (h/2)^2 * b   (face sheets carry bending, core carries shear)"
---

# Design of Composite Tubes for Large Deformation

## Testing Setup

A three-point and four-point bending fixture was designed and manufactured on an MTS testing machine. The reference aluminum tube was DN 80, SCH 80 pipe in 7075-T6 alloy. Three test configurations were used to characterize the load distribution effect of pads at support/loading points:
1. No pad (bare contact) — localized deformation at loading nose.
2. Rubber pad — reduces stress concentration at loading nose.
3. Composite (fiberglass) pad — further distributes load; reduces localized buckling.

The composite pad significantly improved force-strain behavior and was adopted for subsequent composite tube tests.

## Strain Controlled Design (SCD) — New Methodology

Traditional composite design is **stiffness-controlled**: the layup is chosen to match a target stiffness, and failure is a secondary check. For large-deformation applications (like landing gear), the tube must not fracture at strains below the aluminum failure strain (~7% in plastic deformation regime; ~1–1.5% maximum elastic strain in the critical cross-section).

The **Strain Controlled Design** approach:

```
1. Identify the maximum strain demand (from landing scenario analysis).
2. Select layup configurations from the material characterization database
   whose failure strain EXCEEDS the demand.
3. Satisfy strength and stiffness requirements within the strain constraint.
4. Use CLT (Classical Laminate Theory) to analyze the selected layup.
```

Target strain for the composite tube was set to match the aluminum tube failure performance.

## Design Parameters

The composite tube must have:
- Inner diameter (ID): 56 mm (same as aluminum tube)
- Outer diameter (OD): 88 mm (same as aluminum tube)
- Length: same as test span of aluminum tube

The cross-section is essentially a thick-walled composite tube. The wall is built up of multiple plies to match the required bending stiffness.

## Tube 1: [90°₂₀/0°₂₀] Layup (First Design)

This initial tube used only 0° and 90° plies. Results:
- Brittle fracture at the loading noses at very low deflection.
- Large rigid-body rotation rather than true deformation.
- Failure occurred prematurely due to localized radial stress.
- Conclusion: need for ductile (angled) plies to accommodate deformation.

## Tube 2: Second Composite Tube (Improved Layup)

Layup redesigned based on SCD and material characterization. Design process:
1. Required bending stiffness computed from aluminum tube specifications.
2. Layup selected with ±angle plies to achieve high failure strain.
3. Stress analysis by Classical Laminate Theory (CLT) verified.
4. A tapered fiberglass pad was applied at loading noses to distribute load.

Testing was conducted in five stages, progressively increasing load. Observations:
- Maximum strain reached ~3.5% during final run.
- Failure sequence: (a) fracture of innermost 90° ring, (b) delamination of layers, (c) fracture in compression zone, (d) crack propagation with local buckling.
- Force-strain curve compared favorably with aluminum tube up to ~3–3.5% strain.

## Tube 3: Third Composite Tube

Sandwich panel analogy was used to simplify the design:
- Composite tube wall treated as a sandwich: outer fiber-rich face sheets + inner core layers.
- Bending stiffness computed as EI_eff using face sheet properties and moment arm.

```
EI_eff = E_face * t_face * (h/2)^2 * b
```

Cross-section designed to provide the same EI_eff as the aluminum tube. Testing showed improved agreement with aluminum force-deflection curves.

## Tube 4: Fourth Composite Tube (With Aluminum Liner)

An aluminum liner was inserted inside the composite tube to:
- Prevent inward buckling of the innermost layer under radial bearing loads at support points.
- Provide additional stiffness in the compressive zone.

Results:
- The tube maintained its load level throughout the test — no abrupt load drop.
- Force-strain behavior closely matched the aluminum reference tube.
- Failure was progressive: compression zone fracture followed by delamination, but global load capacity was sustained.

## ANSYS Validation

A layered SOLID46 element model of Tube 4 was created in ANSYS. The model:
- Predicted progressive failure sequence consistent with experimental observations.
- Force-axial strain curves from ANSYS agreed closely with experimental data and sandwich panel analytical estimates.

## Design Procedure Flowchart

The design procedure for deformable composite tubes:
1. Define target strain demand.
2. Characterize material failure strains for candidate layups.
3. Apply Strain Controlled Design to select layup.
4. Compute stiffness using CLT or sandwich panel model.
5. Verify with ANSYS progressive failure analysis.
6. Manufacture and test prototype.
7. Iterate layup based on failure analysis.
