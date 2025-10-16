"use client";

import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          {language === 'en' 
            ? `© ${currentYear} Khattab Ali Hassan. All rights reserved.`
            : `© ${currentYear} خطاب علي حسن. جميع الحقوق محفوظة.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
