type NarratorBoxProps = {
  step: number;
};

export default function NarratorBox({ step }: NarratorBoxProps) {
  return (
    <div className="w-full bg-[var(--color-terminal-bg)] text-[var(--color-muted)] p-[clamp(0.75rem,1.5vw,1.5rem)] text-center font-mono text-sm tracking-wide">
      {/* Placeholder narrator text */}
      <p>
        {/* This would update based on user input */}
        [Narrator will respond here after your choice...]
      </p>
    </div>
  );
}
