import { useEffect, useState } from "react";
import { UserTeacher } from "@/types/users";

interface UserTeacherDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classSubjects?: any;
}

export const GetUserTeacherData = ({
  session,
  classSubjects = [],
}: UserTeacherDataProps) => {
  const [userTeacherData, setUserTeacherData] = useState<UserTeacher>();

  const subjects = classSubjects!.map(encodeURIComponent).join(",") || "";

  useEffect(() => {
    const fetchUserTeacherData = async () => {
      if (session?.user.user) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/student-grades?userRef=${
              session!.user.user
            }&subjectClasses=${subjects}`,
          );

          const data = await response.json();

          return setUserTeacherData(await data);
        } catch (error) {
          console.log(`Error on fetching data. ${error}`);
        }
      }
    };
    fetchUserTeacherData();
  }, [session, subjects]);

  return userTeacherData;
};
