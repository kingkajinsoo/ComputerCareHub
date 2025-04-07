import { useState, useEffect } from 'react';

/**
 * Hook that returns whether a media query matches the current device
 * 
 * @param query - The media query to match against (e.g., '(max-width: 768px)')
 * @returns A boolean indicating whether the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set the initial value
    setMatches(mediaQuery.matches);

    // Define a handler function to track changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the event listener to respond to changes
    mediaQuery.addEventListener('change', handleChange);

    // Clean up the event listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};