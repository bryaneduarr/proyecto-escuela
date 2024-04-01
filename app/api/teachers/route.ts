import { NextRequest, NextResponse } from "next/server";
import { teachersSchema } from "@/lib/models/teachers";
import { ObjectId } from "mongodb";
import connectToDataBase from "@/lib/mongodb";

/** Con esta funcion GET lo que hacemos es buscar en la tabla correspondiente y traer todos los datos */

export async function GET() {
  const db = await connectToDataBase();
  try {
    const data = await db?.collection("teachers").find().toArray();

    return NextResponse.json({
      teachers: JSON.parse(JSON.stringify(data)),
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

/** Para esta funcion POST verificamos si lo que pasamos coincide con el esquema si es asi entonces
 *  podemos poner en nuestra base de datos toda la informacion.
 */

export async function POST(request: NextRequest) {
  const validationTeachersSchema = teachersSchema.safeParse(
    await request.json()
  );

  if (!validationTeachersSchema.success) {
    return NextResponse.json(validationTeachersSchema.error.format(), {
      status: 400,
    });
  }

  const db = await connectToDataBase();

  try {
    db?.collection("teachers").insertOne(validationTeachersSchema.data);
    return NextResponse.json({ message: "Data sent succesfully", status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
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
    await db?.collection("teachers").findOneAndDelete({ _id: objectId?._id });

    return NextResponse.json(
      {
        message: "Teacher deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}