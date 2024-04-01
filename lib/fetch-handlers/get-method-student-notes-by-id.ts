import { ObjectId } from "mongodb";

const GetMethodStudentNotesById = async (_id: ObjectId, userString: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}s/${_id}`,
      { cache: "no-store" }
    );

    const data = await response.json();

    return await data.students;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export default GetMethodStudentNotesById;
