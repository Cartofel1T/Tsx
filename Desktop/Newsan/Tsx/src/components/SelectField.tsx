interface Props {
  lbl: string;
  ops: string[];
  val: string;
  onChange: (v: string) => void;
  ph?: string;
}

export default function SelectField({ lbl, ops, val, onChange, ph = "Seleccionar..." }: Props) {
  const id = lbl.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-white font-semibold text-sm">
        {lbl}
      </label>
      <select
        id={id}
        value={val}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg px-4 py-3 bg-white text-gray-800 text-sm appearance-none cursor-pointer shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>{ph}</option>
        {ops.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
