import { NextRequest, NextResponse } from "next/server";
import { Teacher } from "@/types/teachers";
import { Option } from "@/types/global-users";
import connectToDataBase from "@/lib/mongodb";

/** Con la funcion GET para las notas de los alumnos y verificar que clases tiene asignadas el maestro, 
 *  para esto nos conectamos a la base de datos y solicitamos dos parametros el userRef que sera el usuario
 *  del maestro y la clase que quiere verificar. Buscamos en la tabla de maestros si existe tal usuario, sino
 *  entonces lo mandamos para /login que ejecutara toda la funcion del middleware. Si es verdadero entonces buscamos 
 *  el grado asignado y las clases que el maestro tiene para verificar con el parametro que tenemos en la URL. Por ultimo
 *  en la tabla de estudiantes nosotros buscamos que clase es igual a la clase del parametro y la del maestro y traemos 
 *  solo las notas para esa clase y asi poder visualizarlo.
*/

export async function GET(request: NextRequest) {
  try {
    const db = await connectToDataBase();

    const querySessionParameter = request.nextUrl.searchParams.get("userRef");

    const querySubjectParameter =
      request.nextUrl.searchParams.get("subjectClasses");

    const querySubject = querySubjectParameter?.split(",");

    const teacherData = (await db
      ?.collection("teachers")
      .findOne({ userRef: querySessionParameter })) as Teacher;

    if (!teacherData) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/login`
      );
    }

    const { assignedGrade, assignClass } = teacherData;

    const assignedClassesToTeacher = assignClass.map(
      (item: Option) => item.label
    );

    const studentGrade = await db
      ?.collection("students")
      .aggregate([
        { $match: { grade: assignedGrade } },
        {
          $project: {
            _id: 1,
            name: 1,
            studentGrades: {
              $arrayToObject: {
                $filter: {
                  input: { $objectToArray: "$studentGrades" },
                  as: "grade",
                  cond: { $in: ["$$grade.k", querySubject] },
                },
              },
            },
          },
        },
      ])
      .toArray();

    return NextResponse.json(
      {
        assignedGrade,
        assignedClassesToTeacher,
        studentsOnGrade: studentGrade,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Couldn't get data" }, { status: 400 });
  }
}
