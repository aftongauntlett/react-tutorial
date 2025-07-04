import { useState } from 'react';
import SettingSlider from './SettingSlider';
import SettingToggle from './SettingToggle';
import SettingsRow from './SettingsRow';
import SettingsSection from './SettingsSection';
import SettingsTabs from './SettingsTabs';

const TABS = ['General', 'Audio', 'Gameplay', 'Video'] as const;
type Tab = (typeof TABS)[number];

const TAB_TITLES: Record<Tab, string> = {
  General: 'General Settings',
  Audio: 'Terrible Noise Settings',
  Gameplay: 'Mediocre Gameplay Settings',
  Video: 'Shiny Visual Settings',
};

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('General');

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md text-white font-barlow flex flex-col">
      <SettingsTabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto px-6 py-10 mt-10">
        <SettingsSection title={TAB_TITLES[activeTab]}>
          {activeTab === 'General' && (
            <div className="flex flex-col gap-6">
              <SettingsRow label="Placeholder" control={<SettingSlider />} />
              <SettingsRow label="Placeholder" control={<SettingSlider />} />
              <SettingsRow label="Placeholder" control={<SettingToggle />} />
            </div>
          )}
          {activeTab === 'Audio' && (
            <div className="flex flex-col gap-6">
              <SettingsRow label="Narrator Volume" control={<SettingSlider />} />
              <SettingsRow label="Ambient Hum" control={<SettingSlider />} />
              <SettingsRow label="Placeholder" control={<SettingToggle />} />
            </div>
          )}
          {activeTab === 'Gameplay' && (
            <>
              <SettingsRow label="Enable Commentary" control={<SettingToggle />} />
              <SettingsRow label="Show Hints" control={<SettingToggle />} />
            </>
          )}
          {activeTab === 'Video' && (
            <>
              <SettingsRow label="Brightness" control={<SettingSlider />} />
              <SettingsRow label="CRT Scanlines" control={<SettingToggle />} />
            </>
          )}
        </SettingsSection>
        <button
          onClick={onClose}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black border border-black px-6 py-3 rounded text-xl font-bold tracking-wide shadow-md hover:brightness-90 transition"
        >
          Close Settings
        </button>
      </div>
    </div>
  );
}
