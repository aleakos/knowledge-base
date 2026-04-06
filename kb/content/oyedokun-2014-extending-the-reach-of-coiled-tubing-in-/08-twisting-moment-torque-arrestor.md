---
parent_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-"
chunk_id: "oyedokun-2014-extending-the-reach-of-coiled-tubing-in-/08-twisting-moment-torque-arrestor"
section: "Chapter IV: Twisting Moment, Electrodrill, Stabilizer, and Dynamic Torque Arrestor"
order: 8
tags:
  - "engineering/coiled-tubing"
  - "engineering/dynamic-torque-arrestor"
  - "engineering/reactive-torque"
  - "engineering/electrodrill"
  - "engineering/downhole-tools"
  - "engineering/twist"
summary: "Analysis of twisting moment in the nonrotating segment, the electrodrill as an alternative to avoid reactive torque, stabilizer performance, and dynamic torque arrestor design concept."
formulas: []
---

# Chapter IV: Twisting Moment, Electrodrill, Stabilizer, and Dynamic Torque Arrestor

## 4.3 Twisting Moment in the Nonrotating Segment

The reactive torque from the second motor propagates upward into the nonrotating segment as a twisting moment. Since the nonrotating segment does not rotate, this twisting moment is stored as elastic strain energy (torsional deformation — twist).

The twist angle accumulated over a length L of the nonrotating segment is:

```
θ = ∫₀ᴸ (Mt(s) / GJ) ds
```

Where:
- `Mt(s)` = torsional moment at position s in the nonrotating segment
- `G` = shear modulus (for steel CT: G ≈ 11.5 × 10⁶ psi)
- `J` = polar moment of inertia = π(OD⁴ - ID⁴)/32

The cumulative twist angle can become significant over long nonrotating segment lengths. This is operationally problematic because:
1. The CT at surface may rotate when the motor is stopped, creating a safety hazard at the injector head
2. The stored twist energy can be released rapidly during tool sticking/unsticking events
3. Excessive twist can contribute to fatigue damage

## 4.3.1 Electrodrill as an Alternative

The **electrodrill** is an electric downhole motor powered by an electrical cable rather than by drilling fluid pressure differential. It avoids the reactive torque problem because:

- The motor reaction force is taken on the stator, which is contained within the BHA
- No reactive torque is transmitted to the CT string above the electrodrill
- The CT remains nonrotating and torque-free above the motor

**Advantages of electrodrill**:
- No reactive torque on nonrotating segment
- Precise speed and torque control via surface electronics
- Can operate in low-flow-rate or gas-injection environments where hydraulic motors are ineffective

**Disadvantages**:
- Requires an armored electrical cable (wireline or integral cable in CT wall)
- Higher equipment cost and complexity
- Power cable inside CT bore limits fluid flow area
- Limited availability in field deployments

The electrodrill is presented as a technology that could complement or replace the second hydraulic motor concept, particularly in scenarios where reactive torque management is critical and the additional equipment complexity is acceptable.

## 4.3.2 Full-Gaged Stabilizer

A **full-gaged stabilizer** placed above the second motor is one means of reacting the torque from the nonrotating segment at the wellbore wall. The stabilizer blades contact the wellbore and provide a mechanical reference, allowing the reactive torque to be absorbed by friction at the wellbore contact.

**How it works**:
- The stabilizer has blades machined to the wellbore diameter (full-gaged)
- The reactive torque twists the CT, loading the stabilizer blades against the wellbore
- The stabilizer blades resist further rotation through friction, absorbing the reactive torque locally

**Limitations of full-gaged stabilizer**:
- If the reactive torque exceeds the friction capacity of the stabilizer, it slips and passes the torque upward
- The stabilizer does not limit the maximum torque — it only reacts torque passively
- In a worn or oversized wellbore, the stabilizer may not maintain full-gauge contact
- Does not dynamically manage torque — only provides a passive resistance point

## 4.3.3 Dynamic Torque Arrestor — New Tool Concept

The **dynamic torque arrestor (DTA)** is a newly proposed tool that actively limits the reactive torque transmitted to the nonrotating segment above the second motor. Unlike a passive stabilizer, the DTA:

1. Has a **preset slip torque threshold** (set before running in hole)
2. When the reactive torque in the nonrotating segment reaches the slip threshold, the DTA slips — allowing the nonrotating segment to rotate slightly rather than accumulating more twist
3. The slipping action dissipates the excess torsional energy
4. After slipping, the DTA re-engages to resist further torque accumulation

### DTA Design Principles

The DTA functions conceptually like a torque limiter or slip coupling:

- **Engagement mechanism**: Friction pads or mechanical dogs that engage the wellbore wall
- **Slip threshold**: Set by spring preload or hydraulic pressure
- **Reset mechanism**: Re-engages automatically after slipping a small angular increment

**Key design parameters**:
- Slip torque threshold: Must be set below Mcr for the nonrotating segment
- Slip angle increment: Small enough to avoid wellbore control issues but large enough to dissipate energy
- Tool length: Short enough to fit in standard BHA configurations
- Gauge: Full-gauge to maintain consistent wellbore contact

### Comparison: Stabilizer vs. DTA

| Feature | Full-gaged Stabilizer | Dynamic Torque Arrestor |
|---|---|---|
| Torque limitation | Passive (friction) | Active (preset slip) |
| Maximum torque control | No — can be exceeded | Yes — slips at preset threshold |
| Torque dissipation | Limited | Active dissipation by slipping |
| Complexity | Low | Moderate |
| Risk of twist accumulation | High | Low |

The DTA is the preferred solution when reactive torque management is the primary concern for enabling extended-reach CT drilling.
