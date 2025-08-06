type QuestionSceneProps = {
  step: number;
  onNext: () => void;
};

export default function QuestionScene({ step, onNext }: QuestionSceneProps) {
  return (
    <div className="text-[var(--color-text)]">
      <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">Question {step + 1}</h1>
      <p className="mb-6 text-muted">
        Stanley finds himself in a room with two doors. Which does he choose?
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={onNext}
          className="text-left px-4 py-2 border border-[var(--color-line)] rounded-lg hover:bg-[var(--color-muted)]/10 transition"
        >
          🚪 The door on the left
        </button>
        <button
          onClick={onNext}
          className="text-left px-4 py-2 border border-[var(--color-line)] rounded-lg hover:bg-[var(--color-muted)]/10 transition"
        >
          🚪 The door on the right
        </button>
      </div>
    </div>
  );
}
