interface SettingsTabsProps {
  activeTab: 'Audio' | 'Gameplay' | 'Video';
  onChange: (tab: 'Audio' | 'Gameplay' | 'Video') => void;
}

const tabs: ('Audio' | 'Gameplay' | 'Video')[] = ['Audio', 'Gameplay', 'Video'];

export default function SettingsTabs({ activeTab, onChange }: SettingsTabsProps) {
  return (
    <div className="flex gap-6 border-b border-[var(--color-line)] mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative pb-2 text-xl font-semibold tracking-wide ${
            activeTab === tab
              ? 'text-yellow-400'
              : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400" />
          )}
        </button>
      ))}
    </div>
  );
}
