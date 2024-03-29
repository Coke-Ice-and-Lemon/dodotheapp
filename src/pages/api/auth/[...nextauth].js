import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    //   pages: {
    //     signIn: "/",
    //   },
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
