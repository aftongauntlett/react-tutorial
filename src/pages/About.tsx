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
    date: '2025-08-06',
    version: 'v0.5.2',
    title: 'CSS Architecture Cleanup & Three-Theme System',
    type: 'refactor',
    description:
      'Comprehensive cleanup of CSS variable usage and implementation of proper three-game theme system for future expansion.',
    details: [
      'Standardized CSS custom properties from --color-muted inconsistencies',
      'Restructured theme system for Stanley Parable, Portal, and Half-Life themes',
      'Converted manual CSS variable usage to Tailwind utility classes throughout codebase',
      'Added RGB color variants for proper shadow effects and transparency',
      'Enhanced Footer with portfolio link and animated hover effects',
    ],
    techStack: ['Tailwind CSS', 'CSS Custom Properties', 'Theme System Architecture'],
    learnings: [
      'CSS variable naming consistency is crucial for maintainable themes',
      'Systematic cleanup requires thorough verification to avoid incomplete work',
      'Theme architecture should plan for future game scenarios from the start',
    ],
  },
  {
    date: '2025-08-06',
    version: 'v0.5.1',
    title: 'TypeScript 5.9 Upgrade & Build System Modernization',
    type: 'refactor',
    description:
      'Upgraded TypeScript from 4.9.5 to 5.9.2 to leverage latest features and stricter error checking, resolving all compilation issues.',
    details: [
      'Upgraded TypeScript from 4.9.5 to 5.9.2 (latest stable)',
      'Moved TypeScript to devDependencies for better dependency management',
      'Fixed compilation errors from stricter type checking',
      'Removed references to deleted idle timer functions',
      'Updated package.json and package-lock.json accordingly',
    ],
    techStack: ['TypeScript 5.9.2', 'Vite 6', 'Node.js 14.17+'],
    learnings: [
      'TypeScript 5.9 has stricter error checking that catches real issues',
      'Dependency organization matters for build tool performance',
      'Regular TypeScript upgrades prevent technical debt accumulation',
    ],
  },
  {
    date: '2025-08-02',
    version: 'v0.5.0',
    title: 'Production Polish & About Page',
    type: 'feature',
    description:
      'Major milestone: Added comprehensive About page, fixed narrator timing issues, and prepared application for public sharing.',
    details: [
      'Created comprehensive About page as developer diary',
      'Restored working narrator system with onLineComplete callbacks',
      'Implemented event-driven monitor activation after specific narrative lines',
      'Added non-intrusive WIP indicator and feedback collection',
      'Enhanced footer with three-column layout for better navigation',
    ],
    techStack: ['Custom React Hooks', 'useRef Pattern', 'Event-Driven Architecture'],
    learnings: [
      'Event-driven timing is more reliable than timer-based approaches',
      'Public demos need clear communication about development status',
      'useRef prevents callback dependency issues in complex hooks',
    ],
  },
  {
    date: '2025-08-01',
    version: 'v0.4.0',
    title: 'Stanley Parable Terminal Integration',
    type: 'breakthrough',
    description:
      'The eureka moment: realized the entire game could exist within the main menu by bringing the terminal environment directly into the office scene.',
    details: [
      'Implemented 3D animated office phone with CSS transforms and Framer Motion',
      'Created pixel-perfect terminal overlay that matches background monitor image',
      'Added responsive breakout terminal for full-screen git learning',
      'Positioned interactive elements with surgical precision over office background',
      "Added sarcastic narrator response for mobile users who can't use terminals",
      'Major refactor removing portfolio patterns for pure game UI',
    ],
    techStack: [
      'Framer Motion',
      'CSS 3D Transforms',
      'Pixel-Perfect Positioning',
      'Responsive Design',
    ],
    learnings: [
      'Game UI requires pixel-perfect positioning that fights responsive design principles',
      'CSS transforms preserve 3D perspective but complicate layout calculations',
      "Sometimes the best solution is honestly telling users why something won't work",
      'Main menu environments can be more engaging than separate game screens',
    ],
  },
  {
    date: '2025-07-05',
    version: 'v0.3.1',
    title: 'Narrator System & Content Architecture',
    type: 'feature',
    description:
      'Developed the core narrator system that drives the learning experience, with clean separation of content and presentation.',
    details: [
      'Created useNarrator hook for state management and typewriter effects',
      'Structured narrative content in separate modules by scenario',
      'Built NarratorOutput component with smooth animations and authentic feel',
      'Implemented step-based progression system with callback triggers',
      'Added narrator box with Stanley Parable-inspired styling and timing',
    ],
    techStack: [
      'Custom React Hooks',
      'Zustand State Management',
      'Content Architecture',
      'Animation Timing',
    ],
    learnings: [
      'Good content architecture is crucial for narrative experiences',
      'Custom hooks can encapsulate complex interactive logic beautifully',
      'Animation timing is critical for maintaining immersion',
      'Separating content from presentation enables easy expansion to new scenarios',
    ],
  },
  {
    date: '2025-07-03',
    version: 'v0.3.0',
    title: 'The Great Pivot: From Recursion to Stanley Parable',
    type: 'pivot',
    description:
      'Major creative pivot from teaching recursion through Stanley Parable door choices to focusing on accessibility, design, and version control through game narratives.',
    details: [
      'Scrapped recursion-based Stanley Parable door scenario approach',
      'Pivoted to subjects more aligned with teaching strengths: design, accessibility, git',
      'Introduced Stanley Parable aesthetic and interaction patterns',
      'Built foundation for game-style settings modal and UI components',
      'Established the core vision of making programming education engaging through beloved game aesthetics',
    ],
    learnings: [
      'Pivoting to your teaching strengths leads to better educational content',
      'Game narratives can make dry technical subjects engaging and memorable',
      "Sometimes the best ideas come from what you're passionate about outside work",
      'Clear creative vision makes all subsequent technical decisions easier',
    ],
  },
  {
    date: '2025-06-22',
    version: 'v0.2.1',
    title: 'Frontend Foundation: Vite + Tailwind Migration',
    type: 'feature',
    description:
      'Migrated from Create React App to modern Vite build system with Tailwind CSS, establishing the technical foundation for rapid UI development.',
    details: [
      'Migrated from Create React App to Vite 6 for faster development builds',
      'Integrated Tailwind CSS 3.4.3 with working PostCSS configuration',
      'Added path aliases (@/) for cleaner imports',
      'Set up proper development workflow with hot reloading',
      'Established component structure and routing foundation',
    ],
    techStack: ['Vite 6', 'Tailwind CSS 3.4.3', 'PostCSS', 'Path Aliases', 'React Router'],
    learnings: [
      'Modern build tools significantly improve development experience',
      'Tailwind CSS enables rapid prototyping and consistent design',
      'Good tooling setup pays dividends throughout the project lifecycle',
    ],
  },
  {
    date: '2025-06-20',
    version: 'v0.2.0',
    title: 'Star Trek Exploration Phase',
    type: 'struggle',
    description:
      "Experimented with Star Trek themed approach to teaching tree traversal and recursion through 3D ship navigation and planetary distances, but ultimately didn't align with teaching comfort zone.",
    details: [
      'Built 3D Star Trek ship using Three.js with movement and distance tracking',
      'Designed galaxy scene with modular components and terminal UI structure',
      'Explored teaching recursion through space navigation and planetary systems',
      'Created themed components and routing structure for mission-based learning',
      "Ultimately realized the complexity didn't serve the educational goals effectively",
    ],
    techStack: ['Three.js', 'React Three Fiber', '3D Graphics', 'Mathematical Calculations'],
    learnings: [
      'Complex 3D interfaces can distract from core learning objectives',
      "Teaching works best when you focus on subjects you're passionate about",
      "Sometimes elaborate technical implementations aren't the right solution",
      "It's okay to experiment and then pivot when you find a better direction",
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.1.2',
    title: 'Recursion & Tree Traversal Foundation',
    type: 'feature',
    description:
      'Initial attempt at teaching recursion through interactive file tree components with expandable/collapsible rendering.',
    details: [
      'Built recursive file tree rendering with nested data transformation',
      'Created expandable/collapsible file tree with clean interaction patterns',
      'Added instructional comments for tutorial-style learning',
      'Implemented tree traversal explanations and visual components',
      'Established foundation for recursive programming concepts',
    ],
    techStack: ['Recursive Algorithms', 'Tree Data Structures', 'Interactive Components'],
    learnings: [
      'Visual representation makes abstract programming concepts more accessible',
      'Interactive examples are more engaging than static explanations',
      'Recursive rendering in React requires careful state management',
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.1.1',
    title: 'Backend Infrastructure Setup',
    type: 'feature',
    description:
      'Established full-stack foundation with Express server, MySQL database, and Docker containerization for future user authentication and progress tracking.',
    details: [
      'Built Express.js server with CORS and JSON middleware',
      'Configured MySQL 8.0 database with Docker Compose for easy development',
      'Created /api/files endpoint with proper error handling',
      'Added comprehensive documentation for server setup and configuration',
      'Established foundation for future user accounts, progress tracking, and achievements',
    ],
    techStack: ['Express.js', 'MySQL 8.0', 'Docker Compose', 'Node.js', 'REST API'],
    learnings: [
      'Setting up backend infrastructure early provides flexibility for future features',
      'Docker containerization simplifies database setup across development environments',
      'Well-documented APIs make frontend integration smoother',
      'Planning for user data early influences application architecture decisions',
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.1.0',
    title: 'Project Genesis & Initial Setup',
    type: 'pivot',
    description:
      'Started as a traditional React tutorial project but quickly evolved toward innovative educational approaches combining programming instruction with engaging narratives.',
    details: [
      'Initialized with Create React App as starting foundation',
      'Set up basic project structure and development workflow',
      'Began exploring interactive approaches to programming education',
      'Established Git repository and initial documentation',
      'Planted the seeds for what would become a game-narrative driven learning platform',
    ],
    techStack: ['React 19', 'Create React App', 'Git', 'Basic Project Structure'],
    learnings: [
      'The best projects often emerge from unexpected creative directions',
      'Starting with familiar tools allows focus on innovative educational approaches',
      'Early experimentation helps discover what truly excites you about a project',
      'Good foundation enables rapid iteration and creative pivoting',
    ],
  },
  {
    date: '2025-08-06',
    version: 'v0.11.0',
    title: 'TypeScript 5.9 Upgrade & Build System Modernization',
    type: 'refactor',
    description:
      'Upgraded TypeScript from 4.9.5 to 5.9.2 to leverage latest features and stricter error checking, resolving all compilation issues.',
    details: [
      'Upgraded TypeScript from 4.9.5 to 5.9.2 (latest stable)',
      'Moved TypeScript to devDependencies for better dependency management',
      'Fixed compilation errors from stricter type checking',
      'Removed references to deleted idle timer functions',
      'Updated package.json and package-lock.json accordingly',
    ],
    techStack: ['TypeScript 5.9.2', 'Vite 6', 'Node.js 14.17+'],
    learnings: [
      'TypeScript 5.9 has stricter error checking that catches real issues',
      'Dependency organization matters for build tool performance',
      'Regular TypeScript upgrades prevent technical debt accumulation',
    ],
  },
  {
    date: '2025-08-02',
    version: 'v0.10.0',
    title: 'Event-Driven Narrator System & Monitor Timing',
    type: 'breakthrough',
    description:
      'Fixed critical narrator timing issues by implementing proper event-driven flow, restoring the authentic Stanley Parable experience.',
    details: [
      'Restored working narrator system with onLineComplete callbacks',
      'Implemented event-driven monitor activation after specific narrative lines',
      'Added useRef pattern for stable callback references',
      'Created proper desktop terminal sequence with spacebar progression',
      'Fixed narrator display showing only "A" character issue',
    ],
    techStack: ['Custom React Hooks', 'useRef Pattern', 'Event-Driven Architecture'],
    learnings: [
      'Event-driven timing is more reliable than timer-based approaches',
      'useRef prevents callback dependency issues in complex hooks',
      'Authentic game feel requires precise narrative timing',
    ],
  },
  {
    date: '2025-08-02',
    version: 'v0.9.0',
    title: 'Major Refactor: Portfolio to Pure Game UI',
    type: 'refactor',
    description:
      'Eliminated remaining portfolio patterns and embraced pure Stanley Parable aesthetic. This was the final step in defining the project identity.',
    details: [
      'Removed complex theme switching system and portfolio components',
      'Streamlined codebase for better maintainability and game focus',
      'Added comprehensive About page as developer diary',
      'Enhanced level select interface with Half-Life inspired elements',
      'Implemented proper game-style navigation and footer',
    ],
    learnings: [
      "Sometimes you need to kill your darlings - complex features that don't serve the core vision",
      'Game UI patterns require different thinking than traditional web UX',
      'Less can be more when it serves a clear artistic vision',
    ],
  },
  {
    date: '2025-08-01',
    version: 'v0.8.0',
    title: 'Stanley Parable Terminal Integration',
    type: 'breakthrough',
    description:
      'The eureka moment: realized the entire game could exist within the main menu by bringing the terminal environment directly into the office scene.',
    details: [
      'Implemented 3D animated office phone with CSS transforms and Framer Motion',
      'Created pixel-perfect terminal overlay that matches background monitor image',
      'Added responsive breakout terminal for full-screen git learning',
      'Positioned interactive elements with surgical precision over office background',
      "Added sarcastic narrator response for mobile users who can't use terminals",
    ],
    techStack: [
      'Framer Motion',
      'CSS 3D Transforms',
      'Pixel-Perfect Positioning',
      'Responsive Design',
    ],
    learnings: [
      'Game UI requires pixel-perfect positioning that fights responsive design principles',
      'CSS transforms preserve 3D perspective but complicate layout calculations',
      "Sometimes the best solution is honestly telling users why something won't work",
      'Main menu environments can be more engaging than separate game screens',
    ],
  },
  {
    date: '2025-07-05',
    version: 'v0.7.0',
    title: 'Narrator System & Content Architecture',
    type: 'feature',
    description:
      'Developed the core narrator system that drives the learning experience, with clean separation of content and presentation.',
    details: [
      'Created useNarrator hook for state management and typewriter effects',
      'Structured narrative content in separate modules by scenario',
      'Built NarratorOutput component with smooth animations and authentic feel',
      'Implemented step-based progression system with callback triggers',
      'Added narrator box with Stanley Parable-inspired styling and timing',
    ],
    techStack: [
      'Custom React Hooks',
      'Zustand State Management',
      'Content Architecture',
      'Animation Timing',
    ],
    learnings: [
      'Good content architecture is crucial for narrative experiences',
      'Custom hooks can encapsulate complex interactive logic beautifully',
      'Animation timing is critical for maintaining immersion',
      'Separating content from presentation enables easy expansion to new scenarios',
    ],
  },
  {
    date: '2025-07-03',
    version: 'v0.6.0',
    title: 'The Great Pivot: From Recursion to Stanley Parable',
    type: 'pivot',
    description:
      'Major creative pivot from teaching recursion through Stanley Parable door choices to focusing on accessibility, design, and version control through game narratives.',
    details: [
      'Scrapped recursion-based Stanley Parable door scenario approach',
      'Pivoted to subjects more aligned with teaching strengths: design, accessibility, git',
      'Introduced Stanley Parable aesthetic and interaction patterns',
      'Built foundation for game-style settings modal and UI components',
      'Established the core vision of making programming education engaging through beloved game aesthetics',
    ],
    learnings: [
      'Pivoting to your teaching strengths leads to better educational content',
      'Game narratives can make dry technical subjects engaging and memorable',
      "Sometimes the best ideas come from what you're passionate about outside work",
      'Clear creative vision makes all subsequent technical decisions easier',
    ],
  },
  {
    date: '2025-06-22',
    version: 'v0.5.0',
    title: 'Frontend Foundation: Vite + Tailwind Migration',
    type: 'feature',
    description:
      'Migrated from Create React App to modern Vite build system with Tailwind CSS, establishing the technical foundation for rapid UI development.',
    details: [
      'Migrated from Create React App to Vite 6 for faster development builds',
      'Integrated Tailwind CSS 3.4.3 with working PostCSS configuration',
      'Added path aliases (@/) for cleaner imports',
      'Set up proper development workflow with hot reloading',
      'Established component structure and routing foundation',
    ],
    techStack: ['Vite 6', 'Tailwind CSS 3.4.3', 'PostCSS', 'Path Aliases', 'React Router'],
    learnings: [
      'Modern build tools significantly improve development experience',
      'Tailwind CSS enables rapid prototyping and consistent design',
      'Good tooling setup pays dividends throughout the project lifecycle',
    ],
  },
  {
    date: '2025-06-20',
    version: 'v0.4.0',
    title: 'Star Trek Exploration Phase',
    type: 'struggle',
    description:
      "Experimented with Star Trek themed approach to teaching tree traversal and recursion through 3D ship navigation and planetary distances, but ultimately didn't align with teaching comfort zone.",
    details: [
      'Built 3D Star Trek ship using Three.js with movement and distance tracking',
      'Designed galaxy scene with modular components and terminal UI structure',
      'Explored teaching recursion through space navigation and planetary systems',
      'Created themed components and routing structure for mission-based learning',
      "Ultimately realized the complexity didn't serve the educational goals effectively",
    ],
    techStack: ['Three.js', 'React Three Fiber', '3D Graphics', 'Mathematical Calculations'],
    learnings: [
      'Complex 3D interfaces can distract from core learning objectives',
      "Teaching works best when you focus on subjects you're passionate about",
      "Sometimes elaborate technical implementations aren't the right solution",
      "It's okay to experiment and then pivot when you find a better direction",
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.3.0',
    title: 'Recursion & Tree Traversal Foundation',
    type: 'feature',
    description:
      'Initial attempt at teaching recursion through interactive file tree components with expandable/collapsible rendering.',
    details: [
      'Built recursive file tree rendering with nested data transformation',
      'Created expandable/collapsible file tree with clean interaction patterns',
      'Added instructional comments for tutorial-style learning',
      'Implemented tree traversal explanations and visual components',
      'Established foundation for recursive programming concepts',
    ],
    techStack: ['Recursive Algorithms', 'Tree Data Structures', 'Interactive Components'],
    learnings: [
      'Visual representation makes abstract programming concepts more accessible',
      'Interactive examples are more engaging than static explanations',
      'Recursive rendering in React requires careful state management',
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.2.0',
    title: 'Backend Infrastructure Setup',
    type: 'feature',
    description:
      'Established full-stack foundation with Express server, MySQL database, and Docker containerization for future user authentication and progress tracking.',
    details: [
      'Built Express.js server with CORS and JSON middleware',
      'Configured MySQL 8.0 database with Docker Compose for easy development',
      'Created /api/files endpoint with proper error handling',
      'Added comprehensive documentation for server setup and configuration',
      'Established foundation for future user accounts, progress tracking, and achievements',
    ],
    techStack: ['Express.js', 'MySQL 8.0', 'Docker Compose', 'Node.js', 'REST API'],
    learnings: [
      'Setting up backend infrastructure early provides flexibility for future features',
      'Docker containerization simplifies database setup across development environments',
      'Well-documented APIs make frontend integration smoother',
      'Planning for user data early influences application architecture decisions',
    ],
  },
  {
    date: '2025-06-13',
    version: 'v0.1.0',
    title: 'Project Genesis & Initial Setup',
    type: 'pivot',
    description:
      'Started as a traditional React tutorial project but quickly evolved toward innovative educational approaches combining programming instruction with engaging narratives.',
    details: [
      'Initialized with Create React App as starting foundation',
      'Set up basic project structure and development workflow',
      'Began exploring interactive approaches to programming education',
      'Established Git repository and initial documentation',
      'Planted the seeds for what would become a game-narrative driven learning platform',
    ],
    techStack: ['React 19', 'Create React App', 'Git', 'Basic Project Structure'],
    learnings: [
      'The best projects often emerge from unexpected creative directions',
      'Starting with familiar tools allows focus on innovative educational approaches',
      'Early experimentation helps discover what truly excites you about a project',
      'Good foundation enables rapid iteration and creative pivoting',
    ],
  },
  {
    date: '2025-08-06',
    version: 'v0.11.0',
    title: 'TypeScript 5.9 Upgrade & Build System Modernization',
    type: 'refactor',
    description:
      'Upgraded TypeScript from 4.9.5 to 5.9.2 to leverage latest features and stricter error checking, resolving all compilation issues.',
    details: [
      'Upgraded TypeScript from 4.9.5 to 5.9.2 (latest stable)',
      'Moved TypeScript to devDependencies for better dependency management',
      'Fixed compilation errors from stricter type checking',
      'Removed references to deleted idle timer functions',
      'Updated package.json and package-lock.json accordingly',
    ],
    techStack: ['TypeScript 5.9.2', 'Vite 6', 'Node.js 14.17+'],
    learnings: [
      'TypeScript 5.9 has stricter error checking that catches real issues',
      'Dependency organization matters for build tool performance',
      'Regular TypeScript upgrades prevent technical debt accumulation',
    ],
  },
  {
    date: '2025-08-06',
    version: 'v0.10.0',
    title: 'Event-Driven Narrator System & Monitor Timing',
    type: 'breakthrough',
    description:
      'Fixed critical narrator timing issues by implementing proper event-driven flow, restoring the authentic Stanley Parable experience.',
    details: [
      'Restored working narrator system with onLineComplete callbacks',
      'Implemented event-driven monitor activation after specific narrative lines',
      'Added useRef pattern for stable callback references',
      'Created proper desktop terminal sequence with spacebar progression',
      'Fixed narrator display showing only "A" character issue',
    ],
    techStack: ['Custom React Hooks', 'useRef Pattern', 'Event-Driven Architecture'],
    learnings: [
      'Event-driven timing is more reliable than timer-based approaches',
      'useRef prevents callback dependency issues in complex hooks',
      'Authentic game feel requires precise narrative timing',
    ],
  },
  {
    date: '2025-08-06',
    version: 'v0.9.0',
    title: 'Public Demo Preparation & WIP Indicators',
    type: 'feature',
    description:
      'Prepared the application for public sharing by adding appropriate user experience indicators and feedback collection systems.',
    details: [
      'Added non-intrusive WIP indicator in top-right corner',
      'Implemented Bug Report/Feedback link in footer',
      'Updated README with live demo link and development status',
      'Enhanced footer with three-column layout for better navigation',
      'Added appropriate disclaimers for active development state',
    ],
    learnings: [
      'Public demos need clear communication about development status',
      'User feedback collection is essential for iterative improvement',
      'WIP indicators should be visible but not disruptive to experience',
    ],
  },
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
    date: '2025-02-15',
    version: 'v0.7.0',
    title: 'Stanley Parable Scenario: Terminal & Background Alignment',
    type: 'struggle',
    description:
      'The great battle of pixel-perfect positioning. Making game UI elements align with background images while staying responsive.',
    details: [
      'Implemented 3D animated office phone with CSS transforms and Framer Motion',
      'Positioned interactive terminal overlay to perfectly match background monitor',
      'Created responsive breakout terminal that scales with screen size',
      "Added sarcastic narrator response for mobile users (because terminals just don't work on phones)",
      'Fine-tuned z-index layering for proper element stacking',
    ],
    techStack: ['CSS 3D Transforms', 'Framer Motion', 'Responsive Design', 'Position Absolute'],
    learnings: [
      'Game UI requires pixel-perfect positioning that fights responsive design',
      'CSS transforms preserve 3D perspective but complicate layout calculations',
      'Mobile gaming experiences need different interaction patterns than desktop',
      "Sometimes the best solution is telling users why something won't work",
    ],
  },
  {
    date: '2025-02-10',
    version: 'v0.6.0',
    title: 'Interactive Terminal & Git Command Simulation',
    type: 'feature',
    description:
      'Built a fully functional mock git terminal with realistic command responses and authentic terminal styling.',
    details: [
      'Created mockGitTerminal.js with comprehensive git command simulation',
      'Implemented terminal history and command parsing',
      'Added realistic command responses and error handling',
      'Built breakout terminal functionality for full-screen experience',
      'Integrated terminal with narrator system for guided learning',
    ],
    techStack: ['Custom Command Parser', 'Terminal Simulation', 'Git Command Reference'],
    learnings: [
      'Terminal simulation requires deep understanding of actual command behavior',
      'Educational value comes from realistic, not simplified, command responses',
      'Terminal history and navigation are essential for authentic feel',
    ],
  },
  {
    date: '2025-02-05',
    version: 'v0.5.0',
    title: 'Narrator System & Content Architecture',
    type: 'breakthrough',
    description:
      'Developed the core narrator system that drives the learning experience, with clean separation of content and presentation.',
    details: [
      'Created useNarrator hook for state management and typewriter effects',
      'Structured narrative content in separate modules by scenario',
      'Built NarratorOutput component with smooth animations',
      'Implemented step-based progression system with callback triggers',
      'Added narrator box with Stanley Parable-inspired styling',
    ],
    techStack: ['Custom React Hooks', 'Zustand State Management', 'Content Architecture'],
    learnings: [
      'Good content architecture is crucial for narrative experiences',
      'Custom hooks can encapsulate complex interactive logic beautifully',
      'Animation timing is critical for maintaining immersion',
      'Separating content from presentation enables easy expansion',
    ],
  },
  {
    date: '2025-01-30',
    version: 'v0.4.0',
    title: 'Reusable Component System: Buttons, Navbar, Footer',
    type: 'feature',
    description:
      'Built the foundation of reusable UI components with consistent Stanley Parable theming and proper accessibility.',
    details: [
      'Created Footer component with three-column layout and navigation links',
      'Built Settings system with modal, tabs, sliders, and toggles',
      'Implemented NarratorBox and LearningBox for content display',
      'Added ErrorBoundary for graceful error handling',
      'Established consistent component patterns and prop interfaces',
    ],
    techStack: ['React Component Patterns', 'Accessibility (a11y)', 'CSS Grid & Flexbox'],
    learnings: [
      'Reusable components save time but require thoughtful abstraction',
      'Game UI components need different patterns than traditional web UI',
      'Accessibility considerations are crucial even in game-style interfaces',
    ],
  },
  {
    date: '2025-01-25',
    version: 'v0.3.0',
    title: 'Level Select Interface & Main Landing Page',
    type: 'feature',
    description:
      'Built the game-style level selection screen inspired by modern gaming interfaces, serving as the main landing page.',
    details: [
      'Designed Stanley Parable aesthetic for level cards with proper typography',
      'Implemented preview panel with chapter information and progress tracking',
      'Added DLC/bonus content unlock mechanics for future scenarios',
      'Created responsive grid layout that works across screen sizes',
      'Integrated with React Router for navigation between scenarios',
    ],
    techStack: ['React Router', 'CSS Grid', 'Game UI Design Patterns'],
    learnings: [
      'Game level selection requires clear visual hierarchy and progress indication',
      'Card-based layouts work well for expandable content structures',
      'Preview panels enhance user understanding before commitment',
    ],
  },
  {
    date: '2025-01-20',
    version: 'v0.2.0',
    title: 'Theme System Setup & Stanley Parable Aesthetic',
    type: 'feature',
    description:
      'Established the core theming system with CSS custom properties and Stanley Parable-inspired design language.',
    details: [
      'Implemented CSS custom properties for consistent color theming',
      'Created Stanley Parable-inspired typography with Barlow font family',
      'Established design system with proper spacing and component styles',
      'Added theme-aware hover states and interactive feedback',
      'Set up Tailwind CSS integration with custom color mappings',
    ],
    techStack: ['CSS Custom Properties', 'Tailwind CSS', 'Typography Systems'],
    learnings: [
      'Strong theming foundation enables rapid component development',
      'Game aesthetics require careful attention to typography and spacing',
      'CSS custom properties provide flexibility for future theme variations',
    ],
  },
  {
    date: '2025-01-15',
    version: 'v0.1.5',
    title: 'Component Structure & Layout Foundation',
    type: 'feature',
    description:
      'Organized the component architecture and established the basic layout structure for the application.',
    details: [
      'Created organized folder structure: components, pages, hooks, lib, styles',
      'Built Layout component with consistent page structure',
      'Established component naming conventions and file organization',
      'Added proper TypeScript interfaces and type definitions',
      'Set up routing structure for multiple learning scenarios',
    ],
    techStack: ['Component Architecture', 'File Organization', 'TypeScript Interfaces'],
    learnings: [
      'Good file organization is an investment in future development speed',
      'Component architecture should reflect application domain (gaming vs. web)',
      'TypeScript interfaces help enforce consistent component contracts',
    ],
  },
  {
    date: 'Early 2025',
    version: 'v0.1.0',
    title: 'Initial Build & Setup',
    type: 'pivot',
    description:
      'Started as a traditional React tutorial, evolved into an interactive gaming experience. The Stanley Parable inspiration changed everything.',
    details: [
      'Initial concept: Standard coding tutorial website',
      'Discovery: Game narratives make learning more engaging',
      'Pivot: Full commitment to Stanley Parable aesthetic and interaction patterns',
      'Foundation: React 19, TypeScript 5.9, Vite 6, Tailwind CSS',
      'Build system: Vite with path aliases and modern JavaScript features',
    ],
    techStack: ['React 19', 'TypeScript 5.9', 'Vite 6', 'Tailwind CSS', 'Zustand'],
    learnings: [
      'The best projects often emerge from unexpected pivots',
      'Game design principles apply beautifully to educational content',
      'Having a strong aesthetic vision guides all technical decisions',
      'Modern build tools enable rapid prototyping and iteration',
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
  frontend: ['React 19', 'TypeScript 5.9', 'Vite 6', 'Tailwind CSS'],
  state: ['Zustand', 'Custom Hooks', 'React Router'],
  animation: ['Framer Motion', 'CSS 3D Transforms', 'Lottie React'],
  backend: ['Express.js', 'MySQL 8.0', 'Docker Compose', 'REST API'],
  testing: ['React Testing Library', 'Jest DOM'],
  ui: ['React Icons', 'React Syntax Highlighter'],
  build: ['PostCSS', 'Path Aliases (@/)', 'ESLint', 'CORS'],
};

const CURRENT_STRUGGLES = [
  'Balancing educational content with engaging gameplay',
  'Making complex Git concepts accessible to beginners',
  'Creating responsive design for game-style interfaces',
  'Implementing proper terminal command simulation and feedback',
];

const FUTURE_PLANS = [
  'Complete interactive git terminal with full command set and realistic responses',
  'Complete Aperture Science (React Components) chapter with GLaDOS narrator',
  "Build Wheatley's Space Station (Debugging) section with space-themed challenges",
  'Add Black Mesa (Architecture) final chapter exploring advanced React patterns',
  'Connect frontend to backend: user authentication and account creation',
  'Implement progress tracking and achievements system using MySQL database',
  'Add persistent user progress with Docker-based backend infrastructure',
  'Enhance responsive design for mobile/tablet experience with touch-friendly interactions',
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-text p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="text-muted hover:text-primary transition-colors">
              ← Back to Levels
            </Link>
          </div>

          <h1 className="text-4xl font-bold font-barlow mb-4">DEVELOPER DIARY</h1>
          <div className="h-0.5 bg-line mb-6"></div>

          {/* Project Vision */}
          <div className="bg-surface border border-line p-6 mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">{PROJECT_VISION.title}</h2>
            <p className="text-muted mb-4 leading-relaxed">{PROJECT_VISION.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-accent mb-2 tracking-wider">PROJECT GOALS</h3>
                <ul className="space-y-1 text-sm">
                  {PROJECT_VISION.goals.map((goal, index) => (
                    <li key={index} className="text-muted flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-accent mb-2 tracking-wider">
                  CURRENT STRUGGLES
                </h3>
                <ul className="space-y-1 text-sm">
                  {CURRENT_STRUGGLES.map((struggle, index) => (
                    <li key={index} className="text-muted flex items-start gap-2">
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
                {/* Timeline line - stops before the content box */}
                {index < DEV_LOG.length - 1 && (
                  <div
                    className="absolute left-6 top-12 w-0.5 bg-line"
                    style={{ height: 'calc(100% - 3rem)' }}
                  ></div>
                )}

                <div className="flex gap-4">
                  {/* Timeline dot */}
                  <div
                    className={`
                    flex-shrink-0 w-12 h-12 rounded border-2 flex items-center justify-center text-sm font-bold
                    ${entry.type === 'feature' ? 'border-primary bg-primary/10 text-primary' : ''}
                    ${
                      entry.type === 'refactor'
                        ? 'border-blue-400 bg-blue-400/10 text-blue-400'
                        : ''
                    }
                    ${entry.type === 'pivot' ? 'border-accent bg-accent/10 text-accent' : ''}
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
                    <div className="bg-surface border border-line p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{entry.title}</h3>
                        <span
                          className={`
                          px-2 py-1 text-sm font-bold rounded tracking-wider
                          ${entry.type === 'feature' ? 'bg-primary text-black' : ''}
                          ${entry.type === 'refactor' ? 'bg-blue-400 text-black' : ''}
                          ${entry.type === 'pivot' ? 'bg-accent text-black' : ''}
                          ${entry.type === 'struggle' ? 'bg-red-400 text-black' : ''}
                          ${entry.type === 'breakthrough' ? 'bg-green-400 text-black' : ''}
                        `}
                        >
                          {entry.type.toUpperCase()}
                        </span>
                        <span className="text-sm text-muted-small">{entry.date}</span>
                      </div>

                      <p className="text-muted mb-3 leading-relaxed">{entry.description}</p>

                      {entry.details && (
                        <div className="mb-3">
                          <h4 className="text-sm font-bold text-text mb-2">Key Changes:</h4>
                          <ul className="space-y-1">
                            {entry.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-small flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.techStack && (
                        <div className="mb-3">
                          <h4 className="text-sm font-bold text-text mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {entry.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-background border border-line text-sm text-muted-small font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {entry.learnings && (
                        <div>
                          <h4 className="text-sm font-bold text-accent mb-2">Lessons Learned:</h4>
                          <ul className="space-y-1">
                            {entry.learnings.map((learning, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-small italic flex items-start gap-2"
                              >
                                <span className="text-accent mt-1">→</span>
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
          <div className="bg-surface border border-line p-6">
            <h3 className="text-xl font-bold font-barlow mb-4">TECH STACK</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-wider">CORE FRONTEND</h4>
                <div className="flex flex-wrap gap-2">
                  {TECH_CHOICES.frontend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 border border-primary text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-wider">
                  STATE & ROUTING
                </h4>
                <div className="flex flex-wrap gap-2">
                  {TECH_CHOICES.state.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-background border border-line text-sm text-muted-small font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-wider">
                  ANIMATION & UI
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...TECH_CHOICES.animation, ...TECH_CHOICES.ui].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-400/10 border border-blue-400 text-blue-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-wider">
                  BACKEND & DATABASE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {TECH_CHOICES.backend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-400/10 border border-green-400 text-green-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-wider">
                  TESTING & BUILD
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...TECH_CHOICES.testing, ...TECH_CHOICES.build].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-400/10 border border-purple-400 text-purple-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-line p-6">
            <h3 className="text-xl font-bold font-barlow mb-4">WHAT'S NEXT</h3>

            <ul className="space-y-4">
              {FUTURE_PLANS.map((plan, index) => (
                <li key={index} className="text-muted flex items-start gap-3">
                  <span className="text-accent flex-shrink-0">□</span>
                  <span className="text-sm">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-line pt-8">
          <p className="text-muted-small text-sm mb-4">
            This project is a love letter to great game design and the belief that learning should
            be engaging.
          </p>
        </div>
      </div>
    </div>
  );
}
