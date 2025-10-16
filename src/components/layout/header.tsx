"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase, Star, FolderGit, School, Phone, Home, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from '@/components/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useLanguage } from '@/context/language-context';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const Header = () => {
  const { language } = useLanguage();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label_en: 'Profile', label_ar: 'البروفايل', icon: Home },
    { id: 'experience', label_en: 'Experience', label_ar: 'الخبرات', icon: Briefcase },
    { id: 'skills', label_en: 'Skills', label_ar: 'المهارات', icon: Star },
    { id: 'projects', label_en: 'Projects', label_ar: 'المشاريع', icon: FolderGit },
    { id: 'education', label_en: 'Education', label_ar: 'التعليم', icon: School },
    { id: 'contact', label_en: 'Contact', label_ar: 'التواصل', icon: Phone },
    { id: 'faq', label_en: 'FAQ', label_ar: 'الأسئلة الشائعة', icon: HelpCircle },
  ];

  const activeId = useScrollSpy(navItems.map(item => item.id), { rootMargin: '0% 0% -80% 0%' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <nav className={`flex gap-1 ${isMobile ? 'flex-col items-start w-full' : 'items-center'}`}>
      {navItems.map((item) => (
        <Button
          key={item.id}
          asChild
          variant="ghost"
          className={`justify-start text-sm w-full ${activeId === item.id ? 'bg-primary/10 text-primary' : ''}`}
          onClick={() => isMobile && setSheetOpen(false)}
        >
          <Link href={`#${item.id}`}>
            <item.icon className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
            {language === 'en' ? item.label_en : item.label_ar}
          </Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b bg-background/80 shadow-sm backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            {language === 'en' ? 'Executive Profile' : 'الملف التنفيذي'}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavLinks />
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'right' : 'left'}>
              <SheetHeader>
                <SheetTitle className='sr-only'>
                  {language === 'en' ? 'Main Menu' : 'القائمة الرئيسية'}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <Briefcase className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">
                            {language === 'en' ? 'Executive Profile' : 'الملف التنفيذي'}
                        </span>
                    </Link>
                    <div className='flex items-center'>
                      <LanguageSwitcher />
                       <ThemeSwitcher />
                    </div>
                </div>
                <NavLinks isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
