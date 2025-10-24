
"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Find the entry that is most visible in the viewport
        const bestEntry = intersectingEntries.reduce((prev, current) => 
          (prev.intersectionRatio > current.intersectionRatio) ? prev : current
        );
        setActiveSection(`#${bestEntry.target.id}`);
      }
    };

    observer.current = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -50% 0px', // Trigger when section is in the top half of the screen
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options
    });

    const { current: currentObserver } = observer;

    sectionIds.forEach(id => {
      const element = document.querySelector(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds, options]);

  return activeSection;
}
