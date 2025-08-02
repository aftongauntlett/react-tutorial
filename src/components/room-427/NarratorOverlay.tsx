import { useSimulationStore } from '@/lib/state/simulationStore';
import { useNarrator } from '@/hooks/useNarrator';
import { useEffect, useState } from 'react';

/**
 * NarratorOverlay displays the Stanley Parable-style narrator text
 * in a bottom-center overlay, matching the game's visual style.
 */
export default function NarratorOverlay() {
  const { phase, currentNarratorText, turnOnMonitor } = useSimulationStore();
  const [narratorStarted, setNarratorStarted] = useState(false);

  // Define narrator sequences for each phase
  const narratorSequences: Record<string, string[]> = {
    'phone-active': [
      'Ah, Stanley. So good of you to finally pick up the phone.',
      "I do hope you're prepared for what promises to be... an enlightening interview experience.",
      'You see, Stanley, we need to assess your... capabilities.',
    ],
    'monitor-active': [
      'Stanley stared at his monitor, which had mysteriously come to life.',
      'Perhaps now he could demonstrate the extent of his... programming prowess.',
    ],
    'terminal-breakout': [
      'What... what are you doing, Stanley?',
      'That terminal is supposed to stay INSIDE the monitor!',
      "How did you... that's not how computers work!",
      "Never mind. We don't have time for this nonsense.",
    ],
    'terminal-restore': [
      'Finally! Stanley put the terminal back where it belongs.',
      "Though I suspect he'll do something equally ridiculous momentarily.",
    ],
    'settings-active': [
      "Oh, how delightful! Stanley simply couldn't resist the allure of a settings menu.",
      "It's almost as if he finds genuine pleasure in adjusting sliders that may or may not do anything at all.",
    ],
  };

  const currentSequence = narratorSequences[phase] || [];

  // Start narrator when specific phases are triggered
  useEffect(() => {
    if (
      currentNarratorText &&
      (phase === 'phone-active' || phase === 'terminal-breakout' || phase === 'terminal-restore') &&
      !narratorStarted
    ) {
      setNarratorStarted(true);
    }
  }, [currentNarratorText, phase, narratorStarted]);

  // Reset when phase changes
  useEffect(() => {
    setNarratorStarted(false);
  }, [phase]);

  const narrator = useNarrator({
    lines: currentSequence,
    isActive: narratorStarted,
    onComplete: () => {
      if (phase === 'phone-active') {
        setTimeout(() => {
          turnOnMonitor();
        }, 500);
      }
    },
  });

  // Only show when narrator has started
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
