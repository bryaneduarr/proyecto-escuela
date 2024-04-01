"use client";

import { TeachersSchema, teachersSchema } from "@/lib/models/teachers";
import { useEffect, useState } from "react";
import { putApiHandler } from "@/lib/api-handlers/put-handler";
import { CellContextId } from "@/types/table-data";
import { FormResolver } from "@/lib/form-resolver";
import { Teacher } from "@/types/teachers";
import { Button } from "@/components/ui/button";
import TeacherFormEdit from "@/components/form-fields/teacher/teacher-form-edit";
import GetMethodById from "@/lib/fetch-handlers/get-method-by-id";
import Link from "next/link";

const EditTeacher = ({ params }: CellContextId<Teacher>) => {
  const [responseStatus, setResponseStatus] = useState<boolean>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [gradeValue, setGradeValue] = useState<string>("");

  const handleGradeChange = (gradeValue: string) => setGradeValue(gradeValue);

  const form = FormResolver<TeachersSchema>(teachersSchema);

  useEffect(() => {
    GetMethodById(params.teacherId, "teacher").then((teacher) =>
      setTeacher(teacher)
    );
  }, [params.teacherId]);

  const onSubmit = async (values: TeachersSchema) =>
    putApiHandler({
      setResponseStatus,
      userString: "teacher",
      values,
      _id: params.teacherId,
    });

  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-6 gap-6">
        <Link href="/admin/teachers">
          <Button>Return</Button>
        </Link>
        <span>{teacher?.name}</span>
      </div>
      <TeacherFormEdit
        handleGradeChange={handleGradeChange}
        responseStatus={responseStatus}
        gradeValue={gradeValue}
        onSubmit={onSubmit}
        teacher={teacher}
        params={params}
        form={form}
      />
    </div>
  );
};

export default EditTeacher;
