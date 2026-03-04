"use client";

import SectionWrapper from '@/components/section-wrapper';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const WhoIAm = () => {
  const { language } = useLanguage();

  const whoIAmContent = {
    title_en: "Who I Am",
    title_ar: "من أنا",
    items_en: [
      "Business Developer with 6 years of experience in private, public, and humanitarian sectors",
      "Specialize in transforming operations into clear, measurable frameworks",
      "Field-execution professional with remote and on-site capabilities",
      "Designer who builds scalable systems, not just theoretical advice"
    ],
    items_ar: [
      "مطور أعمال بخبرة 6 سنوات في القطاع الخاص، الحكومي، والإنساني",
      "متخصص في تحويل العمليات إلى إطارات عمل واضحة وقابلة للقياس",
      "مطور حلول واقعية، بارع في اكتشاف الأخطاء ومعالجتها. دوري يبدأ من فهم المشكلة في الميدان وينتهي بتهيئة وترتيب نظام رقمي متكامل ينهي هذه المشكلات فعلياً."
    ]
  };

  const items = language === 'en' ? whoIAmContent.items_en : whoIAmContent.items_ar;

  return (
    <SectionWrapper id="who-i-am" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? whoIAmContent.title_en : whoIAmContent.title_ar}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoIAm;