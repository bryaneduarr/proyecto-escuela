import { NextRequest, NextResponse } from "next/server";
import { teachersSchema } from "@/lib/models/teachers";
import { ObjectId } from "mongodb";
import connectToDataBase from "@/lib/mongodb";

/** Con esta funcion PUT para los maestros lo que hacemos es poner la informacion de los maestros
 *  y la validamos usando el esquema de "Zod" para verificar que todo este correcto en la base de datos.
 */

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;

  const validationTeacherSchema = teachersSchema.safeParse(
    await request.json()
  );

  if (!validationTeacherSchema.success) {
    return NextResponse.json(validationTeacherSchema.error.format(), {
      status: 400,
    });
  }

  const db = await connectToDataBase();

  db?.collection("teachers").findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        validationTeacherSchema,
      },
    }
  );

  try {
    db?.collection("teachers").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validationTeacherSchema.data }
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
  const { id } = params;

  const db = await connectToDataBase();

  const data = await db
    ?.collection("teachers")
    .findOne({ _id: new ObjectId(id) });

  try {
    const validationResult = teachersSchema.safeParse(data);

    if (!validationResult.success) {
      return NextResponse.json({
        error: "Invalid teacher data",
        details: validationResult.error,
      });
    }

    return NextResponse.json({
      teachers: JSON.parse(JSON.stringify(validationResult.data)),
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
