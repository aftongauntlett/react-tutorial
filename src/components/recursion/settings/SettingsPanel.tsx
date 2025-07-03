import SettingSlider from './SettingSlider';
import SettingToggle from './SettingToggle';

interface SettingsPanelProps {
  activeTab: 'Audio' | 'Gameplay' | 'Video';
}

export default function SettingsPanel({ activeTab }: SettingsPanelProps) {
  return (
    <div className="space-y-6">
      {activeTab === 'Audio' && (
        <>
          <SettingSlider label="Number of Bees" value={61} />
          <SettingSlider label="Cheese Grater along a Chalkboard" value={8} />
          <SettingSlider label="Airplane Baby" value={3} />
        </>
      )}

      {activeTab === 'Gameplay' && (
        <>
          <SettingToggle label="Aggressive Recursion Mode" enabled />
          <SettingToggle label="Infinite Doors Enabled" enabled />
          <SettingToggle label="Enable Broom Closet Ending" />
        </>
      )}

      {activeTab === 'Video' && (
        <>
          <SettingSlider label="CRT Flicker Intensity" value={75} />
          <SettingSlider label="Monitor Depth Level" value={4} />
          <SettingToggle label="Enable Light Mode" />
        </>
      )}
    </div>
  );
}
