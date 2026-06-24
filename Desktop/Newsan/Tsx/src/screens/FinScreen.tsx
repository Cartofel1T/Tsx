import { useState } from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import SelectField from "../components/SelectField";
import QrScanner from "../components/QrScanner";
import PlacaCounter from "../components/PlacaCounter";
import ScannedTags from "../components/ScannedTags";
import { type Tab, puestos, placasVerif } from "../types";

interface Props {
  onTab: (t: Tab) => void;
}

export default function FinScreen({ onTab }: Props) {
  const [puesto, setPuesto] = useState("");
  const [placa, setPlaca] = useState("");
  const [cnt, setCnt] = useState(1);
  const [cods, setCods] = useState<string[]>([]);

  const alEscanear = (cod: string) => {
    setCods((prev) => [...prev, cod]);
    setCnt((prev) => prev + 1);
  };

  const guardar = () => {
    if (!puesto || !placa) return;
  };

  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <TabBar activo="fin" onChange={onTab} />
      <div className="flex-1 flex items-start justify-center pt-12 px-4">
        <div className="bg-[#0d5fa8] rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
          <SelectField lbl="Seleccione puesto de inicio" ops={puestos} val={puesto} onChange={setPuesto} />
          <div className="mt-5">
            <SelectField lbl="Placa Verificada" ops={placasVerif} val={placa} onChange={setPlaca} />
          </div>
          <div className="mt-6">
            <p className="text-white font-bold text-lg mb-3">Escanee el Qr de la placa</p>
            <div className="flex gap-4">
              <div className="flex-1">
                <QrScanner onScan={alEscanear} />
              </div>
              <PlacaCounter cnt={cnt} />
            </div>
            <ScannedTags cods={cods} />
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={guardar}
              disabled={!puesto || !placa}
              className="bg-[#132d52] hover:bg-[#0a1e3a] disabled:opacity-40 text-white rounded-lg px-8 py-3 text-sm font-medium transition-colors"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
