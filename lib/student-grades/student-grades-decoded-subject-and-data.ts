import { GetUserTeacherData } from "@/lib/fetch-handlers/get-user-teacher-data";
import { CellContextId } from "@/types/table-data";
import { UserTeacher } from "@/types/users";
import { useSession } from "next-auth/react";

/**
* Esta función trae datos del usuario del maestro que tenga relacionada la materia de la clase  del archivo.
* @param - La función `StudentGradesSubjectAndData` toma un parámetro `params` de tipo
* `CellContextId<UsuarioProfesor>`. Este parámetro se utiliza para extraer la propiedad `teacherClassName` de
* `params` y decodificarlo a un string manejable para obtener el `decodedClassSubject`. 
* @returns La función `StudentGradesSubjectAndData` devuelve un objeto con dos propiedades:
* `decodedClassSubject` y `userTeacherData`. La propiedad `decodedClassSubject` contiene la clase
*  nombre del sujeto después de alguna manipulación de cadenas, y la propiedad `userTeacherData` contiene datos
*  recuperado usando la función `GetUserTeacherData` con el asunto de la clase decodificado y los datos de la sesión.
 */
const StudentGradesSubjectAndData = ({
  params,
}: {
  params: CellContextId<UserTeacher>;
}) => {
  const { data: session }: any = useSession();

  const decodedClassSubject = params.teacherClassName
    .replace(/\d+/g, "")
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const userTeacherData = GetUserTeacherData({
    session: session,
    classSubjects: [decodedClassSubject],
  });

  return { decodedClassSubject, userTeacherData };
};

export default StudentGradesSubjectAndData;
