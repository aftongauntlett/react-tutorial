import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitTerminalPanel from './GitTerminalPanel';
import { useSimulationStore } from '../../lib/state/simulationStore';

interface BreakoutTerminalProps {
  isMonitorOn: boolean;
  autoOpen?: boolean;
}

export default function BreakoutTerminal({ isMonitorOn, autoOpen = false }: BreakoutTerminalProps) {
  const [isTerminalBrokenOut, setIsTerminalBrokenOut] = useState(autoOpen);
  const { triggerTerminalBreakout, triggerTerminalRestore } = useSimulationStore();

  // Auto-open when autoOpen prop changes
  useEffect(() => {
    if (autoOpen && !isTerminalBrokenOut) {
      setIsTerminalBrokenOut(true);
      triggerTerminalBreakout();
    }
  }, [autoOpen, isTerminalBrokenOut, triggerTerminalBreakout]);

  const handleBreakout = () => {
    setIsTerminalBrokenOut(true);
    triggerTerminalBreakout();
  };

  const handleClose = () => {
    setIsTerminalBrokenOut(false);
    triggerTerminalRestore();
  };

  if (!isMonitorOn) return null;

  return (
    <>
      {/* Terminal Icon - appears in monitor */}
      {!isTerminalBrokenOut && (
        <button
          onClick={handleBreakout}
          className="absolute top-2 right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded border border-gray-500 flex items-center justify-center transition-colors group z-10"
          title="Open Terminal"
        >
          <svg
            className="w-3 h-3 text-green-400 group-hover:text-green-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {/* Broken Out Terminal - appears on the "wall" */}
      <AnimatePresence>
        {isTerminalBrokenOut && (
          <motion.div
            initial={{ scale: 0.1, x: 200, y: -100, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            exit={{ scale: 0.1, x: 200, y: -100, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              opacity: { duration: 0.2 },
            }}
            className="fixed top-12 right-8 w-[700px] h-[500px] bg-black border-2 border-green-500 rounded-lg shadow-2xl z-50"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-2 bg-gray-900 border-b border-green-500 rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-green-400 text-sm font-mono">
                  Merge Conflict Resolution Terminal
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-green-400 hover:text-green-300 transition-colors"
                title="Close Terminal (Put it back where it belongs)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Terminal Content */}
            <div className="h-[calc(100%-40px)] overflow-hidden">
              <GitTerminalPanel showPrompt={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for broken out terminal */}
      <AnimatePresence>
        {isTerminalBrokenOut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
