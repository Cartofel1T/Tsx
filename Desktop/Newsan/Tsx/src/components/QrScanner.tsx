interface Props {
  onScan?: (cod: string) => void;
}

export default function QrScanner({ onScan }: Props) {
  const simular = () => {
    const cod = "QR-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    onScan?.(cod);
  };

  return (
    <button
      onClick={simular}
      className="w-full bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors rounded-xl flex items-center justify-center py-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="2"  y="2"  width="20" height="20" rx="2" stroke="white" strokeWidth="3" fill="none" />
        <rect x="8"  y="8"  width="8"  height="8"  fill="white" />
        <rect x="34" y="2"  width="20" height="20" rx="2" stroke="white" strokeWidth="3" fill="none" />
        <rect x="40" y="8"  width="8"  height="8"  fill="white" />
        <rect x="2"  y="34" width="20" height="20" rx="2" stroke="white" strokeWidth="3" fill="none" />
        <rect x="8"  y="40" width="8"  height="8"  fill="white" />
        <rect x="34" y="34" width="8"  height="8"  fill="white" />
        <rect x="48" y="34" width="8"  height="8"  fill="white" />
        <rect x="34" y="48" width="8"  height="8"  fill="white" />
        <rect x="48" y="48" width="8"  height="8"  fill="white" />
      </svg>
    </button>
  );
}
