import { useEffect, useState } from "react";

const GetMethodStudentNotes = (userString: string) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}s`
        );

        const data = await response.json();

        setStudents(await data.students);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [userString]);

  return students;
};

export default GetMethodStudentNotes;
