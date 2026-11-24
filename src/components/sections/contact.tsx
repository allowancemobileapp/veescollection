'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Instagram, Send, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const WHATSAPP_URL = 'http://wa.me/2347066079296';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Hi, my name is ${values.name}.\n\n${values.message}`;
    const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">Inquiries</span>
              <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground leading-[1.1]">
                Let's Create <br />
                <span className="italic font-medium">Something Beautiful</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed tracking-wide">
                Have a question or a custom request? Fill out the form, and we'll
                bring your vision to life.
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Call / WhatsApp</p>
                   <p className="font-headline text-xl">+234 706 607 9296</p>
                </div>
              </div>

              <Link 
                href="https://instagram.com/vees_collection2023" 
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Instagram</p>
                   <p className="font-headline text-xl group-hover:text-primary transition-colors">@vees_collection2023</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-secondary/10 p-8 md:p-12 border border-border/10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Your Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ex. Valerie John" 
                          {...field} 
                          className="rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg font-headline h-12 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're thinking..."
                          className="min-h-[120px] rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg font-headline transition-all resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-none bg-foreground text-background hover:bg-primary transition-all duration-500 font-medium tracking-widest uppercase text-[10px] h-14"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="mr-3 h-4 w-4" />
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Background Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-secondary/20 -z-0 pointer-events-none" />
    </section>
  );
}
