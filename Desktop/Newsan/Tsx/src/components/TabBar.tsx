import { type Tab, tabs } from "../types";

interface Props {
  activo: Tab;
  onChange: (t: Tab) => void;
}

export default function TabBar({ activo, onChange }: Props) {
  return (
    <div className="bg-gray-100 border-b border-gray-300 flex divide-x divide-gray-300">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`flex-1 py-4 text-sm font-medium transition-colors ${
            activo === t.id
              ? "bg-blue-700 text-white"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          {t.etiqueta}
        </button>
      ))}
    </div>
  );
}
