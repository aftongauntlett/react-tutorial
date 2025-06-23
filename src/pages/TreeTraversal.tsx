import { TreeExplanation } from "../components/magic/TreeExplanation";

export default function Bajor() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-300">
        Tree Traversal
      </h2>
      <TreeExplanation />
    </div>
  );
}