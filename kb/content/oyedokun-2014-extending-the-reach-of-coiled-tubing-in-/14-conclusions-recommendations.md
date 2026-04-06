---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/14-conclusions-recommendations"
section: "Chapter VII: Conclusions and Recommendations"
order: 14
tags:
  - "engineering/coiled-tubing"
  - "engineering/extended-reach"
  - "engineering/conclusions"
  - "engineering/dynamic-torque-arrestor"
  - "engineering/torsional-buckling"
summary: "Thirteen conclusions from the study and recommendations for future work on the two-motor CT extended-reach drilling concept."
formulas: []
---

# Chapter VII: Conclusions and Recommendations

## 7.1 Conclusions

The following thirteen conclusions are drawn from this study:

1. **Reach extension is achievable**: The two-motor CT configuration (second motor rotating the lower CT segment) can extend CT reach in directional wells by redirecting axial friction into torsional friction, effectively reducing the net axial drag.

2. **Helix angle governs the benefit**: The fraction of axial friction converted to torsional friction is governed by the helix angle γ of CT motion (set by the ratio of ROP to peripheral velocity). Optimizing γ maximizes reach extension.

3. **Torsional buckling sets the rotating length limit**: The rotating segment cannot be indefinitely long — torsional buckling of the rotating segment sets a maximum allowable length. This limit depends on CT bending stiffness, wellbore geometry, axial load, and the critical torque formulas derived in Chapter III.

4. **Critical torque increases from vertical to inclined sections**: The critical torsional buckling torque is higher in inclined sections than in vertical sections, because the wellbore wall provides better lateral confinement. This means longer rotating segments are feasible in horizontal wells — exactly where extended reach is most needed.

5. **Curved sections are the most critical**: Dog-leg sections (build/drop curves) have modified critical torques that depend on the wellbore radius of curvature. The build section is typically the governing constraint for the maximum rotating length.

6. **The dynamic torque arrestor is necessary**: Without active torque management, reactive torque from the second motor accumulates in the nonrotating segment as twist. The dynamic torque arrestor limits this torque to below the torsional buckling threshold for the nonrotating segment.

7. **The electrodrill is a viable alternative**: The electrodrill (electric downhole motor) eliminates reactive torque entirely, removing the need for the DTA. However, its higher equipment complexity and cost make it a secondary option.

8. **Full-gaged stabilizer is insufficient alone**: A passive stabilizer does not limit the maximum reactive torque — it only provides a friction-based resistance that can be exceeded. The DTA provides a more reliable and predictable torque management solution.

9. **Helical buckling lockup is the dominant reach limit in horizontal wells**: In long horizontal laterals, lockup due to helical buckling precedes the zero-hookload condition as the primary reach limit. The two-motor configuration extends the lockup-limited reach by reducing effective axial friction.

10. **Sinusoidal buckling has moderate effect on reach**: The sinusoidal buckling regime imposes intermediate drag enhancement. The helical buckling regime is far more severe, with quadratic contact force growth.

11. **Friction correction factors ζs and ζh are important**: The Lubinski-type friction correction to buckling critical loads is significant for realistic friction coefficients (μ = 0.2–0.4) and should not be neglected in reach calculations.

12. **Yield load constraint is critical in highly buckled sections**: The combined axial and bending stress from helical buckling can exceed the CT yield strength before lockup is reached in some configurations. The yield load limit Fy must be checked independently of the lockup analysis.

13. **Numerical examples confirm 20–30% reach extension**: For the representative well parameters used in worked examples, the two-motor configuration provides approximately 20–30% greater lateral reach than conventional single-motor CT drilling.

## 7.2 Recommendations for Future Work

1. **Laboratory validation**: Construct a scaled-down experimental rig to verify the torsional buckling critical torque formulas and the force transmission models developed in Chapters III and V.

2. **Field trial**: Design and conduct a controlled field trial with an instrumented CT string to measure axial force, torque, and contact force distribution along the string in real time.

3. **Dynamic torque arrestor prototype**: Develop and test a prototype DTA with programmable slip torque, including wear testing of the engagement mechanism under representative downhole conditions.

4. **Fluid dynamics coupling**: Extend the model to include the interaction between CT rotation and annular fluid flow (ECD effects), which has been neglected in this thesis.

5. **Fatigue life analysis**: Quantify the effect of CT rotation on fatigue life, particularly at the connection between the rotating and nonrotating segments (second motor crossover).

6. **Optimization of motor pairing**: Develop a systematic procedure for selecting the second motor's differential pressure and RPM characteristics to maximize reach extension subject to the constraints of bit motor performance, torsional buckling limit, and DTA slip threshold.

7. **Extension to 3D wellbore geometry**: The current analysis uses 2D wellbore profiles (inclination only). Extending to 3D (including azimuthal turns) will account for out-of-plane contact forces in dog-legs.

8. **Computational simulation**: Implement the models in a finite-element or finite-difference numerical simulation capable of handling complex wellbore geometries, variable CT properties, and coupled axial-torsional dynamics.
