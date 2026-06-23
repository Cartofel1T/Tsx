<div className="flex gap-3 items-start">
  <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-4 shadow min-w-[7rem]">
    <span>• Defecto</span>
    <span>• Causa</span>
    <span>• Origen</span>
  </div>

  <div className="flex-1 flex flex-col gap-3">
    <p className="text-white font-bold text-sm">Corregir datos</p>
    <select value={def} onChange={(e) => setDef(e.target.value)} className={selectCls} style={arrowStyle}>
      <option value="" disabled>Seleccionar...</option>
      {defectos.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <select value={cau} onChange={(e) => setCau(e.target.value)} className={selectCls} style={arrowStyle}>
      <option value="" disabled>Seleccionar...</option>
      {causas.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <select value={ori} onChange={(e) => setOri(e.target.value)} className={selectCls} style={arrowStyle}>
      <option value="" disabled>Seleccionar...</option>
      {origenes.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>

  <div className="bg-white rounded-xl px-5 py-4 text-sm text-gray-700 flex flex-col gap-4 shadow min-w-[7rem] self-stretch">
    <p className="text-[#0d5fa8] font-bold text-sm">Detalle</p>
    <span>{defActual || "—"}</span>
    <span>{cauActual || "—"}</span>
    <span>{oriActual || "—"}</span>
  </div>
</div>