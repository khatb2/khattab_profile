"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import type { EducationItem, CourseItem, Language, AdditionalInfo } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, MessageSquare, CheckCircle, Eye, Info } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Props {
  education: EducationItem[];
  courses: CourseItem[];
  languages: Language[];
  additionalInfo: AdditionalInfo[];
}

const EducationAndCourses = ({ education, courses, languages, additionalInfo }: Props) => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="education">
      <div className="flex flex-col gap-12">

        {/* Education Timeline */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-3xl font-bold">
                {language === 'en' ? 'Academic Background' : 'الخلفية الأكاديمية'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative flex flex-col gap-8 before:absolute before:top-0 ltr:before:left-4 rtl:before:right-4 before:h-full before:w-px before:bg-border">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg text-foreground">
                      {language === 'en' ? item.degree_en : item.degree_ar}
                    </p>
                    <p className="text-md font-semibold text-accent">
                      {language === 'en' ? item.institution_en : item.institution_ar}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Courses */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-3xl font-bold">
                    {language === 'en' ? 'Training' : 'الدورات التدريبية'}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
              {courses.map((course, index) => {
                  const logo = PlaceHolderImages.find(img => img.id === course.logoId);
                  return (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-secondary/50">
                      <CardContent className="p-4 flex items-center gap-4">
                        {logo && (
                           <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
                            <Image
                                src={logo.imageUrl}
                                alt={logo.description}
                                width={50}
                                height={50}
                                className="object-contain h-8 w-12"
                                data-ai-hint={logo.imageHint}
                            />
                           </div>
                        )}
                        <div className="flex-grow">
                          <p className="font-bold text-sm">{language === 'en' ? course.name_en : course.name_ar}</p>
                          <p className="text-xs text-muted-foreground">
                            {language === 'en' ? course.provider_en : course.provider_ar} - {course.year}
                          </p>
                        </div>
                        {course.certificateUrl && (
                          <div className='flex items-center gap-2'>
                            <Image
                                src={course.certificateUrl}
                                alt={`Certificate for ${course.name_en}`}
                                width={50}
                                height={50}
                                className="object-contain h-8 w-12 rounded-md"
                            />
                            <Button asChild variant="ghost" size="icon">
                              <a href={course.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${course.name_en}`}>
                                <Eye className="h-5 w-5 text-primary" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
              })}
              </div>
            </CardContent>
        </Card>
        
        {/* Languages */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-3xl font-bold">
                    {language === 'en' ? 'Languages' : 'اللغات'}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {languages.map((lang, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                        <p className="font-bold text-md">{language === 'en' ? lang.name_en : lang.name_ar}</p>
                        <p className="text-sm text-muted-foreground">{language === 'en' ? lang.level_en : lang.level_ar}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Info className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-3xl font-bold">
                    {language === 'en' ? 'Additional Information' : 'معلومات إضافية'}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {additionalInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{language === 'en' ? info.info_en : info.info_ar}</p>
                    </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

      </div>
    </SectionWrapper>
  );
};

export default EducationAndCourses;