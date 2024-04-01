import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UserCredentials } from "@/lib/models/user";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

const LoginPassword = ({ form }: { form: UseFormReturn<UserCredentials> }) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="password"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  id="password"
                  placeholder="Password"
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

export default LoginPassword;
