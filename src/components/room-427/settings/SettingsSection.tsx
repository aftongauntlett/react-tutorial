type SettingsSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-6xl font-medium text-muted mb-10 font-oswald leading-[1.15] scale-y-[1.12]">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
