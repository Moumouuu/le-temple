import prisma from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { data, user } = await req.json();

  if (!data.username || !data.description || !user) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const userUpdated = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: data.username,
      description: data.description,
      firstLogin: false,
    },
  });

  if (
    userUpdated.description !== data.description ||
    userUpdated.name !== data.username
  ) {
    return NextResponse.json(
      { error: "Something went wrong during the update." },
      { status: 400 }
    );
  }
  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest, res: NextResponse) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json({ user });
}
