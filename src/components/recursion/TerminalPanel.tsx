export default function TerminalPanel() {
  return (
    <div className="w-full h-full bg-black text-green-400 font-mono text-[clamp(0.6rem,0.9vw,1rem)] p-2 flex items-start">
      <span>
        <span className="pr-1">&gt;</span>
        <span className="inline-block animate-blink">▊</span>
      </span>
    </div>
  );
}
