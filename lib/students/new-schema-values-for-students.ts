import {
  StudentSchema,
  classesSchema,
  studentSchema,
} from "@/lib/models/students";
import { StudentGrades } from "@/types/students";
import { classNames } from "@/components/form-fields/teacher/assign-class-field";
import { z } from "zod";

/** esta funcion contiene un nuevo esquema para poder crear las clases de los alumnos y sus notas bases que son 0 todas, y tambien
 *  para calcular la edad del estudiante y con estas dos poder crear un nuevo esquema con los datos tambien del estudiante.
 */

export const newSchemaValuesForStudent = (
  values: StudentSchema,
  apiStudentGrades?: StudentGrades,
) => {
  const age = Math.floor(
    (new Date().getTime() - new Date(values.age.dateOfBirth).getTime()) /
      (1000 * 60 * 60 * 24 * 365)
  );

  const defaultGrades = {
    partial1: "0",
    partial2: "0",
    partial3: "0",
    partial4: "0",
  };

  const studentGrades: StudentGrades =
    apiStudentGrades ||
    classNames.reduce<StudentGrades>((previousValue: any, currentClassName) => {
      previousValue[currentClassName] = { ...defaultGrades };
      return previousValue;
    }, {} as StudentGrades);

  const newSchema = studentSchema.extend({
    age: z.object({
      dateOfBirth: z.string(),
      age: z.number().min(0).nonnegative(),
    }),
    studentGrades: classesSchema,
  });

  const newValues = newSchema.parse({
    ...values,
    age: {
      ...values.age,
      age,
    },
    studentGrades,
  });

  return newValues;
};
