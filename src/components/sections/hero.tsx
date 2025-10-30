"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import type { PersonalInfo } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Briefcase, User, Calendar, Users, Globe, BadgeInfo, Quote, Download } from 'lucide-react';
import { format } from 'date-fns';
import CVDownloader from '@/components/cv-downloader';

const Hero = ({ data }: { data: PersonalInfo }) => {
  const { language } = useLanguage();
  const profileImage = PlaceHolderImages.find(img => img.id === data.photoUrl);

  const details = [
    { icon: Globe, label_en: 'Nationality', label_ar: 'الجنسية', value_en: data.nationality_en, value_ar: data.nationality_ar },
    { icon: BadgeInfo, label_en: 'Passport', label_ar: 'الجواز', value_en: data.passport_en, value_ar: data.passport_ar },
    { icon: Calendar, label_en: 'Date of Birth', label_ar: 'تاريخ الميلاد', value_en: format(new Date(data.birthDate), 'MMMM d, yyyy'), value_ar: format(new Date(data.birthDate), 'd MMMM yyyy') },
    { icon: Users, label_en: 'Marital Status', label_ar: 'الحالة الاجتماعية', value_en: data.maritalStatus_en, value_ar: data.maritalStatus_ar },
  ];

  return (
    <SectionWrapper id="hero" className="pt-24 md:pt-32">
      <div className="flex flex-col gap-8">
        <Card className="overflow-hidden shadow-lg border-slate-700">
          <CardContent className="p-6 lg:p-8 flex flex-col items-center gap-6 text-center">
            
            <div className="relative">
              {profileImage && (
                <div className="relative group p-1.5 rounded-full bg-gradient-to-br from-blue-300 to-blue-500">
                  <Image
                    src={profileImage.imageUrl}
                    alt={language === 'en' ? data.name_en : data.name_ar}
                    width={160}
                    height={160}
                    priority
                    className="rounded-full object-cover shadow-xl aspect-square transition-all duration-300 group-hover:scale-105"
                    data-ai-hint={profileImage.imageHint}
                  />
                </div>
              )}
            </div>

            <div className="w-full flex flex-col items-center">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                {language === 'en' ? data.name_en : data.name_ar}
              </h1>
              <h2 className="font-body text-xl md:text-2xl text-accent font-semibold mt-1">
                {language === 'en' ? data.title_en : data.title_ar}
              </h2>
              {data.remoteOpportunities_en && data.remoteOpportunities_ar && (
                <p className="mt-2 text-muted-foreground text-base font-medium">
                  {language === 'en' ? data.remoteOpportunities_en : data.remoteOpportunities_ar}
                </p>
              )}
            </div>

            <p className="mt-2 text-muted-foreground text-base leading-relaxed max-w-2xl">
              {language === 'en' ? data.summary_en : data.summary_ar}
            </p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-left w-full max-w-3xl">
              {details.map(detail => (
                <div key={detail.label_en} className="flex items-center gap-3">
                  <detail.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">{language === 'en' ? detail.label_en : detail.label_ar}</p>
                    <p className="text-muted-foreground">{language === 'en' ? detail.value_en : detail.value_ar}</p>
                  </div>
                </div>
              ))}
            </div>

          </CardContent>
        </Card>

        <Card className="shadow-lg bg-secondary/50">
          <CardContent className="p-6 flex items-center gap-4">
            <Quote className="h-8 w-8 text-primary flex-shrink-0" />
            <blockquote className="italic text-muted-foreground">
              <p>{language === 'en' ? data.about_me_en : data.about_me_ar}</p>
            </blockquote>
          </CardContent>
        </Card>

        <CVDownloader />

      </div>
    </SectionWrapper>
  );
};

export default Hero;