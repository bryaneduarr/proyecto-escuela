import { NextRequest, NextResponse } from "next/server";
import { userCredentialsSchema } from "@/lib/models/user";
import { UserLogin } from "@/types/users";
import { ObjectId } from "mongodb";
import connectToDataBase from "@/lib/mongodb";

/** Para esta funcion POST verificamos si lo que pasamos coincide con el esquema si es asi entonces
 *  podemos poner en nuestra base de datos toda la informacion.
 */

export async function POST(request: NextRequest) {
  const validationUsersCredentialsSchema = userCredentialsSchema.safeParse(
    await request.json()
  );

  if (!validationUsersCredentialsSchema.success) {
    return NextResponse.json(validationUsersCredentialsSchema.error.format(), {
      status: 400,
    });
  }

  const db = await connectToDataBase();

  try {
    db?.collection("users").insertOne(validationUsersCredentialsSchema.data);
    return NextResponse.json({ message: "Data sent succesfully", status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

/** Con esta funcion GET lo que hacemos es buscar en la tabla correspondiente y traer todos los datos */

export async function GET() {
  try {
    const db = await connectToDataBase();

    const data = await db!
      .collection("users")
      .find<UserLogin>({}, { projection: { password: 0 } })
      .toArray();

    return NextResponse.json({ users: JSON.parse(JSON.stringify(data)) });
  } catch (error) {
    return NextResponse.json({ error: "error" }, { status: 400 });
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
    await db?.collection("users").findOneAndDelete({ _id: objectId?._id });

    return NextResponse.json(
      {
        message: "User deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
