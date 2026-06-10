import { useState } from "react";
import Navbar from "./Navbar";

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [pwd, setPwd] = useState<string>("");

  const submit = (): void => {
    if (pwd.trim()) onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a2744]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-5xl font-light tracking-wide mb-16 select-none">
          Bienvenido
        </h1>

        <div className="bg-[#1a56db] rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <label className="block text-[#93c5fd] text-base font-medium mb-3">
            Ingrese su contraseña
          </label>

          <input
            type="password"
            placeholder="Contraseña"
            value={pwd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && submit()
            }
            className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white mb-4
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       placeholder:text-gray-400 text-base"
          />

          <button
            onClick={submit}
            className="w-full py-3 bg-[#14295b] hover:bg-[#0f1f47] active:scale-[0.99]
                       text-[#93c5fd] font-medium rounded-lg transition-all duration-150
                       cursor-pointer text-base tracking-wide"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;