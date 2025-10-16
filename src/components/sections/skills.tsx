"use client";

import { useLanguage } from '@/context/language-context';
import type { Skills as SkillsType } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

const Skills = ({ data }: { data: SkillsType }) => {
  const { language } = useLanguage();

  const skillCategories = [
    { title_en: 'Technical Skills', title_ar: 'مهارات تكنولوجية', skills: data.technical, icon: LucideIcons.Laptop },
    { title_en: 'Managerial Skills', title_ar: 'مهارات إدارية', skills: data.managerial, icon: LucideIcons.Briefcase },
    { title_en: 'Soft Skills', title_ar: 'مهارات شخصية', skills: data.soft, icon: LucideIcons.Users },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {language === 'en' ? 'Core Competencies' : 'الكفاءات الأساسية'}
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          {language === 'en' ? 'A showcase of my professional abilities.' : 'استعراض لقدراتي المهنية.'}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
        {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
                <Card key={category.title_en} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <CategoryIcon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-2xl">{language === 'en' ? category.title_en : category.title_ar}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                        {category.skills.map((skill) => {
                            const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Star;
                            return (
                            <li key={skill.name_en} className="flex items-center gap-3 text-sm font-medium">
                                <IconComponent className="h-4 w-4 text-accent flex-shrink-0" />
                                <span>{language === 'en' ? skill.name_en : skill.name_ar}</span>
                            </li>
                            );
                        })}
                        </ul>
                    </CardContent>
                </Card>
            );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
