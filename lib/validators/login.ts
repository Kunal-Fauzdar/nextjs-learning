import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .max(100),
});

export type LoginForm = z.infer<typeof loginSchema>;