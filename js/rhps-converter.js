// Interfaz base del conversor RHPS → Process Regulator.
// La lógica real se incorporará desde las hojas CFG-* del archivo RHPS converter.

export function convertRhpsPartNumber(partNumber) {
  const normalized = String(partNumber ?? "").trim().toUpperCase();
  if (!normalized) return { ok: false, message: "Ingresa un Part Number RHPS." };

  return {
    ok: false,
    normalized,
    message: "La lógica de conversión RHPS todavía no ha sido habilitada; no se devolverán equivalencias no validadas."
  };
}
