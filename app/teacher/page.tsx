"use client";

import { GetUserTeacherData } from "@/lib/fetch-handlers/get-user-teacher-data";
import { useSession } from "next-auth/react";
import StudentGradesSubjectsAssigned from "@/components/student-grades/student-grades-subjects-assigned";

/** La pagina de teacher sirve para los maestros que ingresan con su usuario aqui primeramente traemos la funcion para
 *  traer los datos necesarios desde la api, aqui le pasamos la session que significa que usuario esta registrado
 *  actualmente esto para asi decirle a la pai que traiga la informacion solo del maestro que este registrado.
 */

const TeacherHome = () => {
  const { data: session }: any = useSession();

  const userTeacherData = GetUserTeacherData({
    session: session,
    classSubjects: [],
  });

  return (
    <div>
      <div className="flex justify-between items-center gap-6 mt-4 mb-6">
        <span>
          Numero de estudiantes: {userTeacherData?.studentsOnGrade!.length}
        </span>
        <span className="block">{userTeacherData?.assignedGrade}</span>
      </div>
      <StudentGradesSubjectsAssigned userTeacherData={userTeacherData} />
    </div>
  );
};

export default TeacherHome;
