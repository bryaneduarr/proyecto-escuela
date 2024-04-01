import { z } from "zod";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

export const teachersSchema = z.object({
  name: z.string().min(1, "Teacher's name is required."),
  idNumber: z.coerce.number().gte(1, "Teacher number ID is required"),
  assignedGrade: z
    .string()
    .refine((value) => value !== "", "Assign grade is required"),
  assignClass: z
    .array(optionSchema)
    .min(1, "Assign classes to this teacher is required"),
  userRef: z.string().optional(),
});

export type TeachersSchema = z.infer<typeof teachersSchema>;
