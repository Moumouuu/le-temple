import prisma from "@/app/libs/prisma";
import { pusherServer } from "@/app/libs/pusher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { message, conversationId, userId } = await req.json();

  if (!message || !conversationId || !userId)
    return NextResponse.json({ error: "Missing fields!" }, { status: 400 });

  const newMessage = await prisma.message.create({
    data: {
      text: message,
      conversationId,
      userId,
      createdAt: new Date().toISOString(),
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    //get messages array from user
    include: {
      Message: true,
    },
  });

  if (!newMessage || !user)
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 400 }
    );

  await pusherServer.trigger(conversationId.toString(), "new-message", {
    message: {
      ...newMessage,
      user,
    },
  });

  let badge = null;
  if (
    user.Message.length === 5 ||
    user.Message.length === 10 ||
    user.Message.length === 25 ||
    user.Message.length === 50 ||
    user.Message.length === 100 ||
    user.Message.length === 500 ||
    user.Message.length === 1000
  ) {
    //todo : create badge for user
    badge = {
      name: "Badge de message",
      description: `Vous avez totalisé un total de ${user.Message.length} messages`,
      imageUrl: `badge-message-${user.Message.length}.png`,
    };
  }

  return NextResponse.json({ message: newMessage, badge });
}
