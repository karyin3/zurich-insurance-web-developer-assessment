import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
};

export const getSession = async () => {
  const session = await getServerSession(authConfig);
  return session;
};
