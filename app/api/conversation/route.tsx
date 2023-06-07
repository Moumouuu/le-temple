import prisma from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { title, users } = await req.json();

  if (!users) {
    return NextResponse.json({ error: "Missing fields!" }, { status: 400 });
  }

  const newConversation = await prisma.conversation.create({
    data: {
      title,
      users: {
        connect: users.map((user: any) => ({
          id: user,
        })),
      },
    },
  });

  if (!newConversation) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 400 }
    );
  }

  return NextResponse.json(newConversation);
}
