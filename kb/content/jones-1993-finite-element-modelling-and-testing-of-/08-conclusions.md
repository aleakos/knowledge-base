---
parent_id: "jones-1993-finite-element-modelling-and-testing-of-"
chunk_id: "jones-1993-finite-element-modelling-and-testing-of-/08-conclusions"
section: "Discussion, Conclusions and Further Work"
order: 8
tags:
  - "engineering/composite-materials"
  - "engineering/finite-element-method"
  - "engineering/filament-winding"
summary: "Summary of achievements, overall conclusions, and recommendations for further work on automatic FE modelling of filament-wound structures"
formulas: []
---

## Discussion, Conclusions and Further Work

### Achievements

**FILFEM I (Axisymmetric components):**
- Successfully developed and tested automatic FE model generation from CADFIL I data
- Validated against experiments and analytical solution for pinched filament-wound GRP cylinder
- Demonstrated that fitted material properties give excellent stiffness predictions
- Provides a practical engineering tool for axisymmetric filament-wound component analysis

**FILFEM II (Non-axisymmetric components):**
- Successfully developed to basic operational level
- Tested using fibre path data from manufactured filament-wound elbows
- Foundation established for further development and experimental verification

**Material testing:**
- Pinched ring and roller-assisted split disc tests developed as novel methods for property characterisation
- Back-fitting technique developed for deriving unidirectional properties from laminate test data
- Halpin-Tsai predictions compared with experimental results

**Filament-wound elbow:**
- Manufacturing process for non-axisymmetric elbows established using a washable plaster mandrel
- Fibre path data generated using CADFIL II and used to test FILFEM II

### Key Conclusions

1. The link between CNC filament winding CAD/CAM data and finite element analysis can be automated effectively, enabling FE analysis of filament-wound components to be performed without laborious manual model generation
2. Material property determination remains the critical uncertainty in FE analysis of filament-wound composites; material quality and consistency are essential
3. Classical lamination theory provides adequate first-approximation properties for many applications, but real material behaviour departs significantly from ideal under conditions of large strain or material damage
4. The pinched ring test is a useful and novel method for property characterisation; the roller-assisted split disc test provides complementary data

### Recommendations for Further Work

**FILFEM I:**
- Improve handling of turnaround regions and dome areas
- Extend to additional FE codes beyond PAFEC and ABAQUS

**FILFEM II:**
- Experimental verification using instrumented elbow specimens under known loads
- Extension to larger class of non-axisymmetric geometries (tee-pieces, cranked arms)
- Automated mesh refinement in high-curvature regions

**Material testing:**
- Adopt glass/epoxy or other more linear-elastic composite systems
- Improve specimen manufacture quality (resin content control, void elimination)
- Investigate rate and temperature dependence of elastic properties

**General:**
- Apply the linked CADFIL/FE system to practical engineering design problems
- Incorporate strength/failure analysis (in addition to stiffness) into the automated analysis pipeline
