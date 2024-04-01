import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/login/auth-options";
import { redirect } from "next/navigation";
import LoginComponent from "@/components/form-fields/login/login-component";

/** La pagina del login solo contiene el formulario de usuario y contraseña, pero tambien le decimos que 
 *  dependiendo el usuario que este logueado siempre llevarlo a /admin, y con la ayuda del middleware podemos
 *  decirle que nos lleve a /teacher o /admin, dependiendo del rol.
 */

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/admin");
  }

  return <LoginComponent />;
};

export default LoginPage;
