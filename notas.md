import { useState } from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import BackButton from "../components/BackButton";
import { Tab, defectos, causas, origenes } from "../types";

interface Props {
  onTab: (t: Tab) => void;
  onVolver: () => void;
  codInicial?: string;
  defActual?: string;
  cauActual?: string;
  oriActual?: string;
}

export default function ReparadorScreen({
  onTab,
  onVolver,
  codInicial = "QR-EJEMPLO-001",
  defActual = "",
  cauActual = "",
  oriActual = "",
}: Props) {
  const [def, setDef] = useState(defActual);
  const [cau, setCau] = useState(cauActual);
  const [ori, setOri] = useState(oriActual);
  const [grdando, setGrdando] = useState(false);

  const aceptar = async () => {
    setGrdando(true);
    try {
      onVolver();
    } catch (e) {
      console.error(e);
    } finally {
      setGrdando(false);
    }
  };

  const selectCls = "w-full rounded-lg px-4 py-3 bg-white text-gray-800 text-sm appearance-none cursor-pointer shadow focus:outline-none focus:ring-2 focus:ring-blue-400";
  const arrowStyle = {
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat" as const,
    backgroundPosition: "right 12px center",
  };

  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <TabBar activo="reparador" onChange={onTab} />
      <div className="flex-1 flex items-start justify-center pt-12 px-4">
        <div className="bg-[#0d5fa8] rounded-2xl p-8 w-full max-w-3xl shadow-2xl">

          <div className="bg-white rounded-xl px-6 py-4 text-gray-800 text-center text-base font-medium mb-5 shadow font-mono">
            {codInicial}
          </div>

          <div className="flex gap-3 items-start">
            <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-4 shadow min-w-[7rem]">
              <span>• Defecto</span>
              <span>• Causa</span>
              <span>• Origen</span>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <p className="text-white font-bold text-sm w-28 shrink-0">Corregir datos</p>
                <select value={def} onChange={(e) => setDef(e.target.value)} className={selectCls} style={arrowStyle}>
                  <option value="" disabled>Seleccionar...</option>
                  {defectos.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-28 shrink-0" />
                <select value={cau} onChange={(e) => setCau(e.target.value)} className={selectCls} style={arrowStyle}>
                  <option value="" disabled>Seleccionar...</option>
                  {causas.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-28 shrink-0" />
                <select value={ori} onChange={(e) => setOri(e.target.value)} className={selectCls} style={arrowStyle}>
                  <option value="" disabled>Seleccionar...</option>
                  {origenes.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 shadow min-w-[7rem] self-stretch" />
          </div>

          <div className="flex items-center justify-between mt-5">
            <BackButton onClick={onVolver} />
            <button
              onClick={aceptar}
              disabled={grdando}
              className="bg-[#132d52] hover:bg-[#0a1e3a] disabled:opacity-60 transition-colors text-white rounded-xl px-14 py-4 text-xl font-medium shadow"
            >
              {grdando ? "Guardando..." : "Aceptar"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}