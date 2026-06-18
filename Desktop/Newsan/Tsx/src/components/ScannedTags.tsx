interface Props {
  cods: string[];
}

export default function ScannedTags({ cods }: Props) {
  if (!cods.length) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {cods.map((c, i) => (
        <span key={i} className="text-xs bg-white text-blue-800 rounded px-2 py-1 font-mono">
          {c}
        </span>
      ))}
    </div>
  );
}
