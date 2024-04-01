import { TeachersSchema } from "@/lib/models/teachers";
import { UseFormReturn } from "react-hook-form";
import { CellContextId } from "@/types/table-data";
import { Teacher } from "@/types/teachers";
import { Form } from "@/components/ui/form";
import AssignedGradeField from "@/components/form-fields/teacher/assigned-grade-field";
import AssignClassField from "@/components/form-fields/teacher/assign-class-field";
import SubmitFormButton from "@/components/form-fields/submit-button-form";
import IdNumberField from "@/components/form-fields/teacher/id-number-field";
import NameField from "@/components/form-fields/teacher/name-field";

const TeacherFormEdit = ({
  handleGradeChange,
  responseStatus,
  gradeValue,
  onSubmit,
  teacher,
  params,
  form,
}: {
  onSubmit: (values: TeachersSchema) => Promise<void>;
  handleGradeChange: (gradeValue: string) => void;
  form: UseFormReturn<TeachersSchema>;
  responseStatus: boolean | undefined;
  params: CellContextId<Teacher>;
  teacher: Teacher | null;
  gradeValue: string;
}) => {
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <NameField form={form} teacher={teacher} />
          <IdNumberField form={form} teacher={teacher} />
          <AssignedGradeField
            form={form}
            gradeValueProp={handleGradeChange}
            teacher={teacher}
          />
          <AssignClassField
            form={form}
            gradeValue={gradeValue}
            teacher={teacher}
            storedGrade={teacher?.assignedGrade}
            currentTeacher={params.teacherId}
          />
          <SubmitFormButton
            responseStatus={responseStatus}
            useString="maestro"
            messageStatus="actualizado"
          />
        </form>
      </Form>
    </div>
  );
};

export default TeacherFormEdit;
