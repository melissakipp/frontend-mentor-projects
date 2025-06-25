import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  plan: z.enum(['free', 'basic', 'ultimate'], {
    errorMap: () => ({ message: 'Please select a plan' })
  }),
  phone: z
    .string()
    .min(10, 'Phone number is required')
    .regex(/^\+?[0-9\s\-()]{10,}$/, 'Invalid phone number'),
  company: z.string().min(2, 'Company name is required')
});

export type SignupFormData = z.infer<typeof signupSchema>;