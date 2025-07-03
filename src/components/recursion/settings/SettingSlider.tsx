interface SettingSliderProps {
  label: string;
  value: number;
}

export default function SettingSlider({ label, value }: SettingSliderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label className="text-[var(--color-text)] text-body">{label}</label>
      <div className="flex items-center gap-2">
        <span className="text-muted text-sm w-6 text-right">{value}</span>
        <input
          type="range"
          value={value}
          disabled
          className="w-32 h-2 appearance-none bg-[var(--color-line)] rounded outline-none cursor-default"
        />
      </div>
    </div>
  );
}
