interface ResetButtonProps {
  onClick: () => void;
}

export default function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-accent)] text-[var(--color-background)] px-5 py-2 rounded-xl text-base font-medium mt-6 transition hover:opacity-80"
    >
      Restart Simulation
    </button>
  );
}
