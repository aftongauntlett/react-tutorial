import StanleyMenu from '@/components/room-427/StanleyMenu';
import GitTerminalPanel from '@/components/room-427/GitTerminalPanel';
import ThemedBreakoutTerminal from '@/components/room-427/ThemedBreakoutTerminal';
import InteractiveMonitor from '@/components/room-427/InteractiveMonitor';
import NarratorOverlay from '@/components/room-427/NarratorOverlay';
import OfficePhone from '@/components/room-427/OfficePhone';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import { useSimulationStore } from '@/lib/state/simulationStore';
import { useState, useRef, useEffect } from 'react';

/**
 * The Room427 component is the main entry view for the Stanley Parable scenario.
 * It renders a 16:9 fixed aspect layout with an interactive terminal,
 * narrator intro text, and the start menu UI.
 */
export default function Room427() {
  /** Controls when to show the full-screen terminal (after intro completes) */
  const [showFullTerminal, setShowFullTerminal] = useState(false);

  /** Tracks if user has entered a valid command in the interactive monitor */
  const [hasEnteredCommand, setHasEnteredCommand] = useState(false);

  /** Detects if screen is below minimum interactive size (mobile/tablet) */
  const isSmallScreen = useIsSmallScreen();

  /** Prevents showing menu interaction on small screens */
  const [terminalStarted, setTerminalStarted] = useState(isSmallScreen);

  /** Direct ref access to terminal input field */
  const inputRef = useRef<HTMLInputElement>(null);

  /** Simulation state from store */
  const { phase, isMonitorOn, turnOnMonitor } = useSimulationStore();

  // Warn user about losing progress when navigating away
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (phase !== 'idle' && phase !== 'complete') {
        const message =
          "Are you sure? Your progress will be lost... you will have to start from the beginning? Employee 427 doesn't usually abandon his work mid-task, but I suppose even the most dedicated employees have their limits.";
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [phase]);

  /**
   * Called when the git learning sequence completes.
   */
  const handleComplete = () => {
    if (showFullTerminal) return;
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
          src="/images/narrator-bg.png"
          alt="Stanley's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Terminal monitor in static office screen (before fullscreen transition) */}
        <div
          className="absolute overflow-hidden rounded-[2px]"
          style={{ top: '43%', left: '62.3%', width: '16.8%', height: '25%' }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Monitor "off" state - gray/dark background */}
          {(!isMonitorOn || showFullTerminal) && (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center"></div>
          )}

          {/* Monitor "on" state - interactive terminal that can breakout */}
          {isMonitorOn && !showFullTerminal && (
            <div className="w-full h-full relative">
              <InteractiveMonitor
                isMonitorOn={isMonitorOn}
                onCommandEntered={(command) => {
                  if (command.toLowerCase().includes('git status')) {
                    // Turn off monitor and show breakout terminal
                    setShowFullTerminal(true);
                    setHasEnteredCommand(true);
                  } else {
                    const validCommands = ['options', 'help', 'status', 'git'];
                    if (validCommands.some((cmd) => command.toLowerCase().includes(cmd))) {
                      setHasEnteredCommand(true);
                    }
                  }
                }}
              />
              {/* Show breakout terminal button only after user has entered a command (but not git status) */}
              {hasEnteredCommand && !showFullTerminal && (
                <ThemedBreakoutTerminal narrator="narrator" isMonitorOn={isMonitorOn} />
              )}
            </div>
          )}
        </div>

        {/* Page title (top-left corner) */}
        <div className="absolute top-12 left-20 z-10">
          <p className="text-white font-barlow font-light text-[clamp(1.4rem,2.4vw,1.6rem)] mb-2 lg:leading-none tracking-wider">
            You are coding
          </p>
          <h1 className="text-white font-oswald font-light uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.85] stanley-title">
            The Stanley Parable
          </h1>
        </div>

        {/* Stanley-style main menu (bottom-left corner) */}
        <div className="absolute bottom-12 left-20 z-10">
          <StanleyMenu terminalStarted={terminalStarted} setTerminalStarted={setTerminalStarted} />
        </div>

        {/* Office Phone - Interactive phone button overlay */}
        <OfficePhone />

        {/* Breakout Terminal - appears when git status is typed */}
        {showFullTerminal && (
          <ThemedBreakoutTerminal narrator="narrator" isMonitorOn={true} autoOpen={true} />
        )}
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

      {/* Stanley Parable Narrator Overlay */}
      <NarratorOverlay />
    </section>
  );
}
