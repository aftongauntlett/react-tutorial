import { delay } from '@/utils/utils';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { narratorLines as baseNarratorLines } from '@/content/room-427/narratorLines';
import NarratorOutput from './NarratorOutput';

type TerminalPanelProps = {
  /** Optional callback when the terminal sequence completes */
  onComplete?: (name: string) => void;
  /** Optional input ref for external control (focus, etc) */
  inputRef?: React.RefObject<HTMLInputElement | null>;
  /** Whether the prompt should begin showing */
  showPrompt: boolean;
};

/**
 * TerminalPanel component simulates a typewriter-style terminal prompt.
 * Begins by asking the user for their name, then runs a narrator sequence
 * based on their input. Fades to the main scenario when complete.
 */
export default function TerminalPanel({ onComplete, showPrompt, inputRef }: TerminalPanelProps) {
  const navigate = useNavigate();

  // ========== Input State ==========
  const [name, setName] = useState('');
  const MAX_NAME_LENGTH = 20;
  const hasMaxedOut = name.length === MAX_NAME_LENGTH;
  const [isStanley, setIsStanley] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // ========== Prompt/Narration State ==========
  const [typedText, setTypedText] = useState(''); // What is your name? line
  const [typingDone, setTypingDone] = useState(false);
  const [narrationStarted, setNarrationStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [lineText, setLineText] = useState(''); // currently typing line

  const internalRef = useRef<HTMLInputElement>(null);
  const activeRef = inputRef ?? internalRef;

  /**
   * Select narrator script based on name input.
   */
  const narratorLines = useMemo(() => {
    if (isStanley) return baseNarratorLines.stanley;
    if (hasMaxedOut) return baseNarratorLines.maxLength(name);
    return baseNarratorLines.generic(name);
  }, [name, isStanley, hasMaxedOut]);

  /**
   * Typewriter-style effect for 'What is your name?' prompt.
   */
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
        // Focus on input once question finishes
        setTimeout(() => {
          requestAnimationFrame(() => {
            activeRef.current?.focus();
          });
        }, 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [showPrompt]);

  /**
   * Transition to the main scenario route after narration ends.
   */
  const transitionToScenario = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/room-427/start');
    }, 1000);
  };

  /**
   * Kick off narrator sequence with delay and reset.
   */
  const beginNarratorSequence = async () => {
    setTypingDone(false);
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setLineText('');
    setDisplayedLines([]);
    setNarrationStarted(true);
  };

  /**
   * Form submit handler for name input.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setHasSubmitted(true);

    // Easter egg path if user types 'stanley'
    if (name.trim().toLowerCase() === 'stanley') {
      setIsStanley(true);
    }

    await beginNarratorSequence();
  };

  /**
   * If user hits max character length, auto-begin narration.
   */
  useEffect(() => {
    if (hasMaxedOut && typingDone && !narrationStarted) {
      beginNarratorSequence();
    }
  }, [name, typingDone, hasMaxedOut, narrationStarted]);

  /**
   * Render narrator lines one character at a time, one line at a time.
   */
  const runNarratorSequence = async () => {
    for (const line of narratorLines) {
      for (let i = 1; i <= line.length; i++) {
        setLineText(line.slice(0, i));
        await delay(30);
      }
      setDisplayedLines((prev) => [...prev, line]);
      setLineText('');
      await delay(800);
    }

    // Final loading sequence before scenario
    setIsLoading(true);
    await delay(1000);
    setDisplayedLines((prev) => [
      ...prev,
      '<span class="text-[var(--color-soft-white)] animate-pulse-glow">Initializing environment...</span>',
    ]);
    await delay(2000);
    transitionToScenario();
  };

  /**
   * Start narrator typing effect once sequence begins.
   */
  useEffect(() => {
    if (narrationStarted) runNarratorSequence();
  }, [narrationStarted]);

  return (
    <div
      className={`transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div
        className="w-full h-full  text-green-400 font-mono text-[0.80rem] p-2 leading-relaxed cursor-text"
        onClick={() => activeRef.current?.focus()}
      >
        {/* Initial blinking cursor */}
        {!showPrompt && (
          <div>
            &gt; <span className="animate-blink">▊</span>
          </div>
        )}

        {showPrompt && (
          <>
            {/* Typewriter question */}
            <div>
              &gt; {typedText}
              {!typingDone && !hasSubmitted && <span className="animate-blink">▊</span>}
            </div>

            {/* Name input field */}
            {typingDone &&
              !isLoading &&
              displayedLines.length === 0 &&
              !narrationStarted &&
              !hasSubmitted && (
                <form onSubmit={handleSubmit} className="transition-opacity duration-300 ease-out">
                  <div
                    className="relative mt-1 w-full"
                    style={{ '--name-length': name.length } as React.CSSProperties}
                  >
                    <span className="absolute left-0 pr-0">&gt;</span>
                    <input
                      ref={activeRef}
                      spellCheck={false}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-5 bg-transparent border-none outline-none text-green-400 caret-transparent w-full font-mono ps-3"
                      maxLength={MAX_NAME_LENGTH}
                      autoFocus
                    />
                    <span className="absolute top-0 left-[calc(0.8rem+1ch*var(--name-length))] animate-blink text-green-400 ps-1">
                      ▊
                    </span>
                  </div>
                </form>
              )}

            {/* Narrator output block */}
            {(displayedLines.length > 0 || lineText) && (
              <NarratorOutput displayedLines={displayedLines} lineText={lineText} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
