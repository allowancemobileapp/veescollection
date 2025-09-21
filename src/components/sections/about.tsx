import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Vee’s Collection was born from love, culture, and legacy.
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
                make you stand out in style — no matter who you are, where you
                come from, or what you do.
              </p>
              <p>
                At Vee’s Collection, fashion isn’t just fabric. It’s a way of
                celebrating heritage, creating memories, and making everyday
                wear feel like luxury. When you wear Vee’s, you don’t just wear
                clothing — you carry a story, a legacy, and a promise of style
                that stands out.
              </p>
              <p className="font-bold">
                ✨ Stand out in style. Stand with Vee’s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
