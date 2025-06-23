/**
 * MissionContent.tsx
 *
 * A layout wrapper for content that appears below the GalaxyScene.
 * Handles consistent padding, max-width, and typography styling.
 */

interface MissionContentProps {
  children: React.ReactNode;
}

export default function MissionContent({ children }: MissionContentProps) {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto space-y-8">{children}</div>
    </section>
  );
}