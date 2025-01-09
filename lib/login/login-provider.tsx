"use client";

/** Este archivo es un "wrapper"  utilizado en el layout de Login esto para decir que todo estara protegido por el Login
 *  y que no se podra acceder a paginas sin un usuario
 */

import { SessionProvider } from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};
