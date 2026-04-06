---
parent_id: "costache-2017-composite-coiled-tubing-for-extended-rea"
chunk_id: "costache-2017-composite-coiled-tubing-for-extended-rea/02-materials"
section: "Materials Selection"
order: 2
tags:
  - "engineering/composite-materials"
  - "engineering/matrix-resins"
  - "engineering/fiber-reinforcement"
  - "engineering/material-properties"
summary: "Selection of matrix resins and fiber types for CCT applications with chemical and thermal resistance analysis"
formulas: []
---

## Materials Selection

Matrix resin selection is critically important for composite performance. The resin must deform at least as much as fibers to enable optimal fiber performance, provide good fiber-matrix adhesion for load transfer, resist corrosion from saltwater and wellbore chemicals, and withstand stress cycling.

### Resin Systems Evaluation

Seven resin systems were compared across key properties:

| Resin Type | Ultimate Strain ε [%] | Glass Transition Tg [°C] | H₂S | CO₂ | HCl | Organic Acids |
|-----------|----------------------|------------------------|-----|-----|-----|----------------|
| Epoxy | 1.96 | 75 | exec. | exec. | exec. | exec. |
| PA | >2 | 65-75 | exec. | fair | exec. | fair |
| PE | 11 | 82 | exec. | exec. | exec. | exec. |
| PP | 5.23 | 80 | good | good | good | good |
| PEI | 4 | 213 | exec. | good | exec. | good |
| PVDF | 20 | 149 | exec. | exec. | exec. | exec. |
| PEEK | 40 | 143 | exec. | exec. | fair | good |

#### Strain Performance

Epoxy has the lowest ultimate strain at 1.96%. Thermoplastics offer superior strain:
- Polyamide (PA): 2-20%
- Polypropylene (PP) copolymer: 5.23% (lowest for PP due to cross-linking for fiber bonding)
- Polyethylene (PE): 11%
- Polyetherimide (PEI): 4% (minimum yield)
- Polyvinylidene difluoride (PVDF): 20%
- Polyether ether ketone (PEEK): 40%

**Critical note:** Usable strength is significantly lower than ultimate strength. For polyester/glass laminates, usable strength is only 10% of ultimate strength.

#### Thermal Resistance

Glass transition temperature (Tg) is crucial for downhole conditions (~80°C). High-performance polymers offer superior thermal stability:
- PEI: Tg = 213°C (amorphous)
- PVDF: Tg = 149°C (semi-crystalline)
- PEEK: Tg = 143°C (semi-crystalline)

PEEK disadvantage: Processing temperature exceeds 350°C.

#### Chemical Resistance

Downhole environments contain H₂S, HCl, CO₂, and organic acids with high pH and abrasive particles.

**Epoxy:** Excellent resistance to H₂S, HCl, CO₂ and acids at room temperature.

**PA:** Excellent HCl and H₂S resistance; good CO₂ in gas (degradation in liquid); fair acid resistance. Limitation: absorbs moisture, unsuitable for underwater applications.

**PE:** Excellent resistance to H₂S, HCl, CO₂, and organic acids.

**PP:** Resistant to H₂S, HCl, CO₂, and organic acids.

**PEI:** Excellent wear resistance; handles HCl below 20% and sulfuric acid well.

**PVDF:** Very good resistance to all target chemicals.

**PEEK:** Resistant to H₂S, HCl, and acids. Note: Great resistance in gaseous HCl but various attack levels in aqueous solutions.

#### Selection for Downhole Conditions

For downhole temperature of ~80°C, the choice narrows to **PEI, PVDF, and PEEK**. Fatigue loading in carbon/epoxy composites is very low at elevated temperatures compared to static threshold.

### Fiber Reinforcement

#### Material Options

Aramid fibers were excluded due to:
- High cost
- Very low compressive strength
- Difficulty in cutting (prevents emergency severance by blow-out preventer)

#### E-Glass vs. Carbon Comparison

**E-Glass Characteristics:**
- Tensile strain: εₜ = 4.3% (s-glass: 4.4%)
- Similar strain in tension and compression
- Larger failure strain beneficial

**Carbon Characteristics:**
- Average tensile strain: 1.9%
- Compressive strain significantly lower than tensile
- Lower strain carbon: εₜ = 1.05%, εc = 0.85% (20% reduction in compression)
- Excellent corrosion resistance in CO₂ and other chemicals

**Selection rationale:** E-glass offers superior strain properties, making it the preferred candidate.

### Final Material Combinations

Two resin/fiber combinations selected for detailed analysis:

| Property | E-glass | Carbon | PEI | PEEK |
|----------|---------|---------|-----|------|
| E₁ [GPa] | 72.3 | 230 | 4.5 | 3.5 |
| E₂ [GPa] | 72.3 | 16 | 4.5 | 3.5 |
| G₁₂ [GPa] | 30 | 28.3 | - | - |
| ν₁₂ | 0.2 | 0.2 | 0.38 | 0.38 |
| ρ [kg/m³] | 2550 | 1800 | 1270 | 1320 |
| εₜ [%] | 3.2 | 2.1 | 7 | 20 |

**Candidates:** Carbon/PEEK and E-glass/PEI

These combinations balance thermal resistance, chemical resistance, strain capability, and processability for downhole applications.

### Lamina Properties (Vf = 0.5)

| Property | E-g/PEI | E-g/PEEK | C/PEI | C/PEEK |
|----------|---------|----------|-------|--------|
| E₁ [GPa] | 38.4 | 37.9 | 117.2 | 116.7 |
| E₂ [GPa] | 10.8 | 8.6 | 8.1 | 6.8 |
| G₁₂ [GPa] | 3.9 | 3.1 | 3.9 | 3.1 |
| ν₁₂ | 0.29 | 0.29 | 0.29 | 0.29 |

**Key observation:** Matrix choice has little influence on longitudinal modulus E₁, but significantly affects transverse modulus E₂. Low carbon fiber transverse stiffness results in very low E₂ for carbon-based laminates.
