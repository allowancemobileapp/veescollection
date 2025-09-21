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
                At Vees Collection, we believe fashion should be both affordable
                and luxurious. Our brand is built on the mission of making style
                accessible — offering you the elegance of high-end fashion at
                prices that embrace sustainability and comfort.
              </p>
              <p>
                We specialize in a wide range of fashion pieces, from boxers and
                senator wears to ready-to-wear outfits, bespoke designs,
                two-piece sets, and Ankara wears. Every piece is crafted with
                care, ensuring that you don’t just wear clothes, but you stand
                out in style.
              </p>
              <p>
                Our goal is simple: to provide quality, style, and value —
                giving you exactly what you ordered, exactly what your money is
                worth, and more. For us, fashion isn’t just about clothing; it’s
                about helping everyone express themselves with confidence,
                regardless of budget. At Vees Collection, luxury is no longer out
                of reach — it’s right here, for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
