
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Shirt,
  Palette,
  ShoppingBag,
  ShoppingCart,
  Briefcase,
  ChevronRight,
  Crown,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProductVariant {
  size: string;
  price: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  images: string[];
  price: string;
  variants?: ProductVariant[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'boxers',
    title: 'Vee’s Collection Boxers',
    tagline: 'Comfort Meets Craft',
    description: `Our signature Boxers line is crafted for comfort, durability, and everyday style. Designed with breathable fabrics and modern cuts.`,
    icon: ShoppingBag,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.01%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.01%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM2.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM3.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM4.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM5.jpeg',
    ],
    price: '₦12,500',
    variants: [
      { size: 'Medium', price: '₦12,500' },
      { size: 'Large', price: '₦12,500' },
      { size: 'XL', price: '₦14,000' },
      { size: 'XXL', price: '₦16,000' },
      { size: 'Kids', price: '₦8,000' },
    ],
  },
  {
    id: 'senator-wears',
    title: 'Senator Wears',
    tagline: 'Cultural Distinction',
    description: `Step into culture and class with our bespoke Senator Wears. Each piece is tailored with precision, blending traditional heritage with modern luxury.`,
    icon: Shirt,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM6.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.18%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.59.41%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.18%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM7.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.59.41%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM8.jpeg',
    ],
    price: '₦80,000',
  },
  {
    id: 'agbada',
    title: 'Grand Agbada Set',
    tagline: 'The Ultimate Statement',
    description: `Exquisite Agbada designs crafted for royalty. Premium embroidery and high-quality fabrics that command respect at every occasion.`,
    icon: Crown,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM13.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM14.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM15.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.25%20AM16.jpeg',
    ],
    price: '₦150,000 – ₦200,000',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready-to-Wear',
    tagline: 'Effortless Elegance',
    description: `Timeless pieces that are easy to style and sustainable. Designed for everyday use, delivering the perfect balance of affordability and refined style.`,
    icon: ShoppingBag,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM10.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM11.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM9.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM12.jpeg',
    ],
    price: '₦30,000 – ₦45,000',
  },
  {
    id: 'office-shirts',
    title: 'Office Packet Shirts',
    tagline: 'The Professional Edge',
    description: `Sharp, stylish, and tailored for professionals. Made with breathable fabrics and sleek cuts for the boardroom.`,
    icon: Briefcase,
    images: ['https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/OFFICE%20WEARS.png'],
    price: '₦15,000 – ₦30,000',
  },
  {
    id: 'vintage-fabrics',
    title: 'Vintage Fabrics',
    tagline: 'Heritage in Thread',
    description: `Carefully sourced fabrics full of character. Perfect for clients who want clothing that speaks of heritage and individuality.`,
    icon: Palette,
    images: ['https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/Vintage%20Fabrics.jpg'],
    price: '₦7,500 – ₦15,000 / yard',
  },
];

const WHATSAPP_URL = 'http://wa.me/2347066079296';

function generateWhatsAppLink(productName: string, size?: string, price?: string) {
  let message = `Hi, I am interested in purchasing ${productName} from Vee's Collection.`;
  if (size) message += ` (Size: ${size})`;
  if (price) message += ` for ${price}`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function Products() {
  return (
    <section id="products" className="py-24 md:py-40 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">
              The Collection
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-tight">
              Curated <span className="italic font-medium">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide max-w-md">
              Explore our diverse range of fashion, where every thread is chosen
              with quality, style, and accessible luxury in mind.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Link
              href="/collection"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary hover:text-foreground transition-colors"
            >
              See Full Collection{' '}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {productCategories.map((category) => (
                <CarouselItem key={category.id} className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <ProductCard category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
               <CarouselNext className="h-14 w-14 bg-background/50 backdrop-blur-sm border-none shadow-xl text-primary hover:bg-background hover:text-foreground transition-all rounded-none translate-x-1/2" />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
               <CarouselPrevious className="h-14 w-14 bg-background/50 backdrop-blur-sm border-none shadow-xl text-primary hover:bg-background hover:text-foreground transition-all rounded-none -translate-x-1/2" />
            </div>
          </Carousel>
          
          {/* Visual cue for swiping */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-secondary/40 to-transparent pointer-events-none z-0" />
        </div>

        <div className="mt-20 text-center">
            <Button
                asChild
                variant="outline"
                className="rounded-none border-primary/20 hover:border-primary px-10 h-14 font-medium tracking-widest uppercase text-[10px]"
            >
                <Link href="/collection">View All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ category }: { category: ProductCategory }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    category.variants ? category.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : category.price;
  const currentSize = selectedVariant ? selectedVariant.size : undefined;

  return (
    <div className="group flex flex-col h-full bg-background/40 backdrop-blur-sm border border-border/10 p-4 transition-all hover:bg-background/80 hover:shadow-2xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-secondary/50">
        {category.images.length > 1 ? (
          <Carousel opts={{ loop: true }} className="w-full h-full">
            <CarouselContent>
              {category.images.map((img, idx) => (
                <CarouselItem key={idx} className="h-full relative aspect-[4/5]">
                  <Image
                    src={img}
                    alt={`${category.title} angle ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background/20 hover:bg-background/80 border-none h-8 w-8 text-foreground" />
            <CarouselNext className="right-2 bg-background/20 hover:bg-background/80 border-none h-8 w-8 text-foreground" />
          </Carousel>
        ) : (
          <Image
            src={category.images[0]}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>

      <div className="space-y-3 px-1 flex-grow">
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary/70 block">
          {category.tagline}
        </span>
        <h3 className="font-headline text-3xl font-light text-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.8rem]">
          {category.description}
        </p>

        {category.variants && (
          <div className="pt-2">
            <Select
              onValueChange={(value) => {
                const variant = category.variants?.find((v) => v.size === value);
                if (variant) setSelectedVariant(variant);
              }}
              defaultValue={category.variants[0].size}
            >
              <SelectTrigger className="w-full rounded-none border-border bg-transparent font-medium tracking-widest text-[10px] uppercase h-10">
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                {category.variants.map((variant) => (
                  <SelectItem
                    key={variant.size}
                    value={variant.size}
                    className="text-[10px] uppercase tracking-widest"
                  >
                    {variant.size} ({variant.price})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <p className="text-foreground font-semibold tracking-wider text-sm mt-4">
          {currentPrice}
        </p>

        <div className="pt-4">
          <Link
            href={generateWhatsAppLink(category.title, currentSize, currentPrice)}
            target="_blank"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1"
          >
            <ShoppingCart className="h-3 w-3" />
            Order via WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
