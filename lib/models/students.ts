import { z } from "zod";

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum parentRelation {
  Father = "Father",
  Mother = "Mother",
}

const defaultGrades = {
  partial1: "0",
  partial2: "0",
  partial3: "0",
  partial4: "0",
};

export const defaultStudentGrades = {
  Matematicas: defaultGrades,
  CienciasNaturales: defaultGrades,
  LenguajeYLiteratura: defaultGrades,
  HistoriaYGeografia: defaultGrades,
  EducacionFisica: defaultGrades,
  Musica: defaultGrades,
  Arte: defaultGrades,
  Tecnologia: defaultGrades,
  IdiomaExtranjero: defaultGrades,
  EducacionCivica: defaultGrades,
  Religion: defaultGrades,
  EducacionAmbiental: defaultGrades,
};

const gradesSchema = z.object({
  partial1: z.string().default(defaultGrades.partial1).optional(),
  partial2: z.string().default(defaultGrades.partial2).optional(),
  partial3: z.string().default(defaultGrades.partial3).optional(),
  partial4: z.string().default(defaultGrades.partial4).optional(),
});

export const classesSchema = z.object({
  Matematicas: gradesSchema.optional(),
  CienciasNaturales: gradesSchema.optional(),
  LenguajeYLiteratura: gradesSchema.optional(),
  HistoriaYGeografia: gradesSchema.optional(),
  EducacionFisica: gradesSchema.optional(),
  Musica: gradesSchema.optional(),
  Arte: gradesSchema.optional(),
  Tecnologia: gradesSchema.optional(),
  IdiomaExtranjero: gradesSchema.optional(),
  EducacionCivica: gradesSchema.optional(),
  Religion: gradesSchema.optional(),
  EducacionAmbiental: gradesSchema.optional(),
});

export const studentSchema = z.object({
  name: z.string().min(1, "Student's name is required."),
  age: z.object({
    dateOfBirth: z.string().min(1, "Date is required"),
  }),
  grade: z.string().refine((value) => value !== "", "Grade is required"),
  gender: z.nativeEnum(Gender, {
    errorMap: (issue, ctx) => ({ message: "Invalid gender" }),
  }),
  address: z.object({
    street: z.string().min(1, "Street is required."),
    city: z.string().min(1, "City is required."),
    state: z.string().min(1, "State name is required."),
  }),
  parents: z
    .array(
      z.object({
        name: z.string().min(1, "Parent name is required."),
        relationship: z.nativeEnum(parentRelation, {
          errorMap: (issue, ctx) => ({
            message: "Parent relation is required.",
          }),
        }),
        phone: z.string().min(1, "Parent phone is required."),
      })
    )
    .min(1, "There should be at least 1 parent"),
});

export const newStudentValuesSchema = studentSchema.extend({
  age: z.object({
    dateOfBirth: z.string().min(1, "Date is required"),
    age: z.number().min(0).nonnegative(),
  }),
  studentGrades: classesSchema,
});

export const studentsTeacherUserGrades = newStudentValuesSchema.pick({
  name: true,
  studentGrades: true,
});

export type StudentGradesSchema = z.infer<typeof studentsTeacherUserGrades>;

export type StudentSchema = z.infer<typeof newStudentValuesSchema>;

export type OriginalStudentSchema = z.infer<typeof studentSchema>;
