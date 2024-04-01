import { useState } from "react";
import { Student } from "@/types/students";
import StudentGradesSubjectCardGrades from "./student-grades-select-subject-grades";
import StudentGradesSubjectCardSubjectGrades from "../student-grades-subject-card-subject-grades";

const StudentGradesSubjectGradesComponent = ({
  student,
}: {
  student: Student | null;
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  return (
    <div className=" flex flex-col gap-6">
      <StudentGradesSubjectCardGrades
        setSelectedSubject={setSelectedSubject}
        selectedSubject={selectedSubject}
        student={student}
      />
      <StudentGradesSubjectCardSubjectGrades
        selectedSubject={selectedSubject}
        student={student}
      />
    </div>
  );
};

export default StudentGradesSubjectGradesComponent;
