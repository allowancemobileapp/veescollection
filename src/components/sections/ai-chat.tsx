'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

import { handleCustomerQuery, type AIChatState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full rounded-none bg-primary text-background hover:bg-foreground transition-all duration-500 font-medium tracking-widest uppercase text-[10px] h-12">
      {pending ? (
        'Thinking...'
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Ask Assistant
        </>
      )}
    </Button>
  );
}

export function AiChat() {
  const initialState: AIChatState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(handleCustomerQuery, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'Success') {
      formRef.current?.reset();
    }
    if (state.message !== 'Success' && state.message !== '') {
       toast({
        title: 'Error',
        description: state.errors?.query?.[0] || state.message,
        variant: 'destructive'
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-chat" className="py-24 md:py-32 bg-secondary/30 border-y border-border/10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          
          <div className="text-center space-y-4 max-w-xl">
             <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary block">AI Concierge</span>
             <h2 className="font-headline text-5xl md:text-6xl font-light text-foreground">
              Style <span className="italic font-medium">Assistant</span>
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
              Have a quick question? Our digital assistant is here to help you navigate our collection and brand information.
            </p>
          </div>

          <Card className="w-full bg-background/50 backdrop-blur-sm border-border/30 shadow-[20px_20px_60px_-15px_rgba(184,155,98,0.1)] rounded-none overflow-hidden border-0">
            <div className="grid md:grid-cols-5 min-h-[400px]">
              
              {/* Info Column */}
              <div className="md:col-span-2 bg-foreground text-background p-8 flex flex-col justify-center space-y-6">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h4 className="font-headline text-3xl font-light">Instant Support</h4>
                <p className="text-xs text-background/60 leading-relaxed tracking-wider uppercase">
                  Ask about sizes, fabrics, customization options, or our story.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                   {['Bespoke', 'Boxers', 'Senator Wear', 'Legacy'].map(tag => (
                     <span key={tag} className="text-[9px] uppercase tracking-widest py-1 px-3 border border-background/20 rounded-full">{tag}</span>
                   ))}
                </div>
              </div>

              {/* Chat Column */}
              <div className="md:col-span-3 p-8 flex flex-col h-full">
                <form ref={formRef} action={dispatch} className="space-y-6 flex-grow flex flex-col">
                  <div className="flex-grow space-y-3">
                    <Label htmlFor="query" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60">Your Inquiry</Label>
                    <Textarea
                      id="query"
                      name="query"
                      placeholder="Ex. What fabrics are used for your senator wears?"
                      className="min-h-[120px] rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg font-headline transition-all resize-none bg-transparent"
                      required
                    />
                    {state.errors?.query && (
                      <p className="text-[10px] font-medium text-destructive mt-2 uppercase tracking-wider">
                        {state.errors.query[0]}
                      </p>
                    )}
                  </div>
                  <SubmitButton />
                </form>

                {state.response && (
                  <div className="mt-8 pt-8 border-t border-border/20 animate-fade-in-up">
                    <div className="p-6 bg-secondary/20 border border-primary/10 relative">
                        <div className="absolute -top-3 left-4 px-2 bg-background text-[9px] uppercase tracking-widest font-bold text-primary">Response</div>
                        <p className="text-foreground/90 font-body text-sm leading-relaxed whitespace-pre-wrap italic">
                          {state.response}
                        </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
