import { StudentGradesSchema } from "@/lib/models/students";
import { Form, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import StudentGradesInput from "./student-grades-input-container";
import SubmitFormButton from "../submit-button-form";

const StudentGradesForm = ({
  studentGradesData,
  responseStatus,
  classSubject,
  onSubmit,
  form,
}: {
  studentGradesData: StudentGradesSchema | undefined;
  onSubmit: (values: StudentGradesSchema) => void;
  form: UseFormReturn<StudentGradesSchema>;
  responseStatus: boolean | undefined;
  classSubject: string | null;
}) => {
  useEffect(() => {
    form.setValue("name", studentGradesData?.name || "");

    if (studentGradesData) {
      form.setValue("studentGrades", studentGradesData?.studentGrades);
    }
  }, [studentGradesData, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <FormLabel>Nombre del estudiante</FormLabel>
          <Input
            placeholder="Nombre del estudiante"
            defaultValue={studentGradesData?.name}
            disabled
          />
        </div>
        <StudentGradesInput
          studentGradesData={studentGradesData}
          classSubject={classSubject}
          form={form}
        />
        <SubmitFormButton
          responseStatus={responseStatus}
          useString="notas del estudiante"
          messageStatus="actualizadas"
        />
      </form>
    </Form>
  );
};

export default StudentGradesForm;
