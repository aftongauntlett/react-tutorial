type SettingsTabsProps<T extends string> = {
  tabs: readonly T[];
  activeTab: T;
  setActiveTab: (tab: T) => void;
};

export default function SettingsTabs<T extends string>({
  tabs,
  activeTab,
  setActiveTab,
}: SettingsTabsProps<T>) {
  return (
    <div className="flex w-full text-xl font-bold">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-8 text-center cursor-pointer select-none capitalize text-5xl tracking-wide
            ${activeTab === tab ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
