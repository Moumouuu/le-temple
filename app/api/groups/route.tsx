import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest, res: NextResponse) {
  const { users, currentUser } = await req.json();

  if (users.length < 2 || !currentUser) {
    return NextResponse.json({
      error: "Vous devez sélectionner au moins 2 personnes.",
    });
  }

  const conversation = await prisma.conversation.create({
    data: {
      // title with all name of the users and the current user
      title: `${currentUser.name}, 
      ${users.map((user: any) => `${user.name}`).join(", ")}`,

      users: {
        connect: [
          { id: currentUser.id },
          ...users.map((user: any) => ({ id: user.id })),
        ],
      },
    },
  });

  if (!conversation) {
    return NextResponse.json({
      error: "Erreur lors de la création du groupe.",
    });
  }

  return NextResponse.json({
    success: "Groupe créé !",
    conversation: conversation,
  });
}
