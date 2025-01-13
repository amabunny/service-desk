import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов'),

  password: z
    .string()
    .min(8, 'Минимум 8 символов')
    .regex(/(?=.*\d)/, 'Используйте хотя бы одну цифру')
    .regex(/(?=.*[a-z])/, 'Используйте хотя бы одну строчную букву')
    .regex(/(?=.*[A-Z])/, 'Используйте хотя бы одну заглавную букву'),
});
