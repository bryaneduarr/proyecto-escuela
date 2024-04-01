import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserLogin } from "@/types/users";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

/** Esta funcion podriamos decir que es la que ejecuta el onSubmit del Login ya que aqui dependiendo de que rol 
 *  sea esta te redirigira a la pagina que se le haya dicho dependiendo el rol nuevamente.
 */

const LoginRedirectHandler = async ({
  setSpinnerStatus,
  setError,
  session,
  values,
  router,
}: {
  setSpinnerStatus: (status: boolean) => void;
  setError: (error: string) => void;
  router: AppRouterInstance;
  session: Session | null;
  values: UserLogin;
}) => {
  setSpinnerStatus(true);

  try {
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (response!.error) {
      setSpinnerStatus(false);
      setError("Invalid credentials");
      return;
    }

    if (session?.role === "admin") {
      router.replace("/admin");
    } else if (session?.role === "user") {
      router.replace("/teacher");
    } else {
      router.replace("/admin");
    }
  } catch (error) {
    setSpinnerStatus(false);

    console.log(error);
  }
};

export default LoginRedirectHandler;
