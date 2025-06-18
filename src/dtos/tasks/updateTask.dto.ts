import { z } from 'zod';

export const updateTaskByIdSchema = z.object({
  id: z.string().min(1, "The id don't have to be null"),
  description: z.string().min(1, 'description is required'),
  isDone: z.boolean(),
});

export type UpdateTaskDto = z.infer<typeof updateTaskByIdSchema>;
