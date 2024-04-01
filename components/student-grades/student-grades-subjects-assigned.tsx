import { UserTeacher } from "@/types/users";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const StudentGradesSubjectsAssigned = ({
  userTeacherData,
}: {
  userTeacherData: UserTeacher | undefined;
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {userTeacherData?.assignedClassesToTeacher!.map((item: string, index) => {
        const teacherClassName = item;

        return (
          <div key={index} className="w-64 h-48 m-6">
            <Link
              href={`/teacher/${teacherClassName
                .replace(/(?<!^)([A-Z])/g, "-$1")
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <Button
                variant="ghost"
                className="flex items-center justify-center w-full h-full border"
              >
                <span>{item.replace(/([A-Z])/g, " $1").trim()}</span>
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StudentGradesSubjectsAssigned;
