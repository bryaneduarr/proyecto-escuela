"use client";

import { useEffect, useState } from "react";
import { StudentGradesSchema } from "@/lib/models/students";
import { UserStudentTeacher } from "@/types/users";
import { useSearchParams } from "next/navigation";
import { CellContextId } from "@/types/table-data";
import GetMethodByIdFromStudentGradesData from "@/lib/fetch-handlers/get-user-teacher-data-by-id";
import StudentGradesPutApiOnSubmit from "@/lib/student-grades/student-grades-put-api-on-submit";
import StudentGradesContainer from "@/components/form-fields/student-grades/student-grades-container";

/** En la pagina de editar las notas del estudiante, esto va a ser dependiendo el ID que tenga el estudiante
 *  Tambien va a debender que clase tenga en la URL como parametro asi se va a saber a que clase debemos de 
 *  modificar las notas, la funcion GetMethodByIdFromStudentGradesData se utiliza para traer la informacion
 *  necesaria dependiendo los casos anteriores. Por ultimo renderizamos la pagina con todos los componentes.
 */

const EditStudentGrade = ({ params }: CellContextId<UserStudentTeacher>) => {
  const [studentGradesData, setStudentGradesData] =
    useState<StudentGradesSchema>();
  const [responseStatus, setResponseStatus] = useState<boolean>();

  const searchParams = useSearchParams();

  const classSubject = searchParams.get("classSubject");

  useEffect(() => {
    GetMethodByIdFromStudentGradesData(
      params.editStudentGradeId,
      "student-grades",
      String(classSubject)
    ).then((studentGrades) => setStudentGradesData(studentGrades));
  }, [params.editStudentGradeId, classSubject]);

  const onSubmit = (values: StudentGradesSchema) => {
    StudentGradesPutApiOnSubmit({
      setResponseStatus,
      classSubject,
      params,
      values,
    });
  };

  return (
    <div className="flex flex-col">
      <StudentGradesContainer
        studentGradesData={studentGradesData}
        responseStatus={responseStatus}
        classSubject={classSubject}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EditStudentGrade;
