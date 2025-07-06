import { useEffect, useRef } from 'react';

type NarratorOutputProps = {
  displayedLines: string[];
  lineText: string;
};

/**
 * NarratorOutput
 *
 * Displays narrator lines in a scrollable terminal-style block.
 * Includes auto-scroll behavior to keep latest text in view.
 */
export default function NarratorOutput({ displayedLines, lineText }: NarratorOutputProps) {
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new content appears
  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [displayedLines, lineText]);

  return (
    <div className="mt-4 max-h-[12rem] overflow-y-scroll scrollbar-hide pr-2 space-y-2">
      {displayedLines.map((line, idx) => (
        <div
          key={idx}
          className="text-[var(--color-muted)] italic"
          dangerouslySetInnerHTML={{ __html: `&gt; ${line}` }}
        />
      ))}
      {lineText && <div className="text-[var(--color-muted)] italic">&gt; {lineText}</div>}
      <div ref={scrollAnchorRef} />
    </div>
  );
}
