import { useEffect, useState, useRef } from 'react';

type TerminalPanelProps = {
  onComplete?: (name: string) => void;
  showPrompt: boolean;
};

export default function TerminalPanel({ onComplete, showPrompt }: TerminalPanelProps) {
  const [name, setName] = useState('');
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!showPrompt) return;

    const fullText = 'What is your name?';
    let index = 0;
    let output = '';

    const interval = setInterval(() => {
      if (index < fullText.length) {
        output += fullText[index];
        setTypedText(output);
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [showPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete?.(name.trim());
    }
  };

  return (
    <div
      className="w-full h-full bg-black text-green-400 font-mono text-[clamp(0.6rem,0.9vw,1rem)] p-2 leading-relaxed cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {!showPrompt && (
        <div>
          &gt; <span className="animate-blink">▊</span>
        </div>
      )}

      {showPrompt && (
        <>
          <div className="mt-2">
            &gt; {typedText}
            {!typingDone && <span className="animate-blink">▊</span>}
          </div>

          {typingDone && (
            <form onSubmit={handleSubmit}>
              <div className="relative mt-1 w-full">
                <span className="absolute left-0 pr-0">&gt;</span>
                <input
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  ref={inputRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-5 bg-transparent border-none outline-none text-green-400 caret-transparent w-full font-mono ps-3"
                  maxLength={20}
                  autoFocus
                  style={{ '--name-length': name.length } as React.CSSProperties}
                />
                <span
                  className="absolute top-0 ms-1 left-[calc(0.85rem+1ch*var(--name-length))] animate-blink text-green-400"
                  style={{ '--name-length': name.length } as React.CSSProperties}
                >
                  ▊
                </span>
              </div>

              {name.length === 20 && (
                <div className="mt-1 text-[clamp(0.6rem,0.8vw,0.9rem)] text-[var(--color-muted)] italic">
                  <span className="text-white">&gt;</span> That’s quite a long name, Stanley.
                  Perhaps tone it down a bit?
                </div>
              )}
            </form>
          )}
        </>
      )}
    </div>
  );
}
