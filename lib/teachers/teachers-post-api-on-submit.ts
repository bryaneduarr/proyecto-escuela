import { postApiHandler } from "@/lib/api-handlers/post-handler";
import { UserLogin } from "@/types/users";
import { TeachersSchema } from "../models/teachers";

/** Esta funcion lo que hace es postear toda la informacion de los maestros
 *  primeramente lo que se hace es generar un numero aleatorio de 4 digitos para luego
 *  darselo al usuario generado, y asi poder postearlos en el postApiHandler
 */

const TeachersPostApiOnSubmit = async ({
  setResponseStatus,
  userNameField,
  values,
}: {
  setResponseStatus: (status: boolean | undefined) => void;
  values: TeachersSchema;
  userNameField: string;
}) => {
  const random4DigitsNumber = Math.round(1000 + Math.random() * (9999 - 1000));

  const generatedUser = userNameField + random4DigitsNumber;

  const submitCredentialField = async (values: UserLogin) => {
    values = {
      user: userNameField + random4DigitsNumber,
      password: "",
      role: "user",
    };
    postApiHandler({ setResponseStatus, userString: "user", values });
  };

  await submitCredentialField({
    user: generatedUser,
    password: "",
    role: "user",
  });

  const updatedValues = {
    ...values,
    userRef: generatedUser,
  };

  await postApiHandler({
    setResponseStatus,
    userString: "teacher",
    values: updatedValues,
  });
};

export default TeachersPostApiOnSubmit;
