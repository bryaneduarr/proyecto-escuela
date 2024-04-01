import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

/** La funcion del middleware sirve para que cuando un usuario haga login, este sirva como un mediador
 *  y pueda comparar primeramente que usuario se registrara, dependiendo si es administrador o un
 *  usuario normal. Y en la ultima parte del matcher, se utiliza para restringir las paginas que no
 *  sean accesibles por cualquiera que no tenga un usuario de administrador o maestro.
 */

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const path = request.nextUrl.pathname;

  if (token?.role === "admin" && path.startsWith("/admin")) {
    return NextResponse.next();
  } else if (token?.role === "user" && path.startsWith("/teacher")) {
    return NextResponse.next();
  } else if (token?.role === "user" && path.startsWith("/admin")) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher`
    );
  } else if (token?.role === "admin" && path.startsWith("/teacher")) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin`);
  } else {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/teacher/:path*"],
};
