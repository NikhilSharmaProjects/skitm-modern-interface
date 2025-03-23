
import { useScrollAnimation } from './useScrollAnimation';
import { useRef } from 'react';

export const useScrollAnimationDiv = (options?: { threshold?: number; rootMargin?: string }) => {
  const { isVisible } = useScrollAnimation(options);
  const ref = useRef<HTMLDivElement>(null);
  
  return { ref, isVisible };
};
