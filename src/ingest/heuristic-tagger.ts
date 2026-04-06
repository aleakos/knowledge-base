interface TagRule {
  readonly tag: string;
  readonly keywords: ReadonlyArray<string>;
}

const TAG_RULES: ReadonlyArray<TagRule> = [
  {
    tag: "engineering/beam-theory",
    keywords: [
      "beam", "euler-bernoulli", "timoshenko", "reissner",
      "bending", "deflection", "cantilever", "vibration mode",
      "shear deformation", "rotary inertia", "rod model",
      "carrera unified", "cuf",
    ],
  },
  {
    tag: "engineering/finite-element-method",
    keywords: [
      "finite element", "fem", "fea", "shape function",
      "mesh", "element stiffness", "hexahedral", "isoparametric",
      "galerkin", "hermitian", "interpolation", "locking",
    ],
  },
  {
    tag: "engineering/coiled-tubing",
    keywords: [
      "coiled tubing", "ct operation", "spooling",
      "extended reach", "reel", "coiled-tubing",
    ],
  },
  {
    tag: "engineering/composite-materials",
    keywords: [
      "composite", "laminate", "filament winding", "fiber",
      "fibre", "epoxy", "ply", "lay-up", "layup",
      "carbon fiber", "glass fibre", "thermoplastic",
      "failure theor", "tsai-wu", "hashin",
    ],
  },
  {
    tag: "engineering/drilling",
    keywords: [
      "drilling", "torque and drag", "wellbore", "drill string",
      "bha", "bottomhole", "directional well", "well path",
      "rotary drilling", "drill pipe", "drill collar",
      "bit-rock", "rate of penetration", "stuck pipe",
      "survey station", "well intervention",
    ],
  },
  {
    tag: "engineering/geothermal",
    keywords: [
      "geothermal", "eavor", "closed-loop", "closed loop",
      "lcoe", "heat exchang", "ground source",
      "subsurface temperature",
    ],
  },
  {
    tag: "engineering/fluid-mechanics",
    keywords: [
      "fluid", "flow", "cfd", "navier-stokes", "navier–stokes",
      "turbulence", "pipe flow", "reynolds", "pressure drop",
      "heat transfer", "convection", "viscous",
      "computational fluid", "collocated", "momentum",
      "drilling fluid", "mud",
    ],
  },
  {
    tag: "engineering/numerical-methods",
    keywords: [
      "numerical method", "differential quadrature",
      "data assimilation", "interpolation", "imu",
      "dead-reckoning", "dead reckoning",
      "kalman filter", "optimization",
      "convergence", "discretization",
    ],
  },
  {
    tag: "engineering/structural-analysis",
    keywords: [
      "structural analysis", "stress", "strain", "buckling",
      "stability", "nonlinear", "large deformation",
      "finite strain", "post-buckling", "elastic",
      "hyperelastic", "roark",
    ],
  },
  {
    tag: "engineering/tubular-mechanics",
    keywords: [
      "tubular", "pipe", "tubing", "casing",
      "cylinder-in-cylinder", "constrained cylinder",
      "buoyancy", "axial load", "helical buckling",
      "sinusoidal buckling", "lock-up",
    ],
  },
  {
    tag: "engineering/carbon-nanotubes",
    keywords: [
      "carbon nanotube", "cnt", "nanotube", "nano-tube",
      "multi-walled", "single-walled", "mwnt", "swnt",
      "nanoprobe", "nanotweezer",
    ],
  },
  {
    tag: "engineering/digital-twins",
    keywords: [
      "digital twin", "model-based design", "real-time",
      "real time", "simulink", "surface equipment",
    ],
  },
];

export function assignTags(opts: {
  readonly title: string;
  readonly abstract: string | null;
}): ReadonlyArray<string> {
  const { title, abstract } = opts;
  const searchText = `${title} ${abstract ?? ""}`.toLowerCase();

  const matched = TAG_RULES
    .filter((rule) =>
      rule.keywords.some((kw) => searchText.includes(kw.toLowerCase()))
    )
    .map((rule) => rule.tag);

  if (matched.length === 0) {
    return ["engineering/uncategorized"];
  }

  return matched;
}
