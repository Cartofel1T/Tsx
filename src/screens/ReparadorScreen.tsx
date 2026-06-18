import { useState } from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import SelectField from "../components/SelectField";
import { type Tab, defectos, causas, origenes } from "../types";

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
  const [obs, setObs] = useState("");
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

  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <TabBar activo="reparador" onChange={onTab} />
      <div className="flex-1 flex items-start justify-center pt-12 px-4">
        <div className="bg-[#0d5fa8] rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
          <div className="bg-white rounded-xl px-6 py-4 text-gray-800 text-center text-base font-medium mb-5 shadow font-mono">
            {codInicial}
          </div>

          <p className="text-blue-200 font-bold text-base mb-3">Detalle</p>
          <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-2 shadow mb-5">
            <span>• Defecto: {defActual || "—"}</span>
            <span>• Causa: {cauActual || "—"}</span>
            <span>• Origen: {oriActual || "—"}</span>
          </div>

          <p className="text-blue-200 font-bold text-base mb-3">Corregir datos</p>
          <div className="flex flex-col gap-4">
            <SelectField lbl="Defecto" ops={defectos} val={def} onChange={setDef} />
            <SelectField lbl="Causa" ops={causas} val={cau} onChange={setCau} />
            <SelectField lbl="Origen" ops={origenes} val={ori} onChange={setOri} />
          </div>

          <div className="mt-5">
            <label htmlFor="obs" className="text-white font-semibold text-sm">Observación</label>
            <textarea
              id="obs"
              className="w-full mt-1 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow"
              rows={4}
              placeholder="Observaciones..."
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mt-5">
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