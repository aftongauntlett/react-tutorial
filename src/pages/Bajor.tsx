/**
 * Bajor.tsx
 *
 * Mission route for learning tree traversal concepts through visual storytelling.
 * Renders the TreeExplanation component, which walks the user through recursive thinking and structure.
 */

import { TreeExplanation } from "../components/TreeExplanation";


export default function Bajor() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-300">
        Mission: Bajoran Prophecy Parsing
      </h2>

      {/* Interactive tutorial on tree concepts */}
      <TreeExplanation />
    </div>
  );
}