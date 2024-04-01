import { userCredentialsSchema } from "@/lib/models/user";
import connectToDataBase from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;

  try {
    const db = await connectToDataBase();

    const data = await db
      ?.collection("users")
      .findOne({ _id: new ObjectId(id) });

    const safelyPassword = userCredentialsSchema.omit({ password: true });

    const validationResult = safelyPassword.safeParse(data);

    if (!validationResult.success) {
      return NextResponse.json({
        error: "Invalid users data",
        details: validationResult.error,
      });
    }

    return NextResponse.json({
      users: JSON.parse(JSON.stringify(validationResult.data)),
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;

  const validationResult = userCredentialsSchema.safeParse(
    await request.json()
  );

  if (!validationResult.success) {
    return NextResponse.json(validationResult.error.format(), {
      status: 400,
    });
  }

  const db = await connectToDataBase();

  db?.collection("users").findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        validationResult,
      },
    }
  );

  try {
    db?.collection("users").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validationResult.data }
    );
    return NextResponse.json({ message: "Fields updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
