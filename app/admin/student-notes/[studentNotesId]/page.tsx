"use client";

import { useEffect, useState } from "react";
import { CellContextId } from "@/types/table-data";
import { Student } from "@/types/students";
import { Button } from "@/components/ui/button";
import StudentGradesSubjectGradesComponent from "@/components/student-grades/student-grades-subject-card-grades/student-grades-subject-grades-component";
import GetMethodStudentNotesById from "@/lib/fetch-handlers/get-method-student-notes-by-id";
import Link from "next/link";

const StudentNotes = ({ params }: CellContextId<Student>) => {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    GetMethodStudentNotesById(params.studentNotesId, "student-note").then(
      (students) => setStudent(students)
    );
  }, [params.studentNotesId]);

  return (
    <div>
      <div className="flex justify-between items-center gap-6 mt-4 mb-6">
        <Link href="/admin/student-notes">
          <Button>Regresar</Button>
        </Link>
        <span>{student?.name}</span>
        <span>{student?.grade}</span>
      </div>
      <StudentGradesSubjectGradesComponent student={student} />
    </div>
  );
};

export default StudentNotes;
