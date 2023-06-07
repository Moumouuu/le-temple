import prisma from "@/app/libs/prisma";
import { User } from "@prisma/client";

export default async function getAllUsers(currentUser: User) {
  const allUsers = await prisma.user.findMany({
    where: {
      paid: true,
      id: {
        not: currentUser.id,
      },
    },
    include: {
      Badge: true,
    },
  });

  if (!allUsers) return [];

  return allUsers;
}
