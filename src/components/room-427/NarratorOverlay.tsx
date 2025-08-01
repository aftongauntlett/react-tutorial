import { useSimulationStore } from '@/lib/state/simulationStore';
import { useEffect, useState } from 'react';

/**
 * NarratorOverlay displays the Stanley Parable-style narrator text
 * in a bottom-center overlay, matching the game's visual style.
 */
export default function NarratorOverlay() {
  const { phase, currentNarratorText, turnOnMonitor } = useSimulationStore();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentNarratorText) {
      setIsTyping(true);
      setDisplayText('');

      // Typewriter effect for narrator text
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < currentNarratorText.length) {
          setDisplayText(currentNarratorText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);

          // After phone activation, wait a moment then turn on monitor
          if (phase === 'phone-active' && !isTyping) {
            setTimeout(() => {
              turnOnMonitor();
            }, 2000);
          }
        }
      }, 50); // Typing speed

      return () => clearInterval(typeInterval);
    }
  }, [currentNarratorText, phase, turnOnMonitor, isTyping]);

  // Only show narrator overlay when there's text to display
  if (!currentNarratorText || phase === 'idle') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-end justify-center pb-32">
      <div
        className="bg-black/80 text-white px-8 py-4 rounded-lg max-w-4xl mx-4 border border-gray-600"
        style={{
          fontFamily: '"Times New Roman", serif',
          fontSize: '18px',
          lineHeight: '1.4',
          textAlign: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <p className="italic">
          {displayText}
          {isTyping && <span className="animate-blink">|</span>}
        </p>
      </div>
    </div>
  );
}
