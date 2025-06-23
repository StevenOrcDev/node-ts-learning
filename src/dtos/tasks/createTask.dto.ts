import { z } from 'zod';

export const createTaskSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  isDone: z.boolean().optional(),
  personId: z.number().int('Person ID must be an integer').optional(),
});

export type CreateTaskDto = z.infer<typeof createTaskSchema>;
