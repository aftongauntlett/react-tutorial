import { useState, useEffect, useRef } from 'react';
import { useSimulationStore } from '../../lib/state/simulationStore';
import { getNarratorTheme } from '../../lib/narratorThemes';

interface InteractiveMonitorProps {
  isMonitorOn: boolean;
  onCommandEntered: (command: string) => void;
  narrator?: 'narrator' | 'gman' | 'wheatley' | 'glados';
}

export default function InteractiveMonitor({
  isMonitorOn,
  onCommandEntered,
  narrator = 'narrator',
}: InteractiveMonitorProps) {
  const [input, setInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<{ command: string; response: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { startNarratorIdleTimer, clearNarratorIdleTimer } = useSimulationStore();

  // Get current theme
  const theme = getNarratorTheme(narrator);
  const bashPrompt = '$ ';

  // Cursor blinking effect
  useEffect(() => {
    if (!isMonitorOn) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [isMonitorOn]);

  // Focus input when monitor turns on
  useEffect(() => {
    if (isMonitorOn && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMonitorOn]);

  // Start idle timer when monitor is active
  useEffect(() => {
    if (isMonitorOn) {
      startNarratorIdleTimer('monitor');
    }
    return () => clearNarratorIdleTimer();
  }, [isMonitorOn, startNarratorIdleTimer, clearNarratorIdleTimer]);

  // Reset idle timer on user interaction
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    clearNarratorIdleTimer();
    if (e.target.value.length > 0) {
      startNarratorIdleTimer('monitor');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const command = input.trim();
      let response = '';

      // Generate responses for commands
      if (command.toLowerCase().includes('git status')) {
        response = 'Opening Git workspace...';
        setCommandHistory((prev) => [...prev, { command, response }]);
        setInput('');
        clearNarratorIdleTimer();
        // Trigger the parent callback after a brief delay to show the response
        setTimeout(() => {
          onCommandEntered(command);
        }, 800);
        return;
      } else if (command.toLowerCase().includes('git')) {
        response = 'Git commands detected. Try "git status" for full workspace...';
        onCommandEntered(command);
      } else if (command.toLowerCase() === 'options' || command.toLowerCase() === 'help') {
        response = 'Advanced options available. Click terminal icon to continue...';
        onCommandEntered(command);
      } else if (command.toLowerCase() === 'status') {
        response = 'Repository status: Ready for advanced operations...';
        onCommandEntered(command);
      } else {
        response = `Unknown command: ${command}. Try: git status, options, help`;
      }

      setCommandHistory((prev) => [...prev, { command, response }]);
      setInput('');
      clearNarratorIdleTimer();
    }
  };

  if (!isMonitorOn) {
    return <div className="w-full h-full bg-gray-800 flex items-center justify-center"></div>;
  }

  return (
    <div
      className="w-full h-full p-4 text-xs overflow-hidden border-2"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.line,
        color: theme.text,
        textShadow: theme.glowIntensity !== 'none' ? theme.glowIntensity : 'none',
        fontFamily:
          narrator === 'narrator'
            ? 'var(--font-terminal)'
            : 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      }}
    >
      <div className="h-full flex flex-col">
        {/* Terminal header */}
        <div className="flex items-center mb-2">
          <div style={{ color: theme.textMuted }}>427@terminal:~$</div>
        </div>

        {/* Command history with themed scrollbar */}
        <div
          className="flex-1 overflow-y-auto mb-2 pr-1 custom-scrollbar"
          style={
            {
              '--scrollbar-thumb': theme.primary,
              '--scrollbar-thumb-hover': theme.secondary,
              '--scrollbar-glow': theme.glow !== 'none' ? theme.glow : 'transparent',
            } as React.CSSProperties
          }
        >
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-1">
              <div style={{ color: theme.command }}>
                {bashPrompt}
                {item.command}
              </div>
              <div className="ml-2" style={{ color: theme.output }}>
                {item.response}
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="flex items-center">
          <span className="mr-2" style={{ color: theme.prompt }}>
            {bashPrompt}
          </span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="bg-transparent outline-none border-none w-full text-xs"
              style={{
                caretColor: 'transparent',
                color: theme.command,
                textShadow: theme.glowIntensity !== 'none' ? theme.glowIntensity : 'none',
                fontFamily:
                  narrator === 'narrator'
                    ? 'var(--font-terminal)'
                    : 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              }}
              placeholder=""
              autoComplete="off"
              spellCheck="false"
            />
            {/* Custom cursor */}
            <span
              className={`absolute top-0 transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${input.length * 0.5}em`,
                color: theme.cursor,
                textShadow: theme.glowIntensity !== 'none' ? theme.glowIntensity : 'none',
              }}
            >
              █
            </span>
          </div>
        </div>

        {/* Hint text */}
        {commandHistory.length === 0 && (
          <div className="mt-2 text-xs opacity-60" style={{ color: theme.textMuted }}>
            Try typing: git status, options, help
          </div>
        )}
      </div>
    </div>
  );
}
