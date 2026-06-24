import { useState } from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import SelectField from "../components/SelectField";
import QrScanner from "../components/QrScanner";
import { type Tab, defectos, causas, origenes } from "../types";

interface Props {
  onTab: (t: Tab) => void;
}

export default function RechazoScreen({ onTab }: Props) {
  const [cod, setCod] = useState("");
  const [def, setDef] = useState("");
  const [cau, setCau] = useState("");
  const [ori, setOri] = useState("");
  const [grdando, setGrdando] = useState(false);
  const [grdado, setGrdado] = useState(false);

  const completo = cod && def && cau && ori;

  const guardar = async () => {
    if (!completo) return;
    setGrdando(true);
    try {
      localStorage.setItem("rechazo_datos", JSON.stringify({ cod, def, cau, ori }));
      setGrdado(true);
      setTimeout(() => {
        setGrdado(false);
        setCod(""); setDef(""); setCau(""); setOri("");
      }, 2000);
    } catch (e) {
      console.error(e);
    } finally {
      setGrdando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <TabBar activo="rechazo" onChange={onTab} />
      <div className="flex-1 flex items-start justify-center pt-10 px-4">
        <div className="w-full max-w-sm">
          <p className="text-white font-bold text-xl mb-3">Qr</p>
          {cod ? (
            <div
              onClick={() => setCod("")}
              className="w-full bg-[#0d5fa8] rounded-xl px-4 py-5 text-white text-center font-mono text-sm mb-4 shadow cursor-pointer hover:bg-[#0a4d8c] transition-colors"
            >
              {cod}
            </div>
          ) : (
            <div className="mb-4">
              <QrScanner onScan={setCod} />
            </div>
          )}
          <div className="bg-[#0d5fa8] rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
            <p className="text-white font-bold text-center text-base">
              Seleccione y complete<br />los campos
            </p>
            <SelectField lbl="Defecto" ops={defectos} val={def} onChange={setDef} />
            <SelectField lbl="Causa" ops={causas} val={cau} onChange={setCau} />
            <SelectField lbl="Origen" ops={origenes} val={ori} onChange={setOri} />
          </div>
          <button
            onClick={guardar}
            disabled={!completo || grdando}
            className="mt-6 w-full bg-[#0d5fa8] hover:bg-[#0a4d8c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white rounded-xl py-5 text-2xl font-medium shadow-2xl"
          >
            {grdado ? "¡Guardado!" : grdando ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
}