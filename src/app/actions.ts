'use server';

import {
  respondToCustomerQuery,
  type RespondToCustomerQueryOutput,
} from '@/ai/flows/respond-to-customer-queries';
import { z } from 'zod';

const QuerySchema = z.object({
  query: z.string().min(10, {
    message: 'Please enter a query with at least 10 characters.',
  }),
});

export type AIChatState = {
  message: string;
  errors?: {
    query?: string[];
  };
  response?: string;
};

export async function handleCustomerQuery(
  prevState: AIChatState,
  formData: FormData
): Promise<AIChatState> {
  const validatedFields = QuerySchema.safeParse({
    query: formData.get('query'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid query.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result: RespondToCustomerQueryOutput = await respondToCustomerQuery({
      query: validatedFields.data.query,
    });
    return {
      message: 'Success',
      response: result.response,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
