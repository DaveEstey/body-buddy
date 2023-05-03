import  NextAuth  from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../../lib/mongodb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
import prismaDB from "../../../../lib/mongodb";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prismaDB),
    pages: {
        signIn: "/login",
     },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
              session.user.id = token.id
              session.user.name = token.name
              session.user.email = token.email
              session.user.image = token.picture
              console.log("session.user.id: " + session.user.id)
                console.log("session.user.name: " + session.user.name)
                console.log("session.user.email: " + session.user.email)
            console.log("session.user.image: " + session.user.image)
            }
            return session
        },
        async jwt({ token, user }) {
            const dbUser = await prismaDB.users.findFirst({
                where: {
                    email: token.email,
                },
            })

            if (!dbUser) {
                token.id = user.id
                return token
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                image: dbUser.image,
            }
        }
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
