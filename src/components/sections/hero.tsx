import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-10 z-10 flex flex-col md:flex-row items-center gap-12 pt-20">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 animate-fade-in-up">
          <div className="space-y-4">
             <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary block">
              The Art of African Luxury
            </span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] text-foreground">
              Vee's <br /> 
              <span className="italic font-medium text-primary">Collection</span>
            </h1>
          </div>
          
          <div className="max-w-md space-y-6">
            <p className="text-xl md:text-2xl font-headline italic text-foreground/80 leading-relaxed">
              Stand Out in Style.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
              Discover affordable luxury and make your style accessible with our
              exquisite fashion pieces, crafted to make you shine with confidence and cultural pride.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-primary transition-all duration-500 font-medium tracking-widest uppercase text-[10px] px-10 h-14">
              <Link href="#products">Explore The Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none border-foreground/20 hover:border-primary hover:bg-transparent transition-all duration-500 font-medium tracking-widest uppercase text-[10px] px-10 h-14">
              <Link href="#contact">Request A Custom Design</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image - Asymmetrical Layout */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh] flex items-center justify-center">
          <div className="relative w-full h-full md:w-4/5 md:h-4/5 rounded-none overflow-hidden shadow-[30px_30px_0px_0px_rgba(184,155,98,0.1)]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          
          {/* Decorative element */}
          <div className="hidden lg:block absolute -bottom-10 -left-10 w-40 h-40 border border-primary/20 z-0 animate-pulse" />
        </div>
      </div>
      
      {/* Background Subtle Texture/Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-0 pointer-events-none" />
    </section>
  );
}
