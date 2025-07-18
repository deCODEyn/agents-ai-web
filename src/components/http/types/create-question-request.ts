import type z from 'zod';
import type { createQuestionSchema } from '../schemas/create-question-schema';

export type CreateQuestionRequest = z.infer<typeof createQuestionSchema>;
