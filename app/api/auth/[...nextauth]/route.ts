import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prismaClient";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            const userDb = async () => {
                try {
                    return await prisma.user.findFirst({
                        where: {
                            email: token.email,
                        },
                    });
                } catch (error) {
                    console.error(error);
                } finally {
                    await prisma.$disconnect();
                }
            };
            const dbUser = await userDb();
            if (!dbUser) {
                return null;
            }
            token.id = dbUser.id;
            token.name = dbUser.name;
            token.email = dbUser.email;
            token.image = dbUser.image;
            token.role = dbUser.role;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.name = token.name as string;
            session.user.email = token.email as string;
            session.user.image = token.image as string
            session.user.role = token.role as string;
            return session;
        },
    },
    session: {
        strategy: "jwt"
    },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
