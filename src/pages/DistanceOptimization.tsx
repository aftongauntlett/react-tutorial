import { GalaxyScene } from '../components/galaxy';
import LogicTerminal from '../components/galaxy/LogicTerminal';

export default function DistanceOptimization() {
  return (
    <>
      <GalaxyScene />
      <div className="grid md:grid-cols-2 gap-4 p-6">
        <div className="bg-[var(--color-background)] p-4 rounded-md border-l-8 border-[var(--color-primary)] space-y-4">
          <h1 className="font-trek text-[clamp(1.5rem,3vw,2.2rem)] text-[var(--color-primary)] tracking-widest uppercase">
            Starfleet Personal Log
          </h1>
          <p className="text-sm">
            <strong className="text-[var(--color-muted)]">Officer:</strong> Lt. Commander Data
            <br />
            <strong className="text-[var(--color-muted)]">Stardate:</strong> 49112.3
          </p>
          <p>
            I have initiated an experiment to refine my ability to communicate complex spatial
            algorithms in a more intuitive manner. I will be attempting to explain a
            multi-dimensional proximity calculation—one commonly encountered in exploratory
            missions—to a non-humanoid audience. Specifically, my cat, Spot.
          </p>
          <p>
            Though Spot lacks formal training in spatial reasoning, I hypothesize that simplifying
            these calculations may yield unexpected clarity. After all, clarity is often born not
            from complexity, but from constraint.
          </p>
        </div>

        {/* Command Terminal & Planet Grid */}
        <LogicTerminal />
      </div>
    </>
  );
}
