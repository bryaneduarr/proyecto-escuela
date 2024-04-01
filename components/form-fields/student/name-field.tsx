import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FieldProps } from "@/types/global-users";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";

const NameField = ({ form, student }: FieldProps) => {
  useEffect(() => {
    form.setValue("name", student?.name || "");
  }, [student, form]);

  return (
    <div>
      <FormField
        control={form.control}
        name="name"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel>Nombre del estudiante</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre del studiante"
                  id="name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          </div>
        )}
      />
    </div>
  );
};

export default NameField;
