import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Level {
  id: string;
  chapter: number;
  title: string;
  subtitle: string;
  concept: string;
  isUnlocked: boolean;
  route: string;
  previewImage?: string;
  description: string;
  isHidden?: boolean; // For DLC/bonus chapters that are completely hidden until unlocked
}

const LEVELS: Level[] = [
  {
    id: 'narrator',
    chapter: 1,
    title: "The Narrator's Office",
    subtitle: 'GIT & VERSION CONTROL',
    concept: 'Branching, Merging & History',
    isUnlocked: true,
    route: '/room-427',
    description:
      'Stanley worked for a company in a big building where he was Employee #427. Learn Git version control as the Narrator guides you through branching decisions and code history.',
  },
  {
    id: 'aperture',
    chapter: 2,
    title: 'Aperture Science',
    subtitle: 'REACT COMPONENTS',
    concept: 'Component Architecture & Props',
    isUnlocked: false,
    route: '/aperture-science',
    description:
      'GLaDOS has prepared a series of test chambers to teach you React components. Each component contains other components, creating a hierarchy of reusable UI pieces.',
  },
  {
    id: 'space',
    chapter: 3,
    title: 'Space Station',
    subtitle: 'DEBUGGING & TESTING',
    concept: 'Finding & Fixing Code Issues',
    isUnlocked: false,
    route: '/space',
    description:
      'Wheatley has taken control of the facility and everything is going wrong. Learn debugging techniques and testing strategies to fix the chaos.',
  },
  {
    id: 'blackmesa',
    chapter: 4,
    title: 'Black Mesa',
    subtitle: 'ARCHITECTURE',
    concept: 'System Design & Patterns',
    isUnlocked: false,
    route: '/black-mesa',
    description:
      'The right system architecture, in the wrong hands, can make all the difference in the world.',
  },
  {
    id: 'final',
    chapter: 5,
    title: 'The Interview',
    subtitle: 'FINAL EXAM - DLC',
    concept: 'Everything Together',
    isUnlocked: false,
    route: '/final-boss',
    description: "You've learned the concepts. Now prove you can apply them when it counts.",
    isHidden: true, // This chapter is hidden until Chapter 4 is completed
  },
];

export default function LevelSelect() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(LEVELS[0]);

  // For demo purposes, let's simulate Chapter 4 being completed
  // In a real app, this would come from user progress/localStorage
  const isChapter4Completed = false; // Change to true to test DLC unlock

  // Filter out hidden levels unless they should be visible
  const visibleLevels = LEVELS.filter((level) => {
    if (level.isHidden) {
      // Show hidden levels only if the previous chapter is completed
      return isChapter4Completed;
    }
    return true;
  });

  // Show DLC unlock notification if Chapter 4 was just completed
  const showDLCUnlock = isChapter4Completed && LEVELS.some((level) => level.isHidden);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] p-4 sm:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-barlow mb-2">NEW GAME</h1>
          <div className="h-0.5 bg-[var(--color-line)] mb-4"></div>

          {/* DLC Unlock Notification */}
          {showDLCUnlock && (
            <div className="mb-4 p-4 border border-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded">
              <div className="text-[var(--color-accent)] font-bold text-sm tracking-wider mb-1">
                ⭐ BONUS CONTENT UNLOCKED
              </div>
              <div className="text-[var(--color-text)] text-sm">
                New chapter available: <strong>The Interview - Final Exam DLC</strong>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Level List */}
          <div className="lg:col-span-7 space-y-3">
            {visibleLevels.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                isSelected={selectedLevel.id === level.id}
                onSelect={() => setSelectedLevel(level)}
              />
            ))}
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-5">
            <LevelPreview level={selectedLevel} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center sm:justify-end gap-4 mt-6">
          {selectedLevel.isUnlocked ? (
            <Link
              to={selectedLevel.route}
              className="px-6 py-2 bg-[var(--color-primary)] text-black hover:brightness-110 transition-all font-mono font-bold text-center min-w-[140px]"
            >
              Begin
            </Link>
          ) : (
            <button
              disabled
              className="px-6 py-2 bg-[var(--color-muted)] text-[var(--color-background)] opacity-50 cursor-not-allowed font-mono min-w-[140px]"
            >
              Locked
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function LevelCard({
  level,
  isSelected,
  onSelect,
}: {
  level: Level;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const isDLC = level.isHidden;

  return (
    <div
      onClick={onSelect}
      className={`
        p-3 sm:p-4 border cursor-pointer transition-all duration-200 flex items-center gap-3 sm:gap-4
        ${
          isSelected
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
            : 'border-[var(--color-line)] hover:border-[var(--color-muted)]'
        }
        ${!level.isUnlocked ? 'opacity-50 grayscale' : ''}
        ${isDLC ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' : ''}
      `}
    >
      {/* Chapter Preview Thumbnail */}
      <div
        className={`
        w-20 h-12 sm:w-24 sm:h-16 border flex items-center justify-center flex-shrink-0
        ${
          isDLC
            ? 'bg-[var(--color-accent)]/10 border-[var(--color-accent)]'
            : 'bg-[var(--color-surface)] border-[var(--color-line)]'
        }
      `}
      >
        {level.isUnlocked ? (
          <div className="text-xs text-center">
            {isDLC && <div className="text-[var(--color-accent)] font-bold mb-1">DLC</div>}
            <div className={isDLC ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'}>
              CH.{level.chapter}
              <br />
              PREVIEW
            </div>
          </div>
        ) : (
          <div className="text-[var(--color-muted)]">🔒</div>
        )}
      </div>

      {/* Level Info */}
      <div className="flex-1">
        <div className="text-xs text-[var(--color-accent)] font-bold tracking-wider mb-1">
          CHAPTER {level.chapter}
          {isDLC && (
            <span className="ml-2 px-2 py-0.5 bg-[var(--color-accent)] text-black text-xs rounded">
              DLC
            </span>
          )}
        </div>
        <div
          className={`text-xs font-bold tracking-wider mb-1 ${
            isDLC ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
          }`}
        >
          {level.subtitle}
        </div>
        <div className="font-bold text-base sm:text-lg font-barlow">{level.title}</div>
        <div className="text-xs sm:text-sm text-[var(--color-muted)]">{level.concept}</div>
      </div>

      {/* Status Indicator */}
      <div className="text-right text-xs">
        {level.isUnlocked ? (
          <div className={isDLC ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'}>
            AVAILABLE
          </div>
        ) : (
          <div className="text-[var(--color-muted)]">LOCKED</div>
        )}
      </div>
    </div>
  );
}

function LevelPreview({ level }: { level: Level }) {
  return (
    <div className="h-full border border-[var(--color-line)] bg-[var(--color-surface)]">
      {/* Preview Image Area */}
      <div className="h-48 sm:h-64 bg-[var(--color-background)] border-b border-[var(--color-line)] flex items-center justify-center relative overflow-hidden">
        {level.isUnlocked ? (
          <div className="w-full h-full relative">
            {level.id === 'narrator' ? (
              <div className="w-full h-full relative">
                <img
                  src="/images/narrators-office.png"
                  alt="The Narrator's Office"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="text-6xl mb-4">
                  {level.id === 'aperture' && '🟦'}
                  {level.id === 'space' && '🌌'}
                  {level.id === 'blackmesa' && '🔬'}
                  {level.id === 'final' && '👔'}
                </div>
                <div className="text-[var(--color-muted)] text-sm">{level.title} Preview</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center opacity-30">
            <div className="text-4xl mb-2">🔒</div>
            <div className="text-[var(--color-muted)] text-sm">Complete previous chapter</div>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 font-barlow">{level.title}</h3>
        <div className="text-xs sm:text-sm text-[var(--color-accent)] mb-3 font-bold tracking-wider">
          {level.subtitle}
        </div>
        <p className="text-[var(--color-muted)] leading-relaxed text-sm">{level.description}</p>

        {level.isUnlocked && (
          <div className="mt-4 pt-4 border-t border-[var(--color-line)]">
            <div className="text-xs text-[var(--color-muted)] mb-1">YOU WILL LEARN:</div>
            <div className="text-sm text-[var(--color-text)]">{level.concept}</div>
          </div>
        )}
      </div>
    </div>
  );
}
