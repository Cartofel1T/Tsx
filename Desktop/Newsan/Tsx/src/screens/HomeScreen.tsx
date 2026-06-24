import Header from "../components/Header";
import { type Tab, tabs } from "../types";

interface Props {
  onTab: (t: Tab) => void;
}

export default function HomeScreen({ onTab }: Props) {
  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <div className="bg-gray-100 border-b border-gray-300 flex divide-x divide-gray-300">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onTab(t.id)}
            className="flex-1 py-5 text-gray-800 text-base font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {t.etiqueta}
          </button>
        ))}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
          <line x1="20" y1="40" x2="20" y2="4" stroke="#94a3b8" strokeWidth="2" />
          <polyline points="8,16 20,4 32,16" fill="none" stroke="#94a3b8" strokeWidth="2" />
        </svg>
        <p className="text-blue-300 text-2xl">Elija una Opción</p>
      </div>
    </div>
  );
}
