"use client";

import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import EducationAndCourses from '@/components/sections/education-and-courses';
import CVDownloader from '@/components/cv-downloader';
import { profileData } from '@/lib/data';
import SectionWrapper from '@/components/section-wrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/context/language-context';

export default function AboutPage() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col items-center justify-center pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">

                <SectionWrapper id="about-intro" className="text-center pb-12 pt-0">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
                        {language === 'en' ? 'Professional Profile' : 'الملف المهني'}
                    </h1>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                        {language === 'en'
                            ? 'A full breakdown of my professional experience, skills, projects, academic background, and training.'
                            : 'استعراض شامل لخبراتي المهنية، مهاراتي، مشاريعي، الخلفية الأكاديمية، والتدريب.'}
                    </p>
                    <div className="flex justify-center">
                        <CVDownloader />
                    </div>
                </SectionWrapper>

                <Tabs defaultValue="experience" className="w-full" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto p-1.5 bg-muted/50 rounded-2xl shadow-inner border border-border/50">
                        <TabsTrigger value="experience" className="py-3.5 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 font-medium">
                            {language === 'en' ? 'Experience' : 'الخبرات'}
                        </TabsTrigger>
                        <TabsTrigger value="skills" className="py-3.5 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 font-medium">
                            {language === 'en' ? 'Skills' : 'المهارات'}
                        </TabsTrigger>
                        <TabsTrigger value="projects" className="py-3.5 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 font-medium">
                            {language === 'en' ? 'Projects' : 'المشاريع'}
                        </TabsTrigger>
                        <TabsTrigger value="bio" className="py-3.5 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 font-medium">
                            {language === 'en' ? 'Education & Bio' : 'التعليم والسيرة'}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="experience" className="mt-0 focus-visible:ring-0">
                        <Experience data={{ public: profileData.experience_public, private: profileData.experience_private }} />
                    </TabsContent>

                    <TabsContent value="skills" className="mt-0 focus-visible:ring-0">
                        <Skills data={profileData.skills} />
                    </TabsContent>

                    <TabsContent value="projects" className="mt-0 focus-visible:ring-0">
                        <Projects data={profileData.projects} />
                    </TabsContent>

                    <TabsContent value="bio" className="mt-0 focus-visible:ring-0">
                        <EducationAndCourses
                            education={profileData.education}
                            courses={profileData.courses}
                            languages={profileData.languages}
                            additionalInfo={profileData.additionalInfo}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
