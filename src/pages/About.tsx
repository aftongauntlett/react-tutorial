import React from 'react';
import { Link } from 'react-router-dom';

interface DevLogEntry {
  date: string;
  version: string;
  title: string;
  type: 'feature' | 'refactor' | 'pivot' | 'struggle' | 'breakthrough';
  description: string;
  details?: string[];
  techStack?: string[];
  learnings?: string[];
}

const DEV_LOG: DevLogEntry[] = [
  {
    date: '2025-08-02',
    version: 'v0.8.0',
    title: 'About Page & Developer Diary',
    type: 'feature',
    description:
      'Added comprehensive About page as a developer diary to track the journey of building this interactive learning platform.',
    details: [
      'Created timeline-style development log',
      'Documented pivots and struggles throughout the process',
      'Added footer navigation to main layout',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.7.0',
    title: 'Major Refactor: Game-First Approach',
    type: 'refactor',
    description:
      "Removed portfolio patterns and embraced pure game aesthetic. This was a crucial pivot that defined the project's identity.",
    details: [
      'Eliminated complex theme switching system',
      'Removed over-engineered portfolio components',
      'Focused on Stanley Parable-inspired game UI',
      'Streamlined codebase for better maintainability',
    ],
    learnings: [
      "Sometimes you need to kill your darlings - complex features that don't serve the core vision",
      'Game UI patterns require different thinking than traditional web UX',
      'Less can be more when it serves a clear artistic vision',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.6.0',
    title: 'Interactive Terminal & Phone System',
    type: 'feature',
    description:
      'Implemented the iconic Stanley Parable office phone with 3D animations and a fully functional git terminal simulation.',
    techStack: ['Framer Motion', 'CSS 3D Transforms', 'Custom Hook Architecture'],
    details: [
      'Built 3D animated phone button with hover states',
      'Created mock git terminal with realistic command responses',
      'Implemented narrator system with typewriter effects',
      'Added breakout terminal functionality',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.5.0',
    title: 'Narrator System & Content Architecture',
    type: 'breakthrough',
    description:
      'Developed the core narrator system that drives the learning experience, with clean separation of content and presentation.',
    details: [
      'Created useNarrator hook for state management',
      'Structured narrative content in separate modules',
      'Built NarratorOutput component with animations',
      'Implemented step-based progression system',
    ],
    learnings: [
      'Good content architecture is crucial for narrative experiences',
      'Custom hooks can encapsulate complex interactive logic beautifully',
      'Animation timing is critical for maintaining immersion',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.4.0',
    title: 'Level Select Interface',
    type: 'feature',
    description:
      'Built the game-style level selection screen inspired by modern gaming interfaces, complete with chapter previews and DLC unlock system.',
    details: [
      'Designed Stanley Parable aesthetic for level cards',
      'Implemented preview panel with chapter information',
      'Added DLC/bonus content unlock mechanics',
      'Created responsive grid layout for different screen sizes',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.3.0',
    title: 'Settings System Overhaul',
    type: 'refactor',
    description:
      'Created comprehensive settings modal with tabbed interface, inspired by game settings menus.',
    details: [
      'Built reusable settings components (sliders, toggles, tabs)',
      'Implemented Stanley Parable-style modal overlay',
      'Added keyboard navigation support',
      'Created modular settings architecture',
    ],
  },
  {
    date: '2025-01-XX',
    version: 'v0.2.0',
    title: 'The Great Code Cleanup',
    type: 'struggle',
    description:
      "Fought through a massive codebase reorganization. This was painful but necessary for the project's future.",
    details: [
      'Standardized component structure across the app',
      'Fixed runtime errors and TypeScript issues',
      'Added proper configuration files',
      'Eliminated dead code and unused dependencies',
    ],
    learnings: [
      'Technical debt accumulates faster than you think',
      'Good file organization is an investment in your future self',
      'Sometimes you need to stop building features and fix the foundation',
    ],
  },
  {
    date: 'Early 2025',
    version: 'v0.1.0',
    title: 'Project Genesis',
    type: 'pivot',
    description:
      'Started as a traditional React tutorial, evolved into an interactive gaming experience. The Stanley Parable inspiration changed everything.',
    details: [
      'Initial concept: Standard coding tutorial website',
      'Discovery: Game narratives make learning more engaging',
      'Pivot: Full commitment to Stanley Parable aesthetic',
      'Foundation: React 19, TypeScript, Vite, Tailwind CSS',
    ],
    learnings: [
      'The best projects often emerge from unexpected pivots',
      'Game design principles apply beautifully to educational content',
      'Having a strong aesthetic vision guides all technical decisions',
    ],
  },
];

const PROJECT_VISION = {
  title: 'Interactive Learning Through Game Narratives',
  description:
    'What started as a simple React tutorial became an experiment in using beloved video game aesthetics and storytelling to make programming concepts more engaging and memorable.',
  goals: [
    'Make Git version control approachable through interactive storytelling',
    'Demonstrate advanced React patterns in a real-world application',
    'Explore how game UI/UX translates to educational technology',
    "Build something that's both educational and genuinely fun to use",
  ],
};

const TECH_CHOICES = {
  frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
  state: ['Zustand', 'Custom Hooks'],
  animation: ['Framer Motion', 'CSS Transforms'],
  routing: ['React Router'],
  styling: ['CSS Custom Properties', 'Game-inspired Design Systems'],
};

const CURRENT_STRUGGLES = [
  'Balancing educational content with engaging gameplay',
  'Making complex Git concepts accessible to beginners',
  'Maintaining performance with heavy animations',
  'Creating responsive design for game-style interfaces',
];

const FUTURE_PLANS = [
  'Complete Aperture Science (React Components) chapter',
  "Build Wheatley's Space Station (Debugging) section",
  'Add Black Mesa (Architecture) final chapter',
  'Implement progress tracking and achievements',
  'Add backend integration for persistent user progress',
];

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              ← Back to Levels
            </Link>
          </div>

          <h1 className="text-4xl font-bold font-barlow mb-4">DEVELOPER DIARY</h1>
          <div className="h-0.5 bg-[var(--color-line)] mb-6"></div>

          {/* Project Vision */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-6 mb-8">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">
              {PROJECT_VISION.title}
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              {PROJECT_VISION.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-accent)] mb-2 tracking-wider">
                  PROJECT GOALS
                </h3>
                <ul className="space-y-1 text-sm">
                  {PROJECT_VISION.goals.map((goal, index) => (
                    <li key={index} className="text-[var(--color-muted)] flex items-start gap-2">
                      <span className="text-[var(--color-primary)] mt-1">▸</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--color-accent)] mb-2 tracking-wider">
                  CURRENT STRUGGLES
                </h3>
                <ul className="space-y-1 text-sm">
                  {CURRENT_STRUGGLES.map((struggle, index) => (
                    <li key={index} className="text-[var(--color-muted)] flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">⚡</span>
                      {struggle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-barlow mb-6">DEVELOPMENT LOG</h2>

          <div className="space-y-6">
            {DEV_LOG.map((entry, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < DEV_LOG.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-[var(--color-line)]"></div>
                )}

                <div className="flex gap-4">
                  {/* Timeline dot */}
                  <div
                    className={`
                    flex-shrink-0 w-12 h-12 rounded border-2 flex items-center justify-center text-sm font-bold
                    ${
                      entry.type === 'feature'
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        : ''
                    }
                    ${
                      entry.type === 'refactor'
                        ? 'border-blue-400 bg-blue-400/10 text-blue-400'
                        : ''
                    }
                    ${
                      entry.type === 'pivot'
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        : ''
                    }
                    ${entry.type === 'struggle' ? 'border-red-400 bg-red-400/10 text-red-400' : ''}
                    ${
                      entry.type === 'breakthrough'
                        ? 'border-green-400 bg-green-400/10 text-green-400'
                        : ''
                    }
                  `}
                  >
                    {entry.version.slice(1, 4)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{entry.title}</h3>
                        <span
                          className={`
                          px-2 py-1 text-xs font-bold rounded tracking-wider
                          ${entry.type === 'feature' ? 'bg-[var(--color-primary)] text-black' : ''}
                          ${entry.type === 'refactor' ? 'bg-blue-400 text-black' : ''}
                          ${entry.type === 'pivot' ? 'bg-[var(--color-accent)] text-black' : ''}
                          ${entry.type === 'struggle' ? 'bg-red-400 text-black' : ''}
                          ${entry.type === 'breakthrough' ? 'bg-green-400 text-black' : ''}
                        `}
                        >
                          {entry.type.toUpperCase()}
                        </span>
                        <span className="text-xs text-[var(--color-muted)]">{entry.date}</span>
                      </div>

                      <p className="text-[var(--color-muted)] mb-3 leading-relaxed">
                        {entry.description}
                      </p>

                      {entry.details && (
                        <div className="mb-3">
                          <h4 className="text-sm font-bold text-[var(--color-text)] mb-2">
                            Key Changes:
                          </h4>
                          <ul className="space-y-1">
                            {entry.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-sm text-[var(--color-muted)] flex items-start gap-2"
                              >
                                <span className="text-[var(--color-primary)] mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.techStack && (
                        <div className="mb-3">
                          <h4 className="text-sm font-bold text-[var(--color-text)] mb-2">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {entry.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-[var(--color-background)] border border-[var(--color-line)] text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {entry.learnings && (
                        <div>
                          <h4 className="text-sm font-bold text-[var(--color-accent)] mb-2">
                            Lessons Learned:
                          </h4>
                          <ul className="space-y-1">
                            {entry.learnings.map((learning, i) => (
                              <li
                                key={i}
                                className="text-sm text-[var(--color-muted)] italic flex items-start gap-2"
                              >
                                <span className="text-[var(--color-accent)] mt-1">→</span>
                                {learning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-6">
            <h3 className="text-xl font-bold font-barlow mb-4">TECH STACK</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--color-accent)] mb-2 tracking-wider">
                  FRONTEND
                </h4>
                <div className="flex flex-wrap gap-2">
                  {TECH_CHOICES.frontend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--color-accent)] mb-2 tracking-wider">
                  STATE & ANIMATION
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...TECH_CHOICES.state, ...TECH_CHOICES.animation].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[var(--color-background)] border border-[var(--color-line)] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-6">
            <h3 className="text-xl font-bold font-barlow mb-4">WHAT'S NEXT</h3>

            <ul className="space-y-2">
              {FUTURE_PLANS.map((plan, index) => (
                <li key={index} className="text-[var(--color-muted)] flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-1">□</span>
                  <span className="text-sm">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-[var(--color-line)] pt-8">
          <p className="text-[var(--color-muted)] text-sm mb-4">
            This project is a love letter to great game design and the belief that learning should
            be engaging.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Built with and countless hours of debugging • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
