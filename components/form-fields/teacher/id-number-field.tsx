import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FieldProps } from "@/types/global-users";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";

const IdNumberField = ({ form, teacher }: FieldProps) => {
  useEffect(() => {
    form.setValue("idNumber", teacher?.idNumber || "");
  }, [teacher, form]);

  const avoidSymbols = [".", "+", "-", "E", "e"];

  return (
    <div>
      <FormField
        control={form.control}
        name="idNumber"
        defaultValue={0}
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel
                className={form.formState.errors.grade ? "text-red-500" : ""}
              >
                Numero de Identidad
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Numero de Identidad"
                  id="idNumber"
                  min="0"
                  onKeyDown={(e) =>
                    avoidSymbols.includes(e.key) && e.preventDefault()
                  }
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

export default IdNumberField;
