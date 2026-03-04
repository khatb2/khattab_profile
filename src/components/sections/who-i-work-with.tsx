"use client";

import SectionWrapper from '@/components/section-wrapper';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const WhoIWorkWith = () => {
  const { language } = useLanguage();

  const workWithContent = {
    title_en: "Who I Work With",
    title_ar: "لمن أعمل",
    clients_en: [
      {
        title: "Growing SMEs",
        description: "Small and medium enterprises in expansion phase"
      },
      {
        title: "Operations-Chaotic Organizations",
        description: "Companies suffering from operational chaos"
      },
      {
        title: "Digitization Seekers",
        description: "Businesses wanting to digitize their operations"
      },
      {
        title: "Entrepreneurs",
        description: "Visionaries building professional-grade systems"
      }
    ],
    clients_ar: [
      {
        title: "الشركات الصغيرة والمتوسطة المتنامية",
        description: "الشركات الصغيرة والمتوسطة في مرحلة التوسع"
      },
      {
        title: "المنظمات المتأزمة تشغيلياً",
        description: "الشركات التي تعاني من الفوضى التشغيلية"
      },
      {
        title: "الباحثون عن الرقمنة",
        description: "الشركات التي تريد رقمنة عملياتها"
      },
      {
        title: "رجال الأعمال",
        description: "الرواد الذين يبنون أنظمة احترافية"
      }
    ]
  };

  const clients = language === 'en' ? workWithContent.clients_en : workWithContent.clients_ar;

  return (
    <SectionWrapper id="who-i-work-with" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? workWithContent.title_en : workWithContent.title_ar}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-r-4 border-primary">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{client.title}</h3>
                <p className="text-muted-foreground">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoIWorkWith;