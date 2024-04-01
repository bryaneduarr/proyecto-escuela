import { TeachersSchema } from "@/lib/models/teachers";
import { UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import AssignedGradeField from "@/components/form-fields/teacher/assigned-grade-field";
import AssignClassField from "@/components/form-fields/teacher/assign-class-field";
import SubmitFormButton from "@/components/form-fields/submit-button-form";
import IdNumberField from "@/components/form-fields/teacher/id-number-field";
import NameField from "@/components/form-fields/teacher/name-field";

const TeacherFormCreate = ({
  handleUserNameCredential,
  handleGradeChange,
  responseStatus,
  gradeValue,
  onSubmit,
  form,
}: {
  onSubmit: (values: TeachersSchema) => Promise<void>;
  handleUserNameCredential: (value: string) => void;
  handleGradeChange: (gradeValue: string) => void;
  responseStatus: boolean | undefined;
  form: UseFormReturn<TeachersSchema>;
  gradeValue: string;
}) => {
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <NameField
            form={form}
            userNameCredential={handleUserNameCredential}
          />
          <IdNumberField form={form} />
          <AssignedGradeField form={form} gradeValueProp={handleGradeChange} />
          <AssignClassField form={form} gradeValue={gradeValue} />
          <SubmitFormButton
            responseStatus={responseStatus}
            useString="maestro"
            messageStatus="creado"
          />
        </form>
      </Form>
    </div>
  );
};

export default TeacherFormCreate;
