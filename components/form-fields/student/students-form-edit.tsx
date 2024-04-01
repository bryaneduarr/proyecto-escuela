import { OriginalStudentSchema, StudentSchema } from "@/lib/models/students";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Student } from "@/types/students";
import { Form } from "@/components/ui/form";
import SubmitFormButton from "@/components/form-fields/submit-button-form";
import DirectionField from "@/components/form-fields/student/direction-field";
import ParentField from "@/components/form-fields/student/parent-field";
import GenderField from "@/components/form-fields/student/gender-field";
import GradeField from "@/components/form-fields/student/grade-field";
import NameField from "@/components/form-fields/student/name-field";
import AgeField from "@/components/form-fields/student/age-field";

const StudentsFormEdit = ({
  responseStatus,
  onSubmit,
  student,
  form,
}: {
  onSubmit: (values: StudentSchema) => Promise<void>;
  form: UseFormReturn<OriginalStudentSchema>;
  responseStatus: boolean | undefined;
  student: Student | null;
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
          <NameField form={form} student={student} />
          <AgeField form={form} student={student} />
          <GradeField form={form} student={student} />
          <GenderField form={form} student={student} />
          <DirectionField form={form} student={student} />
          <ParentField form={form} student={student} />
          <SubmitFormButton
            responseStatus={responseStatus}
            useString="estudiante"
            messageStatus="actualizado"
          />
        </form>
      </Form>
    </div>
  );
};

export default StudentsFormEdit;
