import { getUnitConfiguration, pipeInternalDiameters } from "./fluids.js";

// Replica Process Regulators!E17 y L17.
export function calculateRecommendedBore({ flow, outletPressure, velocity, unitSystem, fluidType }) {
  const units = getUnitConfiguration(unitSystem, fluidType);
  const q = Number(flow);
  const pOut = Number(outletPressure);
  const vel = Number(velocity);

  if (!Number.isFinite(q) || !Number.isFinite(pOut) || !Number.isFinite(vel)) {
    throw new Error("Flow, outlet pressure y velocity deben ser valores numéricos.");
  }
  if (q < 0 || vel <= 0) throw new Error("El caudal no puede ser negativo y la velocidad debe ser mayor que cero.");

  const convertedFlow = q / units.flowFactor;
  const convertedVelocity = vel / units.velocityFactor;

  let denominator;
  if (fluidType === "gas") {
    const absolutePressureBaraApprox = (pOut / units.pressureFactor) + 1;
    if (absolutePressureBaraApprox <= 0) throw new Error("La presión absoluta calculada debe ser mayor que cero.");
    denominator = absolutePressureBaraApprox * 3600;
  } else {
    denominator = 60000;
  }

  const actualVolumetricFlowM3s = convertedFlow / denominator;
  const areaM2 = actualVolumetricFlowM3s / convertedVelocity;
  const bore = Math.sqrt(areaM2 / Math.PI) * 2000 * units.lengthFactor;
  return bore;
}

export function validateOperatingConditions({ worstCase, bestCase, velocity }) {
  const errors = [];
  const cases = [
    ["Worst Case", worstCase],
    ["Best Case", bestCase]
  ];

  if (!Number.isFinite(velocity) || velocity <= 0) errors.push("Downstream velocity debe ser mayor que cero.");

  for (const [name, item] of cases) {
    if (![item.inletPressure, item.outletPressure, item.flow].every(Number.isFinite)) {
      errors.push(`${name}: completa todos los valores numéricos.`);
      continue;
    }
    if (item.flow < 0) errors.push(`${name}: Flow rate no puede ser negativo.`);
    if (item.outletPressure > item.inletPressure) errors.push(`${name}: Outlet Pressure no puede ser mayor que Inlet Pressure.`);
  }

  if (worstCase.inletPressure > bestCase.inletPressure) {
    errors.push("Según la definición del Excel, Worst Case Inlet Pressure debe ser la mínima y Best Case Inlet Pressure la máxima.");
  }
  if (worstCase.outletPressure > bestCase.outletPressure) {
    errors.push("Según la definición del Excel, Worst Case Outlet Pressure debe ser la mínima y Best Case Outlet Pressure la máxima.");
  }
  if (worstCase.flow < bestCase.flow) {
    errors.push("Según la definición del Excel, Worst Case Flow debe ser el máximo y Best Case Flow el mínimo.");
  }

  return errors;
}

export function findNextAvailableBore(pipeType, requiredBore, boreUnit) {
  const table = pipeInternalDiameters[pipeType];
  if (!table || !Number.isFinite(requiredBore)) return null;

  const requiredMm = boreUnit === "inch" ? requiredBore / 0.03937007874015748 : requiredBore;
  const rows = Object.entries(table)
    .map(([tableKey, boreMm]) => ({ tableKey, boreMm }))
    .filter(row => row.boreMm > 0)
    .sort((a, b) => a.boreMm - b.boreMm);

  const match = rows.find(row => row.boreMm >= requiredMm);
  if (!match) return { match: null, largest: rows.at(-1), requiredMm };

  return {
    match: {
      ...match,
      displayBore: boreUnit === "inch" ? match.boreMm * 0.03937007874015748 : match.boreMm
    },
    requiredMm
  };
}

export function calculateSizingSummary(input) {
  const units = getUnitConfiguration(input.unitSystem, input.fluidType);
  const errors = validateOperatingConditions(input);
  if (errors.length) return { ok: false, errors, units };

  const worstBore = calculateRecommendedBore({
    flow: input.worstCase.flow,
    outletPressure: input.worstCase.outletPressure,
    velocity: input.velocity,
    unitSystem: input.unitSystem,
    fluidType: input.fluidType
  });

  const bestBore = calculateRecommendedBore({
    flow: input.bestCase.flow,
    outletPressure: input.bestCase.outletPressure,
    velocity: input.velocity,
    unitSystem: input.unitSystem,
    fluidType: input.fluidType
  });

  const designBore = Math.max(worstBore, bestBore);
  const pipeRecommendation = findNextAvailableBore(input.pipeType, designBore, units.boreUnit);

  return { ok: true, units, worstBore, bestBore, designBore, pipeRecommendation };
}
