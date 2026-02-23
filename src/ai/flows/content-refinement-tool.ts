'use server';

/**
 * @fileOverview A content refinement AI agent.
 *
 * - refineContent - A function that handles the content refinement process.
 * - RefineContentInput - The input type for the refineContent function.
 * - RefineContentOutput - The return type for the refineContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineContentInputSchema = z.object({
  content: z
    .string()
    .describe("The content to be refined. This could be a project description, a summary, or any other text."),
});
export type RefineContentInput = z.infer<typeof RefineContentInputSchema>;

const RefineContentOutputSchema = z.object({
  refinedContent: z.string().describe('The refined content with improved tone, clarity, and engagement.'),
  suggestions: z.array(z.string()).describe('A list of suggestions for further improvement.'),
});
export type RefineContentOutput = z.infer<typeof RefineContentOutputSchema>;

export async function refineContent(input: RefineContentInput): Promise<RefineContentOutput> {
  return refineContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineContentPrompt',
  input: {schema: RefineContentInputSchema},
  output: {schema: RefineContentOutputSchema},
  prompt: `You are an AI content refinement tool. Your task is to analyze the given content and provide suggestions for improvement in tone, clarity, and engagement.

Content to refine: {{{content}}}

Refined Content:

Suggestions for further improvement:
`,
});

const refineContentFlow = ai.defineFlow(
  {
    name: 'refineContentFlow',
    inputSchema: RefineContentInputSchema,
    outputSchema: RefineContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
