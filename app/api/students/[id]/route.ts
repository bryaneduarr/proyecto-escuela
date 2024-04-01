import { NextRequest, NextResponse } from "next/server";
import { newStudentValuesSchema } from "@/lib/models/students";
import { ObjectId } from "mongodb";
import { Student } from "@/types/students";
import { ApiPut } from "@/types/api-handlers";
import connectToDataBase from "@/lib/mongodb";

/** Con esta funcion PUT para los estudiantes lo que hacemos es poner la informacion de los estudiantes
 *  y la validamos usando el esquema de "Zod" para verificar que todo este correcto en la base de datos.
 */

export async function PUT(request: NextRequest, { params }: ApiPut<Student>) {
  const { id } = params;

  const validationStudentSchema = newStudentValuesSchema.safeParse(
    await request.json()
  );

  if (!validationStudentSchema.success) {
    return NextResponse.json(validationStudentSchema.error.format(), {
      status: 400,
    });
  }

  const db = await connectToDataBase();

  try {
    db?.collection("students").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validationStudentSchema.data }
    );
    return NextResponse.json({ message: "Fields updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

/** Con la funcion get buscamos como parametro el ID y dependiendo de eso traemos toda la informacion de
 *  la base de datos del alumno que tenga el mismo ID.
 */

export async function GET(request: NextRequest, { params }: any) {
  try {
    const { id } = params;

    const db = await connectToDataBase();

    const data = await db
      ?.collection("students")
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json({
      students: JSON.parse(JSON.stringify(data)),
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
