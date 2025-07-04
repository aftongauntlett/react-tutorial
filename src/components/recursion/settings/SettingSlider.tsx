import { useState } from 'react';

type SettingSliderProps = {
  defaultValue?: number;
};

export default function SettingSlider({ defaultValue = 50 }: SettingSliderProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="flex items-center gap-4">
      <span className="w-8 text-xl font-bold">{value}</span>
      <div className="relative w-full">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex"
          style={{ '--tw-range-fill': `${value}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
