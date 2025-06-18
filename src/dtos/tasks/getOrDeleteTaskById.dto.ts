import { z } from 'zod';

export const getOrDeleteTaskByIdSchema = z.object({
  id: z.string().min(1, "The id don't have to be null"),
});

export type GetOrDeleteTaskByIdDto = z.infer<typeof getOrDeleteTaskByIdSchema>;
