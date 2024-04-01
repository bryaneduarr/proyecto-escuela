import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { FieldProps } from "@/types/global-users";
import { Input } from "@/components/ui/input";

const ParentNameField = ({ form, index }: FieldProps) => {
  return (
    <FormField
      name={`parents.${index}.name`}
      control={form.control}
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder="Nombre del responsable" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default ParentNameField;
