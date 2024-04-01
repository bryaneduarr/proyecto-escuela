import { columns } from "@/components/columns-table/columns-teacher-user";
import { useMemo } from "react";

/** Esta funcion lo que hace es utilizar el hook de useMemo para poder pasar el decodedClassSubject que 
 *  es un string manejable para uilitzarlo en las columnas de la tabla de las notas del estudiante.
 */

const StudentGradesPassDynamicColumns = ({
  decodedClassSubject,
  classSubject,
}: {
  decodedClassSubject: string;
  classSubject: string;
}) => {
  const dynamicColumns = useMemo(() => {
    return columns(
      classSubject
        .replace(/\d+/g, "")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
      decodedClassSubject
    );
  }, [classSubject, decodedClassSubject]);

  return { dynamicColumns };
};

export default StudentGradesPassDynamicColumns;
