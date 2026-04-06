---
parent_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop"
chunk_id: "kelly-2022-numerical-modelling-of-a-deep-closedloop/07-discussion"
section: "Discussion"
order: 7
tags:
  - "engineering/geothermal"
  - "engineering/power-output"
  - "engineering/thermal-interference"
  - "engineering/groundwater-flow"
  - "engineering/dispatchability"
summary: "Interprets modelling results against each research question, addresses the realism of Eavor's claims, discusses thermal interference in stacked arrays, the limited benefit of groundwater flow at realistic deep permeabilities, and the constraints on dispatchability via flow rate control."
formulas: []
---

# Discussion (Section 4)

## 4.1. Are the Power Output Claims Realistic? (Q1)

The adjusted SLA output (CF factor = 0.56 applied) falls **within** Eavor's 3–8 MW range but in the **lower half**:

- Initial (Day 1): **6.6 MW_th**
- After 10 years: **3.1 MW_th**
- 10-year mean: **3.9 MW_th** ≈ lower bound of claim

The modelling therefore **partially supports** Eavor's claim. The upper bound (8 MW) is not reproduced at 150 °C; Eavor's upper bound likely corresponds to higher production temperatures (they state up to 180 °C is achievable).

### Key Limitations of the Constant-Temperature Method

Setting a fixed pipe temperature of 20 °C is equivalent to flushing the system with 20 °C water fast enough to prevent any warming along the pipe length — physically implausible. This is why:

- Results are treated as an **absolute maximum**
- CF/FT models provide a calibration, but their small 2D scale means longitudinal temperature changes are absent
- Adjusted outputs remain upper bounds

### Thermal Drawdown Mechanism

The steep initial decline is caused by **rapid cooling of rock immediately adjacent to the pipes**. This removes thermal energy faster than the surrounding rock can replenish it by conduction. Over time the rate of decline shallows as the cooled zone expands and the temperature gradient driving heat flow toward the pipe decreases.

Model CF showed that flowing water extracts heat more **steadily** than the constant-T method, predicting a lower initial output but slower thermal drawdown — more representative of real operation. The practical implication: Eavor's system would likely not reach the modelled initial peak but should sustain output better over decades.

---

## 4.2. How Does Stacking Additional Lateral Arrays Affect Power Output? (Q2)

### Scaling Inefficiency

10 stacked arrays produce only **~6.7× the output** of a single array (not 10×), reducing per-array efficiency to **~66%** of an isolated single array:

- Single array mean lateral output: **~2.9 MW_th**
- Stacked configuration per-array mean: **~1.9 MW_th**

The cause is **thermal interference**: each array reduces the pool of thermal energy available to adjacent arrays. Arrays closer to the domain boundaries may also draw from a smaller thermal reservoir (geometric artefact of the square domain vs. decagonal array footprint).

### Implications for Geretsried Commercial Plant

Eavor projects **60 MW** initial output at Geretsried. With a mean MLA output of **20.4 MW_th** per 10-array drill location, approximately **3 drill locations** would be needed to reach 60 MW. Their stated goal of 200 MW from the Geretsried site alone is technically plausible but would require a very large subsurface footprint to accommodate all lateral arrays without excessive thermal interference.

---

## 4.3. What Is the Effect of Groundwater Flow on Performance? (Q3)

### Positive Effect — But Conditionally

At K = 1 × 10⁻⁶ m/s with a hydraulic gradient of 0.035, flowing groundwater increases power output by **26%** compared to static groundwater (FG vs. SG). The mechanism: groundwater advects heat from undisturbed rock into the cooled zone around the pipes, replenishing the thermal energy available for extraction.

At K = 1 × 10⁻⁹ m/s, the effect is **negligible** — below a threshold K, conductive processes dominate.

### Realistic Deep Permeability Caveat

K = 1 × 10⁻⁶ m/s is at the **very top** of the realistic range for fractured crystalline basement (Freeze & Cherry, 1979). At 5 km depth, confining pressure forces fractures closed. Kuang & Jiao (2014) suggest K = **1 × 10⁻¹²** m/s would be more representative at that depth.

Practical implications:
- The 26% improvement from groundwater flow is **unlikely to be achievable** at Eavor-Loop target depths
- Hydrogeological conditions are therefore largely irrelevant to site selection for DCLGS (as Eavor claims)
- Exception: retrofitting into existing oil/gas/geothermal wells where some permeability data exists

An additional uncaptured effect: cooling the groundwater from 150 °C to 20 °C would dramatically increase its dynamic viscosity, reducing effective hydraulic conductivity near the wells — a non-linearity not modelled here.

---

## 4.4. Does Controlling Flow Rate Make This a Dispatchable Technology? (Q4)

### Model CF Findings

CF at three flow rates showed only a **~0.1% increase** in output per 0.01 m³/s increase in flow rate — insufficient for meaningful load-following at the 20 m pipe scale.

However, this result is an artefact of scale: at 20 m, the entire pipe is maintained near 20 °C regardless of flow rate. In a full-length Eavor-Loop, the transit time of the fluid would allow it to warm progressively, making flow rate a meaningful control on the production temperature and hence power output (consistent with Wu et al., 2017, who find marked output differences across flow rates in a full U-shaped DCLGS).

### Trade-off Warning

Higher flow rate → higher immediate power, but also faster thermal drawdown → lower sustained long-term output. Overproduction at peak demand times risks permanently reducing the system's thermal resource. A dedicated study modelling demand-following flow rate schedules over 30+ years would be needed to assess true dispatchability without jeopardising site longevity.

---

## 4.5. Study Limitations and Suggested Further Investigation

| Limitation | Suggested Future Work |
|------------|----------------------|
| 10 arrays modelled as one configuration | Sequentially add arrays to find the efficiency "sweet spot"; experiment with different geometric configurations |
| Uniform lateral spacing and depth | Test varying spacing and depth (shallower arrays with more separation may reduce thermal interference) |
| Groundwater scenarios limited to two K values | Model a range of K and hydraulic gradient combinations |
| CF/FT models 2D and 20 m scale only | Scale up CF by chaining pipe sections (outflow T of one = inflow T of next), as per Wu et al. (2017) three-section approach |
| 10-year simulation only | Extend to 30+ years to determine if equilibrium between extraction and recharge is ever reached |
| Fixed pipe temperature may over-cool domain | Replace with constant heat-sink terms derived from SLA/MLA results; test extraction at midpoint claim (5.5 MW) |
| Uniform 20 °C inflow temperature | Run sensitivity on inflow temperature (higher inflow → less cooling, potentially more sustainable output) |
| Homogeneous isotropic domain | Construct site-specific models using borehole data from known hydrocarbon or geothermal exploration areas |
| 2D CF applied as adjustment to 3D models | Develop 3D CF model to better represent volumetric thermal dynamics |
