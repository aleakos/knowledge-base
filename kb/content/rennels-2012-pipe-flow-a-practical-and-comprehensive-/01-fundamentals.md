---
parent_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-"
chunk_id: "rennels-2012-pipe-flow-a-practical-and-comprehensive-/01-fundamentals"
section: "Fundamentals"
order: 1
tags:
  - "engineering/fluid-mechanics"
  - "engineering/tubular-mechanics"
  - "engineering/pipe-flow"
summary: "Fluid properties, dimensionless ratios (Reynolds number, loss coefficient, Mach number, Froude number), and equations of state for gases and liquids relevant to pipe flow"
formulas:
  - id: "F1"
    name: "Reynolds number (English)"
    expr: "N_Re = V*D*rho_w / (mu*g) = w*D / (mu*g*A)"
  - id: "F2"
    name: "Reynolds number (SI)"
    expr: "N_Re = V*D*rho_m / mu = m_dot*D / (mu*A)"
  - id: "F3"
    name: "Loss coefficient definition"
    expr: "K = f * L/D"
  - id: "F4"
    name: "Perfect gas law"
    expr: "PV = mRT  (or PV = nRT for universal gas constant)"
  - id: "F5"
    name: "Real gas equation of state"
    expr: "PV = z*m*R*T  (z = compressibility factor)"
---

## Fundamentals of Pipe Flow

### Systems of Units

Two unit systems are used throughout:
- **USCS / English gravitational**: lbf (force), ft (length), s (time); mass unit is the slug (lbf-s²/ft)
- **SI**: kg (mass), m (length), s (time); force unit is the newton (N = kg-m/s²)

The fundamental equation F = ma connects the two. The conversion factor Cg = 1 changes unit names without changing numerical values.

### Key Fluid Properties

| Property | English | SI |
|----------|---------|-----|
| Pressure | lb/ft², lb/in² (psi) | N/m² (Pa) |
| Mass density | slug/ft³ | kg/m³ |
| Weight density | lb/ft³ | N/m³ |
| Viscosity (dynamic) | lb-s/ft² | N-s/m² (Pa-s) |
| Kinematic viscosity | ft²/s | m²/s |

**Important pressure definitions:**
- **Absolute pressure**: measured from absolute zero
- **Gauge pressure**: measured from local atmospheric pressure
- **Standard atmosphere**: 14.696 psi = 1.01325 × 10⁵ Pa

**Viscosity**: The resistance to relative shearing motion between fluid layers. Kinematic viscosity = absolute viscosity / mass density.

### Important Dimensionless Ratios

**Reynolds number** — ratio of inertia to viscous forces:
```
N_Re = V*D*rho / mu  (SI)
N_Re = V*D*rho_w / (mu*g)  (English)
```
Critical value ≈ 2000–4000 (transition from laminar to turbulent flow).

**Relative roughness**: ε/D, where ε = absolute pipe wall roughness.

**Loss coefficient**:
```
K = f * L/D
```
where f = Darcy friction factor, L = pipe length, D = inside diameter. K is measured in velocity heads.

**Mach number**: ratio of local fluid velocity to acoustic velocity: M = u/A.

**Froude number**: ratio of inertia to gravity force: N_Fr = V/√(gD). Used for partially-full pipe flow.

**Reduced pressure and temperature**: Pr = P/Pc, Tr = T/Tc. Used with compressibility charts to quantify departures from ideal gas behaviour.

### Equations of State

**Liquids**: Density changes with temperature and pressure are usually negligible for engineering calculations; properties treated as constant within each problem segment.

**Perfect gas law**:
```
PV = mRT   (m = mass, R = individual gas constant)
PV = nRT   (n = number of mols, R = universal gas constant)
```

**Real gas equation of state** (compressibility factor):
```
PV = z*m*R*T
```
where z is a function of reduced pressure and temperature (van der Waals, generalized compressibility chart). Two tractable equations for z: Redlich-Kwong and Lee-Kesler (detailed in Appendix D).

### Flow Regimes

- **Laminar flow**: fluid moves in concentric cylindrical layers; parabolic velocity profile; NRe < ~2000
- **Turbulent flow**: chaotic mixing; more nearly uniform velocity profile; NRe > ~4000
- **Critical zone**: 2000 < NRe < 4000; unstable transition region
