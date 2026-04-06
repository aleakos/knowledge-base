---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/07-rotating-length-determination"
section: "Chapter IV: Maximum Rotating Length and Reactive Torque Rate"
order: 7
tags:
  - "engineering/coiled-tubing"
  - "engineering/torsional-buckling"
  - "engineering/downhole-motors"
  - "engineering/torque"
  - "engineering/rotating-length"
summary: "Determination of maximum CT rotating length before torsional buckling, and derivation of the reactive torque rate transmitted to the nonrotating segment."
formulas:
  - id: "F4.14"
    name: "Rate of reactive torque transmitted to nonrotating segment"
    expr: "dMt,r/dt = μ*rp*(wc,bit - wc,mtr) * v"
---

# Chapter IV: Maximum Rotating Length and Reactive Torque Rate

## 4.1 Maximum Rotating Length

The rotating CT segment accumulates torsional load from two sources:
1. **Reactive torque from the bit motor**: A fixed input at the bottom of the rotating segment
2. **Torsional drag from the wellbore contact**: Distributed along the rotating segment

The torque at any point along the rotating segment is:

```
Mt(s) = Mt,bit + ∫₀ˢ wd,tangential ds'
```

Where:
- `Mt,bit` = reactive torque from the bit motor (at the base of the rotating segment)
- `wd,tangential = μ * wc * sin γ` = torsional drag per unit length

As the rotating segment length increases, Mt(s) at the top of the rotating segment (i.e., at the second motor location) increases. Torsional buckling initiates when:

```
Mt(s_top) ≥ Mcr
```

Where Mcr is the critical torque for the relevant wellbore section (from Chapter III).

**The maximum rotating length** is the length at which the torque at the top of the rotating segment exactly equals Mcr. Beyond this length, adding more rotating CT would cause torsional buckling in the rotating segment.

### Iterative Solution Procedure

The maximum rotating length is found by:

1. Assume a trial rotating length L_rot
2. Calculate normal contact forces wc along L_rot using the axial force distribution
3. Calculate wd,tangential = μ * wc * sin γ at each point
4. Integrate to find Mt at the top of the rotating segment
5. Compare Mt with Mcr for the governing wellbore section
6. If Mt < Mcr: increase L_rot; if Mt > Mcr: decrease L_rot
7. Iterate until convergence

This iterative approach accounts for the coupling between axial force distribution, contact forces, and torque accumulation.

## 4.2 Reactive Torque Rate Transmitted to Nonrotating Segment

The reactive torque from the second motor acts on the nonrotating segment above it. The rate at which this torque is applied to the nonrotating segment is a critical design parameter for the dynamic torque arrestor.

The reactive torque rate — the rate of change of reactive torque transmitted to the nonrotating segment over time — depends on:

- The coefficient of friction μ between CT and wellbore
- The pipe radius rp (relevant for the contact geometry at the motor)
- The normal contact force distribution at the wellbore contact near the motor location
- The axial velocity v of the CT string (RIH speed)

The rate of reactive torque transmitted to the nonrotating segment is:

```
dMt,r/dt = μ*rp*(wc,bit - wc,mtr) * v
```

Where:
- `Mt,r` = reactive torque in the nonrotating segment
- `t` = time
- `μ` = coefficient of friction
- `rp` = pipe radius (CT outer radius)
- `wc,bit` = normal contact force per unit length near the bit motor
- `wc,mtr` = normal contact force per unit length near the second motor
- `v` = axial velocity (RIH rate)

**Physical interpretation**: As CT is run in hole (v > 0), the reactive torque in the nonrotating segment increases with time. The rate of increase is proportional to the friction coefficient, the pipe radius, the net contact force differential between the two motors, and the RIH velocity.

### Design Implication

The dynamic torque arrestor must be designed to slip before Mt,r reaches a value that would cause torsional buckling in the nonrotating segment. The slip torque threshold is set based on:

- Mcr for the nonrotating segment (Chapter III formulas)
- A safety margin to account for uncertainty in μ and contact forces
- The accumulated reactive torque rate during a typical drilling run
