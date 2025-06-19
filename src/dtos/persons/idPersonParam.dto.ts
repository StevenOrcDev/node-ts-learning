import { z } from 'zod';

// used for all endpoints that require a person ID in the URL
export const idPersonParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID must be a positive integer').transform(Number),
});

export type IdPersonParamDto = z.infer<typeof idPersonParamSchema>;
