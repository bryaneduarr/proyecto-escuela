import { CellContextId } from "@/types/table-data";
import { UserTeacher } from "@/types/users";
import { useEffect } from "react";

/** Esta funcion lo que hace es agarrar un useEffect esto para comparar y setear el valor de setClassSubject, esto
 *  para poder utilizar luego el classSubject
 */
const StudentGradesDefineClassSubject = ({
  setClassSubject,
  userTeacherData,
  params,
}: {
  setClassSubject: (subject: string) => void;
  userTeacherData: UserTeacher | undefined;
  params: CellContextId<UserTeacher>;
}) => {
  useEffect(() => {
    userTeacherData?.assignedClassesToTeacher!.forEach((item: string) => {
      if (
        item.split(" ").join("").toLowerCase() ===
        params.teacherClassName
          .split("-")
          .map(
            (word: string) => word.charAt(0).toLocaleLowerCase() + word.slice(1)
          )
          .join("")
      ) {
        setClassSubject(item);
      }
    });
  }, [
    userTeacherData?.assignedClassesToTeacher,
    params.teacherClassName,
    setClassSubject,
  ]);
};

export default StudentGradesDefineClassSubject;
