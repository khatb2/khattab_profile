"use client";

import { useLanguage } from '@/context/language-context';
import type { VisionAndMission } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal } from 'lucide-react';

const VisionMission = ({ data }: { data: VisionAndMission }) => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="vision-mission" className="bg-secondary rounded-2xl shadow-inner">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold">
                {language === 'en' ? 'Our Vision' : 'الرؤية'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'en' ? data.vision_en : data.vision_ar}
            </p>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Goal className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold">
                {language === 'en' ? 'Our Mission' : 'الرسالة'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'en' ? data.mission_en : data.mission_ar}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default VisionMission;
