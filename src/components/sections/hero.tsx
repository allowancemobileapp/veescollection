import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center gap-6 p-4 md:p-6 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary">
          Vee's Collection
        </h1>
        <p className="font-headline text-2xl md:text-3xl text-white">
          Stand Out in Style.
        </p>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
          Discover affordable luxury and make your style accessible with our
          exquisite fashion pieces, crafted to make you shine.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 mt-4">
          <Link href="#products">Explore Our Collection</Link>
        </Button>
      </div>
    </section>
  );
}
