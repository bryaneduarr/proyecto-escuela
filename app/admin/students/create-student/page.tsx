"use client";

import {
  OriginalStudentSchema,
  StudentSchema,
  studentSchema,
} from "@/lib/models/students";
import { newSchemaValuesForStudent } from "@/lib/students/new-schema-values-for-students";
import { postApiHandler } from "@/lib/api-handlers/post-handler";
import { FormResolver } from "@/lib/form-resolver";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StudentsFormCreate from "@/components/form-fields/student/students-form-create";
import Link from "next/link";

const CreateStudentsForm = () => {
  const [responseStatus, setResponseStatus] = useState<boolean | undefined>(
    undefined
  );

  const form = FormResolver<OriginalStudentSchema>(studentSchema);

  const onSubmit = async (values: StudentSchema) => {
    postApiHandler({
      setResponseStatus,
      ageCalculation: newSchemaValuesForStudent,
      userString: "student",
      values,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <Link href="/admin/students">
          <Button className=" text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
            Regresar
          </Button>
        </Link>
      </div>
      <StudentsFormCreate
        responseStatus={responseStatus}
        onSubmit={onSubmit}
        form={form}
      />
    </div>
  );
};

export default CreateStudentsForm;
