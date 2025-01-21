import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "User name:",
          type: "string",
          placeholder: "your-awesome-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        const user = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/auth/token?number=${credentials?.username}&password=${credentials?.password}`
        );
        const token = user?.data?.token;
        if (token) {
          const userByToken = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE}/auth/userInfo`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (userByToken?.data?.role === "Admin") {
            return {
              ...userByToken?.data,
              token,
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("user", user);
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, user, token }) {
      //@ts-ignore
      session.user = token.user;
      return session;
    },
  },
};
