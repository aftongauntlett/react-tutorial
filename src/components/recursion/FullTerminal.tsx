import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { unlockAchievement } from '@/lib/state/achievementStore';

const EXIT_COMMANDS = [':q', ':wq', 'exit', 'logout', 'quit'];

export default function FullTerminal({ name }: { name: string }) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (EXIT_COMMANDS.includes(trimmed)) {
      unlockAchievement('terminal_exit_keyboard');
      navigate('/');
    }

    setInput('');
  };

  return (
    <div className="w-full h-screen bg-[var(--color-background)] flex items-center justify-center relative">
      {/* Exit Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-6 text-[var(--color-muted)] hover:text-white font-mono text-sm underline"
      >
        Exit Terminal
      </button>

      {/* Terminal Window */}
      <div className="rounded-xl bg-black/90 border border-[var(--color-line)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)] backdrop-blur-sm w-[90%] max-w-5xl h-[85%] p-6 text-green-400 font-mono text-[clamp(0.8rem,1vw,1rem)] flex flex-col justify-between">
        <div className="mb-4">
          <p> Welcome, {name}. You’ve entered the terminal...</p>
          <p className="mt-4 italic text-[var(--color-muted)]">
            Narrator voice takes over from here.
          </p>
        </div>

        {/* Command Input */}
        <form onSubmit={handleCommand}>
          <div className="flex items-center gap-1">
            <span>&gt;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 flex-1"
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
}
