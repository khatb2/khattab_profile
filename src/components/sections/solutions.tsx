"use client";

import React from 'react';
import { useLanguage } from '@/context/language-context';
import type { SolutionsData, SolutionItem } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Check, ArrowRight, Sparkles, Workflow, ServerCog, MonitorCog, BrainCircuit, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionsProps {
    data: SolutionsData;
}

const iconMap: Record<string, LucideIcon> = {
    Workflow,
    ServerCog,
    MonitorCog,
    BrainCircuit,
};

const SolutionSection = ({ item, index }: { item: SolutionItem; index: number }) => {
    const { language } = useLanguage();
    const isEven = index % 2 === 0;
    const IconComponent = item.icon ? iconMap[item.icon] : null;

    return (
        <div className={cn(
            "relative w-full py-24 md:py-32 overflow-hidden border-b border-primary/10",
            isEven ? "bg-background" : "bg-primary/[0.02]"
        )}>
            {/* Large Background Number */}
            <div className={cn(
                "absolute top-1/2 -translate-y-1/2 font-headline font-black text-[20rem] md:text-[35rem] leading-none select-none opacity-[0.03] pointer-events-none tracking-tighter",
                isEven ? "right-[-5%] md:right-[5%]" : "left-[-5%] md:left-[5%]"
            )}>
                0{index + 1}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 md:gap-20",
                    !isEven && "lg:flex-row-reverse"
                )}>
                    {/* Content Side */}
                    <div className="flex-1 space-y-8 max-w-2xl">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                {language === 'en' ? `Phase 0${index + 1}` : `المرحلة 0${index + 1}`}
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black font-headline tracking-tight text-foreground leading-[1.1]">
                                {language === 'en' ? item.title_en : item.title_ar}
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-medium text-muted-foreground/90 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                                {language === 'en' ? item.problem_en : item.problem_ar}
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                {language === 'en' ? item.context_en : item.context_ar}
                            </p>
                        </div>

                        {/* Results Block */}
                        <div className="pt-4">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-6 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                {language === 'en' ? "Core Outcomes" : "النتائج الجوهرية"}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(language === 'en' ? item.points_en : item.points_ar).slice(0, 3).map((point, i) => (
                                    <div key={i} className="flex flex-col gap-3 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-bold leading-tight text-foreground/80 group-hover:text-foreground transition-colors">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Impact Side */}
                    <div className="hidden lg:flex flex-1 items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-6 scale-105" />
                            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3" />
                            <div className="relative h-full bg-background border-2 border-primary/20 rounded-[3rem] p-12 flex flex-col justify-center gap-8 shadow-2xl shadow-primary/10">

                                {/* Icon Block */}
                                {IconComponent && (
                                    <div className="flex justify-center">
                                        <div className="relative">
                                            {/* Outer glow ring */}
                                            <div className="absolute -inset-3 rounded-3xl bg-primary/20 blur-xl opacity-70" />
                                            {/* Mid ring */}
                                            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20" />
                                            {/* Icon container */}
                                            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                                                <IconComponent className="w-12 h-12 text-white drop-shadow-md" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-primary tracking-widest uppercase">Target Result</p>
                                    <p className="text-2xl font-black font-headline text-foreground leading-tight">
                                        {language === 'en' ? item.outcome_en : item.outcome_ar}
                                    </p>
                                </div>
                                <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-full animate-in slide-in-from-left duration-1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Solutions = ({ data }: SolutionsProps) => {
    const { language } = useLanguage();

    return (
        <section id="solutions" className="relative bg-background">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <Sparkles className="w-4 h-4" />
                        {language === 'en' ? "Strategic Execution Roadmap" : "خارطة طريق التنفيذ الاستراتيجي"}
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black font-headline tracking-tighter text-foreground leading-[0.9]">
                        {language === 'en' ? data.title_en : data.title_ar}
                    </h2>

                    <p className="text-2xl md:text-3xl font-medium text-muted-foreground/80 max-w-2xl leading-relaxed">
                        {language === 'en' ? data.intro_en : data.intro_ar}
                    </p>
                </div>
            </div>

            {/* Vertical Flow */}
            <div className="flex flex-col">
                {data.items.map((item, i) => (
                    <SolutionSection key={item.id} item={item} index={i} />
                ))}
            </div>

            {/* Final Call to Action / Outro */}
            <div className="bg-foreground text-background py-24 md:py-32">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tight max-w-5xl mx-auto leading-tight">
                        {language === 'en' ? data.outro_en : data.outro_ar}
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-2 w-32 bg-primary rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
