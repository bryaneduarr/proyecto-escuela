import { NextRequest, NextResponse } from "next/server";
import { newStudentValuesSchema } from "@/lib/models/students";
import { ObjectId } from "mongodb";
import connectToDataBase from "@/lib/mongodb";

/** Para esta funcion POST verificamos si lo que pasamos coincide con el esquema si es asi entonces
 *  podemos poner en nuestra base de datos toda la informacion.
 */

export async function POST(request: NextRequest) {
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
    db?.collection("students").insertOne(validationStudentSchema.data);
    return NextResponse.json({ message: "Data sent succesfully", status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

/** Con esta funcion GET lo que hacemos es buscar en la tabla correspondiente y traer todos los datos */

export async function GET() {
  const db = await connectToDataBase();
  try {
    const data = await db?.collection("students").find().toArray();

    return NextResponse.json({
      students: JSON.parse(JSON.stringify(data)),
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

/** Con esta funcion DELETE lo que hacemos es eliminar de la tabla un registro que hayamos hecho, esto con la ayuda del ID,
 *  le pasamos el ID como parametro para que sepa cual eliminar.
 */

export async function DELETE(request: NextRequest) {
  const db = await connectToDataBase();

  try {
    const id: string | null = request.nextUrl.searchParams.get("_id");
    const objectId: ObjectId | null = id ? new ObjectId(id) : null;
    await db?.collection("students").findOneAndDelete({ _id: objectId?._id });

    return NextResponse.json(
      {
        message: "Student deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
