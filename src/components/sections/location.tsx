import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Truck } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border/10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="space-y-8 max-w-3xl">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary flex items-center gap-2">
                <MapPin className="h-3 w-3" /> Port Harcourt, Rivers State
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-[1.1]">
                Rooted in <span className="italic font-medium">Nigeria</span>, <br />
                <span className="text-primary italic font-medium">Delivered</span> to Your Door.
              </h2>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide max-w-2xl">
              Vee’s Collection is proudly based in the heart of Port Harcourt, Rivers State. 
              We blend local artisanal craftsmanship with contemporary luxury to create pieces 
              that resonate with culture and elegance. Our commitment to you transcends borders, 
              offering reliable <span className="text-foreground font-semibold">Nationwide Shipping</span> 
              across all 36 states in Nigeria.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/60">Our Base</p>
                  <p className="font-headline text-lg">Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/60">Coverage</p>
                  <p className="font-headline text-lg">Nationwide Shipping</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-6">
            <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-primary transition-all duration-500 font-medium tracking-widest uppercase text-[10px] px-12 h-14 w-full md:w-auto">
              <Link href="#contact">Make An Enquiry</Link>
            </Button>
            <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-medium italic">
              Experience African Luxury, Anywhere.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative background text */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 font-headline text-[20rem] text-primary/5 select-none pointer-events-none whitespace-nowrap">
        Rivers State
      </div>
    </section>
  );
}
