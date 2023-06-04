import prisma from "@/app/libs/prisma";
import { pusherServer } from "@/app/libs/pusher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { message, conversationId, userId } = await req.json();

  if (!message || !conversationId || !userId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

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
  });

  if (!newMessage || !user)
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 400 }
    );

  pusherServer.trigger(conversationId.toString(), "new-message", {
    message: {
      ...newMessage,
      user,
    },
  });

  return NextResponse.json({ message: newMessage });
}
