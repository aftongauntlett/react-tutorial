type LearningBoxProps = {
  step: number;
};

export default function LearningBox({ step }: LearningBoxProps) {
  return (
    <div className="text-text">
      <h2 className="font-bold mb-2 text-[clamp(1rem,1.8vw,1.25rem)]">What You Just Did</h2>
      <p className="text-muted-small text-sm leading-relaxed">
        When you selected an option, you triggered a control flow decision. We'll break it down more
        once real content is added.
      </p>
    </div>
  );
}
