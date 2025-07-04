import StanleyMenu from '@/components/recursion/StanleyMenu';

export default function Recursion() {
  return (
    <section
      className="relative w-full min-h-screen text-[var(--color-text)] font-barlow"
      style={{
        backgroundImage: "url('/images/recursion-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-12 left-20 z-10 space-y-[-0.4rem] leading-tight">
        <p className="font-barlow text-white font-semibold text-[clamp(1.4rem,2.4vw,1.6rem)] leading-[1.05] scale-y-[1.15]">
          You are learning recursion with
        </p>
        <h1 className="font-barlow text-white font-semibold uppercase tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.5rem)] leading-[1] transform scale-y-[1.08]">
          The Stanley Parable
        </h1>
      </div>
      <div className="absolute bottom-12 left-20 z-10">
        <StanleyMenu />
      </div>
    </section>
  );
}
