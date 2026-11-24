import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
              <div className="absolute inset-0 border-[15px] border-background/20 m-4 pointer-events-none group-hover:border-primary/20 transition-colors" />
            </div>
            {/* Background Decorative Rectangle */}
            <div className="absolute -z-10 top-1/2 -left-12 -translate-y-1/2 w-full h-4/5 bg-secondary/40" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">Our Legacy</span>
              <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-[1.1]">
                A Story <span className="italic font-medium">Woven</span> Into Every Piece
              </h2>
            </div>

            <div className="space-y-8 text-sm md:text-base text-muted-foreground font-body leading-relaxed max-w-2xl">
              <p className="text-lg md:text-xl font-headline italic text-foreground/80 leading-relaxed border-l-2 border-primary pl-6 py-2">
                "Vee’s Collection was born from love, culture, and a legacy that transcends time."
              </p>
              
              <p>
                In December 2022, this brand came to life in honor of my late
                daughter, Valerie — a light who continues to inspire me every
                day. Carrying her name forward, Vee’s Collection is more than
                just clothing; it is a story of resilience, remembrance, and the
                belief that fashion should make people feel seen, valued, and
                confident.
              </p>
              
              <p>
                Our mission is simple: to blend culture, sustainability, and
                affordable luxury into timeless pieces that everyone can access.
                From bespoke Senator wears to ready-to-wear outfits, elegant
                boxers, and detailed beading works, every design is crafted to
                make you stand out in style — no matter who you are or where you come from.
              </p>
              
              <div className="pt-6 border-t border-border/20">
                <p className="font-headline text-2xl text-foreground">
                  Stand out in style. <span className="text-primary italic">Stand with Vee’s.</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
