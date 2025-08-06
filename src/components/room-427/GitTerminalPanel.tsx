import { useState, useRef, useEffect } from 'react';
import { MockGitTerminal } from '@/lib/mockGitTerminal';
import GitChatbot from './GitChatbot';

type GitTerminalPanelProps = {
  /** Optional callback when the terminal sequence completes */
  onComplete?: () => void;
  /** Optional input ref for external control (focus, etc) */
  inputRef?: React.RefObject<HTMLInputElement | null>;
  /** Whether the prompt should begin showing */
  showPrompt: boolean;
};

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error' | 'info';
  content: string;
  timestamp: Date;
}

export default function GitTerminalPanel({
  onComplete,
  showPrompt,
  inputRef,
}: GitTerminalPanelProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const internalRef = useRef<HTMLInputElement>(null);
  const activeRef = inputRef ?? internalRef;
  const terminalRef = useRef<HTMLDivElement>(null);
  const gitTerminal = useRef(new MockGitTerminal());

  // Welcome message and initial setup
  useEffect(() => {
    if (!showPrompt) return;

    const welcomeMessage = `Welcome to the Stanley Parable Git Workshop!

You've just started working on the Employee Portal project, but there's a problem...

Another developer has been working on the same files you were editing.

Your changes updated the adventure button color from yellow to red for better visibility.

Their changes updated the same button color from yellow to blue for brand consistency.

Both changes were committed separately, and now we have a merge conflict!

Let's start by checking the current state of the repository.

Try typing 'git status' to see what's going on.`;

    setLines([
      {
        id: '1',
        type: 'info',
        content: welcomeMessage,
        timestamp: new Date(),
      },
    ]);

    // Focus input after a brief delay
    setTimeout(() => {
      setIsReady(true);
      activeRef.current?.focus();
    }, 1000);
  }, [showPrompt]);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const command = currentInput.trim();

    // Add user command to terminal
    const commandLine: TerminalLine = {
      id: Date.now().toString(),
      type: 'command',
      content: `$ ${command}`,
      timestamp: new Date(),
    };

    setLines((prev) => [...prev, commandLine]);
    setCurrentInput('');

    // Process command with mock git terminal
    const result = gitTerminal.current.executeCommand(command);

    // Handle special commands
    if (result.nextStep === 'OPEN_CHATBOT') {
      setShowChatbot(true);
      return;
    }

    if (result.nextStep === 'CLEAR_TERMINAL') {
      setLines([]);
      return;
    }

    // Add command output
    if (result.output) {
      const outputType: TerminalLine['type'] = result.type === 'success' ? 'output' : result.type;
      const outputLine: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type: outputType,
        content: result.output,
        timestamp: new Date(),
      };

      setLines((prev) => [...prev, outputLine]);
    }

    // Handle special narrative triggers
    if (result.nextStep === 'SHOW_MERGE_CONFLICT') {
      setTimeout(() => {
        const conflictMessage: TerminalLine = {
          id: (Date.now() + 2).toString(),
          type: 'info',
          content: `A merge conflict has occurred! This happens when two people edit the same lines of code.

Let's resolve this step by step:
1. First, let's look at the conflicted file with 'git diff'
2. Then we'll edit the file to resolve the conflict
3. Finally, we'll stage and commit our resolution

This is a common scenario in collaborative development!`,
          timestamp: new Date(),
        };
        setLines((prev) => [...prev, conflictMessage]);
      }, 1500);
    }
  };

  const formatOutput = (content: string, type: TerminalLine['type']) => {
    const lines = content.split('\n');

    return lines.map((line, index) => {
      let className = 'text-sm ';
      let style: React.CSSProperties = {};

      switch (type) {
        case 'command':
          className += 'font-semibold';
          style.color = 'var(--color-command, #00ff00)';
          break;
        case 'error':
          style.color = 'var(--color-error, #ff0000)';
          break;
        case 'info':
          // Use muted white for title and instructions, muted color for backstory
          if (line.includes('Welcome to the Stanley Parable Git Workshop!')) {
            style.color = 'var(--color-text-white, #e0e0e0)';
          } else if (
            line.includes("Let's start by checking") ||
            line.includes('Try typing') ||
            line.includes('This is a common scenario') ||
            line.includes("Let's resolve this step by step:") ||
            line.includes("1. First, let's look") ||
            line.includes("2. Then we'll edit") ||
            line.includes("3. Finally, we'll stage")
          ) {
            style.color = 'var(--color-text-white, #e0e0e0)';
          } else {
            style.color = 'var(--color-muted, #808080)';
          }
          break;
        case 'output':
          style.color = 'var(--color-output, #00ff00)';
          // Special formatting for git output
          if (line.includes('modified:')) style.color = 'var(--color-error, #ff0000)';
          if (line.includes('new file:')) style.color = 'var(--color-success, #00ff00)';
          if (line.includes('deleted:')) style.color = 'var(--color-error, #ff0000)';
          if (line.includes('both modified:')) {
            style.color = 'var(--color-warning, #ffff00)';
            className += ' font-semibold';
          }
          break;
        default:
          style.color = 'var(--color-muted, #808080)';
      }

      return (
        <div key={index} className={className} style={style}>
          {line || '\u00A0'} {/* Non-breaking space for empty lines */}
        </div>
      );
    });
  };

  if (!showPrompt) return null;

  return (
    <>
      <div
        className="w-full h-full overflow-hidden flex flex-col"
        style={{
          backgroundColor: 'var(--color-terminal-bg, #000000)',
          color: 'var(--color-text, #00ff00)',
          fontFamily:
            'var(--font-terminal, ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace)',
        }}
      >
        {/* Terminal content */}
        <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 space-y-2">
          {lines.map((line) => (
            <div key={line.id} className="whitespace-pre-wrap">
              {formatOutput(line.content, line.type)}
            </div>
          ))}
        </div>

        {/* Current input line - pushed to bottom */}
        {isReady && (
          <div className="p-4 pt-0">
            <form onSubmit={handleSubmit} className="flex items-center">
              <span style={{ color: 'var(--color-prompt, #00ff00)' }} className="mr-2">
                $
              </span>
              <div className="flex-1 relative">
                <input
                  ref={activeRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="w-full bg-transparent border-none outline-none"
                  style={{
                    color: 'var(--color-command, #00ff00)',
                    fontFamily: 'inherit',
                    caretColor: 'transparent',
                  }}
                  placeholder=""
                  spellCheck={false}
                  autoComplete="off"
                />
                {/* Custom cursor positioned at the end of text */}
                <span
                  className="absolute top-0 animate-blink"
                  style={{
                    color: 'var(--color-cursor, #00ff00)',
                    left: `${currentInput.length * 0.6}em`,
                  }}
                >
                  ▊
                </span>
              </div>
            </form>
          </div>
        )}

        {/* Status bar */}
        <div className="border-t border-gray-700 px-4 py-2 bg-gray-900 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Stanley's Git Learning Terminal</span>
            <span>Type 'help' for Git Assistant</span>
          </div>
        </div>
      </div>

      {/* Git Chatbot Modal */}
      <GitChatbot isVisible={showChatbot} onClose={() => setShowChatbot(false)} />
    </>
  );
}
