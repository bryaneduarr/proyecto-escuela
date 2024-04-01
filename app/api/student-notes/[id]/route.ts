import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectToDataBase from "@/lib/mongodb";

/** La funcion GET por medio del ID para traer todas las notas nos pide como parametro el ID
 *  del estudiante para traer las notas correspondientes del estudiante y traer el nombre, grado
 *  notas y ID.
 */

export async function GET(request: NextRequest, { params }: any) {
  try {
    const { id } = params;

    const db = await connectToDataBase();

    const data = await db?.collection("students").findOne(
      { _id: new ObjectId(id) },
      {
        projection: {
          _id: 1,
          name: 1,
          grade: 1,
          studentGrades: 1,
        },
      }
    );

    return NextResponse.json({
      students: JSON.parse(JSON.stringify(data)),
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
