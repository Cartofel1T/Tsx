interface Props {
  cnt: number;
}

export default function PlacaCounter({ cnt }: Props) {
  return (
    <div className="bg-gray-200 rounded-xl flex flex-col items-center justify-center w-36 min-h-32 shadow">
      <span className="text-gray-600 text-xs mb-1">Conteo placa</span>
      <span className="text-4xl font-semibold text-gray-800">{cnt}</span>
    </div>
  );
}
