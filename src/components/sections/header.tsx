'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'Our Story' },
  { href: '#products', label: 'Collection' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4 md:px-10 h-20 flex items-center justify-between',
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/20 shadow-sm h-16' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/logo.jpg"
            alt="Vee's Collection Logo"
            width={scrolled ? 32 : 40}
            height={scrolled ? 32 : 40}
            className="rounded-full shadow-md"
          />
          <span className="font-headline font-semibold text-xl tracking-wide uppercase">
            Vee's Collection
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="rounded-none border-primary/50 hover:border-primary hover:bg-primary/5 px-6 font-medium tracking-wider uppercase text-[10px]">
            <Link href="http://wa.me/2347066079296" target="_blank">
              WhatsApp Order
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background border-l-0 p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full p-8 pt-20">
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-headline text-3xl font-light hover:text-primary transition-colors"
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link 
                    href="http://wa.me/2347066079296" 
                    className="font-headline text-3xl font-light text-primary flex items-center gap-3"
                    onClick={closeSheet}
                  >
                    WhatsApp Order <ShoppingCart className="h-6 w-6" />
                  </Link>
                </nav>
                <div className="mt-auto pt-10 border-t border-border/20">
                   <p className="text-xs uppercase tracking-widest text-muted-foreground">Vee's Collection</p>
                   <p className="text-xs mt-2 text-muted-foreground/60 italic">Stand out in style.</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-6 right-6" 
                onClick={closeSheet}
              >
                <X className="h-6 w-6" />
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
