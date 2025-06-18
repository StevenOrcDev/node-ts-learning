import { z } from 'zod';

export const getOrDeletePersonByIdSchema = z.object({
  id: z.string().min(1, "id don't have to be null"),
});

export type GetOrDeletePersonByIdDto = z.infer<typeof getOrDeletePersonByIdSchema>;
