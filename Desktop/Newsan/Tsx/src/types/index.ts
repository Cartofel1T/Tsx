export type Pantalla = "login" | "home" | "inicio" | "fin" | "rechazo" | "reparador";
export type Tab = "inicio" | "fin" | "rechazo" | "reparador";

export interface ItemTab {
  id: Tab;
  etiqueta: string;
}

export const tabs: ItemTab[] = [
  { id: "inicio", etiqueta: "Inicio" },
  { id: "fin", etiqueta: "Fin" },
  { id: "rechazo", etiqueta: "Rechazo" },
  { id: "reparador", etiqueta: "Reparador" },
];

export const puestos = ["Puesto 01", "Puesto 02", "Puesto 03", "Puesto 04"];
export const placasVerif = ["Placa A1", "Placa B2", "Placa C3"];
export const defectos = ["Defecto 01 - Raya", "Defecto 02 - Abolladura", "Defecto 03 - Pintura"];
export const causas = ["Causa 01 - Operador", "Causa 02 - Máquina", "Causa 03 - Material"];
export const origenes = ["Origen 01 - Línea A", "Origen 02 - Línea B", "Origen 03 - Externo"];
