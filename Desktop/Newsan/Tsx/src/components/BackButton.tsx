interface Props {
  onClick: () => void;
  txt?: string;
}

export default function BackButton({ onClick, txt = "← Volver" }: Props) {
  return (
    <button onClick={onClick} className="mt-4 text-white/60 hover:text-white text-sm underline transition-colors">
      {txt}
    </button>
  );
}
