import { Link } from 'react-router-dom';
import { PiFlowArrowBold, PiTreeStructure, PiGitBranchLight } from 'react-icons/pi';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)] px-6 py-10 font-roboto">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl font-bold font-montserrat tracking-tight mb-4">
            Welcome to the Developer Galaxy
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Explore interactive missions designed to build technical intuition through story-driven coding problems.
            From fuel logistics to tree recursion, each challenge teaches a core concept in a visual, playful way.
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-2">
          <Link
            to="/distance-optimization"
            className="group p-6 rounded-2xl bg-[var(--color-surface)] shadow-md border border-transparent hover:border-[var(--color-line)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-3">
              <PiFlowArrowBold size={28} className="text-[var(--color-accent)] group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold font-montserrat group-hover:text-[var(--color-accent)] transition">
                Starship Refuel Challenge
              </h2>
            </div>
            <p className="text-[var(--color-muted)] text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A greedy optimization problem with interstellar flair.
            </p>
          </Link>

          <Link
            to="/file-tree-explorer"
            className="group p-6 rounded-2xl bg-[var(--color-surface)] shadow-md border border-transparent hover:border-[var(--color-line)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-3">
              <PiTreeStructure size={28} className="text-[var(--color-accent)] group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold font-montserrat group-hover:text-[var(--color-accent)] transition">
                File Tree Explorer
              </h2>
            </div>
            <p className="text-[var(--color-muted)] text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Learn depth-first and breadth-first search interactively.
            </p>
          </Link>

          <Link
            to="/tree-traversal"
            className="group p-6 rounded-2xl bg-[var(--color-surface)] shadow-md border border-transparent hover:border-[var(--color-line)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-3">
              <PiGitBranchLight size={28} className="text-[var(--color-accent)] group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold font-montserrat group-hover:text-[var(--color-accent)] transition">
                Distance Between Nodes
              </h2>
            </div>
            <p className="text-[var(--color-muted)] text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navigate between nodes using LCA techniques.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}