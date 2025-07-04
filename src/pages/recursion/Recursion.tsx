import { useState } from 'react';
import StanleyMenu from '@/components/recursion/StanleyMenu';
import FullTerminal from '@/components/recursion/FullTerminal';
import TerminalPanel from '@/components/recursion/TerminalPanel';

export default function Recursion() {
  const [name, setName] = useState('');
  const [terminalStarted, setTerminalStarted] = useState(false);
  const [showFullTerminal, setShowFullTerminal] = useState(false);

  const handleComplete = (name: string) => {
    setName(name);
    // Start fade
    setTimeout(() => setShowFullTerminal(true), 1000);
  };

  if (showFullTerminal) {
    return <FullTerminal name={name} />;
  }

  return (
    <section className="relative w-full h-screen overflow-hidden text-[var(--color-text)] font-barlow transition-opacity duration-1000">
      {/* Background */}
      <img
        src="/images/recursion-bg.png"
        alt="Stanley's Office"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Terminal */}
      <div
        className="absolute"
        style={{
          top: '43%',
          left: '62.3%',
          width: '16.8%',
          height: '25%',
        }}
      >
        <TerminalPanel showPrompt={terminalStarted} onComplete={handleComplete} />
      </div>

      {/* Header */}
      <div className="absolute top-12 left-20 z-10 leading-none space-y-[-0.4rem]">
        <p className="text-white font-semibold text-[clamp(1.4rem,2.4vw,1.6rem)] scale-y-[1.15]">
          You are learning recursion with
        </p>
        <h1 className="text-white font-bold uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)] scale-y-[1.08]">
          The Stanley Parable
        </h1>
      </div>

      {/* Menu */}
      <div className="absolute bottom-12 left-20 z-10">
        <StanleyMenu terminalStarted={terminalStarted} setTerminalStarted={setTerminalStarted} />
      </div>
    </section>
  );
}
