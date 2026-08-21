import {
  gases,
  getFluidDatabase,
  getFluidProperty,
  getUnitConfiguration
} from "./js/fluids.js";
import { calculateSizingSummary } from "./js/sizing-engine.js";
import { evaluateRegulators } from "./js/regulators.js";

const $ = (id) => document.getElementById(id);
const modeButtons = document.querySelectorAll(".mode-card");
const sizingSection = $("sizingSection");
const rhpsSection = $("rhpsSection");
const unitSystemSelect = $("unitSystem");
const fluidTypeSelect = $("fluidType");
const fluidSelect = $("fluid");
const velocityInput = $("maxVelocity");
const velocityUnit = $("velocityUnit");
const velocitySuggestion = $("velocitySuggestion");
const droopSelect = $("droop");
const outletPipeType = $("outletPipeType");
const validationMessage = $("validationMessage");
const resultsSection = $("resultsSection");
const tooltip = $("tooltip");

let previousUnitSystem = unitSystemSelect.value;


function updateSidebarPreview() {
  const type = fluidTypeSelect.value;
  const key = fluidSelect.value;
  const database = getFluidDatabase(type);
  const fluid = database[key];
  const property = getFluidProperty(type, key);
  const units = getUnitConfiguration(unitSystemSelect.value, type);
  if ($("sidebarFluid")) $("sidebarFluid").textContent = fluid?.name ?? "—";
  if ($("sidebarPropertyLabel")) $("sidebarPropertyLabel").textContent = property?.label ?? "Propiedad";
  if ($("sidebarPropertyValue")) $("sidebarPropertyValue").textContent = property ? decimals(property.value, 4) : "—";
  if ($("sidebarVelocity")) $("sidebarVelocity").textContent = `${decimals(Number(velocityInput.value) || 0)} ${units.velocityUnit}`;
  if ($("sidebarDroop")) $("sidebarDroop").textContent = `${decimals(Number(droopSelect.value) || 0, 1)} %`;
  for (const id of ["sidebarBoreUnit1","sidebarBoreUnit2","sidebarBoreUnit3"]) if ($(id)) $(id).textContent = units.boreUnit;
}

function setStepperState(state = "config") {
  const activeIndex = state === "conditions" ? 1 : state === "calculated" ? 3 : 0;
  document.querySelectorAll(".step").forEach((step, index) => {
    step.classList.toggle("active", index === activeIndex);
    step.classList.toggle("completed", index < activeIndex);
  });
}

function markCalculationPending({ preserveInputs = true } = {}) {
  if ($("sidebarStatus")) {
    $("sidebarStatus").textContent = "Pendiente";
    $("sidebarStatus").className = "pending-badge";
  }
  const summaryCard = document.querySelector(".summary-card");
  summaryCard?.classList.add("is-pending");
  document.querySelector(".bore-section")?.classList.add("hidden");
  for (const id of ["worstBore","bestBore","designBore","sidebarWorstBore","sidebarBestBore","sidebarDesignBore"]) {
    if ($(id)) $(id).textContent = "—";
  }
  if ($("pipeRecommendation")) {
    $("pipeRecommendation").className = "pipe-recommendation muted-result";
    $("pipeRecommendation").innerHTML = "Ingresa condiciones y pulsa <strong>Calcular</strong> para comparar el bore requerido con la tabla seleccionada.";
  }
  if ($("sidebarPipeRec")) {
    $("sidebarPipeRec").className = "match-box muted-match";
    $("sidebarPipeRec").innerHTML = "<span>Primera entrada que cumple</span><strong>Esperando cálculo</strong><small>Completa las condiciones y pulsa Calcular.</small>";
  }
  resultsSection.classList.add("hidden");
  const anyCondition = ["worstInletPressure","bestInletPressure","worstOutletPressure","bestOutletPressure","worstFlow","bestFlow"]
    .some(id => Number($(id)?.value) !== 0);
  setStepperState(anyCondition ? "conditions" : "config");
}

function decimals(value, max = 3) {
  return Number(value).toLocaleString("es-PE", { maximumFractionDigits: max });
}

function populateFluidOptions(preferredKey = null) {
  const type = fluidTypeSelect.value;
  const database = getFluidDatabase(type);
  fluidSelect.innerHTML = "";

  for (const [key, fluid] of Object.entries(database)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = fluid.name;
    fluidSelect.appendChild(option);
  }

  if (preferredKey && database[preferredKey]) fluidSelect.value = preferredKey;
  updateFluidDetails(true);
}

function updateFluidDetails(applySuggestedVelocity = false) {
  const type = fluidTypeSelect.value;
  const key = fluidSelect.value;
  const database = getFluidDatabase(type);
  const fluid = database[key];
  const prop = getFluidProperty(type, key);
  const units = getUnitConfiguration(unitSystemSelect.value, type);

  $("fluidPropertyLabel").textContent = prop?.label ?? "Propiedad";
  $("fluidPropertyValue").textContent = prop ? decimals(prop.value, 4) : "—";
  $("fluidPropertyName").textContent = fluid?.name ?? "—";

  if (type === "gas" && fluid) {
    const suggested = fluid.recommendedVelocity * units.velocityFactor;
    velocitySuggestion.textContent = `Recomendación para ${fluid.name}: ${decimals(suggested, 1)} ${units.velocityUnit}`;
    if (applySuggestedVelocity) velocityInput.value = Number(suggested.toFixed(3));
  } else {
    velocitySuggestion.textContent = "El Excel no fija una velocidad recomendada por líquido; utiliza el criterio de diseño de tu aplicación.";
  }
  updateSidebarPreview();
}

function convertValue(value, fromFactor, toFactor) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Number(((n / fromFactor) * toFactor).toFixed(6));
}

function updateUnitLabels(convertExisting = false) {
  const type = fluidTypeSelect.value;
  const current = getUnitConfiguration(unitSystemSelect.value, type);

  if (convertExisting) {
    const previous = getUnitConfiguration(previousUnitSystem, type);
    for (const id of ["worstInletPressure", "bestInletPressure", "worstOutletPressure", "bestOutletPressure"]) {
      $(id).value = convertValue($(id).value, previous.pressureFactor, current.pressureFactor);
    }
    for (const id of ["worstFlow", "bestFlow"]) {
      $(id).value = convertValue($(id).value, previous.flowFactor, current.flowFactor);
    }
    velocityInput.value = convertValue(velocityInput.value, previous.velocityFactor, current.velocityFactor);
  }

  document.querySelectorAll(".pressure-unit").forEach(el => { el.textContent = current.pressureUnit; });
  $("worstPressureUnit").textContent = current.pressureUnit;
  $("bestPressureUnit").textContent = current.pressureUnit;
  $("worstFlowUnit").textContent = current.flowUnit;
  $("bestFlowUnit").textContent = current.flowUnit;
  velocityUnit.textContent = current.velocityUnit;
  $("worstBoreUnit").textContent = current.boreUnit;
  $("bestBoreUnit").textContent = current.boreUnit;
  $("designBoreUnit").textContent = current.boreUnit;

  previousUnitSystem = unitSystemSelect.value;
  updateFluidDetails(false);
}

function collectInput() {
  return {
    unitSystem: unitSystemSelect.value,
    fluidType: fluidTypeSelect.value,
    fluid: fluidSelect.value,
    velocity: Number(velocityInput.value),
    pipeType: outletPipeType.value,
    droopPercent: Number(droopSelect.value),
    worstCase: {
      inletPressure: Number($("worstInletPressure").value),
      outletPressure: Number($("worstOutletPressure").value),
      flow: Number($("worstFlow").value)
    },
    bestCase: {
      inletPressure: Number($("bestInletPressure").value),
      outletPressure: Number($("bestOutletPressure").value),
      flow: Number($("bestFlow").value)
    },
    fluidProperty: getFluidProperty(fluidTypeSelect.value, fluidSelect.value)?.value ?? 1
  };
}

function clearValidation() {
  validationMessage.classList.add("hidden");
  validationMessage.innerHTML = "";
}

function showValidation(errors) {
  validationMessage.innerHTML = `<strong>Revisa estos datos:</strong><ul>${errors.map(error => `<li>${error}</li>`).join("")}</ul>`;
  validationMessage.classList.remove("hidden");
}

function renderCalculation() {
  clearValidation();
  const input = collectInput();
  const result = calculateSizingSummary(input);

  if (!result.ok) {
    showValidation(result.errors);
    resultsSection.classList.add("hidden");
    return;
  }

  const unit = result.units.boreUnit;
  $("worstBore").textContent = decimals(result.worstBore);
  $("bestBore").textContent = decimals(result.bestBore);
  $("designBore").textContent = decimals(result.designBore);
  if ($("sidebarWorstBore")) $("sidebarWorstBore").textContent = decimals(result.worstBore);
  if ($("sidebarBestBore")) $("sidebarBestBore").textContent = decimals(result.bestBore);
  if ($("sidebarDesignBore")) $("sidebarDesignBore").textContent = decimals(result.designBore);
  if ($("sidebarStatus")) { $("sidebarStatus").textContent = "Cálculo listo"; $("sidebarStatus").className = "ready-badge"; }
  document.querySelector(".summary-card")?.classList.remove("is-pending");
  document.querySelector(".bore-section")?.classList.remove("hidden");
  setStepperState("calculated");

  if (result.pipeRecommendation?.match) {
    const rec = result.pipeRecommendation.match;
    $("pipeRecommendation").className = "pipe-recommendation good-result";
    if ($("sidebarPipeRec")) {
      $("sidebarPipeRec").className = "match-box good-match";
      $("sidebarPipeRec").innerHTML = `<span>Primera entrada que cumple</span><strong>Clave ${rec.tableKey} · ID ${decimals(rec.displayBore)} ${unit}</strong><small>Tabla seleccionada: ${input.pipeType}</small>`;
    }
    $("pipeRecommendation").innerHTML = `
      <div><span>Tabla seleccionada</span><strong>${input.pipeType}</strong></div>
      <div><span>Bore requerido</span><strong>${decimals(result.designBore)} ${unit}</strong></div>
      <div><span>Primera entrada que cumple</span><strong>Clave ${rec.tableKey} · ID ${decimals(rec.displayBore)} ${unit}</strong></div>
      <p>La clave se mantiene exactamente como aparece en <em>DataLookup</em>; antes de convertirla a una designación comercial de conexión la validaremos contra la tabla original.</p>`;
  } else {
    const largest = result.pipeRecommendation?.largest;
    $("pipeRecommendation").className = "pipe-recommendation warning-result";
    $("pipeRecommendation").innerHTML = largest
      ? `El bore requerido supera el mayor diámetro interno disponible en la tabla ${input.pipeType} cargada desde DataLookup (${decimals(largest.boreMm)} mm).`
      : "No existe una tabla de diámetros disponible para esta selección.";
    if ($("sidebarPipeRec")) {
      $("sidebarPipeRec").className = "match-box muted-match";
      $("sidebarPipeRec").innerHTML = `<span>Primera entrada que cumple</span><strong>Sin coincidencia</strong><small>Revisa el bore requerido y la tabla seleccionada.</small>`;
    }
  }

  const fluid = getFluidDatabase(input.fluidType)[input.fluid];
  const property = getFluidProperty(input.fluidType, input.fluid);
  $("calculationSummary").innerHTML = `
    <div><span>Media</span><strong>${fluid.name}</strong></div>
    <div><span>${property.label}</span><strong>${decimals(property.value, 4)}</strong></div>
    <div><span>Downstream velocity</span><strong>${decimals(input.velocity)} ${result.units.velocityUnit}</strong></div>
    <div><span>Rated flow at droop</span><strong>${decimals(input.droopPercent, 1)} %</strong></div>
    <div><span>Worst bore</span><strong>${decimals(result.worstBore)} ${unit}</strong></div>
    <div><span>Best bore</span><strong>${decimals(result.bestBore)} ${unit}</strong></div>`;

  const regulatorResult = evaluateRegulators(input, result);
  renderRegulatorResults(regulatorResult, input, result);
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}


function statusLabel(status) {
  return status === "green" ? "Dentro de rango" : status === "amber" ? "Revisar" : "Fuera de rango";
}

function fmt(value, digits = 1) {
  return Number.isFinite(value) ? decimals(value, digits) : "—";
}

function metricCell(label, value, unit, status, tooltip = "") {
  return `<div class="metric-cell status-${status}"${tooltip ? ` title="${tooltip}"` : ""}><span>${label}</span><strong>${fmt(value)} ${unit}</strong><small>${statusLabel(status)}</small></div>`;
}

function renderCaseMetrics(c, input, sizing, which) {
  const flowUnit = sizing.units.flowUnit;
  const pressureUnit = sizing.units.pressureUnit;
  const boreUnit = sizing.units.boreUnit;
  const data = c[which];
  return `<div class="candidate-case">
    <div class="candidate-case-title"><strong>${which === "worst" ? "Worst Case" : "Best Case"}</strong><span>${which === "worst" ? "Condición exigente" : "Condición opuesta"}</span></div>
    <div class="candidate-metrics">
      ${metricCell("Lockup", data.lockup, flowUnit, data.statuses.lockup, "Caudal asociado al área de lockup. Operar por debajo requiere especial revisión.")}
      ${metricCell("Rated Flow", data.rated, flowUnit, data.statuses.rated, "Caudal aproximado al droop seleccionado. Si la demanda lo supera pero no alcanza Choked Flow, se marca como revisión.")}
      ${metricCell("Choked Flow", data.choked, flowUnit, data.statuses.choked, "Capacidad máxima aproximada calculada a partir del Cv y las condiciones de presión.")}
      ${metricCell("Outlet Bore", data.outletBore, boreUnit, data.statuses.bore, "Diámetro interno asociado al tamaño del regulador para el pipe/tube seleccionado.")}
      ${metricCell("Inlet MWP", data.inletMWP, pressureUnit, data.statuses.inletMWP, "Maximum Working Pressure de entrada del regulador.")}
      ${metricCell("Max Adj", data.maxAdj, pressureUnit, data.statuses.maxAdj, "Máximo ajuste de presión considerado por el selector.")}
    </div>
  </div>`;
}

function renderRegulatorResults(regulatorResult, input, sizing) {
  const container = $("regulatorResults");
  const counts = regulatorResult.counts;
  $("candidateCount").textContent = `${regulatorResult.candidates.length} candidatos`;
  $("candidateSummary").innerHTML = `
    <span class="summary-pill summary-green">${counts.green} dentro de rango</span>
    <span class="summary-pill summary-amber">${counts.amber} revisar</span>
    <span class="summary-pill summary-red">${counts.red} fuera de rango</span>`;

  let currentCategory = null;
  let html = "";
  for (const c of regulatorResult.candidates) {
    if (c.category !== currentCategory) {
      if (currentCategory !== null) html += "</div>";
      currentCategory = c.category;
      html += `<div class="candidate-family"><h3>${c.category}</h3>`;
    }
    const badge = c.overallStatus === "green" ? "Recomendado" : c.overallStatus === "amber" ? "Revisar" : "No recomendado";
    const speStd = c.speStd == null ? "—" : `${fmt(c.speStd)} ${sizing.units.pressureUnit}`;
    const speDual = c.speDual == null ? "—" : `${fmt(c.speDual)} ${sizing.units.pressureUnit}`;
    html += `<article class="candidate-card candidate-${c.overallStatus}">
      <div class="candidate-header">
        <div><span class="candidate-status ${c.overallStatus}">${badge}</span><h4>${c.name}</h4><p>Control Range: <strong>${c.controlRange}</strong> · SPE Std: <strong>${speStd}</strong> · SPE Dual: <strong>${speDual}</strong></p></div>
        <button class="candidate-toggle" type="button" aria-expanded="false">Ver análisis técnico</button>
      </div>
      <div class="candidate-details hidden">
        <div class="case-grid">${renderCaseMetrics(c,input,sizing,"worst")}${renderCaseMetrics(c,input,sizing,"best")}</div>
        <div class="candidate-help"><strong>Lectura rápida:</strong> verde = dentro del rango usado por el Excel; ámbar = la condición queda en zona de revisión; rojo = excede un criterio. Los valores son de sizing y deben contrastarse con catálogo y Flow Curve Generator para selección final.</div>
      </div>
    </article>`;
  }
  if (currentCategory !== null) html += "</div>";
  container.innerHTML = html;
  container.querySelectorAll(".candidate-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const details = button.closest(".candidate-card").querySelector(".candidate-details");
      const open = !details.classList.contains("hidden");
      details.classList.toggle("hidden", open);
      button.textContent = open ? "Ver análisis técnico" : "Ocultar análisis";
      button.setAttribute("aria-expanded", String(!open));
    });
  });
}

function resetCalculation() {
  const preferredUnits = localStorage.getItem("regTool.defaultUnits") || "metric";
  unitSystemSelect.value = preferredUnits;
  fluidTypeSelect.value = "gas";
  previousUnitSystem = preferredUnits;
  populateFluidOptions("nitrogen");
  droopSelect.value = "20";
  outletPipeType.value = "Tube fitting";
  for (const id of ["worstInletPressure", "bestInletPressure", "worstOutletPressure", "bestOutletPressure", "worstFlow", "bestFlow"]) $(id).value = 0;
  updateUnitLabels(false);
  $("worstBore").textContent = "—";
  $("bestBore").textContent = "—";
  $("designBore").textContent = "—";
  $("pipeRecommendation").className = "pipe-recommendation muted-result";
  $("pipeRecommendation").innerHTML = "Ingresa condiciones y pulsa <strong>Calcular</strong> para comparar el bore requerido con la tabla seleccionada.";
  if ($("sidebarWorstBore")) $("sidebarWorstBore").textContent = "—";
  if ($("sidebarBestBore")) $("sidebarBestBore").textContent = "—";
  if ($("sidebarDesignBore")) $("sidebarDesignBore").textContent = "—";
  if ($("sidebarStatus")) { $("sidebarStatus").textContent = "Pendiente"; $("sidebarStatus").className = "pending-badge"; }
  if ($("sidebarPipeRec")) { $("sidebarPipeRec").className = "match-box muted-match"; $("sidebarPipeRec").innerHTML = "<span>Primera entrada que cumple</span><strong>Esperando cálculo</strong><small>Selecciona condiciones y pulsa Calcular.</small>"; }
  document.querySelector(".summary-card")?.classList.add("is-pending");
  document.querySelector(".bore-section")?.classList.add("hidden");
  setStepperState("config");
  updateSidebarPreview();
  resultsSection.classList.add("hidden");
  clearValidation();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

modeButtons.forEach(button => {
  button.addEventListener("click", () => {
    modeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const sizing = button.dataset.mode === "sizing";
    sizingSection.classList.toggle("hidden", !sizing);
    rhpsSection.classList.toggle("hidden", sizing);
  });
});

unitSystemSelect.addEventListener("change", () => { updateUnitLabels(true); markCalculationPending(); });
fluidTypeSelect.addEventListener("change", () => {
  populateFluidOptions();
  updateUnitLabels(false);
  markCalculationPending();
});
fluidSelect.addEventListener("change", () => { updateFluidDetails(true); markCalculationPending(); });
velocityInput.addEventListener("input", () => { updateSidebarPreview(); markCalculationPending(); });
droopSelect.addEventListener("change", () => { updateSidebarPreview(); markCalculationPending(); });
outletPipeType.addEventListener("change", () => markCalculationPending());
for (const id of ["worstInletPressure","bestInletPressure","worstOutletPressure","bestOutletPressure","worstFlow","bestFlow"]) {
  $(id).addEventListener("input", () => markCalculationPending());
}
$("calculateButton").addEventListener("click", renderCalculation);
$("newCalculationButton").addEventListener("click", resetCalculation);

function positionTooltip(anchor) {
  const rect = anchor.getBoundingClientRect();
  tooltip.style.left = `${Math.min(rect.left, window.innerWidth - 340)}px`;
  tooltip.style.top = `${Math.min(rect.bottom + 9, window.innerHeight - tooltip.offsetHeight - 12)}px`;
}

document.querySelectorAll(".info-button").forEach(button => {
  const show = () => {
    tooltip.textContent = button.dataset.tooltip || "";
    tooltip.classList.add("show");
    positionTooltip(button);
  };
  button.addEventListener("mouseenter", show);
  button.addEventListener("focus", show);
  button.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
  button.addEventListener("blur", () => tooltip.classList.remove("show"));
  button.addEventListener("click", event => {
    event.preventDefault();
    tooltip.classList.contains("show") ? tooltip.classList.remove("show") : show();
  });
});

populateFluidOptions("nitrogen");
updateUnitLabels(false);
updateSidebarPreview();
document.querySelector(".summary-card")?.classList.add("is-pending");
setStepperState("config");
console.log("Swagelok Regulator Tool cargado correctamente.");


// ==========================================================
// HELP + SETTINGS v1.1
// ==========================================================
const helpButton = $("helpButton");
const settingsButton = $("settingsButton");
const helpDrawer = $("helpDrawer");
const settingsModal = $("settingsModal");
const uiBackdrop = $("uiBackdrop");
const themeSetting = $("themeSetting");
const languageSetting = $("languageSetting");
const defaultUnitsSetting = $("defaultUnitsSetting");

const uiText = {
  es: {
    help: "Ayuda", newCalculation: "Nuevo cálculo", pageTitle: "Selección de reguladores",
    pageSubtitle: "Configure las condiciones del proceso para obtener el regulador óptimo.",
    step1: "Configuración del proceso", step2: "Condiciones de operación", step3: "Bore recomendado", step4: "Selección de regulador",
    settingsTitle: "Configuración", themeTitle: "Apariencia", themeText: "Elige cómo quieres visualizar la herramienta.",
    languageTitle: "Idioma", languageText: "Idioma de la interfaz y de la ayuda.", unitsTitle: "Unidades predeterminadas", unitsText: "Se aplicarán al iniciar y al crear un nuevo cálculo.",
    noteTitle: "Preferencias locales", noteText: "Estas opciones se guardan únicamente en este navegador mediante localStorage.",
    helpHeroTitle: "Guía rápida", helpHeroText: "Completa la configuración, define Worst Case y Best Case y luego pulsa Calcular selección.",
    h1: "Configura el proceso", h1t: "Selecciona unidades, tipo de fluido, media, velocidad aguas abajo, tipo de tubería y droop.",
    h2: "Define las condiciones", h2t: "Worst Case: Pin mínima, Pout mínima y caudal máximo. Best Case: Pin máxima, Pout máxima y caudal mínimo.",
    h3: "Interpreta el bore", h3t: "El Bore de diseño es el mayor entre Worst y Best. La herramienta busca la primera entrada de pipe/tube cuyo ID cumple el diámetro requerido.",
    h4: "Revisa candidatos", h4t: "Verde = dentro de rango, ámbar = revisar, rojo = fuera de rango. Despliega cada regulador para revisar Lockup, Rated Flow, Choked Flow, MWP y Max Adj.",
    warningTitle: "Importante", warningText: "La herramienta sirve para sizing y selección inicial. La selección final debe validarse con catálogo y Flow Curve Generator."
  },
  en: {
    help: "Help", newCalculation: "New calculation", pageTitle: "Regulator selection",
    pageSubtitle: "Configure the process conditions to identify the most suitable regulator.",
    step1: "Process configuration", step2: "Operating conditions", step3: "Recommended bore", step4: "Regulator selection",
    settingsTitle: "Settings", themeTitle: "Appearance", themeText: "Choose how you want to view the tool.",
    languageTitle: "Language", languageText: "Language used by the interface and help panel.", unitsTitle: "Default units", unitsText: "Applied when the tool starts and when creating a new calculation.",
    noteTitle: "Local preferences", noteText: "These options are stored only in this browser using localStorage.",
    helpHeroTitle: "Quick guide", helpHeroText: "Complete the configuration, define Worst Case and Best Case, then press Calculate selection.",
    h1: "Configure the process", h1t: "Select units, fluid type, media, downstream velocity, pipe/tube type and droop.",
    h2: "Define the conditions", h2t: "Worst Case: minimum Pin, minimum Pout and maximum flow. Best Case: maximum Pin, maximum Pout and minimum flow.",
    h3: "Interpret the bore", h3t: "Design Bore is the larger of Worst and Best. The tool finds the first pipe/tube entry whose ID satisfies the required diameter.",
    h4: "Review candidates", h4t: "Green = within range, amber = review, red = out of range. Expand each regulator to review Lockup, Rated Flow, Choked Flow, MWP and Max Adj.",
    warningTitle: "Important", warningText: "This tool is intended for initial sizing and selection. Final selection must be validated against the catalog and Flow Curve Generator."
  }
};

function setText(id, value) { const el = $(id); if (el) el.textContent = value; }

function applyLanguage(lang) {
  const t = uiText[lang] || uiText.es;
  document.documentElement.lang = lang;
  setText("helpLabel", t.help); setText("newCalculationButton", t.newCalculation);
  setText("pageTitle", t.pageTitle); setText("pageSubtitle", t.pageSubtitle);
  setText("step1Label", t.step1); setText("step2Label", t.step2); setText("step3Label", t.step3); setText("step4Label", t.step4);
  setText("helpDrawerTitle", t.help); setText("settingsTitle", t.settingsTitle);
  setText("themeSettingTitle", t.themeTitle); setText("themeSettingText", t.themeText);
  setText("languageSettingTitle", t.languageTitle); setText("languageSettingText", t.languageText);
  setText("unitsSettingTitle", t.unitsTitle); setText("unitsSettingText", t.unitsText);
  setText("settingsNoteTitle", t.noteTitle); setText("settingsNoteText", t.noteText);
  setText("helpHeroTitle", t.helpHeroTitle); setText("helpHeroText", t.helpHeroText);
  setText("helpS1Title", t.h1); setText("helpS1Text", t.h1t); setText("helpS2Title", t.h2); setText("helpS2Text", t.h2t);
  setText("helpS3Title", t.h3); setText("helpS3Text", t.h3t); setText("helpS4Title", t.h4); setText("helpS4Text", t.h4t);
  setText("helpWarningTitle", t.warningTitle); setText("helpWarningText", t.warningText);
  localStorage.setItem("regTool.language", lang);
}

function resolveTheme(theme) {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = resolveTheme(theme);
  localStorage.setItem("regTool.theme", theme);
}

function openBackdrop() { uiBackdrop.hidden = false; document.body.classList.add("panel-open"); }
function closeBackdropIfIdle() {
  if (!helpDrawer.classList.contains("open") && !settingsModal.classList.contains("open")) {
    uiBackdrop.hidden = true; document.body.classList.remove("panel-open");
  }
}
function openHelp() { settingsModal.classList.remove("open"); settingsModal.setAttribute("aria-hidden","true"); helpDrawer.classList.add("open"); helpDrawer.setAttribute("aria-hidden","false"); openBackdrop(); }
function closeHelp() { helpDrawer.classList.remove("open"); helpDrawer.setAttribute("aria-hidden","true"); closeBackdropIfIdle(); }
function openSettings() { closeHelp(); settingsModal.classList.add("open"); settingsModal.setAttribute("aria-hidden","false"); openBackdrop(); }
function closeSettings() { settingsModal.classList.remove("open"); settingsModal.setAttribute("aria-hidden","true"); closeBackdropIfIdle(); }
function closePanels() { helpDrawer.classList.remove("open"); helpDrawer.setAttribute("aria-hidden","true"); settingsModal.classList.remove("open"); settingsModal.setAttribute("aria-hidden","true"); uiBackdrop.hidden = true; document.body.classList.remove("panel-open"); }








themeSetting?.addEventListener("change", () => applyTheme(themeSetting.value));
languageSetting?.addEventListener("change", () => applyLanguage(languageSetting.value));
defaultUnitsSetting?.addEventListener("change", () => {
  localStorage.setItem("regTool.defaultUnits", defaultUnitsSetting.value);
  if (unitSystemSelect.value !== defaultUnitsSetting.value) {
    unitSystemSelect.value = defaultUnitsSetting.value;
    updateUnitLabels(true);
    markCalculationPending();
  }
});

const storedTheme = localStorage.getItem("regTool.theme") || "light";
const storedLanguage = localStorage.getItem("regTool.language") || "es";
const storedUnits = localStorage.getItem("regTool.defaultUnits") || unitSystemSelect.value || "metric";
if (themeSetting) themeSetting.value = storedTheme;
if (languageSetting) languageSetting.value = storedLanguage;
if (defaultUnitsSetting) defaultUnitsSetting.value = storedUnits;
applyTheme(storedTheme);
applyLanguage(storedLanguage);
if (unitSystemSelect.value !== storedUnits) {
  unitSystemSelect.value = storedUnits;
  previousUnitSystem = storedUnits;
  updateUnitLabels(false);
  updateSidebarPreview();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
  if ((localStorage.getItem("regTool.theme") || "light") === "system") applyTheme("system");
});
