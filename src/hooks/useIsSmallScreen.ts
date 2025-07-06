import { useEffect, useState } from 'react';

export function useIsSmallScreen(breakpoint = 768) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsSmall(window.innerWidth < breakpoint);
    };

    checkSize(); // run on mount
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, [breakpoint]);

  return isSmall;
}
