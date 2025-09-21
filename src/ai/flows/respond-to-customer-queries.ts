'use server';

/**
 * @fileOverview A customer query answering AI agent for Vee's Collection.
 *
 * - respondToCustomerQuery - A function that handles customer queries.
 * - RespondToCustomerQueryInput - The input type for the respondToCustomerQuery function.
 * - RespondToCustomerQueryOutput - The return type for the respondToCustomerQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RespondToCustomerQueryInputSchema = z.object({
  query: z.string().describe('The customer query about Vee\'s Collection.'),
});
export type RespondToCustomerQueryInput = z.infer<
  typeof RespondToCustomerQueryInputSchema
>;

const RespondToCustomerQueryOutputSchema = z.object({
  response: z.string().describe('The response to the customer query.'),
});
export type RespondToCustomerQueryOutput = z.infer<
  typeof RespondToCustomerQueryOutputSchema
>;

export async function respondToCustomerQuery(
  input: RespondToCustomerQueryInput
): Promise<RespondToCustomerQueryOutput> {
  return respondToCustomerQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'respondToCustomerQueryPrompt',
  input: {schema: RespondToCustomerQueryInputSchema},
  output: {schema: RespondToCustomerQueryOutputSchema},
  prompt: `You are a customer service representative for Vee\'s Collection, an affordable luxury fashion brand. Answer the following customer query:

Query: {{{query}}}

Be helpful, friendly, and informative. Focus on Vee\'s Collection\'s mission of providing quality, style, and value. Also mention that Vee\'s collection specializes in a wide range of fashion pieces, from boxers and senator wears to ready-to-wear outfits, bespoke designs, two-piece sets, and Ankara wears.`,
});

const respondToCustomerQueryFlow = ai.defineFlow(
  {
    name: 'respondToCustomerQueryFlow',
    inputSchema: RespondToCustomerQueryInputSchema,
    outputSchema: RespondToCustomerQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
