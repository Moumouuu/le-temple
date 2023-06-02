"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

import UserType from "@/app/types/userType";
import { Toaster, toast } from "react-hot-toast";
import Button from "./Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import useStripeSession from "@/app/hooks/useStripeSession";


interface ButtonOrderProps {
  currentUser: UserType;
}

export const ButtonOrder = ({ currentUser}: ButtonOrderProps) => {
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
  const [loading, setLoading] = useState(false);
  const loginModal = useLoginModal();

  // allow to check if the user is already paid & if the session is paid user are update in db
  useStripeSession({currentUser});

  const item = {
    name: `Précommande Le Temple`,
    price: 30,
    quantity: 1,
    image:
      "https://i.pinimg.com/originals/6f/96/20/6f962015b1ac22ab1900a2dbd7b0a68c.jpg",
    //description : ""
  };

  const createCheckOutSession = async () => {

    if (!currentUser) {
      toast.error("Vous devez être connecté pour précommander");
      loginModal.onOpen();
      return;
    }

    if(currentUser?.paid) {
      toast.error("Vous avez déjà précommandé");
      return;
    }

    setLoading(true);

    const stripe = await stripePromise;

    if(!stripe) {
      toast.error("Une erreur est survenue");
      return;
    }

    const checkoutSession = await axios.post("/api/create-stripe-session", {item: item});

    await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.session.id,
      });
      
  };

  if(currentUser?.paid) {
    return (
      <>
      <Toaster />
      <Button
        label={loading ? "Chargement ..." : "Rentrer dans le Temple" }
        action={() => {} }
        large
      />
    </>
    );
  }

  return (
    <>
      <Toaster />
      <Button
        label={loading ? "Chargement ..." : "Précommander"}
        action={createCheckOutSession}
        large
      />
    </>
  );
};

export default ButtonOrder;
