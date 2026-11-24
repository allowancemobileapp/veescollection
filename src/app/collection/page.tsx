
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { ProductCard, productCategories } from '@/components/sections/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CollectionPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary mb-4">
                <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                  <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary block">Full Catalog</span>
              <h1 className="font-headline text-6xl md:text-8xl font-light text-foreground">
                The <span className="italic font-medium">Complete</span> Collection
              </h1>
              <p className="text-muted-foreground text-sm max-w-xl tracking-wide leading-relaxed">
                Discover our full range of bespoke Senator wears, artisanal Agbada sets, comfort-first boxers, and sophisticated ready-to-wear outfits. Each piece is a testament to cultural pride and premium craftsmanship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-32 p-12 bg-secondary/10 border border-border/20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-headline text-4xl font-light">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground text-sm">
                We specialize in bespoke tailoring and handcrafted beading. Let us bring your unique vision to life with a custom-made design.
              </p>
              <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-primary transition-all px-12 h-14 uppercase tracking-widest text-[10px]">
                <Link href="/#contact">Request Custom Design</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
