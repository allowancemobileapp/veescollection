import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Scissors,
  Shirt,
  Palette,
  ShoppingBag,
} from 'lucide-react';
import { BoxerIcon, TwoPieceIcon } from '@/components/icons';

const productCategories = [
  {
    id: 'boxers',
    title: 'Boxers',
    description: 'Ultimate comfort and style, designed for everyday luxury.',
    icon: BoxerIcon,
    imageHint: 'boxer shorts',
  },
  {
    id: 'senator-wears',
    title: 'Senator Wears',
    description: 'Exude elegance and confidence in our traditional attire.',
    icon: Shirt,
    imageHint: 'african attire',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready-to-Wear',
    description: 'Effortless style for any occasion, ready when you are.',
    icon: ShoppingBag,
    imageHint: 'fashion outfit',
  },
  {
    id: 'bespoke-designs',
    title: 'Bespoke Designs',
    description: 'Your unique style, perfectly tailored to your measurements.',
    icon: Scissors,
    imageHint: 'tailoring scissors',
  },
  {
    id: 'two-piece-sets',
    title: 'Two-Piece Sets',
    description: 'Chic and coordinated sets for a polished, modern look.',
    icon: TwoPieceIcon,
    imageHint: 'matching set',
  },
  {
    id: 'ankara-wears',
    title: 'Ankara Wears',
    description: 'Vibrant and bold, celebrating culture with contemporary style.',
    icon: Palette,
    imageHint: 'ankara fabric',
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Collection
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Explore our diverse range of fashion, crafted with quality, style, and value in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const productImage = PlaceHolderImages.find(
              (img) => img.id === category.id
            );
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="bg-background border-border/60 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20"
              >
                <div className="relative h-64 w-full">
                  {productImage && (
                    <Image
                      src={productImage.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={productImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                     <Icon className="h-10 w-10 text-primary mb-2" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
