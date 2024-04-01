import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useEffect } from "react";
import { FieldProps } from "@/types/global-users";
import { Input } from "@/components/ui/input";

const NameField = ({ form, teacher, userNameCredential }: FieldProps) => {
  useEffect(() => {
    form.setValue("name", teacher?.name || "");
  }, [teacher, form]);

  const camelizeUser = (string: string) => {
    return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  return (
    <div>
      <FormField
        control={form.control}
        name="name"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel>Nombre del maestro</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre del maestro"
                  id="name"
                  {...field}
                  onChange={(event) => {
                    userNameCredential!(camelizeUser(event.target.value));
                    form.setValue("name", event.target.value);
                  }}
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
