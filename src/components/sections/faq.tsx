import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What makes Vee's Collection fashion affordable yet luxurious?",
    answer:
      'We achieve this by focusing on sustainable sourcing and efficient design processes, ensuring high-quality materials and craftsmanship without the exorbitant price tag, making elegance accessible to everyone.',
  },
  {
    question: 'What types of clothing does Vee\'s Collection specialize in?',
    answer:
      'We specialize in a diverse range including boxers, senator wears, ready-to-wear outfits, bespoke designs, two-piece sets, and authentic Ankara wears, all crafted to help you stand out.',
  },
  {
    question:
      'How does Vee\'s Collection ensure customer satisfaction and value for money?',
    answer:
      'Our commitment is to provide quality, style, and value, ensuring you receive exactly what you ordered and more. Every piece is carefully crafted to exceed expectations, delivering true worth for your investment.',
  },
  {
    question: 'Can I request bespoke or custom designs from Vee\'s Collection?',
    answer:
      'Yes, we offer bespoke designs alongside our ready-to-wear collections. We pride ourselves on creating unique pieces tailored to your style, allowing you to truly express yourself with confidence.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary block">Common Questions</span>
            <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-[1.1]">
              Refining the <br />
              <span className="italic font-medium">Details</span>
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide leading-relaxed max-w-sm">
              Find answers to common questions about our brand, craft, and how we bring African luxury to your wardrobe.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/40 py-2"
                >
                  <AccordionTrigger className="text-left text-xl md:text-2xl font-headline font-light hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-8 pt-2 max-w-2xl">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
