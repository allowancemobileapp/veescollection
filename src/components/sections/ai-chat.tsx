'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { Sparkles } from 'lucide-react';

import { handleCustomerQuery, type AIChatState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? (
        'Thinking...'
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Ask AI Assistant
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
    <section id="ai-chat" className="py-20 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-background border-border/60 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl text-primary">
                AI Customer Assistant
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 pt-2">
                Have a quick question? Our AI assistant can help you with information about our products and brand.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={dispatch} className="space-y-4">
                <div>
                  <Label htmlFor="query" className="text-lg">Your Question</Label>
                  <Textarea
                    id="query"
                    name="query"
                    placeholder="e.g., What sizes do your senator wears come in?"
                    className="min-h-[100px] mt-2"
                    required
                  />
                  {state.errors?.query && (
                    <p className="text-sm font-medium text-destructive mt-2">
                      {state.errors.query[0]}
                    </p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
            {state.response && (
              <CardFooter>
                 <div className="mt-6 p-4 bg-secondary rounded-lg w-full">
                    <h4 className="font-headline text-xl text-primary mb-2">AI Response:</h4>
                    <p className="text-foreground/90 whitespace-pre-wrap">{state.response}</p>
                 </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
