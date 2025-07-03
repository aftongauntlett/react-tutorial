import SettingsTabs from './SettingsTabs';
import SettingsPanel from './SettingsPanel';
import { useState } from 'react';

interface SettingsModalProps {
  onClose: () => void;
}

export default function SettingsModal({ onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<'Audio' | 'Gameplay' | 'Video'>('Audio');

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[var(--color-surface)] text-[var(--color-text)] w-full max-w-4xl p-8 rounded shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-text)] text-sm"
        >
          ✕
        </button>

        <SettingsTabs activeTab={activeTab} onChange={setActiveTab} />
        <SettingsPanel activeTab={activeTab} />
      </div>
    </div>
  );
}
