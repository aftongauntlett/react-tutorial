interface SettingToggleProps {
  label: string;
  enabled?: boolean;
}

export default function SettingToggle({ label, enabled = false }: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-[var(--color-text)] text-body">{label}</label>
      <div
        className={`w-10 h-5 rounded-full transition-colors ${
          enabled ? 'bg-yellow-400' : 'bg-[var(--color-line)]'
        } relative`}
      >
        <div
          className={`w-4 h-4 bg-[var(--color-surface)] rounded-full absolute top-[2px] transition-transform ${
            enabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
          }`}
        />
      </div>
    </div>
  );
}
