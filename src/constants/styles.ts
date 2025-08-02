/**
 * Shared style constants for consistent theming
 */

// Utility function for combining class names
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Animation & Transition Classes
export const TRANSITION_FAST = 'transition-all duration-200 ease-in-out';
export const TRANSITION_NORMAL = 'transition-all duration-300 ease-in-out';
export const TRANSITION_SLOW = 'transition-all duration-500 ease-in-out';

// Card Base Classes (for ErrorBoundary)
export const CARD_BASE = `
  bg-[var(--color-surface)] border border-[var(--color-line)]
  rounded-lg shadow-sm
  transition-colors duration-300 ease-in-out
`
  .replace(/\s+/g, ' ')
  .trim();
