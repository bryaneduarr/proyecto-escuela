import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { FormFieldClassSubjectNames } from "@/types/students";
import { StudentGradesSchema } from "@/lib/models/students";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

const StudentGradesInput = ({
  classSubject,
  partialKey,
  index,
  form,
}: {
  studentGradesData: StudentGradesSchema | undefined;
  form: UseFormReturn<StudentGradesSchema>;
  classSubject: string | null;
  partialKey: string;
  index: number;
}) => {
  return (
    <FormField
      control={form.control}
      name={
        `studentGrades.${classSubject}.${partialKey}` as FormFieldClassSubjectNames
      }
      key={index}
      defaultValue="0"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{`Parcial ${index + 1}`}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={`Grades for partial ${index + 1}`} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default StudentGradesInput;
