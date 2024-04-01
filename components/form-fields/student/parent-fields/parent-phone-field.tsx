import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { PhoneInputComponent } from "@/components/ui/phone-input";
import { FieldProps } from "@/types/global-users";


const ParentPhoneField = ({ form, index }: FieldProps) => {
  return (
    <FormField
      control={form.control}
      name={`parents.${index}.phone`}
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <PhoneInputComponent {...field} ref={null} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default ParentPhoneField;
