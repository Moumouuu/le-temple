import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prisma";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session) return null;

    const currentUser = await prisma.user.upsert({
      where: {
        email: session?.user?.email as string,
      },
      update: {},
      create: {
        email: session?.user?.email as string,
        name: session?.user?.name as string,
        image: session?.user?.image as string,
      },
    });

    if (!currentUser) return null;
    return currentUser;
  } catch (error: any) {
    return null;
  }
}
