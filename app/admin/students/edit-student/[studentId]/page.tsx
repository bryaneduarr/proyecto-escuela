"use client";

import {
  OriginalStudentSchema,
  StudentSchema,
  studentSchema,
} from "@/lib/models/students";
import { newSchemaValuesForStudent } from "@/lib/students/new-schema-values-for-students";
import { useEffect, useState } from "react";
import { CellContextId } from "@/types/table-data";
import { putApiHandler } from "@/lib/api-handlers/put-handler";
import { FormResolver } from "@/lib/form-resolver";
import { Student } from "@/types/students";
import { Button } from "@/components/ui/button";
import StudentsFormEdit from "@/components/form-fields/student/students-form-edit";
import GetMethodById from "@/lib/fetch-handlers/get-method-by-id";
import Link from "next/link";

const EditStudent = ({ params }: CellContextId<Student>) => {
  const [responseStatus, setResponseStatus] = useState<boolean>();
  const [student, setStudent] = useState<Student | null>(null);

  const form = FormResolver<OriginalStudentSchema>(studentSchema);

  useEffect(() => {
    GetMethodById(params.studentId, "student").then((students) =>
      setStudent(students)
    );
  }, [params.studentId]);

  const onSubmit = async (values: StudentSchema) => {
    const apiStudentGrades = student?.studentGrades;

    putApiHandler({
      setResponseStatus,
      ageCalculation: (values) =>
        newSchemaValuesForStudent(values, apiStudentGrades),
      userString: "student",
      values,
      _id: params.studentId,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-6 mt-4 mb-6">
        <Link href="/admin/students">
          <Button>Return</Button>
        </Link>
        <span className="text-lg">{student?.name}</span>
      </div>
      <StudentsFormEdit
        responseStatus={responseStatus}
        onSubmit={onSubmit}
        student={student}
        form={form}
      />
    </div>
  );
};

export default EditStudent;
