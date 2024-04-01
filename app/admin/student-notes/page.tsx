"use client";

import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/columns-table/columns-student-notes";
import GetMethodStudentNotes from "@/lib/fetch-handlers/get-method-student-notes";

const StudentNotes = () => {
  const studentNotes = GetMethodStudentNotes("student-note");

  return (
    <div className="mt-6">
      <DataTable
        columns={columns}
        data={studentNotes}
        searchString="estudiante"
      />
    </div>
  );
};

export default StudentNotes;
