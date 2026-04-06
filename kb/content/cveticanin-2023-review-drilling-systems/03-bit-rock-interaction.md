---
parent_id: "cveticanin-2023-review-drilling-systems"
chunk_id: "cveticanin-2023-review-drilling-systems/03-bit-rock-interaction"
section: "Bit-Rock Interaction Models"
order: 3
tags:
  - "engineering/drilling"
  - "engineering/bit-rock-interaction"
  - "engineering/vibrations"
summary: "Eleven mathematical models for bit-rock torque including velocity-dependent friction, Stribeck effect, polynomial, hysteretic, and stochastic models; uncertainty quantification and rock fracture parameter identification."
formulas:
  - id: "F1"
    name: "Model 1: Velocity-dependent friction (Navarro-Lopez)"
    expr: "T_bit(theta_dot_bit) = mu*W*r * tanh(b1*theta_dot_bit) + b2*(theta_dot_bit / (1+b3*theta_dot_bit^2))"
  - id: "F2"
    name: "Model 2: WOB-normalised (Nogueira-Ritto)"
    expr: "T_bit = b0*(W/Wref) * [tanh(b1*theta_dot_bit) + b2*(theta_dot_bit / (1+b3*theta_dot_bit^2))]"
  - id: "F3"
    name: "Model 5: Exponential decay (Navarro-Lopez/Suarez)"
    expr: "T_bit = r*[(T_sb*r - T_cb*r)*exp(-theta_dot_bit*b1) + T_cb*r]"
  - id: "F4"
    name: "Model 8: Stribeck model"
    expr: "T_bit = mu*W*r * [tanh(b1*theta_dot_bit) + b2*theta_dot_bit*exp(-b3*|theta_dot_bit|)]"
  - id: "F5"
    name: "Model 9: Stick-slip torque (Saldivar)"
    expr: "T_bit = W*r*[mu(theta_dot_bit)*sign(theta_dot_bit) + c*theta_dot_bit]"
  - id: "F6"
    name: "Model 9: Dry friction coefficient (Saldivar)"
    expr: "mu(theta_dot_bit) = mu_cb + (mu_sb - mu_cb)*exp(-gamma/v * theta_dot_bit)"
  - id: "F7"
    name: "Model 10: Hysteretic model (Real et al.)"
    expr: "T_bit(theta_dot_bit, theta_ddot_bit) = mu*W*r*[tanh(b1*theta_dot_bit) + b2*(theta_dot_bit / (1+b3*theta_dot_bit^2))] * (1 + H(theta_dot_bit, theta_ddot_bit))"
  - id: "F8"
    name: "Stochastic bit-rock model"
    expr: "T_bar_bit = T_bit * (1 + eta(t))"
  - id: "F9"
    name: "Weibull distribution for rock property"
    expr: "F(e) = (h/e0) * (e/e0)^(h-1) * exp(-(e/e0)^h)"
---

# Bit-Rock Interaction Models

## Overview

The bit-rock interaction is the most important and most uncertain component of drill string dynamics modelling. Models range from simple velocity-dependent friction to complex stochastic formulations. All models (1-11) explain stick-slip oscillations through nonlinear friction at near-zero bit velocities: friction torque decreases with increasing velocity (Stribeck effect), acting as negative damping — the root cause of self-excited stick-slip vibrations.

## Mathematical Models for Bit Torque

### Model 1: Velocity-Dependent Friction (Navarro-Lopez & Al-Sulaiman)
$$T_{bit}(\dot{\theta}_{bit}) = \mu W r \left[\tanh(b_1 \dot{\theta}_{bit}) + b_2 \frac{\dot{\theta}_{bit}}{1 + b_3 \dot{\theta}_{bit}^2}\right] \tag{2}$$

- $W$ = WOB, $\mu$ = friction coefficient, $r$ = bit radius
- $b_1$, $b_2$ = bit and rock property coefficients
- Velocity-dependent friction type (reversible, no hysteresis)

### Model 2: WOB-Normalised (Nogueira-Ritto)
$$T_{bit}(\dot{\theta}_{bit}) = b_0 \frac{W}{W_{ref}}\left[\tanh(b_1 \dot{\theta}_{bit}) + b_2 \frac{\dot{\theta}_{bit}}{1 + b_3 \dot{\theta}_{bit}^2}\right] \tag{3}$$

For $\dot{\theta}_{bit} \to \infty$: $T_{bit} \to b_0 W/W_{ref}$.

Parameters $b_0, \ldots, b_3$ estimated via inverse procedures.

### Model 3: Simplified Torque (Mendil et al.)
$$T_{bit}(\dot{\theta}_{bit}) = \mu W r \left[\frac{1}{\sqrt{1 + \dot{\theta}_{bit}^2}} + \frac{b_2 \dot{\theta}_{bit}}{1 + b_3 \dot{\theta}_{bit}^2}\right] \tag{4}$$

### Model 4: Viscous Damping Extension (Mendil et al.)
$$T_{bit}(\dot{\theta}_{bit}) = \mu W r \left[\frac{1}{\sqrt{1 + \dot{\theta}_{bit}^2}} + \frac{b_2 \dot{\theta}_{bit}}{1 + b_3 \dot{\theta}_{bit}^2}\right] + c\dot{\theta}_{bit}\left(\dot{\theta}_{bit} - 1\right) \tag{5}$$

Generalises Model 3 with viscous damping at bit-rock interface.

### Model 5: Exponential Decay (Navarro-Lopez & Suarez)
$$T_{bit}(\dot{\theta}_{bit}) = r\left[(T_{sb}r - T_{cb}r)\exp(-\dot{\theta}_{bit} b_1) + T_{cb}r\right] \tag{6}$$

- $T_{sb}r$ = maximum static torque, $T_{cb}r$ = maximum dynamic torque
- For $\dot{\theta}_{bit} \to \infty$: profile decays to $T_{cb}r$

### Model 6: Combined Function (Castello-Ritto)
$$T_{bit}(\dot{\theta}_{bit}) = r\left[b_0 \exp(-b_1 \dot{\theta}_{bit}^2 - b_2) + b_3 - b_4\tanh(\dot{\theta}_{bit} b_5)\right] \tag{7}$$

Five parameters; for $\dot{\theta}_{bit} \to \infty$: $T_{bit} \to r(b_3 - b_4)$.

### Model 7: Polynomial Type (Ritto-Aguiar)
$$T_{bit}(\dot{\theta}_{bit}) = r\left(b_0 + b_1\dot{\theta}_{bit} + b_2(\dot{\theta}_{bit})^2 + b_3\dot{\theta}_{bit}\right)^3 \tag{8}$$

Unique: no upper/lower limit on dynamic torque. $rb_0$ = static torque.

### Model 8: Stribeck Model (Mendil et al.)
$$T_{bit}(\dot{\theta}_{bit}) = \mu W r \left[\tanh(b_1\dot{\theta}_{bit}) + b_2 \dot{\theta}_{bit} \exp(-b_3|\dot{\theta}_{bit}|)\right] \tag{9}$$

### Model 9: Dry Friction + Viscous Damping (Saldivar et al.)
$$T_{bit}(\dot{\theta}_{bit}) = Wr\left[\mu(\dot{\theta}_{bit})\text{sign}(\dot{\theta}_{bit}) + c\dot{\theta}_{bit}\right] \tag{10}$$

Dry friction coefficient with exponential velocity decay (Stribeck effect):
$$\mu(\dot{\theta}_{bit}) = \mu_{cb} + (\mu_{sb} - \mu_{cb})\exp\left(-\frac{\gamma}{v}\dot{\theta}_{bit}\right) \tag{11}$$

where $\mu_{sb}$ = static, $\mu_{cb}$ = Coulomb friction; $\gamma/v$ = dimensionless velocity decrease rate.

### Model 10: Hysteretic Model (Real et al.)
Adds hysteresis — allows different amplitude for forward/backward phases:
$$T_{bit}(\dot{\theta}_{bit}, \ddot{\theta}_{bit}) = \mu W r \left[\tanh(b_1\dot{\theta}_{bit}) + b_2 \frac{\dot{\theta}_{bit}}{1 + b_3\dot{\theta}_{bit}^2}\right] \cdot (1 + H(\dot{\theta}_{bit}, \ddot{\theta}_{bit})) \tag{12}$$

Hysteretic function:
$$H(\dot{\theta}_{bit}, \ddot{\theta}_{bit}) = \beta_0 \tanh(\beta_1 \ddot{\theta}_{bit}) \tag{13}$$

When $H = 0$: reduces to reversible (non-hysteretic) model. Overcomes the main limitation of Models 1-9 (no hysteresis).

### Model 11: Stochastic Extension (Real et al.)
Adds stochastic process to account for measured fluctuations:
$$\bar{T}_{bit}(\dot{\theta}_{bit}, \ddot{\theta}_{bit}) = T_{bit}(\dot{\theta}_{bit}, \ddot{\theta}_{bit}) \cdot (1 + \eta(t)) \tag{14}$$

where $\eta(t)$ = centred Gaussian stochastic process.

## Uncertainties in Bit-Rock Interaction

### Main Uncertainty Sources
- Material properties (column and drilling fluid)
- Dimensional uncertainties (especially borehole geometry)
- Fluid-structure interaction
- Bit-rock interaction (most significant)

Unknown values: friction coefficient, contact points, non-homogeneous soil parameters.

### Methods for Uncertainty Quantification
- **Nonparametric probabilistic approach** [ref 5]: identified via maximum likelihood + principal component analysis
- **Bayesian approach with Metropolis-Hastings** [ref 8]: includes Gaussian noise model
- **Monte Carlo simulation** [ref 13]: stochastic model for bit-rock interaction torque
- **Novel stochastic process for rock strength** [ref 40]: accounts for high-order variations in rock strength even within same rock type

## Parameter Identification of Rock Fracture

Key findings:
- Mechanical properties (elastic modulus, Poisson's ratio, strength) distributed according to **Weibull distribution**:
$$F(e) = \frac{h}{e_0}\left(\frac{e}{e_0}\right)^{h-1} \exp\left[-\left(\frac{e}{e_0}\right)^h\right] \tag{15}$$

- Rock fracture in percussion drilling: penetration creates disintegrated/recompacted zone, crushed zone, and cracked zone (radial, median, side)
- Crater formation requires high energy supply; penetration rate increases with force-on-bit and rotation speed

### Elastic Constants by Rock Type (Table 1)
Selected values from White [58]:
| Rock | Young's modulus (GPa) | Poisson's ratio |
|---|---|---|
| Granite | 58.6 | 0.26 |
| Limestone | 53.9 | 0.32 |
| Sandstone | 29.9 | 0.31 |
| Shale | 21.9 | 0.38 |
| Basalt | 61.0 | 0.19 |
| Andesite | 37.0 | 0.23 |

Recent additions: machine learning for rock characterisation [ref 59]; Drucker-Prager constitutive equation [ref 60].
