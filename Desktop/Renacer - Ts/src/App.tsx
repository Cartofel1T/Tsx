import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return isLogged ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setIsLogged(true)} />
  );
}

export default App;