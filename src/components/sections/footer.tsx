import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-20 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/logo.jpg" 
                alt="Vee's Collection Logo" 
                width={40} 
                height={40} 
                className="rounded-full grayscale invert border border-background/20" 
              />
              <span className="font-headline font-semibold text-2xl tracking-wide uppercase">
                Vee's Collection
              </span>
            </Link>
            <div className="space-y-2">
              <p className="text-sm text-background/60 font-headline italic text-xl max-w-xs">
                "Stand Out in Style."
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-medium max-w-xs">
                Inspired by Valerie, rooted in legacy
              </p>
            </div>
            <p className="text-xs text-background/40 max-w-sm leading-relaxed tracking-wider uppercase font-medium">
              A contemporary African luxury fashion house born from legacy, culture, and love.
            </p>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Sitemap</h4>
            <nav className="flex flex-col gap-4">
               {['About', 'Collection', 'Contact', 'FAQ'].map(item => (
                 <Link key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest text-background/60 hover:text-primary transition-colors">
                   {item}
                 </Link>
               ))}
            </nav>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Connect</h4>
            <div className="flex flex-col gap-6">
              <Link
                href="https://instagram.com/vees_collection2023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">@vees_collection2023</span>
              </Link>
              <Link
                href="http://wa.me/2347066079296"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group"
              >
                <Send className="h-5 w-5 rotate-45" />
                <span className="text-xs uppercase tracking-widest">WhatsApp Enquiries</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/30 font-medium">
            &copy; {currentYear} Vee's Collection. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
             <Link href="#" className="text-[9px] uppercase tracking-widest text-background/20 hover:text-background transition-colors">Privacy Policy</Link>
             <Link href="#" className="text-[9px] uppercase tracking-widest text-background/20 hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
