import { z } from 'zod';

export const updatePersonSchema = z.object({
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  age: z.number().int('Age must be an integer').min(0, 'Age must be positive').optional(),
  email: z.string().email('Invalid email').optional(),
});

export type UpdatePersonDto = z.infer<typeof updatePersonSchema>;
