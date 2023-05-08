"use client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

import UserType from "@/app/types/userType";
import { Toaster, toast } from "react-hot-toast";
import Button from "./Button";
import useLoginModal from "@/app/hooks/useLoginModal";

interface ButtonOrderProps {
  currentUser: UserType;
}

export const ButtonOrder = async ({ currentUser }: ButtonOrderProps) => {
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
  const [loading, setLoading] = useState(false);
  
  const loginModal = useLoginModal();

  const item = {
    name: `Précommande Le Temple`,
    price: 30,
    quantity: 1,
    image:
      "https://i.pinimg.com/originals/6f/96/20/6f962015b1ac22ab1900a2dbd7b0a68c.jpg",
    //description : ""
  };

  const createCheckOutSession = async () => {
    setLoading(true);

    if (!currentUser) {
      toast.error("Vous devez être connecté pour précommander");
      loginModal.onOpen();
      return;
    }

    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    console.log(result);
    if (result?.error) {
      alert(result.error.message);
    }
  };
  

  return (
    <>
      <Toaster />
      <Button
        label={loading ? "Loading..." : "Précommander"}
        action={() => {}}
        large
      />
    </>
  );
};
export default ButtonOrder;
