import { useState } from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";
import Inicio from "./Inicio";
import Fin from "./Fin";
import Rechazo from "./Rechazo";
import Reparador from "./Reparador";

type TabName = "Inicio" | "Fin" | "Rechazo" | "Reparador";

const tabList: TabName[] = ["Inicio", "Fin", "Rechazo", "Reparador"];

function Dashboard() {
  const [tab, setTab] = useState<TabName | null>(null);

  const renderTab = (): JSX.Element => {
    switch (tab) {
      case "Inicio":    return <Inicio />;
      case "Fin":       return <Fin />;
      case "Rechazo":   return <Rechazo />;
      case "Reparador": return <Reparador />;
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 select-none">
            <svg
              width="40" height="52" viewBox="0 0 40 52"
              fill="none" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="opacity-50"
            >
              <line x1="20" y1="50" x2="20" y2="8" />
              <polyline points="6,22 20,6 34,22" />
            </svg>
            <p className="text-[#60a5fa] text-2xl font-light">Elija una Opcion</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a2744]">
      <Navbar />
      <Tabs
        tabs={tabList}
        activeTab={tab}
        setActiveTab={(t: string) => setTab(t as TabName)}
      />
      <div className="flex-1 flex flex-col">
        {renderTab()}
      </div>
    </div>
  );
}

export default Dashboard;