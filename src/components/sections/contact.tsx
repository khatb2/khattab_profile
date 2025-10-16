"use client";

import { useLanguage } from '@/context/language-context';
import type { ContactInfo } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    </svg>
);


const Contact = ({ data }: { data: ContactInfo }) => {
  const { language } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      label_en: 'Email',
      label_ar: 'البريد الإلكتروني',
      value: data.email,
      href: `mailto:${data.email}`
    },
    {
      icon: Phone,
      label_en: 'Phone',
      label_ar: 'رقم الهاتف',
      value: data.phone,
      href: `tel:${data.phone}`
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-slate-800 rounded-2xl shadow-md text-slate-100 dark:text-white">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white dark:text-white">
          {language === 'en' ? 'Get in Touch' : 'تواصل معي'}
        </h2>
        <p className="mt-2 text-center text-slate-300 max-w-2xl">
          {language === 'en' 
            ? "I am actively seeking new opportunities and collaborations, available for both remote and on-site roles globally. Flexible and ready to engage in challenging projects regardless of location or time zone." 
            : "أسعى بنشاط لفرص عمل وتعاونات جديدة، ومتاح للأدوار عن بعد أو في الموقع على مستوى العالم. أتمتع بالمرونة والاستعداد للمشاركة في مشاريع مليئة بالتحديات بغض النظر عن الموقع أو المنطقة الزمنية."}
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <Card className="bg-slate-700/50 border-slate-600">
          <CardContent className="p-6 space-y-6">
            {contactItems.map(item => (
              <a key={item.label_en} href={item.href} className="flex items-center gap-4 group">
                <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-300">{language === 'en' ? item.label_en : item.label_ar}</p>
                  <p className="text-md text-white group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
            
            <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold" asChild>
              <a href={data.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                <span className="ltr:ml-2 rtl:mr-2">{language === 'en' ? 'Contact via WhatsApp' : 'تواصل عبر واتساب'}</span>
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
