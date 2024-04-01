"use client";

import { TeachersSchema, teachersSchema } from "@/lib/models/teachers";
import { FormResolver } from "@/lib/form-resolver";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import TeachersPostApiOnSubmit from "@/lib/teachers/teachers-post-api-on-submit";
import TeacherFormCreate from "@/components/form-fields/teacher/teacher-form-create";
import Link from "next/link";

const CreateTeacherForm = () => {
  const [responseStatus, setResponseStatus] = useState<boolean>();
  const [userNameField, setUserNameField] = useState<string>("");
  const [gradeValue, setGradeValue] = useState<string>("");

  const handleUserNameCredential = (value: string) => setUserNameField(value);

  const handleGradeChange = (gradeValue: string) => setGradeValue(gradeValue);

  const form = FormResolver<TeachersSchema>(teachersSchema);

  const onSubmit = async (values: TeachersSchema) => {
    TeachersPostApiOnSubmit({ setResponseStatus, userNameField, values });
  };

  return (
    <div>
      <div className="flex flex-col mt-4 mb-6">
        <Link href="/admin/teachers">
          <Button>Return</Button>
        </Link>
      </div>
      <TeacherFormCreate
        handleUserNameCredential={handleUserNameCredential}
        handleGradeChange={handleGradeChange}
        responseStatus={responseStatus}
        gradeValue={gradeValue}
        onSubmit={onSubmit}
        form={form}
      />
    </div>
  );
};

export default CreateTeacherForm;
