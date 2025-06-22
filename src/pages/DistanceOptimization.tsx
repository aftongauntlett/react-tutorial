import GalaxyScene from '../components/GalaxyScene';

export default function DistanceOptimization() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <GalaxyScene />
      <div className="absolute top-0 left-0 p-6 z-10 max-w-md">
        <h2 className="text-2xl font-montserrat font-bold mb-2">Star Trek</h2>
        <p className="text-body text-sm text-[var(--color-muted)]">
WIP        </p>
      </div>
    </div>
  );
}