
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Products } from '@/components/sections/products';
import { Location } from '@/components/sections/location';
import { Contact } from '@/components/sections/contact';
import { AiChat } from '@/components/sections/ai-chat';
import { Faq } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';
import { Reviews } from '@/components/sections/reviews';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Location />
        <Products />
        <Reviews />
        <Contact />
        <AiChat />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
