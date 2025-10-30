'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CVDownloader = () => {
  const { language } = useLanguage();

  const cvPath = '/cv/CV_Khattab_2025.pdf';
  
  const buttonText = language === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية';

  return (
    <div className="mt-8 flex justify-center">
      <Button
        asChild
        size="lg"
        className="bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300 font-bold shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <a href={cvPath} download>
          <Download className="h-5 w-5" />
          <span>{buttonText}</span>
        </a>
      </Button>
    </div>
  );
};

export default CVDownloader;