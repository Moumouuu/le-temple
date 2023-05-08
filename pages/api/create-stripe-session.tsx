const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req: any, res: any) {
  const { item } = req.body;

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? process.env.DEV_URL
      : process.env.PROD_URL;

  const transformedItem = {
    price_data: {
      currency: "eur",
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
