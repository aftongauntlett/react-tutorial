import StanleyMenu from '@/components/recursion/StanleyMenu';
import TerminalPanel from '@/components/recursion/TerminalPanel';
import { useEffect, useState } from 'react';

export default function Recursion() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); // on load
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6">
        <p className="text-[clamp(1rem,3vw,1.5rem)] leading-tight italic">
          Stanley attempted to run the simulation on a tiny screen.
          <br />
          But alas... it was far too small for recursion to unravel itself properly.
          <br />
          Perhaps on a proper monitor, Stanley.
        </p>
      </div>
    );
  }
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-black overflow-hidden">
      <div className="relative w-full max-w-screen-xl aspect-[16/9]">
        {/* Background Image */}
        <img
          src="/images/recursion-bg.png"
          alt="Stanley's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Terminal Positioned in Monitor */}
        <div
          className="absolute"
          style={{
            top: '43%',
            left: '62.3%',
            width: '16.8%',
            height: '25%',
          }}
        >
          <TerminalPanel />
        </div>

        {/* Title */}
        <div className="absolute top-[8%] left-[5%] z-10">
          <p className="text-white font-semibold text-[clamp(1.4rem,2.4vw,1.6rem)] leading-[1.05] scale-y-[1.15]">
            You are learning recursion with
          </p>
          <h1 className="text-white font-semibold uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)] leading-[1] scale-y-[1.08]">
            The Stanley Parable
          </h1>
        </div>

        {/* Menu */}
        <div className="absolute bottom-[5%] left-[5%] z-10">
          <StanleyMenu />
        </div>
      </div>
    </section>
  );
}
