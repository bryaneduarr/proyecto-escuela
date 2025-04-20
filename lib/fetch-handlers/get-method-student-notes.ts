import { useEffect, useState } from "react";

const GetMethodStudentNotes = (userString: string) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(`[GetMethodStudentNotes] Fetching: /api/${userString}s`);
        const response = await fetch(`/api/${userString}s`);
        console.log(`[GetMethodStudentNotes] Status:`, response.status);

        if (!response.ok) {
          console.error(
            `[GetMethodStudentNotes] Fetch error:`,
            response.statusText
          );
          setStudents([]);
          return;
        }

        const data = await response.json();
        console.log(`[GetMethodStudentNotes] Data:`, data);

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
