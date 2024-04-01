import { putApiHandler } from "@/lib/api-handlers/put-handler";
import { CellContextId } from "@/types/table-data";
import { UserLogin } from "@/types/users";
import bcrypt from "bcryptjs";

/** Esta funcion simplemente lo que hace usar la funcion putApiHandler para poner y encriptar la contraseña
 *  a la hora de usar el formulario de usuarios.
 */

const UsersPutApiOnSubmit = async ({
  setResponseStatus,
  values,
  params,
  user,
}: {
  setResponseStatus: (status: boolean) => void;
  params: CellContextId<UserLogin>;
  values: UserLogin;
  user: UserLogin | null;
}) => {
  const hashedPassword = await bcrypt.hash(values.password, 10);
  values = {
    user: user ? user?.user : "",
    password: hashedPassword,
    role: "user",
  };

  putApiHandler({
    setResponseStatus,
    userString: "user",
    values,
    _id: params.userId,
  });
};

export default UsersPutApiOnSubmit;
