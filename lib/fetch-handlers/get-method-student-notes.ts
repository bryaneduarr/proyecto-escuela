import { useEffect, useState } from "react";

const GetMethodStudentNotes = (userString: string) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/${userString}s`);

        if (!response.ok) {
          console.error(
            `[GetMethodStudentNotes] Fetch error:`,
            response.statusText
          );
          setStudents([]);
          return;
        }

        const data = await response.json();

        setStudents(data.students || []);
      } catch (error) {
        console.error(`[GetMethodStudentNotes] Exception:`, error);
        setStudents([]);
      }
    }
    fetchData();
  }, [userString]);

  return students;
};

export default GetMethodStudentNotes;
