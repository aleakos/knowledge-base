---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/08-conclusions-and-references"
section: "Conclusions and References"
order: 8
tags:
  - "engineering/geothermal"
  - "engineering/deep-closed-loop"
  - "engineering/eavor-loop"
  - "engineering/power-output"
  - "engineering/numerical-methods"
summary: "Summarises the five key findings of the study and lists all 30 references, covering geothermal energy, DCLGS technology, numerical modelling methods, fluid thermodynamics, and hydrogeology."
formulas: []
---

# Conclusions and References (Section 5)

## 5. Conclusions

This study provides a broad first-pass FEM evaluation of the Eavor-Loop DCLGS using typical parameter values in a simplified domain. Each variable studied lacks the depth a dedicated investigation would yield, but the work establishes a foundation for future validation or rebuttal of Eavor's claims.

### Key Findings

**i. Power Output Claim (3–8 MW per loop) — Partially Supported**

The adjusted SLA results fall within the 3–8 MW range but in the lower half (10-year mean: ~3.9 MW_th). The upper bound of Eavor's claim (8 MW) is not reproduced at 150 °C and would likely require production temperatures approaching Eavor's stated maximum of 180 °C.

**ii. Scalability with Stacked Arrays — Achievable but Sub-linear**

Ten stacked arrays produce only ~6.7× the output of a single array due to thermal interference, reducing per-array efficiency by approximately 34%. Optimising wellbore spacing could mitigate some losses. Reaching Eavor's 60 MW Geretsried target would require approximately 3 drill locations; 200 MW would require a very large subsurface footprint.

**iii. Groundwater Flow — Beneficial but Unlikely at Target Depths**

Flowing groundwater at K = 1 × 10⁻⁶ m/s increases power output by 26% compared to static conditions. However, literature indicates K values at 5 km depth are likely closer to 1 × 10⁻¹² m/s due to confining pressure closing fractures — making this benefit practically unattainable. Hydrogeological conditions are therefore largely irrelevant to DCLGS site selection, consistent with Eavor's claims in general terms.

**iv. Dispatchability via Flow Rate — Unverified at this Scale**

Model CF confirms that power output increases with flow rate, but the small model scale prevents definitive conclusions. A higher flow rate risks overcooling the rock and reducing long-term output. The claim of fully dispatchable power requires dedicated study modelling demand-following operation over multi-decade timescales.

**v. Priority for Future Work**

The most pressing tasks are:
- Replace the fixed-temperature maximum-output method with constant heat-sink terms derived from SLA/MLA outputs, enabling a more realistic picture of sustained performance.
- Model variable flow rates following real energy demand patterns to properly evaluate dispatchability.

---

## References

1. Falcone G, Liu X, Okech RR, et al. (2018) Assessment of deep geothermal energy exploitation methods: the need for novel single-well solutions. *Energy* 160: 54–63. https://doi.org/10.1016/j.energy.2018.06.144

2. Schulz SU (2008) Investigations on the improvement of the energy output of a closed loop geothermal system (CLGS). Technischen Universität Berlin, Germany.

3. van Oort E, Chen D, Ashok P, et al. (2021) Constructing deep closed-loop geothermal wells for globally scalable energy production. In SPE/IADC International Drilling Conference, Virtual, SPE-204097-MS. https://doi.org/10.2118/204097-MS

4. Wang G, Song X, Shi Y, et al. (2020) Comparison of production characteristics of various coaxial closed-loop geothermal systems. *Energy Convers Manage* 225: 113437. https://doi.org/10.1016/j.enconman.2020.113437

5. Gluyas JG, Adams CA, Busby JP, et al. (2018) Keeping warm: a review of deep geothermal potential of the UK. *Proc Inst Mech Eng Part A* 232: 115–126. https://doi.org/10.1177/0957650917749693

6. Geiser P, Marsh B, Hilpert M (2016) Geothermal: The marginalization of Earth's largest and greenest energy source. 43rd Workshop on Geothermal Reservoir Engineering, Stanford University.

7. Scherer JA, Higgins B, Muiret JR, et al. (2020) California Energy Commission consultant report: Closed-loop geothermal demonstration project. Greenfire Energy Inc. https://www.energy.ca.gov/sites/default/files/2021-05/CEC-300-2020-007.pdf

8. Sångfors B (2021) Re: Efficiency of Organic Rankine Cycle? ResearchGate.

9. Van Horn A, Amaya A, Higgins B, et al. (2020) New opportunities and applications for closed-loop geothermal energy systems. *GRC Trans* 44: 1123–1143.

10. Matuszewska D, Kuta M, Górski J (2019) The environmental impact of renewable energy technologies shown in cases of ORC-Based Geothermal Power Plant. *IOP Conf. Ser.: Earth & Environ. Sci.* 214: 012142. https://doi.org/10.1088/1755-1315/214/1/012142

11. Vany J, Hirschmiller J, Toews M (2020) Subsurface characterization methods for multilateral closed loop geothermal systems. GeoConvention 2020.

12. Fallah AH, Gu Q, Chen D, et al. (2021) Globally scalable geothermal energy production through managed pressure operation control of deep closed-loop well systems. *Energy Convers Manage* 236: 114056. https://doi.org/10.1016/j.enconman.2021.114056

13. Collins L (2021) Oil giants BP and Shell become part-owners of 'world-changing' deep geothermal innovator Eavor. Recharge News.

14. Eavor Media Kit 15 (2021) Eavor Technologies Inc. https://www.eavor.com/mediakit/

15. Oldenburg C, Pan L, Muir M, et al. (2016) Numerical simulation of critical factors controlling heat extraction from geothermal systems using a closed-loop heat exchange method. 41st Workshop on Geothermal Reservoir Engineering, Stanford University.

16. Wang G, Song X, Shi Y, et al. (2021) Heat extraction analysis of a novel multilateral-well coaxial closed-loop geothermal system. *Renewable Energy* 163: 974–986. https://doi.org/10.1016/j.renene.2020.08.121

17. Collins L (2020) Unlimited, on-demand renewable energy anywhere in the world—is Eavor-Loop climate change's holy grail? Recharge News.

18. Yuan W, Chen Z, Grasby SE, et al. (2021) Closed-loop geothermal energy recovery from deep high enthalpy systems. *Renewable Energy* 177: 976–991. https://doi.org/10.1016/j.renene.2021.06.028

19. McClure M (2021) Why deep closed-loop geothermal is guaranteed to fail. ResFrac Blog.

20. Tolooiyan A, Hemmingway P (2014) A preliminary study of the effect of groundwater flow on the thermal front created by borehole heat exchangers. *Int J Low-Carbon Technol* 9: 284–295. https://doi.org/10.1093/ijlct/cts077

21. Wu B, Ma T, Feng G, et al. (2017) An approximate solution for predicting the heat extraction and preventing the loss from a closed-loop geothermal reservoir. *Geofluids* 2017: 2041072. https://doi.org/10.1155/2017/2041072

22. Chen C, Cai W, Naumov D, et al. (2021) Numerical investigation on the capacity and efficiency of a deep enhanced U-tube borehole heat exchanger system for building heating. *Renewable Energy* 169: 557–572. https://doi.org/10.1016/j.renene.2021.01.033

23. Shao H, Hein P, Sachse A, et al. (2016) Geoenergy modelling II, shallow geothermal systems. Springer Briefs in Energy. https://doi.org/10.1007/978-3-319-45057-5

24. Böttcher N, Watanabe N, Kolditz O (2015) OpenGeoSys tutorial, Basics of heat transport processes in geothermal systems. Springer Briefs in Energy.

25. McDermott CI, Randriamanjatosoa ARL, Tenzer H, et al. (2006) Simulation of heat extraction from crystalline rocks: The influence of coupled processes of differential reservoir cooling. *Geothermics* 35: 321–344. https://doi.org/10.1016/j.geothermics.2006.05.002

26. Kolditz O (2002) *Computational Methods in Environmental Fluid Mechanics*. Springer-Verlag, Berlin. https://doi.org/10.1007/978-3-662-04761-3

27. Wagner W, Kruse A (1998) *Properties of Water and Steam: The Industrial Standard IAPWS-IF97*. Springer, Berlin.

28. Chapman DS (1986) Thermal gradients in the continental crust. *Geological Society, London, Special Publications* 24: 63–70. https://doi.org/10.1144/GSL.SP.1986.024.01.07

29. Freeze RA, Cherry JA (1979) *Groundwater*. Prentice-Hall, Englewood Cliffs, NJ.

30. Kuang X, Jiao JJ (2014) An integrated permeability-depth model for Earth's crust. *Geophys Res Lett* 41: 7539–7545. https://doi.org/10.1002/2014GL061999
