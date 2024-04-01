import { z } from "zod";

export const userCredentialsSchema = z.object({
  user: z.string().optional(),
  password: z.string(),
  role: z.string().optional(),
});

export type UserCredentials = z.infer<typeof userCredentialsSchema>;
