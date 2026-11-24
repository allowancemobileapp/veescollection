
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Shirt,
  Palette,
  ShoppingBag,
  ShoppingCart,
  Briefcase,
  ChevronRight,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductVariant {
  size: string;
  price: string;
}

interface ProductCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  imageHint: string;
  price: string;
  variants?: ProductVariant[];
}

const productCategories: ProductCategory[] = [
  {
    id: 'boxers',
    title: 'Vee’s Collection Boxers',
    tagline: 'Comfort Meets Craft',
    description: `Our signature Boxers line is crafted for comfort, durability, and everyday style. Designed with breathable fabrics and modern cuts.`,
    icon: ShoppingBag,
    imageHint: 'boxer shorts',
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
    imageHint: 'african attire',
    price: '₦80,000',
  },
  {
    id: 'agbada',
    title: 'Grand Agbada Set',
    tagline: 'The Ultimate Statement',
    description: `Exquisite Agbada designs crafted for royalty. Premium embroidery and high-quality fabrics that command respect at every occasion.`,
    icon: Crown,
    imageHint: 'luxury agbada',
    price: '₦150,000 – ₦200,000',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready-to-Wear',
    tagline: 'Effortless Elegance',
    description: `Timeless pieces that are easy to style and sustainable. Designed for everyday use, delivering the perfect balance of affordability and refined style.`,
    icon: ShoppingBag,
    imageHint: 'fashion outfit',
    price: '₦30,000 – ₦45,000',
  },
  {
    id: 'office-shirts',
    title: 'Office Packet Shirts',
    tagline: 'The Professional Edge',
    description: `Sharp, stylish, and tailored for professionals. Made with breathable fabrics and sleek cuts for the boardroom.`,
    icon: Briefcase,
    imageHint: 'office shirt',
    price: '₦15,000 – ₦30,000',
  },
  {
    id: 'vintage-fabrics',
    title: 'Vintage Fabrics',
    tagline: 'Heritage in Thread',
    description: `Carefully sourced fabrics full of character. Perfect for clients who want clothing that speaks of heritage and individuality.`,
    icon: Palette,
    imageHint: 'vintage fabric',
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
    <section id="products" className="py-24 md:py-40 bg-secondary/20">
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
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary hover:text-foreground transition-colors"
            >
              Request Custom Piece{' '}
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {productCategories.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-border/20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">
              Exclusive Services
            </span>
            <h3 className="font-headline text-5xl md:text-6xl font-light text-foreground">
              Made for You. <br />
              <span className="italic font-medium">Designed to Stand Out.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              We also offer handcrafted beading works and bespoke tailoring for
              clients who seek a personalized luxury experience. Each custom
              order is a collaboration between your vision and our
              craftsmanship.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary text-background hover:bg-foreground transition-all duration-500 font-medium tracking-widest uppercase text-[10px] px-12 h-14"
              >
                <Link href="#contact">Request A Custom Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ category }: { category: ProductCategory }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    category.variants ? category.variants[0] : null
  );

  const productImage = PlaceHolderImages.find((img) => img.id === category.id);
  const currentPrice = selectedVariant ? selectedVariant.price : category.price;
  const currentSize = selectedVariant ? selectedVariant.size : undefined;

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-secondary/50">
        {productImage && (
          <Image
            src={productImage.imageUrl}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            data-ai-hint={productImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="space-y-3 px-1">
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
