"use client";

import { useState, useEffect, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin = "0px"): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
