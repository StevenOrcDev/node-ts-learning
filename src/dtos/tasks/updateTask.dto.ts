import { z } from 'zod';

export const updateTaskSchema = z.object({
  description: z.string().min(1, 'Description is required').optional(),
  isDone: z.boolean().optional().default(false),
  personId: z.number().int('Person ID must be an integer').optional(),
});

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;
