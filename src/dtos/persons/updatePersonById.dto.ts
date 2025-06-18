import { z } from 'zod';

export const updatePersonByIdSchema = z.object({
  id: z.string().min(1, "The id don't have to be null"),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  age: z.number().int().min(0, 'Age must be a non-negative integer'),
  email: z.string().email('Invalid email format'),
});

export type UpdatePersonById = z.infer<typeof updatePersonByIdSchema>;
