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

const AssignedGradeField = ({ form, teacher, gradeValueProp }: FieldProps) => {
  useEffect(() => {
    form.setValue("assignedGrade", teacher?.assignedGrade || "");
  }, [teacher, form]);

  const grades = [
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
  ];

  return (
    <div>
      <FormField
        control={form.control}
        name="assignedGrade"
        render={({ field }) => {
          const { ref, ...restField } = field;
          return (
            <div>
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    gradeValueProp!(value);
                    field.onChange(value);
                  }}
                  {...restField}
                >
                  <FormLabel>Asigne un grado al maestro</FormLabel>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un grado al maestro" />
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
            </div>
          );
        }}
      />
    </div>
  );
};

export default AssignedGradeField;
