---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/06-filfem-model-generation"
section: "FILFEM: The CADFIL/Finite Element Link"
order: 6
tags:
  - "engineering/composite-materials"
  - "engineering/finite-element-method"
  - "engineering/filament-winding"
  - "engineering/software"
summary: "Architecture and operation of the FILFEM I and FILFEM II programs that automatically generate FE models of filament-wound structures from CADFIL winding data"
formulas: []
---

## FILFEM: Automatic FE Model Generation for Filament-Wound Structures

### Motivation

Existing mesh generation packages are designed for isotropic components and cannot generate the laminate structure data (ply directions, thicknesses, lamination sequences) required for FE analysis of filament-wound structures. The FILFEM programs bridge this gap by extracting this information directly from the CADFIL winding data.

### FILFEM I: Axisymmetric Components

**Input**: CADFIL I fibre path data files (geodesic or friction-steered paths on an axisymmetric mandrel)

**Output**: FE model data file compatible with PAFEC or ABAQUS, including:
- Node co-ordinates and element topology (mesh)
- Laminate data for each element: ply angles, thicknesses, material properties
- Boundary conditions

**Key challenge**: The alternating lamination sequence. As successive windings interleave, adjacent elements may have different local ply sequences (Fig. 1.3 in thesis). FILFEM I handles this by tracking the winding sequence and assigning appropriate laminate data to each element.

**Operation**:
1. Read mandrel geometry and fibre path co-ordinates from CADFIL I output
2. Divide mandrel surface into elements; for each element, determine the fibre layers that cross it
3. For each fibre layer crossing the element, extract local ply angle (from fibre path tangent) and ply thickness (from roving cross-section and spacing)
4. Assemble element laminate data and write PAFEC/ABAQUS input file

### FILFEM II: Non-Axisymmetric Components

Three programs form the FILFEM II suite:

| Program | Purpose |
|---------|---------|
| MESHGEN | Generates the FE mesh from mandrel surface definition |
| MODELGEN | Assigns laminate properties to mesh elements using CADFIL II fibre path data |
| FEDATGEN | Assembles final FE data file in target system format |

**MESHGEN**: Reads the faceted mandrel surface from CADFIL II and generates a structured FE mesh. The mesh must conform to the mandrel surface facets.

**MODELGEN**: For each element in the mesh, identifies which fibres from the CADFIL II winding data cross that element, extracts local fibre angles and thicknesses, and writes a neutral intermediate file.

**FEDATGEN**: Converts the neutral file to the specific input format required by the FE code (PAFEC or ABAQUS).

**Key differences from FILFEM I**: The volume of data is much larger; the algorithms for non-axisymmetric geometry are entirely different from axisymmetric; the fibre path data from CADFIL II is already defined as a family of paths rather than a single geodesic.

### Validation of FILFEM I

FILFEM I was validated using the pinched cylinder test case (Chapter 7):
- Automatically generated FE models of a filament-wound GRP cylinder
- Compared diametral deflections from FE against experiments and an extended analytical solution
- Results using best-fitted material properties showed excellent agreement with experimental data

### Recommendations for Further Work

- FILFEM I: Improve handling of turnaround regions (dome areas of axisymmetric components)
- FILFEM II: Experimental verification using manufactured elbow specimens; extension to other non-axisymmetric geometries
- Both systems: Extend to output for additional commercial FE codes
