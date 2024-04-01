import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UserCredentials } from "@/lib/models/user";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

const UsersPasswordField = ({
  form,
}: {
  form: UseFormReturn<UserCredentials>;
}) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="password"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel>Escriba una contrase&#241;a para el usuario</FormLabel>
              <FormControl>
                <Input
                  placeholder="contraseña para el usuario"
                  type="password"
                  autoComplete="username"
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

export default UsersPasswordField;
