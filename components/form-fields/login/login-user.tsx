import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UserCredentials } from "@/lib/models/user";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

const LoginUser = ({ form }: { form: UseFormReturn<UserCredentials> }) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="user"
        defaultValue=""
        render={({ field }) => (
          <div>
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input id="user" placeholder="User" type="user" {...field} />
              </FormControl>
            </FormItem>
          </div>
        )}
      />
    </div>
  );
};

export default LoginUser;
