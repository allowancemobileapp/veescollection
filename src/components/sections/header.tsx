'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

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
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-4"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/logo.jpg"
            alt="Vee's Collection Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold font-headline text-xl">
            Vee's Collection
          </span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[320px] sm:max-w-sm">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/logo.jpg"
                      alt="Vee's Collection Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-bold font-headline text-lg">
                      Vee's Collection
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
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
          <nav className="flex items-center gap-8 text-sm">
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
