import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Shirt,
  Palette,
  ShoppingBag,
  ShoppingCart,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { BoxerIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

const productCategories = [
  {
    id: 'boxers',
    title: 'Vee’s Collection Boxers',
    tagline: 'Comfort Meets Craft',
    description: `Our signature Boxers line is crafted for comfort, durability, and everyday style. Designed with breathable fabrics and modern cuts for the premium feel you deserve.`,
    icon: BoxerIcon,
    imageHint: 'boxer shorts',
    price: '₦12,500',
  },
  {
    id: 'senator-wears',
    title: 'Senator Wears',
    tagline: 'Cultural Distinction',
    description: `Step into culture and class with our bespoke Senator Wears. Each piece is tailored with precision, blending traditional heritage with a modern luxury touch.`,
    icon: Shirt,
    imageHint: 'african attire',
    price: '₦45,000 – ₦80,000',
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
    description: `Sharp, stylish, and tailored for professionals. Made with breathable fabrics and sleek cuts, keeping you confident from boardroom to evening events.`,
    icon: Briefcase,
    imageHint: 'office shirt',
    price: '₦15,000 – ₦30,000',
  },
  {
    id: 'vintage-fabrics',
    title: 'Vintage Fabrics',
    tagline: 'Heritage in Thread',
    description: `Carefully sourced fabrics full of character. Perfect for clients who want clothing that speaks of heritage, elegance, and distinct individuality.`,
    icon: Palette,
    imageHint: 'vintage fabric',
    price: '₦7,500 – ₦15,000 / yard',
  },
];

const WHATSAPP_URL = 'http://wa.me/2347066079296';

function generateWhatsAppLink(productName: string) {
  const message = `Hi, I am interested in purchasing ${productName} from Vee's Collection.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function Products() {
  return (
    <section id="products" className="py-24 md:py-40 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">The Collection</span>
            <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-tight">
              Curated <span className="italic font-medium">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide max-w-md">
              Explore our diverse range of fashion, where every thread is chosen with quality, style, and accessible luxury in mind.
            </p>
          </div>
          <div className="hidden md:block">
             <Link href="#contact" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary hover:text-foreground transition-colors">
               Request Custom Piece <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {productCategories.map((category) => {
            const productImage = PlaceHolderImages.find(
              (img) => img.id === category.id
            );
            return (
              <div
                key={category.id}
                className="group flex flex-col"
              >
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
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                     <category.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className="space-y-3 px-1">
                   <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary/70 block">{category.tagline}</span>
                   <h3 className="font-headline text-3xl font-light text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.8rem]">
                    {category.description}
                  </p>
                  <p className="text-foreground font-semibold tracking-wider text-sm mt-4">
                    {category.price}
                  </p>
                  
                  <div className="pt-4">
                    <Link 
                      href={generateWhatsAppLink(category.title)} 
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
          })}
        </div>

        {/* Bespoke/Custom Orders Highlight */}
        <div className="mt-32 pt-20 border-t border-border/20 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">Exclusive Services</span>
                <h3 className="font-headline text-5xl md:text-6xl font-light text-foreground">
                    Made for You. <br />
                    <span className="italic font-medium">Designed to Stand Out.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                    We also offer handcrafted beading works and bespoke tailoring for clients who seek a personalized luxury experience. Each custom order is a collaboration between your vision and our craftsmanship.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg" className="rounded-none bg-primary text-background hover:bg-foreground transition-all duration-500 font-medium tracking-widest uppercase text-[10px] px-12 h-14">
                      <Link href="#contact">
                          Request A Custom Order
                      </Link>
                  </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
