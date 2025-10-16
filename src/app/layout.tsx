import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/context/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Executive Profile | Khattab Ali Hassan',
  description: 'Professional portfolio of a technology project manager.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
