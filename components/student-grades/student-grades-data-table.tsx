import { DataTable } from "@/components/data-table/data-table";
import { UserTeacher } from "@/types/users";
import { ColumnDef } from "@tanstack/react-table";

const StudentGradesDataTable = ({
  userTeacherData,
  dynamicColumns,
}: {
  userTeacherData: UserTeacher | undefined;
  dynamicColumns: ColumnDef<any>[];
}) => {
  return (
    <div className="mt-6">
      {userTeacherData && (
        <DataTable
          columns={dynamicColumns}
          data={userTeacherData.studentsOnGrade ?? []}
          searchString="estudiante"
        />
      )}
    </div>
  );
};

export default StudentGradesDataTable;
