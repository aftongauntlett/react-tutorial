import StanleyMenu from '@/components/room-427/StanleyMenu';
import TerminalPanel from '@/components/room-427/TerminalPanel';
import { useState } from 'react';

export default function Room427() {
  const [name, setName] = useState('');
  const [terminalStarted, setTerminalStarted] = useState(false);
  const [showFullTerminal, setShowFullTerminal] = useState(false);

  const handleComplete = (incomingName: string) => {
    if (showFullTerminal) return;
    setName(incomingName);
    setTimeout(() => setShowFullTerminal(true), 3000);
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-[var(--color-text)] font-barlow flex items-center justify-center">
      <div className="relative w-full max-w-screen-xl aspect-[16/9]">
        {/* Background image */}
        <img
          src="/images/recursion-bg.png"
          alt="Stanley's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Terminal inside office monitor */}
        <div
          className="absolute overflow-hidden rounded-[2px] bg-black"
          style={{ top: '43%', left: '62.3%', width: '16.8%', height: '25%' }}
        >
          {!showFullTerminal && (
            <TerminalPanel showPrompt={terminalStarted} onComplete={handleComplete} />
          )}
        </div>

        {/* Header and Menu */}
        <div className="absolute top-12 left-20 z-10">
          <p className="text-white font-semibold text-[clamp(1.4rem,2.4vw,1.6rem)]">
            You are beginning an interview with
          </p>
          <h1 className="text-white font-bold uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)]">
            The Stanley Parable
          </h1>
        </div>

        <div className="absolute bottom-12 left-20 z-10">
          <StanleyMenu terminalStarted={terminalStarted} setTerminalStarted={setTerminalStarted} />
        </div>
      </div>

      {/* Small screen warning */}
      <div className="md:hidden fixed inset-0 z-50 bg-black text-white flex items-center justify-center px-8 text-center">
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold leading-snug">
          Stanley attempted to run the simulation on a tiny screen.
          <br />
          But alas... it was far too small for recursion to unravel itself properly.
          <br />
          Perhaps on a proper monitor, Stanley.
        </p>
      </div>
    </section>
  );
}
