import React from 'react';

/**
 * TerminalPanel.tsx
 *
 * LCARS-inspired terminal panel that sits below the GalaxyScene.
 * Will eventually display ship stats, warp controls, and sorted planet data.
 */

export default function TerminalPanel() {
  return (
    <section className="w-full bg-black text-white px-6 py-8 font-mono border-t-4 border-yellow-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ship Info + Warp Control */}
        <div className="space-y-4">
          <h2 className="text-lg tracking-widest text-yellow-400 uppercase">Starship Navigation</h2>
          <p className="text-sm text-yellow-300">Current Coordinates: (x, y, z)</p>
          <button className="bg-yellow-600 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-all duration-150">
            Engage Warp Drive
          </button>
        </div>

        {/* Placeholder for Planet List */}
        <div className="space-y-4">
          <h2 className="text-lg tracking-widest text-blue-400 uppercase">Nearest Planets</h2>
          <ul className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <li
                key={i}
                className="bg-blue-800/40 border border-blue-500 rounded px-4 py-2 text-sm text-blue-200"
              >
                Planet #{i + 1} - Distance: ? LY
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}