'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Instagram, Send } from 'lucide-react';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h2>
            <p className="text-lg text-foreground/80">
              Have a question or a custom request? Fill out the form, and we'll
              get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-2xl text-primary/90">
                Follow Us
              </h3>
              <Link
                href="https://instagram.com/vees_collection2023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="h-8 w-8 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  @vees_collection2023
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-secondary border-border/60 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what you're thinking..."
                              className="min-h-[150px]"
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
                      className="w-full font-bold"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
