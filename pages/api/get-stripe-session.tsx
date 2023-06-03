import prisma from "@/app/libs/prisma";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function GetStripeSession(req: any, res: any) {
  const { sessionId, currentUser } = req.body;

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
    return res.json({ user: user });
  }

  return res.json({ currentUser });
}

export default GetStripeSession;
