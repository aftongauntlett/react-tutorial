import { useEffect, useState } from 'react';
import { GAME_CONFIG } from '../lib/constants';

export function useIsSmallScreen(breakpoint = GAME_CONFIG.BREAKPOINTS.SMALL_SCREEN): boolean {
  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    const checkSize = (): void => {
      setIsSmall(window.innerWidth < breakpoint);
    };

    checkSize(); // run on mount
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, [breakpoint]);

  return isSmall;
}
