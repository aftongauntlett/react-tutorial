import { useState } from 'react';

interface planetData {
  name: string;
  distance: number;
}

export default function LogicTerminal() {
  const [logs, setLogs] = useState<string[]>([
    'Initializing navigation systems...',
    'Starship online.',
    'Scanning for nearby planets...',
  ]);

  const [planets, setPlanets] = useState<planetData[]>([
    { name: 'Kepler-22b', distance: 13.4 },
    { name: 'Proxima Centauri b', distance: 4.2 },
    { name: 'HD 209458 b', distance: 7.6 },
    { name: 'Gliese 581g', distance: 20.3 },
    { name: 'TRAPPIST-1e', distance: 39.5 },
    { name: 'WASP-12b', distance: 12.1 },
    { name: 'GJ 1214b', distance: 14.8 },
    { name: '55 Cancri e', distance: 8.6 },
    { name: 'LHS 1140 b', distance: 12.9 },
    { name: 'Tau Ceti e', distance: 11.2 },
  ]);

  const [scanning, setScanning] = useState(false);

  const handleWarp = () => {
    setScanning(true);
    setLogs((prev) => [...prev, `Warp initiated...`, `Re-scanning from new coordinates...`]);

    setTimeout(() => {
      setPlanets((prev) =>
        [...prev]
          .map((p) => ({
            ...p,
            distance: +(p.distance + (Math.random() - 0.5) * 5).toFixed(1),
          }))
          .sort((a, b) => a.distance - b.distance)
      );
      setScanning(false);
    }, 1800); // ~1.8s scanning delay
  };

  return (
    <section className="bg-[var(--color-background)] p-4 rounded-md border-l-8 border-[var(--color-accent)] space-y-4">
      {' '}
      <h2 className="text-xl mb-2 tracking-wide uppercase">Command Terminal</h2>
      <div className="mb-4 space-y-1 max-h-40 overflow-y-auto border-y py-2 border-[var(--color-line)] text-sm">
        {logs.map((log, i) => (
          <p key={i}>{`> ${log}`}</p>
        ))}
        {scanning && (
          <p className="animate-pulse text-[var(--color-muted)]">{`> Scanning for planetary data...`}</p>
        )}
      </div>
      <h3 className="text-sm uppercase text-[var(--color-muted)] mb-1">Nearest Planets</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm">
        {scanning
          ? Array.from({ length: 10 }).map((_, i) => (
              <li
                key={i}
                className="bg-[var(--color-terminal-box)] p-2 rounded animate-pulse text-center text-[var(--color-muted)]"
              >
                Scanning...
              </li>
            ))
          : planets.map((planet, i) => (
              <li key={i} className="bg-[var(--color-terminal-box)] p-2 rounded">
                <strong>{planet.name}</strong>
                <br />
                {planet.distance.toFixed(1)} ly
              </li>
            ))}
      </ul>
      <button
        className="mt-4 px-4 py-2 rounded bg-[var(--color-primary)] hover:bg-opacity-80 transition text-black disabled:opacity-60"
        onClick={handleWarp}
        disabled={scanning}
      >
        {scanning ? 'Calculating...' : 'Warp to new sector'}
      </button>
    </section>
  );
}
