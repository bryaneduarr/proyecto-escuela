import { StudentGradesSchema } from "@/lib/models/students";
import { UseFormReturn } from "react-hook-form";
import StudentGradesInput from "@/components/form-fields/student-grades/student-grades-input";

const StudentGradesInputContainer = ({
  studentGradesData,
  classSubject,
  form,
}: {
  studentGradesData: StudentGradesSchema | undefined;
  form: UseFormReturn<StudentGradesSchema>;
  classSubject: string | null;
}) => {
  return (
    <div>
      {Object.entries(
        (() => {
          if (classSubject !== null && studentGradesData?.studentGrades) {
            return (
              (studentGradesData.studentGrades as { [key: string]: any })[
                String(classSubject)
              ] || {}
            );
          }
          return {};
        })()
      ).map(([partialKey], index) => (
        <div key={index} className="pt-4">
          <StudentGradesInput
            studentGradesData={studentGradesData}
            classSubject={classSubject}
            partialKey={partialKey}
            index={index}
            form={form}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentGradesInputContainer;
