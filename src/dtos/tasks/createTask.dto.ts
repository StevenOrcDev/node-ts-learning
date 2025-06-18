import { z } from 'zod';

export const createTaskschema = z.object({
  description: z.string().min(1, 'Descritption is required'),
  isDone: z.boolean(),
});

export type CreateTaskDto = z.infer<typeof createTaskschema>;
