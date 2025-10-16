"use client";

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
): string {
  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.getElementById(selector)
    );
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
