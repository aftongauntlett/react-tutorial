/**
 * Home.tsx
 *
 * The main landing page for the Developer Galaxy site.
 * Presents a grid of interactive coding problems that teach core concepts
 * through visual and story-driven scenes. Each card links to a unique learning experience.
 */

import { Link } from 'react-router-dom';
import {
  PiFlowArrowBold,       // Icon for distance optimization
  PiTreeStructure,        // Icon for tree traversal
  PiGitBranchLight        // Icon for file explorer
} from 'react-icons/pi';
import type { IconType } from 'react-icons';

/**
 * HomePage component – displays an overview of all available coding challenges.
 */
export default function HomePage() {
  /**
   * Array of coding problem card metadata.
   * Each item contains a route, title, description, and icon.
   */
  const cardData: {
    to: string;
    title: string;
    description: string;
    Icon: IconType;
  }[] = [
    {
      to: '/distance-optimization',
      title: 'Starship Refuel Challenge',
      description:
        'A greedy optimization problem with interstellar flair. Navigate between gas stops efficiently.',
      Icon: PiFlowArrowBold
    },
    {
      to: '/file-tree-explorer',
      title: 'File Tree Explorer',
      description:
        'Learn depth-first and breadth-first search through an interactive file system journey.',
      Icon: PiTreeStructure
    },
    {
      to: '/tree-traversal',
      title: 'Distance Between Nodes',
      description:
        'Use lowest common ancestor techniques to calculate the shortest path between nodes.',
      Icon: PiGitBranchLight
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)] px-6 py-10 font-roboto overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold font-montserrat tracking-tight mb-4 text-[var(--color-primary)]">
            Intro to Dev
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light">
            Explore interactive missions designed to build technical intuition through story-driven coding problems.
            From fuel logistics to tree recursion, each challenge teaches a core concept in a visual, playful way.
          </p>
        </header>

        {/* Problem Cards */}
        <section className="grid gap-8 sm:grid-cols-2">
          {cardData.map(({ to, title, description, Icon }) => (
            <Link
              key={to}
              to={to}
              className="group p-6 rounded-2xl bg-[var(--color-surface)] shadow-md border border-transparent 
                         hover:border-[var(--color-line)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-3">
                <Icon
                  size={28}
                  className="text-[var(--color-accent)] group-hover:scale-110 transition"
                />
                <h2 className="text-xl font-semibold font-montserrat group-hover:text-[var(--color-primary)] transition">
                  {title}
                </h2>
              </div>
              <p className="text-[var(--color-muted)] text-body">{description}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}