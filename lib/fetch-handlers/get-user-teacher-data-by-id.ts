import { ObjectId } from "mongodb";

const GetMethodByIdFromStudentGradesData = async (
  _id: ObjectId,
  userString: string,
  classSubject: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}/${_id}?subjectClass=${classSubject}`,
      { cache: "no-store" }
    );

    const data = await response.json();

    return await data;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export default GetMethodByIdFromStudentGradesData;
