// Datos extraídos de la hoja DataLookup del Process Regulator Sizing Tool.

export const gases = {
  nitrogen: { name: "Nitrogen", correctionFactor: 1.00, recommendedVelocity: 30 },
  air: { name: "Air", correctionFactor: 0.98, recommendedVelocity: 30 },
  ammonia: { name: "Ammonia", correctionFactor: 1.28, recommendedVelocity: 30 },
  argon: { name: "Argon", correctionFactor: 0.85, recommendedVelocity: 30 },
  arsine: { name: "Arsine", correctionFactor: 0.60, recommendedVelocity: 30 },
  carbonDioxide: { name: "Carbon dioxide", correctionFactor: 0.80, recommendedVelocity: 30 },
  helium: { name: "Helium", correctionFactor: 2.65, recommendedVelocity: 75 },
  hydrogen: { name: "Hydrogen", correctionFactor: 3.72, recommendedVelocity: 75 },
  hydrogenChloride: { name: "Hydrogen chloride", correctionFactor: 0.87, recommendedVelocity: 30 },
  lpg: { name: "LPG", correctionFactor: 0.80, recommendedVelocity: 30 },
  methane: { name: "Methane", correctionFactor: 1.80, recommendedVelocity: 50 },
  naturalGas: { name: "Natural Gas", correctionFactor: 1.30, recommendedVelocity: 50 },
  neon: { name: "Neon", correctionFactor: 1.28, recommendedVelocity: 30 },
  oxygen: { name: "Oxygen", correctionFactor: 0.94, recommendedVelocity: 15 },
  propane: { name: "Propane", correctionFactor: 0.82, recommendedVelocity: 30 },
  silane: { name: "Silane", correctionFactor: 0.93, recommendedVelocity: 30 }
};

export const liquids = {
  water: { name: "Water", density: 1.00 },
  ethyleneGlycol: { name: "Ethylene glycol", density: 1.125 },
  glycerine: { name: "Glycerine", density: 1.26 },
  kerosene: { name: "Kerosene", density: 0.80 }
};

export const unitSystems = {
  metricGas: {
    pressureUnit: "barg", pressureFactor: 1,
    flowUnit: "Nm³/h", flowFactor: 1,
    temperatureUnit: "°C", temperatureFactor: 1, temperatureOffset: 0,
    velocityUnit: "m/s", velocityFactor: 1,
    boreUnit: "mm", lengthFactor: 1
  },
  imperialGas: {
    pressureUnit: "psig", pressureFactor: 14.5037738,
    flowUnit: "SCFM", flowFactor: 0.5885783333333333,
    temperatureUnit: "°F", temperatureFactor: 1.8, temperatureOffset: 32,
    velocityUnit: "ft/s", velocityFactor: 3.2808399,
    boreUnit: "inch", lengthFactor: 0.03937007874015748
  },
  metricLiquid: {
    pressureUnit: "barg", pressureFactor: 1,
    flowUnit: "L/min", flowFactor: 1,
    temperatureUnit: "°C", temperatureFactor: 1, temperatureOffset: 0,
    velocityUnit: "m/s", velocityFactor: 1,
    boreUnit: "mm", lengthFactor: 1
  },
  imperialLiquid: {
    pressureUnit: "psig", pressureFactor: 14.5037738,
    flowUnit: "US gal/min", flowFactor: 0.2641720524,
    temperatureUnit: "°F", temperatureFactor: 1.8, temperatureOffset: 32,
    velocityUnit: "ft/s", velocityFactor: 3.2808399,
    boreUnit: "inch", lengthFactor: 0.03937007874015748
  }
};

// Diámetros internos en mm. Las claves 8, 12, 16... se conservan tal como aparecen en DataLookup.
export const pipeInternalDiameters = {
  SCH40: { 8: 15.7988, 12: 20.9296, 16: 26.6446, 24: 40.894, 32: 52.505, 40: 62.705, 48: 77.92, 64: 102.26 },
  SCH80: { 8: 13.8684, 12: 18.8468, 16: 24.3078, 24: 38.1, 32: 49.245, 40: 59.005, 48: 73.66, 64: 97.18 },
  SCH160: { 8: 11.8364, 12: 15.5956, 16: 20.701, 24: 33.9852, 32: 42.845, 40: 44.985, 48: 66.64, 64: 87.38 },
  "Tube fitting": { 8: 10.414, 12: 15.748, 16: 22.352, 24: 34.036, 32: 45.974 }
};

export const allowableDroopPercent = [2.5, 5, 10, 20];

export function getUnitConfiguration(unitSystem, fluidType) {
  const key = `${unitSystem}${fluidType === "gas" ? "Gas" : "Liquid"}`;
  const config = unitSystems[key];
  if (!config) throw new Error(`Combinación de unidades/fluido inválida: ${key}`);
  return config;
}

export function getFluidDatabase(fluidType) {
  return fluidType === "gas" ? gases : liquids;
}

export function getFluidProperty(fluidType, fluidKey) {
  const fluid = getFluidDatabase(fluidType)[fluidKey];
  if (!fluid) return null;
  return fluidType === "gas"
    ? { label: "Factor de corrección", value: fluid.correctionFactor }
    : { label: "Densidad relativa", value: fluid.density };
}
