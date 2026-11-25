
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Reviews() {
  const reviewImages = PlaceHolderImages.filter(img => img.id.startsWith('review-'));

  return (
    <section id="reviews" className="py-24 md:py-40 bg-background overflow-hidden border-t border-border/10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary block">
            Testimonials
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-tight">
            Customer <span className="italic font-medium">Voices</span>
          </h2>
          <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
            Discover why our clients trust Vee's Collection for their most important moments and everyday style.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {reviewImages.map((img) => (
                <CarouselItem key={img.id} className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3 shrink-0">
                  <div className="relative aspect-[9/16] w-full overflow-hidden shadow-2xl border border-border/10 group">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 border border-background/20 m-2 pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
               <CarouselPrevious className="static h-12 w-12 bg-secondary/10 hover:bg-primary hover:text-background border-none transition-all rounded-none translate-x-0" />
               <CarouselNext className="static h-12 w-12 bg-secondary/10 hover:bg-primary hover:text-background border-none transition-all rounded-none translate-x-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium italic">
            Join the legacy of style.
          </p>
        </div>
      </div>
    </section>
  );
}
