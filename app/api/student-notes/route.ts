import { NextResponse } from "next/server";
import connectToDataBase from "@/lib/mongodb";

/** La funcion GET de esta funcion simplemente trae el nombre del estudiante y cuales son las notas de el para mostrarlas todas */

export async function GET() {
  try {
    const db = await connectToDataBase();

    const studentData = await db
      ?.collection("students")
      .find({}, { projection: { name: 1, studentGrades: 1, _id: 1 } })
      .toArray();

    return NextResponse.json(
      {
        students: JSON.parse(JSON.stringify(studentData)),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Couldn't get data" }, { status: 400 });
  }
}
