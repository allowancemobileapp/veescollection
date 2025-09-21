import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/logo.jpg" alt="Vee's Collection Logo" width={24} height={24} className="rounded-full" />
            <span className="font-bold font-headline text-lg">
              Vee's Collection
            </span>
          </Link>
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Vee's Collection. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com/vees_collection2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
