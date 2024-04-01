import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { UserCredentials } from "@/lib/models/user";
import { Form, FormLabel } from "@/components/ui/form";
import { UserLogin } from "@/types/users";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import UsersPasswordField from "./users-password-field";
import SubmitFormButton from "@/components/form-fields/submit-button-form";

const UsersForm = ({
  responseStatus,
  onSubmit,
  user,
  form,
}: {
  onSubmit: (values: UserLogin) => Promise<void>;
  responseStatus: boolean | undefined;
  form: UseFormReturn<UserCredentials>;
  user: UserLogin | null;
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as SubmitHandler<UserCredentials>)}
        className="space-y-8"
      >
        <div>
          <Label>Usuario asignado</Label>
          <Input defaultValue={user?.user} disabled />
        </div>
        <UsersPasswordField form={form} />
        <div>
          <FormLabel>Rol del usuario</FormLabel>
          <Input defaultValue={user?.role} disabled />
        </div>
        <SubmitFormButton
          responseStatus={responseStatus}
          useString="usuario"
          messageStatus="actualizado"
        />
      </form>
    </Form>
  );
};

export default UsersForm;
