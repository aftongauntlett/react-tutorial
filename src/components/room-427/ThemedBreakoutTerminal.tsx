import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitTerminalPanel from './GitTerminalPanel';
import { useSimulationStore } from '../../lib/state/simulationStore';
import { getNarratorTheme } from '../../lib/narratorThemes';

// Window styling options based on narrator themes
type WindowStyle = 'retro' | 'modern' | 'industrial';

// Helper function to get window styling based on narrator
const getWindowStyle = (narrator: string): WindowStyle => {
  switch (narrator) {
    case 'narrator':
      return 'retro'; // Stanley Parable - Windows 95 style
    case 'gman':
      return 'modern'; // Government sleek
    case 'wheatley':
      return 'industrial'; // Portal 2 industrial
    case 'glados':
      return 'modern'; // Portal clean modern
    default:
      return 'retro';
  }
};

// Helper function to get window title based on narrator
const getWindowTitle = (narrator: string): string => {
  switch (narrator) {
    case 'narrator':
      return 'Terminal';
    case 'gman':
      return 'GOVERNMENT SECURE TERMINAL - CLASSIFIED';
    case 'wheatley':
      return 'APERTURE SCIENCE - TESTING CHAMBER';
    case 'glados':
      return 'APERTURE SCIENCE - LABORATORY TERMINAL';
    default:
      return 'Terminal';
  }
};

interface ThemedBreakoutTerminalProps {
  isMonitorOn: boolean;
  autoOpen?: boolean;
  narrator?: 'narrator' | 'gman' | 'wheatley' | 'glados';
  onClose?: () => void;
}

export default function ThemedBreakoutTerminal({
  isMonitorOn,
  autoOpen = false,
  narrator = 'narrator',
  onClose,
}: ThemedBreakoutTerminalProps) {
  const [isTerminalBrokenOut, setIsTerminalBrokenOut] = useState(autoOpen);
  const { triggerTerminalBreakout, triggerTerminalRestore } = useSimulationStore();

  // Get narrator theme
  const theme = getNarratorTheme(narrator);
  const windowStyle = getWindowStyle(narrator);
  const windowTitle = getWindowTitle(narrator);

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
    onClose?.();
  };

  if (!isMonitorOn) return null;

  const getBorderStyle = () => {
    switch (windowStyle) {
      case 'retro':
        return {
          border: `2px outset ${theme.primary}`, // Windows 95 raised border effect
          borderRadius: '0px', // Completely square
          boxShadow: 'none', // No glow effects
        };
      case 'modern':
        return {
          border: `2px solid ${theme.primary}`,
          borderRadius: '12px',
          boxShadow: `0 4px 32px ${theme.primary}40, 0 0 0 1px ${theme.primary}`,
        };
      case 'industrial':
        return {
          border: `4px solid ${theme.primary}`,
          borderRadius: '4px',
          boxShadow: `0 0 15px ${theme.primary}, inset 0 2px 4px rgba(0, 0, 0, 0.6)`,
        };
    }
  };

  const getHeaderStyle = () => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 8px',
      borderBottom: `1px solid ${theme.line}`,
      height: '28px', // Windows 95 title bar height
    };

    switch (windowStyle) {
      case 'retro':
        return {
          ...baseStyle,
          backgroundColor: '#c0c0c0', // Flat Windows 95 gray
          borderBottom: '1px solid #808080',
          fontFamily: 'var(--font-terminal)',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'none' as const,
          letterSpacing: '0px',
        };
      case 'modern':
        return {
          ...baseStyle,
          backgroundColor: '#2a2a2a',
          backgroundImage: 'linear-gradient(to right, #2a2a2a, #1a1a1a, #2a2a2a)',
          fontFamily: '"Segoe UI", "Arial", sans-serif',
          fontSize: '12px',
          fontWeight: '300',
        };
      case 'industrial':
        return {
          ...baseStyle,
          backgroundColor: '#332200',
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 119, 0, 0.1) 2px, rgba(255, 119, 0, 0.1) 4px)',
          fontFamily: '"Consolas", "Monaco", monospace',
          fontSize: '11px',
          fontWeight: 'bold',
          textTransform: 'uppercase' as const,
        };
    }
  }; // Determine animation based on narrator (Stanley gets scale animation)
  const animationProps =
    narrator === 'narrator'
      ? {
          initial: { scale: 0.1, x: 200, y: -100, opacity: 0 },
          animate: { scale: 1, x: 0, y: 0, opacity: 1 },
          exit: { scale: 0.1, x: 200, y: -100, opacity: 0 },
          transition: {
            type: 'spring' as const,
            stiffness: 200,
            damping: 20,
            opacity: { duration: 0.2 },
          },
        }
      : {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -100, opacity: 0 },
          transition: { duration: 0.3, ease: 'easeOut' as const },
        };

  return (
    <>
      {/* Terminal Icon - appears in monitor */}
      {!isTerminalBrokenOut && (
        <button
          onClick={handleBreakout}
          className="absolute top-2 right-2 w-8 h-8 hover:scale-110 transition-transform group z-10"
          style={{
            backgroundColor: theme.background,
            border: `1px solid ${theme.primary}`,
            borderRadius:
              windowStyle === 'retro' ? '0px' : windowStyle === 'modern' ? '6px' : '3px',
            boxShadow: windowStyle === 'retro' ? 'none' : `0 0 8px ${theme.primary}40`,
          }}
          title="Open Terminal"
        >
          <svg
            className="w-4 h-4 transition-all"
            fill={theme.text}
            viewBox="0 0 20 20"
            style={{
              filter: theme.glow !== 'none' ? `drop-shadow(0 0 2px ${theme.glow})` : 'none',
            }}
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
            {...animationProps}
            className="fixed top-12 right-8 w-[700px] h-[500px] z-50"
            style={{
              backgroundColor: theme.background,
              ...getBorderStyle(),
            }}
          >
            {/* Terminal Header */}
            <div style={getHeaderStyle()}>
              <div className="flex items-center gap-2">
                {/* Windows 95 style window icon */}
                <div
                  className="w-4 h-4 flex items-center justify-center"
                  style={{
                    color: windowStyle === 'retro' ? '#000000' : 'currentColor',
                  }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: windowStyle === 'retro' ? '#000000' : theme.text, // Black text on gray title bar
                    textShadow: 'none',
                    fontFamily:
                      windowStyle === 'retro'
                        ? 'var(--font-terminal)'
                        : '"Courier New", "Lucida Console", monospace',
                  }}
                >
                  {windowTitle}
                </span>
              </div>
              {/* Windows 95 Close Button */}
              <button
                onClick={handleClose}
                className="flex items-center justify-center transition-colors"
                style={{
                  width: '20px',
                  height: '18px',
                  backgroundColor: windowStyle === 'retro' ? '#c0c0c0' : theme.background,
                  border: windowStyle === 'retro' ? '1px outset #c0c0c0' : 'none',
                  borderRadius: '0px', // Square button
                  color: windowStyle === 'retro' ? '#000000' : theme.text,
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
                title="Close Terminal (Put it back where it belongs)"
              >
                ×
              </button>
            </div>

            {/* Terminal Content */}
            <div
              className="h-[calc(100%-28px)] overflow-hidden"
              style={
                {
                  '--color-terminal-bg': theme.background,
                  '--color-text': theme.text,
                  '--color-text-muted': theme.textMuted,
                  '--color-text-white': '#e0e0e0',
                  '--color-command': theme.command,
                  '--color-output': theme.output,
                  '--color-error': theme.error,
                  '--color-warning': theme.warning,
                  '--color-success': theme.success,
                  '--color-cursor': theme.cursor,
                  '--color-prompt': theme.prompt,
                  '--font-terminal':
                    windowStyle === 'retro'
                      ? 'var(--font-terminal)'
                      : '"Courier New", "Lucida Console", monospace',
                } as React.CSSProperties
              }
            >
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
