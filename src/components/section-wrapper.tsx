"use client";

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-100px");
  const { dir } = useLanguage();

  return (
    <section
      id={id}
      ref={ref}
      dir={dir}
      className={cn(
        'w-full max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-6 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
