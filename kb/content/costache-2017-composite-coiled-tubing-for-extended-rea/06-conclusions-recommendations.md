---
parent_id: "costache-2017-composite-coiled-tubing-for-extended-rea"
chunk_id: "costache-2017-composite-coiled-tubing-for-extended-rea/06-conclusions-recommendations"
section: "Conclusions and Recommendations"
order: 6
tags:
  - "engineering/coiled-tubing"
  - "engineering/composite-materials"
  - "engineering/future-work"
summary: "Key findings on CCT performance, design principles, and recommendations for future development"
formulas: []
---

## Conclusions and Recommendations

### Key Findings

#### 1. Material Selection Success

Two fiber reinforced polymers were validated as optimal candidates:

**E-glass/PEI Composite:**
- Adequate thermal resistance (~80°C)
- Good chemical resistance in downhole environment
- Reaches 10,320 ft (3146 m) without BHA in seawater
- Limited by moderate bending stiffness

**Carbon/PEEK Composite:**
- Superior thermal resistance
- Excellent chemical resistance
- Maximum reach 15,800 ft (4816 m) without BHA
- Best stiffness-to-weight ratio
- Preferred for extended reach applications

#### 2. Bending Stiffness is Critical Parameter

Parametric sensitivity analysis (Figure 5) established clear priority:

| Parameter | Sensitivity Slope | Importance | Relationship |
|-----------|-------------------|------------|--------------|
| EI (Bending stiffness) | 0.75 | **Primary** | Nearly linear |
| We (Submerged weight) | -0.7 | **Secondary** | Non-linear with threshold |
| OD (Outer diameter) | 0.66 | **Tertiary** | Non-linear effects |

**Critical insight:** Bending stiffness is most important factor for reach extension, followed closely by submerged tubular weight. In some cases, lighter pipe is insufficient because low stiffness leads to helical buckling.

#### 3. Weight Reduction Necessary but Insufficient

- Lower weight improves reach
- Cannot overcome insufficient stiffness alone
- Must be combined with adequate bending rigidity
- 35% reach reduction with BHA for low-stiffness systems (C1)
- Only 7% reduction for high-stiffness steel (due to high baseline stiffness)

**Conclusion:** Weight optimization must accompany stiffness optimization.

#### 4. Friction Coefficient Major Impact

Low friction produces dramatic reach increases:

**Friction reduction from μ = 0.2 to 0.16:**
- Minimum reach increase: 29%
- Maximum reach increase: 53% (carbon/PEEK thin)
- Effect larger with BHA for all configurations
- Can increase reach by exponential factor in low-weight systems

**Implication:** Surface treatment to reduce friction coefficient is critical optimization opportunity.

#### 5. Diameter Optimization Double Benefit

Maximizing CCT outer diameter provides:
1. Increased bending stiffness (4th power relationship)
2. Reduced radial clearance with wellbore
   - Tighter fit prevents helical buckling
   - Steep reach increase after OD/ODmax > 0.7

**Trade-off:** Larger diameter increases weight slightly.

#### 6. Layup Design Optimization

**Layer number effect:**
- Doubling layers from 9 to 18 increases BL1 by 17-19%
- More layers increase axial stiffness significantly
- Increases weight modestly

**Angle selection:**
- Consecutive angle [10, -30]₉ provides improvement
- Balanced [±10, ±30]ₙ layup performs best
- Minimizes through-laminate stresses
- Improves compression performance

**Thickness consideration:**
- Thicker walls reduce buckling stresses 48%
- Thinner walls achieve 5% greater reach
- 20% stress reduction in thick variants

#### 7. Hybrid Composites Not Beneficial

Hybrid carbon/e-glass systems (C5, C6):
- Do not show significant gain over pure e-glass/PEI
- Stiffness increase insufficient
- Submerged weight similar
- No cost or performance justification
- Require FEA for analysis (CLT underestimates stiffness by 10-23%)

**Recommendation:** Use pure material systems.

#### 8. Performance vs. Steel CT

**Horizontal reach improvement:** 180% over steel CT
- Steel 2.375" with μ = 0.2: ~9,180 ft (2,798 m)
- Carbon/PEEK optimized: 15,800-18,320 ft (4,816-5,584 m)
- Carbon/PEEK with optimized layup and BHA: Up to 12,860 ft

**Key enablers:**
- Superior stiffness-to-weight ratio
- Lower friction coefficient (estimated μ = 0.16-0.20 for composites)
- Lighter construction enabling larger diameters relative to weight

#### 9. FEA Validation of CLT

**For pure composites:**
- Small differences between FEA and CLT (max 0.10%)
- CLT sufficient for reach analysis
- FEA useful for maximum accuracy

**For hybrid laminates:**
- FEA essential (shows 10-23% higher stiffness than CLT)
- CLT significantly underestimates performance

### Design Principles Established

1. **Stiffness-first approach:** Prioritize bending stiffness within weight budget
2. **Weight optimization:** Minimize weight after achieving required stiffness
3. **Layup efficiency:** Use balanced ± angles and increased layer count
4. **Diameter maximization:** Push outer diameter toward wellbore tolerance limits
5. **Material selection:** Carbon/PEEK for extended reach applications
6. **Stress reduction:** Accept 5% reach penalty for 48% stress reduction in high-cycle operations

### Recommendations for Future Work

#### Immediate Next Steps

1. **Laminate optimization:**
   - More detailed optimization of layup configuration
   - Variable thickness optimization (thinner for reach, thicker for stiffness)
   - Progressive thickness profiles along length

2. **Failure analysis:**
   - Implement compression failure criteria (laminates sensitive to compression)
   - Matrix failure analysis
   - Delamination assessment under cyclic loading

3. **Combined loading:**
   - Internal and external pressure combined with bending
   - Fatigue resistance analysis
   - Stress concentration effects

4. **Prototyping and testing:**
   - Small-scale prototype manufacturing
   - Mechanical testing validation:
     - Collapse pressure testing
     - Burst pressure testing
     - Bending stiffness measurement
     - Buckling load testing
   - Field trial preparation

#### Advanced Development

1. **Surface engineering:**
   - Friction reduction coating development
   - Anti-corrosion surface treatments
   - Chemical resistance enhancement

2. **Process optimization:**
   - Manufacturing methods for 6600+ m lengths
   - Quality control procedures
   - Defect inspection protocols

3. **Field validation:**
   - Extended reach well applications
   - Real wellbore condition testing
   - Operational monitoring and data collection

4. **Systems integration:**
   - Coupling and connection design
   - Spooling equipment compatibility
   - Injector system requirements

### Economic Implications

The 180% reach improvement over steel enables:

- **Access to previously unreachable reserves** in mature fields
- **Development of extended-reach wells** with greater horizontal displacements
- **Cost reduction** per unit length drilled/completed
- **Environmental benefits** through reduced infrastructure needs

### Industry Impact

This study demonstrates that **composite coiled tubing systems are vastly superior to their steel counterparts** in reach capability. Key enabling factors:

1. Composite materials provide superior specific stiffness (stiffness per unit weight)
2. Lower friction characteristics reduce loading in horizontal sections
3. Optimized design can achieve dramatic reach extensions
4. Material technology is mature and field-proven

**Future industry standard:** Based on the performance advantages demonstrated, composite coiled tubing will become the new industry standard for extended-reach applications within the next decade.

### Critical Success Factors

1. **Manufacturing scalability:** Ability to produce continuous lengths of 6600+ m
2. **Quality assurance:** Consistent material and layup properties
3. **Cost competitiveness:** Production costs approaching or below steel CT
4. **Field validation:** Successful long-term performance in real wells
5. **Connection reliability:** Proven coupling systems for composite tubes
6. **Regulatory acceptance:** Industry standard development and certification

### Closing Remarks

The comprehensive analysis presented demonstrates the feasibility and advantages of composite coiled tubing. The combination of higher stiffness-to-weight ratio, lower friction coefficient, and optimized laminate design provides reach capabilities that exceed steel systems by 180%. With continued development in manufacturing, failure analysis, and field testing, composite coiled tubing represents the future of extended-reach well completion and drilling operations.
