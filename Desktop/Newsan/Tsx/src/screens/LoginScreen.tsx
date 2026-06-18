import { useState } from "react";
import Header from "../components/Header";

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [carg, setCarg] = useState(false);

  const continuar = async () => {
    if (!pass.trim()) { setErr("Por favor ingrese su contraseña."); return; }
    setCarg(true);
    try {
      onLogin();
    } catch (e: any) {
      setErr(e.message ?? "Error al iniciar sesión.");
    } finally {
      setCarg(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e2d4a] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-5xl font-serif mb-16 tracking-wide">Bienvenido</h1>
        <div className="bg-[#0d5fa8] rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <p className="text-white text-lg mb-3">Ingrese su contraseña</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => { setPass(e.target.value); setErr(""); }}
            onKeyDown={(e) => e.key === "Enter" && continuar()}
            disabled={carg}
            className="w-full rounded-lg px-4 py-3 bg-white text-gray-800 placeholder-gray-400 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
          />
          {err && <p className="text-red-300 text-xs mb-3">{err}</p>}
          <button
            onClick={continuar}
            disabled={carg}
            className="w-full bg-[#132d52] hover:bg-[#0a1e3a] disabled:opacity-60 transition-colors text-white rounded-lg py-3 text-base font-medium"
          >
            {carg ? "Verificando..." : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}
