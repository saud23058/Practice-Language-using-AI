import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DBconnection } from "./db"
import { UserModel } from "@/model/user";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret:process.env.AUTH_GOOGLE_SECRET
  })],
  callbacks: {
    signIn: async({ user }) => {
      await DBconnection();
      const existingUser = await UserModel.findOne({ email: user.email });
      if (!existingUser) {
        const newUser = await UserModel.create({
          email: user.email,
          username: user.name,
          profileImage: user.image,
          language:"en"
        })
        user.id= newUser._id.toString()
      } else {
        user.id= existingUser._id.toString()
      }
      return true
    },
    jwt: ({user,token})=>{
      if (user) {
        token.sub=user.id
      }
      return token
    },
    session: ({ session, token }) => {
      if (token.sub) {
        session.user.id=token.sub
      }
      return session
    }
  },
  secret: process.env.AUTH_SECRET,
})