import { useState } from "react";
import { type Pantalla, type Tab } from "./types";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import InicioScreen from "./screens/InicioScreen";
import FinScreen from "./screens/FinScreen";
import RechazoScreen from "./screens/RechazoScreen";
import ReparadorScreen from "./screens/ReparadorScreen";

export default function App() {
  const [pant, setPant] = useState<Pantalla>("login");

  const irHome = () => setPant("home");
  const cambiarTab = (t: Tab) => setPant(t);

  return (
    <>
      {pant === "login"     && <LoginScreen onLogin={() => setPant("home")} />}
      {pant === "home"      && <HomeScreen onTab={cambiarTab} />}
      {pant === "inicio"    && <InicioScreen onTab={cambiarTab} onVolver={irHome} />}
      {pant === "fin"       && <FinScreen onTab={cambiarTab} onVolver={irHome} />}
      {pant === "rechazo"   && <RechazoScreen onTab={cambiarTab} onVolver={irHome} />}
      {pant === "reparador" && <ReparadorScreen onTab={cambiarTab} onVolver={irHome} />}
    </>
  );
}
