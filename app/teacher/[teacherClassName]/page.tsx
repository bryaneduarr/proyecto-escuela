"use client";

import { CellContextId } from "@/types/table-data";
import { UserTeacher } from "@/types/users";
import { useState } from "react";
import StudentGradesSubjectsTable from "@/components/student-grades/student-grades-subjects-table";
import StudentGradesSubjectAndData from "@/lib/student-grades/student-grades-decoded-subject-and-data";

/** Esta pagina es para visualizar la tabla de las notas del estudiante aqui solo usamos el estado de
 *  classSubject para decir que clase vamos a estar utilizando y asi la tabla pueda saber que notas 
 *  dependiendo la clase renderizar
 */

const EditStudentNotes = ({ params }: CellContextId<UserTeacher>) => {
  const [classSubject, setClassSubject] = useState<string>("");

  const { decodedClassSubject, userTeacherData } = StudentGradesSubjectAndData({
    params,
  });

  return (
    <div>
      <StudentGradesSubjectsTable
        decodedClassSubject={decodedClassSubject}
        setClassSubject={setClassSubject}
        userTeacherData={userTeacherData}
        classSubject={classSubject}
        params={params}
      />
    </div>
  );
};

export default EditStudentNotes;
