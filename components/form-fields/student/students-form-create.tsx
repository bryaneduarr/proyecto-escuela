import { OriginalStudentSchema, StudentSchema } from "@/lib/models/students";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import SubmitFormButton from "@/components/form-fields/submit-button-form";
import DirectionField from "@/components/form-fields/student/direction-field";
import ParentField from "@/components/form-fields/student/parent-field";
import GenderField from "@/components/form-fields/student/gender-field";
import GradeField from "@/components/form-fields/student/grade-field";
import NameField from "@/components/form-fields/student/name-field";
import AgeField from "@/components/form-fields/student/age-field";

const StudentsFormCreate = ({
  responseStatus,
  onSubmit,
  form,
}: {
  onSubmit: (values: StudentSchema) => Promise<void>;
  form: UseFormReturn<OriginalStudentSchema>;
  responseStatus: boolean | undefined;
}) => {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            onSubmit as SubmitHandler<OriginalStudentSchema>
          )}
          className="space-y-8"
        >
          <div className="mt-10 flex flex-col gap-6">
            <NameField form={form} />
            <AgeField form={form} />
            <GradeField form={form} />
            <GenderField form={form} />
            <DirectionField form={form} />
            <ParentField form={form} />
          </div>
          <SubmitFormButton
            responseStatus={responseStatus}
            useString="estudiante"
            messageStatus="creado"
          />
        </form>
      </Form>
    </div>
  );
};

export default StudentsFormCreate;
