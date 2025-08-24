import { useEffect, useState, RefObject } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseScrollGlowOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollGlow = (
  refs: RefObject<HTMLElement>[],
  options: UseScrollGlowOptions = {}
) => {
  const { threshold = 0.3, rootMargin = '0px', delay = 200 } = options;
  const isMobile = useIsMobile();
  const [glowingElements, setGlowingElements] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Only work on mobile devices
    if (!isMobile) return;
    
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setGlowingElements(prev => new Set([...prev, index]));
                
                // Remove glow after 2 seconds
                setTimeout(() => {
                  setGlowingElements(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(index);
                    return newSet;
                  });
                }, 2000);
              }, index * delay);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [refs, threshold, rootMargin, delay, isMobile]);

  return glowingElements;
};