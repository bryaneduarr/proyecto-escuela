import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { UserCredentials } from "@/lib/models/user";
import { UserLogin } from "@/types/users";
import { Form } from "@/components/ui/form";
import LoginPassword from "@/components/form-fields/login/login-password";
import LoginButton from "@/components/form-fields/login/login-button";
import LoginUser from "@/components/form-fields/login/login-user";

const LoginForm = ({
  spinnerStatus,
  onSubmit,
  error,
  form,
}: {
  onSubmit: (values: UserLogin) => Promise<void>;
  form: UseFormReturn<UserCredentials>;
  spinnerStatus: boolean;
  error: string;
}) => {
  return (
    <div className="space-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            onSubmit as SubmitHandler<UserCredentials>
          )}
          className="space-y-6"
        >
          <LoginUser form={form} />
          <LoginPassword form={form} />
          <LoginButton spinnerStatus={spinnerStatus} error={error} />
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
