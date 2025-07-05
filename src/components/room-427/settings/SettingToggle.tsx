import { useState } from 'react';

export default function SettingToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-start gap-4">
      <span className=" w-7 text-xl font-bold text-white text-[clamp(1rem,1.2vw,1.2rem)]">
        {enabled ? 'On' : 'Off'}
      </span>

      <button
        onClick={() => setEnabled(!enabled)}
        className="relative w-6 h-6 bg-black border border-white"
        aria-pressed={enabled}
      >
        {enabled && <div className="absolute inset-1 bg-yellow-400 border border-black" />}
      </button>
    </div>
  );
}
