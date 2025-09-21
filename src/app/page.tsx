import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Products } from '@/components/sections/products';
import { Contact } from '@/components/sections/contact';
import { AiChat } from '@/components/sections/ai-chat';
import { Faq } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Contact />
        <AiChat />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
