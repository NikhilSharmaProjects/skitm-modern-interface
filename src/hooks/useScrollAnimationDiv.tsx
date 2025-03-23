
import { useScrollAnimation } from './useScrollAnimation';

export const useScrollAnimationDiv = (options?: { threshold?: number; rootMargin?: string }) => {
  const { ref, isVisible } = useScrollAnimation(options);
  
  // Cast the ref to the correct type for divs
  const divRef = ref as React.RefObject<HTMLDivElement>;
  
  return { ref: divRef, isVisible };
};
