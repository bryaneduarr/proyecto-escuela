import { putApiHandlerStudentGrades } from "@/lib/api-handlers/put-handler-student-grades";
import { StudentGradesSchema } from "../models/students";
import { UserStudentTeacher } from "@/types/users";
import { CellContextId } from "@/types/table-data";

/** Esta funcion simplemente pone los datos recogidos de las notas en el formulario para ponerlas en 
 *  la tabla de estudiantes al campo que contiene las notas del estudiante.
 */

const StudentGradesPutApiOnSubmit = ({
  setResponseStatus,
  classSubject,
  params,
  values,
}: {
  setResponseStatus: (status: boolean) => void;
  params: CellContextId<UserStudentTeacher>;
  values: StudentGradesSchema;
  classSubject: string | null;
}) => {
  const studentGradesValues = values.studentGrades as Record<
    string,
    Record<string, string>
  >;

  Object.keys(studentGradesValues).forEach((subject) => {
    const grades = studentGradesValues[subject] as Record<string, string>;

    Object.keys(grades).forEach((key) => {
      if (grades[key] === null || grades[key] === "") {
        grades[key] = "0";
      }
    });
  });

  putApiHandlerStudentGrades({
    userString: "student-grades",
    _id: params.editStudentGradeId,
    subjectClass: classSubject,
    setResponseStatus,
    values,
  });
};

export default StudentGradesPutApiOnSubmit;
