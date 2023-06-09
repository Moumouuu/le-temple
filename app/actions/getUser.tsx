import prisma from "@/app/libs/prisma";

export default async function getAllUsers(userId: any) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      Badge: true,
      Conversation: true,
      Message: true,
    },
  });

  if (!user) return null;

  return user;
}
