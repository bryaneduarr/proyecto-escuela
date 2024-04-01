/** Esta ruta de api nos ayuda para hacer todo el proceso de login del usuario. Tambien en el archivo de authOptions
 *  esta toda la configuracion estandar de NextAuth.
 */

import { authOptions } from "@/lib/login/auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
