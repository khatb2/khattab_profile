"use client";

import SectionWrapper from '@/components/section-wrapper';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const WhyIStandOut = () => {
  const { language } = useLanguage();

  const standOutContent = {
    title_en: "Why I Stand Out",
    title_ar: "لماذا أتميز",
    advantages_en: [
      {
        title: "Financial + Technical Background",
        description: "Rare combination of finance and technical expertise"
      },
      {
        title: "Multi-Sector Experience",
        description: "Proven track record across private, public, humanitarian"
      },
      {
        title: "Real Operational Understanding",
        description: "Practical knowledge of day-to-day business operations"
      },
      {
        title: "Implementation Focus",
        description: "Building and running systems, not just advising"
      },
      {
        title: "Dynamic Youth Perspective",
        description: "Fresh approach combined with deep expertise"
      }
    ],
    advantages_ar: [
      {
        title: "خلفية مالية + تقنية",
        description: "مزيج نادر من الخبرة المالية والتقنية"
      },
      {
        title: "خبرة متعددة القطاعات",
        description: "سجل مثبت عبر القطاعات الخاصة والحكومية والإنسانية"
      },
      {
        title: "فهم تشغيلي حقيقي",
        description: "معرفة عملية بعمليات الأعمال اليومية"
      },
      {
        title: "تركيز على التنفيذ",
        description: "بناء وتشغيل الأنظمة، وليس مجرد تقديم المشورة"
      },
      {
        title: "منظور شبابي ديناميكي",
        description: "مزيج من المقاربة الجديدة مع خبرة عميقة"
      }
    ]
  };

  const advantages = language === 'en' ? standOutContent.advantages_en : standOutContent.advantages_ar;

  return (
    <SectionWrapper id="why-stand-out" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? standOutContent.title_en : standOutContent.title_ar}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyIStandOut;