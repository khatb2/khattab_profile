"use client";

import SectionWrapper from '@/components/section-wrapper';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { HowItWorksData } from '@/types';

interface HowIWorkProps {
  data: HowItWorksData;
}

const HowIWork = ({ data }: HowIWorkProps) => {
  const { language } = useLanguage();

  const steps = data.steps;

  return (
    <SectionWrapper id="how-i-work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? data.title_en : data.title_ar}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-primary hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 z-10" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'en' ? step.title_en : step.title_ar}
                  </h3>
                  {(language === 'en' ? step.description_en : step.description_ar) && (
                    <p className="text-muted-foreground">
                      {language === 'en' ? step.description_en : step.description_ar}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowIWork;
