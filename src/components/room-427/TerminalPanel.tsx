import { delay } from '@/utils/utils';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

type TerminalPanelProps = {
  onComplete?: (name: string) => void;
  showPrompt: boolean;
};

export default function TerminalPanel({ onComplete, showPrompt }: TerminalPanelProps) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lineText, setLineText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [narrationStarted, setNarrationStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const MAX_NAME_LENGTH = 20;
  const hasMaxedOut = name.length === MAX_NAME_LENGTH;

  const narratorLines = hasMaxedOut
    ? [`Really, ${name}?...No. You are Stanley. Yes… Stanley. That just feels right.`]
    : [
        `${name}? Remarkable. I didn’t think you could make me nostalgic for “Stanley.”`,
        'No… no… this isn’t right.',
        'Your name is Stanley. Yes… Stanley. That just feels right.',
      ];

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedLines]);

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

  function transitionToScenario() {
    setIsFadingOut(true); // triggers CSS fade-out
    setTimeout(() => {
      navigate('/recursion/start');
    }, 1000); // matches fade duration
  }

  const beginNarratorSequence = () => {
    setTypingDone(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentLineIndex(0);
      setLineText('');
      setDisplayedLines([]);
      setCharIndex(0);
      setNarrationStarted(true);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    beginNarratorSequence();
  };

  useEffect(() => {
    if (typingDone && hasMaxedOut && !narrationStarted) {
      beginNarratorSequence();
    }
  }, [name, typingDone, hasMaxedOut, narrationStarted]);

  useEffect(() => {
    if (!narrationStarted) return;

    const runNarratorSequence = async () => {
      for (const line of narratorLines) {
        // Typewriter animation
        for (let i = 1; i <= line.length; i++) {
          setLineText(line.slice(0, i));
          await delay(30); // Typewriter speed
        }

        // Push full line into displayed list
        setDisplayedLines((prev) => [...prev, line]);
        setLineText('');
        await delay(800); // Pause between lines
      }

      // Final loading + fade + transition
      setIsLoading(true);
      await delay(1500);
      transitionToScenario(); // 👈 This fades out and navigates
    };

    runNarratorSequence();
  }, [narrationStarted]);

  return (
    <div
      className={`transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div
        className="w-full h-full bg-black text-green-400 font-mono text-[clamp(0.6rem,0.8vw,0.95rem)] p-2 leading-relaxed cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {!showPrompt && (
          <div>
            &gt; <span className="animate-blink">▊</span>
          </div>
        )}

        {showPrompt && (
          <>
            <div>
              &gt; {typedText}
              {!typingDone && <span className="animate-blink">▊</span>}
            </div>

            {typingDone && !isLoading && displayedLines.length === 0 && !narrationStarted && (
              <form onSubmit={handleSubmit}>
                <div className="relative mt-1 w-full">
                  <span className="absolute left-0 pr-0">&gt;</span>
                  <input
                    ref={inputRef}
                    spellCheck={false}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-5 bg-transparent border-none outline-none text-green-400 caret-transparent w-full font-mono ps-3"
                    maxLength={MAX_NAME_LENGTH}
                    autoFocus
                    style={{ '--name-length': name.length } as React.CSSProperties}
                  />
                  <span
                    className="absolute top-0 left-[calc(0.8rem+1ch*var(--name-length))] animate-blink text-green-400"
                    style={{ '--name-length': name.length } as React.CSSProperties}
                  >
                    ▊
                  </span>
                </div>
                {hasMaxedOut && (
                  <div className="mt-2">
                    <p className="text-[var(--color-muted)] text-[clamp(0.6rem,0.75vw,0.85rem)] italic">
                      You must be exhausted after typing all that. I certainly am.
                    </p>
                  </div>
                )}
              </form>
            )}

            {isLoading && (
              <div className="mt-4 text-[var(--color-muted)]">
                &gt; <span className="italic">Processing name...</span>
                <span className="ml-2 animate-pulse">█████░░░░░</span>
              </div>
            )}

            {(displayedLines.length > 0 || lineText) && (
              <div className="mt-4 max-h-[12rem] overflow-y-scroll scrollbar-hide pr-2 space-y-2">
                {displayedLines.map((line, idx) => (
                  <div key={idx} className="text-[var(--color-muted)] italic">
                    &gt; {line}
                  </div>
                ))}
                {lineText && (
                  <div className="text-[var(--color-muted)] italic">&gt; {lineText}</div>
                )}
                <div ref={scrollAnchorRef} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
