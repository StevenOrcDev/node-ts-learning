import { z } from 'zod';

export const idTaskParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID must be a positive integer').transform(Number),
});

export type IdTaskParamDto = z.infer<typeof idTaskParamSchema>;
