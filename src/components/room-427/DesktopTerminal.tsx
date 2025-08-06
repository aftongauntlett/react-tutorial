import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSimulationStore } from '../../lib/state/simulationStore';

interface DesktopTerminalProps {
  isMonitorOn: boolean;
  onComplete: () => void;
}

type TerminalState = 'awaiting' | 'input' | 'interactive';

export default function DesktopTerminal({ isMonitorOn, onComplete }: DesktopTerminalProps) {
  const [terminalState, setTerminalState] = useState<TerminalState>('awaiting');
  const [progressBars, setProgressBars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const { phase, triggerTerminalWaiting, currentNarratorText } = useSimulationStore();

  // Cursor blinking effect
  useEffect(() => {
    if (!isMonitorOn) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [isMonitorOn]);

  // Focus input when in input state
  useEffect(() => {
    if (terminalState === 'input' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalState]);

  // Monitor turns on and shows flashing cursor during phone call
  useEffect(() => {
    if (isMonitorOn && terminalState === 'awaiting' && phase === 'monitor-active') {
      // Just show the flashing cursor, don't transition yet
      // The narrator is still speaking during phone call
    }
  }, [isMonitorOn, terminalState, phase]);

  // Handle transition to input state only when narrator completely finishes
  useEffect(() => {
    if (phase === 'terminal-waiting' && terminalState === 'awaiting') {
      // Now transition to input state since narrator has finished
      setTerminalState('input');
    }
  }, [phase, terminalState]);

  // Handle spacebar progression
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Space' && terminalState === 'input') {
      e.preventDefault();

      if (progressBars < 5) {
        setProgressBars((prev) => prev + 1);

        // Complete when all 5 bars are filled
        if (progressBars === 4) {
          setTimeout(() => {
            setTerminalState('interactive');
            onComplete();
          }, 500);
        }
      }
    }
  };

  if (terminalState === 'interactive') {
    // This will be replaced by the InteractiveMonitor component in the parent
    return null;
  }

  return (
    <div className="w-full h-full relative">
      {/* Always present gray background - never fades */}
      <div className="w-full h-full bg-gray-800" />

      {/* Black terminal that fades in on top when monitor is on */}
      <AnimatePresence>
        {isMonitorOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full bg-black text-green-400 p-2 text-sm font-mono"
            style={{ fontFamily: 'var(--font-terminal)' }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {terminalState === 'awaiting' && (
              <div className="h-full flex items-start p-1">
                <div className="flex items-center">
                  <span className="mr-1">&gt;</span>
                  {showCursor && <div className="w-2 h-3 bg-green-400"></div>}
                </div>
              </div>
            )}

            {terminalState === 'input' && (
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-4">
                  <div
                    className="text-2xl text-white font-bold"
                    style={{
                      textShadow:
                        '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    AWAITING
                  </div>
                  <div
                    className="text-2xl mb-6 text-white font-bold"
                    style={{
                      textShadow:
                        '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    INPUT
                  </div>

                  {/* Progress bars as [ _ _ _ _ _ ] */}
                  <div className="flex justify-center items-center space-x-1">
                    <span
                      className="text-white font-bold text-xl"
                      style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
                    >
                      [
                    </span>
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="flex items-center">
                        <span
                          className={`text-lg ${
                            index < progressBars ? 'text-pink-500' : 'text-white'
                          }`}
                          style={{
                            textShadow:
                              index < progressBars
                                ? '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.6)'
                                : '0 0 8px rgba(255, 255, 255, 0.6)',
                          }}
                        >
                          {index < progressBars ? '█' : '_'}
                        </span>
                        {index < 4 && (
                          <span
                            className="text-white mx-1"
                            style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
                          ></span>
                        )}
                      </div>
                    ))}
                    <span
                      className="text-white font-bold text-xl"
                      style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
                    >
                      ]
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
