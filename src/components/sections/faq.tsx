"use client";

import { useLanguage } from '@/context/language-context';
import type { FaqItem } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const Faq = ({ data }: { data: FaqItem[] }) => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="faq" className="bg-secondary rounded-2xl shadow-inner">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
        </h2>
        <p className="mt-2 text-center text-muted-foreground max-w-2xl">
          {language === 'en' ? 'Here are some answers to common questions about my availability and skills.' : 'إجابات لبعض الأسئلة الشائعة حول توفري ومهاراتي.'}
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg shadow-md border px-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {language === 'en' ? item.question_en : item.question_ar}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {language === 'en' ? item.answer_en : item.answer_ar}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default Faq;
