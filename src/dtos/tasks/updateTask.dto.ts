import { z } from 'zod';

export const updateTaskByIdSchema = z.object({
  description: z.string().min(1, 'description is required'),
  isDone: z.boolean().optional().default(false),
});

export type UpdateTaskDto = z.infer<typeof updateTaskByIdSchema>;
