# Swagelok Regulator Selection Tool

Versión web basada en los archivos de curso `Process Regulator Sizing Tool.xlsx` y `RHPS to Process Reg converter.xlsm`.

## Ejecutar

Abrir la carpeta en VS Code y ejecutar `index.html` con **Live Server**. No abrir con `file://`, porque la aplicación usa módulos ES (`import/export`).

## Motor implementado

- Recommended bore to maintain line velocity.
- Conversión Metric / Imperial.
- Gas / Liquid y propiedades desde `DataLookup`.
- Evaluación de 33 candidatos de Process Regulators.
- Worst Case y Best Case.
- Lockup Flow.
- Rated Flow al droop seleccionado.
- Choked Flow.
- Outlet Bore para Tube fitting / SCH40 / SCH80 / SCH160.
- Inlet MWP.
- Max Adj.
- SPE Std / Dual cuando corresponde.
- Control Range.
- Semáforo verde / ámbar / rojo con explicación desplegable.

## Validación inicial

Caso de referencia usado durante la migración:

- Metric / Gas / Natural Gas
- Downstream velocity: 50 m/s
- Droop: 20 %
- Worst: 200 barg / 2 barg / 100 Nm3/h
- Best: 220 barg / 3 barg / 50 Nm3/h

Recommended Bore web: 15.355 mm / 9.403 mm, equivalente a 15.4 mm / 9.4 mm mostrado por Excel.

La herramienta conserva la advertencia del Excel original: el sizing es un punto de partida. La selección final debe verificarse con el catálogo y Flow Curve Generator.


## v0.6.1
- Corrección visual: las etiquetas MIN/MAX permanecen visibles en Worst Case y Best Case en escritorio.
