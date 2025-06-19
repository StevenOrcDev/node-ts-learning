import { z } from 'zod';

export const updatePersonByIdSchema = z.object({
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  age: z.number().int().min(0, 'Age must be a non-negative integer').optional(),
  email: z.string().email('Invalid email format').optional(),
});

export type UpdatePersonById = z.infer<typeof updatePersonByIdSchema>;
