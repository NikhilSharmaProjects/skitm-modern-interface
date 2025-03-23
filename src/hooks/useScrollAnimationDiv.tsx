
import { useScrollAnimation } from './useScrollAnimation';

export const useScrollAnimationDiv = (options?: { threshold?: number; rootMargin?: string }) => {
  const { ref, isVisible } = useScrollAnimation(options);
  
  // Return the ref as is, since it's properly typed in the component
  return { ref, isVisible };
};
