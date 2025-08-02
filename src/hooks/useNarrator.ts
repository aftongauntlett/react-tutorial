import { useState, useEffect, useRef, useCallback } from 'react';

interface UseNarratorProps {
  lines: string[];
  isActive: boolean;
  onComplete?: () => void;
  typingSpeed?: number;
}

export function useNarrator({ lines, isActive, onComplete, typingSpeed = 50 }: UseNarratorProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContinuePrompt, setShowContinuePrompt] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const currentLine = lines[currentLineIndex] || '';

  // Reset when lines change or become inactive
  useEffect(() => {
    if (!isActive) {
      setCurrentLineIndex(0);
      setDisplayText('');
      setIsTyping(false);
      setShowContinuePrompt(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isActive]);

  // Start typing current line
  useEffect(() => {
    if (!isActive || !currentLine) return;

    setIsTyping(true);
    setDisplayText('');
    setShowContinuePrompt(false);

    let charIndex = 0;
    intervalRef.current = setInterval(() => {
      if (charIndex < currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        setShowContinuePrompt(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, typingSpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentLine, isActive, typingSpeed]);

  // Complete current line instantly
  const completeCurrentLine = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(currentLine);
    setIsTyping(false);
    setShowContinuePrompt(true);
  }, [currentLine]);

  // Advance to next line or complete sequence
  const advanceToNext = useCallback(() => {
    if (!showContinuePrompt) return;

    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex((prev) => prev + 1);
    } else {
      // Sequence complete
      onComplete?.();
    }
  }, [currentLineIndex, lines.length, showContinuePrompt, onComplete]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;

      if (e.key === ' ') {
        e.preventDefault();
        if (isTyping) {
          completeCurrentLine();
        } else if (showContinuePrompt) {
          advanceToNext();
        }
      } else if (e.key === 'Enter' && showContinuePrompt) {
        e.preventDefault();
        advanceToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive, isTyping, showContinuePrompt, completeCurrentLine, advanceToNext]);

  return {
    displayText,
    isTyping,
    showContinuePrompt,
    currentLineIndex,
    totalLines: lines.length,
    advanceToNext,
    completeCurrentLine,
    isSequenceComplete: currentLineIndex >= lines.length - 1 && showContinuePrompt,
  };
}
