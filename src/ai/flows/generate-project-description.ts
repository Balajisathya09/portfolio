'use server';
/**
 * @fileOverview A Genkit flow for generating compelling technical project descriptions.
 *
 * - generateProjectDescription - A function that generates a project description based on input.
 * - ProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - ProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectDescriptionInputSchema = z
  .object({
    codeSnippet: z
      .string()
      .optional()
      .describe('An optional code snippet related to the project.'),
    githubReadmeLink: z
      .string()
      .optional()
      .describe('An optional GitHub README link for the project.'),
  })
  .refine(data => data.codeSnippet || data.githubReadmeLink, {
    message: 'Either codeSnippet or githubReadmeLink must be provided.',
    path: ['codeSnippet', 'githubReadmeLink'],
  });

export type ProjectDescriptionInput = z.infer<
  typeof ProjectDescriptionInputSchema
>;

const ProjectDescriptionOutputSchema = z
  .object({
    description: z.string().describe('The generated compelling project description.'),
  })
  .describe('The output schema for the generated project description.');

export type ProjectDescriptionOutput = z.infer<
  typeof ProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: ProjectDescriptionInput
): Promise<ProjectDescriptionOutput> {
  return projectDescriptionFlow(input);
}

const projectDescriptionPrompt = ai.definePrompt({
  name: 'projectDescriptionPrompt',
  input: {schema: ProjectDescriptionInputSchema},
  output: {schema: ProjectDescriptionOutputSchema},
  prompt: `You are an expert technical writer and marketer specializing in creating compelling, concise, and professional project descriptions for a portfolio.
Your goal is to highlight the key technical aspects, challenges overcome, and the impact of the project.

Generate a compelling technical project description based on the provided information. If both a code snippet and a GitHub README link are provided, prioritize information from the README but use the code snippet to understand technical details.

Instructions:
- Focus on the project's purpose, the technologies used, and unique technical solutions.
- Keep the description to 2-4 paragraphs, suitable for a professional portfolio.
- Use a confident, results-oriented tone.
- Do not include any introductory or concluding remarks outside the description itself.

${'{{#if githubReadmeLink}}'}
GitHub README Link: ${'{{{githubReadmeLink}}}'}
${'{{/if}}'}

${'{{#if codeSnippet}}'}
Code Snippet:
${'```'}
${'{{{codeSnippet}}}'}
${'```'}
${'{{/if}}'}
`,
});

const projectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: ProjectDescriptionInputSchema,
    outputSchema: ProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await projectDescriptionPrompt(input);
    return output!;
  }
);
