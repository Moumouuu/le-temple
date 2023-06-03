import prisma from "@/app/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { sessionId, currentUser } = req.body;
  const user = currentUser;

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  // Check if the session is paid
  if (session.payment_status === "paid") {
    const user = await prisma.user.update({
      where: {
        email: currentUser.email,
      },
      data: {
        paid: true,
      },
    });
  }
  res.status(200).json({ user });
}
