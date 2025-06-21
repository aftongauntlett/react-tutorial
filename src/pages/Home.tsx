/**
 * Home.tsx
 *
 * Landing page for the simulator.
 * Offers clickable links to individual "planet missions" (lessons),
 * which will eventually be styled as interactive planets.
 */

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-8 drop-shadow-lg">
        Stellar Command Simulator
      </h1>

      {/* Each link below will be turned into an animated planet later */}
      <div className="space-y-6">
        <Link
          to="/vulcan"
          className="block text-xl text-blue-300 hover:text-white transition-colors"
        >
          🪐 Vulcan – FileTree Challenge
        </Link>
        <Link
          to="/bajor"
          className="block text-xl text-yellow-300 hover:text-white transition-colors"
        >
          🪐 Bajor – Tree Traversal Mission
        </Link>
      </div>
    </div>
  );
}