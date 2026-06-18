<div className="grid grid-cols-2 gap-4">
  <div>
    <p className="text-blue-200 font-bold text-base mb-3">Detalle</p>
    <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-2 shadow h-full">
      <span>• Defecto: {defActual || "—"}</span>
      <span>• Causa: {cauActual || "—"}</span>
      <span>• Origen: {oriActual || "—"}</span>
    </div>
  </div>

  <div>
    <p className="text-blue-200 font-bold text-base mb-3">Corregir datos</p>
    <div className="flex flex-col gap-3">
      <SelectField lbl="Defecto" ops={defectos} val={def} onChange={setDef} />
      <SelectField lbl="Causa" ops={causas} val={cau} onChange={setCau} />
      <SelectField lbl="Origen" ops={origenes} val={ori} onChange={setOri} />
    </div>
  </div>
</div>