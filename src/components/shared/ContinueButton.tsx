export default function ContinueButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full text-[var(--color-text)] text-2xl font-bold tracking-wide font-mono hover:brightness-125"
    >
      {label}
    </button>
  );
}
