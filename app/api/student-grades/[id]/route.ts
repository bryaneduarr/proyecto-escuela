import { NextRequest, NextResponse } from "next/server";
import { studentsTeacherUserGrades } from "@/lib/models/students";
import { ObjectId } from "mongodb";
import { Student } from "@/types/students";
import { ApiPut } from "@/types/api-handlers";
import connectToDataBase from "@/lib/mongodb";

/** En la function GET para traer las notas del estudiante nos conectamos a la base de datos,
 *  y solicitamos el ID del estudiante para saber a quien buscar por el ID, cuando lo encontramos
 *  tambien le solicitamos la clase para saber que clases mostrar dependiendo que clase tiene el maestro
 *  para eso hacemos la validacion del aggregate que es una funcion de mongodb, todo esto para traer el
 *  nombre, ID, y las notas del alumno
 */

export async function GET(request: NextRequest, { params }: any) {
  try {
    const db = await connectToDataBase();

    const { id } = params;

    const querySubjectParameter =
      request.nextUrl.searchParams.get("subjectClass");

    const studentDataArray = await db
      ?.collection("students")
      .aggregate([
        { $match: { _id: new ObjectId(id) } },
        {
          $project: {
            _id: 1,
            name: 1,
            studentGrades: {
              $arrayToObject: {
                $filter: {
                  input: { $objectToArray: "$studentGrades" },
                  as: "grade",
                  cond: { $eq: ["$$grade.k", querySubjectParameter] },
                },
              },
            },
          },
        },
      ])
      .toArray();

    const studentData =
      studentDataArray?.length! > 0 ? studentDataArray![0] : {};

    return NextResponse.json(JSON.parse(JSON.stringify(studentData)));
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

/** Para la funcion PUT para poner las notas del alumno usamos el mismo metodo anterior del ID, luego de eso 
 *  verificamos gracias a los esquemas hechos por "Zod" si la informacion que vamos a pasar esta correcta para
 *  que la base de datos la reciba correctamente, una vez hecho eso nos metemos a cada nota y la actualizamos
 *  para luego actualizar los datos en los estudiantes.
 */

export async function PUT(request: NextRequest, { params }: ApiPut<Student>) {
  try {
    const db = await connectToDataBase();

    const { id } = params;

    const querySubjectParameter =
      request.nextUrl.searchParams.get("subjectClass");

    const validationStudentSchema = studentsTeacherUserGrades.safeParse(
      await request.json()
    );

    if (!validationStudentSchema.success) {
      return NextResponse.json(validationStudentSchema.error.format(), {
        status: 400,
      });
    }

    const updateObjectSubject = {
      [`studentGrades.${querySubjectParameter}`]: (
        validationStudentSchema.data.studentGrades as { [key: string]: any }
      )[String(querySubjectParameter)],
    };

    db?.collection("students").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateObjectSubject },
      { returnDocument: "after" }
    );

    return NextResponse.json({ message: "Fields updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
