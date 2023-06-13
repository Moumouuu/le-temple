import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest, res: NextResponse) {
  const { users, currentUser, title } = await req.json();

  if (users.length < 2 || !currentUser || !title) {
    return NextResponse.json({
      error:
        "Vous devez sélectionner au moins 2 personnes et donner un nom au groupe.",
    });
  }

  const conversation = await prisma.conversation.create({
    data: {
      title,
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

//used to delete a group because of a next 13 issue --> https://github.com/vercel/next.js/issues/48096
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get("conversationId") || ""; // for ts

  if (!conversationId) {
    return NextResponse.json({
      error: "Erreur lors de la suppression du groupe.",
    });
  }

  await prisma.conversation.delete({
    where: {
      id: Number(conversationId),
    },
  });

  return NextResponse.json({
    success: "Groupe supprimé !",
  });
}
