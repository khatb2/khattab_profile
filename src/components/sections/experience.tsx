"use client";

import { useLanguage } from '@/context/language-context';
import type { ExperienceItem } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';
import Image from 'next/image';

interface ExperienceProps {
  data: {
    public: ExperienceItem[];
    private: ExperienceItem[];
  };
}

const ExperienceSector = ({ title, items, description }: { title: string; items: ExperienceItem[], description?: string }) => {
  const { language } = useLanguage();
  
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
        <h3 className="font-headline text-2xl font-bold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
        )}
        <div className="space-y-8">
        {items.map((item, index) => (
            <Card key={index} className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background flex-shrink-0 mt-1">
                            <Briefcase className="h-5 w-5 text-primary" />
                        </div>

                        <div className="flex-grow">
                            <p className="font-bold text-lg text-foreground">
                                {language === 'en' ? item.company_en : item.company_ar}
                            </p>
                            <p className="text-md font-semibold text-accent mt-1">
                                {language === 'en' ? item.title_en : item.title_ar}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                {language === 'en' ? item.period_en : item.period_ar}
                            </p>
                        </div>

                        {item.logoUrl && (
                            <div className="flex-shrink-0 ltr:sm:ml-auto rtl:sm:mr-auto self-center">
                                <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-sm bg-white flex items-center justify-center">
                                    <Image 
                                        src={item.logoUrl} 
                                        alt={`${item.company_en} logo`} 
                                        width={96}
                                        height={96}
                                        className="object-contain w-full h-full p-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={`details-${index}`} className="border-t">
                                <AccordionTrigger className="flex justify-start gap-2 text-sm font-semibold hover:no-underline text-primary p-2 rounded-md hover:bg-primary/10 transition-colors [&>svg]:mx-2">
                                    <span>{language === 'en' ? 'Achievements' : 'الإنجازات'}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2">
                                    <ul className="space-y-2 text-sm text-foreground/80 list-disc ltr:pl-5 rtl:pr-5">
                                        {(language === 'en' ? item.details_en : item.details_ar).map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </Card>
        ))}
        </div>
    </div>
  );
};


const Experience = ({ data }: ExperienceProps) => {
  const { language } = useLanguage();
  
  const organizationDescription = language === 'en' 
    ? 'Short-Term Project Contract' 
    : 'عقود مشاريع قصيرة الأجل';

  return (
    <SectionWrapper id="experience" className="bg-secondary rounded-2xl shadow-inner">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {language === 'en' ? 'Professional Experience' : 'الخبرة المهنية'}
        </h2>
        <p className="mt-2 text-center text-muted-foreground max-w-2xl">
          {language === 'en' ? 'A detailed timeline of my career, highlighting key roles and accomplishments in various sectors.' : 'جدول زمني مفصل لمسيرتي المهنية، يسلط الضوء على الأدوار والإنجازات الرئيسية في مختلف القطاعات.'}
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <ExperienceSector 
          title={language === 'en' ? 'Organization Sector' : 'قطاع المنظمات'}
          items={data.public}
          description={organizationDescription}
        />
        <ExperienceSector
          title={language === 'en' ? 'Private Sector' : 'القطاع الخاص'}
          items={data.private}
        />
      </div>
    </SectionWrapper>
  );
};

export default Experience;
