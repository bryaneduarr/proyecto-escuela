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
import { Gender } from "@/lib/models/students";

const GenderField = ({ form, student }: FieldProps) => {
  const gender = ["Male", "Female"];

  useEffect(() => {
    form.setValue("gender", student?.gender as Gender);
  }, [student, form]);

  return (
    <div>
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel>Genero del estudiante</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el genero"></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gender.map((value, index) => (
                    <SelectItem key={index} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          </div>
        )}
      />
    </div>
  );
};

export default GenderField;
