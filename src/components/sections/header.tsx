'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Collection' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Vee's Collection</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-2">
                  <Gem className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">Vee's Collection</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeSheet}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
