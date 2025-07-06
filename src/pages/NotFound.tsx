import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const messages = [
  {
    title: `BROOM CLOSET`,
    subtitle: `Oh, no. Oh no, no, no, no, no, no, no, no, no, not again.`,
    detail: `I won't be a part of this. I'm not going to encourage you. I'm not going to say anything at all. I'm just going to be patient and wait for you to finish whatever it is you enjoy doing so much on this page.`,
  },
  {
    title: 'ERROR: CHAMBER UNAVAILABLE',
    subtitle: 'The Aperture Science Testing Track has... misplaced this page.',
    detail: `It’s probably fine. Just stand still and think about cake until someone reboots the router.`,
  },
  {
    title: 'FILE NOT FOUND',
    subtitle: `Black Mesa could not retrieve your destination.`,
    detail: [
      `Dr. Freeman is still responsible, probably. `,
      `Please try not to destabilize the resonance cascade while we troubleshoot.`,
    ],
  },
  {
    title: `[UNDEFINED]`,
    subtitle: `The End is Never the End The End is Never the End The End is Never the End The End is Never the End…`,
    detail: `...unless the route you requested doesn’t exist.`,
  },
];

export default function NotFound() {
  const message = useMemo(() => {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }, []);

  return (
    <section className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)] px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="text-[clamp(5rem,12vw,10rem)] font-bold font-montserrat text-[var(--color-accent)] leading-none">
            404
          </div>
          <h1 className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase font-mono text-[var(--color-primary)]">
            {message.title}
          </h1>
        </div>
        <div className="text-[var(--color-muted)] font-pixel text-[clamp(0.95rem,2vw,1.1rem)] space-y-6 my-4">
          <p className="">{message.subtitle}</p>
          <p className="">{message.detail}</p>
        </div>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 border-2 border-[var(--color-line)] text-[var(--color-text)] 
             font-semibold font-mono uppercase tracking-widest transition duration-300
             hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Return to main menu
        </Link>
      </div>
    </section>
  );
}
