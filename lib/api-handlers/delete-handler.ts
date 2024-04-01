import { ObjectId } from "mongodb";

export const DeleteApiHanlder = ({
  _id,
  userString,
}: {
  _id: string | ObjectId;
  userString: string;
}) => {
  const removeUser = async () => {
    const confirmation = confirm(`Esta seguro que quiere eliminar este ${userString}?`);
    if (confirmation) {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${userString}s?_id=${_id}`,
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }
      )
        .then((response) => {
          response.json();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return removeUser;
};
