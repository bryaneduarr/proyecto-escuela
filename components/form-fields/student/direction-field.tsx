import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FieldProps } from "@/types/global-users";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";

const DirectionField = ({ form, student }: FieldProps) => {
  useEffect(() => {
    form.setValue("address", student?.address! || "");
  }, [student, form]);

  return (
    <div className="flex flex-col gap-2">
      <FormLabel
        className={form.formState.errors.address ? "text-red-500" : ""}
      >
        Direccion del studiante
      </FormLabel>
      <FormField
        control={form.control}
        name="address.street"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormControl>
                <Input placeholder="Calle" {...field} />
              </FormControl>
            </FormItem>
          </div>
        )}
      />
      <FormField
        control={form.control}
        name="address.city"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Ciudad o municipio" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address.state"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Departamento" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DirectionField;
