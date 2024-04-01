import { CellContextId } from "@/types/table-data";
import { UserTeacher } from "@/types/users";
import { Button } from "@/components/ui/button";
import StudentGradesDefineClassSubject from "@/lib/student-grades/student-grades-define-class-subject";
import StudentGradesPassDynamicColumns from "@/lib/student-grades/student-grades-pass-dynamic-columns";
import StudentGradesDataTable from "./student-grades-data-table";
import Link from "next/link";

const StudentGradesSubjectsTable = ({
  decodedClassSubject,
  setClassSubject,
  userTeacherData,
  classSubject,
  params,
}: {
  setClassSubject: (subject: string) => void;
  userTeacherData: UserTeacher | undefined;
  params: CellContextId<UserTeacher>;
  decodedClassSubject: string;
  classSubject: string;
}) => {
  const { dynamicColumns } = StudentGradesPassDynamicColumns({
    decodedClassSubject,
    classSubject,
  });

  StudentGradesDefineClassSubject({ setClassSubject, userTeacherData, params });

  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <Link href="/teacher">
          <Button>Return</Button>
        </Link>
        <span>{classSubject.replace(/([A-Z])/g, " $1").trim()}</span>
        <span>{userTeacherData?.assignedGrade}</span>
      </div>
      <StudentGradesDataTable
        userTeacherData={userTeacherData}
        dynamicColumns={dynamicColumns}
      />
    </>
  );
};

export default StudentGradesSubjectsTable;
