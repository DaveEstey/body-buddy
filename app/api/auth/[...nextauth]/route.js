import  NextAuth  from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
     adapter: [
        MongoDBAdapter(clientPromise),
        PrismaAdapter(prisma),
    ],
     pages: {
        signIn: "/signin",
     }
    }

    const handler = NextAuth(authOptions);

    export {handler as GET, handler as POST};
