import { ReactNode } from 'react';

export default function SettingsRow({ label, control }: { label: string; control: ReactNode }) {
  return (
    <div className="grid grid-cols-12 items-center gap-4">
      <div className="col-span-8 text-4xl text-muted hover:text-white font-medium">{label}</div>
      <div className="col-span-4 flex items-center">{control}</div>
    </div>
  );
}
