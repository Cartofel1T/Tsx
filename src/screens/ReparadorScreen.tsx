import { useState, useEffect } from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import SelectField from "../components/SelectField";
import { type Tab, defectos, causas, origenes } from "../types";

interface Props {
  onTab: (t: Tab) => void;
  onVolver: () => void;
}

export default function ReparadorScreen({ onTab, onVolver }: Props) {
  const [cod, setCod] = useState("");
  const [defOriginal, setDefOriginal] = useState("");
  const [cauOriginal, setCauOriginal] = useState("");
  const [oriOriginal, setOriOriginal] = useState("");

  const [def, setDef] = useState("");
  const [cau, setCau] = useState("");
  const [ori, setOri] = useState("");
  const [obs, setObs] = useState("");
  const [grdando, setGrdando] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("rechazo_datos");
    if (!raw) return;
    try {
      const datos = JSON.parse(raw);
      setCod(datos.cod ?? "");
      setDefOriginal(datos.def ?? "");
      setCauOriginal(datos.cau ?? "");
      setOriOriginal(datos.ori ?? "");
    } catch (e) {
      console.error("Error leyendo localStorage:", e);
    }
  }, []);

  const aceptar = async () => {
  setGrdando(true);
  try {
    localStorage.setItem("rechazo_datos", JSON.stringify({
      cod,
      def: def || defOriginal,
      cau: cau || cauOriginal,
      ori: ori || oriOriginal,
    }));
    alert("¡Guardado correctamente!");
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
        <div className="bg-[#0d5fa8] rounded-2xl p-8 w-full max-w-3xl shadow-2xl">

          <div className="bg-white rounded-xl px-6 py-4 text-gray-800 text-center text-base font-medium mb-5 shadow font-mono">
            {cod || "Sin código escaneado"}
          </div>

          <div className="grid grid-cols-4 gap-6 mb-2 text-white font-bold text-base">
            <div>Datos del rechazo</div>
            <div>Actualizar reparador</div>
            <div>Datos actualizados</div>
            <div>Observaciones</div>
          </div>

          <div className="grid grid-cols-4 gap-4 items-start mb-6">

            <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-4 shadow h-full justify-center">
              <span>• {defOriginal || "Sin defecto"}</span>
              <span>• {cauOriginal || "Sin causa"}</span>
              <span>• {oriOriginal || "Sin origen"}</span>
            </div>

            <div className="flex flex-col gap-3">
              <SelectField ops={defectos} val={def} onChange={setDef} lbl={""} />
              <SelectField ops={causas} val={cau} onChange={setCau} lbl={""} />
              <SelectField ops={origenes} val={ori} onChange={setOri} lbl={""} />
            </div>

            <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-4 shadow h-full justify-center">
              <span>• {def || <span className="text-gray-400 italic">Sin seleccionar</span>}</span>
              <span>• {cau || <span className="text-gray-400 italic">Sin seleccionar</span>}</span>
              <span>• {ori || <span className="text-gray-400 italic">Sin seleccionar</span>}</span>
            </div>

            <div className="h-full">
              <textarea
                className="w-full h-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow min-h-[160px]"
                placeholder="Observaciones..."
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button
              onClick={aceptar}
              disabled={grdando}
              className="bg-[#132d52] hover:bg-[#0a1e3a] disabled:opacity-60 transition-colors text-white rounded-xl px-14 py-3 text-lg font-medium shadow"
            >
              {grdando ? "Guardando..." : "Aceptar"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}