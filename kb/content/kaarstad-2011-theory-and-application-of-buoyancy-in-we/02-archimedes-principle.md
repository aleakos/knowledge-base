---
parent_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we"
chunk_id: "kaarstad-2011-theory-and-application-of-buoyancy-in-we/02-archimedes-principle"
section: "Fundamental Physics of Buoyancy - Archimedes' Principle"
order: 2
tags:
  - "engineering/buoyancy"
  - "engineering/mechanics"
  - "engineering/drilling"
summary: "Derivation of Archimedes' principle for buoyancy in wells using stress tensor integration and hydrostatic pressure, establishing the generalized buoyancy factor equations."
formulas:
  - id: "F1"
    name: "Buoyant force from stress tensor"
    expr: "F_b = ∮ σ dA"
  - id: "F2"
    name: "Buoyant force from pressure integration"
    expr: "ρ_fluid h A = ρ_fluid V"
  - id: "F3"
    name: "Buoyancy factor for same fluid inside and outside"
    expr: "β = 1 - ρ_fluid / ρ_pipe"
  - id: "F4"
    name: "Buoyancy factor for different fluids inside and outside"
    expr: "β = 1 - (ρ_o r_o² - ρ_i r_i²) / [ρ_pipe (r_o² - r_i²)]"
  - id: "F5"
    name: "Overall buoyancy factor for composite string"
    expr: "β = 1 - [Σ_k D_k (ρ_o r_ok² - ρ_i r_ik²)] / [ρ_pipe Σ_k D_k (r_ok² - r_ik²)]"
---

# Fundamental Physics of Buoyancy - Archimedes' Principle

## Classical Archimedes' Principle

The Greek scientist Archimedes (~300 B.C.) discovered that the buoyancy of a body equals the weight of the displaced fluid in which it floats. For many applications this definition is sufficient, however, to resolve all problems a more generalized approach must be taken.

The gravitational force acts downwards. Buoyancy is a surface force acting on a body in the opposite direction of the gravitational force. For this reason, it is only pressure acting on the projected vertical area that contributes to buoyancy. 

## Mathematical Derivation

The buoyancy force exerted on the body can be calculated by integrating the stress tensor over the surface of the body which is in contact with the fluid:

```
F_b = ∮ σ dA
     A
```

Integration over a projected surface may become cumbersome for irregular geometries. For an arbitrary body, assume a vertical prism of height h is cut. The buoyant force equals the difference between the bottom and top force acting on the prism. This force is the hydrostatic pressure times the projected area. Thus, the surface integral is transformed into a volume integral with the help of the Gauss divergence theorem, and the buoyant force becomes:

```
ρ_fluid h A = ρ_fluid V
```

It can be shown that this is equal to the weight of the displaced fluid. There are certain conditions for which this is valid: The fluid must have access to the surface of the body, and the body forces are external forces, which may not reflect the inner forces in the body. Goins (1980a) demonstrated that a projected area is required in order to obtain buoyancy.

## Buoyancy Factor

The submerged weight of a wellbore tubular is obtained by multiplying the weight in air by a buoyancy factor β. The following equations are valid both for vertical and deviated boreholes.

### Same Fluid Inside and Outside

When the inside and the outside of the pipe are submerged in the same fluid:

```
β = Suspended weight in mud / Weight in air = 1 - ρ_fluid / ρ_pipe
```

### Different Fluid Densities Inside and Outside

If a different density exists on the inside and the outside, the following equation results:

```
β = 1 - (ρ_o r_o² - ρ_i r_i²) / [ρ_pipe (r_o² - r_i²)]
```

where:
- ρ_o = outer fluid density
- ρ_i = inner fluid density
- r_o = outer pipe radius
- r_i = inner pipe radius
- ρ_pipe = pipe material density

## Composite Strings

For a string composed of many pipe sizes, the effective axial force at any depth and the general expression for the overall buoyancy for a composite string consisting of n elements is:

```
β = 1 - [Σ_k D_k (ρ_o r_ok² - ρ_i r_ik²)] / [ρ_pipe Σ_k D_k (r_ok² - r_ik²)]
```

Using this equation one computes the buoyancy factor starting from the bottom of the string. At any given depth, the axial weight is equal to the pipe weight below multiplied by the buoyancy factor at that depth.

## Application Notes

Both equations for composite and single strings can be applied, but the method differs:
- The local buoyancy factor for a string element applies locally
- The overall buoyancy factor applies to the string below the point of interest
