import { NextRequest, NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prisma";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest, res: NextResponse) {
  const { users, currentUser, title } = await req.json();

  if (users.length < 2 || !currentUser || !title) {
    return NextResponse.json({
      error:
        "Vous devez sélectionner au moins 2 personnes et donner un nom au groupe.",
    });
  }

  let myuuid = uuidv4();
  const conversation = await prisma.conversation.create({
    data: {
      //generate uuid for the id
      id: myuuid,
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

//used to remove user from a group because of a next 13 issue --> https://github.com/vercel/next.js/issues/48096
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get("conversationId") || ""; // for ts
  const currentUser = await getCurrentUser();

  if (!conversationId) {
    return NextResponse.json({
      error: "Erreur lors de la suppression du groupe.",
    });
  }

  await prisma.conversation.update({
    where: {
      id: conversationId,
    },
    data: {
      users: {
        //rmv current user from conversation
        disconnect: {
          id: Number(currentUser.id),
        },
      },
    },
  });

  //find conversation to check if there is only 2 user left
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    include: {
      users: true,
    },
  });

  if (!conversation)
    return NextResponse.json({
      error: "Erreur lors de la récupération du groupe.",
    });

  if (conversation.users.length <= 2) {
    await prisma.conversation.delete({
      where: {
        id: conversationId,
      },
    });
  }

  return NextResponse.json({
    success: "Groupe supprimé !",
  });
}
