import { useEffect, useState } from "react";

const GetMethod = (userString: string) => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}s`
        );

        const data = await response.json();

        setUsers(await data[userString + "s"]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [userString]);

  return user;
};

export default GetMethod;
