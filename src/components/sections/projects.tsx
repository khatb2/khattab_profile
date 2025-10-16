"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import type { ProjectItem } from '@/types';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Plus, Minus, Eye } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Projects = ({ data }: { data: ProjectItem[] }) => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? data : data.slice(0, 2);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <SectionWrapper id="projects" className="bg-card rounded-2xl shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {language === 'en' ? 'Featured Projects' : 'المشاريع المميزة'}
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          {language === 'en' ? 'A selection of projects I\'ve managed and contributed to.' : 'مجموعة مختارة من المشاريع التي أدرتها وساهمت فيها.'}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8">
        {visibleProjects.map((project, index) => {
          const projectImages = project.imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

          return (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-2xl">
                      {language === 'en' ? project.name_en : project.name_ar}
                    </CardTitle>
                    <CardDescription className="pt-2">
                      {language === 'en' ? project.description_en : project.description_ar}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow mt-4">
                  </CardContent>
                  <CardFooter className="p-0 mt-4">
                    {project.link && project.link !== "#" && (
                        <Button asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {language === 'en' ? 'Visit Project' : 'زيارة المشروع'}
                            <ArrowUpRight className="h-4 w-4 ltr:ml-2 rtl:mr-2" />
                        </a>
                        </Button>
                    )}
                  </CardFooter>
                </div>
                <div className="p-4 bg-secondary flex items-center justify-center">
                  <Carousel className="w-full max-w-md" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <CarouselContent>
                      {projectImages.map((image, imgIndex) => image && (
                        <CarouselItem key={imgIndex}>
                          <div className="p-1">
                            <Card className="overflow-hidden">
                              <a href={image.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                                <CardContent className="relative group flex aspect-video items-center justify-center p-0">
                                  <Image
                                    src={image.imageUrl}
                                    alt={`${language === 'en' ? project.name_en : project.name_ar} - Screenshot ${imgIndex + 1}`}
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50"
                                    data-ai-hint={image.imageHint}
                                  />
                                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <Eye className="h-10 w-10 text-white" />
                                      <span className="mt-2 text-sm font-semibold text-white">{language === 'en' ? 'View Image' : 'عرض الصورة'}</span>
                                  </div>
                                </CardContent>
                              </a>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ltr:left-2 rtl:right-2 disabled:hidden" />
                    <CarouselNext className="ltr:right-2 rtl:left-2 disabled:hidden" />
                  </Carousel>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {data.length > 2 && (
        <div className="mt-8 flex justify-center">
            <Button variant="outline" onClick={toggleShowAll}>
              {showAll ? (
                <>
                  <Minus className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
                  {language === 'en' ? 'Show Less' : 'عرض أقل'}
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
                  {language === 'en' ? 'Show All' : 'عرض الكل'}
                </>
              )}
            </Button>
        </div>
      )}

    </SectionWrapper>
  );
};

export default Projects;
