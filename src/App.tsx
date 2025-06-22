/**
 * Home.tsx
 *
 * Landing page for the simulator.
 * Offers clickable links to individual "planet missions" (lessons),
 * which will eventually be styled as interactive planets.
 */

import GalaxyScene from "./components/GalaxyScene";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <GalaxyScene />
    </div>
  );
}