"use client";

import SectionWrapper from '@/components/section-wrapper';
import { useLanguage } from '@/context/language-context';
import { profileData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, PlayCircle } from 'lucide-react';

const SuccessStories = () => {
    const { language } = useLanguage();
    const stories = profileData.successStories;

    const labels = {
        title_en: "Success Stories",
        title_ar: "دراسات حالة واقعية",
        problem_en: "The Problem",
        problem_ar: "المشكلة",
        implementation_en: "What Was Done",
        implementation_ar: "ما تم تنفيذه",
        result_en: "Real Result",
        result_ar: "النتيجة الواقعية"
    };

    return (
        <SectionWrapper id="success-stories" className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {language === 'en' ? labels.title_en : labels.title_ar}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        {language === 'en'
                            ? "Real-world examples of how operational chaos was transformed into structured profitability."
                            : "أمثلة حقيقية لكيفية تحويل الفوضى التشغيلية إلى ربحية منظمة وملموسة."}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <Card key={index} className="border-none shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300">
                            <CardContent className="p-8 flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-8 text-primary border-b border-primary/10 pb-4">
                                    {language === 'en' ? story.title_en : story.title_ar}
                                </h3>

                                <div className="space-y-8 flex-grow">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1">
                                            <AlertCircle className="w-5 h-5 text-destructive/70" />
                                        </div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">
                                            {language === 'en' ? labels.problem_en : labels.problem_ar}
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {language === 'en' ? story.problem_en : story.problem_ar}
                                        </p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1">
                                            <PlayCircle className="w-5 h-5 text-primary/70" />
                                        </div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">
                                            {language === 'en' ? labels.implementation_en : labels.implementation_ar}
                                        </p>
                                        <p className="font-medium leading-relaxed">
                                            {language === 'en' ? story.implementation_en : story.implementation_ar}
                                        </p>
                                    </div>

                                    <div className="relative pl-8 bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                                        <div className="absolute left-2 top-5">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-primary/80 mb-2 ml-4">
                                            {language === 'en' ? labels.result_en : labels.result_ar}
                                        </p>
                                        <p className="font-bold text-primary text-lg leading-tight ml-4">
                                            {language === 'en' ? story.result_en : story.result_ar}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SuccessStories;
