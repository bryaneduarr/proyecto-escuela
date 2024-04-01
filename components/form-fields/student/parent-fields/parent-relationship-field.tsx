import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { FieldProps } from "@/types/global-users";

const ParentRelationShipField = ({ form, index }: FieldProps) => {
  const parentRelation = ["Father", "Mother"];

  return (
    <FormField
      name={`parents.${index}.relationship`}
      control={form.control}
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select parent relation"></SelectValue>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {parentRelation.map((value, index) => (
                <SelectItem key={index} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default ParentRelationShipField;
