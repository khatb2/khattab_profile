"use client";

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
      <Languages className="h-5 w-5" />
      <span className="ml-2 font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
