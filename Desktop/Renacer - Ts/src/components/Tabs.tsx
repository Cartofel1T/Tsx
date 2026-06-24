interface TabsProps {
  tabs: string[];
  activeTab: string | null;
  setActiveTab: (tab: string) => void;
}

function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="bg-gray-50 flex border-b border-gray-200 flex-shrink-0">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActiveTab(t)}
          className={`
            flex-1 py-5 text-base font-medium transition-all duration-150 cursor-pointer
            border-r border-gray-200 last:border-r-0
            ${activeTab === t
              ? "bg-white text-[#1a2744] border-b-2 border-b-[#0036B8]"
              : "text-gray-700 hover:bg-gray-100 hover:text-[#0036B8]"
            }
          `}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default Tabs;