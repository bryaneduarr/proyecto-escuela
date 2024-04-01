import {
  StudentGradesSchema,
  studentsTeacherUserGrades,
} from "@/lib/models/students";
import { FormResolver } from "@/lib/form-resolver";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import StudentGradesForm from "@/components/form-fields/student-grades/student-grades-form";

const StudentGradesContainer = ({
  studentGradesData,
  responseStatus,
  classSubject,
  onSubmit,
}: {
  studentGradesData: StudentGradesSchema | undefined;
  onSubmit: (values: StudentGradesSchema) => void;
  responseStatus: boolean | undefined;
  classSubject: string | null;
}) => {
  const form = FormResolver<StudentGradesSchema>(studentsTeacherUserGrades);

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center mt-[0.85rem]">
        <Button onClick={() => router.back()} className="flex">
          Regresar
        </Button>
        <span>{String(classSubject?.split(/(?=[A-Z])/).join(" "))}</span>
        <span>{studentGradesData?.name}</span>
      </div>
      <div className="mt-6">
        <StudentGradesForm
          studentGradesData={studentGradesData}
          responseStatus={responseStatus}
          classSubject={classSubject}
          onSubmit={onSubmit}
          form={form}
        />
      </div>
    </>
  );
};

export default StudentGradesContainer;
