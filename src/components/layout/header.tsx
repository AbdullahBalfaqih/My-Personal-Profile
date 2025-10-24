"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.href));

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.9999 0.527832C26.9999 0.527832 27.2349 12.3364 29.5891 16.711C31.9433 21.0856 37.1999 24.3364 42.1793 25.7533C47.1587 27.1702 53.4721 26.9999 53.4721 26.9999C53.4721 26.9999 47.1587 27.1702 42.1793 28.5871C37.1999 30.004 31.9433 33.2548 29.5891 37.6294C27.2349 41.9955 26.9999 53.8125 26.9999 53.8125C26.9999 53.8125 26.7649 42.0039 24.4107 37.6294C22.0565 33.2548 16.7999 30.004 11.8205 28.5871C6.84112 27.1702 0.527832 27.3405 0.527832 27.3405C0.527832 27.3405 6.84112 27.1702 11.8205 25.7533C16.7999 24.3364 22.0565 21.0856 24.4107 16.711C26.7649 12.3449 26.9999 0.527832 26.9999 0.527832Z" fill="currentColor" className="text-accent"/>
    </svg>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      hasScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="flex items-center gap-2 text-2xl font-bold">
            <Logo />
            <span>Balfaqih</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-card/60 border border-border p-1 rounded-full">
            {NAV_LINKS.filter(l => l.href !== '#contact').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm text-muted-foreground hover:text-white rounded-full transition-colors",
                  (activeSection === link.href) && "text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
             <Button asChild size="sm" className="bg-accent text-accent-foreground rounded-full hover:bg-accent/90">
                <Link href="#contact">CONTACT <ArrowRight className="ml-1" /></Link>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                 <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black text-white border-r-0 p-0">
                <SheetHeader className="p-4 border-b border-white/10">
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                   <Link href="#home" onClick={handleLinkClick} className="flex items-center gap-2 text-2xl font-bold">
                      <Logo />
                       <span>Balfaqih</span>
                  </Link>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <nav className="flex-grow flex flex-col justify-center items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                        "text-2xl font-medium text-muted-foreground hover:text-white transition-colors",
                                        activeSection === link.href && "text-accent"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                     <div className="p-4 border-t border-white/10">
                         <Button asChild size="lg" className="w-full bg-accent text-accent-foreground">
                            <Link href="#contact" onClick={handleLinkClick}>
                                CONTACT <ArrowRight className="ml-2"/>
                            </Link>
                        </Button>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
