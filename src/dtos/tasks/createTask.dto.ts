import { z } from 'zod';

export const createTaskschema = z.object({
  description: z.string().min(1, 'Descritption is required'),
  isDone: z.boolean().optional().default(false),
});

export type CreateTaskDto = z.infer<typeof createTaskschema>;
