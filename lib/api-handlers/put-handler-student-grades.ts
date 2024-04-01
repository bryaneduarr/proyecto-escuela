import { StudentGradesSchema } from "../models/students";
import { ObjectId } from "mongodb";

export const putApiHandlerStudentGrades = async <T>({
  setResponseStatus,
  subjectClass,
  userString,
  values,
  _id,
}: {
  setResponseStatus: (status: boolean) => void;
  subjectClass: string | null;
  values: StudentGradesSchema;
  _id: string | ObjectId;
  userString: string;
}) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}/${_id}?subjectClass=${subjectClass}`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(values),
    }
  )
    .then((response) => {
      response.json();
      setResponseStatus(true);
    })
    .catch((error) => {
      console.error(error);
      setResponseStatus(false);
    });
};
