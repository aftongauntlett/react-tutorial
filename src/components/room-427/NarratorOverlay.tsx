import { useSimulationStore } from '@/lib/state/simulationStore';
import { useNarrator } from '@/hooks/useNarrator';
import { narratorLines } from '@/content/room-427/narratorLines';
import { useEffect, useState } from 'react';

/**
 * NarratorOverlay displays the Stanley Parable-style narrator text
 * in a bottom-center overlay, matching the game's visual style.
 */
export default function NarratorOverlay() {
  const { phase, currentNarratorText, turnOnMonitor, triggerTerminalWaiting } =
    useSimulationStore();
  const [narratorStarted, setNarratorStarted] = useState(false);

  // Define narrator sequences for each trigger - back to simple approach that worked
  const narratorSequences: Record<string, string[]> = {
    'phone-answered': narratorLines.phoneAnswered,
    'terminal-waiting': [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stanley found himself staring at the mysterious terminal interface.',
    ],
    'terminal-breakout': narratorLines.terminalBreakout,
    'terminal-restore': narratorLines.terminalRestore,
  };

  const currentSequence = narratorSequences[currentNarratorText] || [];

  // Start narrator when we get a valid currentNarratorText
  useEffect(() => {
    if (currentNarratorText && currentSequence.length > 0 && !narratorStarted) {
      setNarratorStarted(true);
    }
  }, [currentNarratorText, currentSequence.length, narratorStarted]);

  // Reset when currentNarratorText becomes empty or phase goes to idle
  // But keep narrator visible during terminal-waiting phase if it was from phone-answered
  useEffect(() => {
    if (!currentNarratorText || phase === 'idle') {
      // Don't reset if we're in terminal-waiting phase and came from phone sequence
      if (phase === 'terminal-waiting' && currentNarratorText === 'phone-answered') {
        return; // Keep narrator visible
      }
      setNarratorStarted(false);
    }
  }, [currentNarratorText, phase]);

  const narrator = useNarrator({
    lines: currentSequence,
    isActive: narratorStarted,
    disableSpacebarOnLastLine: currentNarratorText === 'phone-answered', // Disable spacebar on last line for phone sequence
    onComplete: () => {
      // For non-phone sequences, hide narrator normally
      if (currentNarratorText !== 'phone-answered') {
        setNarratorStarted(false);
      }
      // For phone sequence, onLineComplete handles the last line transition
    },
    onLineComplete: (lineIndex: number) => {
      if (currentNarratorText === 'phone-answered') {
        // Turn on monitor after "Orders came to him through a monitor..." line (index 2)
        if (lineIndex === 2) {
          turnOnMonitor();
        }
        // When reaching the last line ("Stanley, push the space bar"), trigger terminal waiting
        else if (lineIndex === currentSequence.length - 1) {
          triggerTerminalWaiting();
        }
      }
    },
  });

  // Only show when narrator is active
  if (!narratorStarted || currentSequence.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-end justify-center pb-32">
      <div
        className="bg-black/80 text-white px-8 py-4 rounded-lg max-w-4xl mx-4 border border-gray-600 pointer-events-auto cursor-pointer"
        style={{
          fontFamily: 'inherit',
          fontSize: '18px',
          lineHeight: '1.4',
          textAlign: 'center',
          backdropFilter: 'blur(4px)',
        }}
        onClick={narrator.advanceToNext}
      >
        <p className="font-semibold leading-none lg:leading-relaxed">
          {narrator.displayText}
          {narrator.isTyping && <span className="animate-blink">|</span>}
        </p>
        {narrator.showContinuePrompt && !narrator.isTyping && (
          <p className="text-gray-300 text-sm mt-3 opacity-75">Click or press a key to continue</p>
        )}
      </div>
    </div>
  );
}
