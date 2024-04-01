import { NextAuthOptions } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDataBase from "@/lib/mongodb";

/** Este es el archivo de configuracion de NextAuth aqui la mayoria de opciones estan por defecto como lo indica
 *  la documentacion para roles.
 */

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: { label: "User", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const db = await connectToDataBase();

        try {
          const data = await db
            ?.collection("users")
            .findOne({ user: credentials?.user });

          if (!data) {
            db?.close();
            return null;
          }

          const isPasswordCorrect = await compare(
            credentials!.password,
            data.password
          );

          if (!isPasswordCorrect) {
            db?.close();
            return null;
          }

          return {
            id: data._id.toString(),
            user: data.user,
            data: data,
          };
        } catch (error) {
          throw new Error("There was an error validating the credential");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
        token.role = user.data.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (typeof token.user === "object" && token.user !== null) {
        session.user = token.user;
      }
      session.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
