import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldProps } from "@/types/global-users";
import { useEffect } from "react";

const GradeField = ({ form, student }: FieldProps) => {
  const grades = [
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
  ];

  useEffect(() => {
    form.setValue("grade", student?.grade || "");
  }, [student, form]);

  return (
    <div className="flex flex-col gap-3">
      <FormLabel className={form.formState.errors.grade ? "text-red-500" : ""}>
        Asignar grado al estudiante
      </FormLabel>
      <FormField
        control={form.control}
        name="grade"
        render={({ field }) => {
          const { ref, ...restField } = field;

          return (
            <FormItem>
              <Select onValueChange={field.onChange} {...restField}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un grado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {grades.map((value, index) => (
                    <SelectItem key={index} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          );
        }}
      />
    </div>
  );
};

export default GradeField;
