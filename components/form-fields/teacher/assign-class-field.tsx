import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FieldProps, Option } from "@/types/global-users";
import { useEffect } from "react";
import { Teacher } from "@/types/teachers";
import MultipleSelector from "@/components/ui/multiple-select";
import GetMethod from "@/lib/fetch-handlers/get-method";

export const classNames = [
  "Matematicas",
  "CienciasNaturales",
  "LenguajeYLiteratura",
  "HistoriaYGeografia",
  "EducacionFisica",
  "Musica",
  "Arte",
  "Tecnologia",
  "IdiomaExtranjero",
  "EducacionCivica",
  "Religion",
  "EducacionAmbiental",
];

const AssignClassField = ({
  form,
  teacher,
  gradeValue,
  storedGrade,
  currentTeacher,
}: FieldProps) => {
  useEffect(() => {
    form.setValue("assignClass", teacher?.assignClass || "");
  }, [teacher, form]);

  useEffect(() => {
    form.setValue("assignClass", []);
  }, [gradeValue, form]);

  gradeValue =
    gradeValue?.length! > 0
      ? gradeValue
      : storedGrade?.length! > 0
      ? (gradeValue = storedGrade)
      : (gradeValue = "");

  const teachers = GetMethod("teacher");

  const checkClassAvailability = (classList: Option[]) => {
    return classList.filter((classOption) => {
      return !teachers.some((teacher: Teacher) => {
        return (
          teacher.assignedGrade === gradeValue &&
          teacher.assignClass.some(
            (assignedClass) => assignedClass.value === classOption.value
          ) &&
          teacher._id !== currentTeacher
        );
      });
    });
  };

  let classList: Option[] = [];

  switch (gradeValue) {
    case "1st Grade":
    case "2nd Grade":
    case "3rd Grade":
    case "4th Grade":
    case "5th Grade":
    case "6th Grade":
      const gradeNumber = gradeValue[0];

      classList = classNames.map((className) => ({
        label: `${className} ${gradeNumber}`,
        value: `${className
          .toLocaleLowerCase()
          .replace(" ", "_")}_${gradeNumber}`,
      }));
      break;
    default:
      "no results found";
      break;
  }

  return (
    <div>
      <FormField
        control={form.control}
        name="assignClass"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assigne una o varias clases al maestro</FormLabel>
            {!!gradeValue?.trim() || (
              <span className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-500">
                Por favor seleccione un grado al maestro para mostrar las clases
                disponibles.
              </span>
            )}
            <FormControl>
              <MultipleSelector
                disabled={!gradeValue?.length}
                value={field.value}
                onChange={field.onChange}
                options={checkClassAvailability(classList)}
                placeholder="Seleccione las clases"
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    Nada mas que mostrar.
                  </p>
                }
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AssignClassField;
