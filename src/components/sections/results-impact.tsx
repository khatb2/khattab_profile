"use client";

import { useLanguage } from '@/context/language-context';
import { profileData } from '@/lib/data';

const ResultsImpact = () => {
  const { language } = useLanguage();
  const results = profileData.horizontalResults;

  return (
    <div className="bg-primary/5 py-10 border-y border-primary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8">
          {results.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-3 group transition-all hover:translate-y-[-2px]">
              <span className="text-2xl md:text-3xl filter drop-shadow-sm">{item.icon}</span>
              <span className="font-bold text-sm md:text-base lg:text-lg whitespace-nowrap text-secondary-foreground/90 uppercase tracking-tight">
                {language === 'en' ? item.label_en : item.label_ar}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsImpact;
