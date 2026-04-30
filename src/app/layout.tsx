import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from '@/components/ui/scroll-to-top';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { ScrollLineDecoration } from '@/components/ui/scroll-line-decoration';

export const metadata: Metadata = {
  title: "Abdullah Balfaqih",
  description: 'Personal portfolio of Abdullah Balfaqih, IT Specialist & Full Stack Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <SmoothCursor />
        <ScrollLineDecoration />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
