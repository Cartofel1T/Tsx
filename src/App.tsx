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

  function cambiarTab(t: Tab) {
    return setPant(t);
  }

  return (
    <>
      {pant === "login"     && <LoginScreen onLogin={() => setPant("home")} />}
      {pant === "home"      && <HomeScreen onTab={cambiarTab} />}
      {pant === "inicio"    && <InicioScreen onTab={cambiarTab} />}
      {pant === "fin"       && <FinScreen onTab={cambiarTab}/>}
      {pant === "rechazo"   && <RechazoScreen onTab={cambiarTab} />}
      {pant === "reparador" && <ReparadorScreen onTab={cambiarTab} onVolver={function (): void {
        throw new Error("para quitar el error.");
      } }/>}
    </>
  );
}
