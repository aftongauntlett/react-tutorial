import StanleyMenu from '@/components/room-427/StanleyMenu';
import TerminalPanel from '@/components/room-427/TerminalPanel';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import { useState, useRef } from 'react';

/**
 * The Room427 component is the main entry view for the Stanley Parable scenario.
 * It renders a 16:9 fixed aspect layout with an interactive terminal,
 * narrator intro text, and the start menu UI.
 */
export default function Room427() {
  /** Captures the user's name after terminal input */
  const [name, setName] = useState('');

  /** Controls when to show the full-screen terminal (after intro completes) */
  const [showFullTerminal, setShowFullTerminal] = useState(false);

  /** Detects if screen is below minimum interactive size (mobile/tablet) */
  const isSmallScreen = useIsSmallScreen();

  /** Prevents showing menu interaction on small screens */
  const [terminalStarted, setTerminalStarted] = useState(isSmallScreen);

  /** Direct ref access to terminal input field */
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Called once the TerminalPanel interaction completes with a name.
   * Sets the name and triggers full-screen terminal transition after delay.
   */
  const handleComplete = (incomingName: string) => {
    if (showFullTerminal) return;
    setName(incomingName);
    setTimeout(() => setShowFullTerminal(true), 3000);
  };

  // Optional dev log for mobile experience skipping logic
  if (isSmallScreen && !terminalStarted) {
    console.log("Skipping main menu. Stanley's screen was... tragically small.");
  }

  return (
    <section className="relative w-full min-h-screen bg-black text-[var(--color-text)] font-barlow flex items-center justify-center">
      <div className="relative w-full max-w-screen-xl aspect-[16/9]">
        {/* Background image – Stanley’s office */}
        <img
          src="/images/recursion-bg.png"
          alt="Stanley's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Terminal monitor in static office screen (before fullscreen transition) */}
        <div
          className="absolute overflow-hidden rounded-[2px] bg-black"
          style={{ top: '43%', left: '62.3%', width: '16.8%', height: '25%' }}
          onClick={() => inputRef.current?.focus()}
        >
          {!showFullTerminal && (
            <TerminalPanel
              showPrompt={terminalStarted}
              onComplete={handleComplete}
              inputRef={inputRef}
            />
          )}
        </div>

        {/* Page title (top-left corner) */}
        <div className="absolute top-12 left-20 z-10">
          <p className="text-white font-semibold text-[clamp(1.4rem,2.4vw,1.6rem)] mb-[-1.4rem] leading-none">
            You are beginning an interview with
          </p>
          <h1 className="text-white font-bold uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)]">
            The Stanley Parable
          </h1>
        </div>

        {/* Stanley-style main menu (bottom-left corner) */}
        <div className="absolute bottom-12 left-20 z-10">
          <StanleyMenu terminalStarted={terminalStarted} setTerminalStarted={setTerminalStarted} />
        </div>
      </div>

      {/* Mobile warning overlay */}
      <div className="md:hidden fixed inset-0 z-50 bg-black text-white flex items-center justify-center px-8 text-center">
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold leading-snug">
          Stanley attempted to evaluate a complex logical statement.
          <br />
          Unfortunately, his screen was far too small to contain both truth and falsehood
          simultaneously.
          <br />
          Perhaps next time, Stanley will try a proper monitor.
        </p>
      </div>
    </section>
  );
}
