import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { UserCredentials } from "@/lib/models/user";
import { UseFormReturn } from "react-hook-form";
import { UserLogin } from "@/types/users";
import LoginForm from "@/components/form-fields/login/login-form";

const LoginCardContainer = ({
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
    <Card className=" w-[500px]">
      <CardHeader>
        <CardTitle className="text-3xl mb-2">Login</CardTitle>
        <CardDescription>
          Enter your credentials below to login.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm
          form={form}
          onSubmit={onSubmit}
          error={error}
          spinnerStatus={spinnerStatus}
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default LoginCardContainer;
