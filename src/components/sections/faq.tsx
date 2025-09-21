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
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Find answers to common questions about our brand and products.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-primary/20"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/80 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
